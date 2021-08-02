<template>
  <div :class='$style["card-product"]'>
    <img
      :class='$style.photo'
      :src='`https://frontend-test.idaproject.com${product.photo}`'
      alt=''
    >
    <div :class='$style.info'>
      <p :class='$style.name'>{{ product.name }}</p>
      <p :class='$style.price'>{{ numberWithCommas(product.price) }} ₽</p>
      <div :class='$style.rating'>
        <img src='/img/star.svg' alt=''>
        <p :class='$style["rating__num"]'>{{ product.rating }}</p>
      </div>
    </div>
    <icon-trash @click.native='removeProduct'/>
<!--    <img-->
<!--      :class='$style.trash'-->
<!--      src='/img/trash.svg'-->
<!--      alt=''-->
<!--      @click='removeProduct'-->
<!--    >-->
  </div>
</template>

<script>
import IconTrash from '~/components/icons/IconTrash'
export default {
  name: 'CartProduct',
  components: { IconTrash },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        name: '',
        photo: '',
        price: 0,
        rating: 0
      })
    }
  },
  methods: {
    removeProduct(){
      console.log('123')
      this.$store.commit('cart/removeProduct', this.product)
    },
    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  }
}
</script>

<style module lang='scss'>
.card-product {
  background: $light;
  box-shadow: $shadow-bottom;
  border-radius: 8px;
  padding: 12px 16px 15px 25px;
  width: 364px;
  height: 120px;
  display: flex;
  align-items: center;
  gap: 34px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.photo {
  width: 90px;
  height: 90px;
}

.name {
  @include font(14px, $grey-light)
}

.price {
  @include font-bold(14px, $dark)
}

.rating {
  display: flex;
  align-items: center;
  margin-top: 10px;

  &__num {
    @include font-bold(10px, $yellow);
  }
}
</style>
