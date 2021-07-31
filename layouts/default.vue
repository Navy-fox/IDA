<template>
  <div>
    <Header />
    <cart v-if='isOpenCart' />
    <div :class='$style.wrapper'>
      <aside-menu/>
      <Nuxt />
    </div>
  </div>
</template>

<script>

import Header from '~/components/Header'
import Cart from '~/components/Cart'
import AsideMenu from '~/components/AsideMenu'


export default {
  components: { AsideMenu, Cart, Header },
  computed: {
    isOpenCart() {
      return this.$store.state.cart.isOpen
    }
  }
}
</script>

<style module lang='scss'>
.wrapper {
  @include wrapper();

}
</style>
