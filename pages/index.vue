<template>
    <div class="bg-forest bg-cover bg-fixed min-h-screen">
      
      <!-- Hero Section -->
      <section class="relative h-screen flex items-center justify-center bg-black bg-opacity-40 text-white px-4">
        <div class="text-center max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">
            No somos glamping<br>
            <span class="text-green-200">Somos La Reina de la Noche</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 font-light">
            Refugio en los Farallones de Sutatausa, donde la naturaleza es tu anfitriona
          </p>
          <NuxtLink 
            to="/alojamientos" 
            class="bg-transparent border-2 border-green-300 text-green-300 px-8 py-3 rounded-full hover:bg-green-900/30 transition-all duration-500 inline-block"
          >
            Descubre nuestros alojamientos
          </NuxtLink>
        </div>
      </section>

      
      
<!-- Nueva sección después de Unique Experience -->
<section class="bg-white py-20 px-4">
  <div class="container mx-auto max-w-5xl">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-serif text-green-800 mb-4">Descanso y conexión con la naturaleza</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        En Villa Osiris - La Reina de la Noche, donde la tranquilidad del bosque se encuentra con el confort auténtico
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Imagen -->
      <div class="rounded-2xl overflow-hidden shadow-xl h-96">
        <img 
          src="/assets/images/pitahaya.jpg" 
          alt="Entorno natural de Villa Osiris"
          class="w-full h-full object-cover"
        >
      </div>
      
      <!-- Texto descriptivo -->
      <div>
        <p class="text-lg text-gray-700 mb-6">
          Ubicado en un entorno privilegiado en Piedecuesta, Santander, Villa Osiris es el destino ideal para quienes buscan desconectarse de la rutina y sumergirse en la tranquilidad del bosque. Nuestras cabañas y alojamientos únicos están diseñados para parejas, familias y nómadas digitales que desean experimentar noches mágicas bajo un cielo estrellado.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border border-green-100">
          <h3 class="font-serif text-2xl text-green-700 mb-4">Una experiencia consciente</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-green-500 mr-2 mt-1">✓</span>
              <span>Espacios diseñados con materiales sostenibles y técnicas de bioconstrucción</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2 mt-1">✓</span>
              <span>Ambiente pet-friendly para disfrutar con tu compañero peludo</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2 mt-1">✓</span>
              <span>Cercanía a rutas naturales y paisajes únicos de la región</span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>

    <!-- Bloque final -->
    <div class="mt-16 text-center max-w-3xl mx-auto">
      <p class="text-lg text-gray-700 mb-8">
        Aquí no encontrarás lujo artificial, sino una experiencia auténtica donde la energía del entorno revitaliza cuerpo y mente. Te invitamos a respirar aire puro, recargarte de energía positiva y disfrutar de un entorno natural inigualable.
      </p>
      <NuxtLink 
        to="/alojamientos" 
        class="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
      >
        Reserva tu experiencia única
      </NuxtLink>
    </div>
  </div>
</section>
  
      <!-- Quote Section -->
      <section class="py-20 bg-green-900/90 text-green-50 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <blockquote class="text-2xl md:text-3xl italic font-serif mb-6">
            "Fui a los bosques porque quería vivir deliberadamente..."
          </blockquote>
          <p class="text-green-200">Henry David Thoreau - Walden</p>
        </div>
      </section>
  
     <!-- Unique Experience -->
<section class="grid grid-cols-1 md:grid-cols-2">
  <div class="bg-forest-2 bg-cover min-h-96"></div>
  <div class="bg-green-800 text-white p-12 flex items-center">
    <div>
      <h2 class="text-3xl font-serif mb-6">Un Bosquesillo donde la naturaleza se convierte en sabor</h2>
      <p class="mb-4 text-green-100">
        En nuestro Bosquesillo, cultivamos con amor y respeto frutas como patilla, granadilla, uchuva, maracuyá y mora. Aquí, cada fruto es el reflejo de una tierra fértil y un trabajo consciente, donde la conexión con la naturaleza se vive en cada cosecha y en cada bocado.
      </p>
      <ul class="space-y-3">
        <li class="flex items-center">
          <span class="text-green-300 mr-2">✦</span> Cultivo sostenible y respetuoso con el entorno
        </li>
        <li class="flex items-center">
          <span class="text-green-300 mr-2">✦</span> Sabores auténticos directamente de la tierra
        </li>
        <li class="flex items-center">
          <span class="text-green-300 mr-2">✦</span> Experiencias agrícolas para reconectar con lo natural
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- Sección Cómo llegar - Versión actualizada -->
<section class="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-green-900 to-green-800">
  <!-- Texto informativo -->
  <div class="p-12 text-white flex items-center">
    <div>
      <h2 class="text-4xl font-serif mb-8 text-green-200">Visítanos en Piedecuesta</h2>
      
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold mb-2 flex items-center">
            <svg class="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Ubicación exacta
          </h3>
          <p class="text-lg">Villa Osiris - La Reina de la Noche</p>
          <p class="text-green-300">22H4+8C Piedecuesta, Santander</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2 flex items-center">
            <svg class="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.32c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
            Horario de atención
          </h3>
          <p class="text-lg">Viernes a Domingo: 8AM - 6PM</p>
          <p class="text-green-300">Reserva con anticipación</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2 flex items-center">
            <svg class="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            Contacto
          </h3>
          <p class="text-lg">+57 123 456 7890</p>
          <p class="text-green-300">info@reinadelanoche.com</p>
        </div>

        <a 
          href="https://www.google.com/maps/place/Villa+Osiris+-+La+Reina+de+la+Noche/@7.0284104,-72.9942754,18.82z/data=!4m14!1m7!3m6!1s0x8e68477124904231:0x69454014607b76ca!2sSevilla!8m2!3d7.0157389!4d-72.9966839!16s%2Fg%2F11l6s2_kyx!3m5!1s0x8e6847003d5eae77:0x508abfcb357e50f4!8m2!3d7.0283672!4d-72.9938751!16s%2Fg%2F11x614001s?entry=ttu" 
          target="_blank"
          class="inline-flex items-center mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Ver en Google Maps
        </a>
      </div>
    </div>
  </div>

  <!-- Mapa interactivo -->
  <div class="h-96 md:h-auto">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.511421814993!2d-72.9938751!3d7.0283672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6847003d5eae77%3A0x508abfcb357e50f4!2sVilla%20Osiris%20-%20La%20Reina%20de%20la%20Noche!5e0!3m2!1sen!2sco!4v1712345678901!5m2!1sen!2sco" 
      width="100%" 
      height="100%" 
      style="border:0;" 
      allowfullscreen 
      loading="lazy" 
      class="min-h-[400px]"
    ></iframe>
  </div>
</section>
  
      <!-- WhatsApp CTA -->
      <section class="bg-green-950 text-center py-16 px-4 text-white">
        <h3 class="text-2xl font-serif mb-6">Únete a nuestra comunidad</h3>
        <p class="max-w-2xl mx-auto mb-8 text-green-200">
          Conoce más sobre nuestro proyecto sostenible y recibe información exclusiva
        </p>
        <button class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center mx-auto">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-12.243 6.563c-.405 1.15-1.238 2.037-2.338 2.304-1.188.297-4.043-.445-6.734-2.481C.777 18.34-1.156 12.59 1.034 7.52c.992-2.294 3.548-4.458 5.524-4.756 1.34-.208 2.606.18 3.43.82.819.64 1.305 1.593 1.122 2.726-.149.914-.784 1.38-1.265 1.556-.297.089-.463.124-.396.297.198.595 1.04 2.045 1.168 2.305.124.26.248.223.446.074.198-.149 1.022-.892 1.436-1.215.413-.322.744-.26.892-.173.396.198 2.55 1.67 2.893 1.98.343.31.57.446.52.694-.05.248-.421.322-.87.52-.446.198-2.644 1.215-3.05 1.338-.405.124-.694.093-.843-.173-.149-.26-.558-.892-.782-1.215-.223-.322-.446-.372-.843-.124-.396.248-1.562.819-2.27 1.008-.709.181-1.337-.04-1.558-.347-.223-.309-.167-.57.124-.943.297-.372.669-.93.892-1.242.223-.322.297-.545.148-.893-.148-.347-.446-.26-.843-.148-.396.115-1.98.115-2.723-.034z"/>
          </svg>
          Comunidad WhatsApp
        </button>
      </section>
  
     
    </div>
  </template>
  
  <script setup>
  // Importaciones opcionales para animaciones
  import { onMounted } from 'vue'
  
  onMounted(() => {
    // Aquí podrías añadir animaciones con GSAP o similar
  })
  </script>
  
  <style>
  /* Efecto parallax para las imágenes de fondo */
  .bg-forest {
    background-image: url('/images/bosque-hero.jpg');
    background-attachment: fixed;
  }
  
  .bg-forest-2 {
    background-image: url('/images/cabana-exterior.jpg');
    background-position: center;
  }
  
  /* Animación simple para el texto */
  .animate-fade-in {
    animation: fadeIn 2s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>