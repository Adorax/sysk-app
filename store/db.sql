-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 21, 2018 at 11:59 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `sysk`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'Bar/Pub'),
(2, 'Club'),
(3, 'Restaurant'),
(4, 'Coffee'),
(5, 'Brunch'),
(6, 'Visit'),
(7, 'Urbex'),
(8, 'Chill out places'),
(9, 'Rooftop'),
(1616, 'test cat'),
(1618, 'rggweffewwegreggreggregegerger');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` bigint(20) NOT NULL,
  `name_city` varchar(255) NOT NULL,
  `id_country` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `name_city`, `id_country`) VALUES
(1, 'Berlin', 80),
(2, 'Helsinki', 71),
(3, 'Budapest', 97),
(4, 'Prague', 55),
(5, 'Amsterdam', 155),
(6, 'London', 230),
(7, 'Brighton', 230),
(8, 'Bucharest', 181),
(9, 'Paris', 72),
(10, 'Geneva', 212),
(11, 'Lausanne', 212),
(12, 'Brussels', 21),
(13, 'Stockholm', 211),
(14, 'Vienna', 14),
(15, 'Madrid', 203),
(16, 'Barcelona', 203),
(17, 'Valencia', 203),
(18, 'Porto', 177),
(19, 'Lisbon', 177),
(20, 'Oslo', 165),
(21, 'Dublin', 104),
(1616, 'TestCity2', 1616),
(1618, 'gzr', 1);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` bigint(20) NOT NULL,
  `code_country` varchar(2) NOT NULL,
  `name_country` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `code_country`, `name_country`) VALUES
(1, 'AF', 'Afghanistan'),
(2, 'AL', 'Albania'),
(3, 'DZ', 'Algeria'),
(4, 'DS', 'American Samoa'),
(5, 'AD', 'Andorra'),
(6, 'AO', 'Angola'),
(7, 'AI', 'Anguilla'),
(8, 'AQ', 'Antarctica'),
(9, 'AG', 'Antigua and Barbuda'),
(10, 'AR', 'Argentina'),
(11, 'AM', 'Armenia'),
(12, 'AW', 'Aruba'),
(13, 'AU', 'Australia'),
(14, 'AT', 'Austria'),
(15, 'AZ', 'Azerbaijan'),
(16, 'BS', 'Bahamas'),
(17, 'BH', 'Bahrain'),
(18, 'BD', 'Bangladesh'),
(19, 'BB', 'Barbados'),
(20, 'BY', 'Belarus'),
(21, 'BE', 'Belgium'),
(22, 'BZ', 'Belize'),
(23, 'BJ', 'Benin'),
(24, 'BM', 'Bermuda'),
(25, 'BT', 'Bhutan'),
(26, 'BO', 'Bolivia'),
(27, 'BA', 'Bosnia and Herzegovina'),
(28, 'BW', 'Botswana'),
(29, 'BV', 'Bouvet Island'),
(30, 'BR', 'Brazil'),
(31, 'IO', 'British Indian Ocean Territory'),
(32, 'BN', 'Brunei Darussalam'),
(33, 'BG', 'Bulgaria'),
(34, 'BF', 'Burkina Faso'),
(35, 'BI', 'Burundi'),
(36, 'KH', 'Cambodia'),
(37, 'CM', 'Cameroon'),
(38, 'CA', 'Canada'),
(39, 'CV', 'Cape Verde'),
(40, 'KY', 'Cayman Islands'),
(41, 'CF', 'Central African Republic'),
(42, 'TD', 'Chad'),
(43, 'CL', 'Chile'),
(44, 'CN', 'China'),
(45, 'CX', 'Christmas Island'),
(46, 'CC', 'Cocos (Keeling) Islands'),
(47, 'CO', 'Colombia'),
(48, 'KM', 'Comoros'),
(49, 'CG', 'Congo'),
(50, 'CK', 'Cook Islands'),
(51, 'CR', 'Costa Rica'),
(52, 'HR', 'Croatia (Hrvatska)'),
(53, 'CU', 'Cuba'),
(54, 'CY', 'Cyprus'),
(55, 'CZ', 'Czech Republic'),
(56, 'DK', 'Denmark'),
(57, 'DJ', 'Djibouti'),
(58, 'DM', 'Dominica'),
(59, 'DO', 'Dominican Republic'),
(60, 'TP', 'East Timor'),
(61, 'EC', 'Ecuador'),
(62, 'EG', 'Egypt'),
(63, 'SV', 'El Salvador'),
(64, 'GQ', 'Equatorial Guinea'),
(65, 'ER', 'Eritrea'),
(66, 'EE', 'Estonia'),
(67, 'ET', 'Ethiopia'),
(68, 'FK', 'Falkland Islands (Malvinas)'),
(69, 'FO', 'Faroe Islands'),
(70, 'FJ', 'Fiji'),
(71, 'FI', 'Finland'),
(72, 'FR', 'France'),
(73, 'FX', 'France, Metropolitan'),
(74, 'GF', 'French Guiana'),
(75, 'PF', 'French Polynesia'),
(76, 'TF', 'French Southern Territories'),
(77, 'GA', 'Gabon'),
(78, 'GM', 'Gambia'),
(79, 'GE', 'Georgia'),
(80, 'DE', 'Germany'),
(81, 'GH', 'Ghana'),
(82, 'GI', 'Gibraltar'),
(83, 'GK', 'Guernsey'),
(84, 'GR', 'Greece'),
(85, 'GL', 'Greenland'),
(86, 'GD', 'Grenada'),
(87, 'GP', 'Guadeloupe'),
(88, 'GU', 'Guam'),
(89, 'GT', 'Guatemala'),
(90, 'GN', 'Guinea'),
(91, 'GW', 'Guinea-Bissau'),
(92, 'GY', 'Guyana'),
(93, 'HT', 'Haiti'),
(94, 'HM', 'Heard and Mc Donald Islands'),
(95, 'HN', 'Honduras'),
(96, 'HK', 'Hong Kong'),
(97, 'HU', 'Hungary'),
(98, 'IS', 'Iceland'),
(99, 'IN', 'India'),
(100, 'IM', 'Isle of Man'),
(101, 'ID', 'Indonesia'),
(102, 'IR', 'Iran (Islamic Republic of)'),
(103, 'IQ', 'Iraq'),
(104, 'IE', 'Ireland'),
(105, 'IL', 'Israel'),
(106, 'IT', 'Italy'),
(107, 'CI', 'Ivory Coast'),
(108, 'JE', 'Jersey'),
(109, 'JM', 'Jamaica'),
(110, 'JP', 'Japan'),
(111, 'JO', 'Jordan'),
(112, 'KZ', 'Kazakhstan'),
(113, 'KE', 'Kenya'),
(114, 'KI', 'Kiribati'),
(115, 'KP', 'Korea, Democratic People\'s Republic of'),
(116, 'KR', 'Korea, Republic of'),
(117, 'XK', 'Kosovo'),
(118, 'KW', 'Kuwait'),
(119, 'KG', 'Kyrgyzstan'),
(120, 'LA', 'Lao People\'s Democratic Republic'),
(121, 'LV', 'Latvia'),
(122, 'LB', 'Lebanon'),
(123, 'LS', 'Lesotho'),
(124, 'LR', 'Liberia'),
(125, 'LY', 'Libyan Arab Jamahiriya'),
(126, 'LI', 'Liechtenstein'),
(127, 'LT', 'Lithuania'),
(128, 'LU', 'Luxembourg'),
(129, 'MO', 'Macau'),
(130, 'MK', 'Macedonia'),
(131, 'MG', 'Madagascar'),
(132, 'MW', 'Malawi'),
(133, 'MY', 'Malaysia'),
(134, 'MV', 'Maldives'),
(135, 'ML', 'Mali'),
(136, 'MT', 'Malta'),
(137, 'MH', 'Marshall Islands'),
(138, 'MQ', 'Martinique'),
(139, 'MR', 'Mauritania'),
(140, 'MU', 'Mauritius'),
(141, 'TY', 'Mayotte'),
(142, 'MX', 'Mexico'),
(143, 'FM', 'Micronesia, Federated States of'),
(144, 'MD', 'Moldova, Republic of'),
(145, 'MC', 'Monaco'),
(146, 'MN', 'Mongolia'),
(147, 'ME', 'Montenegro'),
(148, 'MS', 'Montserrat'),
(149, 'MA', 'Morocco'),
(150, 'MZ', 'Mozambique'),
(151, 'MM', 'Myanmar'),
(152, 'NA', 'Namibia'),
(153, 'NR', 'Nauru'),
(154, 'NP', 'Nepal'),
(155, 'NL', 'Netherlands'),
(156, 'AN', 'Netherlands Antilles'),
(157, 'NC', 'New Caledonia'),
(158, 'NZ', 'New Zealand'),
(159, 'NI', 'Nicaragua'),
(160, 'NE', 'Niger'),
(161, 'NG', 'Nigeria'),
(162, 'NU', 'Niue'),
(163, 'NF', 'Norfolk Island'),
(164, 'MP', 'Northern Mariana Islands'),
(165, 'NO', 'Norway'),
(166, 'OM', 'Oman'),
(167, 'PK', 'Pakistan'),
(168, 'PW', 'Palau'),
(169, 'PS', 'Palestine'),
(170, 'PA', 'Panama'),
(171, 'PG', 'Papua New Guinea'),
(172, 'PY', 'Paraguay'),
(173, 'PE', 'Peru'),
(174, 'PH', 'Philippines'),
(175, 'PN', 'Pitcairn'),
(176, 'PL', 'Poland'),
(177, 'PT', 'Portugal'),
(178, 'PR', 'Puerto Rico'),
(179, 'QA', 'Qatar'),
(180, 'RE', 'Reunion'),
(181, 'RO', 'Romania'),
(182, 'RU', 'Russian Federation'),
(183, 'RW', 'Rwanda'),
(184, 'KN', 'Saint Kitts and Nevis'),
(185, 'LC', 'Saint Lucia'),
(186, 'VC', 'Saint Vincent and the Grenadines'),
(187, 'WS', 'Samoa'),
(188, 'SM', 'San Marino'),
(189, 'ST', 'Sao Tome and Principe'),
(190, 'SA', 'Saudi Arabia'),
(191, 'SN', 'Senegal'),
(192, 'RS', 'Serbia'),
(193, 'SC', 'Seychelles'),
(194, 'SL', 'Sierra Leone'),
(195, 'SG', 'Singapore'),
(196, 'SK', 'Slovakia'),
(197, 'SI', 'Slovenia'),
(198, 'SB', 'Solomon Islands'),
(199, 'SO', 'Somalia'),
(200, 'ZA', 'South Africa'),
(201, 'GS', 'South Georgia South Sandwich Islands'),
(202, 'SS', 'South Sudan'),
(203, 'ES', 'Spain'),
(204, 'LK', 'Sri Lanka'),
(205, 'SH', 'St. Helena'),
(206, 'PM', 'St. Pierre and Miquelon'),
(207, 'SD', 'Sudan'),
(208, 'SR', 'Suriname'),
(209, 'SJ', 'Svalbard and Jan Mayen Islands'),
(210, 'SZ', 'Swaziland'),
(211, 'SE', 'Sweden'),
(212, 'CH', 'Switzerland'),
(213, 'SY', 'Syrian Arab Republic'),
(214, 'TW', 'Taiwan'),
(215, 'TJ', 'Tajikistan'),
(216, 'TZ', 'Tanzania, United Republic of'),
(217, 'TH', 'Thailand'),
(218, 'TG', 'Togo'),
(219, 'TK', 'Tokelau'),
(220, 'TO', 'Tonga'),
(221, 'TT', 'Trinidad and Tobago'),
(222, 'TN', 'Tunisia'),
(223, 'TR', 'Turkey'),
(224, 'TM', 'Turkmenistan'),
(225, 'TC', 'Turks and Caicos Islands'),
(226, 'TV', 'Tuvalu'),
(227, 'UG', 'Uganda'),
(228, 'UA', 'Ukraine'),
(229, 'AE', 'United Arab Emirates'),
(230, 'GB', 'United Kingdom'),
(231, 'US', 'United States'),
(232, 'UM', 'United States minor outlying islands'),
(233, 'UY', 'Uruguay'),
(234, 'UZ', 'Uzbekistan'),
(235, 'VU', 'Vanuatu'),
(236, 'VA', 'Vatican City State'),
(237, 'VE', 'Venezuela'),
(238, 'VN', 'Vietnam'),
(239, 'VG', 'Virgin Islands (British)'),
(240, 'VI', 'Virgin Islands (U.S.)'),
(241, 'WF', 'Wallis and Futuna Islands'),
(242, 'EH', 'Western Sahara'),
(243, 'YE', 'Yemen'),
(244, 'ZR', 'Zaire'),
(245, 'ZM', 'Zambia'),
(246, 'ZW', 'Zimbabwe'),
(1616, 'TC', 'TestCountry');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(4),
(4),
(4),
(4),
(4),
(4);

-- --------------------------------------------------------

--
-- Table structure for table `pic`
--

CREATE TABLE `pic` (
  `id` bigint(20) NOT NULL,
  `is_banner` bit(1) NOT NULL,
  `link_pic` varchar(255) NOT NULL,
  `id_place` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `place`
--

CREATE TABLE `place` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `name_place` varchar(255) NOT NULL,
  `id_city` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `place`
--

INSERT INTO `place` (`id`, `address`, `description`, `name_place`, `id_city`) VALUES
(1, 'Kazinczy u. 14', 'Huge pub with old mismatched items & a disused Trabant car, with music, food, market & a garden.', 'Szimpla Kert', 3),
(3, 'Akácfa utca 49-51', 'Huge complex converted from 2 houses, with theatrical decor, 6 bars, 3 dance floors & 2 gardens.', 'Instant', 3),
(4, 'Lovas út 4/c', 'The Hospital in the Rock Nuclear Bunker Museum (Sziklakórház Atombunker Múzeum) is part of an approximately 6-mile (10-km) stretch of interconnected caves and cellars beneath Buda Castle Hill. This museum is dedicated to a former secret emergency hospital and nuclear bunker.', 'Hospital in the Rock', 3),
(5, 'Kelenhegyi út 4', 'Gellért Thermal Baths is the art nouveau, historical thermal bath of Budapest since 1918. It offers both health and wellness services, such as aroma and thermal massages, lavender treatment, spa pedicure and private bathing. Relaxing wellness services at Gellért Baths, a must-to-do programme in Budapest.', 'Gellert bath', 3),
(6, 'Akácfa u. 49-51', 'If you’re tired of average party places spend a night at Fogas Ház, one of the vanguards of the ruin pub scene in Akácfa utca. This pub has long been a catchment basin for arts and artists, but it was not until 2017 that it reached its current form and popularity.', 'Fogas Ház', 3),
(7, 'Karl-Marx-Straße 66 (Located in Neukölln Arcaden rooftop)', 'Rooftop Bar Klunkerkranich is hardly a secret anymore, this place is still super cool and unique. Take the subway to Rathaus Neukölln  (U7) and walk to the somewhat sad looking Neukölln Arkaden (mall). Once in there, find the elevators that take you to the highest possible floor. Once you get out, you will find yourself in a parking garage atop the mall. Walk up to the ramp with the walls adorned by a funky vertical garden. You are now at one of the funkiest and coolest places to watch the sunset in Berlin. Wether you sit by the rooftop garden or on the benches, tables and steps of the bar area, you are in for a treat.', 'Klunkerkranich', 1),
(8, 'Budapester Str. 40 (rooftop)', 'The top floor Monkey Bar with panoramic view and perfect sundowner terrace is the hot spot after dusk. An international choice of drinks and fine wine as well as bar snacks from the NENI kitchen are served. Regular DJ lines and live music events take place at the Monkey Bar. The bar can be booked exclusively upon request and has a direct express lift from street level.', 'Monkey Bar', 1),
(9, 'Sonnenallee 221', 'Housed in a former grain mill in Neukölln, Griessmuehle has one large dance floor inside, a smaller space in the basement and a half-outdoor spot where the club hosts afterhours. It has a sprawling garden complete with grain silos, various makeshift structures and benches looking out onto a canal. Programming touches on all of Berlin\'s favorite sounds—house, techno, disco, even a bit of UK bass.', 'Griessmuehle', 1),
(1616, 'textééééé', 'Martin newjbfkjewbkjfb wjkb fjkbewjk b', 'Modifiééééé', 21);

-- --------------------------------------------------------

--
-- Table structure for table `place_category`
--

CREATE TABLE `place_category` (
  `id` bigint(20) NOT NULL,
  `id_category` bigint(20) NOT NULL,
  `id_place` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `place_category`
--

INSERT INTO `place_category` (`id`, `id_category`, `id_place`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 1, 3),
(4, 2, 3),
(5, 6, 4),
(6, 8, 5),
(7, 1, 6),
(8, 1, 7),
(9, 9, 7),
(10, 1, 8),
(11, 9, 8),
(12, 2, 9),
(1616, 1616, 1616);

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `id` bigint(20) NOT NULL,
  `like_place` bit(1) NOT NULL,
  `id_place` bigint(20) NOT NULL,
  `id_user` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `username`) VALUES
(1, 'jeremy.maret@gmail.com', '$2a$10$n.jvCU57sCujb/rcmajf..mhpWSkl0nSA4yZfdHaUmA/DkBaL8a1q', 'maret'),
(3, 'fweggfewf', '$2a$10$rtLJhnApi9eyOwuaO8.QX.UMkpLhjOVT.rCcDZdKh4Kv5B2aBKaPO', 'fwegrggrebjnbgjkwgbjkebrjgbjfewfwefwfwefwefewfewfw'),
(4, 'euehu@gmaiudi.co', '$2a$10$NrkOYfGjHOJpZGDaunwBJeGzkokl1dRF21md5BPC4AiN2MIZE10IG', 'adorax');

-- --------------------------------------------------------

--
-- Table structure for table `userapi`
--

CREATE TABLE `userapi` (
  `id` bigint(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userapi`
--

INSERT INTO `userapi` (`id`, `password`, `role`, `username`) VALUES
(1, '$2a$10$9rEwvBoNcJKwqLAN3hr7ced8hKdPBNSC2s.on36jRj0lioJtTFEJO', 'ADMIN', 'admin'),
(2, '$2a$10$7r./3G4D6Tbn6ANOMUBk0uLRLf0WUXNUmD0hjQ7CzHcL1s0HK/5Lq', 'USER', 'user'),
(10, '$2a$10$VNSde7r3MLgBcghbisbv8eEvw03OnH8F7m173wA4FvdvU2nv92YJi', 'ADMIN', 'ad'),
(8, '$2a$10$7QCO6QrwbkGDTo4UD7parOSSbTjsaZuU69QzOtlmBv2AnW20lujQm', 'ADMINiqfw', 'testeyyfwqf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1dmt4f3nfuon26epr3ueg4e` (`id_country`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pic`
--
ALTER TABLE `pic`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrj5gdtboyslrxnil7yybhxh5b` (`id_place`);

--
-- Indexes for table `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7fg677sexqss135juj4rg5pb3` (`id_city`);

--
-- Indexes for table `place_category`
--
ALTER TABLE `place_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdp4t8rtgn6k44vk7nar9dconw` (`id_category`),
  ADD KEY `FK84l2ot4lnyb1hdo9hvg5th22y` (`id_place`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKgemgii6octea2aryteku7fgc` (`id_place`),
  ADD KEY `FK6g53m1yx904ibufew3eyw3v86` (`id_user`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  ADD UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`);

--
-- Indexes for table `userapi`
--
ALTER TABLE `userapi`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_g57xl15xn91mtditpt7wka7pf` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1619;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1619;

--
-- AUTO_INCREMENT for table `place`
--
ALTER TABLE `place`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1619;

--
-- AUTO_INCREMENT for table `place_category`
--
ALTER TABLE `place_category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1617;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `userapi`
--
ALTER TABLE `userapi`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
