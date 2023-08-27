'use client'

import React, { ReactNode } from 'react'

import { SiteHeader } from './header'
import { SiteFooter } from './footer'

export default function PageTemplate({ children }: { children: ReactNode }) {
	return (
		<>
			<SiteHeader />
			{children}
			<SiteFooter />
		</>
	)
}
