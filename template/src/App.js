import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useNavigate,
} from "react-router-dom";
import { Button } from "react-bootstrap";
import { setLogin } from "./Store/reducers/UiReducer";

import Home from "./Pages/Home";

function App() {
  const isLogin = useSelector((state) => state.ui.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route
          path="/"
          exact
          element={
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <Button
                className="my-3"
                onClick={() => {
                  dispatch(setLogin({ isLogin: !isLogin }));
                }}
              >
                {isLogin ? "Login" : "Logout"}
              </Button>
              <Button onClick={() => {
                navigate('/home')
              }}>Go to Home </Button>
            </header>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
