const links = document.querySelector('.links');
const pageContainer = document.querySelector('.page-container');

let activeLink = document.getElementById('home-page');

links.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    
    // The element needs to be an enabled anchor tag
    if (target.nodeName !== 'A' || target.className === 'disabled') return;

    const pageNumber = parseInt(target.dataset.pageNum);
    let translateValue = 0;

    if (activeLink) {
        activeLink.className = '';
    }

    target.className = 'active';
    activeLink = target;

    switch (pageNumber) {
        case 1:
            translateValue = -100;
            break;
        case 2:
            translateValue = -200;
            break;
        case 3:
            translateValue = -300;
            break;
        default:
            break;
    }
    pageContainer.setAttribute('style', `transform: translateY(${translateValue}%)`);
});

// Initailize the slider used on page three
const swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 0
});