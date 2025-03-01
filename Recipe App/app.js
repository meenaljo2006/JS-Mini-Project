function searchRecipe() {
    let query = document.getElementById('search').value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let recipes = data.meals;
            let output = '';
            if (recipes) {
                recipes.forEach(recipe => {
                    let safeInstructions = encodeURIComponent(recipe.strInstructions);
                    output += `
                        <div class="recipe">
                            <h3>${recipe.strMeal}</h3>
                            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                            <p><strong>Category:</strong> ${recipe.strCategory}</p>
                            <p><strong>Instructions:</strong> ${recipe.strInstructions.substring(0, 100)}...</p>
                            <button class="read-more-btn" onclick="showModal('${recipe.strMeal}', '${safeInstructions}')">Read More</button>
                        </div>
                    `;
                });
            } else {
                output = '<p>No recipes found. Try a different search!</p>';
            }
            document.getElementById('recipeContainer').innerHTML = output;
        })
        .catch(error => console.error('Error fetching data:', error));
}

function showModal(title, encodedInstructions) {
    let decodedInstructions = decodeURIComponent(encodedInstructions);
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalInstructions').innerText = decodedInstructions;
    document.getElementById('recipeModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}