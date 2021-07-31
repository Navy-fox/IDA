<template>
  <div :class='$style["aside-menu"]'>
    <h2 :class='$style.title'>Каталог</h2>
    <nav :class='$style.nav'>
      <nuxt-link to='/catalog/1' :class='$style["nav__item"]' :exact-active-class='$style["nav__item--active"]'>
        Рюкзаки
      </nuxt-link>
      <nuxt-link to='/catalog/2' :class='$style["nav__item"]' :exact-active-class='$style["nav__item--active"]'>
        Футболки
      </nuxt-link>
      <nuxt-link to='/catalog/3' :class='$style["nav__item"]' :exact-active-class='$style["nav__item--active"]'>
        Рубашки
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AsideMenu'
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
