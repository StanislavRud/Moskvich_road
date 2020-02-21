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

let higway = document.querySelector('.higway');

addEventListener('keydown', function (event) {

    if (event.code === "Numpad1") {
        higway.style.animation = 'higway 10s linear 1s infinite';
    }

    if (event.code === "Numpad4") {
        higway.style.animation = 'higway 1s linear 1s infinite';
    }


    if (event.key === "ArrowUp"){
        console.log('keyup')
        higway.style.animation = 'higway 1s linear 1s infinite';
    } else if (event.key === "ArrowDown") {
        higway.style.animation = 'higway 10s linear 1s infinite';
        console.log('keyDown');
    }
        console.log(event);

});

