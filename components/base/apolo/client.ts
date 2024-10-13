import { ApolloClient, InMemoryCache } from '@apollo/client';
import {API_HOST, API_PORT} from "../../../constants/env/env_constants";

const client = new ApolloClient({
    uri: `${API_HOST}:${API_PORT}/graphql`,
    cache: new InMemoryCache(),
});

export default client;
