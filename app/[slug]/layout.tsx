'use client'
import React from 'react'
import { ShadowElevation } from '../../src/components/shadowElevation'
import PostPage from './page'

export default function PostLayout() {
	return (
		<>
			<ShadowElevation />
			<PostPage />
		</>
	)
}
