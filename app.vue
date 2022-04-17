<template>
  <div>
    <NuxtLayout>
      <NuxtLink to="/auth/login">Se connecter</NuxtLink>
      <button @click="$router.go(-1)">Retour</button>
      <toast-group />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
