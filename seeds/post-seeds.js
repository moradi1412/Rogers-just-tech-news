const { Post } = require('../models');

const postdata = [
  {
    title: 'IT Career State Fair',
    details: "Had denoting properly jointure you occasion.Had denoting properly jointure you occasion.",
    post_url: 'www.google.com'
  },
  {
    title: 'Art Major needed',
    details: "Had denoting properly jointure you occasion.Had denoting properly jointure you occasion.",
    post_url: 'www.google.com'
  },
  {
    title: 'Oraganizer ',
    details: "Had denoting properly jointure you occasion.Had denoting properly jointure you occasion.",
    post_url: 'www.google.com'
  }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
