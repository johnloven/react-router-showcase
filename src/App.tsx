import { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <input
        id="loggedInCheckbox"
        type="checkbox"
        onChange={(e) => setLoggedIn(e.target.checked)}
      />
      <label htmlFor="loggedInCheckbox">Logged in: {String(loggedIn)}</label>
      <nav>
        <ul>
          <li>
            <Link to="/">/</Link>
          </li>
          <li>
            <Link to="/login">/login</Link>
          </li>
          <li>
            <Link to="/public">/public</Link>
          </li>
          <li>
            <Link to="/authenticated">/authenticated</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route element="Everybody can see this page" path="/public" />
        <Route
          path="*"
          element={
            loggedIn ? (
              <Routes>
                <Route path="/" element="You are logged in" />
                <Route
                  path="/authenticated"
                  element="You can see this page because you are logged in"
                />
                <Route path="*" element="Page not found" />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element="You are not logged in" />
                <Route
                  path="/login"
                  element="You can see this page because you are not logged in"
                />
                <Route path="*" element="Page not found" />
              </Routes>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
