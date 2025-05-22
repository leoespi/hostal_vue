// middleware/admin.js
export default defineNuxtRouteMiddleware((to, from) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')

  if (!user || !token || user.rol_id !== 1) {
    return navigateTo('/login')
  }
})
