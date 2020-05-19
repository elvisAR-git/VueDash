<template>
  <div class="home teal lighten-5" style="height:100%">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      rel="stylesheet"
      type="text/css"
    />
    <br />
    <br />
    <v-container></v-container>
    <v-container>
      <router-link to="/">
        <v-btn flat>
          <v-icon>arrow_back</v-icon>
          <span class="font-weight-light">Back to Dashboard</span>
        </v-btn>
      </router-link>
    </v-container>
    <Table></Table>
  </div>
</template>

<script>
import Table from "../components/transactions components/Table.vue";

export default {
  name: "Transactions",
  components: {
    Table
  },
  methods: {}
};
</script>

<style>
</style>