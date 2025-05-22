


<template>
  <div>
    <!-- Solo mostramos Header y Footer si NO estamos en /admin -->
    <Header v-if="!isAdminPage" />
    
    <slot />

    <Footer v-if="!isAdminPage" />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useRoute } from 'vue-router'

const route = useRoute()

// Detectar si estamos en una ruta admin
const isAdminPage = computed(() => route.path.startsWith('/admin'))
</script>
