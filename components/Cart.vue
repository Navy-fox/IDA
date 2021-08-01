<template>
  <cart-wrapper :class='$style.opacity'>
    <div :class='$style.cart'>
      <button :class='$style["cart__close"]' @click='closeCart'>
        <img src='/img/close.svg' alt=''>
      </button>
      <p :class='$style.title'>Корзина</p>
      <template v-if='isOk'>
        <ok-hand-cart />
      </template>
      <template v-else>
        <template v-if='!products.length'>
          <p :class='$style.text'>
            Пока что вы ничего не добавили в корзину.
          </p>
          <button :class='$style.but' @click='closeCart'>
            Перейти к выбору
          </button>
        </template>
        <div
          v-else
          :class='$style["cart__products"]'
        >
          <p
            :class='$style["cart__products-text"]'
          >
            Товары в корзине
          </p>
          <cart-product
            v-for='(product, key) in products'
            :key='key'
            :product='product'
          />
          <input-order @send='send' />
        </div>
      </template>


    </div>
  </cart-wrapper>
</template>

<script>
import CartProduct from '~/components/CartProduct'
import CartWrapper from '~/components/CartWrapper'
import InputOrder from '~/components/InputOrder'
import OkHandCart from '~/components/OkHandCart'

export default {
  name: 'Cart',
  components: { OkHandCart, InputOrder, CartWrapper, CartProduct },
  data: () => ({
    isOk: false
  }),
  computed: {
    products() {
      return this.$store.state.cart.products
    }
  },
  mounted() {
    document.querySelector('body').style.overflow = 'hidden'
  },
  beforeDestroy() {
    document.querySelector('body').style.overflow = 'auto'
  },
  methods: {
    closeCart() {
      this.$store.commit('cart/toggleIsOpen', false)
      this.isOk = false
    },
    send(arg) {
      if (arg) {
        this.isOk = true
      }
    }
  }
}
</script>

<style module lang='scss'>
.cart {
  background: $light;
  box-shadow: $shadow-left;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
  border-radius: 8px 0 0 8px;
  width: 460px;
  height: 100vh;
  padding: 58px 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  overflow-x: hidden;

  &__close {
    cursor: pointer;
    position: absolute;
    top: 60px;
    right: 48px;
  }

  &__products {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__products-text {
    @include font(18px, $grey);
    margin-bottom: 4px;
  }
}

.title {
  @include font-bold(32px, $dark);
}

.text {
  @include font(22px, $dark);
}

.but {
  @include font(16px, $light);
  @include button();
}
</style>
