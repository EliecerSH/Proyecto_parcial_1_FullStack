// 📌 Productos disponibles
const productos = [
  { id: 1, nombre: "M4A1 Carbine", precio: 150000, img: "./Assest/armas/M4A1_Carbine/M4A1_Carbine.png", cantidad: 1, tipo: "rifle", desc: "Rifle de asalto eléctrico (AEG). Versátil y altamente personalizable, ideal para principiantes y veteranos." },
  { id: 2, nombre: "AK-47 Tactical", precio: 170000, img: "./Assest/armas/AK-47_Tactical.png", cantidad: 1, tipo: "rifle", desc: "Réplica del clásico fusil soviético. Robusto, fiable y con alta capacidad de cargador." },
  { id: 3, nombre: "Glock 17", precio: 60000, img: "./Assest/armas/Glock_17.png", cantidad: 1, tipo: "pistola", desc: "Pistola de gas (GBB) semiautomática. Ligera y con buena ergonomía, con realismo en retroceso." },
  { id: 4, nombre: "Desert Eagle", precio: 80000, img: "./Assest/armas/Desert_Eagle_50AE.png", cantidad: 1, tipo: "pistola", desc: "Pistola pesada y visualmente imponente. Más para coleccionistas o roles específicos que para uso general." },
  { id: 5, nombre: "FN SCAR-L", precio: 180000, img: "./Assest/armas/Scar.png", cantidad: 1, tipo: "rifle", desc: "Rifle de asalto eléctrico (AEG). Modular, con excelente precisión y diseño moderno." },
  { id: 6, nombre: "HK416D", precio: 150000, img: "./Assest/armas/HK416D.png", cantidad: 1, tipo: "rifle", desc: "Variante moderna del M4 con mejor ergonomía y precisión. Muy usado en milsim." },
  { id: 7, nombre: "M249 SAW", precio: 200000, img: "./Assest/armas/M249_SAW.png", cantidad: 1, tipo: "lmg", desc: "Réplica de apoyo con gran cadencia de fuego. Ideal para cubrir a compañeros." },
  { id: 8, nombre: "MP5 Submachine Gun", precio: 100000, img: "./Assest/armas/MP5_Submachine_Gun.png", cantidad: 1, tipo: "subfusil", desc: "Subfusil compacto, manejable en espacios cerrados y con buena cadencia." },
  { id: 9, nombre: "P90", precio: 130000, img: "./Assest/armas/P90.png", cantidad: 1, tipo: "subfusil", desc: "Subfusil eléctrico. diseño futurista y cargador superior. Popular en escenarios de combate cercano." },
  { id: 10, nombre: "M870 Tactical", precio: 160000, img: "./Assest/armas/Shotgun_M870_Tactical.png", cantidad: 1, tipo: "escopeta", desc: "Escopeta táctica de corto alcance. Ideal para combates en espacios cerrados." },
  { id: 11, nombre: "Rifle L96 AWS", precio: 220000, img: "./Assest/armas/Sniper_Rifle_L96_AWS.png", cantidad: 1, tipo: "sniper", desc: "Réplica de precisión, usada por jugadores de rol de francotirador. Disparo certero y gran alcance." },
  { id: 12, nombre: "UMP45", precio: 120000, img: "./Assest/armas/UMP45.png", cantidad: 1, tipo: "subfusil", desc: "Compacto, perfecto para juegos en interiores (CQB). Ligero y con gran cadencia de disparo." }
];

const contenedorProductos = document.getElementById("product");

if (contenedorProductos) {
  productos.forEach(prod => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img src="${prod.img}" class="p-5" onclick="window.location.href='m_4_a_1_carbine_product_page.html'">
        <div class="p-4">
          <h3 class="text-lg font-bold">${prod.nombre}</h3>
          <p class="text-sm text-gray-600 mt-1 h-16">${prod.desc}</p>
          <p class="mt-5 text-center text-xl font-mono font-bold text-neutral-700">$${prod.precio} CLP</p>
          <button onclick="agregarCarrito(${prod.id})" class="mt-4 w-full bg-neutral-700 hover:bg-neutral-900 text-white py-2 rounded-lg transition">
            Comprar
          </button>
        </div>
      </div>
    `;
    contenedorProductos.appendChild(div);
  });
}

function agregarCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = productos.find(p => p.id === id);

  const existe = carrito.find(p => p.id === id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} agregado al carrito`);
}

function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoLista = document.getElementById("carrito-lista");
  const carritoTotal = document.getElementById("carrito-total");

  if (!carritoLista || !carritoTotal) return;

  carritoLista.innerHTML = "";
  let total = 0;

  carrito.forEach(prod => {
    total += prod.precio * prod.cantidad;
    const item = document.createElement("div");
    item.classList.add("flex", "items-center", "bg-white", "p-4", "rounded-lg", "shadow");
    item.innerHTML = `
        <img src="${prod.img}" class="w-20 h-20 object-contain rounded-lg">
        <div class="ml-4 flex-1">
          <h3 class="font-bold">${prod.nombre}</h3>
          <p class="text-sm text-gray-600">Cantidad: ${prod.cantidad}</p>
          <p class="font-mono">$${prod.precio * prod.cantidad} CLP</p>
        </div>
        <button onclick="eliminarDelCarrito(${prod.id})" class="ml-4 bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-lg">
          Eliminar
        </button>
    `;
    carritoLista.appendChild(item);
  });

  carritoTotal.textContent = `Total: $${total} CLP`;
}

function eliminarDelCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = carrito.filter(p => p.id !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", mostrarCarrito);

