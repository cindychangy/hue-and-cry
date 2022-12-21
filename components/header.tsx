import React from 'react'
import styled, { css } from 'styled-components'
import { Twitter } from '@styled-icons/bootstrap'
import { breakpoint } from '../src/constants/theme'

const HeaderContainer = styled.div`
	width: 100%;
	background: #fff;
	align-items: center;
	justify-content: space-between;
	display: flex;

	@media ${breakpoint.md} {
		display: none;
	}
`

// const HeaderContainer = styled.div<{ post?: boolean }>`
// 	width: 100%;
// 	background: #fff;
// 	box-shadow: ${(props) =>
// 		props.post ? '0px 4px 5px rgba(0, 0, 0, 0.05)' : 'none'};
// 	align-items: center;
// 	justify-content: space-between;
// 	display: flex;
// 	margin-bottom: 40px;

// 	@media ${breakpoint.md} {
// 		display: none;
// 	}
// `

const Logo = styled.h3`
	${({ theme }) => css`
		font-family: 'Bebas Neue';
		font-size: 4.4rem;
		color: ${theme.colors.grayDark};
		font-weight: 400;
		margin: 0;
  		
		&:hover {
			textDecoration: 'none',
			opacity: 0.7,
  	}
	`};
`

const Navigation = styled.div`
	${({ theme }) => css`
		ul {
			list-style: none;

			li {
				display: inline-block;
				margin-right: 20px;
				font-family: ${theme.fonts.secondarySemibold};
				font-size: 1.7rem;

				a {
					text-decoration: none;
					color: ${theme.colors.black};

					&:hover {
						color: ${theme.colors.orange};
					}
				}
			}
		}
	`};
`

const Icons = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: center;

		a {
			display: inline-block;
			color: ${theme.colors.black};

			svg {
				width: 19px;
				height: 19px;
				margin-left: 7px;
			}
		}
	`};
`

export const SiteHeader = () => {
	return (
		<HeaderContainer>
			<Logo>Hue and Cry</Logo>
			<Navigation>
				<ul>
					<li>
						<a href="/missing">Missing</a>
					</li>
					<li>
						<a href="/highway-of-tears">Highway of Tears</a>
					</li>
					<li>
						<a href="/murdered">Murdered</a>
					</li>
					<li>
						<a href="/indigenous-women">Indigenous Women</a>
					</li>
					<li>
						<a href="/military">Military</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</Navigation>
			<Icons>
				<a
					href="https://twitter.com/thehueandcry"
					target="_blank"
					rel="noreferrer noopener"
				>
					<Twitter size="25" style={{ marginTop: '-8px' }} />
				</a>
				<a
					href="https://twitter.com/thehueandcry"
					target="_blank"
					rel="noreferrer noopener"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
					</svg>
				</a>
			</Icons>
		</HeaderContainer>
	)
}
