<template>
  <div>
    <section class="container mx-auto py-8 px-4">
      <!-- Ruta de navegación -->
      <div class="text-sm text-gray-600 mb-6">
        <NuxtLink to="/" class="hover:text-green-600">Inicio</NuxtLink> / 
        <NuxtLink to="/alojamientos" class="hover:text-green-600">Alojamientos</NuxtLink> / 
        <span class="text-green-800 font-medium">Cabaña La Sandía</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Galería de imágenes -->
        <div>
          <!-- Imagen principal -->
          <div class="bg-white p-4 rounded-lg shadow-md mb-4 relative">
            <div class="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              ¡MÁS POPULAR!
            </div>
            <img 
              src="/assets/images/patilla.jpg" 
              alt="Vista principal de la cabaña" 
              class="w-full h-96 object-cover rounded-lg cursor-zoom-in hover:shadow-lg transition-shadow"
              @click="openLightbox(0)"
            >
          </div>
          
          <!-- Miniaturas -->
          <div class="grid grid-cols-4 gap-2">
            <div 
              v-for="(img, index) in images" 
              :key="index"
              class="border-2 rounded-md overflow-hidden cursor-pointer"
              :class="{'border-green-500': activeImage === index}"
              @click="setActiveImage(index)"
            >
              <img 
                :src="img" 
                :alt="'Vista ' + (index + 1) + ' cabaña La Sandía'" 
                class="w-full h-20 object-cover"
              >
            </div>
          </div>
        </div>

        <!-- Información del producto -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Cabaña La Sandía</h1>
          <p class="text-green-700 font-medium mb-2">Refugio Circular Ecológico</p>
          
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400 mr-2">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span class="text-sm text-gray-600">(12 evaluaciones)</span>
          </div>

          <div class="mb-6">
            <span class="text-3xl font-bold text-green-700">$5.350.000</span>
            <span class="text-sm text-gray-500 ml-1">por noche</span>
            <p class="text-green-600 mt-1">Incluye tour por cultivos y desayuno local</p>
          </div>

          <div class="prose mb-8">
            <h3 class="text-xl font-semibold mb-3">Descripción</h3>
            <p class="mb-4">Refugio circular inspirado en los cultivos de sandía de la región, donde la arquitectura bioclimática se funde con el paisaje para ofrecer una experiencia única de conexión con la naturaleza, combinando tradición local con diseño contemporáneo.</p>
            
            <h3 class="text-xl font-semibold mb-3">Características exclusivas</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✧</span>
                <span>Paredes de adobe natural con aislamiento térmico perfecto</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✧</span>
                <span>Techo verde con plantas nativas y sistema de captación de agua</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✧</span>
                <span>Ventanas panorámicas de piso a techo hacia el bosque</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✧</span>
                <span>Baño ecológico privado con sistema de compostaje avanzado</span>
              </li>
            </ul>
          </div>

          <!-- Especificaciones -->
          <div class="border-t border-gray-200 pt-6 mb-8">
            <h3 class="text-xl font-semibold mb-4">Detalles técnicos</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-gray-700">Diámetro</h4>
                <p>7 metros</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Capacidad</h4>
                <p>2 personas</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Área construida</h4>
                <p>35 m²</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Tipo</h4>
                <p>Cabaña ecológica premium</p>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div class="space-y-4">
            <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Reservar ahora (Solo 3 disponibles)
            </button>
            <button class="w-full border border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 rounded-lg font-medium transition-colors">
              Solicitar paquete romántico
            </button>
          </div>
        </div>
      </div>

      <!-- Sección adicional -->
      <div class="mt-16 border-t border-gray-200 pt-12">
        <h2 class="text-2xl font-bold mb-6">La Experiencia Sandía</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-3">Incluido en tu estadía</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✦</span>
                <span>Tour por los cultivos de sandía al atardecer</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✦</span>
                <span>Desayuno con productos locales de la finca</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✦</span>
                <span>Acceso exclusivo a senderos ecológicos</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Políticas</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span>Mascotas permitidas (con cargo adicional)</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span>Cancelación flexible hasta 7 días antes</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span>Espacio 100% libre de humo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Galería ampliada -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold mb-6">Vida sostenible</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="col-span-2 row-span-2">
            <img src="/assets/images/patilla.jpg" alt="Vista exterior de la cabaña" class="w-full h-full object-cover rounded-lg">
          </div>
          <div>
            <img src="/assets/images/patilla.jpg" alt="Techo verde con plantas" class="w-full h-full object-cover rounded-lg">
          </div>
          <div>
            <img src="/assets/images/patilla.jpg" alt="Interior acogedor" class="w-full h-full object-cover rounded-lg">
          </div>
          <div class="md:col-span-2">
            <img src="/assets/images/patilla.jpg" alt="Atardecer desde la cabaña" class="w-full h-full object-cover rounded-lg">
          </div>
        </div>
      </div>

      <!-- Testimonio destacado -->
      <div class="mt-16 bg-green-50 rounded-xl p-8 text-center">
        <div class="max-w-2xl mx-auto">
          <div class="flex justify-center text-yellow-400 mb-4">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <blockquote class="text-xl italic mb-4">
            "La combinación perfecta entre confort y sostenibilidad. Despertar con el sonido de la naturaleza y ese olor a tierra mojada fue lo más relajante que hemos experimentado en años."
          </blockquote>
          <p class="font-medium">- Ana y Felipe, Cali</p>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="showLightbox" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" @click.self="closeLightbox">
      <div class="relative max-w-4xl w-full">
        <button @click="closeLightbox" class="absolute -top-12 right-0 text-white text-3xl">&times;</button>
        <img :src="images[activeImage]" class="w-full max-h-screen object-contain">
      </div>
    </div>
  </div>
</template>

<script setup>
// Imágenes (usando la misma imagen como placeholder)
const images = [
  '/assets/images/patilla.jpg',
  '/assets/images/patilla.jpg', 
  '/assets/images/patilla.jpg',
  '/assets/images/patilla.jpg'
]

const activeImage = ref(0)
const showLightbox = ref(false)

const setActiveImage = (index) => {
  activeImage.value = index
}

const openLightbox = (index) => {
  activeImage.value = index
  showLightbox.value = true
}

const closeLightbox = () => {
  showLightbox.value = false
}
</script>

<style scoped>
/* Efectos personalizados */
img {
  transition: all 0.3s ease;
}
img:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Estilo para los íconos especiales */
.text-green-500 {
  color: #10b981;
}
.bg-green-600 {
  background-color: #059669;
}
.hover\:bg-green-700:hover {
  background-color: #047857;
}
.border-green-600 {
  border-color: #059669;
}
.text-green-600 {
  color: #059669;
}
.hover\:bg-green-50:hover {
  background-color: #f0fdf4;
}
</style>