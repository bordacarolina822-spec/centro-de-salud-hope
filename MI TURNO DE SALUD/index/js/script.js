document.addEventListener('DOMContentLoaded', () => {
    const specialties = {
        'Clínica Médica': { availableDates: ['2025-09-22', '2025-09-25'], availableTimes: ['09:00', '10:00', '11:00'] },
        'Pediatría': { availableDates: ['2025-09-23', '2025-09-26'], availableTimes: ['14:00', '15:00', '16:00'] },
        'Traumatología': { availableDates: ['2025-09-22', '2025-09-25'], availableTimes: ['09:00', '10:00', '11:00'] },
        'Ginecología': { availableDates: ['2025-09-24', '2025-09-27'], availableTimes: ['10:00', '11:00', '12:00'] },
        'Enfermería': { availableDates: ['2025-09-22', '2025-09-24', '2025-09-26'], availableTimes: ['08:00', '09:00', '10:00'] },
        'Diagnóstico por Imagen': { availableDates: ['2025-09-23', '2025-09-25', '2025-09-29'], availableTimes: ['11:00', '12:00', '13:00'] }
    };

    const renderCalendar = (specialty, availableDates) => {
        // ... (el resto de tu código para el calendario permanece igual)
    };

    const timeSlotsContainer = document.querySelector('#calendarModal .modal-body');
    const specialtySelect = document.getElementById('specialtySelect');

    const renderTimeSlots = (specialty, date) => {
        const availableTimes = specialties[specialty]?.availableTimes || [];
        let scheduleHtml = `
            <h5>Horarios Disponibles para ${specialty} el ${date}</h5>
            <ul class="schedule-list">
        `;
        availableTimes.forEach(hour => {
            scheduleHtml += `
                <li class="schedule-item available">
                    <span>${hour}</span>
                    <button class="btn btn-sm btn-success" data-bs-dismiss="modal" data-time="${hour}">
                        Reservar
                    </button>
                </li>
            `;
        });
        scheduleHtml += '</ul>';
        timeSlotsContainer.innerHTML = scheduleHtml;
    };

    document.getElementById('calendarModal')?.addEventListener('show.bs.modal', (event) => {
        const relatedTarget = event.relatedTarget;
        if (relatedTarget) {
            const specialty = relatedTarget.dataset.specialty;
            if (specialty) {
                renderCalendar(specialty);
            }
        }
    });

    document.getElementById('calendarModal').addEventListener('click', (event) => {
        if (event.target.matches('[data-time]')) {
            const selectedTime = event.target.dataset.time;
            const selectedDate = document.querySelector('.day-cell.selected').dataset.date;
            alert(`Simulando reserva para ${specialty} el ${selectedDate} a las ${selectedTime}hs. ¡Pronto recibirá un correo electrónico!`);
        }
    });

    // Lógica para el formulario de contacto que abre Outlook
    const contactoForm = document.getElementById('contacto-form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            const asunto = encodeURIComponent(`Nueva Consulta de: ${nombre}`);
            const cuerpo = encodeURIComponent(`Has recibido una nueva consulta de un usuario.\n\nNombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`);

            // URL corregida para el mailto:
            window.location.href = `caroborda45@gmail.comsubject=${asunto}&body=${cuerpo}`;
            
            contactoForm.reset();
        });
    }
});