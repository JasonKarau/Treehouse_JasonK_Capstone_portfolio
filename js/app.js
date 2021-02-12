const tabs = document.querySelectorAll('.io');
const hiddenText = document.querySelectorAll('.hidden-subtext');

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    if (hiddenText[index].style.display == "none") {
      tab.innerHTML = "&#8593;";
      hiddenText[index].style.display = "block";
    } else {
      hiddenText[index].style.display = "none";
      tab.innerHTML = "&#8595;";
  }});
});
