import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/context/AuthProvider";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import Laboratory from "./components/PrivateRoute/Laboratory/Laboratory";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Registration from "./components/Registration/Registration";
import SingleService from "./components/SingleService/SingleService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/laboratory">
              <Laboratory></Laboratory>
            </PrivateRoute>
            <PrivateRoute path="/service/:id">
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
