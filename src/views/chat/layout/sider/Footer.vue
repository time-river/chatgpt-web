<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { HoverButton, SelectBox, SvgIcon } from '@/components/common'
import { useAuthStore } from '@/store'
const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))

const authStore = useAuthStore()
const router = useRouter()

const show = ref(false)

async function handleLogin() {
// TODO
}

async function handleLogout() {
  authStore.removeToken()
  router.go(0)
}
</script>

<template>
  <footer class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
    <HoverButton v-if="!!authStore.token" :tooltip="$t('account.login')" @click="handleLogin">
      <span class="text-xl text-[#4f555e] dark:text-white">
        <SvgIcon icon="material-symbols:login-rounded" />
      </span>
    </HoverButton>
    <HoverButton v-else :tooltip="$t('account.exit')" @click="handleLogout">
      <span class="text-xl text-[#4f555e] dark:text-white">
        <SvgIcon icon="material-symbols:account-circle" />
      </span>
    </HoverButton>

    <SelectBox />

    <HoverButton :tooltip="$t('setting.setting')" @click="show = true">
      <span class="text-xl text-[#4f555e] dark:text-white">
        <SvgIcon icon="ri:settings-4-line" />
      </span>
    </HoverButton>

    <Setting v-if="show" v-model:visible="show" />
  </footer>
</template>
