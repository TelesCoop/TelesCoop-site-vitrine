var currentClient = 0;
var currentEmployee = 0;
var clients = document.getElementsByClassName("client");
var employees = document.getElementsByClassName("employee");

// nice scroll to anchors
// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// --------------------------------------------
// CLIENT
// hide unused arrows
document.querySelector(".client .fa-chevron-left").style.display = 'none';
var rights = document.querySelectorAll(".client .fa-chevron-right");
rights[rights.length - 1].style.display = 'none';

function nextClient() {
  console.log('### next client', currentClient);
  currentClient += 1;
  if (currentClient >= clients.length) {
    currentClient = clients.length - 1;
  }
  updateShowItems(clients, currentClient, false);
}
function previousClient() {
  console.log('### prev client', currentClient);
  currentClient -= 1;
  if (currentClient < 0) {
    currentClient = 0;
  }
  updateShowItems(clients, currentClient, false);
}

function nextEmployee() {
  console.log('### next client', currentEmployee);
  currentEmployee += 1;
  if (currentEmployee >= employees.length) {
    currentEmployee = employees.length - 1;
  }
  updateShowItems(employees, currentEmployee, false);
}
function previousEmployee() {
  console.log('### prev client', currentEmployee);
  currentEmployee -= 1;
  if (currentEmployee < 0) {
    currentEmployee = 0;
  }
  updateShowItems(employees, currentEmployee, false);
}

function updateShowItems(items, currentItem, reverse) {
  for (var ix = 0; ix < items.length; ix++) {
    var itemIx = reverse ? items.length - 1 - ix : ix;
    var item = items[itemIx];
    if (itemIx === currentItem) {
      item.classList.add("show");
      item.classList.remove("hide");
      console.log('show', item, reverse);
    } else {
      console.log('hide', item, reverse);
      item.classList.add("hide");
      item.classList.remove("show");
    }
  }
}
