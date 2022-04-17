<template>
  <div class="toast-item" ref="self">
    <h3>Je suis un toast !</h3>
      {{toast.message}} - {{toast.id}} - {{toast.time}}
    <button @click="$emit('onClose')">x</button>
  </div>
</template>

<script setup lang="ts">

const {toast} = defineProps(['toast', 'i'])

const emits = defineEmits(['onClose'])

let timer = null

onMounted(() => {
  timer = setTimeout(() => {
    emits("onClose")
  }, toast.time)
})

onUnmounted(() => {
  if(timer){
    clearTimeout(timer)
  }
})

</script>
