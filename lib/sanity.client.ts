import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../lib/sanity.api';

export const client = createClient({
	projectId,
	dataset,
	useCdn,
	apiVersion,
});
