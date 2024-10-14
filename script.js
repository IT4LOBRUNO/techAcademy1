document.addEventListener('DOMContentLoaded', function() {
    function redirecionar(url) {
        window.location.href = url;
    }

document.getElementById('btn-courses').addEventListener('click', function() {
        redirecionar('courses\index.html');
    });

document.getElementById('btn-login').addEventListener('click', function() {
        redirecionar('login\index.html');
    });
});
