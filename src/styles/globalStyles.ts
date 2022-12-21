import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
		font-weight: 500;
		src: url('/fonts/gilroy-bold.woff2') format('woff2'),
			url('../fonts/gilroy-bold.woff') format('woff');
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

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html,
	body {
		max-width: 100vw;
		overflow-x: hidden;
	}
	a {
		color: inherit;
		text-decoration: none;
	}

	h3 {
		font-size: 22px;
		line-height: 1.2;
		font-family: "Tiempos Semibold", serif;
		color: #000;
	}

	p {
		font-size: 18px;
		font-family: "Tiempos Regular", serif;
	}
	`

export default GlobalStyle
