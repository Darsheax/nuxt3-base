<template>
  <div>
    <h1>Les stats de {{$user.name}}</h1>
    <p>Autorisé seulement pour les roles: Prenium, Editeur, Admin</p>
  </div>
</template>

<script setup lang="ts">

import {Role} from "~/composables/useAuth";

definePageMeta({
  middleware: ['auth'],
  auth : useAuth({
    allowed: [Role.PRENIUM],
    type: 'login',
  })
})

</script>
