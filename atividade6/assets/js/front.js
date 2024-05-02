const currentYear = new Date().getFullYear();
const nomeInput = document.getElementById('nomeCompleto');
const telefoneInput = document.getElementById('telefone');

for (let i = 1; i <= 31; i++) {
    document.getElementById('dia').innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 1; i <= 12; i++) {
    document.getElementById('mes').innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 2024; i <= 2040; i++) {
    document.getElementById('ano').innerHTML += `<option value="${i}">${i}</option>`;
}

nomeInput.addEventListener('input', function(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[0-9]/g, '');
});

telefoneInput.addEventListener('input', function(event) {
    let value = event.target.value;
    value = value.replace(/\D/g, '');

    if (value.length >= 11) {
        value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
    }

    event.target.value = value;
});
