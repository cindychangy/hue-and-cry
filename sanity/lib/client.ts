import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, previewToken } from '../env';

const isDev = process.env.NODE_ENV === 'development';

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
	token: isDev ? previewToken : undefined,
});
