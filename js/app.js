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
  $newSection.find(p).text(this.title)
  $newSection.find




}


