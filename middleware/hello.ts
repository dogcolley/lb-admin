export default defineNuxtRouteMiddleware((to, from) => {
    process.client && console.log(window)    
});
  