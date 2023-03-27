<script setup lang="ts">
import { computed, ref } from 'vue'
import { NSpace } from 'naive-ui'
import Login from './layout/Login.vue'
import Reset from './layout/Reset.vue'

const needReset = ref(false)

function enableReset() {
  needReset.value = true
}

function disableReset() {
  needReset.value = false
}

const reset = computed(() => needReset.value)
</script>

<template>
  <div class="flex flex-col items-center gap-5 my-auto">
    <header class="space-y-2">
      <h2 class="heading">
        {{ $t('common.login') }}
      </h2>
    </header>

    <Login @enable="enableReset" />
    <Reset :visible="reset" @disable="disableReset" />

    <NSpace justify="space-around">
      <span>Don't have an account? <a href="/register"> Create one now</a>
      </span>
    </NSpace>
  </div>
</template>

<style scoped>
.my-auto {
  margin-top: 10%;
  margin-bottom: 60px;
}

.heading {
  text-align: center;
  font-weight: 300;
  color: #444;
  margin: 0 auto 30px;
  font-size: 35px;
  line-height: 38px;
  text-transform: none;
  letter-spacing: 0;
}
</style>
