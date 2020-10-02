'use strict';
const hornArrary = [];


function filter(keyword) {
  $.ajax('../data/page-1.json').then(data => {
    console.log('data:  ', data);
    data.forEach(object => {let horn = new HornInfo(object.image_url, object.title, object.description, object.keyword, object.horns);
      console.log(horn);
    horn.render();
    });
  })
}
filter();

function HornInfo(image_url, title, description, keyword, horns) {

  console.log(title);
  this.imgUrl = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  hornArrary.push(this);
}
HornInfo.prototype.render = function () {
  const template = $('#photo_template');
  const $newSection = template.clone();
  $newSection.attr('id', 'template');
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(` ${this.description}. Number of horns ${this.horns}`);
  $newSection.find('img').attr('src', this.imgUrl);
  $newSection.find('img').attr('title', this.title);
  $('main').append($newSection);
};
HornInfo.dropDown = () => {
  let tempArray = [];
  hornArrary.forEach((value) => tempArray.push(value.keyword));
  //removed (words)from in between temparry and closing parenthesis
  (tempArray).forEach(value => {
    const $newOptionTag = $('option');
    $newOptionTag.setAttribute('value', 'images');
    $('select').append($newOptionTag);
  });
  $('select').on('change', handler);
  function handler(Event) {
    $('section').hide();
    hornArrary.forEach((object) => {
      if (Event.target.value === object.keyword) {
        $('#object.keyword').show();
      }
    });
  }
};

