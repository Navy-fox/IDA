<template>
  <div :class='$style.catalog'>
    <sort-selector
      v-model='typeSort'
      :options='options'
    />
    <div :class='$style["wall-card"]'>
      <Card
        v-for='(item, key) in sortProducts'
        :key='key'
        :product='item'
        :class='$style["wall-card__item"]'
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import SortSelector from '~/components/SortSelector'

export default {
  components: { SortSelector, Card },
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
      products: [],
      options: ['цене', 'популярности'],
      typeSort: 'цене'
    }
  },
  computed: {
    sortProducts() {
      if (this.typeSort === 'цене'){
        // создала новый массив, сделал диструктуризацию старого массива в новый
        return [...this.products].sort((a, b) => a.price - b.price)
      }
      if (this.typeSort === 'популярности'){
        // создала новый массив, сделал диструктуризацию старого массива в новый
        return [...this.products].sort((a, b) => b.rating - a.rating)
      }
      return this.products
    }
  }
}
</script>

<style module lang='scss'>
.catalog {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-top: 10px;
  gap: 34px;
}

.wall-card {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  &__item {
    flex: 0 0 264px;
  }
}
</style>
