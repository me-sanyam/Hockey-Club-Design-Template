const Navbar = document.getElementById('Nav');
document.getElementById('fabars').addEventListener('click', () => {

    if (Navbar.classList.contains('NavMinHeight')) {
        Navbar.classList.remove('NavMinHeight');
        Navbar.classList.add('NavMaxHeight');
    } else if (Navbar.classList.contains('NavMaxHeight')) {
        Navbar.classList.remove('NavMaxHeight');
        Navbar.classList.add('NavMinHeight');
    }
})