var state = {
  items: []
};

var data = localStorage.getItem('data');
if (data) {
  state = JSON.parse(data);
}

window.addEventListener('load', function handler() {
  var input = document.querySelector('input');
  var list = document.querySelector('ul');
  var button = document.querySelector('button');


  function update() {
    list.innerHTML = '';
    for (var i = 0; i < state.items.length; i++) {
      var element = document.createElement('li');
      element.innerText = state.items[i];
      list.appendChild(element);
      input.value = '';
    }
  }

  update();

  button.addEventListener('click', function handleButtonClick() {
    var value = input.value;
    state.items.push(value);
    update();
    localStorage.setItem('data', JSON.stringify(state));
  });
});