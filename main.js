const form = document.getElementById('form-valor');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('valor-A').value;
    const valorB = document.getElementById('valor-B').value;
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    if (valorB > valorA) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});