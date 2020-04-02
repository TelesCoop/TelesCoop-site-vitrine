var currentClient = 0;
var clients = document.getElementsByClassName("client");

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
  updateShowClients();
}
function previousClient() {
  console.log('### prev client', currentClient);
  currentClient -= 1;
  if (currentClient < 0) {
    currentClient = 0;
  }
  updateShowClients(true);
}
function updateShowClients(reverse){
  for (var ix = 0; ix < clients.length; ix++) {
    var clientIx = reverse ? clients.length - 1 - ix : ix;
    var client = clients[clientIx];
    if (clientIx === currentClient) {
      client.classList.add("show");
      client.classList.remove("hide");
      console.log('show', client, reverse);
    } else {
      console.log('hide', client, reverse);
      client.classList.add("hide");
      client.classList.remove("show");
    }
  }
}
