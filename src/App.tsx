import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Header } from './components/Header'
import  { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Globe } from './components/Globe';
import { Chart } from './components/Chart';
import './App.scss';

export const App:React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className={"container"}>
          <Switch>
            <Route component={Main} path="/" exact />
            <Route component={Globe} path="/map" />
            <Route component={Chart} path="/chart"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}