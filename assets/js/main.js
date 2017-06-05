
    const modalSoy = document.getElementById('modal-soy'),
          modalIntereses = document.getElementById('modal-intereses'),
          modalTrabajos = document.getElementById('modal-trabajos'),
          modalContacto = document.getElementById('modal-contacto'),
          soy = document.getElementById('soy'),
          intereses = document.getElementById('intereses'),
          trabajos = document.getElementById('trabajos'),
          contacto = document.getElementById('contacto'),
          contenedor = document.getElementById('contenedor'),
          cerrarSoy = document.getElementById('cerrar-modal-soy'),
          cerrarIntereses = document.getElementById('cerrar-modal-intereses'),
          cerrarTrabajos = document.getElementById('cerrar-modal-trabajos'),
          cerrarContacto = document.getElementById('cerrar-modal-contacto');

    modalSoy.addEventListener('click', function(){
        if (modalSoy.checked){
            soy.style.top = 0 + 'vh';
            contenedor.style.visibility = 'hidden';
            cerrarSoy.checked = false;
        }
    });
    cerrarSoy.addEventListener('click', function(){
        if(cerrarSoy.checked){
            soy.style.top = -250 + 'vh';
            contenedor.style.visibility = 'visible';
            modalSoy.checked = false;
        }
    });
    modalIntereses.addEventListener('click', function(){
        if (modalIntereses.checked){
            intereses.style.top = 0 + 'vh';
            contenedor.style.visibility = 'hidden';
            cerrarIntereses.checked = false;
        }
    });
    cerrarIntereses.addEventListener('click', function(){
        if(cerrarIntereses.checked){
            intereses.style.top = -250 + 'vh';
            contenedor.style.visibility = 'visible';
            modalIntereses.checked = false;
        }
    });
    modalTrabajos.addEventListener('click', function(){
        if (modalTrabajos.checked){
            trabajos.style.top = 0 + 'vh';
            contenedor.style.visibility = 'hidden';
            cerrarTrabajos.checked = false;
        }
    });
    cerrarTrabajos.addEventListener('click', function(){
        if(cerrarTrabajos.checked){
            trabajos.style.top = -250 + 'vh';
            contenedor.style.visibility = 'visible';
            modalTrabajos.checked = false;
        }
    });
    modalContacto.addEventListener('click', function(){
        if (modalContacto.checked){
            contacto.style.top = 0 + 'vh';
            contenedor.style.visibility = 'hidden';
            cerrarContacto.checked = false;
        }
    });
    cerrarContacto.addEventListener('click', function(){
        if(cerrarContacto.checked){
            contacto.style.top = -250 + 'vh';
            contenedor.style.visibility = 'visible';
            modalContacto.checked = false;
        }
    });