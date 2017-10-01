$( document ).ready(function() {
  $("#compare-section").hide();
  $( "#compare" ).click(function() {
    $("#compare-text-1").html('');    
    $("#compare-text-2").html('');
    var text1 = $('#text1').val().split('\n');
    var text2 = $('#text2').val().split('\n');
    
    if(text1.length >= text2.length){
      $.each(text1, function(index, item) {
        if(item != text2[index]){

          print_blue('#compare-text-1',item);
          print_blue('#compare-text-2',text2[index]);
          
          return true;  // Continue
         }
         print_grey('#compare-text-1',item);
         print_grey('#compare-text-2',text2[index]);
      });
    }else{
      $.each(text2, function(index, item) {
        if(item != text1[index]){
          
          print_blue('#compare-text-2',item);
          print_blue('#compare-text-1',text1[index]);
          
          return true;  // Continue
         }
          print_grey('#compare-text-2',item);
          print_grey('#compare-text-1',text1[index]);
      });
    }
    $("#compare-section").show(); 
  });  
});

function print_blue(id,text){
  if(!text)
    $(id).append('<p> </p>');
  else
    $(id).append('<p class="text-primary">' + text + "</p>" ); 
}

function print_grey(id,text){
  if(!text)
    $(id).append('<p> </p>');
  else
    $(id).append('<p class="text-secondary">' + text + "</p>" ); 
}