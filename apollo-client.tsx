import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_GRAPH_QL}`,
	cache: new InMemoryCache({
		addTypename: false,
	}),
})

export default client
