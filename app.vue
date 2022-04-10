<template>
  <div>
    <NuxtLayout>
      <NuxtLink to="/auth/login">Se connecter</NuxtLink>
      <button @click="$router.go(-1)">Retour</button>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
