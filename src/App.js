import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo-client";

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    </Provider>
  );
}

export default App;
