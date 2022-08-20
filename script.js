/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

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

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    this.count = +prompt('how much films have you seen?', 0);

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('how much films have you seen?', 0);
    }
  },
  rememberMyFilms: () => {
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
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log('you are not cinemaddict');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log('you are almost cinemaddict');
    } else {
      console.log('you are cinemaddict');
    }
  },
  showMyDB: (hidden) => {
    (!hidden) ? console.log(personalMovieDB): console.log('DB is private');
  },
  writeYourGenres: () => {
    // for (let i = 0; i < 3; i++) {
    //   let answer = prompt(`Your favourite genre number ${i + 1} is ...`);
    //   (answer !== '' & answer !== null) ? personalMovieDB.genres.push(answer): i--;
    // }
    for (let i = 0; i < 1; i++) {

      let genres = prompt(`enter your fav genres separated by commas`).toLowerCase();

      // (genres !== '' & genres !== null) ? personalMovieDB.genres = genres.split(', '): i--;
      if (genres !== '' & genres !== null) {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      } else {
        console.log('enter something');
        i--;
      }
      personalMovieDB.genres.forEach((e, i) => {
        console.log(`fav genre #${i + 1} is ${e}`);
      })
    }
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.private ? personalMovieDB.private = false : personalMovieDB.private = true;
  }

};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.toggleVisibleMyDB();