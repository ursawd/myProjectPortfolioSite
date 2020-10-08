function menuHandler(menuItem, text1, text2) {
  //
  // Receive menu item (Id:string) & text1,text2:string and setup
  // event listeners and event handlers to handle
  // change of menu item text and click event processing
  //
  var item = document.querySelector(menuItem);
  item.addEventListener("mouseover", moverEvent);
  item.addEventListener("mouseout", moutEvent);
  item.addEventListener("click", click);

  function moverEvent(e) {
    item.textContent = text1;
  }
  function moutEvent(e) {
    item.textContent = text2;
  }
  function click(e) {
    console.log(e);
    console.log("Start Clicked");
  }
} //menuHandler end
menuHandler("#start", "Start at the beginning", "Start");
menuHandler("#features", "Explore my features", "Features");
menuHandler("#enlightenment", "Find out more about me", "Enlightenment");
menuHandler(
  "#discusion",
  "Let's talk about what the future may bring",
  "Discusion"
);
