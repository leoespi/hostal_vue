<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-semibold text-center text-gray-800 mb-8">Lista de Artículos</h1>

    <div v-if="feeds.length === 0" class="text-center text-gray-500">
      No hay artículos disponibles.
    </div>

    <!-- Grid de 2 columnas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="feed in feeds"
        :key="feed.id"
        class="article-card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
        @click="mostrarDetalle(feed)"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-semibold text-indigo-600">{{ feed.categoria }}</h2>
          <span class="text-sm text-gray-500">{{ new Date(feed.created_at).toLocaleDateString() }}</span>
        </div>
        <p class="text-gray-700 text-lg mb-4 truncate-3-lines">{{ feed.content }}</p>
        <div class="text-right mt-2">
          <button class="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            Leer más
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const feeds = ref([])

const getFeeds = async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/feeds')
    feeds.value = res.data.feeds.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  } catch (err) {
    console.error('Error al obtener artículos:', err)
  }
}


const mostrarDetalle = (feed) => {
  let contentHTML = `
    <p style="text-align:left;"><strong>Categoría:</strong> ${feed.categoria}</p>
    <p style="text-align:left;"><strong>Contenido:</strong> ${feed.content}</p>
  `

  // Agrega imágenes si existen
  if (feed.images && feed.images.length > 0) {
    contentHTML += `<div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 10px;">`
    feed.images.forEach(img => {
      contentHTML += `<img src="${img.image_path}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px;" />`
    })
    contentHTML += `</div>`
  }

  // Agrega video si existe
  if (feed.video_link) {
    contentHTML += `<p style="margin-top: 10px;"><a href="${feed.video_link}" target="_blank">Ver video relacionado</a></p>`
  }

  Swal.fire({
    title: feed.user?.name ?? 'Artículo',
    html: contentHTML,
    width: 700,
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    focusConfirm: false
  })
}

onMounted(getFeeds)
</script>

<style scoped>
body {
  background-color: #f7f7f7;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
}

.article-card {
  background-color: #ffffff;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.truncate-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

button {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  color: #4c51bf;
}

h1 {
  color: #2d3748;
}

h2 {
  color: #4c51bf;
}

/* Estilos de Grid para responsividad */
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
