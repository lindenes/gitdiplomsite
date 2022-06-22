const accordionContent = document.querySelectorAll('.kindDisplay_kind_KindBlock_Menu_Show_MenuDissappear');
    const buttonCollection = document.querySelectorAll('.kindDisplay_kind_KindBlock_MenuRuller')
    const arrowcollection = document.querySelectorAll('.Show_Arrow');
    for (let i = 0; i < accordionContent.length; i++) {

        buttonCollection[i].addEventListener('click', (e) => {
            accordionContent[i].classList.toggle('active');
            arrowcollection[i].classList.toggle('Show_Arrow_rotate');
        });
    }