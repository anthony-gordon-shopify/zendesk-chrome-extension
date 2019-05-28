$(document).ready(function() {
  var $containerElement = $(".pane.right.section .play");
  $containerElement.append(
    "<button class='test-button'>Test</button><p class='test-paragraph'>Clicks: <span class='paragraph-inner'></span></p>"
  );
  var $button = $(".test-button");
  var $paragraphInner = $(".test-paragraph .paragraph-inner");

  str_count = localStorage.getItem("count");
  if (localStorage.getItem("count") === null) {
    var count = 0;
    $paragraphInner.append(0);
  } else {
    var count = parseInt(str_count);
    $paragraphInner.empty();
    $paragraphInner.append(count);
  }

  $button.click(function() {
    count++;

    $paragraphInner.empty();
    $paragraphInner.append(count);

    localStorage.setItem("count", count);
    console.log(count);
  });
});

/*
if (localStorage.getItem("count") === null) {
      var count = 0;
    } else {
      var count = localStorage.getItem("count");
    }
    count += 1;
    localStorage.setItem("count", JSON.stringify(count));
    $paragraphInner.empty();
    $paragraphInner.append(localStorage.getItem("count"));

    console.log(localStorage.getItem("count"));
    */
