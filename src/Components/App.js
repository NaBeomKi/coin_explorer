import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router />
      <GlobalStyles />
    </HelmetProvider>
  );
}

export default App;
