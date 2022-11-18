<script setup lang="ts">
import { useRoute } from 'vue-router'
const appConfig = useAppConfig()
const route = useRoute()

const drawer = ref<boolean>(false);

function navigate(page:string){
  return navigateTo({
    path: `/${page}`,
    query: {
      name: `${page}`,
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
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>
            <h1 style="font-size:inherit">{{appConfig.title}}</h1>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn variant="text" icon="mdi-magnify"></v-btn>

          <v-btn variant="text" icon="mdi-filter"></v-btn>

          <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>


        <v-navigation-drawer
          expand-on-hover
          rail
          v-model="drawer"
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
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </header>

  <slot />

  <hr />

  <footer>
    <a href="https://github.com/posva/pinia">
      <svg class="logo" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z"
          fill="currentColor"
        />
      </svg>
      GitHub
    </a> - by
    <a href="https://github.com/posva">@posva</a> 2021
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
