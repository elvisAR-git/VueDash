<template>
  <v-container>
    <h3>Recent Orders</h3>
    <v-data-table :headers="headers" :items="records" :items-per-page="5" class="elevation-1"></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "orders",
  data: () => {
    return {
      headers: [
        {
          text: "Order ID",
          sortable: true,
          value: "ID"
        },
        {
          text: "Factory",
          value: "factory"
        },
        {
          text: "Amount",
          value: "amount"
        },
        {
          text: "Date&Time",
          value: "date"
        },
        {
          text: "Transaction Validity",
          value: "validity"
        },
        {
          text: "Hash",
          value: "hash"
        },
        {
          text: "Coffee Type",
          value: "coffeetype"
        },
        {
          text: "Grade",
          value: "grade"
        }
      ],
      records: [
        {
          ID: 1,
          factory: "Kirinyaga coffee factory LTD",
          amount: "4 tonnes",
          date: new Date().toDateString(),
          validity: true,
          hash: "bajgsau4nmbjhsbdjabsjbjhs023gsfebgtr",
          coffeetype: "Arabica AFTK",
          grade: "AAA"
        },
        {
          ID: 2,
          factory: "Kirinyaga coffee factory LTD",
          amount: "4 tonnes",
          date: new Date().toDateString(),
          validity: true,
          hash: "bajgsau4nmbjhsbdjabsjbjhs023gsfebgtr",
          coffeetype: "Arabica AFTK",
          grade: "AAA"
        },
        {
          ID: 3,
          factory: "Kirinyaga coffee factory LTD",
          amount: "4 tonnes",
          date: new Date().toDateString(),
          validity: true,
          hash: "bajgsau4nmbjhsbdjabsjbjhs023gsfebgtr",
          coffeetype: "Arabica AFTK",
          grade: "AAA"
        },
        {
          ID: 4,
          factory: "Kirinyaga coffee factory LTD",
          amount: "4 tonnes",
          date: new Date().toDateString(),
          validity: true,
          hash: "bajgsau4nmbjhsbdjabsjbjhs023gsfebgtr",
          coffeetype: "Arabica AFTK",
          grade: "AAA"
        },
        {
          ID: 5,
          factory: "Kirinyaga coffee factory LTD",
          amount: "4 tonnes",
          date: new Date().toDateString(),
          validity: true,
          hash: "bajgsau4nmbjhsbdjabsjbjhs023gsfebgtr",
          coffeetype: "Arabica AFTK",
          grade: "AAA"
        },
        {
          ID: 6,
          factory: "Kirinyaga coffee factory LTD",
          amount: "4 tonnes",
          date: new Date().toDateString(),
          validity: true,
          hash: "bajgsau4nmbjhsbdjabsjbjhs023gsfebgtr",
          coffeetype: "Arabica AFTK",
          grade: "AAA"
        }
      ]
    };
  }
};
</script>

<style>
</style>