import dotenv from 'dotenv';
import path from 'path';

import Fetcher from './src/fetcher.mjs';
import * as parsers from './src/contentParsers.mjs';
import getWrappedFunction from './src/getWrappedFunction.mjs';

dotenv.config({
	quiet: true,
	path: [
		path.resolve('.env'),
		path.resolve(import.meta.dirname, '../..', '.env'),
		path.resolve(import.meta.dirname + '/.env')],
});

export const getLocalIpAddresses = getWrappedFunction(async (c) => parsers.getLocalIpAddressesFromTextResponse(await Fetcher.getLocalIpAddressesContent(c)));
export const getPublicIpAddress = getWrappedFunction(async (c) => parsers.getPublicIpAddressFromTextResponse(await Fetcher.getPublicIpAddressContent(c)));
export const getRouterStatus = getWrappedFunction(async (c) => parsers.getRouterStatusFromTextResponse(await Fetcher.getRouterStatusContent(c)));
export const getPortForwardRules = getWrappedFunction(async (c) => parsers.getPortForwardRulesFromTextResponse(await Fetcher.getPortForwardRulesContent(c)));