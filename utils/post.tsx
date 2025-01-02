import { DateTime } from 'luxon';

export function getArticleTimestamp(date: string): string {
	// Always return the date in US Eastern Time
	return DateTime.fromISO(date).setZone('America/New_York').toISO()!;
}

export function formatArticleDate(date: string): string {
	// Always return the date in US Eastern Time
	// Get the timestamp
	const timestamp = getArticleTimestamp(date);

	return new Date(timestamp).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
