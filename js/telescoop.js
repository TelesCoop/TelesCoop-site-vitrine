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


const getActiveProjectsFilters = () => {
    const activeFilters = []
    document.querySelectorAll('.filter-active').forEach(el => {
        activeFilters.push(el.getAttribute("filter"))
    })
    return activeFilters
}
const filtersProjectsList = () => {
    const activeFilters = getActiveProjectsFilters()
    document.querySelectorAll('.project').forEach(el => {
        const projectFilter = el.getAttribute("filters")
        const isActive = activeFilters.some(a => {
           return projectFilter.includes(a)
        })
        if (isActive) {
            el.classList.remove("is-hidden")

        }
        else el.classList.add("is-hidden")
    })
}

const addFilters = (newFilter) => {
    const ACTIVE_CLASS = "filter-active"
    const filter = newFilter.getAttribute("filter")
    console.log(newFilter.classList.contains(ACTIVE_CLASS))
    if (newFilter.classList.contains(ACTIVE_CLASS)) newFilter.classList.remove(ACTIVE_CLASS)
    else newFilter.classList.add(ACTIVE_CLASS)
    filtersProjectsList()
}
