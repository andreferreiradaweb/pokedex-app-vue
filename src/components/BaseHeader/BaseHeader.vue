<template>
  <header>
    <div class="header-component">
      <div class="container header-component__wrapper">
        <div class="header-component__wrapper-logo">
          <img class="header-component__logo" src="@/assets/images/pokedex-logo.png" alt="" />
        </div>
        <div class="header-component__wrapper-input">
          <BaseInput v-model="searchValue" placeholder="Digite o nome de um Pokemon..." type="text" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from '@/components/TextFields/BaseInput/BaseInput.vue'

export default defineComponent({
  name: "BaseHeader",
  components: {
    BaseInput,
  },
    data() {
      return {
        searchValue: {
          type: String,
          default: '',
        }
      }
    }
});
</script>

<style lang="scss" scoped src="./styles.scss"></style>
