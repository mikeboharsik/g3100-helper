import { expect } from '@jest/globals';

import configureFixtures from './configureFixtures.mjs';
configureFixtures();

const { getPortForwardRules } = await import('../index.mjs');

describe('getLocalIpAddresses', () => {
	test('contains expected properties', async () => {
		const expectedResult = [
      {
        destinationPort: 1234987,
        enabled: true,
        forwardingId: 11,
        name: 'REDACTED',
        portRuleId: 47,
        sourcePort: 13372
      },
      {
        destinationPort: 4444,
        enabled: true,
        forwardingId: 12,
        name: 'REDACTED',
        portRuleId: 46,
        sourcePort: 13373
      },
      {
        destinationPort: 8080,
        enabled: true,
        forwardingId: 13,
        name: 'REDACTED',
        portRuleId: 51,
        sourcePort: 55555
      }
    ];
		const portForwardRules = await getPortForwardRules();
		expect(portForwardRules).toMatchObject(expectedResult);
	});
});