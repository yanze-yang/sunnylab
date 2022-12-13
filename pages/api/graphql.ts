// apollo server setup for nextjs
import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";
import { resolvers } from "../../graphql/resolvers";
import { context } from "../../graphql/context";
import { typeDefs } from "../../graphql/schema";

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
