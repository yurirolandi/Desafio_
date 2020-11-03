<template>
  <div id="nav">
    <div class="nav_header">
      <router-link to="/"><b>MINHA LOJA</b></router-link> |
      <router-link to="/about">PERFUMARIA</router-link>
      <router-link to="/about">MAQUIAGEM</router-link>
      <router-link to="/about">CABELOS</router-link>
      <router-link to="/about">INFANTIL</router-link>
    </div>

    <div class="nav_footer">
      <div class="shopping"
        :style="funds === 0 ? { width: '50' + 'px' } : '' ">
        <font-awesome-icon  icon="shopping-cart" />
        <p v-if="funds !== 0">{{ funds | currency }}</p>
        <p v-else></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style scoped>
#nav {
  padding: 30px 0 40px 0;
  background-color: #fcfcfc;
  color: #666363;

  display: flex;
  justify-content: space-evenly;

  border-bottom: 1px solid #ececec;
}

#nav .nav_header a,
#nav .nav_footer .shopping {
  color: #808080;
  margin: 0 10px;
  text-decoration: none;
}

#nav .nav_footer .shopping {
  border: 2px solid;
  border-radius: 30px;
  width: 130px;
  padding: 7px 13px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
