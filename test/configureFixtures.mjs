import fs from 'fs';
import path from 'path';
import { jest } from '@jest/globals';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixturesPath = path.resolve(__dirname, 'fixtures');

const functionFixtureMap = {
  getLocalIpAddressesContent: '3.6.0.6_cgi_dns_server.js',
  getPublicIpAddressContent: '3.6.0.6_cgi_status.js',
  getRouterStatusContent: '3.6.0.6_cgi_status.js',
  getPortForwardRulesContent: '3.6.0.6_cgi_firewall_port_forward.js',
};

export default function configureFixtures() {
  const fixtureCache = {};
  
  Object.entries(functionFixtureMap).forEach(([funcName, fileName]) => {
    try {
      fixtureCache[funcName] = fs.readFileSync(path.join(fixturesPath, fileName), 'utf8');
    } catch (e) {
      console.error(`Failed to load fixture for ${funcName}:`, e);
      throw e; 
    }
  });

  const mockedExports = Object.keys(functionFixtureMap).reduce((acc, funcName) => {
    acc[funcName] = jest.fn(async (sysauthCookie) => {
        if (!sysauthCookie) throw new Error("Missing Cookie");
        
        return fixtureCache[funcName]; 
    });
    return acc;
  }, {});

  jest.unstable_mockModule('../src/fetcher.mjs', () => ({
    default: mockedExports,
  }));
  
  return mockedExports;
}