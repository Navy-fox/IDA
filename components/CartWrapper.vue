<template>
  <div :class="$style['cart-wrapper']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CartWrapper'
}
</script>

<style module lang='scss'>
.cart-wrapper {
  z-index: 10000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 120px;
  overflow-y: auto;
}
</style>
