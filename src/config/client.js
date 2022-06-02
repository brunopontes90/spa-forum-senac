import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";

export const client = new ApolloClient({
    link: new WebSocketLink({
        uri: 'ws://wired-egret-53.hasura.app/v1/graphql',
        options: {
            reconnect: true,
            connectionParams: {
                headers: {'x-hasura-admin-secret' : 'Qvw3hEjDarvGur5w6BPfq3TPcBYhN9FDn0jju4htakGrbRARVc7IDx7dIofSN67S'},
            }
        }
    }),
    cache: new InMemoryCache(),
});