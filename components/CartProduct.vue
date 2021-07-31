<template>
  <div :class='$style["card-product"]'>
    <img :class='$style.photo' src='img/louis-vuitton--M43186_PM2_Front%20view%201.png' alt=''>
    <div :class='$style.info'>
      <p :class='$style.name'>Рюкзак Louis Vuitton Discovery</p>
      <p :class='$style.price'>150 000 ₽</p>
      <div :class='$style.rating'>
        <img src='img/star.svg' alt=''>
        <p :class='$style["rating__num"]'>4.5</p>
      </div>
    </div>
    <img :class='$style.trash' src='img/trash.svg' alt=''>
  </div>
</template>

<script>
export default {
  name: 'CartProduct'
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
  width: 70px;
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

.trash {
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
