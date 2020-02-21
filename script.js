let btnUpFrontWheel = document.querySelector('.btn_up_front_wheel'),
    btnDownFrontWheel = document.querySelector('.btn_down_front_wheel'),
    btnUpRearWheel = document.querySelector('.btn_up_rear_wheel'),
    btnDownRearWheel = document.querySelector('.btn_down_rear_wheel'),
    btnUpCar = document.querySelector('.btn_moskvich_up'),
    btnDownCar = document.querySelector('.btn_moskvich_down'),
    moskvich = document.querySelector('.car_moskvich'),
    moskvichBody = document.querySelector('.moskvich');

function upFront() {
    moskvich.style.animation = 'none';
    if ((moskvich.style.transform === 'rotate(4deg)')){
        moskvich.style.transform = 'rotate(0deg)';
        moskvichBody.style.bottom = '120px';
    } else {
        moskvich.style.transform = 'rotate(-4deg)'
    };
}

function downFront () {
    moskvich.style.animation = 'none';
    if ((moskvich.style.transform === 'rotate(-4deg)')){
        moskvich.style.transform = 'rotate(0deg)';
        moskvichBody.style.bottom = '100px';
    } else {
        moskvich.style.transform = 'rotate(4deg)'
    };


}

function upRear () {
    moskvich.style.animation = 'none';
    if ((moskvich.style.transform === 'rotate(-4deg)')){
        moskvich.style.transform = 'rotate(0deg)';
        moskvichBody.style.bottom = '120px';

    } else {
        moskvich.style.transform = 'rotate(4deg)'
    };
}
function downRear () {
    moskvich.style.animation = 'none';
    if ((moskvich.style.transform === 'rotate(4deg)')){
        moskvich.style.transform = 'rotate(0deg)';
        moskvichBody.style.bottom = '100px';
    } else {
        moskvich.style.transform = 'rotate(-4deg)'
    };
}

function upCar () {
    moskvich.style.animation = 'none';
    moskvichBody.style.bottom = '120px';
}

function downCar (){
    moskvich.style.animation = 'none';
    moskvichBody.style.bottom = '100px';
}


btnUpFrontWheel.addEventListener('click', upFront);
btnDownFrontWheel.addEventListener('click', downFront);
btnUpRearWheel.addEventListener('click', upRear);
btnDownRearWheel.addEventListener('click', downRear);
btnUpCar.addEventListener('click', upCar);
btnDownCar.addEventListener('click', downCar);



