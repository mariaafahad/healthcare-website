
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page from './Components/Page/Page';
import About from './Components/About/About';

import Speacilities from './Specialities/Speacilities';

import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import Doctors from './Doctors/Doctors';
import Payment from './Components/Payment/Payment';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute';
import Doctor from './Doctor/Doctor';
import Services from './Components/Services/Services';

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
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
          <Route path='/doctor'>
            <Doctor />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <PrivateRoute path='/speacilities'>
            <Speacilities />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
