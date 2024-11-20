import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import { API_HOST, API_PORT } from "@/constants/env/env_constants";
import type {
    GraphQLRequestInterface,
    GraphQLResponseInterface,
} from "@/interfaces/admin/graphql/interfaces";

const GraphqlRequest = async <T>(
    request: GraphQLRequestInterface,
    queryUrl: string,
): Promise<AxiosResponse<GraphQLResponseInterface<T>>> => {
    const GRAPHQL_ENDPOINT = `${API_HOST}:${API_PORT}/graphql/${queryUrl}`;

    try {
        return await axios.post<GraphQLResponseInterface<T>>(GRAPHQL_ENDPOINT, request, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
    } catch (error) {
        const axiosError = error as AxiosError;
        throw new Error(axiosError.message);
    }
};

export default GraphqlRequest;
