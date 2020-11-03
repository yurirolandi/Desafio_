<template>
  <div class="template">
    <div class="card" v-for="(product, index) in products" :key="index">
      <div
        class="card__product"
        v-for="(img, index) in product.images"
        :key="index"
      >
        <img :src="img.imageUrl" />
      </div>
      <div class="card__footer">
        <p>{{ product.name }}</p>
        <p>R$ {{ product.value }}</p>

        <button class="add-carrinho" @click="buyProduct(index)">COMPRAR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    buyProduct(index) {
      const order = {
        productId: this.products.find((product) => {
          if (product.id === index + 1) {
            return product.id;
          }
        }),
        productPrice: this.products.find((product) => {
          if (product.id === index + 1) {
            return product.value;
          }
        }),
      };

      this.$store.dispatch("buyProduct", order);
    },
  },
};
</script>

<style scoped>
.template {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 900px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
  margin: 0.5rem;
  width: 265px;
  border: 2px solid #f8f6f6;
}

.card:hover {
  background-color: #ffffff;
  border: 2px solid #f8f6f6;
}

.card .card__product img {
  height: 200px;
}

.card .card__footer {
  color: #878787;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  height: 115px;
  margin-top: 20px;
}

.card .card__footer .add-carrinho {
  margin: 10px;
  border: 2px solid #ececece7;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  color: #878787;
}

.card .card__footer .add-carrinho:hover {
  background-color: #8f8b8b;
  color: white;
  border: 2px solid #ecececfd;
}
</style>
