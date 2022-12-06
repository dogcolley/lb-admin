export default defineNuxtRouteMiddleware((to, from) => {
    //process.client && console.log(window)    
    process.client && console.log('hello')
    process.server && console.dir('?')
});
  