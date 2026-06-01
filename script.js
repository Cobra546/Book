const pageFlip = new St.PageFlip(
  document.getElementById("book"),
  {
    width:360,
    height:560,

    size:"fixed",

    showCover:true,

    useMouseEvents:true,

    mobileScrollSupport:false,

    swipeDistance:30,

    maxShadowOpacity:0.5
  }
);

pageFlip.loadFromHTML(
  document.querySelectorAll(".page")
);

/* POPUP ON LAST PAGE */

pageFlip.on("flip", (e) => {

  const lastPage =
  pageFlip.getPageCount() - 1;

  if(e.data === lastPage){

    setTimeout(() => {

      document
      .getElementById("finalPopup")
      .style.display = "flex";

    }, 3000);

  }

});

function closePopup(){

  document
  .getElementById("finalPopup")
  .style.display = "none";

}
