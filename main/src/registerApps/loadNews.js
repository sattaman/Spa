import * as singleSpa from "single-spa";
import { runScript } from "./utils";

const loadNews = async () => {
    await runScript('http://localhost:3010/static/js/bundle.js');
    await runScript('http://localhost:3010/static/js/0.chunk.js');
    await runScript('http://localhost:3010/static/js/main.chunk.js');
    return window.news;
};

export const registerNewsApp = () => {
    singleSpa.registerApplication('news', loadNews, () => true);
};
