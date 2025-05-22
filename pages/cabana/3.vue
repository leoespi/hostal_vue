<template>
  <div>
    <section class="container mx-auto py-8 px-4">
      <!-- Ruta de navegación -->
      <div class="text-sm text-gray-600 mb-6">
        <NuxtLink to="/" class="hover:text-purple-600">Inicio</NuxtLink> / 
        <NuxtLink to="/alojamientos" class="hover:text-purple-600">Alojamientos</NuxtLink> / 
        <span class="text-purple-800 font-medium">Cabaña Fruta del Dragón</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Galería de imágenes -->
        <div>
          <!-- Imagen principal -->
          <div class="bg-white p-4 rounded-lg shadow-md mb-4 relative">
            <div class="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              ¡EXCLUSIVA!
            </div>
            <img 
              src="/assets/images/dragon.jpg" 
              alt="Vista de la cabaña en los árboles" 
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
              :class="{'border-purple-500': activeImage === index}"
              @click="setActiveImage(index)"
            >
              <img 
                :src="img" 
                :alt="'Vista ' + (index + 1) + ' cabaña Fruta del Dragón'" 
                class="w-full h-20 object-cover"
              >
            </div>
          </div>
        </div>

        <!-- Información del producto -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Cabaña Fruta del Dragón</h1>
          <p class="text-purple-700 font-medium mb-2">Experiencia Premium en las Alturas</p>
          
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400 mr-2">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span class="text-sm text-gray-600">(15 evaluaciones)</span>
          </div>

          <div class="mb-6">
            <span class="text-3xl font-bold text-purple-700">$5.750.000</span>
            <span class="text-sm text-gray-500 ml-1">por noche</span>
            <p class="text-purple-600 mt-1">Incluye desayuno gourmet y acceso a spa</p>
          </div>

          <div class="prose mb-8">
            <h3 class="text-xl font-semibold mb-3">Descripción</h3>
            <p class="mb-4">Nuestra joya arquitectónica suspendida entre los árboles, inspirada en la exótica fruta del dragón. Una experiencia única que combina lujo ecológico con aventura, perfecta para quienes buscan desconexión y adrenalina.</p>
            
            <h3 class="text-xl font-semibold mb-3">Características exclusivas</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✧</span>
                <span>Mirador en la copa de los árboles (8m de altura)</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✧</span>
                <span>Ducha exterior con agua caliente y vista panorámica</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✧</span>
                <span>Hamacas suspendidas con sistema de seguridad profesional</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✧</span>
                <span>Escalera en caracol con iluminación nocturna LED</span>
              </li>
            </ul>
          </div>

          <!-- Especificaciones -->
          <div class="border-t border-gray-200 pt-6 mb-8">
            <h3 class="text-xl font-semibold mb-4">Detalles técnicos</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-gray-700">Altura total</h4>
                <p>8 metros</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Capacidad</h4>
                <p>2 adultos</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Acceso</h4>
                <p>Escalera en caracol (54 escalones)</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-700">Tipo</h4>
                <p>Cabaña suspendida premium</p>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div class="space-y-4">
            <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Reservar ahora (Solo 2 disponibles)
            </button>
            <button class="w-full border border-purple-600 text-purple-600 hover:bg-purple-50 py-3 px-6 rounded-lg font-medium transition-colors">
              Contactar para eventos especiales
            </button>
          </div>
        </div>
      </div>

      <!-- Sección adicional -->
      <div class="mt-16 border-t border-gray-200 pt-12">
        <h2 class="text-2xl font-bold mb-6">La Experiencia Dragón</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-3">Incluido en tu estadía</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✦</span>
                <span>Desayuno gourmet servido en el mirador</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✦</span>
                <span>Acceso prioritario al spa natural</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✦</span>
                <span>Sesión de fotos profesional (1 hora)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Consideraciones</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✓</span>
                <span>No recomendado para personas con vértigo</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✓</span>
                <span>Prohibido el acceso a menores de 12 años</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">✓</span>
                <span>Check-in especial: 4PM | Check-out: 10AM</span>
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
            <img src="/assets/images/dragon.jpg" alt="Vista desde el mirador" class="w-full h-full object-cover rounded-lg">
          </div>
          <div>
            <img src="/assets/images/dragon.jpg" alt="Ducha exterior" class="w-full h-full object-cover rounded-lg">
          </div>
          <div>
            <img src="/assets/images/dragon.jpg" alt="Hamacas suspendidas" class="w-full h-full object-cover rounded-lg">
          </div>
          <div class="md:col-span-2">
            <img src="/assets/images/dragon.jpg" alt="Atardecer desde la cabaña" class="w-full h-full object-cover rounded-lg">
          </div>
        </div>
      </div>

      <!-- Testimonio destacado -->
      <div class="mt-16 bg-purple-50 rounded-xl p-8 text-center">
        <div class="max-w-2xl mx-auto">
          <div class="flex justify-center text-yellow-400 mb-4">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <blockquote class="text-xl italic mb-4">
            "La Cabaña Fruta del Dragón superó todas nuestras expectativas. Despertar entre las copas de los árboles con esa vista panorámica es una experiencia que vale cada peso."
          </blockquote>
          <p class="font-medium">- Laura y Carlos, Medellín</p>
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
  '/assets/images/dragon.jpg',
  '/assets/images/dragon.jpg', 
  '/assets/images/dragon.jpg',
  '/assets/images/dragon.jpg'
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
.text-purple-500 {
  color: #8b5cf6;
}
.bg-purple-600 {
  background-color: #7c3aed;
}
.hover\:bg-purple-700:hover {
  background-color: #6d28d9;
}
.border-purple-600 {
  border-color: #7c3aed;
}
.text-purple-600 {
  color: #7c3aed;
}
.hover\:bg-purple-50:hover {
  background-color: #f5f3ff;
}
</style>