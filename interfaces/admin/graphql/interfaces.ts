export interface GraphQLRequestInterface {
    query: string;
    variables?: Record<string, any>;
}

export interface GraphQLResponseInterface<T> {
    data: T;
    errors?: Array<{ message: string }>;
}
