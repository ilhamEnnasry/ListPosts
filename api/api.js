import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache(),
});

export const fetchPosts = async () => {
    const { data } = await client.query({
        query: gql`
        query {
            posts(options: {paginate: {page: 1, limit: 30}}) {
            data {
                id
                title
            }
            }
        }
        `,
    });
    return data.posts.data;
};
