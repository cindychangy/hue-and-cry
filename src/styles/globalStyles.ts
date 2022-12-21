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

	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	html, body {
		height: 100%;
	}

	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}

	a {
		transition: color .2s ease-in-out;
	}

	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
	}

	h2 {
		font-size: 30px;
		line-height: 1.2;
		font-family: "Tiempos Semibold", serif;
	}

	h3 {
		font-size: 22px;
		line-height: 1.2;
		font-family: "Tiempos Semibold", serif;
		color: #000;
	}

	h5 {
		font-size: 10px;
		color: #FF8600;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-family: 'Gilroy', sans-serif;
	}

	p {
		font-size: 18px;
		font-family: "Tiempos Regular", serif;
	}
	`

export default GlobalStyle
