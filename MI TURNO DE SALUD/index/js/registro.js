document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registro-form');
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const ageAlert = document.getElementById('age-alert');
    const ageAlertTitle = ageAlert.querySelector('h4');

    if (registroForm) {
        registroForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const fechaNacimiento = new Date(fechaNacimientoInput.value);
            const hoy = new Date();
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            const mes = hoy.getMonth() - fechaNacimiento.getMonth();
            const dia = hoy.getDate() - fechaNacimiento.getDate();
            
            if (mes < 0 || (mes === 0 && dia < 0)) {
                edad--;
            }

            ageAlert.classList.remove('d-none', 'alert-success', 'alert-danger');

            if (edad < 15) {
                ageAlertTitle.textContent = 'DEBES SER MAYOR DE 15 AÑOS PARA SOLICITAR TURNO';
                ageAlert.classList.add('alert-danger');
            } else {
                ageAlertTitle.textContent = 'INICIO SESIÓN / REGÍSTRATE';
                ageAlert.classList.add('alert-success');
                
                const nombre = document.getElementById('nombre').value;
                const apellido = document.getElementById('apellido').value;
                const email = document.getElementById('email').value;
                const telefono = document.getElementById('telefono').value;
                const fechaNac = document.getElementById('fechaNacimiento').value;

                const asunto = encodeURIComponent(`Nuevo Registro de Usuario: ${nombre} ${apellido}`);
                const cuerpo = encodeURIComponent(`Hola,\n\nSe ha registrado un nuevo usuario con la siguiente información:\n\nNombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\nFecha de Nacimiento: ${fechaNac}\n\nSaludos.`);

                // URL corregida para el mailto:
                window.location.href = `caroborda45@gmail.comsubject=${asunto}&body=${cuerpo}`;
                
                registroForm.reset();
            }

            setTimeout(() => {
                ageAlert.classList.add('d-none');
            }, 10000);
        });
    }
});