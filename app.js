// Application state variables to track current settings and filtered tools
let currentLanguage = 'en';
let currentTheme = 'light';
let filteredTools = [];
let selectedCategory = 'all';

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application starting...'); // Debug log to verify initialization
    initializeApp();
});

// Main initialization function to set up the application
function initializeApp() {
    // First, make a copy of all tools for initial display
    filteredTools = [...tools];
    
    // Check system theme preference and apply it
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
    
    // Set up the category filter buttons
    initializeCategoryFilters();
    
    // Display the initial set of tools
    renderTools(filteredTools);
    
    // Set up the search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Add sort functionality to the sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => sortTools(e.target.value));
    }
}

// Toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.toggle-btn i');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        currentTheme = 'dark';
    } else {
        body.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        currentTheme = 'light';
    }
}

// Handle language switching between English and Hebrew
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update the language toggle buttons
    document.querySelectorAll('.language-toggle .toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(lang));
    });
    
    // Set text direction for RTL support
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    
    // Re-render tools with new language
    renderTools(filteredTools);
}

// Initialize the category filter buttons
function initializeCategoryFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;

    // Get unique categories and add 'all' option
    const categories = ['all', ...new Set(tools.map(tool => tool.category))];
    
    // Create filter buttons for each category
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = category;
        button.addEventListener('click', () => filterByCategory(category));
        
        if (category === 'all') {
            button.classList.add('active');
        }
        
        categoryFilter.appendChild(button);
    });
}

// Filter tools by category
function filterByCategory(category) {
    selectedCategory = category;
    
    // Update active state of filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === category);
    });
    
    // Filter tools based on selected category
    filteredTools = category === 'all' 
        ? [...tools] 
        : tools.filter(tool => tool.category === category);
    
    // Apply any existing search filter
    const searchTerm = document.getElementById('search').value;
    if (searchTerm) {
        handleSearch({ target: { value: searchTerm } });
    } else {
        renderTools(filteredTools);
    }
}

// Handle search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    // Filter tools based on search term and selected category
    filteredTools = tools.filter(tool => {
        // First check category filter
        if (selectedCategory !== 'all' && tool.category !== selectedCategory) {
            return false;
        }
        
        // Then check search term against name, description, and tags
        const description = tool.description[currentLanguage].toLowerCase();
        const nameMatch = tool.name.toLowerCase().includes(searchTerm);
        const descriptionMatch = description.includes(searchTerm);
        const tagMatch = tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return nameMatch || descriptionMatch || tagMatch;
    });
    
    renderTools(filteredTools);
}

// Render the tools grid
function renderTools(toolsToRender) {
    const toolGrid = document.getElementById('toolGrid');
    if (!toolGrid) {
        console.error('Tool grid element not found!');
        return;
    }
    
    toolGrid.innerHTML = '';
    
    if (!toolsToRender || toolsToRender.length === 0) {
        toolGrid.innerHTML = '<div class="no-results">No tools found</div>';
        return;
    }
    
    toolsToRender.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.setAttribute('data-category', tool.category);
        
        // Get the background color variable based on category
        const categoryClass = tool.category.toLowerCase().replace(/\s+/g, '-');
        
        card.innerHTML = `
            <span class="category-label" style="background-color: var(--${categoryClass}-color)">
                ${tool.category}
            </span>
            <div class="tool-header">
                ${tool.icon ? `<img src="${tool.icon}" alt="${tool.name}" class="tool-icon">` : ''}
                <h3>${tool.name}</h3>
            </div>
            <p class="tool-description">${tool.description[currentLanguage]}</p>
            <div class="tool-tags">
                ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${tool.url}" target="_blank" class="visit-btn">
                ${currentLanguage === 'en' ? 'Visit Tool' : 'בקר בכלי'}
            </a>`;
        
        toolGrid.appendChild(card);
    });
}

// Sort tools based on different criteria
function sortTools(criteria) {
    switch (criteria) {
        case 'name':
            filteredTools.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'category':
            filteredTools.sort((a, b) => {
                const catCompare = a.category.localeCompare(b.category);
                return catCompare !== 0 ? catCompare : a.name.localeCompare(b.name);
            });
            break;
        case 'popular':
            // In a real application, this would use actual popularity metrics
            filteredTools.sort((a, b) => b.tags.length - a.tags.length);
            break;
    }
    
    renderTools(filteredTools);
}

// Export bookmarks functionality
function exportBookmarks() {
    const bookmarks = tools.map(tool => ({
        title: tool.name,
        url: tool.url,
        category: tool.category
    }));
    
    const bookmarksBlob = new Blob([JSON.stringify(bookmarks, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(bookmarksBlob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tool-bookmarks.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    const container = document.getElementById('toastContainer');
    container.appendChild(toast);
    
    // Remove toast after animation
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => container.removeChild(toast), 500);
    }, 3000);
}