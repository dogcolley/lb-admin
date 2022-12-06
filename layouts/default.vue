<script setup lang="ts">
import { useRoute } from 'vue-router'
const appConfig = useAppConfig()
const route = useRoute()

const drawer = ref<boolean>(false);

function navigate(page:string){
  return navigateTo({
    path: `/${page}`,
    query: {
      //name: `${page}`,
    }
  })
}

</script>

<template>
  <!-- TODO: add after https://github.com/nuxt/framework/issues/1909 -->
  <Head lang="en-US">
    <Title>⚡️🍍 Pinia + Nuxt 3</Title>
  </Head>

  <header>
    
    <v-card>
      <v-layout>

        <v-app-bar
          color="primary"
          prominent
          height="40"
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>
            <h1 style="font-size:inherit">{{appConfig.title}}</h1>
          </v-toolbar-title>

          <v-spacer ></v-spacer>

          <v-btn variant="text" icon="mdi-magnify" height="30"></v-btn>

          <v-btn variant="text" icon="mdi-filter" height="30"></v-btn>

          <v-btn variant="text" icon="mdi-dots-vertical" height="30"></v-btn>
        </v-app-bar>


        <v-navigation-drawer
          expand-on-hover
          rail
          v-model="drawer"
          navigation-drawer-height="30" 
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="home" value="home" @click="navigate('')"></v-list-item>
            <v-list-item prepend-icon="mdi-test-tube-empty" title="test" value="test" @click="navigate('test')"></v-list-item>
            <v-list-item prepend-icon="mdi-vuetify" title="vuetify" value="vuetify" @click="navigate('vuetify')"></v-list-item>
            <v-list-item prepend-icon="mdi-fruit-pineapple " title="pinia" value="pinia" @click="navigate('pinia')"></v-list-item>
            <v-list-item prepend-icon="mdi-database-search  " title="mysql" value="mysql" @click="navigate('mysql')"></v-list-item>
            <v-list-item prepend-icon="mdi-table  " title="table" value="table" @click="navigate('table')"></v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </header>

  <slot />

  <hr />

  <footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>
      <v-btn
        class="mx-4"
        icon="mdi-instagram"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  width: 1.5rem;
  height: 1.5rem;
  max-width: 100%;
  margin-bottom: 0;
  color: white;
}
</style>
