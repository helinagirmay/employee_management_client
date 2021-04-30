import "../src/styles/main.css";
import EmployeeTable from "./pages/employeeList";
import AddEmployee from "./pages/addEmployee";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const err = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const LinkUrl = from([
  err,
  new HttpLink({ uri: "http://localhost:8080/graphql" }),
]);
const clinet = new ApolloClient({
  cache: new InMemoryCache(),
  link: LinkUrl,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={clinet}>
        <EmployeeTable />
        <AddEmployee />
      </ApolloProvider>
    </div>
  );
}

export default App;
