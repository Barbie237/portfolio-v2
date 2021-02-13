import React from "react";

export const EmailIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			fill={fill}
			width={width}
			height={height}
		>
			<path d="M810.666667 170.666667H213.333333a128 128 0 0 0-128 128v426.666666a128 128 0 0 0 128 128h597.333334a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128z m-28.586667 85.333333L512 458.666667 241.92 256zM810.666667 768H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V309.333333l315.733333 236.8a42.666667 42.666667 0 0 0 25.6 8.533334 42.666667 42.666667 0 0 0 25.6-8.533334L853.333333 309.333333V725.333333a42.666667 42.666667 0 0 1-42.666666 42.666667z" />
		</svg>
	);
};

export const GithubIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			fill={fill}
			className={className}
			width={width}
			height={height}
		>
			<path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
		</svg>
	);
};

export const TwitterIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 48 48"
				fill={fill}
				className={className}
				width={width}
				height={height}
			>
				<path d="M44.719,10.305C44.424,10,43.97,9.913,43.583,10.091l-0.164,0.075c-0.139,0.064-0.278,0.128-0.418,0.191	c0.407-0.649,0.73-1.343,0.953-2.061c0.124-0.396-0.011-0.829-0.339-1.085c-0.328-0.256-0.78-0.283-1.135-0.066	c-1.141,0.693-2.237,1.192-3.37,1.54C37.4,7.026,35.071,6,32.5,6c-5.247,0-9.5,4.253-9.5,9.5c0,0.005,0,0.203,0,0.5l-0.999-0.08	c-9.723-1.15-12.491-7.69-12.606-7.972c-0.186-0.47-0.596-0.813-1.091-0.916C7.81,6.927,7.297,7.082,6.939,7.439	C6.741,7.638,5,9.48,5,13c0,2.508,1.118,4.542,2.565,6.124c-0.674-0.411-1.067-0.744-1.077-0.753	c-0.461-0.402-1.121-0.486-1.669-0.208c-0.546,0.279-0.868,0.862-0.813,1.473c0.019,0.211,0.445,4.213,5.068,7.235l-0.843,0.153	c-0.511,0.093-0.938,0.444-1.128,0.928C6.914,28.437,6.988,28.984,7.3,29.4c0.105,0.141,2.058,2.68,6.299,4.14	C11.334,34.295,8.222,35,4.5,35c-0.588,0-1.123,0.344-1.366,0.88c-0.244,0.536-0.151,1.165,0.237,1.607	C3.532,37.672,7.435,42,17.5,42C34.213,42,42,26.485,42,16v-0.5c0-0.148-0.016-0.293-0.022-0.439	c2.092-2.022,2.879-3.539,2.917-3.614C45.084,11.067,45.014,10.609,44.719,10.305z" />
			</svg>
		</>
	);
};

export const LinkedinIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 26 26"
			fill={fill}
			className={className}
			width={width}
			height={height}
		>
			<path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" />
		</svg>
	);
};

export const MenuIcon = ({
	fill = "currentColor",
	stroke = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={fill}
			className={className}
			width={width}
			height={height}
		>
			<path
				d="M4 6H20M4 12H12M4 18H20"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};

export const HomeIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			height={height}
		>
			<path
				d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z"
				fill={fill}
			/>
		</svg>
	);
};

export const CloseCircleIcon = ({
	fill = "currentColor",
	className,
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className={className}
			width={width}
			fill={fill}
			height={height}
		>
			<path d="M512 960C264.97 960 64 759.03 64 512S264.97 64 512 64c247.04 0 448 200.97 448 448S759.04 960 512 960z m0-861.54C283.98 98.46 98.46 283.98 98.46 512S283.98 925.54 512 925.54 925.54 740.02 925.54 512 740.02 98.46 512 98.46z" />
			<path d="M353.61 687.62c-4.41 0-8.82-1.68-12.18-5.05-6.73-6.73-6.73-17.63 0-24.37l316.78-316.78c6.73-6.73 17.63-6.73 24.37 0s6.73 17.63 0 24.37L365.79 682.57a17.14 17.14 0 0 1-12.18 5.05z" />
			<path d="M670.39 687.62c-4.41 0-8.82-1.68-12.18-5.05L341.43 365.79c-6.73-6.73-6.73-17.63 0-24.37s17.63-6.73 24.37 0L682.58 658.2c6.73 6.73 6.73 17.63 0 24.37a17.18 17.18 0 0 1-12.19 5.05z" />
		</svg>
	);
};
