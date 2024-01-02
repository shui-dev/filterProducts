for (let i = 0; i < product.length; i++) {
  const container = document.querySelector('#container');
  container.innerHTML += `
  <div id="poggers" class="border-2 w-56 max-2xl:w-40 border-zinc-700 rounded-xl gap-4 flex flex-col p-3 items-center justify-between">
  <div class="w-full">
    <img class="w-full h-full rounded-lg" src="${product[i].img}" alt="">
  </div>
  <div class="flex flex-col justify-evenly text-xl text-center max-2xl:text-lg max-2xl:h-20">
    <p>${product[i].title}</p>
    <p>R$${product[i].price}</p>
  </div>
  <div class="w-full">
    <button class="px-2 py-2 rounded-xl text-sm w-full bg-white text-black tracking-widest hover:bg-white/60 ease-in duration-150 ">COMPRAR</button>
  </div>
</div>
  `
}