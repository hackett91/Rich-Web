const form = document.getElementById('formLeft');
const startCount = Rx.Observable.fromEvent(form, 'submit');
const countDown = Rx.Observable.interval(1000);

startCount.switchMap(
  event => {
    event.preventDefault();
    const time = sumTime(document.getElementById('hour').value,
                       document.getElementById('minute').value,
                       document.getElementById('seconds').value);
    form.reset();
    return countDown.map(i => time -i -1).take(time).startWith(time);
  }
).subscribe((time) => {
    const h1 = document.getElementById('h1');
    const hour = Math.floor(time / 3600);
    const minute  = Math.floor(time / 60) % 60;
    const minSecs = Math.floor(time / 60);
    const seconds = time - minSecs * 60;
    h1.textContent = hour + ' : ' + minute + ' : ' + seconds;
  }
);

const sumTime = (hour, minute, seconds) => {
      const hourTotal = (hour * 60) * 60;
      const minuteTotal = minute * 60;
      const secondsTotal = seconds * 1;
      return (hourTotal + minuteTotal + secondsTotal);
}
