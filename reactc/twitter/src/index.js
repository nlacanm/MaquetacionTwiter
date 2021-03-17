import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
 

const contenedor = document.getElementById('app');

ReactDOM.render(<Badges/>, contenedor);