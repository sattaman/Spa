import * as singleSpa from "single-spa";
import { runScript } from "./utils";

const loadNav = async () => {
    await runScript('http://localhost:3001/static/js/main.js');
    return window.nav;
};

export const registerNavApp = () => {
    singleSpa.registerApplication('nav', loadNav, () => true);
};
