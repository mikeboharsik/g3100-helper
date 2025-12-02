import { expect } from '@jest/globals';

import configureFixtures from './configureFixtures.mjs';
const fixtures = configureFixtures();

const { getLocalIpAddresses } = await import('../index.mjs');

describe('getLocalIpAddresses', () => {
	test('contains expected properties', async () => {
		const expectedResult = {
			REDACTED_12: '192.168.1.154',
			REDACTED_16: '192.168.1.159',
			REDACTED_17: '192.168.1.178',
			REDACTED_19: '192.168.1.193',
			REDACTED_21: '192.168.1.153',
			REDACTED_25: '192.168.1.195',
			REDACTED_26: '192.168.1.162',
			REDACTED_28: '192.168.1.152',
			REDACTED_3: '192.168.1.151',
			REDACTED_33: '192.168.1.165',
			REDACTED_34: '192.168.1.155',
			REDACTED_39: '192.168.1.158',
		};
		const localIpAddresses = await getLocalIpAddresses();
		expect(localIpAddresses).toMatchObject(expectedResult);
	}, 10000);
});