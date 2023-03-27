<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, NSpace } from 'naive-ui'
import loading from 'naive-ui/es/_internal/loading'

const emit = defineEmits(['enable'])
const username = ref('')
const password = ref('')
const loginLoading = ref(false)

function loginEvent() {
  const name = username.value.trim()
  const pwd = password.value.trim()

  if (!name || !pwd)
    return

  try {
    loading.value = true
    // TODO: loading
  }
  catch (error: any) {

  }
}

function pressLoginEvent(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    loginEvent()
  }
}

function resetEvent() {
  console.log('reset')
  emit('enable')
}

const loginRules = {
  username: {

  },
  password: {
    min: 6,
  },
}
</script>

<template>
  <NSpace vertical class="w-80">
    <NForm
      :rules="loginRules"
      label-placement="top"
      size="medium"
    >
      <NFormItem label="username" path="username">
        <NInput v-model:value="username" type="text" placeholder="Username" />
      </NFormItem>

      <NFormItem path="password">
        <template #label>
          <div class="justify-between flex w-80">
            <p>password</p>
            <button @click="resetEvent">
              <small>forget password</small>
            </button>
          </div>
        </template>
        <NInput
          v-model:value="password" type="password" placeholder="Password" show-password-on="click" @keypress="pressLoginEvent"
        />
      </NFormItem>

      <div style="text-align: center;">
        <NButton
          type="primary"
          size="large"
          :loading="loginLoading"
          @click="loginEvent"
        >
          {{ $t('common.login') }}
        </NButton>
      </div>
    </NForm>
  </NSpace>
</template>
