'use client'
import React from 'react'
import Link from 'next/link'
import Header from '../components/header/header'

export default function Home() {
	return (
		<>
			<Header />
			<Link href='/dashboard'>Dashboard</Link>
		</>
	)
}
