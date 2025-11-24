import { expect } from '@jest/globals';

import configureFixtures from './configureFixtures.mjs';
configureFixtures();

const { getRouterStatus } = await import('../index.mjs');

describe('getRouterStatus', () => {
	test('contains expected properties', async () => {
		const expectedResult = {
			firmwareVersion: '3.6.0.6',
			hardwareVersion: '1103',
			lanIpAddress: '192.168.1.1',
			macAddress: '00:00:00:00:00:00',
			model: 'G3100',
			publicIpV4Address: '123.45.678.90',
			publicIpV6Address: '0000:0000:0000:0000::1',
			serialNumber: 'G000000000000000',
			uptime: 2007919,
			wanIpV4DnsServers: [
				'71.243.0.12',
				'71.250.0.12',
			],
			wanStaticDnsServers: [
				'1.1.1.1',
				'8.8.8.8'
			]
		};
		const routerStatus = await getRouterStatus();
		expect(routerStatus).toMatchObject(expectedResult);
	}, 10000);
});