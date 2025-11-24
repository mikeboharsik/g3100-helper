import fs from 'fs';

import { jest } from '@jest/globals';

const fixturesPath = './test/fixtures';
const functionFixtureMap = {
	'getLocalIpAddressesContent': '3.6.0.6_cgi_dns_server.js',
	'getRouterStatusContent': '3.6.0.6_cgi_status.js',
};

export default function configureFixtures() {
	const mockedExports = Object.entries(functionFixtureMap)
		.reduce((acc, [mockedFunctionName, fixtureFileName]) => {
			acc[mockedFunctionName] = async (sysauthCookie) => {
				expect(sysauthCookie).toBeDefined();
				return fs.readFileSync(`${fixturesPath}/${fixtureFileName}`, 'utf8');
			}
			return acc;
		}, {});

	jest.unstable_mockModule('../src/fetcher.mjs', () => ({
		default: mockedExports,
	}));
}