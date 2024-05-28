const { createApp } = Vue

createApp({
  data() {
    return {
      url: "https://fakestoreapi.com/products",
      datos: [],
      carrito: [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.datos = data
        })
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    },
    agregarProducto(e) {
      e.preventDefault();
      const idProducto = e.target.getAttribute('data-id');
      const producto = this.datos.find(hotel => hotel.id == idProducto);

      if (producto) {
        this.carrito.push(producto);
        this.actualizarCarrito();
      }
    },
    eliminarProducto(id) {
      this.carrito = this.carrito.filter(producto => producto.id !== id);
      this.actualizarCarrito();
    },
    vaciarCarrito() {
      this.carrito = [];
      this.actualizarCarrito();
    },
    actualizarCarrito() {
      const listaCarrito = document.querySelector('#lista-carrito tbody');
      listaCarrito.innerHTML = '';

      this.carrito.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${producto.title}</td>
          <td><img src="${producto.image}" width="50"></td>
          <td>${producto.price}</td>
          <td><a href="#" class="borrar-producto" data-id="${producto.id}">X</a></td>
        `;
        listaCarrito.appendChild(row);
      });

      // Añadir listeners para eliminar productos
      listaCarrito.querySelectorAll('.borrar-producto').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const id = e.target.getAttribute('data-id');
          this.eliminarProducto(Number(id));
        });
      });
    }
  },
  created() {
    this.fetchData(this.url);
  },
  mounted() {
    document.querySelector('#lista-1').addEventListener('click', (e) => {
      if (e.target.classList.contains('agregar-carrito')) {
        this.agregarProducto(e);
      }
    });

    document.querySelector('#vaciar-carrito').addEventListener('click', (e) => {
      e.preventDefault();
      this.vaciarCarrito();
    });
  }
}).mount('#app')

