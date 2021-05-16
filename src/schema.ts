import { buildSchema } from 'graphql';


export const schema = buildSchema(`
  type GeoPoint {
    lat: String
    lng: String
  }
  type Route {
    name: String
    description: String
    author: String
    points: [GeoPoint]
    image: String
    id: ID
  }
  type Query {
    routes: [Route]
    route(id: ID!): Route
  }
`);
