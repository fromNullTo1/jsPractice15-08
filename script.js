/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';


const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};

let a;
let b;
let numberOfFilms = prompt('how much films have you seen?', 0);
// let a = prompt('what was the last movie you watched?');
// let b = prompt('how do you rate it?');
// let c = prompt('what was the last movie you watched?');
// let d = prompt('how do you rate it?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for (let i = 0; i < 2; i++) {
  a = prompt('what was the last movie you watched?');
  if (a == '' || a == null || a.length > 50) {
    i--;
    continue;
  }
  console.log(a);
  b = prompt('how do you rate it?');
  if (b == '' || b == null || b.length > 50) {
    i--;
    continue;
  }
  console.log(b);
  personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
  console.log('you are not cinemaddict');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('you are almost cinemaddict');
} else {
  console.log('you are cinemaddict');
}


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;