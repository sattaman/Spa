import * as singleSpa from "single-spa";
import { runScript } from "./utils";

const loadNews = async () => {
    await runScript('http://localhost:3001/static/js/main.js');
    return window.news;
};

export const registerNewsApp = () => {
    singleSpa.registerApplication('nav', loadNews, () => true);
};
