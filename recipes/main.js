import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}



function recipeTemplate(recipe) {
	return `<div class="recipe">
	<img id="recipe-img" src="${recipe.image}" alt="image of ${recipe.name}" />
	
		<div class="recipe-content"> 

	
			<ul class="tag">
				${tagsTemplate(recipe.tags)} 
			</ul>
			<h2"><a class="recipe-title" href="#">${recipe.name}</a></h2>
			
			${ratingTemplate(recipe.rating)} 
			
			<p class="recipe-description">
				${recipe.description}
			</p>
		</div>
	</div>`
	
;
}


function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
};


function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating 
            ? `<span aria-hidden="true" class="icon-star">⭐`
            : `<span aria-hidden="true" class="icon-star-empty">☆`;
    }
    html += `</span>`;
    return html;
		
};

function renderRecipes(recipeList) {
	const recipeContainer = document.getElementById("recipe-card");
	const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join(''); 
	recipeContainer.innerHTML = recipeHTML;

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();


function filter(query) {
    return recipes
        .filter(recipe => {
            return (
                recipe.name.toLowerCase().includes(query) || 
                recipe.description.toLowerCase().includes(query) || 
                (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(query))) || 
                (recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)))
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name)); 
}

function searchHandler(e) {
	e.preventDefault(); // Prevent default form submission behavior

    // Get the search input and convert it to lowercase
    const searchInput = document.getElementById("search-recipes").value.toLowerCase();

    // Filter the recipes
    const filteredRecipes = filter(searchInput);
	console.log("Search Input:", searchInput);
    // Render the filtered recipes
    renderRecipes(filteredRecipes);
	

}

document.getElementById("search-button").addEventListener("click", searchHandler);


