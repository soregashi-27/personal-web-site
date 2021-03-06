import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          {/* FIXME:ここが原因のエラーを解決する */}
          <Switch>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
