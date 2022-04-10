<template>
  <div>
    <h1>Home</h1>
    <h2 v-if="$user.logged">Bienvenue: {{$user.name}} </h2>
    <NuxtLink to="/posts">Voir posts</NuxtLink>

    <RoleAccess :allowedRole="[$role.PRENIUM, $role.ADMIN, $role.EDITOR]">
      <template #allowed>
        <NuxtLink to="/statistiques" class="btn-prenium">Voir mes statisques</NuxtLink>
      </template>
      <template #disallowed>
        <div class="btn-prenium_disallowed">
          <span class="icon">
          <i class="fa-solid fa-star"></i>
          </span>
          <span class="inner">
            Voir mes statisques
          </span>
        </div>
      </template>
    </RoleAccess>

    <NuxtLink to="/statistiques">Stats</NuxtLink>

  </div>
</template>

<script lang="ts">

</script>

<style lang="sass">

  %btn
    border-radius: 5px
    font-family: sans-serif
    width: fit-content
    text-decoration: none
    display: block
    margin: 5px 0

  .btn-prenium
    @extend %btn
    padding: .75em 1.25em
    background-color: #9b5ee0
    color: white

  .btn-prenium_disallowed
    @extend %btn
    background-color: rgb(#9248e7, .3)
    color: white
    display: flex
    overflow: hidden
    .icon
      display: flex
      align-items: center
      justify-content: center
      width: 50px
      background-color: rgb(#9248e7, .6)
      color: white

    .inner
      padding: .75em 1.25em

</style>