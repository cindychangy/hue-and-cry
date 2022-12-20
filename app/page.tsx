'use client'
import React from 'react'
import { SiteHeader } from '../components/header/header'
import { LayoutContainer } from '../components/layoutContainer/layoutContainer'

export default function Home() {
	return (
		<>
			<LayoutContainer>
				<SiteHeader />
			</LayoutContainer>
		</>
	)
}
