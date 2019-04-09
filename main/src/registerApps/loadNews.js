import * as singleSpa from "single-spa";
import { runScript } from "./utils";

const loadNews = async () => {
    await runScript('http://localhost:3002/static/js/main.js');
    return window.news;
};

export const registerNewsApp = (props) => {
    singleSpa.registerApplication('news', loadNews, () => true, props);
};
