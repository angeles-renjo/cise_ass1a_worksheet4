import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";
import Admin from "./components/Admin";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Empirical Evidence Database (SEED)</h1>
      </div>
      <ul className="header">
        <li><Link exact to="/">Home</Link></li>
        <li><Link to="/SEPractice">Select the Practice</Link></li>
        <li><Link to="/SubmitArticle">Submit an Article</Link></li>
        <li><Link to = "/Admin">Admin</Link></li>

      </ul>
      <div className="content">
        <Routes>
          <Route exact to="/" element={<Home />} />
          <Route path="/SEPractice" element={<SEPractice />} />
          <Route path="/SubmitArticle" element={<SubmitArticle />} />
          <Route path = "/admin" element = {<Admin />} />
          <Route path = '*' element = {<NotFoundPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
