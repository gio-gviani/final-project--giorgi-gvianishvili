let isHidden = true;
function hideShow() {
  let hiddenCategs = document.getElementsByClassName("hidden_categ");
  let seeMoreLess = document.getElementById("see_more_less");
  let noneBlock;
  if (isHidden) {
    noneBlock = "block";
    seeMoreLess.text = "see less";
  } else {
    noneBlock = "none";
    seeMoreLess.text = "see more";
  }
  isHidden = !isHidden;
  for (let i = 0; i < hiddenCategs.length; i++) {
    hiddenCategs[i].style.display = noneBlock;
  }
}
