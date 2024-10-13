import axios, { AxiosError } from 'axios';
import { API_HOST, API_PORT } from "@/constants/env/env_constants";
import { GraphQLRequestInterface, GraphQLResponseInterface } from './interfaces'

const GraphqlRequest = async <T>(request: GraphQLRequestInterface, queryUrl: string): Promise<GraphQLResponseInterface<T>> => {
    const GRAPHQL_ENDPOINT = `${API_HOST}:${API_PORT}/graphql/${queryUrl}`;

    try {
        return await axios.post<GraphQLResponseInterface<T>>(GRAPHQL_ENDPOINT, request, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
    } catch (error) {
        const axiosError = error as AxiosError;
        throw new Error(axiosError.message);
    }
};

export default GraphqlRequest;
