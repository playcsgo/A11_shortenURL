function copyURL() {
  console.log('called');
  const shorotenURL = document.querySelector('#shorten-URL')
  const text = shorotenURL.innerText
  navigator.clipboard.writeText(text)
    .then(() => alert('URL　copied'))
}
