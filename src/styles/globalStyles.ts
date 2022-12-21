import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { breakpoint } from '../../src/constants/theme'

const GlobalStyle = createGlobalStyle`
	${reset}
	@font-face {
		font-family: 'GT America';
		font-style: normal;
		font-weight: 400;
		src: url('/fonts/gt-america-regular.woff2') format('woff2'),
			url('../fonts/gt-america-regular.woff') format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'GT America Bold';
		font-style: normal;
		font-weight: 600;
		src: url('/fonts/gt-america-bold.woff2') format('woff2'),
			url('../fonts/gt-america-bold.woff') format('woff');
		font-display: swap;
	}
		@font-face {
		font-family: 'Gilroy Bold';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/gilroy-bold.woff2') format('woff2'),
			url('../fonts/gilroy-bold.woff') format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'Tiempos Text';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/tiempos-regular-webfont.woff2') format('woff2'),
			url('../fonts/tiempos-regular-webfont.woff') format('woff');
		font-display: swap;
	}

	@font-face {
		font-family: 'Tiempos Text Semibold';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/tiempos-semibold-webfont.woff2') format('woff2'),
			url('../fonts/tiempos-semibold-webfont.woff') format('woff');
		font-display: swap;
	}

	html {
		/* 62.5% of 16px browser = 10px */
		font-size: 62.5%;
	}

	body {
		font-size: 1.6rem;
		font-family: 'Tiempos', serif;
    line-height: 1.7;
		-webkit-font-smoothing: antialiased;
	}

	a {
		transition: color .2s ease-in-out;
	}

	h1 {
		font-family: "Tiempos Text Semibold", serif;
		font-weight: 700;
		font-size: 4.6rem;
		line-height: 1.1;

		@media ${breakpoint.md} {
			font-size: 3.5rem;
		}
	}

	h2 {
		font-size: 3rem;
		line-height: 1.2;
		font-family: "Tiempos Text Semibold", serif;
	}

	h3 {
		font-size: 2.2rem;
		line-height: 1.2;
		font-family: "Tiempos Text Semibold", serif;
		color: #000;
	}

	h4 {
		font-size: 2rem;
		color: #FF8600;
		font-family: 'Gilroy Bold', sans-serif;
	}

	h5 {
		font-size: 1.1rem;
		font-weight: 600;
		line-height: 1;
		color: #FF8600;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-family: 'GT America', sans-serif;
	}

	p {
		font-size: 1.8rem;
		font-family: "Tiempos Text", serif;
	}
	`

export default GlobalStyle
