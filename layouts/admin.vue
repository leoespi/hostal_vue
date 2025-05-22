<!-- layouts/admin.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Panel Admin</h1>
      <button @click="logout" class="text-red-500">Cerrar sesión</button>
    </header>

    <nav class="bg-gray-200 p-4 flex gap-4">
      <NuxtLink to="/admin">Dashboard</NuxtLink>
      <NuxtLink to="/admin/articulos">Ver Artículos</NuxtLink>
      <NuxtLink to="/admin/crear-articulo">Crear Artículo</NuxtLink>
    </nav>

    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
