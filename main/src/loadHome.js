import * as singleSpa from "single-spa";
import { runScript, matchingPathname } from "./utils";

const loadHome = async () => {
    await runScript('http://192.168.0.53:3003/static/js/main.js');
    return window.home;
};

export const registerHomeApp = (props) => {
    singleSpa.registerApplication('home', loadHome, matchingPathname(["/home"]), props);
};
