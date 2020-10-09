export function menuHandler(menuItem, text1, text2) {
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
  let section;
  function click(e) {
    switch (menuItem) {
      case "#start":
        section = "section-1";
        break;
      case "#features":
        section = "section-2";
        break;
      case "#enlightenment":
        section = "section-3";
        break;
      case "#discusion":
        section = "section-4";
        break;
    }
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  }
} //menuHandler end
