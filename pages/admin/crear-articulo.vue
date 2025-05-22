<template>
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Crear Artículo</h2>

    <form @submit.prevent="crearArticulo" enctype="multipart/form-data" class="space-y-4">
      <div>
        <label class="block">Categoría:</label>
        <input
          v-model="form.categoria"
          type="text"
          class="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label class="block">Contenido:</label>
        <textarea
          v-model="form.content"
          class="w-full border p-2 rounded"
          rows="4"
          required
        ></textarea>
      </div>

      <div>
        <label class="block">Video (opcional):</label>
        <input v-model="form.video_link" type="url" class="w-full border p-2 rounded" />
      </div>

      <div>
        <label class="block">Imágenes (opcional):</label>
        <input type="file" multiple @change="handleFiles" class="w-full" />
      </div>

      <button
        type="submit"
        class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Publicar
      </button>
    </form>

    <div v-if="mensaje" class="mt-4 text-green-600 font-semibold">
      {{ mensaje }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

definePageMeta({
  layout: 'admin',
  middleware: 'admin',
})
// Middleware para verificar si el usuario es administrador

const form = ref({
  categoria: "",
  content: "",
  video_link: "",
  user_id: 1, // Usa el ID del usuario actual en un sistema real
});

const imagenes = ref([]);
const mensaje = ref("");

const handleFiles = (e) => {
  imagenes.value = Array.from(e.target.files);
};

const crearArticulo = async () => {
  const formData = new FormData();
  formData.append("categoria", form.value.categoria);
  formData.append("content", form.value.content);
  formData.append("video_link", form.value.video_link);
  formData.append("user_id", form.value.user_id);

  imagenes.value.forEach((img, i) => {
    formData.append(`images[${i}]`, img);
  });

  try {
    await axios.post("http://localhost:8000/api/feeds", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    mensaje.value = "Artículo creado exitosamente.";
    form.value = { categoria: "", content: "", video_link: "", user_id: 1 };
    imagenes.value = [];
  } catch (error) {
    console.error(error);
    mensaje.value = "Error al crear el artículo.";
  }
};
</script>
