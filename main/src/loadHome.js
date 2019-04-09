import * as singleSpa from "single-spa";
import { runScript } from "./utils";

const loadHome = async () => {
    await runScript('http://localhost:3003/static/js/main.js');
    return window.home;
};

export const registerHomeApp = (props) => {
    singleSpa.registerApplication('home', loadHome, () => true, props);
};
