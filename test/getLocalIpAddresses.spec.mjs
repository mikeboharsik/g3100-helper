import { expect } from '@jest/globals';

import configureFixtures from './configureFixtures.mjs';
const fixtures = configureFixtures();

const { getLocalIpAddresses } = await import('../index.mjs');

describe('getLocalIpAddresses', () => {
	test('contains expected properties', async () => {
		const expectedResult = {
			HOST_1: '192.168.1.158',
			HOST_10: '192.168.1.151',
			HOST_2: '192.168.1.195',
			HOST_3: '192.168.1.162',
			HOST_4: '192.168.1.155',
			HOST_5: '192.168.1.165',
			HOST_6: '192.168.1.154',
			HOST_7: '192.168.1.159',
			HOST_8: '192.168.1.193',
			HOST_9: '192.168.1.178',
		};
		const localIpAddresses = await getLocalIpAddresses();
		expect(localIpAddresses).toMatchObject(expectedResult);
	}, 10000);
});