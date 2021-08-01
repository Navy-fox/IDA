<template>
  <div :class='$style.wrapper'>
    <p :class='$style.logo'>TestList</p>
    <button :class='$style.cart' @click='openCart'>
      <img src='/img/cart.svg' alt=''>
      <span :class='$style["cart__count"]'>3</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods:{
    openCart(){
      this.$store.commit("cart/toggleIsOpen",true)
    }
  }
}
</script>

<style module lang='scss'>
.wrapper {
  @include wrapper();
  max-width: none;
  padding-top: 17px;
  padding-bottom: 17px;
  background: $light;
  max-height: 66px;
  box-shadow: $shadow-bottom;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  @include font-bold(22px, $grey);
}
.cart {
  display: block;
  position: relative;
  width: 34px;
  height: 34px;
  cursor: pointer;
  &__count {
    position: absolute;
    top: 0;
    right: 0;
    background: $grey-light;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    @include font-bold(8px, $light);
  }
  img {
    width: 100%;
  }
}
</style>
