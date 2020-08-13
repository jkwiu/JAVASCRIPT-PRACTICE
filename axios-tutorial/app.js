// const { default: Axios } = require('axios');

var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
var input = document.querySelector('.pokemon-input');
var pokemonName = document.querySelector('.pokemon-name');
var imageFront = document.querySelector('.poke-front-image');
var imageBehind = document.querySelector('.poke-behind-image');
var weapon = document.querySelector('.feature');

function getPokemonData() {
  axios
    .get(apiUrl + input.value)
    .then(function (response) {
      // 콜백 response
      console.log(response);
      // 포켓몬 이름을 저장
      pokemonName.innerHTML = response.data.forms[0].name;
      // 포켓몬의 앞 모습 저장
      imageFront.src = response.data.sprites.front_default;
      // 포켓몬의 뒷 모습 저장
      imageBehind.src = response.data.sprites.back_default;
      // 포켓몬의 무기명 저장
      weapon.innerHTML = response.data.types[0].type.name;
    })
    .catch(function (error) {
      // 에러 발생시
      console.log(error);
      pokemonName.innerHTML = '번호에 해당하는 포켓몬이 없습니다.';
      imageFront.src = '';
      imageBehind.src = '';
      weapon.innerHTML = '무기가 없습니다.';
    });
}

class data {
  #_content;
  constructor() {
    this.#_content = '';
  }

  get content() {
    return this.#_content;
  }

  set content(val) {
    this.#_content = val;
  }
}

const d = new data();
d.content = 'jk';
console.log(d.#_content);

var button = document.querySelector('.pokemon-button');
button.addEventListener('click', getPokemonData);
