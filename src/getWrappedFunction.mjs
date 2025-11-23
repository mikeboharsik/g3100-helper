import puppeteer from 'puppeteer';

import { baseUri } from './consts.mjs';

const loginUri = `${baseUri}/login.cgi`;
const logoutUri = `${baseUri}/logout.cgi`;

function getEnvAppropriatePuppeteerSettings() {
	if (['/bash', '/sh'].some(e => process.env.SHELL?.match(e))) {
		return {
			// this was necessary to get it running on RPi
			// sudo apt install chromium-browser
			executablePath: '/usr/bin/chromium-browser',
			args: [
				'--ignore-certificate-errors',
				'--no-sandbox'
			]
		};
	}

	return {};
}

function getOriginalSettings() {
	const emitWarning = process.emitWarning;
	const tlsSetting = process.env.NODE_TLS_REJECT_UNAUTHORIZED;

	process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
	process.emitWarning = () => {};

	return { emitWarning, tlsSetting };
}

function restoreOriginalSettings(settings) {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = settings.tlsSetting;
	process.emitWarning = settings.emitWarning;
}

function verifyExpectedEnvVars() {
	if (!process.env.G3100_PASSWORD) {
		throw new Error(`Environment variable G3100_PASSWORD is required`);
	}
}

async function login(page) {
	await page.goto(baseUri);
	await page.locator('.vz-input').fill(process.env.G3100_PASSWORD);
	await page.locator('.btn-primary').click();

	const loginResponse = await page.waitForResponse(
		response =>
			response.url() === loginUri && response.request().method() === 'POST',
	);

	if (loginResponse.status() !== 302) {
		throw new Error('Failed to login');
	}
}

async function logout(page) {
	await page.reload();
	await page.locator('#userIconArrow').click();
	await page.locator("div[aria-label='Sign Out']").click();

	const logoutResponse = await page.waitForResponse(
		response =>
			response.url() === logoutUri && response.request().method() === 'POST',
	);

	if (logoutResponse.status() !== 302) {
		throw new Error('Failed to logout');
	}
}

export default function getWrappedFunction(contentFunction) {
	return async function genericFunction() {
		verifyExpectedEnvVars();

		const originalSettings = getOriginalSettings();

		const launchSettings = getEnvAppropriatePuppeteerSettings();
		const browser = await puppeteer.launch(launchSettings);

		const page = await browser.newPage();
		await page.setViewport({ width: 1280, height: 720 });
		page.setDefaultTimeout(10000);

		let result;
		try {
			await login(page);

			const sysauthCookie = (await browser.cookies()).find(e => e.name === 'sysauth').value;
			result = await contentFunction(sysauthCookie);
		} catch (e) {
			console.error('Failed to load content', e);
		} finally {
			await logout(page);
			await browser.close();

			restoreOriginalSettings(originalSettings);
		}
		return result;
	}
}