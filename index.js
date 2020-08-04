const clock = {
  secondsHand: document.querySelector("#second-hand"),
  minHand: document.querySelector("#min-hand"),
  hourHand: document.querySelector("#hour-hand"),
  digital: document.querySelector("#digital-display")
};

const setDate = () => {
  const now = new Date();

  //Segundos
  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  clock.secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

  //Minutos
  const min = now.getMinutes();
  const minDeg = ((min / 60) * 360) + 90;
  clock.minHand.style.transform = `rotate(${minDeg}deg)`;

  //Horas
  const hour = now.getHours();
  const hourDeg = (((hour / 12) * 360) + 90) + Math.trunc(min / 15 - 1) * 10;
  clock.hourHand.style.transform = `rotate(${hourDeg}deg)`;

  //Digital Display
  const displayNums = () => {
    let dHour, dMin, dSeconds;

    if (hour.toString().length == 1) {
      dHour = `0${hour}`;
    } else {
      dHour = hour;
    }

    if (min.toString().length == 1) {
      dMin = `0${min}`;
    } else {
      dMin = min;
    }

    if (seconds.toString().length == 1) {
      dSeconds = `0${seconds}`;
    } else {
      dSeconds = seconds;
    }

    return `${dHour}:${dMin}:${dSeconds}`;
  };

  clock.digital.innerText = displayNums();
};

setInterval(setDate, 1000);