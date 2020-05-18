<template>
  <div class="preview">
    <v-container>
      <v-row>
        <!-- ORDERS CARD -->
        <v-card class="mx-auto" max-width="344">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Updated</div>
              <v-list-item-title class="headline mb-1">{{orders.title}}</v-list-item-title>
              <v-list-item-subtitle>{{orders.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="80">
              <v-icon large>{{orders.icon}}</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>View Order list</v-btn>
          </v-card-actions>
        </v-card>
        <!-- TRADE CARD -->
        <v-card class="mx-auto" max-width="344">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Updated</div>
              <v-list-item-title class="headline mb-1">{{trades.title}}</v-list-item-title>
              <v-list-item-subtitle>{{trades.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="80">
              <v-icon large>{{trades.icon}}</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>View Transactions</v-btn>
          </v-card-actions>
        </v-card>

        <!--PRICE CARD  -->
        <v-card class="mx-auto" max-width="344">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Updated</div>
              <v-list-item-title class="headline mb-1">{{price.title}}</v-list-item-title>
              <v-list-item-subtitle>{{price.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="80">
              <v-icon large>{{price.icon}}</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>View Market</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Previews",
  data: () => {
    return {
      orders: {
        icon: "toc",
        title: "Orders",
        subtitle: "4|3 processed"
      },
      trades: {
        icon: "check_circle",
        title: "Tonnes Traded",
        subtitle: "5T"
      },
      price: {
        icon: "monetization_on",
        title: "Market Price",
        subtitle: "$2654.0 Per Metric Tonn"
      }
    };
  }
};
</script>
