<template>
  <div :class='$style["ok-hand-cart"]'>
    <img src='/img/ok-hand.png' alt=''>
    <p :class='$style.title'>Заявка успешно отправлена</p>
    <p :class='$style.subtitle'>Вскоре наш менеджер свяжется с Вами</p></div>
</template>

<script>
export default {
  name: 'OkHandCart'
}
</script>

<style module lang='scss'>
.ok-hand-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.title {
  @include font-bold(24px, $dark)
}

.subtitle {
  @include font(16px, $grey)
}
</style>
