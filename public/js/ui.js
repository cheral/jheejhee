const recipes = document.querySelector('.recipes');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render recipe data
const renderRecipe = (data, id) => {

  const html = `

  <div class="col s6 l4">
  <div class="card"  recipe data-id="${id}">
  <div class="card-image">
    <img src="img/dish.png" alt="">
  </div>
  <div class="card-content">
    <span class="card-title">${data.name}</span>
  </div>
</div>
</div>
  `;
  recipes.innerHTML += html;

};

// remove recipeg vcr5gv `
const removeRecipe = (id) => {
  const recipe = document.querySelector(`.recipe[data-id=${id}]`);
  recipe.remove();
};