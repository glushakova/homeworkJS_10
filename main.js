var firstList = document.getElementsByClassName("first")[0];
document.addEventListener("click", function(event) {
  if (firstList.contains(event.target)) {
    event.target.classList.add("bold");
  } else {
    Array.from(firstList.getElementsByTagName("li")).forEach(li => {
      li.classList.remove("bold");
    });
  }
});

function getElementText(el) {
  return Array.from(el.childNodes).find(child => child.nodeType === 3)
    .wholeText;
}

var secondList = document.getElementsByClassName("example_class_1")[0];
document.addEventListener("click", function(event) {
  if (secondList.contains(event.target)) {
    event.target.classList.add("bold");
    alert(getElementText(event.target));
  } else {
    Array.from(secondList.getElementsByTagName("li")).forEach(li =>
      li.classList.remove("bold")
    );
  }
});
