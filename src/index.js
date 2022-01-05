import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles.css'

import Home from './components/Home/Home';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import Starships from './components/Starships/Starships';
import Vehicles from './components/Vehicles/Vehicles';
import Species from './components/Species/Species';
import Films from './components/Films/Films';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="films"     element={<Films />} />
          <Route path="people"    element={<People />} />
          <Route path="planets"   element={<Planets />} />
          <Route path="species"   element={<Species />} />
          <Route path="vehicles"  element={<Vehicles />} />
          <Route path="starships" element={<Starships />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
