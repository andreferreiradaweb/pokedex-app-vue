<template>
  <div class="base-input">
    <input
      class="base-input__input"
      type="text" v-bind="$attrs"
      :class="inputClasses"
      :name="nameFormated"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
    />
    <div class="base-input__wrapper-icon">
      <i class="fa-sharp fa-solid fa-magnifying-glass base-input__icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    inputClasses: {
      type: [String, Array, Object],
      required: false,
      default: ''
    }
  },
  computed: {
    nameFormated() {
      return this.name.toLowerCase().trim();
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
}
</script>
<style lang="scss" src="./styles.scss"></style>