import AuthUser from "./components/AuthUser";
import NavbarDashboard from "./navbar/NavbarDashboard";
import NavbarHome from "./navbar/NavbarHome";

function App() {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <NavbarHome />;
  }
  return <NavbarDashboard />;
}

export default App;
