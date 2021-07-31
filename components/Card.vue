<template>
  <div :class='$style.card'>
    <div :class='$style.rating'>
      <img src='img/star.svg' alt=''>
      <p :class='$style["rating__num"]'>4.5</p>
    </div>
    <img :class='$style.photo' src='img/louis-vuitton--M43186_PM2_Front%20view%201.png' alt=''>
    <button :class='$style.cart'>
      <img src='img/cart.svg' alt=''>
    </button>
    <p :class='$style["card__name"]'>Рюкзак Louis Vuitton Discovery</p>
    <p :class='$style["card__price"]'>150 000 ₽</p>
  </div>
</template>

<script>
export default {
  name: 'Card'
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
  width: 264px;
  height: 272px;
  position: relative;

  &__name {
    @include font(14px, $grey)
  }

  &__price {
    @include font-bold(14px, $dark)
  }
}

.cart {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  img {
    color: $grey-extra-light;
    width: 16px;
    height: 16px;
  }
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
  max-width: 143px;
  max-height: 180px;
  align-self: center;
  margin-top: 2px;
  margin-bottom: 10px;
}
</style>
