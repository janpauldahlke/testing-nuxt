module.exports = function() {
  let faker = require('faker');
  let _ = require('lodash');

  return {
      posts : _.times(4, function (num) {
      return {
        id : num,
        title : faker.lorem.sentence(),
        postPreview : faker.lorem.slug(),
        content:  faker.lorem.paragraph(),
        author : faker.name.lastName(),
        thumbnail : faker.random.image().replace('http', 'https'), // :-)
      }
    }),

  }
}
