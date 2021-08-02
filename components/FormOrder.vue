<template>
  <div :class='$style["input-order"]'>
    <p :class='$style.title'>Оформить заказ</p>
    <input
      v-model='name'
      :class='`${$style.input} ${$v.name.$dirty && $v.name.$invalid ? $style["input--error"] : " "}`'
      type='text'
      placeholder='Ваше имя'
    >
    <input
      v-model='phone'
      v-mask='mask'
      :class='`${$style.input} ${$v.phone.$dirty && $v.phone.$invalid ? $style["input--error"] : " "}`'
      type='text'
      placeholder='Телефон'
    >
    <input
      v-model='address'
      :class='`${$style.input} ${$v.address.$dirty && $v.address.$invalid ? $style["input--error"] : " "}`'
      type='text'
      placeholder='Адрес'
    >
    <button :class='$style.but' @click='sendForm'>Отправить</button>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'FormOrder',
  data() {
    return {
      mask: ['+7 (', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
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
      required,
      minLength: minLength(18)
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

  &--error {
    border: 1px solid #EB5757;
    box-shadow: 0 0 7px rgba(235, 87, 87, 0.5);
  }
}

.but {
  @include font(16px, $light);
  @include button();
  margin-top: 8px;
}


</style>
