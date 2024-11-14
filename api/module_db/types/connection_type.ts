export type ConnectionType = {
    user: string,
    password: string,
    host: string,
    port?: number,
    database?: string,
    connectionString?: string,
    statement_timeout?: number,
    query_timeout?: number,
    lock_timeout?: number,
    application_name?: string,
    connectionTimeoutMillis?: number,
    idle_in_transaction_session_timeout?: number
}
