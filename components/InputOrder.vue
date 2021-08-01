<template>
  <div :class='$style["input-order"]'>
    <p :class='$style.title'>Оформить заказ</p>
    <input v-model='name' :class='$style.input' type='text' placeholder='Ваше имя'>
    <input v-model='phone' :class='$style.input' type='text' placeholder='Телефон'>
    <input v-model='address' :class='$style.input' type='text' placeholder='Адрес'>
    <button :class='$style.but' @click='sendForm'>Отправить</button>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'InputOrder',
  data() {
    return {
      errors: [],
      name: '',
      phone: '',
      address: ''
    }
  },
  methods: {
    sendForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // TODO отправляем данные
        this.$store.commit('cart/clearProducts')
        this.$emit('send', true)
      }
    }
  },
  validations: {
    name: {
      required
    },
    phone: {
      required
    },
    address: {
      required
    }
  }
}
</script>

<style module lang='scss'>
.input-order {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.title {
  @include font(18px, $grey);
}

.input {
  @include font(16px, $grey-light);
  background: $grey-extra-light;
  border: none;
  border-radius: 8px;
  height: 50px;
  width: 100%;
  padding: 0 14px;
  cursor: pointer;
  outline: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}

.but {
  @include font(16px, $light);
  @include button();
  margin-top: 8px;
}

</style>
