
addROD("wan_phy_status", [['ETHWAN','Up','0000:0000:0000:0000'],['MOCAWAN','Down','0000:0000:0000:0000']]);
addROD("get_wan4_ip", "123.45.678.90");
addROD("cgi_wan_mac", "00:00:00:00:00:00");
addROD("cgi_wan_ip6_addr", "0000:0000:0000:0000::1");
addROD("cgi_wan_mac", "00:00:00:00:00:00");
addROD("uptime", "2007919");
addROD("nat_count", "243");
addROD("wan_state", "ETHWAN");
addROD("led_info", "Normal operation");

addROD("hardware_model", 'G3100');
addROD("router_version", '3.6.0.6');
addROD("hardware_version", '1103');
addROD("serial_number", 'G000000000000000');
addCfg("auto_refresh_monitor", "redacted-base64", "0");

//backhaul
addCfg("bh_security_mode", "redacted-base64", "wpa2");
addROD("channel_width5G", 80);
addROD("curr_channel5G", 52);

//IPv4
addCfg("wan_disable", "redacted-base64", "0");
addCfg("wan_proto", "redacted-base64", "dhcp");
addCfg("wan_dns_enable", "redacted-base64", "1");
addCfg("wan_ip4_dns", "redacted-base64", "71.243.0.12 71.250.0.12");
addCfg("dns_auto_enable", "redacted-base64", "0");
addCfg("wan_static_dns", "redacted-base64", "1.1.1.1|8.8.8.8");
addCfg("lan_ip", "redacted-base64", "192.168.1.1");
addCfg("lan_mask", "redacted-base64", "255.255.255.0");

//  DHCP
//TMP
addCfg("wan_dhcp4_addr", "redacted-base64", "123.45.678.90");
addCfg("wan_dhcp4_mask", "redacted-base64", "255.255.255.0");
addCfg("wan_dhcp4_gateway", "redacted-base64", "123.45.678.1");

//CONFIG
addCfg("uci_wan_dhcp4_addr", "redacted-base64", "");
addCfg("uci_wan_dhcp4_mask", "redacted-base64", "");
addCfg("uci_wan_dhcp4_gateway", "redacted-base64", "");

//IPv6
addCfg("ip6lla_wan", "redacted-base64", "0000:0000:0000:0000");
addCfg("ip6wan_DnsAuto", "redacted-base64", "1");
addCfg("wan6_proto", "redacted-base64", "dhcpv6");
addCfg("ip6wan_UserdefinedWanPrefix", "redacted-base64", "0");
addCfg("wan_ip6_auto_dnslist", "redacted-base64", "");
addCfg("ip6eb_all", "redacted-base64", "1");

addCfg("ip6wan_staticAddr", "redacted-base64", "0");
addCfg("ip6wan_staticGw", "redacted-base64", "0");

//TMP_IPv6
addCfg("ip6wan_addr", "redacted-base64", "0000:0000:0000:0000::1");
addCfg("ip6wan_prefix", "redacted-base64", "0000:0000:0000:0000::");
addCfg("ip6wan_prefixlen", "redacted-base64", "56");
addCfg("wan_ip6_gateway", "redacted-base64", "0000:0000:0000:0000");
addCfg("wan_ip6_dnslist", "redacted-base64", "0");

// Modem
addROD("wwan_status_list", ['', '', '', '', '', '', '', '', '']);
