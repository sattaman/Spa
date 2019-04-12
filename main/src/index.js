import 'babel-polyfill'; 
import 'react-app-polyfill/ie11';

import * as singleSpa from "single-spa";
import createHistory from 'history/createBrowserHistory'
import { registerNewsApp } from './loadNews';
import { registerNavApp } from './loadNav';
import { registerHomeApp } from './loadHome';


const history = createHistory()

registerNewsApp({ history })
registerNavApp({ history });
registerHomeApp({ history });

singleSpa.start();