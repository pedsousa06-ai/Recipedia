// Recipes Data
const recipesData = [
    {
        id: 1,
        title: "Salada Cremosa de Abacate",
        description: "Uma salada fresca e nutritiva com abacate, tomate e molho especial",
        image: "assets/recipe-1.jpg",
        time: "15 min",
        difficulty: "Fácil",
        category: "breakfast",
        author: "Chef Ana",
        authorAvatar: "assets/avatar-1.jpg",
        likes: 234
    },
    {
        id: 2,
        title: "Sopa de Cogumelos",
        description: "Sopa cremosa e reconfortante com cogumelos frescos",
        image: "assets/recipe-2.jpg",
        time: "30 min",
        difficulty: "Médio",
        category: "lunch",
        author: "Chef Carlos",
        authorAvatar: "assets/avatar-2.jpg",
        likes: 189
    },
    {
        id: 3,
        title: "Filé Mignon ao Molho",
        description: "Carne suculenta com molho especial de vinho tinto",
        image: "assets/recipe-3.jpg",
        time: "45 min",
        difficulty: "Difícil",
        category: "dinner",
        author: "Chef Paulo",
        authorAvatar: "assets/avatar-3.jpg",
        likes: 456
    },
    {
        id: 4,
        title: "Pancake de Banana",
        description: "Panquecas fofinhas com banana e mel, perfeitas para o café",
        image: "assets/recipe-4.jpg",
        time: "20 min",
        difficulty: "Fácil",
        category: "breakfast",
        author: "Chef Ana",
        authorAvatar: "assets/avatar-1.jpg",
        likes: 567
    },
    {
        id: 5,
        title: "Massa ao Pesto",
        description: "Massa artesanal com molho pesto fresco de manjericão",
        image: "assets/recipe-5.jpg",
        time: "25 min",
        difficulty: "Médio",
        category: "lunch",
        author: "Chef Marina",
        authorAvatar: "assets/avatar-2.jpg",
        likes: 345
    },
    {
        id: 6,
        title: "Brownie de Chocolate",
        description: "Brownie super cremoso com calda de chocolate belga",
        image: "assets/recipe-6.jpg",
        time: "40 min",
        difficulty: "Médio",
        category: "dessert",
        author: "Chef Carla",
        authorAvatar: "assets/avatar-3.jpg",
        likes: 789
    }
];

// Render Recipes Function
function renderRecipes(recipes) {
    const grid = document.getElementById('recipesGrid');
    if (!grid) return;

    grid.innerHTML = recipes.map(recipe => `
        <div class="recipe-card" data-category="${recipe.category}">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
                <span class="recipe-badge">${recipe.category === 'breakfast' ? '☕ Café' : recipe.category === 'lunch' ? '🍽️ Almoço' : recipe.category === 'dinner' ? '🌙 Jantar' : '🍰 Sobremesa'}</span>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <div class="recipe-time">
                        <img src="assets/clock.svg" alt="Tempo">
                        <span>${recipe.time}</span>
                    </div>
                    <div class="recipe-difficulty">
                        <span>⭐ ${recipe.difficulty}</span>
                    </div>
                </div>
                <div class="recipe-footer">
                    <div class="recipe-author">
                        <img src="${recipe.authorAvatar}" alt="${recipe.author}">
                        <span>${recipe.author}</span>
                    </div>
                    <div class="recipe-likes">
                        <img src="assets/heart.svg" alt="Curtidas">
                        <span>${recipe.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Functionality
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const recipes = document.querySelectorAll('.recipe-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter recipes
            recipes.forEach(recipe => {
                if (category === 'all' || recipe.dataset.category === category) {
                    recipe.style.display = 'block';
                } else {
                    recipe.style.display = 'none';
                }
            });
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(recipesData);
    setupFilters();
});