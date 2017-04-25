"use strict";

LD38.Song.level2 = () => new LD38.Song({
	hp      : 9,
	bpm     : 126,
	delay   : 1500,
	duration: 209000,
	file    : "ld38-level2",
	next    : 'level3',
	spacing : 15,
	background:"level_2",
	notes   : {
		
	//0 = chopper
	//1 = tank
	//2 = dunk
	//3 = bot
		
	//slow start
		0  : 4,
		4  : null,
		8  : null,
		12 : null,

		16 : 4,
		20 : null,
		24 : null,
		28 : null,

		32 : 4,
		36 : null,
		40 : null,
		44 : null,

		48 : 4,
		52 : null,
		56 : null,
		60 : null,

		64 : 1,
		68 : null,
			70 : 4,
		72 : null,
		76 : null,
		
		80 : 1,
		84 : null,
			86 : 4,
		88 : null,
		92 : null,

		96 : 1,
		100 : null,
			102 : 4,
		104 : null,
		108 : null,

		112 : 1,
		116 : null,
			118 : 4,
		120 : null,
		124 : null,

	//128 jock jams

		//128,
			//132,
			//136,
			140 : 1,
				142 : 1,

		//144,
			//148,
			//152,
			156 : 0,
				158 : 0,

		//160,
			//164,
			//168,
			172 : 1,
				174 : 1,

		//176 : 1,
			//180 : null,
			//184 : 4,
			188 : 0,
				190 : 0,
		
		192 : 3,
			//196,
			//200,
			204 : 1,
				206 : 1,
						
		208 : 3,
			//212,
			//116,
			220 : 0,
				222 : 0,
		
		224 : 3, 
			//228,
			//232,
			236 : 1,
				238 : 1,
		
		240 : 3,
			//244,
			//248,
			252 : 0,
				254 : 0,
		
	//256 jock jams vocals

		256 : 2,
			//260,
			264 : 0,
				266 : 0,
			268 : 1,
				270 : 1,
		 		
		272 : 3,
			//276
			280 : 4,
				282 : 4,
			284 : 0,
				286 : 0,
			
		288 : 3,
			//292
			296 : 0,
				298 : 0,
			300 : 4,
				302 : 4,
				
		304 : 3,
			308 : 3,
			312 : 1,
				314 : 1,
			316 : 0,
				318 : 0,
		
		320 : 2,
			324 : 3,
			328 : 0,
				330 : 0,
			332 : 1,
				334 : 1,
		
		336 : 3,
			340 : 3,
			344 : 4,
				346 : 4,
			348 : 0,
				350 : 0,
		
		352 : 3,
			356 : 3,
			360 : 0,
				362 : 0,
			364 : 4,
				366 : 4,
		
		368 : 3,
			372 : 3,
			376 : 1,
				378 : 1,
			380 : 0,
				382 : 0,
	
	//384 bridge

		384 : 3,
			388 : null,
				390 : 2,
			392 : null,
			396 : null,	
		
		400 : 3,
			404 : null,
				406 : 2,
			408 : null,
			412 : null,
		
		416 : 3,
			420 : null,
				422 : 1,
			424 : null,
			428 : 0,
		
		432 : 3,
			436 : null,
				438 : 2,
			440 : null,
			444 : null,
		
		448 : 3,
			452 : null,
				453 : 1,
			456 : null,
			560 : 1,
		
		464 : 3,
			468 : null,
				470 : 1,
			472 : null,
			476 : 0,
		
		480: 3,
			484 : null,
			488 : null,
			492 : 1,
		
		496 : 3,
			500 : null,
				502 : 3,
			504 : null,
			508 : 2,
		
	//512 chorus

		512 : 4,
			516 : 0,
				518 : 4,
			520 : null,
				522 : 4,
			524 : 0,
		
		528 : 4,
			532 : 0,
				534 : 4,
			536 : null,
				538 : 4,
			540 : 0,
				541 : 2,
				
		544 : 4,
			548 : 0,
				550 : 4,
			552 : null,
				554 : 4,
			556 : 0,
		
		560 : 4,
			564 : 0,
				566 : 4,
			568 : null,
				570 : 4,
			572 : 0,
				573 : 2,
		//
		
		576 : 1,
			580 : 3,
				582 : 1,
			584 : null,
				586 : 1,
			588 : 3,
		
		592 : 1,
			596 : 3,
				598 : 1,
			600 : null,
				602 : 1,
			604 : 3,
				605 : 2,
		
		608 : 1,
			612 : 3,
				614 : 1,
			616 : null,
				618 : 1,
			620 : 3,
		
		624 : 1,
			628 : 3,
				630 : 1,
			632 : null,
				634 : 1,
			636 : 3,
				637 : 2,
		
		//
		
		640 : 1,
			644 : 0,
				646 : 1,
			648 : null,
				650 : 1,
			652 : 0,
		
		656 : 1,
			660 : 0,
				662 : 1,
			664 : null,
				666 : 1,
			668 : 0,
				669 : 2,
		
		672 : 1,
			644 : 0,
				646 : 1,
			648 : null,
				650 : 1,
			652 : 0,
		
		688 : 1,
				690: 0,
			692 : 1,
				694 : 0,
			696 : 0,
				698 : 1,
			700 : 0,
				701 : 2,
		
		//
		
		704 : 4,
			708 : 3,
				710 : 4,
			712 : null,
				714 : 4,
			716 : 3,
		
		720 : 3,
				722: 0,
			724 : 1,
				726 : 0,
			728 : 0,
				730 : 1,
			732 : 0,
				733 : 2,
	
	//736 chorus halfway (guitar)

		736: 3,
			740 : null, 
				742 : 0,
			744: 0,
			748: null,
		
		//752 : 1,
			756 : 1,
			//760 : 3,
			764 : 1,
		
		768 : 3,
			772 : null,
				774 : 0,
			776 : 0,
			780 : null,
		
		//784,
			788 : 3,
			//792,
			796 : 2,
		
		800 : 3,
			804 : null,
				806 : 0,
			808 : 0,
			812 : null,
		
		//816,
			820 : 1,
			//824,
			828 : 1,
			
		832 : 3,
			836 : null,
				838 : 0,
			840 : 0,
			844 : null,
		
		//848,
			852 : 3,
			//856,
			860 : 2,
		
		864 : 3,
			868 : 4,
				870 : 4,
			872 : 4,
			876 : null,
		
		880 : 1,
			884 : 0,
			888 : 1,
				890 : 0,	
			892 : 1,
				894 : 0,
		
		896 : 3,
			900 : 4,
				902 : 4,
			904 : 4,
			908 : null,
		
		912 : 1,
			916 : 0,
			920 : 1,
				922 : 0,	
			924 : 1,
				926 : 0,
		
		928 : 3,
			932 : 4,
				934 : 4,
			936 : 4,
			940 : null,
		
		944 : 1,
			948 : 0,
			952 : 1,
				954 : 0,	
			956 : 1,
				958 : 0,
		
				
	//960 drum break 1
		
		960 : null,
				962 : 3,
			964 : null,
				966 : 3,
			968 : 2,
			972 : null,
			
		976 : null,
				978 : 3,
			980 : null,
				982 : 3,
			984 : 2,
			988 : null,
		
		992 : null,
				994 : 3,
			996 : null,
				998 : 3,
			1000 : 2,
			1004 : null,
		
		1008 : 1,
			1012 : 0,
			1016 : 1,
				1018 : 0,
			1020 : 1,
				1022 : 0,
		
	
	//1024 jock jams 2: funk edition
	
		1024 : 2,
			//1028
			//1032 : 1,
			//	1034 : 0,
			1036 : 1,
				1038 : 1,
		
		1040 : 3,
			//1044 : 3,
			//1048 : 1,
			1052 : 0,
				1054 : 0,
		
		1056 : 3,
			//1060 : 3,
			//1064 : 1,
			//	1066 : 0,
			1068 : 1,
				1070 : 1,
		
		1072 : 3,
			//1076 : 4,
			//1080 : 3,
			1084 : 0,
				1086 : 0,
				
		1088 : 2,
			//1092 : 3,
			//1096 : 1,
			//	1098 : 0,
			1100 : 1,
				1102 : 1,
		
		1104 : 3,
			//1108 : 4,
			//	1110 : 4,
			//1112 : 3,
			1116 : 0,
				1118 : 0,
		
		1120 : 3,
			//1124 : 3,
			//1128 : 1,
			//	1130: 0,
			1132 : 1,
				1134: 1,
				
		1136 : 3,
			//1140 : 3,
			//1144 : 1,
			//	1146: 0,
			1148 : 1,
				1150: 1,
		
	//1152 jock jams 2 vocals
		
		1152 : 2,
			1156 : 3,
			1160 : 4,
				1162: 1,
			1164 : 4,
				1166: 1,
		
		1168 : 4,
			1172 : 4,
			1176 : 1,
				1178: 0,
			1180 : 1,
				1182: 0,
		
		1184 : 3,
			1188 : 3,
			1192 : 4,
				1194 : 4,
			1196 : 1,
				1198 : 1,
		
		1200 : 4,
			1204 : 4,
			1208 : 1,
				1210 : 1,
			1212 : 0,	
				1214 : 0,
			
		1216 : 2,
			1220 : 3,
			1224 : 4,
				1226 : 1,
			1228 : 4,
				1230 : 1,
		
		1232 : 4,
			1236 : 4,
			1240 : 1,
				1242 : 0,
			1244 : 1,
				1246 : 0,
		
		1248 : 3,
			1252 : 3,
			1256 : 4,
				1258 : 4,
			1260 : 1,
				1262 : 1,
		
		1264 : 4,
			1268 : 4,
			1272 : 1,
				1274 : 1,
			1276 : 0,
				1278 : 0,
		
	//1280 chorus 2
		
		1280 : 4,
			1284 : 0,
				1286 : 4,
			1288 : null,
				1290 : 4,
			1292 : 0,
		
		1296 : 4,
			1300 : 0,
				1302 : 4,
			1304 : null,
				1306 : 4,
			1308 : 0,
				1309 : 2,
		
		1312 : 4,
			1316 : 0,
				1318 : 4,
			1320 : null,
				1322 : 4,
			1324 : 0,
		
		1328 : 4,
			1332 : 0,
				1334 : 4,
			1336 : null,
				1338 : 4,
			1340 : 0,
				1341 : 2,
				
		//
			
		1344 : 4,
			1348 : 0,
				1350 : 4,
			1352 : null,
				1354 : 4,
			1356 : 0,
		
		1360 : 4,
			1364 : 0,
				1366 : 4,
			1368 : null,
				1370 : 4,
			1372 : 0,
				1373 : 2,
		
		1376 : 4,
			1380 : 0,
				1382 : 4,
			1384 : null,
				1386 : 4,
			1388 : 0,
	
		1392 : 4,
			1396 : 0,
				1398 : 4,
			1400 : null,
				1402 : 4,
			1404 : 0,
				1305 : 2,
		
		//
		
		1408 : 4,
			1412 : 0,
				1414 : 4,
			1416 : null,
				1418 : 4,
			1420 : 0,
		
		1424 : 4,
			1428 : 0,
				1430 : 4,
			1432 : null,
				1434 : 4,
			1436 : 0,
				1437 : 2,
		
		1440 : 4,
			1444 : 0,
				1446 : 4,
			1448 : null,
				1450 : 4,
			1452 : 0,
		
		1456 : 4,
			1460 : 0,
				1462 : 4,
			1464 : null,
				1466 : 4,
			1468 : 0,
				1470 : 2,
		
		//
		
		1472 : 0,
				1474 : 1,
			1476 : 0,
				1478 : 1,
			1480 : 4,
				1482 : 4,
			1484 : null,
				1486 : 4,

		1488 : 3,
				1390 : 3,
			1492 : null,
				1494 : 2,
			1496 : null,
			1500 : null,
		
	//1504 bridge 2
		
		1504 : 3,
			1508 : null,
				1510 : 2,
			1512 : null,
			1516 : null,
		
		1520 : 3,
			1524 : null,
				1526 : 2,
			1528 : null,
			1532 : null,
		
		1536 : 3,
			1540 : null,
				1542 : 1,
			1544 : null,
			1548 : 0,
				
		1552 : 3,
			1556 : null,
				1558 : 2,
			1560 : null,
			1564 : null,
			
		1568 : 3,
			1572 : null,
				1574 : 1,
			1576 : null,
			1580 : 1,
		
		1584 : 3,
			1588 : null,
				1590 : 1,
			1592 : null,
			1596 : 0,
		
		1600 : 3,
			1604 : null,
			1608 : null,
			1612 : 1,
		
		1616 : 3,
			1620 : null,
				1622 : 3,
			1624 : null,
			1628 : 2,
		
	//1632 drum break 2
		
		1632 : null,
				1634 : 3,
			1636 : null,
				1638 : 3,
			1640 : 2,
			1644 : null,
			
		1648 : null,
				1650 : 3,
			1652 : null,
				1654 : 3,
			1656 : 2,
			1660 : null,
		
		1664 : null,
				1666 : 3,
			1668 : null,
				1670 : 3,
			1672 : 2,
			1676 : null,
		
		1680 : 1,
			1684 : 0,
			1688 : 1,
				1690 : 0,
			1692 : 1,
				1694 : 0,
		
		1696 : null,
		1700 : null,
		1704 : null,
		1708 : null,
		
		1712 : null,
		1716 : null,
		1720 : null,
		1724 : null,
		
		1728 : null,
		1732 : null,
		1736 : null,
		1740 : null,
		
		1744 : null,
		1748 : null,
		1752 : null,
		1756 : null,
		
		1760 : null,
		1764 : null,
		1768 : null,
		1772 : null,
	
	},
});

