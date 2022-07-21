import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import Header from "./components/header/Header";
import Login from "./components/loginPage/Login";
import { useUserContext } from "./store/Context";
import WatchPage from "./components/watchPage/WatchPage";
import MarketplacePage from "./components/marketplacePage/MarketplacePage";

function App() {
  const [{ user }, dispatch] = useUserContext();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <div className="app__content">
            <Header />
            <Routes>
              <Route
                path="/facebook-clone-reactjs-demo"
                exact
                element={<HomePage />}
              />
              <Route
                path="/facebook-clone-reactjs-demo/watch"
                exact
                element={<WatchPage />}
              />
              <Route
                path="/facebook-clone-reactjs-demo/marketplace"
                exact
                element={<MarketplacePage />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
