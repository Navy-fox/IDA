<template>
  <cart-wrapper :class='$style.opacity'>
    <div :class='$style.cart'>
      <button :class='$style["cart__close"]' @click='closeCart'>
        <img src='/img/close.svg' alt=''>
      </button>
      <p :class='$style.title'>Корзина</p>
      <CartProduct />
      <p :class='$style.text'>Пока что вы ничего не добавили в корзину.</p>
      <button :class='$style.but'>Перейти к выбору</button>
    </div>
  </cart-wrapper>
</template>

<script>
import CartProduct from '~/components/CartProduct'
import CartWrapper from '~/components/CartWrapper'

export default {
  name: 'Cart',
  components: { CartWrapper, CartProduct },
  methods:{
    closeCart(){
      this.$store.commit('cart/toggleIsOpen', false)
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
  padding: 58px 42px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__close {
    cursor: pointer;
    position: absolute;
    top: 60px;
    right: 48px;
  }
}

//.opacity{
//    width: 100vw;
//    height: 100vh;
//    background: $light;
//    opacity: 0.8;
//    position: absolute;
//    top: 0;
//    right: 0;
//    z-index: 10;
//  }
.title {
  @include font-bold(32px, $dark);
}

.text {
  @include font(22px, $dark);
}

.but {
  @include font(16px, $light);
  cursor: pointer;
  background: $dark;
  width: 364px;
  height: 50px;
  border-radius: 8px;
}
</style>
