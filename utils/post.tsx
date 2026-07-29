import { DateTime } from 'luxon';
import { addWeeks, isBefore, parseISO } from 'date-fns';

const UPDATED_BADGE_DURATION_WEEKS = 4;

export function shouldShowUpdatedBadge(
	showUpdatedBadge?: boolean,
	updatedBadgeAt?: string
): boolean {
	if (!showUpdatedBadge || !updatedBadgeAt) {
		return false;
	}

	const expiryDate = addWeeks(
		parseISO(updatedBadgeAt),
		UPDATED_BADGE_DURATION_WEEKS
	);

	return isBefore(new Date(), expiryDate);
}

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
