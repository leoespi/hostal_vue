<template>
  <div>
    <section class="container mx-auto py-8 px-4">
      <!-- Ruta de navegación -->
      <div class="text-sm text-gray-600 mb-6">
        <NuxtLink to="/" class="hover:text-pink-600">Inicio</NuxtLink> / 
        <NuxtLink to="/alojamientos" class="hover:text-pink-600">Alojamientos</NuxtLink> / 
        <span class="text-pink-800 font-medium">Cabaña Pitahaya</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Galería de imágenes -->
        <div>
          <!-- Imagen principal -->
          <div class="bg-white p-4 rounded-lg shadow-md mb-4 relative">
            <div class="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              ¡NUEVO!
            </div>
            <img 
              src="/assets/images/pitahaya.jpg" 
              alt="Vista del domo geodésico" 
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
              :class="{'border-pink-500': activeImage === index}"
              @click="setActiveImage(index)"
            >
              <img 
                :src="img" 
                :alt="'Vista ' + (index + 1) + ' cabaña Pitahaya'" 
                class="w-full h-20 object-cover"
              >
            </div>
          </div>
        </div>

        <!-- Información del producto -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Cabaña Pitahaya</h1>
          <p class="text-pink-700 font-medium mb-2">Domo Geodésico entre los Árboles</p>
          
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400 mr-2">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
            </div>
            <span class="text-sm text-gray-600">(8 evaluaciones)</span>
          </div>

          <div class="mb-6">
            <span class="text-3xl font-bold text-pink-700">$5.750.000</span>
            <span class="text-sm text-gray-500 ml-1">por noche</span>
            <p class="text-pink-600 mt-1">Incluye tour astronómico y kit de bienvenida</p>
          </div>

          <div class="prose mb-8">
            <h3 class="text-xl font-semibold mb-3">Descripción</h3>
            <p class="mb-4">Estructura en forma de flor inspirada en la pitahaya, donde la geometría sagrada se encuentra con el confort moderno, ofreciendo una experiencia sensorial única bajo las estrellas con acústica perfecta para meditación y conexión espiritual.</p>
            
            <h3 class="text-xl font-semibold mb-3">Características exclusivas</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✧</span>
                <span>Domo geodésico con cúpula transparente para observación de estrellas</span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✧</span>
                <span>Terraza privada con vista privilegiada al atardecer</span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✧</span>
                <span>Bañera al aire libre con agua caliente solar</span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✧</span>
                <span>Sistema de sonido ambiental para terapias de relajación</span>
              </li>
            </ul>
          </div>

          <!-- Especificaciones -->
          <div class="border-t border-gray-200 pt-6 mb-8">
            <h3 class="text-xl font-semibold mb-4">Detalles técnicos</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-gray-700">Diámetro</h4>
                <p>6 metros</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Capacidad</h4>
                <p>2 adultos + 1 niño</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Altura</h4>
                <p>4.5 metros</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Tipo</h4>
                <p>Domo geodésico premium</p>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div class="space-y-4">
            <button class="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Reservar ahora (Última disponible)
            </button>
            <button class="w-full border border-pink-600 text-pink-600 hover:bg-pink-50 py-3 px-6 rounded-lg font-medium transition-colors">
              Solicitar cena romántica bajo las estrellas
            </button>
          </div>
        </div>
      </div>

      <!-- Sección adicional -->
      <div class="mt-16 border-t border-gray-200 pt-12">
        <h2 class="text-2xl font-bold mb-6">La Experiencia Pitahaya</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-3">Incluido en tu estadía</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✦</span>
                <span>Tour astronómico con telescopio profesional</span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✦</span>
                <span>Kit de bienvenida con frutas exóticas y vino</span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✦</span>
                <span>Sesión de meditación guiada (opcional)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Consideraciones</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✓</span>
                <span>No se permiten mascotas (estructura sensible)</span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✓</span>
                <span>Check-in: 3PM | Check-out: 11AM</span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-500 mr-2">✓</span>
                <span>Depósito reembolsable de $500,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Galería ampliada -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold mb-6">Vistas espectaculares</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="col-span-2 row-span-2">
            <img src="/assets/images/pitahaya.jpg" alt="Vista nocturna del domo" class="w-full h-full object-cover rounded-lg">
          </div>
          <div>
            <img src="/assets/images/pitahaya.jpg" alt="Interior acogedor" class="w-full h-full object-cover rounded-lg">
          </div>
          <div>
            <img src="/assets/images/pitahaya.jpg" alt="Bañera al aire libre" class="w-full h-full object-cover rounded-lg">
          </div>
          <div class="md:col-span-2">
            <img src="/assets/images/pitahaya.jpg" alt="Atardecer desde la terraza" class="w-full h-full object-cover rounded-lg">
          </div>
        </div>
      </div>

      <!-- Testimonio destacado -->
      <div class="mt-16 bg-pink-50 rounded-xl p-8 text-center">
        <div class="max-w-2xl mx-auto">
          <div class="flex justify-center text-yellow-400 mb-4">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
          </div>
          <blockquote class="text-xl italic mb-4">
            "Dormir bajo un cielo lleno de estrellas en el domo transparente fue mágico. La acústica perfecta para nuestros momentos de meditación hizo esta experiencia inolvidable."
          </blockquote>
          <p class="font-medium">- Marcela y Javier, Bogotá</p>
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
  '/assets/images/pitahaya.jpg',
  '/assets/images/pitahaya.jpg', 
  '/assets/images/pitahaya.jpg',
  '/assets/images/pitahaya.jpg'
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
.text-pink-500 {
  color: #ec4899;
}
.bg-pink-600 {
  background-color: #db2777;
}
.hover\:bg-pink-700:hover {
  background-color: #be185d;
}
.border-pink-600 {
  border-color: #db2777;
}
.text-pink-600 {
  color: #db2777;
}
.hover\:bg-pink-50:hover {
  background-color: #fdf2f8;
}
</style>