window.onscroll = function () {
  var competence2Elements = document.getElementsByClassName("competence2");
  for (var i = 0; i < competence2Elements.length; i++) {
    var competence2Element = competence2Elements[i];
    var elementPosition = competence2Element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
    if (elementPosition < screenPosition) {
      competence2Element.style.opacity = "1";
    }
  }
};

window2.onscroll = function () {
  var competenceElements = document.getElementsByClassName("competence");
  for (var i = 0; i < competenceElements.length; i++) {
    var competenceElement = competenceElements[i];
    var elementPosition = competenceElement.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
    if (elementPosition < screenPosition) {
      competenceElement.style.opacity = "1";
    }
  }
};
