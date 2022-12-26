<template>
  <BaseHeader />
  <BasePagination />
</template>

<script>
import { defineComponent } from 'vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BasePagination from '@/components/BasePagination/BasePagination.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    BaseHeader,
    BasePagination
  }
})
</script>
