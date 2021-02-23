import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import GlobalMap from './components/GlobalMap';
import Chart from './components/Chart';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className={"container"}>
          <Switch>
            <Route component={GlobalMap} path="/map" />
            <Route component={Main} path="/" exact />
            <Route component={Chart} path="/chart"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
