$(document).ready(function(){
  $("button").click(function(){
    var str = $("input").val();
    $("ol").html($("ol").html()+"<li class='list'>"+str+"</li>");
  });
  $(document).on('click','li', function(){
    $(this).toggleClass("strike");
  });
  $("input").focus(function(){
    $(this).val("");
  });
  $("#clr").click(function(){
    $("ol").html("");
  });
});
