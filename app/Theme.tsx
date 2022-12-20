export const theme = {
	colors: {
		white: '#FFFFFF',
		black: '#000000',
		grayDark: '#333333',
		gray: '#999999',
		grayLight: '#EFEFEF',
		orange: '#F78250',
		orangeLight: '#FBF1E9',
	},
	fonts: {
		primary: '"tiempos-regular", sans-serif',
		secondary: '"Neue Haas Grotesk Medium", sans-serif',
	},
	fontSizes: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
	typography: {
		h1: {
			fontFamily: '"Neue Haas Grotesk Bold", sans-serif',
			fontSize: 68,
			lineHeight: 1,
		},
		h2: {
			fontFamily: '"Neue Haas Grotesk Medium", sans-serif',
			fontSize: 48,
			lineHeight: 1,
		},
		h3: {
			fontFamily: '"Neue Haas Grotesk Medium", sans-serif',
			fontSize: 22,
			lineHeight: 1.1,
		},
		h4: {
			fontFamily: "'Neue Haas Grotesk Bold', sans-serif",
			fontSize: 19,
			lineHeight: 1,
		},
		p: {
			fontSize: 90,
			fontFamily: '"tiempos-regular", sans-serif',
		},
		caption: {
			fontFamily: "'Neue Haas Grotesk Regular', sans-serif",
			fontSize: 14,
			lineHeight: 1,
		},
	},
}

const size = {
	sm: '600px',
	md: '900px',
	lg: '1200px',
	xl: '1536px',
}

export const breakpoint = {
	sm: `(min-width: ${size.sm})`,
	md: `(min-width: ${size.md})`,
	lg: `(min-width: ${size.lg})`,
	xl: `(min-width: ${size.xl})`,
}
