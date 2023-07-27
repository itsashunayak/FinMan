import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import Reset from "./components/reset";
import AdminHome from "./components/adminHome";
import AddExpense from "./components/addExpense";
import EditExpense from "./components/editExpense";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <AdminHome /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user" element={<AdminHome />} />
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/AddExpense" element={<AddExpense/>}/>
          <Route path="/EditExpense" element={<EditExpense/>}/>
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
