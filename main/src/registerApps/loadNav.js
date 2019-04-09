import * as singleSpa from "single-spa";
import { runScript } from "./utils";

const loadNav = async () => {
    await runScript('http://localhost:3009/static/js/bundle.js');
    await runScript('http://localhost:3009/static/js/0.chunk.js');
    await runScript('http://localhost:3009/static/js/main.chunk.js');
    return window.news;
};

export const registerNavApp = () => {
    singleSpa.registerApplication('nav', loadNav, () => true);
};
