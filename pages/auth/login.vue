<template>
  <div>
    <form action="" class="form-login" @submit.prevent="onSubmit">
      <h1>Bienvenue : {{ $user.name }}</h1>

      <FormInput label="Email" name="email" v-model="login.payload.email"/>
      <div class="error-container" v-if="login.errors?.email">
        {{login.errors.email.rule}}: {{login.errors.email.message}}
      </div>
      <FormInput label="Mot de passe" name="password" v-model="login.payload.password"/>
      <div class="error-container" v-if="login.errors?.password">
        {{login.errors.password.rule}}: {{login.errors.password.message}}
      </div>
      <hr>
      <div class="error-container" v-if="login.errorMessage && !hasError">
        {{login.errorMessage}}
      </div>
      <button type="submit">Envoyer</button>
    </form>

  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "~/store/user";

const login = reactive({
  payload: {
    email: 'user@gmail.com',
    password: 'test'
  },
  errors: {},
  errorMessage: "",
})


const base_api = useApi()
const userStore = useUserStore()

const hasError = computed(() => {
  return Object.getPrototypeOf(login.errors) !== Object.prototype || Object.keys(login.errors).length !== 0
})


const onSubmit = async () => {
  await $fetch(base_api.value + '/auth/login', {
    method: 'POST',
    body: login.payload,
    credentials: 'include',
    async onResponse({ request, response, options }) {
      if(response.ok){
        login.errors = {}
        login.errorMessage = ''
        userStore.register(response._data)
        useRouter().back()
      }
    }
  })
  .catch(({data: {errors, message}}) => {
    login.errors = errors ?? {}
    login.errorMessage = message
  })
}

</script>

<style lang="sass">

  .form-login
    width: 250px
    margin: auto

  .error-container
    color: red

</style>