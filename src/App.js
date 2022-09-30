import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import AppLayout from './AppLayout';
import HomePage from './HomePage';
import RainFallLayout from './sketches/RainFallLayout';

import { APP_ROUTE_PREFIX } from "./constants";

const  App = (props) => {
  const { backgroundColor } = props;

  return (
    <div
      className="app"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path={APP_ROUTE_PREFIX} element={ <AppLayout /> }>
              <Route index element={ <HomePage /> }></Route>
              <Route path="rain" element={ <RainFallLayout /> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
