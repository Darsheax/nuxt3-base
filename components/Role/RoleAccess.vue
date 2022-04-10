<template>
  <div>
    <slot name="allowed" v-if="canView"></slot>
    <slot name="disallowed" v-else></slot>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['allowedRole'])

const {$user} = useNuxtApp()

const canView = computed(() => {
  return props.allowedRole.includes($user.role)
})


</script>