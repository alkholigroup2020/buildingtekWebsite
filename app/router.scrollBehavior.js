export default function (to, from, savedPosition) {
  // to solve the issue of scrolling to top after a refresh
  if (process.client) {
    window.history.scrollRestoration = 'auto'
  }
  return { x: 0, y: 0 }
}
