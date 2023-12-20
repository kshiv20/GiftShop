handleSlider = (val, autoplay) => {
    const list = Array.prototype.slice.call(document.querySelectorAll('.slider'));
    const active = document.querySelectorAll('.slider.active');
    console.log(list, 'active')
    activeIndex = list.indexOf(active);
    // if (val === 'mouse') {
    //     clearInterval(array);
    // }
    switch (val) {
        case 'next':
            if (activeIndex + 1 < list.length) {
                list[activeIndex].classList.remove('active');
                list[activeIndex + 1].classList.add('active');
                list[activeIndex + 1].classList.add('ml-100');
            }
            else {
                list.forEach((element, i) => {
                    list[i].classList.remove('ml-100')
                })
                list[0].classList.add('active');
            }
            break;

        case 'prev':
            if (activeIndex + 1 > 1) {
                list[activeIndex].classList.remove('active');
                list[activeIndex - 1].classList.add('active');
                list[activeIndex].classList.remove('ml-100');
            }
            else {
                list.forEach((element, i) => {
                    list[i].classList.add('ml-100')
                })
                list[activeIndex].classList.remove('active');
                list[list.length - 1].classList.add('active');
                list[list.length - 1].classList.remove('ml-100');
            }
    }



}


//  var array = setInterval(() => {
//    handleSlider('', true)
//  }, 1000);




