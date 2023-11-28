import Fastify from "fastify";
import { ApolloServer, BaseContext } from "@apollo/server";
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify";
// ...

const fastify = Fastify();

const typeDefs: never[] = [];
const resolvers: never[] = [];

const apollo = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
  plugins: [fastifyApolloDrainPlugin(fastify)],
});

await apollo.start();
await fastify.register(fastifyApollo(apollo));
