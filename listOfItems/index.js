var state = [];
var data = localStorage.getItem('data');

if (data) {
  state = JSON.parse(data);
}

window.addEventListener('load', function handler() {
  var addButton = document.querySelector('button');
  var list = document.querySelector('ul');
  var input = document.querySelector('input');

  function update() {
    list.innerHTML = '';
    for (var i = 0; i < state.length; i++) {
      var element = document.createElement('li');
      element.innerHTML = state[i];
      list.appendChild(element);
    }
  }

  update();

  addButton.addEventListener('click', function buttonClickHandler() {
    var inputValue = input.value;
    if (inputValue) {
      state.push(inputValue);
      update();
      localStorage.setItem('data', JSON.stringify(state));
      input.value = '';
    }
  });

  document.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
      var inputValue = input.value;
      if (inputValue) {
        state.push(inputValue);
        update();
        localStorage.setItem('data', JSON.stringify(state));
        input.value = '';
      }
      input.value = '';
    }
  })
});