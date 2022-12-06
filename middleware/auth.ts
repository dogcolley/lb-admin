export default defineNuxtRouteMiddleware((to, from) => {
    if(process.client){
        console.log('auth check middleware')
        console.log(to)
        console.log(from)
    }

    //return redirect('/')

});
  