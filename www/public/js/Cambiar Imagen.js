function abrirExploradorArchivos() {
    const inputIcono = document.createElement('input');
    inputIcono.type = 'file';
    inputIcono.accept = 'image/*';
    inputIcono.onchange = function () {
      if (inputIcono.files && inputIcono.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const iconoImagenElement = document.querySelector('.usuario-imagen');
          iconoImagenElement.src = e.target.result;
        };
        reader.readAsDataURL(inputIcono.files[0]);
      }
    };
    inputIcono.click();
  }