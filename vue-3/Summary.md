        ### Introduction
        
        1. Creation of First Application using Vue CLI and Folder structure.
                https://vuejs.org/guide/introduction.html
                https://cli.vuejs.org/#getting-started
                npm install -g @vue/cli
                vue create <my-project>
                vue create vue-crash-course
                    Please pick a preset: (Use arrow keys)
                        ❯ Default ([Vue 3] babel, eslint)
                        Default ([Vue 2] babel, eslint)
                        Manually select features

                $ cd vue-crash-course
                $ npm run serve


        2. Creation of custom componenents ".vue" file .
            Vue js component ->  only file .vue
                App.vue is the root component
                Example : Buttton, nav
            Three parts in App.vue file
                html,js,css
             App.vue file
                <template>
                     html
                </template>
                <script>
                    js
                </script>
                <style>
                    ,css
                </style>
                http://localhost:8080 ---> index.html --->main.js ---->App.vue
                <div id="app">
                    <App/> injected automatically
                </div>
            createApp(App).mount('#app') App is rooute component
        3. Applying syles using CSS, Inline , Internal ,External .
                global Styles

                 <template>
                     html
                </template>
                <script>
                    js
                </script>
                <style>
                    @import "./styles.css";
                </style>
                
        4. Adding Boostrap to React JS Application and Examples . Font awesomme icons , Google font with Vue Js
                npm install bootstrap  @fortawesome/fontawesome-free
                https://www.npmjs.com/package/@fortawesome/fontawesome-free
                https://cdnjs.com/libraries/font-awesome/5.15.4
                    Add the link into public/ index.html
                    Install the package above
                        npm install bootstrap  @fortawesome/fontawesome-free
               Configure the boostrap and fontawesome
                    Go to main.js
                        import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
                        import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
                        import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
                        import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

                    Add the google fonts in global styles file
                        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap');

        5. Manage Props and States in Custom Components (Data Binding).
                Props
               Create the Customer.vue Component 
               Connect Customer Component to App.vue
                    go to App.vue -> add <customer />
                        <customer></customer>
        6. Event Handling in Vue JS with Examples .
        7. Form Handling in Vue JS with Examples . 
        8. Conditional and List Rendering inn Vue JS . (Ho to render annd iterate the list oof item in vue js)
        9. HTTP Calls in Vuee Js using Axios .(server connection with Vue js application and API calls using Axios)
                Install axios
                 npm install axios
        10. Vue JS Routing Concept and Examples.(How Routing works in Vue JS)
              Install the Vue Router
                npm install vue-router@4

            NOTE:
                https://github.com/vitejs/awesome-vite#vue-cli
