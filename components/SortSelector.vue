<template>
  <div :class='$style["sort-selector"]'>
    <div
      :class='$style.title'
      @click='areOptionsVisible = !areOptionsVisible'
    >
      <p>Сортировать по:</p>
      <p
        :class='$style["selected-title"]'
      >
        {{ value }}
      </p>
      <img src='/img/caret.svg' alt=''>
    </div>
    <div
      :class='$style.options'
      v-if='areOptionsVisible'
    >
      <p
        v-for='(option, key) in options'
        :key='key'
        :class='`${$style["options__item"]} ${option === value ? $style["options__item--active"] : ""} }`'
        @click='selectOption(option)'
      >
        По {{ option }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortSelector',
  props: {
    options: {
      type: Array,
      default: () => ([])
    },
    value: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('input', option)
      this.areOptionsVisible = false
    }
  }
}
</script>

<style module lang='scss'>
.sort-selector {
  position: relative;
  z-index: 2;
}

.title {
  @include font(16px, $dark);
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.selected-title {
  @include font(16px, $grey);
}

.options {
  padding-top: 8px;
  padding-bottom: 12px;
  width: 100%;
  background: $light;
  border-radius: 8px;
  position: absolute;
  top: 27px;
  box-shadow: $shadow-bottom;

  &__item {
    @include font(14px, $grey-light);
    padding: 4px 12px;
    cursor: pointer;
    &:hover{
      background: $grey-extra-light;
    }
    &--active {
      color: $dark;
    }
  }
}
//.options__item--active {
//  color: red;
//}
</style>
