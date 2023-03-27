<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NSpace } from 'naive-ui'
import loading from 'naive-ui/es/_internal/loading'

const emit = defineEmits(['enable'])
const email = ref('')
const password = ref('')
const reenteredPassword = ref('')

const registerLoading = ref(false)

function registerEvent() {
  const name = email.value.trim()
  const pwd1 = password.value.trim()
  const pwd2 = reenteredPassword.value.trim()

  if (!name || !pwd1 || !pwd2)
    return

  try {
    loading.value = true
    // TODO: loading
    emit('enable')
  }
  catch (error: any) {

  }
}

function pressRegisterEvent(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    registerEvent()
  }
}

const loginRules = {
  email: {

  },
  password: {
    min: 6,
  },
}
</script>

<template>
  <NSpace vertical class="input-width">
    <NForm
      :rules="loginRules"
      label-placement="top"
      :show-require-mark="true"
      size="medium"
    >
      <NFormItem label="email" path="email">
        <NInput v-model:value="email" type="text" placeholder="email" />
      </NFormItem>

      <NFormItem label="password" path="password">
        <NInput
          v-model:value="password" minlength="6" type="password" placeholder="Password" show-password-on="click"
        />
      </NFormItem>

      <NFormItem label="repeat password" path="password">
        <NInput
          v-model:value="reenteredPassword" type="password" placeholder="Password" show-password-on="click" @keypress="pressRegisterEvent"
        />
      </NFormItem>

      <div style="text-align: center;">
        <NButton
          type="primary"
          size="large"
          :loading="registerLoading"
          @click="registerEvent"
        >
          {{ $t('common.register') }}
        </NButton>
      </div>
    </NForm>
  </NSpace>
</template>

<style scoped>
.input-width {
  width: 24rem;
  max-width: 75%;
}
</style>
