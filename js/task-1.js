const categories = document.querySelectorAll('#categories .item');

categories.forEach(category => {
  const ul = category.querySelector('ul');
  ul.classList.add('category-list');

  const h2 = category.querySelector('h2');
  h2.classList.add('category-title');


  const items = ul.querySelectorAll('li');
  items.forEach(item => {
    item.classList.add('category-item');
  });
});

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;

  const categoryItems = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryName}, Number of items: ${categoryItems}`);
});
