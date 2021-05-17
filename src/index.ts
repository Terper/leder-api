import express from 'express'
import cors from "cors"
import { graphqlHTTP } from 'express-graphql'
import { rootValue } from './rootValue'
import { schema } from './schema'

const app = express();
const port = process.env.PORT || 4000

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
  }))
  
app.listen(port, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql")
})