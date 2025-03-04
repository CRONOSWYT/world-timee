function showCategory(category) {
    document.querySelectorAll('.category').forEach(cat => {
        cat.style.display = 'none';
    });

    document.getElementById(category).style.display = 'block';
}

function openLink(url) {
    window.open(url, '_blank');
}

  /*  // Lista de fondos disponibles
    const backgrounds = [
        "fondo1.jpg",
        "fondo2.jpg",
        "fondo3.jpg",
        "fondo4.jpg",
        "fondo5.jpg",
        "fondo6.jpg"
    ];

    function cambiarFondo() {
        const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        document.body.style.backgroundImage = `url('${randomBackground}')`;
        console.log("Fondo cambiado a:", randomBackground); // Debug en consola
    }

    // Cambiar fondo cada 3 segundos
    cambiarFondo(); // Cambia el fondo al cargar la página
    setInterval(cambiarFondo, 3000);
*/

function abrirVentana() {
    let nuevaVentana = window.open("", "ventana", "width=400,height=300");
    nuevaVentana.document.write(`
        <html>
        <head>
            <title>Actualización V0.0002</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    text-align: center;
                    padding: 20px;
                }
                .container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 { color: #007bff; }
                ul { text-align: left; list-style-type: none; padding: 0; }
                li { margin: 10px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Actualización V0.0002</h2>
                <ul>
                    <li>✅ Se cambió el fondo de la página.</li>
                    <li>✅ Se reorganizaron los botones de categorías en la parte superior.</li>
                    <li>✅ Se añadió un botón de <strong>Actualizaciones</strong> para revisar los cambios.</li>
                    <li>⚠️ Se eliminó temporalmente la barra de búsqueda (volverá en futuras actualizaciones).</li>
                    <li>✅ Se agregó el botón <strong>Programas</strong> (aún sin contenido, pero se añadirá más adelante).</li>
                </ul>
                <p><strong>¡Más mejoras próximamente! 🚀</strong></p>
            </div>
        </body>
        </html>
    `);
}
