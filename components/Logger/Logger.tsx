'use client';

import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Logger({ data }: { data: any }) {
	useEffect(() => {
		console.log('Browser log:', data);
	}, [data]);

	return null;
}
