
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page from './Components/Page/Page';
import About from './Components/About/About';

import Speacilities from './Specialities/Speacilities';

import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import Doctors from './Doctors/Doctors';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path='/home'>
          <Page />
        </Route>
        <Route exact path='/'>
          <Page />
        </Route>
        <Route path='/about'>
          <About />

        </Route>
        {/* <Route exact path='/'>
            <Page />
          </Route> */}
        <Route path='/doctors'>
          <Doctors />
        </Route>
        <Route path='/speacilities'>
          <Speacilities />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <NotFound></NotFound>

        </Route>

      </Switch>
    </BrowserRouter>


  );
}

export default App;
