<template>
  <v-container>
    <v-card>
      <v-container>
        <v-card-actions>
          <router-link to="/transactions">
            <v-btn>Transactions</v-btn>
          </router-link>
          <router-link to="/trace">
            <v-btn>Trace order</v-btn>
          </router-link>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
a {
  text-decoration: none;
}
</style>