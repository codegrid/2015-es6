window.fetchTodoListId = function (name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(42);
    }, 1000);
  });
};

window.fetchTodoList = function (id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([
        { title: 'Promiseの原稿を書く' },
        { title: 'Generatorの原稿を書く' }
      ]);
    }, 1000);
  });
};
