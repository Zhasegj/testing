document.addEventListener("DOMContentLoaded", function () {
    // Definir la función para actualizar alturas
    function actualizarAlturas() {
        // Obtener alturas de los contenedores
        var containerSize = document.getElementById("dynamic-height-container");
        var containerHeight = containerSize.offsetHeight;

        var containerSize2 = document.getElementById("dynamic-height-container2");
        var containerHeight2 = containerSize2.offsetHeight;

        var containerSize3 = document.getElementById("dynamic-height-container3");
        var containerHeight3 = containerSize3.offsetHeight;

        // Mostrar los valores en la consola
        console.log("Valor de containerHeight:", containerHeight);
        console.log("Valor de containerHeight2:", containerHeight2);
        console.log("Valor de containerHeight3:", containerHeight3);

        // Aplicar alturas a los elementos correspondientes
        var imageContainer200s = document.querySelectorAll(".image-container200");
        for (var i = 0; i < imageContainer200s.length; i++) {
            imageContainer200s[i].style.height = containerHeight + "px";
        }

        var imageContainer20s = document.querySelectorAll(".image-container20");
        for (var i = 0; i < imageContainer20s.length; i++) {
            imageContainer20s[i].style.height = containerHeight2 + "px";
        }

        var imageContainer201s = document.querySelectorAll(".image-container201");
        for (var i = 0; i < imageContainer201s.length; i++) {
            imageContainer201s[i].style.height = containerHeight3 + "px";
        }
    }

    // Llamar a la función cada 100ms usando setInterval
    setInterval(actualizarAlturas, 500);

    // También, ejecutar la función al cargar la página
    actualizarAlturas();
});