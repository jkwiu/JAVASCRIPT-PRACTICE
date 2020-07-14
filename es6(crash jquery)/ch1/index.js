let listahan = ['Toyo', 'Suka', 'Sabon'];

$(document).ready(function(){
  let btnJquery = $('#btn_jquery');
  let list = $('#list');
  let header = $('#header');
  $('#btn_jquery').on('click', function(){
    // console.log('Jquery Clicked');
    // list.append('<li>jquery list item</li>').css('font-size', '30px');
    // header.addClass('blink');
    // header.toggleClass('blink');
    $.ajax({
      method: 'GET',
      url: 'https://www.pinoyfreecoder.com/api/users',
      success: function(data){
        console.log(data);
      }
    });
    $.each(listahan, function(index, item){
      // console.log(item);
      list.append(`<li>${item}</li>`);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let btnES6 = document.querySelector('#btn_ES6');
  let list = document.querySelector('#list');
  let header = document.querySelector('#header');

  btnES6.addEventListener('click', () => {
    // console.log('ES6 Clicked');
    // let node = document.createElement('li');
    // let textNote = document.createTextNode('ES6 List');
    // node.style.fontSize = '40px';
    // node.appendChild(textNote); 
    // list.appendChild(node);
    // header.classList.add('blink');
    // header.classList.remove('blink');
    header.classList.toggle('blink');
    fetch('https://www.pinoyfreecoder.com/api/users')
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
      })
    let html = '';
    listahan.forEach((item, index) => {
      // console.log(item);
      html += '<li>';
      html += item;
      html += '</li>';
    });
    list.innerHTML = html;
  });
});