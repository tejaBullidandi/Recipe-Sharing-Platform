// Sample data for initial recipes
const initialRecipes = [
    { name: "Pasta Carbonara", ingredients: "Pasta, Eggs, Bacon, Parmesan Cheese", instructions: "Cook pasta, fry bacon, mix with eggs and cheese." },
    { name: "Chicken Stir Fry", ingredients: "Chicken, Broccoli, Soy Sauce, Garlic", instructions: "Stir fry chicken and vegetables with soy sauce and garlic." },
];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    initialRecipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipeItem');
        recipeItem.innerHTML = `
            <h2>${recipe.name}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipeList.appendChild(recipeItem);
    });
}

// Function to submit a new recipe
function submitRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if (recipeName && ingredients && instructions) {
        const newRecipe = { name: recipeName, ingredients, instructions };
        initialRecipes.push(newRecipe);
        displayRecipes();
        // You can add code to clear the form fields here if needed
    } else {
        alert('Please fill in all fields');
    }
}

// Display initial recipes on page load
displayRecipes();