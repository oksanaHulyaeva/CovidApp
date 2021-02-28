import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Table from './components/Table';
import Globe from './components/Globe';
import Chart from './components/Chart';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className={"container"}>
          <Switch>
            <Route component={Table} path="/" exact />
            <Route component={Globe} path="/map" />
            <Route component={Chart} path="/chart"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
