(function () {
  function isPromise (o) {
    if (!o) {
      return false;
    }
    return o.constructor && o.constructor.name === 'Promise';
  }

  function isUndefined (o) {
    return typeof o === 'undefined';
  }

  function renderPromise (value) {
    return value.constructor.name;
  }

  function renderUndefined (value) {
    return typeof value;
  }

  function render (o) {
    Object.keys(o).forEach(function (key) {
      if (isPromise(o[key])) {
        o[key] = renderPromise(o[key]);
      }
      if (isUndefined(o[key])) {
        o[key] = renderUndefined(o[key]);
      }
    });
    return document.createTextNode(JSON.stringify(o, null, 2) + '\n');
  }

  window.console.log = function(o) {
    document.querySelector('.console').appendChild(render(o));
  };
})();
