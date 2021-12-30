import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo-client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Navigation />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ApolloProvider>
    </Provider>
  );
}

export default App;
