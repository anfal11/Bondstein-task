  
const toggleMobileMenu = () => {
    let mobileMenu = document.querySelector('.mobile-menu');
    let menuIcon = document.getElementById('menuIcon');
    let closeIcon = document.getElementById('closeIcon');
  
    if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none';
      menuIcon.style.display = 'inline-block';
      closeIcon.style.display = 'none';
    } else {
      mobileMenu.style.display = 'flex';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'inline-block';
    }
}