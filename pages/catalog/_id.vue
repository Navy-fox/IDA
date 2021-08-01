<template>
  <div>
    <div :class='$style["wall-card"]'>
      <Card v-for='(item, key) in products' :key='key' :product='item' />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: { Card },
  async asyncData(ctx) {
    const products = await ctx.$axios.$get('https://frontend-test.idaproject.com/api/product', {
      params: {
        category: ctx.route.params.id
      }
    })
    return { products }
  },
  data() {
    return {
      products: []
    }
  },
}
</script>

<style module lang='scss'>
.wall-card {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  //grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}
</style>
