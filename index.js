'use strict';

console.log('funguju');

const Color = (props) => {
  return `
    <div class="color-option__box"></div>
    <p class="color-option__name">${props}</p>
  `;
};

const colorElm = document.querySelector('.color-option');
colorElm.innerHTML = Color('bílá');
colorElm.innerHTML += Color('černá');
colorElm.innerHTML += Color('červená');
colorElm.innerHTML += Color('nebesky modrá');

const colorBox = document.querySelector('.color-option__box');
colorBox.style.Color = 
