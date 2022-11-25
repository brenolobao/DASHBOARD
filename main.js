const home = document.getElementById('nav-home');
const profile = document.getElementById('nav-profile');
const settings = document.getElementById('nav-settings');

home.addEventListener('click', function () {
    home.classList.add('active');
    profile.classList.remove('active');
    settings.classList.remove('active');
});
profile.addEventListener('click', function () {
    home.classList.remove('active');
    profile.classList.add('active');
    settings.classList.remove('active');
});
settings.addEventListener('click', function () {
    home.classList.remove('active');
    profile.classList.remove('active');
    settings.classList.add('active');
});