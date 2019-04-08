import * as singleSpa from 'single-spa';

export const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

const loadNav = () => import('../../nav/spaEntry');

const loadHome = () => import('../../news/spaEntry');

const loadNews = () => import('../../home/spaEntry');

/*
const loadHome = async () => {
    await runScript('http://localhost:3002/static/js/main.js');
    return window.home;
};

const loadNews = async () => {
    await runScript('http://localhost:3002/static/js/main.js');
    return window.news;
};
*/

singleSpa.registerApplication('nav', loadNav, () => true);
singleSpa.registerApplication('home', loadHome, l => l === '/');
singleSpa.registerApplication('news', loadNews, l => l.startsWith('news/'));