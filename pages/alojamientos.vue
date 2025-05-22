<template>
  <div>
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-5xl font-bold text-center mb-20 font-serif text-green-900">Nuestros Alojamientos</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <!-- Cabaña Sandía -->
        <NuxtLink 
          to="/cabana/1" 
          class="group relative h-[36rem] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-green-200/40 hover:scale-[1.02]"
        >
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
          <div class="relative z-20 h-full flex flex-col justify-end p-10 text-white">
            <div class="transform transition-all duration-500 group-hover:-translate-y-6">
              <h3 class="text-4xl font-bold mb-4">La Sandía</h3>
              <p class="text-xl font-light mb-8 opacity-90 max-w-md">
                Refugio circular entre los árboles con vistas panorámicas y terraza privada
              </p>
              <div class="flex flex-col space-y-4">
                <span class="text-3xl font-bold">$5.350.000</span>
                <span class="w-fit px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all text-lg">
                  Ver detalles →
                </span>
              </div>
            </div>
          </div>
          <img 
            src="/assets/images/patilla.jpg" 
            alt="Cabaña La Sandía"
            class="absolute inset-0 w-full h-full object-cover transform scale-110 group-hover:scale-105 transition-transform duration-1000"
          >
        </NuxtLink>

        <!-- Cabaña Pitahaya -->
        <NuxtLink 
          to="/cabana/2" 
          class="group relative h-[36rem] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-pink-200/40 hover:scale-[1.02]"
        >
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
          <div class="relative z-20 h-full flex flex-col justify-end p-10 text-white">
            <div class="transform transition-all duration-500 group-hover:-translate-y-6">
              <h3 class="text-4xl font-bold mb-4">Pitahaya</h3>
              <p class="text-xl font-light mb-8 opacity-90 max-w-md">
                Domo geodésico con vista al bosque y bañera al aire libre
              </p>
              <div class="flex flex-col space-y-4">
                <span class="text-3xl font-bold">$5.750.000</span>
                <span class="w-fit px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all text-lg">
                  Ver detalles →
                </span>
              </div>
            </div>
          </div>
          <img 
            src="/assets/images/pitahaya.jpg" 
            alt="Cabaña Pitahaya"
            class="absolute inset-0 w-full h-full object-cover transform scale-110 group-hover:scale-105 transition-transform duration-1000"
          >
        </NuxtLink>

        <!-- Cabaña Dragón -->
        <NuxtLink 
          to="/cabana/3" 
          class="group relative h-[36rem] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-200/40 hover:scale-[1.02]"
        >
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
          <div class="relative z-20 h-full flex flex-col justify-end p-10 text-white">
            <div class="transform transition-all duration-500 group-hover:-translate-y-6">
              <h3 class="text-4xl font-bold mb-4">Fruta del Dragón</h3>
              <p class="text-xl font-light mb-8 opacity-90 max-w-md">
                Experiencia premium con mirador en las alturas y hamacas suspendidas
              </p>
              <div class="flex flex-col space-y-4">
                <span class="text-3xl font-bold">$5.750.000</span>
                <span class="w-fit px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all text-lg">
                  Ver detalles →
                </span>
              </div>
            </div>
          </div>
          <img 
            src="/assets/images/dragon.jpg" 
            alt="Cabaña Fruta del Dragón"
            class="absolute inset-0 w-full h-full object-cover transform scale-110 group-hover:scale-105 transition-transform duration-1000"
          >
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Efectos mejorados */
img {
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.group {
  transition: all 0.5s ease;
}

/* Mejorar la legibilidad del texto */
h3 {
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

p {
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

/* Asegurar que las imágenes de fondo cubran bien */
.bg-cover {
  background-size: cover;
  background-position: center;
}
</style>