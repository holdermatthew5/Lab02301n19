'use strict'

const hornArrary = [];

$.ajax('data/page-1.json', { method: 'GET', dataType: 'JSON' })
  .then(hornInfo => {
    new Horn(horn).render();
  })

function Horn(object) {
  this.imgUrl = object.image_url;
  this.title = object.title;
  this.description = object.description;
  this.keyword = object.keyword;
  this.horns = object.horns;
  hornArrary.push(this);
}

Horn.prototype.render = function () {
  const template = $('#photo-template').html();
  const $newSection = $('<section id="${this.keyword}">${template}</section>');
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(' ${this.description}. Number of horns ${this.horns}');
  $newSection.find('img').attr('src', this.imgUrl);
  $newSection.find('img').attr('title', this.title)
  $('main').append($newSection);
}

Horn.dropDown = () => {
  let tempArray = [];
  hornArrary.forEach(value.keyword) {
    tempArray.push(value.keyword);
  }

}

tempArray.forEach(value => {
  const $newOptionTag = $('<option value = "${value}">${value}</option>');
  $('select').append($newOptionTag)
})

}

$


