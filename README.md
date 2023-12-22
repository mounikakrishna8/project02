# src/
## |--components/
###    |--BlogList.js
###    |--BlogPost.js
###    |--NavBar.js
###    |--Login.js
###    |--CreatePost.js
### |--App.js //  Set Up basic Routing by using React Router
### |--index.js


## Steps I followed in this project:
 1. create ViteApp
 2. remove all the boiler plate code
 3. import some font styles from google font and paste them in index.html page after meta
 4. removed boilerplate code from index.js and App.js
 5. gave style in index.html with margin: 0 to avoid the space in the left side of the page.
 6. rendered sample data on the page 
 ## working on individual components
 ### TopBar:
 7. making top bar as sticky bar by adding "position:sticky; top:0" in topbar.css file that means it's gonna visible when you scroll down to the page;
 8. make it flex "display:flex"to add all the elements horizontal, then center them "align-item: center", added font-family,
 9. used fontawesome to import some social media icons to the topbar, used font awesome cdn link in index.html 
 10. used fontawesome search icon in topright element.
 11. styled the navbar using css.
 12. 





### Project Setup Steps:

1. **Create a New Vite App:**
   - Initialize the new Vite application using the appropriate command, such as `npm create vite@latest`.

2. **Clean Up Boilerplate Code:**
   - Remove any unnecessary files and code that came with the Vite template to start with a clean slate.

3. **Import Google Fonts:**
   - Add the desired Google Font styles to the `index.html` file by including the `<link>` tag in the `<head>` section after the `<meta>` tags.

4. **Simplify Entry Point Files:**
   - Clear out boilerplate content from `index.js` and `App.js`, leaving only the necessary starting code.

5. **Set Global Style Rules:**
   - Include global CSS rules, like `margin: 0;` to the `body` or `*` selector in the `style` tag within `index.html`, to remove unwanted default margins.

6. **Display Sample Data:**
   - Begin rendering sample data on the page, ensuring that you have the elements and components in place for future data-driven development.
