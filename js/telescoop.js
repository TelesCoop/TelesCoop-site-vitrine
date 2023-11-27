// nice scroll to anchors
// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// https://bulma.io/documentation/components/navbar/
// navbar burger menu
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });


});
// Function to get active categories
const getActiveCategories = () => {
    const activeCategoryElements = document.querySelectorAll(".category-active");
    return [...activeCategoryElements].map(el => el.getAttribute("category"));
};

// Function to filter projects list based on active categories
const filterProjectsList = (activeCategories) => {
    document.querySelectorAll('.project-card').forEach(projectCard => {
        const projectCategories = projectCard.getAttribute("card-categories");
        const isActive = activeCategories.some(category => projectCategories.includes(category));
        projectCard.classList.toggle("is-hidden", !isActive);
    });
};

// Function to toggle active class on an element
const toggleActiveClass = (element, className) => {
    element.classList.toggle(className);
};

// Function to apply styles based on active categories
const applyStyle = (activeCategories) => {
    document.querySelectorAll('.filter-category').forEach(filterCategory => {
        const cardCategory = filterCategory.getAttribute("filter-category");
        const isActive = activeCategories.some(category => cardCategory.includes(category));
        const [background, button] = [...filterCategory.children].filter(el => el.classList.contains("background") || el.classList.contains("button"));

        background.classList.toggle("is-hidden", !isActive);
        button.classList.toggle("has-text-grey-dark", !isActive);
    });
};

// Function to filter projects by category
const filterProjectsByCategory = (element) => {
    const activeCategory = "category-active";
    toggleActiveClass(element, activeCategory);

    const activeCategories = getActiveCategories();
    filterProjectsList(activeCategories);
    applyStyle(activeCategories);
};
