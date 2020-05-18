<template>
  <v-container>
    <v-card>
      <v-container>
        <h3>Price Line</h3>
        <line-chart :data="ChartData"></line-chart>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Prices",
  data: () => {
    return {
      ChartData: {
        Monday: 6,
        Teusday: 60,
        Wednesday: 40,
        Thursday: 70,
        Friday: 10,
        Saturday: 35,
        Sunday: 68
      }
    };
  }
};
</script>
