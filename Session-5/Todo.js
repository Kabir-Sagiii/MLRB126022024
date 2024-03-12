function todo() {
  var inputDomNode = document.querySelector("input");
  var h4 = document.createElement("h4");
  h4.innerText = inputDomNode.value;

  document.querySelector("body").appendChild(h4);
  //   console.log(inputDomNode.value);
  document.querySelector("body").style.textAlign = "center";
}
