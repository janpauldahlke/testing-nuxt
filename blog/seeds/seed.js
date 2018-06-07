module.exports = function() {
  let faker = require('faker');
  let _ = require('lodash');

  return {
      posts : _.times(15, function (num) {
      return {
        id : num,
        title : faker.lorem.sentence(),
        postPreview : faker.lorem.slug(),
        content:  faker.lorem.paragraph(),
        author : faker.name.lastName(),
        thumbnail : faker.image.technics().replace('http', 'https'), // :-)
      }
    }),
 
  }
}