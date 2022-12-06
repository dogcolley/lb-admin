export default defineNuxtRouteMiddleware((to, from) => {
    //process.client && console.log(window)    
    process.server && console.dir('middleWare mysql')
    process.client && console.log('middleWare mysql')    
});
  