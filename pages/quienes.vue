<template>
    <div>
      <!-- Hero Section -->
      <section class="relative bg-green-700 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Nuestra Historia</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Conectando personas con la naturaleza desde 2015
          </p>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
      </section>
  
      <!-- Contenido principal -->
      <section class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Nuestros Orígenes</h2>
              <p class="text-lg text-gray-600 mb-4">
                Todo comenzó con un sueño: crear refugios sostenibles que permitieran a las personas experimentar la naturaleza sin dejar huella. Fundada en 2015 por un equipo de arquitectos y amantes de la ecología, nuestra primera cabaña fue construida completamente con materiales locales y técnicas tradicionales.
              </p>
              <p class="text-lg text-gray-600">
                Hoy, nuestro eco-resort cuenta con tres cabañas únicas, cada una diseñada para ofrecer una experiencia diferente mientras mantenemos nuestro compromiso con la sostenibilidad y el turismo responsable.
              </p>
            </div>
            <div class="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="" 
                alt="Fundadores de EcoCabañas" 
                class="w-full h-auto object-cover"
              >
            </div>
          </div>
  
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div class="order-1 md:order-2">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Nuestra Filosofía</h2>
              <p class="text-lg text-gray-600 mb-4">
                Creemos en un turismo que respeta y celebra el entorno natural. Cada decisión, desde los materiales de construcción hasta los productos de limpieza, se toma considerando su impacto ambiental.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">✓</span>
                  <span class="text-gray-600">Uso de energías renovables (solar y eólica)</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">✓</span>
                  <span class="text-gray-600">Sistemas de reciclaje de agua y compostaje</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2">✓</span>
                  <span class="text-gray-600">Apoyo a la economía local y proveedores sostenibles</span>
                </li>
              </ul>
            </div>
            <div class="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="" 
                alt="Filosofía sostenible" 
                class="w-full h-auto object-cover"
              >
            </div>
          </div>
        </div>
  
        <!-- Equipo -->
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Conoce al Equipo</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Un grupo apasionado por la naturaleza, la arquitectura sostenible y la hospitalidad auténtica.
          </p>
          
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(member, index) in team" :key="index" class="bg-white rounded-xl shadow-md overflow-hidden">
              <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900">{{ member.name }}</h3>
                <p class="text-green-600 mb-2">{{ member.position }}</p>
                <p class="text-gray-600">{{ member.bio }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Valores -->
        <div class="bg-green-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestros Valores</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(value, index) in values" :key="index" class="text-center">
              <div class="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span class="text-green-600 text-2xl">{{ value.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ value.title }}</h3>
              <p class="text-gray-600">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA -->
      <section class="bg-green-700 text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">¿Listo para vivir la experiencia?</h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            Descubre nuestras cabañas únicas y reserva tu estadía en el paraíso ecológico.
          </p>
          <NuxtLink 
            to="/alojamientos" 
            class="inline-block bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Ver Alojamientos
          </NuxtLink>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const team = [
   
    {
      name: "Carlos Rojas",
      position: "Co-Fundador & Ingeniero",
      bio: "Experto en sistemas ecológicos de agua y energía para entornos remotos.",
      image: "/assets/images/team2.jpg"
    },
  
  ]
  
  const values = [
    {
      icon: "🌱",
      title: "Sostenibilidad",
      description: "Cada decisión se toma considerando su impacto ambiental a largo plazo."
    },
    {
      icon: "❤️",
      title: "Pasión",
      description: "Amamos lo que hacemos y nos esforzamos por crear experiencias memorables."
    },
    {
      icon: "🏆",
      title: "Excelencia",
      description: "Buscamos la perfección en cada detalle de la experiencia del huésped."
    }
  ]
  </script>
  
  <style scoped>
  /* Estilos adicionales si son necesarios */
  </style>