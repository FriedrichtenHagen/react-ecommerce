import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from "./RouteSwitch";

import { collection, getdocs} from "firebase/firestore"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);


