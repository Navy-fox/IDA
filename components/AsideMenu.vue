<template>
  <div :class='$style["aside-menu"]'>
    <h2 :class='$style.title'>Каталог</h2>
    <nav :class='$style.nav'>
      <nuxt-link
        v-for='(item, key) in productCategory' :key='key'
        :to='`/catalog/${item.id}`'
        :class='$style["nav__item"]'
        :exact-active-class='$style["nav__item--active"]'
      >
        {{ item.name}}
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AsideMenu',
  data() {
    return {
      productCategory: []
    }
  },
  mounted() {
    this.$axios.get('https://frontend-test.idaproject.com/api/product-category').then(response => (this.productCategory = response.data))
  }
}
</script>

<style module lang='scss'>
.aside-menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title {
  @include font-bold(32px, $dark)
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__item {
    cursor: pointer;
    @include font(16px, $grey-light);
    transition: color 0.15s ease-in-out;

    &:hover {
      color: $grey;
    }

    &--active {
      color: $dark;
      text-decoration: underline;
    }
  }
}
</style>
