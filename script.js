// script.js
document.getElementById("searchButton").addEventListener("click", () => {
  performSearch();
});

document.getElementById("searchInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    performSearch();
  }
});

document.getElementById("resetButton").addEventListener("click", () => {
  resetSearch();
});

function performSearch() {
  const searchInput = document.getElementById("searchInput").value;
  if (searchInput.trim() !== "") {
    fetchRecipes(searchInput);
  }
}

function resetSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("recipeList").innerHTML = "";
}

// ... rest of the code remains the same ...



document.getElementById("searchButton").addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput.trim() !== "") {
      fetchRecipes(searchInput);
    }
  });
  
  document.getElementById("resetButton").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    document.getElementById("recipeList").innerHTML = "";
  });
  
  function fetchRecipes(query) {
    const apiKey = "150978d0ab354c7aad736a6e1061addf";
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        displayRecipes(data.results);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }
  
  function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";
  
    if (recipes.length === 0) {
      recipeList.innerHTML = "<p>No recipes found. Please try another search term.</p>";
      return;
    }
  
    recipes.forEach((recipe) => {
      const { title, image, instructions } = recipe;
  
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe");
  
      const recipeImage = document.createElement("img");
      recipeImage.src = image;
      recipeCard.appendChild(recipeImage);
  
      const recipeTitle = document.createElement("h2");
      recipeTitle.textContent = title;
      recipeCard.appendChild(recipeTitle);
  
      const recipeDescription = document.createElement("p");
      recipeDescription.textContent = instructions;
      recipeCard.appendChild(recipeDescription);
  
      recipeList.appendChild(recipeCard);
    });
  }


  
  console.log(1+"1")
  console.log(1-"1")
