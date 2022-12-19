'use client'
import React from 'react'
import Link from 'next/link'
import { SiteHeader } from '../components/header/header'

export default function Home() {
	return (
		<>
			<SiteHeader />
			<Link href='/dashboard'>Dashboard</Link>
		</>
	)
}
