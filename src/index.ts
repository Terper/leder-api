import express from 'express'
import cors from "cors"
import { graphqlHTTP } from 'express-graphql'
import { rootValue } from './rootValue'
import { schema } from './schema'

const app = express();

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
  }))
  
app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql")
})