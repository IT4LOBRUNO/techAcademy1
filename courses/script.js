document.addEventListener('DOMContentLoaded', function() {
    function redirecionar(url) {
        window.location.href = url;
    }

document.getElementById('btnWeb').addEventListener('click', function() {
        redirecionar('/courses/webDevelopment/index.html');
    });

document.getElementById('btnCyber').addEventListener('click', function() {
        redirecionar('/courses/cyberSecurity/index.html');
    });
});