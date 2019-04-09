import * as singleSpa from "single-spa";
import createHistory from 'history/createBrowserHistory'
import { registerNewsApp } from './loadNews';
import { registerNavApp } from './loadNav';

const history = createHistory()

registerNewsApp({ history })
registerNavApp({ history });

singleSpa.start();