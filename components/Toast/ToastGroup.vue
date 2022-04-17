<template>
  <button @click="add">+</button>
  <div class="toast-group">
      <toast-item v-for="toast in list" :toast="toast" @onClose="ToastStore.remove(toast.id)" :key="toast.id"/>
  </div>
</template>

<script setup lang="ts">
import {useToast} from "~/store/toast"

const ToastStore = useToast()

const list = ToastStore.toastManager

const add = () => {
  ToastStore.add({type: "error", message: "une toast", time: Math.random() * (10000 - 1000) + 1000})
}

</script>
