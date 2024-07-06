document.addEventListener("DOMContentLoaded", function () {
  // Set profile picture
  document.querySelector("#profilePicture img").src = config.profilePicture;

  // Set popup picture and quote
  document.querySelector(".popup-photo a").href = config.popupPicture;
  document.querySelector(".popup-photo img").src = config.popupPicture;
  document.querySelector(".popup-quote").textContent = config.popupQuote;

  // Set user name
  document.querySelector("#userName").textContent = config.userName;

  // Set links
  const linksContainer = document.getElementById("links");
  config.links.forEach(link => {
    const a = document.createElement("a");
    a.className = "link";
    a.href = link.href;
    a.target = "_blank";
    a.innerHTML = `<i class="${link.icon}">&nbsp;</i>${link.label}`;
    linksContainer.appendChild(a);
  });
});
