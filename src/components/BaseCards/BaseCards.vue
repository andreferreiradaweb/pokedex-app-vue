<template>
  <div class="container">
    <div class="base-cards">
      <div v-for="card in cardsData" :key="card.id" class="base-cards__card">
        <div class="ibase-cards__image-wrapper">
          <img class="base-cards__image" :src="card.imageUrl">
        </div>
        <p class="base-cards__name">{{ card.name }}</p>
        <BaseButton :url="card.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from '@/components/BaseButton/BaseButton.vue'

export default defineComponent({
  name: "BaseCards",
  components: {
    BaseButton
  },
  props: {
    cardsData: {
      type: Array,
      required: false,
      default: () => []
    },
  }
});
</script>

<style lang="scss" src="./styles.scss"></style>