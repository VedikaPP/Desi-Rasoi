const grid = document.getElementById("recipeGrid");
const search = document.getElementById("search");

function showRecipes(list) {
  grid.innerHTML = "";
  list.forEach(r => {
    grid.innerHTML += `
      <div class="recipe-card">
        <img src="${r.image}">
        <h3>${r.name}</h3>
        <p>${r.type}</p>
        <button onclick="viewRecipe(${r.id})">View Recipe</button>
      </div>`;
  });
}

showRecipes(recipes);

search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(value)
  );
  showRecipes(filtered);
});

function viewRecipe(id) {
  localStorage.setItem("recipeId", id);
  window.location.href = "recipe.html";
}
