<template>
  <div :class='$style.card'>
    <div :class='$style.rating'>
      <icon-star :rating='product.rating'/>
      <p :class='$style["rating__num"]'>{{ product.rating }}</p>
    </div>
    <img :class='$style.photo' :src='`https://frontend-test.idaproject.com${product.photo}`' alt=''>
    <button
      :class='$style.cart'
      @click='addProduct'
    >
      <icon-cart />
    </button>
    <p :class='$style["card__name"]'>{{ product.name }}</p>
    <p :class='$style["card__price"]'>{{ numberWithCommas(product.price) }} ₽</p>
  </div>
</template>

<script>
import IconCart from '~/components/icons/IconCart'
import IconStar from '~/components/icons/IconStar'

export default {
  name: 'Card',
  components: { IconStar, IconCart },
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
    addProduct() {
      this.$store.commit('cart/addProduct', this.product)
    },
    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  }
}
</script>

<style module lang='scss'>
.card {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: $light;
  box-shadow: $shadow-bottom;
  border-radius: 8px;
  min-height: 272px;
  position: relative;

  &__name {
    @include font(14px, $grey)
  }

  &__price {
    @include font-bold(14px, $dark);
    margin-top: auto;
  }
}

.cart {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}

.rating {
  position: absolute;
  top: 17px;
  left: 16px;
  display: flex;
  align-items: center;

  &__num {
    @include font-bold(10px, $yellow);
  }
}

.photo {
  width: 180px;
  height: 180px;
  align-self: center;
  margin-top: 2px;
  margin-bottom: 10px;
}
</style>
