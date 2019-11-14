const { fromEvent, merge, empty } = rxjs;
const { mapTo, tap, startWith, switchMap } = rxjs.operators;
// import { Observable } from 'rxjs';
const notifications$ = Rx.Observable.fromEvent(notifyBtn, 'click').pipe(
    Observable.mapTo('Next notification')
);

// const pauseBtnClick$ = fromEvent(pauseBtn, 'click').pipe(
//     tap(() => console.log('not distrubing mode')),
//     mapTo(false)
// );
//
// const resumeBtnClick$ = fromEvent(resumeBtn, 'click').pipe(
//     tap(() => console.log('notifications resumed')),
//     mapTo(true)
// );
//
// const isInterested$ = merge(pauseBtnClick$, resumeBtnClick$).pipe(
//     startWith(true)
// );
//
// const myNotifications$ = isInterested$.pipe(
//     switchMap(isInterested => isInterested ? notifications$ : empty())
// );
//
// myNotifications$.subscribe(val => console.log(val));
