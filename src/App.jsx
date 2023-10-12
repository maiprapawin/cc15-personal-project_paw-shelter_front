import { useAuth } from "./hooks/use-auth";
import Route from "./router/Route";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <h1>Loading...</h1>;
  }
  return <Route />;
}

export default App;
