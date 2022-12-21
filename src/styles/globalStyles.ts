import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { breakpoint } from '../../src/constants/theme'

const GlobalStyle = createGlobalStyle`
	${reset}
	@font-face {
		font-family: 'Gilroy';
		font-style: normal;
		font-weight: 400;
		src: url('/fonts/gilroy-regular.woff2') format('woff2'),
			url('../fonts/gilroy-regular.woff') format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'Gilroy Semibold';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/gilroy-semibold.woff2') format('woff2'),
			url('../fonts/gilroy-semibold.woff') format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'Gilroy Bold';
		font-style: normal;
		font-weight: 600;
		src: url('/fonts/gilroy-bold.woff2') format('woff2'),
			url('../fonts/gilroy-bold.woff') format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'Tiempos';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/tiempos-regular-webfont.woff2') format('woff2'),
			url('../fonts/tiempos-regular-webfont.woff') format('woff');
		font-display: swap;
	}

	@font-face {
		font-family: 'Tiempos Semibold';
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
		font-family: "Tiempos Semibold", serif;
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
		font-family: "Tiempos Semibold", serif;
	}

	h3 {
		font-size: 2.2rem;
		line-height: 1.2;
		font-family: "Tiempos Semibold", serif;
		color: #000;
	}

	h4 {

	}

	h5 {
		font-size: 1.1rem;
		line-height: 1;
		color: #FF8600;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-family: 'Gilroy Semibold', sans-serif;
	}

	p {
		font-size: 1.8rem;
		font-family: "Tiempos", serif;
	}
	`

export default GlobalStyle
