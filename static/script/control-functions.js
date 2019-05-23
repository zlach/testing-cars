
const getSelectedCar = (cars) => {
    let car = document.querySelector("#" + cars[cars.selectedIndex].value);
    return car;
}

const toggleActiveCar = (cars) => {
    
    getSelectedCar().classList.toggle("selected-car");

    if((cars.options.length - 1) == cars.selectedIndex) {
        cars.selectedIndex = 0;
    }
    else {
        cars.selectedIndex = cars.selectedIndex + 1;
    }

    getSelectedCar().classList.toggle("selected-car");
}

const newCarAndUpdateUi = (cars) => {
    if(cars.selectedIndex > -1) {
        getSelectedCar().classList.toggle("selected-car");
    }
    let carId = addCar();
    var opt = document.createElement('option');
    opt.value = carId;
    opt.innerHTML = carId;
    cars.appendChild(opt);

    cars.selectedIndex = cars.length - 1;

    getSelectedCar().classList.toggle("selected-car");
}


module.exports = {
    getSelectedCar,
    toggleActiveCar,
    newCarAndUpdateUi
}
