import React, { useState } from 'react';
import { PROVINCES, PROVINCE_LEVEL_FILLS, MENU_OPTIONS } from './utils/constants';


const MapTooltip = ({ visible, position, content }) => {
	if (!visible) {return null;}

	const tooltipStyle = {
		top: position.y,
		left: position.x,
	};

	return <span style={tooltipStyle} className="map-tooltip">{content}</span>;
};

const PhilippinesMapJSX = ({
	provinceLevels,
	setSelectedProvinceIndex,
	setMenuPosition,
	setMenuVisible,
	totalLevel,
}) => {
	const [tooltipVisible, setTooltipVisible] = useState(false);
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
	const [tooltipContent, setTooltipContent] = useState('');

	const handleProvinceClick = (event) => {
		const offsetY =
      event.target.getBoundingClientRect().y + 210 - window.innerHeight < 0
      	? 0
      	: event.target.getBoundingClientRect().y + 210 - window.innerHeight;
		const offsetX =
      event.target.getBoundingClientRect().x + 200 - window.innerWidth < 0
      	? 0
      	: event.target.getBoundingClientRect().x + 200 - window.innerWidth;
		setSelectedProvinceIndex(event.target.getAttribute('index'));
		setMenuPosition({
			x: event.target.getBoundingClientRect().x + window.pageXOffset - offsetX,
			y: event.target.getBoundingClientRect().y + window.pageYOffset - offsetY,
		});
		setMenuVisible(true);
	};

	const handleMouseEnter = (event) => {
		const targetElement = event.target.parentNode;
		const position = targetElement.getBoundingClientRect();
		setTooltipPosition({
			x: position.x + window.pageXOffset,
			y: position.y + window.pageYOffset,
		});
		const tooltipContent = targetElement.getAttribute('id').replace(/_/g, ' ');
		setTooltipContent(tooltipContent);
		setTooltipVisible(true);
	};

	const handleMouseLeave = () => {
		setTooltipVisible(false);
	};

	const handleOutsideClick = () => {
		setMenuVisible(false);
	};

	return (
		<>
			<MapTooltip
				visible={tooltipVisible}
				position={tooltipPosition}
				content={tooltipContent}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				id="svg574"
				version="1.1"
				viewBox="0 0 840 1221"
				xmlSpace="preserve"
			>
				<g id="Background">
					<path
						id="rect11351"
						fill="#9dc3fb"
						fillOpacity="1"
						strokeWidth="0.75"
						d="M-1.031 1.031H841.288V1223.7849999999999H-1.031z"
						onClick={(event) => handleOutsideClick(event)}
					></path>
				</g>

				{PROVINCES.map((province, provIndex) =>
					<g
						key={province.id}
						className="province-layer"
						id={province.id}
						transform={province.transform}
					>
						<path
							id={province.id}
							index={provIndex}
							fill={PROVINCE_LEVEL_FILLS[provinceLevels[provIndex]] ?? '#fff'}
							fillRule="nonzero"
							stroke="#000"
							strokeDasharray="none"
							strokeDashoffset="0"
							strokeLinecap="butt"
							strokeLinejoin="miter"
							strokeMiterlimit="4"
							strokeWidth="1"
							d={province.drawPath}
							opacity="1"
							vectorEffect="non-scaling-stroke"
							onClick={handleProvinceClick}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						></path>
					</g>,
				)}

				<g
					id="g1953"
					strokeDasharray="none"
					strokeDashoffset="0"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeOpacity="1"
					paintOrder="markers fill stroke"
					transform="matrix(1.63481 0 0 1.6089 -381.296 -140.998)"
				>
					<rect
						id="rect385"
						width="196.299"
						height="162.998"
						x="544.363"
						y="159.803"
						fill="#fff"
						stroke="#000"
						strokeWidth="1.5"
						display="inline"
						ry="6.754"
					></rect>
					{MENU_OPTIONS.map(({ label, level, fill }) => (
						<>
							<rect
								key = {level}
								id="rect1963"
								width="25.835"
								height="17.926"
								x="530.263"
								y={325.262 - (30*level)}
								fill={fill}
								fillOpacity="1"
								stroke="#000"
								strokeWidth="0.525"
								ry="4.118"
								transform="matrix(.6117 0 0 .62154 230.623 86.575)"
							></rect>
							<text
								id="text2045-4"
								x="568.828"
								y="309.117"
								fill="#fff"
								stroke="#000"
								strokeWidth="0.525"
								fontSize="16"
								transform="matrix(.6117 0 0 .62154 230.623 86.575)"
								xmlSpace="preserve"
							>
								<tspan
									id="tspan2047-85"
									x="568.828"
									y={340.262 - (30*level)}
									fill="#000"
									fillOpacity="1"
									stroke="none"
									strokeDasharray="none"
									strokeWidth="0.75"
									fontSize="16"
								>
									{label}
								</tspan>
							</text>
						</>
					))}
					
					
					
					
					<text
						xmlSpace="preserve"
						style={{ WebkitTextAlign: 'center', textAlign: 'center' }}
						id="text3282"
						x="637.208"
						y="147.041"
						fill="#000"
						fillOpacity="1"
						stroke="none"
						strokeWidth="0.462"
						fontSize="20"
						textAnchor="middle"
						transform="scale(.99204 1.00802)"
					>
						<tspan
							id="tspan3280"
							style={{ WebkitTextAlign: 'center', textAlign: 'center' }}
							x="637.208"
							y="147.041"
							strokeWidth="0.462"
							textAnchor="middle"
						>
              QCU SB Campus Level {totalLevel}
						</tspan>
					</text>
				</g>
			</svg>
		</>
	);
};

export default PhilippinesMapJSX;
