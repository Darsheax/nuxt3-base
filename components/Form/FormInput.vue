<script setup>
defineProps(['modelValue', 'label', 'name'])
defineEmits(['update:modelValue'])
</script>

<template>

  <div class="form-group field-input">
    <label :for="name">{{label}}</label>
    <input
        :id="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>

</template>

<style lang="sass">

  .form-group
    display: flex
    flex-direction: column

</style>