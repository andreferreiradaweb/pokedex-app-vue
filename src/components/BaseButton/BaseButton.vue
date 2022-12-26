<template>
<div class="base-button">
  <router-link :to="`pokemons/${url}`"><button class="base-button__button">VER MAIS</button></router-link>
</div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton',
  props: {
    url: {
      type: String,
      default: '',
      required: true
    }
  }
})
</script>
<style lang="scss" src="./styles.scss"></style>
