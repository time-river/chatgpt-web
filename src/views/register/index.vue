<script setup lang="ts">
import { computed, ref } from 'vue'
import { NSpace } from 'naive-ui'
import Registeration from './layout/Registeration.vue'
import Verification from './layout/Verification.vue'

const needVerification = ref(false)

const visualVerfication = computed(() => needVerification.value)

function enableVerfication() {
  needVerification.value = true
}
function disableVerfication() {
  needVerification.value = false
}
</script>

<template>
  <div class="flex flex-col items-center gap-5 my-auto">
    <header class="space-y-2">
      <h2 class="heading">
        {{ $t('common.register') }}
      </h2>
    </header>

    <Registeration @enable="enableVerfication" />
    <Verification :visible="visualVerfication" @disable="disableVerfication" />

    <NSpace justify="space-around">
      <span>Already have an account? <a href="/login"> Login one now</a>
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
