<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      rel="stylesheet"
      type="text/css"
    />
    <Nav></Nav>
    <router-view />
  </v-app>
</template>

<script>
import Nav from "./components/home components/Nav.vue";

export default {
  name: "App",

  components: {
    Nav
  },

  data: () => ({
    //
  })
};
</script>
