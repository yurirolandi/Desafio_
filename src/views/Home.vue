<template>
  <div class="home">
    <Header />
    <h2>ÚLTIMOS PRODUTOS</h2>
    <div class="container">
      <Card />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header/Header";
import Card from "../components/Cards/Cards";

export default {
  name: "Home",
  components: { Card, Header },
  created(){
    this.$store.dispatch('initBuyProduct')
  }
};
</script>

<style scoped>
.home h2 {
  color: #666363;
  text-align: center;
  font-weight: 100;
  margin: 30px 0;
}

.container {
  display: flex;
  justify-content: center;
}
</style>
