<script setup lang="ts">
import { ref } from 'vue'
import { NInput, NModal, useMessage } from 'naive-ui'

const props = defineProps(['visible'])
const emit = defineEmits(['disable'])
const message = useMessage()
const code = ref('')

function onPositiveClick() {
  message.success('success')
}

function onNegativeClick() {
  emit('disable')
}
</script>

<template>
  <NModal
    style="width: 90%; max-width: 640px"
    :show="props.visible"
    preset="dialog"
    :show-icon="false"
    title="input code"
    content="你确认?"
    positive-text="确认"
    negative-text="算了"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick"
  >
    <NInput v-model:value="code" type="text" size="large" />
  </NModal>
</template>
