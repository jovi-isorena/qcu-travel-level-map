const PROVINCE_LEVEL_FILLS = [
	'white',
	'#3598db',
	'#30cc70',
	'#f3c218',
	'#d58337',
	'#e84c3d',
];

const MENU_OPTIONS = [
	{ label: 'Nakatulog na ko dito', level: 6, fill: '#e84c3d' },
	{ label: 'May klase/nagklase na', level: 5, fill: '#d58337' },
	{ label: 'Nagreview/gumawa ng assignment', level: 4, fill: '#f3c218' },
	{ label: 'Kumain na dito', level: 3, fill: '#30cc70' },
	{ label: 'May hinintay/sinundo/hinatid', level: 2, fill: '#3598db' },
	{ label: 'Dumaan lang', level: 1, fill: '99ccff' },
	{ label: 'Saan to?', level: 0, fill: 'white' },
];

// The order of this array is strictly important as it's used in encoding/decoding URL
const PROVINCES = [
	{
		id: 'Garden',
		transform: 'translate(50 150)',
		drawPath: 'm 0 0 l 227 0 l 0 57 l -143 0 l 0 85 l -83 0 z ',
	},
	{
		id: 'Canteen',
		transform: 'translate(50 100)',
		drawPath: 'm 114 131 l 49 0 l 0 104 l -49 0 z ',
	},
	{
		id: 'Bautista Building',
		transform: 'translate(50 100)',
		drawPath: 'm 164 184 l 68 0 l 0 117 l -119 0 l 0 -67 l 48 0 z',
	},
	{
		id: 'Auditorium',
		transform: 'translate(52 101)',
		drawPath: 'm 162 130 l 68 0 l 0 51 l -68 0 z ',
	},
	{
		id: 'Open Grounds',
		transform: 'translate(52 101)',
		drawPath: 'm 231 130 l 151 0 l 0 360 l -151 0 z ',
	},
	{
		id: 'Belmonte Hall',
		transform: 'translate(53 91)',
		drawPath: 'm 381 310 l 81 0 l 0 169 l -81 0 z ',
	},
	{
		id: 'Admin Building',
		transform: 'translate(52 91)',
		drawPath: 'm 111 337 l 120 0 l 0 125 l -119 0 z ',
	},
	{
		id: 'Flag Pole',
		transform: 'translate(52 91)',
		drawPath: 'm 231 489 l 166 0 l 0 74 l -167 0 z ',
	},
	{
		id: 'Mcdo Bldg',
		transform: 'translate(52 574)',
		drawPath: 'm 160 20 l 70 0 l 0 60 l 167 0 l 0 -60 l 63 0 l 0 123 l -303 0 z ',
	},
	{
		id: 'U-Park',
		transform: 'translate(50 572)',
		drawPath: 'm 114 86 l 46 0 l 0 59 l 303 0 l 0 76 l -353 0 z ',
	},
	{
		id: 'Gym',
		transform: 'translate(50 568)',
		drawPath: 'm 110 225 l 199 0 l 0 180 l -199 0 z ',
	},
	{
		id: 'Tech-Voc',
		transform: 'translate(50 568)',
		drawPath: 'm 110 405 l 199 0 l 0 54 l -199 0 z',
	},
	{
		id: 'Coop Multi-purpose Hall',
		transform: 'translate(50 568)',
		drawPath: 'm 392 361 l 77 0 l 0 107 l -77 0 z ',
	},
	{
		id: 'Mural Walkway',
		transform: 'translate(50 684)',
		drawPath: 'm 347 352 l 40 0 l -10 74 l 18 86 l -75 0 l -5 -27 l 29 -5 l 0 -37 l -12 -22 l 3 -36 z ',
	},
	{
		id: 'Triangle',
		transform: 'translate(50 634)',
		drawPath: 'm 139 430 l 129 0 l -61 98 z ',
	},
	{
		id: 'Metal Casting',
		transform: 'translate(-30 634)',
		drawPath: 'm 40 52 l 84 0 l 0 98 l -31 0 l 0 -52 l -54 0 z',
	},
	{
		id: 'Library',
		transform: 'translate(-31 634)',
		drawPath: 'm 40 97 l 53 0 l 0 53 l -52 0 z ',
	},
	{
		id: 'Benches',
		transform: 'translate(-31 634)',
		drawPath: 'm 40 152 l 84 0 l 0 58 l -84 0 z ',
	},
	{
		id: 'TMLQ Studio',
		transform: 'translate(-31 634)',
		drawPath: 'm 40 217 l 84 0 l 0 104 l -84 0 z ',
	},
];

const PROVINCES_LENGTH = PROVINCES.length;

const FB_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php?u=';

export { PROVINCES, PROVINCE_LEVEL_FILLS, PROVINCES_LENGTH, MENU_OPTIONS, FB_SHARE_URL };
