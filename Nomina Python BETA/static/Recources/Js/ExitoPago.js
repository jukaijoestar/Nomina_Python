// Función para mostrar el modal
function showModal() {
    var modal = document.getElementById('paymentModal');
    modal.style.display = 'block';
    setTimeout(function () {
        modal.style.top = '15%';
    }, 100); // Retardo de 100 ms para asegurarse de que la transición funcione correctamente
}

// Mostrar el modal cuando la página se abre
window.onload = function () {
    showModal();
};


