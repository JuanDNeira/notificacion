const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
        if (resultado === 'granted') {
            mostrarNotificacion();
        }
    })
})

const verNotificacion = document.querySelector('#vernotificacion');

verNotificacion.addEventListener('click', mostrarNotificacion);

function mostrarNotificacion() {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: '/images/example-logo.jpg',
            body: 'notificación'
        });

        notificacion.onclick = function(){
            window.open('http://google.com');
        }

        notificacion.show();
    }
}