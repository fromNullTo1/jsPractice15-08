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

let numberOfFilms;

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


function start() {

  numberOfFilms = +prompt('how much films have you seen?', 0);

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('how much films have you seen?', 0);
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('what was the last movie you watched?', 'the movie');
    let b = prompt('how do you rate it?', 7);

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
    // if (a == '' || a == null || a.length > 50) {
    //   i--;
    //   continue;
    // }
    // console.log(a);
    
    // if (b == '' || b == null || b.length > 50) {
    //   i--;
    //   continue;
    // }
    // console.log(b);
    // personalMovieDB.movies[a] = b;
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('you are not cinemaddict');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('you are almost cinemaddict');
  } else {
    console.log('you are cinemaddict');
  }
}
// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function showMyDB() {
  if (personalMovieDB.private == false) {
    console.log(personalMovieDB);
  } else {
    console.log('DB is private');
  }
}

function writeYourGenres() {
  
}

start();
rememberMyFilms();
detectPersonalLevel();
showMyDB();
