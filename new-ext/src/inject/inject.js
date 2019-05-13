$(document).ready(function() {
  var $containerElement = $(".pane.right.section .play");
  $containerElement.append(
    "<button class='test-button'>Test</button><p class='test-paragraph'>Clicks: <span class='paragraph-inner'></span></p>"
  );
  var $button = $(".test-button");
  var $paragraphInner = $(".test-paragraph .paragraph-inner");
  var count = 0;
  $button.click(function() {
    count += 1;
    $paragraphInner.empty();
    $paragraphInner.append(count);
    console.log(count);
  });
});
