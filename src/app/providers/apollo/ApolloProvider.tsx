'use client'

import { ReactNode } from "react";
import { ApolloProvider as OriginalApolloProvider } from "@apollo/client/react";
import client from "./client";

const  ApolloProvider = ({ children }: { children: ReactNode }) => {
  return <OriginalApolloProvider client={client}>{children}</OriginalApolloProvider>;
}

export default ApolloProvider;