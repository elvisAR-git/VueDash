<template>
  <div class="home teal lighten-5">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      rel="stylesheet"
      type="text/css"
    />
    <br />
    <br />
    <v-container></v-container>
    <v-container>
      <h2 class="display-1 font-weight-light">
        Buyers Account|
        <span class="teal--text">Alan Ray</span>
      </h2>
    </v-container>
    <Previews></Previews>
    <orders></orders>
    <Factories></Factories>
    <Prices></Prices>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import orders from "../components/home components/orders.vue";
import Factories from "../components/home components/Factories.vue";
import Previews from "../components/home components/Previews.vue";
import Prices from "../components/home components/Prices.vue";
import Footer from "../components/home components/footer.vue";

export default {
  name: "Home",
  components: {
    orders,
    Factories,
    Previews,
    Prices,
    Footer
  }
};
</script>
