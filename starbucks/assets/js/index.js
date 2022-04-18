/***** 메뉴***** */
document.querySelectorAll('.bottom > ul > li').forEach((v, i) => {
    v.addEventListener('mouseover', (e) => {
        const current = e.currentTarget;
        const subWrap = current.querySelector('.sub_wrap');

        subWrap.style.maxHeight = subWrap.scrollHeight + 'px';
    });

    v.addEventListener('mouseout', (e) => {
        const current = e.currentTarget;
        const subWrap = current.querySelector('.sub_wrap');
        subWrap.style.maxHeight = null;
    })
});


/** search */
document.querySelector('.btn-search').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('.btn-search > input');
    const topMenu = document.querySelector('.top');

    const style = input.style.width = '180px';
    const styleAtt = input.setAttribute('placeholder','통합검색');
    const topStyle = topMenu.style.right = '407px';

    e.currentTarget.addEventListener('click', e => {
        if(!e.currentTarget.value){
            alert('검색어를 입력 해주세요');
        }
    });
});




/** 공지사항 */
let slides = document.querySelector('.txt');
let slide = document.querySelectorAll('.txt li');
let currentIndex = 0;
let slideCount = slide.length;

function goToSlide(idx){
    slides.classList.add('animated');
    slides.style.top = -20 * idx + 'px';
    currentIndex = idx;
}
setInterval(function(){
    let nextIdx = (currentIndex+1) % slideCount;

    goToSlide(nextIdx);
},3000);




/** 프로모션 더보기 */
const more = document.querySelector('#more');
more.addEventListener('click', e => {
    e.preventDefault();
    const hiddenWrap = document.querySelector('.notice_hidden_wrap');
    hiddenWrap.classList.toggle('open');
    
    more.classList.toggle('moreUp');
});