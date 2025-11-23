import fs from 'fs';

import { jest } from '@jest/globals';

export default function configureFixtures() {
	const dnsServer = fs.readFileSync('./test/fixtures/3.6.0.6_cgi_dns_server.js', 'utf8');
	const status = fs.readFileSync('./test/fixtures/3.6.0.6_cgi_status.js', 'utf8');

	jest.unstable_mockModule('../src/fetcher.mjs', () => ({
		default: {
			getLocalIpAddressesContent: async (sysauthCookie) => { expect(sysauthCookie).toBeDefined(); return dnsServer },
			getRouterStatusContent: async (sysauthCookie) => { expect(sysauthCookie).toBeDefined(); return status },
		},
	}));
}