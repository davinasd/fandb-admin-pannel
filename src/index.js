import React, { useState } from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import Login from "views/auth/signIn/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ThemeEditorProvider>
          <HashRouter>
            <Switch>
              <Route path="/auth/sign-in/login">
                <Login setIsLoggedIn={setIsLoggedIn} />
              </Route>
              {isLoggedIn ? (
                <Route path="/admin" component={AdminLayout} />
              ) : (
                <Redirect to="/auth/sign-in/login" />
              )}
              <Redirect from="/" to="/admin/default" />
            </Switch>
          </HashRouter>
        </ThemeEditorProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
