<template>
  <v-app class="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
   <v-bottom-navigation>
    <v-btn value="nearby">
      <span>Dashboard</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
    <v-btn value="recent">
      <span>history</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

  </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  public sum = 200
}
</script>

<style lang="scss">
  .app {
    max-width: 700px;
    margin: 0 auto;
  }
</style>
