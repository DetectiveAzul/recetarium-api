use recetarium;
db.dropDatabase();

db.recipes.insert({
  name: 'Butternut Squash Pie',
  tags: ['vegan', 'desserts'],
  ingredients: ['butternut', 'pie'],
  preparation: ['Squash the butternut', 'put it into a pie'],
  image: 'https://www.thespruceeats.com/thmb/RjD5meb6CcQGLfn2OptQw7OPsg0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/butternut-squash-pie-15-56a8bab85f9b58b7d0f4a523.jpg'
});
