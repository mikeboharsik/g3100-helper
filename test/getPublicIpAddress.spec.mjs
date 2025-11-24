import { expect } from '@jest/globals';

import configureFixtures from './configureFixtures.mjs';
const fixtures = configureFixtures();

const { getPublicIpAddress } = await import('../index.mjs');

describe('getPublicIpAddress', () => {
	test('contains expected properties', async () => {
		const expectedResult = '123.45.678.90';
		const publicIpAddress = await getPublicIpAddress();
		expect(publicIpAddress).toBe(expectedResult);
	}, 10000);
});