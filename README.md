# POC for single-spa

Child apps are not changed when running in development, and still run standalone. 
To function within the `single-spa` we bootstrap the production build. 


## To update existing CRA app for single-spa

Changes required to make an existing CRA app work with single-spa are fairly minimal.

1 ) You need to eject from CRA (it should be possible to instead fork react-scripts in the future if we wish)

2) Add new entry point to /config/paths for `single-spa` and update /webpack.config.js to use this entry point for production builds.

https://github.com/sattaman/Spa/commit/c7e0f010ad73b8df66e515681b0bcf8cfcc10a76

3) Add single-spa entry file and dependencies

https://github.com/sattaman/Spa/commit/62e3b0df70cf7e6910bee7c49fe4ab71e5c0e5a0


## Responding to react-router links

In order to respond to link clicks across apps we need to share a react-router history.

This is done as follows: https://github.com/sattaman/Spa/commit/3faee9333775481d21dfd91e5cdc7a30749f8e97


## Styles

Since all apps share a html page, we need to be as minimal and unobtrusive as possible with styles. In the example here, I have just included a normalize script in the parent app. We could also have included nothing. 

To set global styles from child apps we can make use of `createGlobalStyles` from `styled-components`. This allows global styles to be defined from child apps, which are removed again when the app is unmounted (the route changes). 
