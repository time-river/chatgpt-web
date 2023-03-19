<script setup lang='ts'>
import { computed } from 'vue'
import { NSelect } from 'naive-ui'
import { useAPIStore } from '@/store'

const appStore = useAPIStore()

const apiOption = computed({
  get() {
    return appStore.api
  },
  set(value: string) {
    appStore.setAPI(value)
  },
})

const apiOptions: { label: string; key: string; value: string }[] = [
  { label: 'gpt3', key: 'gpt3', value: 'gpt3' },
  { label: 'gpt-3.5-turbo', key: 'gpt-3.5-turbo', value: 'gpt-3.5-turbo' },
  { label: 'gpt-4.0', key: 'gpt-4.0', value: 'gpt-4.0' },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NSelect
      style="width: 140px"
      :value="apiOption"
      :options="apiOptions"
      @update-value="value => appStore.setAPI(value)"
    />
  </div>
  <n-dropdown />
</template>
