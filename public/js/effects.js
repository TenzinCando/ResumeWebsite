/*
 * Author:      TK
 * Date:        2019-04-17
 * Description: Track all special effects done to the website
 * 
*/

showHideNavBarWhenScrolling();

/*
 * Author:      TK
 * Date:        2019-04-17
 * Description: Hide the nav bar when scrolling down the page. 
 *              Show the nav bar when the user scrolls up.
 * 
*/
function showHideNavBarWhenScrolling() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
  }
}
