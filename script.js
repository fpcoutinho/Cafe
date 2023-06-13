const darkModeBtn = document.querySelector('#flexSwitchCheckDefault')
const body = document.querySelector('body')

darkModeBtn.addEventListener('click', () => {
  const modo = darkModeBtn.checked ? 'dark' : 'light'
  body.setAttribute('data-bs-theme', modo)
})
