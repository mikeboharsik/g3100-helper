
addCfg("lan_mask0", "redacted_base64", "255.255.255.0");
addCfg("ip6lan0_guaPrefix", "redacted_base64", "0000:0000:0000:0000::");
addCfg("ip6lan0_guaPrefixLen", "redacted_base64", "64");

//DNS
addCfg("lan_ip", "redacted_base64", "192.168.1.1");
addCfg("lan1_ip", "redacted_base64", "192.168.200.1");


addROD("parentalrules", { "parentalrules": [ ] });
addROD("portforwardings", { "portforwardings": [ { "id": 11, "enable": 1, "name": "REDACTED", "privateIP": "192.168.1.166", "port_rule_id": 47, "forward_port": 6666, "schedule_rule_id": 0, "snat_enable": -1, "snat_id": -1 }, { "id": 12, "enable": 1, "name": "REDACTED_RULE", "privateIP": "192.168.1.163", "port_rule_id": 46, "forward_port": 13671, "schedule_rule_id": 0, "snat_enable": -1, "snat_id": -1 }, { "id": 13, "enable": 1, "name": "REDACTED_RULE", "privateIP": "192.168.1.165", "port_rule_id": 51, "forward_port": 12312, "schedule_rule_id": 0, "snat_enable": -1, "snat_id": -1 } ] });
// port rule (for ACL, port forwarding, static NAT)
addROD("portrules", { "portrules": [ { "id": 1, "name": "FTP", "description": "File Transfer", "used": 0, "ports": [ { "id": 1, "type": 1, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "21", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 4, "name": "IMAP", "description": "Messaging Server", "used": 0, "ports": [ { "id": 4, "type": 1, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "143", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 5, "name": "L2TP", "description": "Layer Two Tunneling Protocol", "used": 0, "ports": [ { "id": 5, "type": 2, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "1701", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 6, "name": "Ping", "description": "ICMP Echo Request", "used": 0, "ports": [ { "id": 6, "type": 3, "extype": 0, "source_type": -1, "exsource_type": 0, "source_port": "", "dest_type": -1, "exdest_type": 0, "dest_port": "", "field1": "8\/0", "field2": 0, "field3": 0 } ] }, { "id": 7, "name": "POP3", "description": "Incoming Mail", "used": 0, "ports": [ { "id": 7, "type": 1, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "110", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 8, "name": "SMTP", "description": "Outgoing Mail", "used": 0, "ports": [ { "id": 8, "type": 1, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "25", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 9, "name": "SNMP", "description": "Simple Network Management Protocol", "used": 0, "ports": [ { "id": 9, "type": 2, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "161", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 10, "name": "Telnet", "description": "Remote Connection", "used": 0, "ports": [ { "id": 10, "type": 1, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "23", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 11, "name": "TFTP", "description": "Trivial File Transfer Protocol", "used": 0, "ports": [ { "id": 11, "type": 2, "extype": 0, "source_type": 2, "exsource_type": 0, "source_port": "1024:65535", "dest_type": 1, "exdest_type": 0, "dest_port": "69", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 12, "name": "Traceroute", "description": "Route Tracking Utility", "used": 0, "ports": [ { "id": 12, "type": 2, "extype": 0, "source_type": 2, "exsource_type": 0, "source_port": "32769:65535", "dest_type": 2, "exdest_type": 0, "dest_port": "33434:33523", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 14, "name": "", "description": "", "used": 1, "ports": [ { "id": 14, "type": 8, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "5001", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 46, "name": "", "description": "", "used": 1, "ports": [ { "id": 46, "type": 8, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "13373", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 47, "name": "", "description": "", "used": 1, "ports": [ { "id": 47, "type": 8, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "13372", "field1": "", "field2": 0, "field3": 0 } ] }, { "id": 51, "name": "", "description": "", "used": 1, "ports": [ { "id": 51, "type": 8, "extype": 0, "source_type": 0, "exsource_type": 0, "source_port": "", "dest_type": 1, "exdest_type": 0, "dest_port": "55555", "field1": "", "field2": 0, "field3": 0 } ] } ] });
addROD("dump_dhcp_leases", [ ['REDACTED','192.168.1.158','EC:B5:FA:13:DA:91','45532'],['REDACTED','192.168.1.152','8C:AE:4C:DD:B3:B6','60581'],['','192.168.1.153','68:37:E9:9F:60:50','60808'],['REDACTED','192.168.1.193','42:F4:29:CD:5D:07','65070'],['REDACTED','192.168.1.159','2C:F0:5D:67:85:BE','65853'],['REDACTED','192.168.1.151','00:11:32:E9:0F:42','66975'],['REDACTED','192.168.1.155','DE:7F:1D:71:52:73','68502'],['REDACTED','192.168.1.165','DC:A6:32:24:E1:07','71466'],['REDACTED','192.168.1.178','2C:F0:5D:96:5B:4B','73240'],['REDACTED','192.168.1.154','24:FB:E3:BC:27:3C','73468'],['REDACTED','192.168.1.195','84:0D:8E:4B:A7:A8','81827'],['REDACTED','192.168.1.162','84:0D:8E:4B:CE:5B','82012']] );
// v6 dns
addCfg("lan_gla", "redacted_base64", "0000:0000:0000:0000::1");
addCfg("wan_ip6_auto_dnslist", "redacted_base64", "");
addCfg("wan_ip6_dnslist", "redacted_base64", "0");
addCfg("ip6wan_DnsAuto", "redacted_base64", "1");


addCfg("static_mac_0", "redacted_base64", "");
addCfg("static_mac_1", "redacted_base64", "");
addCfg("static_mac_2", "redacted_base64", "");
addCfg("static_mac_3", "redacted_base64", "");
addCfg("static_mac_4", "redacted_base64", "");
addCfg("static_mac_5", "redacted_base64", "");
addCfg("static_mac_6", "redacted_base64", "");
addCfg("static_mac_7", "redacted_base64", "");
addCfg("static_mac_8", "redacted_base64", "");
addCfg("static_mac_9", "redacted_base64", "");
addCfg("static_mac_10", "redacted_base64", "");
addCfg("static_mac_11", "redacted_base64", "");
addCfg("static_mac_12", "redacted_base64", "");
addCfg("static_mac_13", "redacted_base64", "");
addCfg("static_mac_14", "redacted_base64", "");
addCfg("static_mac_15", "redacted_base64", "");
addCfg("static_mac_16", "redacted_base64", "");
addCfg("static_mac_17", "redacted_base64", "");
addCfg("static_mac_18", "redacted_base64", "");
addCfg("static_mac_19", "redacted_base64", "");
addCfg("static_mac_20", "redacted_base64", "");
addCfg("static_mac_21", "redacted_base64", "");
addCfg("static_mac_22", "redacted_base64", "");
addCfg("static_mac_23", "redacted_base64", "");
addCfg("static_mac_24", "redacted_base64", "");
addCfg("static_mac_25", "redacted_base64", "");
addCfg("static_mac_26", "redacted_base64", "");
addCfg("static_mac_27", "redacted_base64", "");
addCfg("static_mac_28", "redacted_base64", "");
addCfg("static_mac_29", "redacted_base64", "");
addCfg("static_mac_30", "redacted_base64", "");
addCfg("static_mac_31", "redacted_base64", "");
addCfg("static_mac_32", "redacted_base64", "");
addCfg("static_mac_33", "redacted_base64", "");
addCfg("static_mac_34", "redacted_base64", "");
addCfg("static_mac_35", "redacted_base64", "");
addCfg("static_mac_36", "redacted_base64", "");
addCfg("static_mac_37", "redacted_base64", "");
addCfg("static_mac_38", "redacted_base64", "");
addCfg("static_mac_39", "redacted_base64", "");
addCfg("static_mac_40", "redacted_base64", "");
addCfg("static_mac_41", "redacted_base64", "");
addCfg("static_mac_42", "redacted_base64", "");
addCfg("static_mac_43", "redacted_base64", "");
addCfg("static_mac_44", "redacted_base64", "");
addCfg("static_mac_45", "redacted_base64", "");
addCfg("static_mac_46", "redacted_base64", "");
addCfg("static_mac_47", "redacted_base64", "");
addCfg("static_mac_48", "redacted_base64", "");
addCfg("static_mac_49", "redacted_base64", "");
addCfg("static_mac_50", "redacted_base64", "");
addCfg("static_mac_51", "redacted_base64", "");
addCfg("static_mac_52", "redacted_base64", "");
addCfg("static_mac_53", "redacted_base64", "");
addCfg("static_mac_54", "redacted_base64", "");
addCfg("static_mac_55", "redacted_base64", "");
addCfg("static_mac_56", "redacted_base64", "");
addCfg("static_mac_57", "redacted_base64", "");
addCfg("static_mac_58", "redacted_base64", "");
addCfg("static_mac_59", "redacted_base64", "");
addCfg("static_mac_60", "redacted_base64", "");
addCfg("static_mac_61", "redacted_base64", "");
addCfg("static_mac_62", "redacted_base64", "");
addCfg("static_mac_63", "redacted_base64", "");
addCfg("static_mac_64", "redacted_base64", "");
addCfg("static_mac_65", "redacted_base64", "");
addCfg("static_mac_66", "redacted_base64", "");
addCfg("static_mac_67", "redacted_base64", "");
addCfg("static_mac_68", "redacted_base64", "");
addCfg("static_mac_69", "redacted_base64", "");
addCfg("static_mac_70", "redacted_base64", "");
addCfg("static_mac_71", "redacted_base64", "");
addCfg("static_mac_72", "redacted_base64", "");
addCfg("static_mac_73", "redacted_base64", "");
addCfg("static_mac_74", "redacted_base64", "");
addCfg("static_mac_75", "redacted_base64", "");
addCfg("static_mac_76", "redacted_base64", "");
addCfg("static_mac_77", "redacted_base64", "");
addCfg("static_mac_78", "redacted_base64", "");
addCfg("static_mac_79", "redacted_base64", "");
addCfg("static_mac_80", "redacted_base64", "");
addCfg("static_mac_81", "redacted_base64", "");
addCfg("static_mac_82", "redacted_base64", "");
addCfg("static_mac_83", "redacted_base64", "");
addCfg("static_mac_84", "redacted_base64", "");
addCfg("static_mac_85", "redacted_base64", "");
addCfg("static_mac_86", "redacted_base64", "");
addCfg("static_mac_87", "redacted_base64", "");
addCfg("static_mac_88", "redacted_base64", "");
addCfg("static_mac_89", "redacted_base64", "");
addCfg("static_mac_90", "redacted_base64", "");
addCfg("static_mac_91", "redacted_base64", "");
addCfg("static_mac_92", "redacted_base64", "");
addCfg("static_mac_93", "redacted_base64", "");
addCfg("static_mac_94", "redacted_base64", "");
addCfg("static_mac_95", "redacted_base64", "");
addCfg("static_mac_96", "redacted_base64", "");
addCfg("static_mac_97", "redacted_base64", "");
addCfg("static_mac_98", "redacted_base64", "");
addCfg("static_mac_99", "redacted_base64", "");
addCfg("static_mac_100", "redacted_base64", "");
addCfg("static_mac_101", "redacted_base64", "");
addCfg("static_mac_102", "redacted_base64", "");
addCfg("static_mac_103", "redacted_base64", "");
addCfg("static_mac_104", "redacted_base64", "");
addCfg("static_mac_105", "redacted_base64", "");
addCfg("static_mac_106", "redacted_base64", "");
addCfg("static_mac_107", "redacted_base64", "");
addCfg("static_mac_108", "redacted_base64", "");
addCfg("static_mac_109", "redacted_base64", "");
addCfg("static_mac_110", "redacted_base64", "");
addCfg("static_mac_111", "redacted_base64", "");
addCfg("static_mac_112", "redacted_base64", "");
addCfg("static_mac_113", "redacted_base64", "");
addCfg("static_mac_114", "redacted_base64", "");
addCfg("static_mac_115", "redacted_base64", "");
addCfg("static_mac_116", "redacted_base64", "");
addCfg("static_mac_117", "redacted_base64", "");
addCfg("static_mac_118", "redacted_base64", "");
addCfg("static_mac_119", "redacted_base64", "");
addCfg("static_mac_120", "redacted_base64", "");
addCfg("static_mac_121", "redacted_base64", "");
addCfg("static_mac_122", "redacted_base64", "");
addCfg("static_mac_123", "redacted_base64", "");
addCfg("static_mac_124", "redacted_base64", "");
addCfg("static_mac_125", "redacted_base64", "");
addCfg("static_mac_126", "redacted_base64", "");

addCfg("static_name_0", "redacted_base64", "");
addCfg("static_name_1", "redacted_base64", "");
addCfg("static_name_2", "redacted_base64", "");
addCfg("static_name_3", "redacted_base64", "");
addCfg("static_name_4", "redacted_base64", "");
addCfg("static_name_5", "redacted_base64", "");
addCfg("static_name_6", "redacted_base64", "");
addCfg("static_name_7", "redacted_base64", "");
addCfg("static_name_8", "redacted_base64", "");
addCfg("static_name_9", "redacted_base64", "");
addCfg("static_name_10", "redacted_base64", "");
addCfg("static_name_11", "redacted_base64", "");
addCfg("static_name_12", "redacted_base64", "");
addCfg("static_name_13", "redacted_base64", "");
addCfg("static_name_14", "redacted_base64", "");
addCfg("static_name_15", "redacted_base64", "");
addCfg("static_name_16", "redacted_base64", "");
addCfg("static_name_17", "redacted_base64", "");
addCfg("static_name_18", "redacted_base64", "");
addCfg("static_name_19", "redacted_base64", "");
addCfg("static_name_20", "redacted_base64", "");
addCfg("static_name_21", "redacted_base64", "");
addCfg("static_name_22", "redacted_base64", "");
addCfg("static_name_23", "redacted_base64", "");
addCfg("static_name_24", "redacted_base64", "");
addCfg("static_name_25", "redacted_base64", "");
addCfg("static_name_26", "redacted_base64", "");
addCfg("static_name_27", "redacted_base64", "");
addCfg("static_name_28", "redacted_base64", "");
addCfg("static_name_29", "redacted_base64", "");
addCfg("static_name_30", "redacted_base64", "");
addCfg("static_name_31", "redacted_base64", "");
addCfg("static_name_32", "redacted_base64", "");
addCfg("static_name_33", "redacted_base64", "");
addCfg("static_name_34", "redacted_base64", "");
addCfg("static_name_35", "redacted_base64", "");
addCfg("static_name_36", "redacted_base64", "");
addCfg("static_name_37", "redacted_base64", "");
addCfg("static_name_38", "redacted_base64", "");
addCfg("static_name_39", "redacted_base64", "");
addCfg("static_name_40", "redacted_base64", "");
addCfg("static_name_41", "redacted_base64", "");
addCfg("static_name_42", "redacted_base64", "");
addCfg("static_name_43", "redacted_base64", "");
addCfg("static_name_44", "redacted_base64", "");
addCfg("static_name_45", "redacted_base64", "");
addCfg("static_name_46", "redacted_base64", "");
addCfg("static_name_47", "redacted_base64", "");
addCfg("static_name_48", "redacted_base64", "");
addCfg("static_name_49", "redacted_base64", "");
addCfg("static_name_50", "redacted_base64", "");
addCfg("static_name_51", "redacted_base64", "");
addCfg("static_name_52", "redacted_base64", "");
addCfg("static_name_53", "redacted_base64", "");
addCfg("static_name_54", "redacted_base64", "");
addCfg("static_name_55", "redacted_base64", "");
addCfg("static_name_56", "redacted_base64", "");
addCfg("static_name_57", "redacted_base64", "");
addCfg("static_name_58", "redacted_base64", "");
addCfg("static_name_59", "redacted_base64", "");
addCfg("static_name_60", "redacted_base64", "");
addCfg("static_name_61", "redacted_base64", "");
addCfg("static_name_62", "redacted_base64", "");
addCfg("static_name_63", "redacted_base64", "");
addCfg("static_name_64", "redacted_base64", "");
addCfg("static_name_65", "redacted_base64", "");
addCfg("static_name_66", "redacted_base64", "");
addCfg("static_name_67", "redacted_base64", "");
addCfg("static_name_68", "redacted_base64", "");
addCfg("static_name_69", "redacted_base64", "");
addCfg("static_name_70", "redacted_base64", "");
addCfg("static_name_71", "redacted_base64", "");
addCfg("static_name_72", "redacted_base64", "");
addCfg("static_name_73", "redacted_base64", "");
addCfg("static_name_74", "redacted_base64", "");
addCfg("static_name_75", "redacted_base64", "");
addCfg("static_name_76", "redacted_base64", "");
addCfg("static_name_77", "redacted_base64", "");
addCfg("static_name_78", "redacted_base64", "");
addCfg("static_name_79", "redacted_base64", "");
addCfg("static_name_80", "redacted_base64", "");
addCfg("static_name_81", "redacted_base64", "");
addCfg("static_name_82", "redacted_base64", "");
addCfg("static_name_83", "redacted_base64", "");
addCfg("static_name_84", "redacted_base64", "");
addCfg("static_name_85", "redacted_base64", "");
addCfg("static_name_86", "redacted_base64", "");
addCfg("static_name_87", "redacted_base64", "");
addCfg("static_name_88", "redacted_base64", "");
addCfg("static_name_89", "redacted_base64", "");
addCfg("static_name_90", "redacted_base64", "");
addCfg("static_name_91", "redacted_base64", "");
addCfg("static_name_92", "redacted_base64", "");
addCfg("static_name_93", "redacted_base64", "");
addCfg("static_name_94", "redacted_base64", "");
addCfg("static_name_95", "redacted_base64", "");
addCfg("static_name_96", "redacted_base64", "");
addCfg("static_name_97", "redacted_base64", "");
addCfg("static_name_98", "redacted_base64", "");
addCfg("static_name_99", "redacted_base64", "");
addCfg("static_name_100", "redacted_base64", "");
addCfg("static_name_101", "redacted_base64", "");
addCfg("static_name_102", "redacted_base64", "");
addCfg("static_name_103", "redacted_base64", "");
addCfg("static_name_104", "redacted_base64", "");
addCfg("static_name_105", "redacted_base64", "");
addCfg("static_name_106", "redacted_base64", "");
addCfg("static_name_107", "redacted_base64", "");
addCfg("static_name_108", "redacted_base64", "");
addCfg("static_name_109", "redacted_base64", "");
addCfg("static_name_110", "redacted_base64", "");
addCfg("static_name_111", "redacted_base64", "");
addCfg("static_name_112", "redacted_base64", "");
addCfg("static_name_113", "redacted_base64", "");
addCfg("static_name_114", "redacted_base64", "");
addCfg("static_name_115", "redacted_base64", "");
addCfg("static_name_116", "redacted_base64", "");
addCfg("static_name_117", "redacted_base64", "");
addCfg("static_name_118", "redacted_base64", "");
addCfg("static_name_119", "redacted_base64", "");
addCfg("static_name_120", "redacted_base64", "");
addCfg("static_name_121", "redacted_base64", "");
addCfg("static_name_122", "redacted_base64", "");
addCfg("static_name_123", "redacted_base64", "");
addCfg("static_name_124", "redacted_base64", "");
addCfg("static_name_125", "redacted_base64", "");
addCfg("static_name_126", "redacted_base64", "");


addCfg("block_mac_0", "redacted_base64", "");
addCfg("block_mac_1", "redacted_base64", "");
addCfg("block_mac_2", "redacted_base64", "");
addCfg("block_mac_3", "redacted_base64", "");
addCfg("block_mac_4", "redacted_base64", "");
addCfg("block_mac_5", "redacted_base64", "");
addCfg("block_mac_6", "redacted_base64", "");
addCfg("block_mac_7", "redacted_base64", "");
addCfg("block_mac_8", "redacted_base64", "");
addCfg("block_mac_9", "redacted_base64", "");
addCfg("block_mac_10", "redacted_base64", "");
addCfg("block_mac_11", "redacted_base64", "");
addCfg("block_mac_12", "redacted_base64", "");
addCfg("block_mac_13", "redacted_base64", "");
addCfg("block_mac_14", "redacted_base64", "");
addCfg("block_mac_15", "redacted_base64", "");
addCfg("block_mac_16", "redacted_base64", "");
addCfg("block_mac_17", "redacted_base64", "");
addCfg("block_mac_18", "redacted_base64", "");
addCfg("block_mac_19", "redacted_base64", "");
addCfg("block_mac_20", "redacted_base64", "");
addCfg("block_mac_21", "redacted_base64", "");
addCfg("block_mac_22", "redacted_base64", "");
addCfg("block_mac_23", "redacted_base64", "");
addCfg("block_mac_24", "redacted_base64", "");
addCfg("block_mac_25", "redacted_base64", "");
addCfg("block_mac_26", "redacted_base64", "");
addCfg("block_mac_27", "redacted_base64", "");
addCfg("block_mac_28", "redacted_base64", "");
addCfg("block_mac_29", "redacted_base64", "");
addCfg("block_mac_30", "redacted_base64", "");
addCfg("block_mac_31", "redacted_base64", "");
addCfg("block_mac_32", "redacted_base64", "");
addCfg("block_mac_33", "redacted_base64", "");
addCfg("block_mac_34", "redacted_base64", "");
addCfg("block_mac_35", "redacted_base64", "");
addCfg("block_mac_36", "redacted_base64", "");
addCfg("block_mac_37", "redacted_base64", "");
addCfg("block_mac_38", "redacted_base64", "");
addCfg("block_mac_39", "redacted_base64", "");
addCfg("block_mac_40", "redacted_base64", "");
addCfg("block_mac_41", "redacted_base64", "");
addCfg("block_mac_42", "redacted_base64", "");
addCfg("block_mac_43", "redacted_base64", "");
addCfg("block_mac_44", "redacted_base64", "");
addCfg("block_mac_45", "redacted_base64", "");
addCfg("block_mac_46", "redacted_base64", "");
addCfg("block_mac_47", "redacted_base64", "");
addCfg("block_mac_48", "redacted_base64", "");
addCfg("block_mac_49", "redacted_base64", "");
addCfg("block_mac_50", "redacted_base64", "");
addCfg("block_mac_51", "redacted_base64", "");
addCfg("block_mac_52", "redacted_base64", "");
addCfg("block_mac_53", "redacted_base64", "");
addCfg("block_mac_54", "redacted_base64", "");
addCfg("block_mac_55", "redacted_base64", "");
addCfg("block_mac_56", "redacted_base64", "");
addCfg("block_mac_57", "redacted_base64", "");
addCfg("block_mac_58", "redacted_base64", "");
addCfg("block_mac_59", "redacted_base64", "");
addCfg("block_mac_60", "redacted_base64", "");
addCfg("block_mac_61", "redacted_base64", "");
addCfg("block_mac_62", "redacted_base64", "");
addCfg("block_mac_63", "redacted_base64", "");
addCfg("block_mac_64", "redacted_base64", "");
addCfg("block_mac_65", "redacted_base64", "");
addCfg("block_mac_66", "redacted_base64", "");
addCfg("block_mac_67", "redacted_base64", "");
addCfg("block_mac_68", "redacted_base64", "");
addCfg("block_mac_69", "redacted_base64", "");
addCfg("block_mac_70", "redacted_base64", "");
addCfg("block_mac_71", "redacted_base64", "");
addCfg("block_mac_72", "redacted_base64", "");
addCfg("block_mac_73", "redacted_base64", "");
addCfg("block_mac_74", "redacted_base64", "");
addCfg("block_mac_75", "redacted_base64", "");
addCfg("block_mac_76", "redacted_base64", "");
addCfg("block_mac_77", "redacted_base64", "");
addCfg("block_mac_78", "redacted_base64", "");
addCfg("block_mac_79", "redacted_base64", "");
addCfg("block_mac_80", "redacted_base64", "");
addCfg("block_mac_81", "redacted_base64", "");
addCfg("block_mac_82", "redacted_base64", "");
addCfg("block_mac_83", "redacted_base64", "");
addCfg("block_mac_84", "redacted_base64", "");
addCfg("block_mac_85", "redacted_base64", "");
addCfg("block_mac_86", "redacted_base64", "");
addCfg("block_mac_87", "redacted_base64", "");
addCfg("block_mac_88", "redacted_base64", "");
addCfg("block_mac_89", "redacted_base64", "");
addCfg("block_mac_90", "redacted_base64", "");
addCfg("block_mac_91", "redacted_base64", "");
addCfg("block_mac_92", "redacted_base64", "");
addCfg("block_mac_93", "redacted_base64", "");
addCfg("block_mac_94", "redacted_base64", "");
addCfg("block_mac_95", "redacted_base64", "");
addCfg("block_mac_96", "redacted_base64", "");
addCfg("block_mac_97", "redacted_base64", "");
addCfg("block_mac_98", "redacted_base64", "");
addCfg("block_mac_99", "redacted_base64", "");
addCfg("block_mac_100", "redacted_base64", "");
addCfg("block_mac_101", "redacted_base64", "");
addCfg("block_mac_102", "redacted_base64", "");
addCfg("block_mac_103", "redacted_base64", "");
addCfg("block_mac_104", "redacted_base64", "");
addCfg("block_mac_105", "redacted_base64", "");
addCfg("block_mac_106", "redacted_base64", "");
addCfg("block_mac_107", "redacted_base64", "");
addCfg("block_mac_108", "redacted_base64", "");
addCfg("block_mac_109", "redacted_base64", "");
addCfg("block_mac_110", "redacted_base64", "");
addCfg("block_mac_111", "redacted_base64", "");
addCfg("block_mac_112", "redacted_base64", "");
addCfg("block_mac_113", "redacted_base64", "");
addCfg("block_mac_114", "redacted_base64", "");
addCfg("block_mac_115", "redacted_base64", "");
addCfg("block_mac_116", "redacted_base64", "");
addCfg("block_mac_117", "redacted_base64", "");
addCfg("block_mac_118", "redacted_base64", "");
addCfg("block_mac_119", "redacted_base64", "");
addCfg("block_mac_120", "redacted_base64", "");
addCfg("block_mac_121", "redacted_base64", "");
addCfg("block_mac_122", "redacted_base64", "");
addCfg("block_mac_123", "redacted_base64", "");
addCfg("block_mac_124", "redacted_base64", "");
addCfg("block_mac_125", "redacted_base64", "");
addCfg("block_mac_126", "redacted_base64", "");
addCfg("block_mac_127", "redacted_base64", "");
addCfg("block_mac_128", "redacted_base64", "");
addCfg("block_mac_129", "redacted_base64", "");
addCfg("block_mac_130", "redacted_base64", "");
addCfg("block_mac_131", "redacted_base64", "");
addCfg("block_mac_132", "redacted_base64", "");
addCfg("block_mac_133", "redacted_base64", "");
addCfg("block_mac_134", "redacted_base64", "");
addCfg("block_mac_135", "redacted_base64", "");
addCfg("block_mac_136", "redacted_base64", "");
addCfg("block_mac_137", "redacted_base64", "");
addCfg("block_mac_138", "redacted_base64", "");
addCfg("block_mac_139", "redacted_base64", "");
addCfg("block_mac_140", "redacted_base64", "");
addCfg("block_mac_141", "redacted_base64", "");
addCfg("block_mac_142", "redacted_base64", "");
addCfg("block_mac_143", "redacted_base64", "");
addCfg("block_mac_144", "redacted_base64", "");
addCfg("block_mac_145", "redacted_base64", "");
addCfg("block_mac_146", "redacted_base64", "");
addCfg("block_mac_147", "redacted_base64", "");
addCfg("block_mac_148", "redacted_base64", "");
addCfg("block_mac_149", "redacted_base64", "");
addCfg("block_mac_150", "redacted_base64", "");
addCfg("block_mac_151", "redacted_base64", "");
addCfg("block_mac_152", "redacted_base64", "");
addCfg("block_mac_153", "redacted_base64", "");
addCfg("block_mac_154", "redacted_base64", "");
addCfg("block_mac_155", "redacted_base64", "");
addCfg("block_mac_156", "redacted_base64", "");
addCfg("block_mac_157", "redacted_base64", "");
addCfg("block_mac_158", "redacted_base64", "");
addCfg("block_mac_159", "redacted_base64", "");
addCfg("block_mac_160", "redacted_base64", "");
addCfg("block_mac_161", "redacted_base64", "");
addCfg("block_mac_162", "redacted_base64", "");
addCfg("block_mac_163", "redacted_base64", "");
addCfg("block_mac_164", "redacted_base64", "");
addCfg("block_mac_165", "redacted_base64", "");
addCfg("block_mac_166", "redacted_base64", "");
addCfg("block_mac_167", "redacted_base64", "");
addCfg("block_mac_168", "redacted_base64", "");
addCfg("block_mac_169", "redacted_base64", "");
addCfg("block_mac_170", "redacted_base64", "");
addCfg("block_mac_171", "redacted_base64", "");
addCfg("block_mac_172", "redacted_base64", "");
addCfg("block_mac_173", "redacted_base64", "");
addCfg("block_mac_174", "redacted_base64", "");
addCfg("block_mac_175", "redacted_base64", "");
addCfg("block_mac_176", "redacted_base64", "");
addCfg("block_mac_177", "redacted_base64", "");
addCfg("block_mac_178", "redacted_base64", "");
addCfg("block_mac_179", "redacted_base64", "");
addCfg("block_mac_180", "redacted_base64", "");
addCfg("block_mac_181", "redacted_base64", "");
addCfg("block_mac_182", "redacted_base64", "");
addCfg("block_mac_183", "redacted_base64", "");
addCfg("block_mac_184", "redacted_base64", "");
addCfg("block_mac_185", "redacted_base64", "");
addCfg("block_mac_186", "redacted_base64", "");
addCfg("block_mac_187", "redacted_base64", "");
addCfg("block_mac_188", "redacted_base64", "");
addCfg("block_mac_189", "redacted_base64", "");
addCfg("block_mac_190", "redacted_base64", "");
addCfg("block_mac_191", "redacted_base64", "");
addCfg("block_mac_192", "redacted_base64", "");
addCfg("block_mac_193", "redacted_base64", "");
addCfg("block_mac_194", "redacted_base64", "");
addCfg("block_mac_195", "redacted_base64", "");
addCfg("block_mac_196", "redacted_base64", "");
addCfg("block_mac_197", "redacted_base64", "");
addCfg("block_mac_198", "redacted_base64", "");
addCfg("block_mac_199", "redacted_base64", "");
addCfg("block_mac_200", "redacted_base64", "");
addCfg("block_mac_201", "redacted_base64", "");
addCfg("block_mac_202", "redacted_base64", "");
addCfg("block_mac_203", "redacted_base64", "");
addCfg("block_mac_204", "redacted_base64", "");
addCfg("block_mac_205", "redacted_base64", "");
addCfg("block_mac_206", "redacted_base64", "");
addCfg("block_mac_207", "redacted_base64", "");
addCfg("block_mac_208", "redacted_base64", "");
addCfg("block_mac_209", "redacted_base64", "");
addCfg("block_mac_210", "redacted_base64", "");
addCfg("block_mac_211", "redacted_base64", "");
addCfg("block_mac_212", "redacted_base64", "");
addCfg("block_mac_213", "redacted_base64", "");
addCfg("block_mac_214", "redacted_base64", "");
addCfg("block_mac_215", "redacted_base64", "");
addCfg("block_mac_216", "redacted_base64", "");
addCfg("block_mac_217", "redacted_base64", "");
addCfg("block_mac_218", "redacted_base64", "");
addCfg("block_mac_219", "redacted_base64", "");
addCfg("block_mac_220", "redacted_base64", "");
addCfg("block_mac_221", "redacted_base64", "");
addCfg("block_mac_222", "redacted_base64", "");
addCfg("block_mac_223", "redacted_base64", "");
addCfg("block_mac_224", "redacted_base64", "");
addCfg("block_mac_225", "redacted_base64", "");
addCfg("block_mac_226", "redacted_base64", "");
addCfg("block_mac_227", "redacted_base64", "");
addCfg("block_mac_228", "redacted_base64", "");
addCfg("block_mac_229", "redacted_base64", "");
addCfg("block_mac_230", "redacted_base64", "");
addCfg("block_mac_231", "redacted_base64", "");
addCfg("block_mac_232", "redacted_base64", "");
addCfg("block_mac_233", "redacted_base64", "");
addCfg("block_mac_234", "redacted_base64", "");
addCfg("block_mac_235", "redacted_base64", "");
addCfg("block_mac_236", "redacted_base64", "");
addCfg("block_mac_237", "redacted_base64", "");
addCfg("block_mac_238", "redacted_base64", "");
addCfg("block_mac_239", "redacted_base64", "");
addCfg("block_mac_240", "redacted_base64", "");
addCfg("block_mac_241", "redacted_base64", "");
addCfg("block_mac_242", "redacted_base64", "");
addCfg("block_mac_243", "redacted_base64", "");
addCfg("block_mac_244", "redacted_base64", "");
addCfg("block_mac_245", "redacted_base64", "");
addCfg("block_mac_246", "redacted_base64", "");
addCfg("block_mac_247", "redacted_base64", "");
addCfg("block_mac_248", "redacted_base64", "");
addCfg("block_mac_249", "redacted_base64", "");
addCfg("block_mac_250", "redacted_base64", "");
addCfg("block_mac_251", "redacted_base64", "");
addCfg("block_mac_252", "redacted_base64", "");
addCfg("block_mac_253", "redacted_base64", "");
addCfg("block_mac_254", "redacted_base64", "");

addCfg("block_enable_0", "redacted_base64", "");
addCfg("block_enable_1", "redacted_base64", "");
addCfg("block_enable_2", "redacted_base64", "");
addCfg("block_enable_3", "redacted_base64", "");
addCfg("block_enable_4", "redacted_base64", "");
addCfg("block_enable_5", "redacted_base64", "");
addCfg("block_enable_6", "redacted_base64", "");
addCfg("block_enable_7", "redacted_base64", "");
addCfg("block_enable_8", "redacted_base64", "");
addCfg("block_enable_9", "redacted_base64", "");
addCfg("block_enable_10", "redacted_base64", "");
addCfg("block_enable_11", "redacted_base64", "");
addCfg("block_enable_12", "redacted_base64", "");
addCfg("block_enable_13", "redacted_base64", "");
addCfg("block_enable_14", "redacted_base64", "");
addCfg("block_enable_15", "redacted_base64", "");
addCfg("block_enable_16", "redacted_base64", "");
addCfg("block_enable_17", "redacted_base64", "");
addCfg("block_enable_18", "redacted_base64", "");
addCfg("block_enable_19", "redacted_base64", "");
addCfg("block_enable_20", "redacted_base64", "");
addCfg("block_enable_21", "redacted_base64", "");
addCfg("block_enable_22", "redacted_base64", "");
addCfg("block_enable_23", "redacted_base64", "");
addCfg("block_enable_24", "redacted_base64", "");
addCfg("block_enable_25", "redacted_base64", "");
addCfg("block_enable_26", "redacted_base64", "");
addCfg("block_enable_27", "redacted_base64", "");
addCfg("block_enable_28", "redacted_base64", "");
addCfg("block_enable_29", "redacted_base64", "");
addCfg("block_enable_30", "redacted_base64", "");
addCfg("block_enable_31", "redacted_base64", "");
addCfg("block_enable_32", "redacted_base64", "");
addCfg("block_enable_33", "redacted_base64", "");
addCfg("block_enable_34", "redacted_base64", "");
addCfg("block_enable_35", "redacted_base64", "");
addCfg("block_enable_36", "redacted_base64", "");
addCfg("block_enable_37", "redacted_base64", "");
addCfg("block_enable_38", "redacted_base64", "");
addCfg("block_enable_39", "redacted_base64", "");
addCfg("block_enable_40", "redacted_base64", "");
addCfg("block_enable_41", "redacted_base64", "");
addCfg("block_enable_42", "redacted_base64", "");
addCfg("block_enable_43", "redacted_base64", "");
addCfg("block_enable_44", "redacted_base64", "");
addCfg("block_enable_45", "redacted_base64", "");
addCfg("block_enable_46", "redacted_base64", "");
addCfg("block_enable_47", "redacted_base64", "");
addCfg("block_enable_48", "redacted_base64", "");
addCfg("block_enable_49", "redacted_base64", "");
addCfg("block_enable_50", "redacted_base64", "");
addCfg("block_enable_51", "redacted_base64", "");
addCfg("block_enable_52", "redacted_base64", "");
addCfg("block_enable_53", "redacted_base64", "");
addCfg("block_enable_54", "redacted_base64", "");
addCfg("block_enable_55", "redacted_base64", "");
addCfg("block_enable_56", "redacted_base64", "");
addCfg("block_enable_57", "redacted_base64", "");
addCfg("block_enable_58", "redacted_base64", "");
addCfg("block_enable_59", "redacted_base64", "");
addCfg("block_enable_60", "redacted_base64", "");
addCfg("block_enable_61", "redacted_base64", "");
addCfg("block_enable_62", "redacted_base64", "");
addCfg("block_enable_63", "redacted_base64", "");
addCfg("block_enable_64", "redacted_base64", "");
addCfg("block_enable_65", "redacted_base64", "");
addCfg("block_enable_66", "redacted_base64", "");
addCfg("block_enable_67", "redacted_base64", "");
addCfg("block_enable_68", "redacted_base64", "");
addCfg("block_enable_69", "redacted_base64", "");
addCfg("block_enable_70", "redacted_base64", "");
addCfg("block_enable_71", "redacted_base64", "");
addCfg("block_enable_72", "redacted_base64", "");
addCfg("block_enable_73", "redacted_base64", "");
addCfg("block_enable_74", "redacted_base64", "");
addCfg("block_enable_75", "redacted_base64", "");
addCfg("block_enable_76", "redacted_base64", "");
addCfg("block_enable_77", "redacted_base64", "");
addCfg("block_enable_78", "redacted_base64", "");
addCfg("block_enable_79", "redacted_base64", "");
addCfg("block_enable_80", "redacted_base64", "");
addCfg("block_enable_81", "redacted_base64", "");
addCfg("block_enable_82", "redacted_base64", "");
addCfg("block_enable_83", "redacted_base64", "");
addCfg("block_enable_84", "redacted_base64", "");
addCfg("block_enable_85", "redacted_base64", "");
addCfg("block_enable_86", "redacted_base64", "");
addCfg("block_enable_87", "redacted_base64", "");
addCfg("block_enable_88", "redacted_base64", "");
addCfg("block_enable_89", "redacted_base64", "");
addCfg("block_enable_90", "redacted_base64", "");
addCfg("block_enable_91", "redacted_base64", "");
addCfg("block_enable_92", "redacted_base64", "");
addCfg("block_enable_93", "redacted_base64", "");
addCfg("block_enable_94", "redacted_base64", "");
addCfg("block_enable_95", "redacted_base64", "");
addCfg("block_enable_96", "redacted_base64", "");
addCfg("block_enable_97", "redacted_base64", "");
addCfg("block_enable_98", "redacted_base64", "");
addCfg("block_enable_99", "redacted_base64", "");
addCfg("block_enable_100", "redacted_base64", "");
addCfg("block_enable_101", "redacted_base64", "");
addCfg("block_enable_102", "redacted_base64", "");
addCfg("block_enable_103", "redacted_base64", "");
addCfg("block_enable_104", "redacted_base64", "");
addCfg("block_enable_105", "redacted_base64", "");
addCfg("block_enable_106", "redacted_base64", "");
addCfg("block_enable_107", "redacted_base64", "");
addCfg("block_enable_108", "redacted_base64", "");
addCfg("block_enable_109", "redacted_base64", "");
addCfg("block_enable_110", "redacted_base64", "");
addCfg("block_enable_111", "redacted_base64", "");
addCfg("block_enable_112", "redacted_base64", "");
addCfg("block_enable_113", "redacted_base64", "");
addCfg("block_enable_114", "redacted_base64", "");
addCfg("block_enable_115", "redacted_base64", "");
addCfg("block_enable_116", "redacted_base64", "");
addCfg("block_enable_117", "redacted_base64", "");
addCfg("block_enable_118", "redacted_base64", "");
addCfg("block_enable_119", "redacted_base64", "");
addCfg("block_enable_120", "redacted_base64", "");
addCfg("block_enable_121", "redacted_base64", "");
addCfg("block_enable_122", "redacted_base64", "");
addCfg("block_enable_123", "redacted_base64", "");
addCfg("block_enable_124", "redacted_base64", "");
addCfg("block_enable_125", "redacted_base64", "");
addCfg("block_enable_126", "redacted_base64", "");
addCfg("block_enable_127", "redacted_base64", "");
addCfg("block_enable_128", "redacted_base64", "");
addCfg("block_enable_129", "redacted_base64", "");
addCfg("block_enable_130", "redacted_base64", "");
addCfg("block_enable_131", "redacted_base64", "");
addCfg("block_enable_132", "redacted_base64", "");
addCfg("block_enable_133", "redacted_base64", "");
addCfg("block_enable_134", "redacted_base64", "");
addCfg("block_enable_135", "redacted_base64", "");
addCfg("block_enable_136", "redacted_base64", "");
addCfg("block_enable_137", "redacted_base64", "");
addCfg("block_enable_138", "redacted_base64", "");
addCfg("block_enable_139", "redacted_base64", "");
addCfg("block_enable_140", "redacted_base64", "");
addCfg("block_enable_141", "redacted_base64", "");
addCfg("block_enable_142", "redacted_base64", "");
addCfg("block_enable_143", "redacted_base64", "");
addCfg("block_enable_144", "redacted_base64", "");
addCfg("block_enable_145", "redacted_base64", "");
addCfg("block_enable_146", "redacted_base64", "");
addCfg("block_enable_147", "redacted_base64", "");
addCfg("block_enable_148", "redacted_base64", "");
addCfg("block_enable_149", "redacted_base64", "");
addCfg("block_enable_150", "redacted_base64", "");
addCfg("block_enable_151", "redacted_base64", "");
addCfg("block_enable_152", "redacted_base64", "");
addCfg("block_enable_153", "redacted_base64", "");
addCfg("block_enable_154", "redacted_base64", "");
addCfg("block_enable_155", "redacted_base64", "");
addCfg("block_enable_156", "redacted_base64", "");
addCfg("block_enable_157", "redacted_base64", "");
addCfg("block_enable_158", "redacted_base64", "");
addCfg("block_enable_159", "redacted_base64", "");
addCfg("block_enable_160", "redacted_base64", "");
addCfg("block_enable_161", "redacted_base64", "");
addCfg("block_enable_162", "redacted_base64", "");
addCfg("block_enable_163", "redacted_base64", "");
addCfg("block_enable_164", "redacted_base64", "");
addCfg("block_enable_165", "redacted_base64", "");
addCfg("block_enable_166", "redacted_base64", "");
addCfg("block_enable_167", "redacted_base64", "");
addCfg("block_enable_168", "redacted_base64", "");
addCfg("block_enable_169", "redacted_base64", "");
addCfg("block_enable_170", "redacted_base64", "");
addCfg("block_enable_171", "redacted_base64", "");
addCfg("block_enable_172", "redacted_base64", "");
addCfg("block_enable_173", "redacted_base64", "");
addCfg("block_enable_174", "redacted_base64", "");
addCfg("block_enable_175", "redacted_base64", "");
addCfg("block_enable_176", "redacted_base64", "");
addCfg("block_enable_177", "redacted_base64", "");
addCfg("block_enable_178", "redacted_base64", "");
addCfg("block_enable_179", "redacted_base64", "");
addCfg("block_enable_180", "redacted_base64", "");
addCfg("block_enable_181", "redacted_base64", "");
addCfg("block_enable_182", "redacted_base64", "");
addCfg("block_enable_183", "redacted_base64", "");
addCfg("block_enable_184", "redacted_base64", "");
addCfg("block_enable_185", "redacted_base64", "");
addCfg("block_enable_186", "redacted_base64", "");
addCfg("block_enable_187", "redacted_base64", "");
addCfg("block_enable_188", "redacted_base64", "");
addCfg("block_enable_189", "redacted_base64", "");
addCfg("block_enable_190", "redacted_base64", "");
addCfg("block_enable_191", "redacted_base64", "");
addCfg("block_enable_192", "redacted_base64", "");
addCfg("block_enable_193", "redacted_base64", "");
addCfg("block_enable_194", "redacted_base64", "");
addCfg("block_enable_195", "redacted_base64", "");
addCfg("block_enable_196", "redacted_base64", "");
addCfg("block_enable_197", "redacted_base64", "");
addCfg("block_enable_198", "redacted_base64", "");
addCfg("block_enable_199", "redacted_base64", "");
addCfg("block_enable_200", "redacted_base64", "");
addCfg("block_enable_201", "redacted_base64", "");
addCfg("block_enable_202", "redacted_base64", "");
addCfg("block_enable_203", "redacted_base64", "");
addCfg("block_enable_204", "redacted_base64", "");
addCfg("block_enable_205", "redacted_base64", "");
addCfg("block_enable_206", "redacted_base64", "");
addCfg("block_enable_207", "redacted_base64", "");
addCfg("block_enable_208", "redacted_base64", "");
addCfg("block_enable_209", "redacted_base64", "");
addCfg("block_enable_210", "redacted_base64", "");
addCfg("block_enable_211", "redacted_base64", "");
addCfg("block_enable_212", "redacted_base64", "");
addCfg("block_enable_213", "redacted_base64", "");
addCfg("block_enable_214", "redacted_base64", "");
addCfg("block_enable_215", "redacted_base64", "");
addCfg("block_enable_216", "redacted_base64", "");
addCfg("block_enable_217", "redacted_base64", "");
addCfg("block_enable_218", "redacted_base64", "");
addCfg("block_enable_219", "redacted_base64", "");
addCfg("block_enable_220", "redacted_base64", "");
addCfg("block_enable_221", "redacted_base64", "");
addCfg("block_enable_222", "redacted_base64", "");
addCfg("block_enable_223", "redacted_base64", "");
addCfg("block_enable_224", "redacted_base64", "");
addCfg("block_enable_225", "redacted_base64", "");
addCfg("block_enable_226", "redacted_base64", "");
addCfg("block_enable_227", "redacted_base64", "");
addCfg("block_enable_228", "redacted_base64", "");
addCfg("block_enable_229", "redacted_base64", "");
addCfg("block_enable_230", "redacted_base64", "");
addCfg("block_enable_231", "redacted_base64", "");
addCfg("block_enable_232", "redacted_base64", "");
addCfg("block_enable_233", "redacted_base64", "");
addCfg("block_enable_234", "redacted_base64", "");
addCfg("block_enable_235", "redacted_base64", "");
addCfg("block_enable_236", "redacted_base64", "");
addCfg("block_enable_237", "redacted_base64", "");
addCfg("block_enable_238", "redacted_base64", "");
addCfg("block_enable_239", "redacted_base64", "");
addCfg("block_enable_240", "redacted_base64", "");
addCfg("block_enable_241", "redacted_base64", "");
addCfg("block_enable_242", "redacted_base64", "");
addCfg("block_enable_243", "redacted_base64", "");
addCfg("block_enable_244", "redacted_base64", "");
addCfg("block_enable_245", "redacted_base64", "");
addCfg("block_enable_246", "redacted_base64", "");
addCfg("block_enable_247", "redacted_base64", "");
addCfg("block_enable_248", "redacted_base64", "");
addCfg("block_enable_249", "redacted_base64", "");
addCfg("block_enable_250", "redacted_base64", "");
addCfg("block_enable_251", "redacted_base64", "");
addCfg("block_enable_252", "redacted_base64", "");
addCfg("block_enable_253", "redacted_base64", "");
addCfg("block_enable_254", "redacted_base64", "");

addCfg("oie_mac", "redacted_base64", "b8:27:eb:f1:6b:5f");
addCfg("oie_name", "redacted_base64", "pihole");
addCfg("oie_type", "redacted_base64", "");
addCfg("del_mac", "redacted_base64", "");
addCfg("device_type", "redacted_base64", "Computer");
addCfg("device_os", "redacted_base64", "Embedded");
addCfg("device_manu", "redacted_base64", "Raspberry-Pi");
addCfg("device_model", "redacted_base64", "RaspberryPi");
addCfg("device_location", "redacted_base64", "");
addCfg("device_mobility", "redacted_base64", "Portable");
addCfg("ip6eb_all", "redacted_base64", "1");
addCfg("ip6wan_proto", "redacted_base64", "dhcpv6");
addCfg("ip6lan0_mode", "redacted_base64", "0");

addCfg("dev_alia_name", "redacted_base64", "pihole");
addCfg("dev_alia_mac", "redacted_base64", "B8:27:EB:F1:6B:5F");

addCfg("cus_lo_0", "redacted_base64", "");
addCfg("cus_lo_1", "redacted_base64", "");
addCfg("cus_lo_2", "redacted_base64", "");
addCfg("cus_lo_3", "redacted_base64", "");
addCfg("cus_lo_4", "redacted_base64", "");
addCfg("cus_lo_5", "redacted_base64", "");
addCfg("cus_lo_6", "redacted_base64", "");
addCfg("cus_lo_7", "redacted_base64", "");
addCfg("cus_lo_8", "redacted_base64", "");
addCfg("cus_lo_9", "redacted_base64", "");
addCfg("cus_lo_10", "redacted_base64", "");
addCfg("cus_lo_11", "redacted_base64", "");
addCfg("cus_lo_12", "redacted_base64", "");
addCfg("cus_lo_13", "redacted_base64", "");
addCfg("cus_lo_14", "redacted_base64", "");
addCfg("cus_lo_15", "redacted_base64", "");
addCfg("cus_lo_16", "redacted_base64", "");
addCfg("cus_lo_17", "redacted_base64", "");
addCfg("cus_lo_18", "redacted_base64", "");
addCfg("cus_lo_19", "redacted_base64", "");
addCfg("cus_lo_20", "redacted_base64", "");
addCfg("cus_lo_21", "redacted_base64", "");
addCfg("cus_lo_22", "redacted_base64", "");
addCfg("cus_lo_23", "redacted_base64", "");
addCfg("cus_lo_24", "redacted_base64", "");
addCfg("cus_lo_25", "redacted_base64", "");
addCfg("cus_lo_26", "redacted_base64", "");
addCfg("cus_lo_27", "redacted_base64", "");
addCfg("cus_lo_28", "redacted_base64", "");
addCfg("cus_lo_29", "redacted_base64", "");
addCfg("cus_lo_30", "redacted_base64", "");
addCfg("cus_lo_31", "redacted_base64", "");
addCfg("cus_lo_32", "redacted_base64", "");
addCfg("cus_lo_33", "redacted_base64", "");
addCfg("cus_lo_34", "redacted_base64", "");
addCfg("cus_lo_35", "redacted_base64", "");
addCfg("cus_lo_36", "redacted_base64", "");
addCfg("cus_lo_37", "redacted_base64", "");
addCfg("cus_lo_38", "redacted_base64", "");
addCfg("cus_lo_39", "redacted_base64", "");
addCfg("cus_lo_40", "redacted_base64", "");
addCfg("cus_lo_41", "redacted_base64", "");
addCfg("cus_lo_42", "redacted_base64", "");
addCfg("cus_lo_43", "redacted_base64", "");
addCfg("cus_lo_44", "redacted_base64", "");
addCfg("cus_lo_45", "redacted_base64", "");
addCfg("cus_lo_46", "redacted_base64", "");
addCfg("cus_lo_47", "redacted_base64", "");
addCfg("cus_lo_48", "redacted_base64", "");
addCfg("cus_lo_49", "redacted_base64", "");
addCfg("cus_lo_50", "redacted_base64", "");
addCfg("cus_lo_51", "redacted_base64", "");
addCfg("cus_lo_52", "redacted_base64", "");
addCfg("cus_lo_53", "redacted_base64", "");
addCfg("cus_lo_54", "redacted_base64", "");
addCfg("cus_lo_55", "redacted_base64", "");
addCfg("cus_lo_56", "redacted_base64", "");
addCfg("cus_lo_57", "redacted_base64", "");
addCfg("cus_lo_58", "redacted_base64", "");
addCfg("cus_lo_59", "redacted_base64", "");
addCfg("cus_lo_60", "redacted_base64", "");
addCfg("cus_lo_61", "redacted_base64", "");
addCfg("cus_lo_62", "redacted_base64", "");
addCfg("cus_lo_63", "redacted_base64", "");
addCfg("cus_lo_64", "redacted_base64", "");
addROD("hosts_trafstat", {
	"3600": {
		"ec:b5:fa:13:da:91": {
			"mac": "ec:b5:fa:13:da:91",
			"packets_tx": 2926,
			"bytes_tx": 947109,
			"packets_rx": 728,
			"bytes_rx": 58704
		},
		"00:11:32:e9:0f:42": {
			"mac": "00:11:32:e9:0f:42",
			"packets_tx": 894,
			"bytes_tx": 357336,
			"packets_rx": 126,
			"bytes_rx": 11453
		},
		"84:0d:8e:4b:ce:5b": {
			"mac": "84:0d:8e:4b:ce:5b",
			"packets_tx": 2542,
			"bytes_tx": 453685,
			"packets_rx": 711,
			"bytes_rx": 48348
		},
		"84:0d:8e:4b:a7:a8": {
			"mac": "84:0d:8e:4b:a7:a8",
			"packets_tx": 3203,
			"bytes_tx": 562095,
			"packets_rx": 1028,
			"bytes_rx": 69904
		},
		"dc:a6:32:24:e1:07": {
			"mac": "dc:a6:32:24:e1:07",
			"packets_tx": 321,
			"bytes_tx": 46516,
			"packets_rx": 295,
			"bytes_rx": 1429115
		},
		"2c:f0:5d:67:85:be": {
			"mac": "2c:f0:5d:67:85:be",
			"packets_tx": 123814,
			"bytes_tx": 13823384,
			"packets_rx": 1467656,
			"bytes_rx": 1900247578
		},
		"42:f4:29:cd:5d:07": {
			"mac": "42:f4:29:cd:5d:07",
			"packets_tx": 59323,
			"bytes_tx": 55417825,
			"packets_rx": 200256,
			"bytes_rx": 264780651
		},
		"24:fb:e3:bc:27:3c": {
			"mac": "24:fb:e3:bc:27:3c",
			"packets_tx": 29827,
			"bytes_tx": 7634529,
			"packets_rx": 46340,
			"bytes_rx": 38182363
		},
		"2c:f0:5d:96:5b:4b": {
			"mac": "2c:f0:5d:96:5b:4b",
			"packets_tx": 137109,
			"bytes_tx": 44467491,
			"packets_rx": 389201,
			"bytes_rx": 447782252
		},
		"de:7f:1d:71:52:73": {
			"mac": "de:7f:1d:71:52:73",
			"packets_tx": 3016,
			"bytes_tx": 829335,
			"packets_rx": 5449,
			"bytes_rx": 5190704
		}
	},
	"43200": {
		"ec:b5:fa:13:da:91": {
			"mac": "ec:b5:fa:13:da:91",
			"packets_tx": 5984,
			"bytes_tx": 1834904,
			"packets_rx": 1413,
			"bytes_rx": 110723
		},
		"00:11:32:e9:0f:42": {
			"mac": "00:11:32:e9:0f:42",
			"packets_tx": 1911,
			"bytes_tx": 759346,
			"packets_rx": 259,
			"bytes_rx": 23546
		},
		"84:0d:8e:4b:ce:5b": {
			"mac": "84:0d:8e:4b:ce:5b",
			"packets_tx": 4826,
			"bytes_tx": 865955,
			"packets_rx": 1251,
			"bytes_rx": 85229
		},
		"84:0d:8e:4b:a7:a8": {
			"mac": "84:0d:8e:4b:a7:a8",
			"packets_tx": 6551,
			"bytes_tx": 1151419,
			"packets_rx": 2100,
			"bytes_rx": 143103
		},
		"dc:a6:32:24:e1:07": {
			"mac": "dc:a6:32:24:e1:07",
			"packets_tx": 686,
			"bytes_tx": 93112,
			"packets_rx": 612,
			"bytes_rx": 2948559
		},
		"2c:f0:5d:67:85:be": {
			"mac": "2c:f0:5d:67:85:be",
			"packets_tx": 171690,
			"bytes_tx": 20514232,
			"packets_rx": 1992738,
			"bytes_rx": 2575570677
		},
		"24:fb:e3:bc:27:3c": {
			"mac": "24:fb:e3:bc:27:3c",
			"packets_tx": 60663,
			"bytes_tx": 15053221,
			"packets_rx": 92978,
			"bytes_rx": 75374860
		},
		"2c:f0:5d:96:5b:4b": {
			"mac": "2c:f0:5d:96:5b:4b",
			"packets_tx": 260352,
			"bytes_tx": 72890406,
			"packets_rx": 761232,
			"bytes_rx": 873045755
		},
		"de:7f:1d:71:52:73": {
			"mac": "de:7f:1d:71:52:73",
			"packets_tx": 3484,
			"bytes_tx": 982788,
			"packets_rx": 5922,
			"bytes_rx": 5347475
		},
		"42:f4:29:cd:5d:07": {
			"mac": "42:f4:29:cd:5d:07",
			"packets_tx": 64292,
			"bytes_tx": 56497729,
			"packets_rx": 213900,
			"bytes_rx": 280699155
		}
	},
	"86400": {
		"ec:b5:fa:13:da:91": {
			"mac": "ec:b5:fa:13:da:91",
			"packets_tx": 38509,
			"bytes_tx": 11766047,
			"packets_rx": 5985,
			"bytes_rx": 484663
		},
		"dc:a6:32:24:e1:07": {
			"mac": "dc:a6:32:24:e1:07",
			"packets_tx": 4912,
			"bytes_tx": 645797,
			"packets_rx": 4474,
			"bytes_rx": 20453256
		},
		"de:7f:1d:71:52:73": {
			"mac": "de:7f:1d:71:52:73",
			"packets_tx": 2175630,
			"bytes_tx": 166051408,
			"packets_rx": 8737922,
			"bytes_rx": 13152643095
		},
		"2c:f0:5d:67:85:be": {
			"mac": "2c:f0:5d:67:85:be",
			"packets_tx": 460976,
			"bytes_tx": 75022779,
			"packets_rx": 3748485,
			"bytes_rx": 4840269192
		},
		"24:fb:e3:bc:27:3c": {
			"mac": "24:fb:e3:bc:27:3c",
			"packets_tx": 437447,
			"bytes_tx": 107891060,
			"packets_rx": 671218,
			"bytes_rx": 548306160
		},
		"84:0d:8e:4b:ce:5b": {
			"mac": "84:0d:8e:4b:ce:5b",
			"packets_tx": 22450,
			"bytes_tx": 4171800,
			"packets_rx": 2891,
			"bytes_rx": 189646
		},
		"84:0d:8e:4b:a7:a8": {
			"mac": "84:0d:8e:4b:a7:a8",
			"packets_tx": 45826,
			"bytes_tx": 8071998,
			"packets_rx": 14597,
			"bytes_rx": 993042
		},
		"42:f4:29:cd:5d:07": {
			"mac": "42:f4:29:cd:5d:07",
			"packets_tx": 114342,
			"bytes_tx": 71256534,
			"packets_rx": 477032,
			"bytes_rx": 622341153
		},
		"00:11:32:e9:0f:42": {
			"mac": "00:11:32:e9:0f:42",
			"packets_tx": 10225,
			"bytes_tx": 5587506,
			"packets_rx": 2179,
			"bytes_rx": 190550
		},
		"2c:f0:5d:96:5b:4b": {
			"mac": "2c:f0:5d:96:5b:4b",
			"packets_tx": 508631,
			"bytes_tx": 131283563,
			"packets_rx": 1881557,
			"bytes_rx": 2308078182
		}
	},
	"604800": {
		"ec:b5:fa:13:da:91": {
			"mac": "ec:b5:fa:13:da:91",
			"packets_tx": 38509,
			"bytes_tx": 11766047,
			"packets_rx": 5985,
			"bytes_rx": 484663
		},
		"dc:a6:32:24:e1:07": {
			"mac": "dc:a6:32:24:e1:07",
			"packets_tx": 4912,
			"bytes_tx": 645797,
			"packets_rx": 4474,
			"bytes_rx": 20453256
		},
		"de:7f:1d:71:52:73": {
			"mac": "de:7f:1d:71:52:73",
			"packets_tx": 2175630,
			"bytes_tx": 166051408,
			"packets_rx": 8737922,
			"bytes_rx": 13152643095
		},
		"2c:f0:5d:67:85:be": {
			"mac": "2c:f0:5d:67:85:be",
			"packets_tx": 460976,
			"bytes_tx": 75022779,
			"packets_rx": 3748485,
			"bytes_rx": 4840269192
		},
		"24:fb:e3:bc:27:3c": {
			"mac": "24:fb:e3:bc:27:3c",
			"packets_tx": 437447,
			"bytes_tx": 107891060,
			"packets_rx": 671218,
			"bytes_rx": 548306160
		},
		"84:0d:8e:4b:ce:5b": {
			"mac": "84:0d:8e:4b:ce:5b",
			"packets_tx": 22450,
			"bytes_tx": 4171800,
			"packets_rx": 2891,
			"bytes_rx": 189646
		},
		"84:0d:8e:4b:a7:a8": {
			"mac": "84:0d:8e:4b:a7:a8",
			"packets_tx": 45826,
			"bytes_tx": 8071998,
			"packets_rx": 14597,
			"bytes_rx": 993042
		},
		"42:f4:29:cd:5d:07": {
			"mac": "42:f4:29:cd:5d:07",
			"packets_tx": 114342,
			"bytes_tx": 71256534,
			"packets_rx": 477032,
			"bytes_rx": 622341153
		},
		"00:11:32:e9:0f:42": {
			"mac": "00:11:32:e9:0f:42",
			"packets_tx": 10225,
			"bytes_tx": 5587506,
			"packets_rx": 2179,
			"bytes_rx": 190550
		},
		"2c:f0:5d:96:5b:4b": {
			"mac": "2c:f0:5d:96:5b:4b",
			"packets_tx": 508631,
			"bytes_tx": 131283563,
			"packets_rx": 1881557,
			"bytes_rx": 2308078182
		}
	},
	"2592000": {
		"ec:b5:fa:13:da:91": {
			"mac": "ec:b5:fa:13:da:91",
			"packets_tx": 1429654,
			"bytes_tx": 438830039,
			"packets_rx": 325944,
			"bytes_rx": 39697930
		},
		"84:0d:8e:4b:ce:5b": {
			"mac": "84:0d:8e:4b:ce:5b",
			"packets_tx": 1009208,
			"bytes_tx": 184135174,
			"packets_rx": 204469,
			"bytes_rx": 11364390
		},
		"84:0d:8e:4b:a7:a8": {
			"mac": "84:0d:8e:4b:a7:a8",
			"packets_tx": 1187001,
			"bytes_tx": 213918919,
			"packets_rx": 286017,
			"bytes_rx": 16942532
		},
		"8c:ae:4c:dd:b3:b6": {
			"mac": "8c:ae:4c:dd:b3:b6",
			"packets_tx": 310377,
			"bytes_tx": 82404250,
			"packets_rx": 199760,
			"bytes_rx": 103408556
		},
		"2c:f0:5d:67:85:be": {
			"mac": "2c:f0:5d:67:85:be",
			"packets_tx": 25467316,
			"bytes_tx": 3305022973,
			"packets_rx": 123395780,
			"bytes_rx": 161648374409
		},
		"dc:a6:32:24:e1:06": {
			"mac": "dc:a6:32:24:e1:06",
			"packets_tx": 131688,
			"bytes_tx": 15762308,
			"packets_rx": 148122,
			"bytes_rx": 441049053
		},
		"24:fb:e3:bc:27:3c": {
			"mac": "24:fb:e3:bc:27:3c",
			"packets_tx": 19388242,
			"bytes_tx": 6742191626,
			"packets_rx": 32727142,
			"bytes_rx": 33845494120
		},
		"de:7f:1d:71:52:73": {
			"mac": "de:7f:1d:71:52:73",
			"packets_tx": 29787041,
			"bytes_tx": 2519007785,
			"packets_rx": 129503309,
			"bytes_rx": 192529106664
		},
		"68:37:e9:9f:60:50": {
			"mac": "68:37:e9:9f:60:50",
			"packets_tx": 281276,
			"bytes_tx": 126209168,
			"packets_rx": 305246,
			"bytes_rx": 172565879
		},
		"6c:6a:77:da:3a:86": {
			"mac": "6c:6a:77:da:3a:86",
			"packets_tx": 5575128,
			"bytes_tx": 683780944,
			"packets_rx": 33289637,
			"bytes_rx": 46810503967
		},
		"00:11:32:e9:0f:42": {
			"mac": "00:11:32:e9:0f:42",
			"packets_tx": 458230,
			"bytes_tx": 182039169,
			"packets_rx": 71525,
			"bytes_rx": 9858638
		},
		"2c:f0:5d:96:5b:4b": {
			"mac": "2c:f0:5d:96:5b:4b",
			"packets_tx": 1004562676,
			"bytes_tx": 1217121386201,
			"packets_rx": 406806034,
			"bytes_rx": 306950019176
		},
		"42:f4:29:cd:5d:07": {
			"mac": "42:f4:29:cd:5d:07",
			"packets_tx": 5674356,
			"bytes_tx": 1681845850,
			"packets_rx": 20631409,
			"bytes_rx": 25821463919
		},
		"d2:10:1f:94:bb:18": {
			"mac": "d2:10:1f:94:bb:18",
			"packets_tx": 113573,
			"bytes_tx": 15486044,
			"packets_rx": 831887,
			"bytes_rx": 1081235385
		},
		"30:5a:3a:83:27:71": {
			"mac": "30:5a:3a:83:27:71",
			"packets_tx": 1928603,
			"bytes_tx": 207085255,
			"packets_rx": 9612774,
			"bytes_rx": 14109700506
		},
		"dc:a6:32:24:e1:07": {
			"mac": "dc:a6:32:24:e1:07",
			"packets_tx": 129598,
			"bytes_tx": 14856988,
			"packets_rx": 314758,
			"bytes_rx": 621132214
		}
	}
}
);