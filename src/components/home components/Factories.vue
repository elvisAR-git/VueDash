<template>
  <v-container>
    <v-card>
      <v-container>
        <h3>Suggested Factories</h3>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Factories",
  data: () => {
    return {
      items: [
        {
          avatar: "https://image.flaticon.com/icons/svg/2936/2936989.svg",
          icon: true,
          title: "Kirinyaga Factory",
          location: "Kenya|Nairobi"
        },
        {
          avatar: "https://image.flaticon.com/icons/svg/2936/2936989.svg",
          title: "Kirinyaga Factory",
          location: "Kenya|Nairobi"
        },
        {
          avatar: "https://image.flaticon.com/icons/svg/2897/2897818.svg",
          title: "Kirinyaga Factory",
          location: "Kenya|Nairobi"
        }
      ]
    };
  }
};
</script>
