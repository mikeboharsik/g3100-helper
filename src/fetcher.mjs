import { baseUri } from './consts.mjs';

const dnsServerUri = `${baseUri}/cgi/cgi_dns_server.js`;
const statusUri = `${baseUri}/cgi/cgi_status.js`;
const portForwardUri = `${baseUri}/cgi/cgi_firewall_port_forward.js`;

export default class Fetcher {
	static async getLocalIpAddressesContent(sysauthCookie) {
		return await fetch(dnsServerUri, { headers: { Cookie: `sysauth=${sysauthCookie}` }}).then(r => r.text());
	}

	static async getPublicIpAddressContent(sysauthCookie) {
		return await this.getRouterStatusContent(sysauthCookie);
	}

	static async getRouterStatusContent (sysauthCookie) {
		return await fetch(statusUri, { headers: { Cookie: `sysauth=${sysauthCookie}` }}).then(r => r.text());
	}

	static async getPortForwardRulesContent (sysauthCookie) {
		return await fetch(portForwardUri, { headers: { Cookie: `sysauth=${sysauthCookie}` }}).then(r => r.text());
	}
}