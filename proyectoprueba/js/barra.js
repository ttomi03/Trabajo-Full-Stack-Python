document.write(`<header> <div class="menu container">
<a href="./index.html" class="logo">COMPRA LIBRE</a> 
<input type="checkbox" name="" id="menu">
<label for="menu">
    <img src="./img/menu.png" alt="" class="menu-photo">
</label>
<nav class="navbar">
    <ul>
        <li><a href="./index.html">INICIO</a></li>
        <li><a href="./productos.html">PRODUCTOS</a></li>
        <li><a href="./contacto.html">CONTACTO</a></li>
    </ul>
</nav>

<div class="submenu">
    <img src="./img/carro.png" id="img-carrito" alt="carrito">
    <div id="carrito">
        <table id="lista-carrito">
            <thead>
                <tr>
                    <th>
                        <th>NOMBRE</th>
                        <th>IMAGEN</th>
                        <th>PRECIO</th>
                        <th></th>
                    </th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <a href="./pago.html" id="comprar-carrito" class="btn-2">COMPRAR</a>
        <a href="#" id="vaciar-carrito" class="btn-2">VACIAR CARRITO</a>
    </div>
</div>
</div></header>`)

const nav= document.querySelector('.menu')

window.addEventListener('scroll', function (){
    nav.classList.toggle ('active', window.scrollY > 0);
})