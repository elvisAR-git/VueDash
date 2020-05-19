<template>
  <v-container>
    <v-app-bar app>
      <v-btn text depressed large v-on:click="toggleNav">
        <v-icon>menu</v-icon>
      </v-btn>
      <h2>
        CoffeeAfrica|
        <span class="teal--text">Home</span>
      </h2>
      <v-spacer></v-spacer>
      <v-text-field hide-details single-line label="Search dashboard" prepend-icon="search"></v-text-field>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app class="grey lighten-4" v-model="drawer">
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Buyer</v-list-item-title>
            <v-list-item-subtitle>alanray459@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item v-for="link in links" :key="link.text" link router :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "toc", text: "Transactions", route: "/transactions" }
      ]
    };
  },
  methods: {
    toggleNav() {
      this.drawer = !this.drawer;
      console.log(this.drawer);
    }
  }
};
</script>
