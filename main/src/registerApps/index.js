import * as singleSpa from "single-spa";
import { registerNewsApp } from './loadNews';
// import { registerNavApp } from './loadNav';

registerNewsApp()
// registerNavApp();

singleSpa.start();