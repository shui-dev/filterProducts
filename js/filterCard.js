const btnMac = document.querySelector('#mac');
const poggers = document.querySelector('#poggers')

btnMac.onclick = function() {
    product.filter(obj => {
    if(obj.category === 'macbook') {
      poggers.style.display = 'none'
    }
  })
}
