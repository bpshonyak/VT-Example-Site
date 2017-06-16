const links = document.querySelector('.links');
const pageContainer = document.querySelector('.page-container');

links.addEventListener('click', (event) => {
    event.preventDefault();
    const pageNumber = parseInt(event.target.dataset.pageNum);
    let translateValue = 0;

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

const swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 0
});