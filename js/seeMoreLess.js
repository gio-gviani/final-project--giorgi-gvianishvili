let isHidden = true;
function hideShow() {
  let hiddenCategs = document.getElementsByClassName("hidden_categ");

  let seeMoreLess = document.getElementsByClassName("see_more_less");
  let noneBlock;
  if (isHidden) {
    noneBlock = "block";
    for (let i = 0; i < seeMoreLess.length; i++) {
      seeMoreLess[i].text = "see less";
    }
  } else {
    noneBlock = "none";
    for (let i = 0; i < seeMoreLess.length; i++) {
      seeMoreLess[i].text = "see more";
    }
  }
  isHidden = !isHidden;
  for (let i = 0; i < hiddenCategs.length; i++) {
    hiddenCategs[i].style.display = noneBlock;
  }
  if (screen.width <= 861) {
    hiddenCategs[0].style.display = "block";
  }
}
