<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo o nombre del hostal -->
      <h1 class="text-2xl font-bold">La Reina de la Noche</h1>

      <!-- Menú de navegación -->
      <nav class="flex space-x-6">
        <NuxtLink
          to="/"
          class="hover:text-green-400 transition-colors"
          active-class="text-green-400 font-bold"
        >
          Inicio
        </NuxtLink>

        <NuxtLink
          to="/alojamientos"
          class="hover:text-green-400 transition-colors"
          active-class="text-green-400 font-bold"
        >
          Alojamientos
        </NuxtLink>

        <NuxtLink
          to="/quienes"
          class="hover:text-green-400 transition-colors"
          active-class="text-green-400 font-bold"
        >
          Quienes Somos
        </NuxtLink>

        <NuxtLink
          to="/articulos"
          class="hover:text-green-400 transition-colors"
          active-class="text-green-400 font-bold"
        >
          Artículos
        </NuxtLink>

        
      </nav>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  color: #4ade80; /* Verde para el enlace activo */
}
</style>
