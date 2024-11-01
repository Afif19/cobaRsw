        function toggleBPJSInput() {
        const serviceType = document.getElementById('service-type').value;
        const bpjsInputContainer = document.getElementById('bpjs-input-container');
        
        if (serviceType === 'bpjs') {
            bpjsInputContainer.style.display = 'block';
        } else {
            bpjsInputContainer.style.display = 'none';
            document.getElementById('bpjs-number').value = ''; // Reset nilai input
        }
    }

    function bookAppointment() {
        const serviceType = document.getElementById('service-type').value;
        const name = document.getElementById('name').value;
        const idNumber = document.getElementById('id-number').value;
        const poli = document.getElementById('poli').value;
        const visitDate = document.getElementById('visit-date').value;
        const bpjsNumber = document.getElementById('bpjs-number').value;

        if (!name || !idNumber || !visitDate) {
            alert('Mohon lengkapi semua data!');
            return;
        }

        if (serviceType === 'bpjs' && !bpjsNumber) {
            alert('Mohon isi nomor BPJS Anda!');
            return;
        }

        // Simulasi nomor antrian
        const queueNumber = Math.floor(Math.random() * 100) + 1;

        let message = `Booking berhasil!\n\nNomor Antrian: ${queueNumber}\nNama: ${name}\nJenis Layanan: ${serviceType}\nPoli: ${poli}\nTanggal Kunjungan: ${visitDate}`;
        
        if (serviceType === 'bpjs') {
            message += `\nNomor BPJS: ${bpjsNumber}`;
        }

        message += '\n\nSilakan datang 30 menit sebelum jadwal yang ditentukan.';

        alert(message);

        // Reset form
        document.getElementById('name').value = '';
        document.getElementById('id-number').value = '';
        document.getElementById('visit-date').value = '';
        document.getElementById('bpjs-number').value = '';
        document.getElementById('service-type').value = 'umum';
        toggleBPJSInput(); // Reset tampilan input BPJS
    }
        // Data jadwal dokter (contoh)
        const doctorSchedule = [
            { day: 'Senin', doctor: 'Dr. Ahmad', poli: 'Umum', time: '08:00 - 14:00' },
            { day: 'Senin', doctor: 'Dr. Siti', poli: 'Gigi', time: '09:00 - 15:00' },
            { day: 'Selasa', doctor: 'Dr. Budi', poli: 'Mata', time: '08:00 - 14:00' },
            { day: 'Selasa', doctor: 'Dr. Maya', poli: 'Anak', time: '09:00 - 15:00' },
            // Tambahkan jadwal lainnya
        ];

        // Menampilkan jadwal dokter
        function displaySchedule() {
            const scheduleBody = document.getElementById('schedule-body');
            scheduleBody.innerHTML = '';

            doctorSchedule.forEach(schedule => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${schedule.day}</td>
                    <td>${schedule.doctor}</td>
                    <td>${schedule.poli}</td>
                    <td>${schedule.time}</td>
                `;
                scheduleBody.appendChild(row);
            });
        }

        // Fungsi booking antrian
        function bookAppointment() {
            const serviceType = document.getElementById('service-type').value;
            const name = document.getElementById('name').value;
            const idNumber = document.getElementById('id-number').value;
            const poli = document.getElementById('poli').value;
            const visitDate = document.getElementById('visit-date').value;

            if (!name || !idNumber || !visitDate) {
                alert('Mohon lengkapi semua data!');
                return;
            }
            // Tambahkan kode ini di bagian JavaScript (dalam tag <script>)

function toggleBPJSInput() {
    const serviceType = document.getElementById('service-type').value;
    const bpjsInputDiv = document.getElementById('bpjs-input-container');
    
    if (serviceType === 'bpjs') {
        bpjsInputDiv.style.display = 'block';
    } else {
        bpjsInputDiv.style.display = 'none';
        document.getElementById('bpjs-number').value = ''; // Reset nilai input
    }
}

// Update fungsi bookAppointment
function bookAppointment() {
    const serviceType = document.getElementById('service-type').value;
    const name = document.getElementById('name').value;
    const idNumber = document.getElementById('id-number').value;
    const poli = document.getElementById('poli').value;
    const visitDate = document.getElementById('visit-date').value;
    const bpjsNumber = document.getElementById('bpjs-number').value;

    if (!name || !idNumber || !visitDate) {
        alert('Mohon lengkapi semua data!');
        return;
    }

    if (serviceType === 'bpjs' && !bpjsNumber) {
        alert('Mohon isi nomor BPJS Anda!');
        return;
    }

    // Simulasi nomor antrian
    const queueNumber = Math.floor(Math.random() * 100) + 1;

    let message = `Booking berhasil!\n\nNomor Antrian: ${queueNumber}\nNama: ${name}\nJenis Layanan: ${serviceType}\nPoli: ${poli}\nTanggal Kunjungan: ${visitDate}`;
    
    if (serviceType === 'bpjs') {
        message += `\nNomor BPJS: ${bpjsNumber}`;
    }

    message += '\n\nSilakan datang 30 menit sebelum jadwal yang ditentukan.';

    alert(message);

    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('id-number').value = '';
    document.getElementById('visit-date').value = '';
    document.getElementById('bpjs-number').value = '';
}

            // Simulasi nomor antrian
            const queueNumber = Math.floor(Math.random() * 100) + 1;

            alert(`Booking berhasil!\n\nNomor Antrian: ${queueNumber}\nNama: ${name}\nJenis Layanan: ${serviceType}\nPoli: ${poli}\nTanggal Kunjungan: ${visitDate}\n\nSilakan datang 30 menit sebelum jadwal yang ditentukan.`);

            // Reset form
            document.getElementById('name').value = '';
            document.getElementById('id-number').value = '';
            document.getElementById('visit-date').value = '';
        }

        // Panggil fungsi untuk menampilkan jadwal saat halaman dimuat
        window.onload = displaySchedule;
   