# Front-end for Book Swap project

A website that allows users to create wishlists, make an inventory for the books they own and trade books with other users. Built with react.js, javascript, html, css, bootstrap. Uses a django/python back end. Work in progress. 
The concept is inspired by minimalism, and made to give old books new life. The last page of a book doesn't have to be the end. 

![Gif](./example3.gif)

## Live App: [https://scotth527.github.io/bookswap_website/](https://scotth527.github.io/bookswap_website/) Work in progress

Built from the 4GeeksAcademy react-hello boilerplate here: [https://github.com/4GeeksAcademy/react-hello](https://github.com/4GeeksAcademy/react-hello)



# WebApp boilerplate with React and Cloud 9

Requirements: Make sure you have node version 8

##### Clone this boilerplate
```
$ git clone https://github.com/4GeeksAcademy/react-hello-webapp
```

## Start coding! 

Start the webpack server with live reload:
- `$ npm run c9` for Cloud 9 Users.
- `$ npm run dev-server` for windows, mac or linux.

### Styles
You can update the `styles/index.scss` or `js/index.js` depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them.

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/store.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)

The `Context.Provider` is already set, you can use the `Context.Consumer` to get the `store` and `actions` from the Context. Check `/views/demo.jsx` to see a demo.

## Publish your website! 

This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)
