<template>
  <div class="p-4 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Login Admin</h2>
    <form @submit.prevent="login">
      <input v-model="cedula" type="text" placeholder="Cédula" class="input mb-2" />
      <input v-model="password" type="password" placeholder="Contraseña" class="input mb-4" />
      <button class="btn" type="submit">Entrar</button>
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank',
})

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const cedula = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
  try {
    const res = await $fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      body: { cedula: cedula.value, password: password.value },
    })

    if (res.user.rol_id !== 1) {
      error.value = 'No tienes permisos de administrador'
      return
    }

    localStorage.setItem('token', res.token)
    localStorage.setItem('user', JSON.stringify(res.user))
    router.push('/admin')
  } catch (err) {
    error.value = 'Credenciales inválidas o usuario inactivo'
  }
}
</script>
