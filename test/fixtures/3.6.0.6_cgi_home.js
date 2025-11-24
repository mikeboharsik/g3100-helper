
// Wi-Fi
addCfg("Wireless_enable24G", "redacted_base64", "1");
addCfg("Wireless_enable5G", "redacted_base64", "1");
addCfg("Wireless_enable5G_H", "redacted_base64", "1");
addCfg("wl_enable24G", "redacted_base64", "0");
addCfg("wl_enable5G", "redacted_base64", "1");
addCfg("wl_enable5G_H", "redacted_base64", "1");
addCfg("wl_ssid24G", "redacted_base64", "REDACTED_24G_SSID");
addCfg("wl_ssid5G", "redacted_base64", "REDACTED_5G_SSID");
addCfg("wl_ssid5G_H", "redacted_base64", "REDACTED_5G_H_SSID");
addCfg("sharedkey24G", "redacted_base64", "REDACTED_24G_PASSWORD");
addCfg("sharedkey5G", "redacted_base64", "REDACTED_5G_PASSWORD");
addCfg("sharedkey5G_H", "redacted_base64", "REDACTED_5G_H_PASSWORD");
addCfg("security_type24G", "redacted_base64", "wpa2");
addCfg("security_type5G", "redacted_base64", "wpa2");
addCfg("security_type5G_H", "redacted_base64", "wpa2");
addCfg("triband_mode", "", "2");
addCfg("mesh_enable", "redacted_base64", "1");
addROD("wifi_bh", '0');

//WAN
addROD("wan_status", "ETHWAN");
addROD("phy_status", "['ETHWAN','Up','fe80::baf8:53ff:fe0a:24b0'],['MOCAWAN','Down','fe80::baf8:53ff:fe0a:24b0']");
addCfg("wan_disable", "redacted_base64", "0");

addROD("loginfail", "0");