'use client'
import React from 'react'
import { SiteHeader } from '../components/header'
import { PostPreview } from '../components/postPreview'
import { LayoutContainer } from '../components/layoutContainer'

export default function Home() {
	return (
		<>
			<LayoutContainer>
				<SiteHeader />
				<PostPreview />
			</LayoutContainer>
		</>
	)
}
