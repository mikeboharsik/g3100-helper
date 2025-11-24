export function getLocalIpAddressesFromTextResponse(text) {
	try {
		const trimmed = text.trim();
		let match = trimmed.match(/^.*get_dhcp_hosts.*\n/)[0].match(/\[.*\]/)[0];
		let sorted = eval(match).toSorted(([, a], [, b]) => a > b ? 1 : a < b ? -1 : 0);
		let result = sorted.reduce((acc, cur) => { acc[cur[0]] = cur[1]; return acc; }, {});
		return result;
	} catch (e) {
		console.log('Failed to match against local IP addresses', e, text);
	}
}

export function getPublicIpAddressFromTextResponse(text) {
	try {
		return trimmed.match(/get_wan4_ip.*\"(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\"/)[1];
	} catch (e) {
		console.log('Failed to match against public IP address', e, text);
	}
}

export function getRouterStatusFromTextResponse(text) {
	try {
		const getValue = (text, name, transformer) => {
			const regex = new RegExp(`["']${name}["'],( ["'].*?["'],)* ["'](.*)["']`);
			const match = text.match(regex)[2];
			return transformer ? transformer(match) : match;
		};
		return {
			firmwareVersion: getValue(text, 'router_version'),
			hardwareVersion: getValue(text, 'hardware_version'),
			lanIpAddress: getValue(text, 'lan_ip'),
			macAddress: getValue(text, 'cgi_wan_mac'),
			model: getValue(text, 'hardware_model'),
			publicIpV4Address: getValue(text, 'get_wan4_ip'),
			publicIpV6Address: getValue(text, 'cgi_wan_ip6_addr'),
			serialNumber: getValue(text, 'serial_number'),
			uptime: getValue(text, 'uptime', e => parseInt(e)),
			wanIpV4DnsServers: getValue(text, 'wan_ip4_dns', e => e.split(' ')),
			wanStaticDnsServers: getValue(text, 'wan_static_dns', e => e.split('|')),
		};
	} catch (e) {
		console.log('Failed to match against router status fields', e, text);
	}
}

export function getPortForwardRulesFromTextResponse(text) {
	try {
		const portForwardings = JSON.parse(text.match(/"portforwardings", ({.*})/)[1]).portforwardings;
		const portRules = JSON.parse(text.match(/"portrules", ({.*})/)[1]).portrules;

		const transformed = portForwardings.map(p => {
			p.portRule = portRules.find(r => r.id === p.port_rule_id);
			return {
				destinationPort: p.forward_port,
				enabled: p.enable === 1,
				forwardingId: p.id,
				name: p.name,
				portRuleId: p.port_rule_id,
				sourcePort: parseInt(p.portRule.ports[0].dest_port),
			};
		});

		return transformed;
	} catch (e) {
		console.log('Failed to match against DHCP fields', e, text);
	}
}