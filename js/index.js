$(document).ready(function() {
  // Run shuffle when the page loads
  shuffle()

  // Run shuffle when the button is clicked
  $("#shuffleButton").bind('click', shuffle);   

  // The function that changes all of the page content
  function shuffle() {
    hideAll()
    shuffleMemories()
    shufflePhotos()
    showQuotes()
  }

  // Function that hides the page content
  function hideAll() {
    var leadImages = $(".featuredImages");
    $("#story blockquote").hide();
    $(".memory").css("display","none");
    leadImages.remove();
  }
  
  // Function that shuffles order of the memories   
  function shuffleMemories(){
    // Find the memories
    $("#story").each(function(){
      var divs = $(this).find('.memory');
      // Hide the memories
      $(divs).remove();
      // // Shuffle the memories            
      divs = shuffleArray(divs)
      // Display the memories one at a time as they're shuffled
      $(divs).appendTo(this);
      $(".memory").fadeIn("1000");
    });
  }
  
  //function that shuffles the featured photos  
  function shufflePhotos() {
    // Store the photos in an array
    var photos = ["beachyheadsign","carcass","fields","gravelpath","puddles","sevensisters","wildflowers","woods", "chalkhorse", "crumblingcliffs","flowers","osbeacon","signaltower","signpost","waypoint","wheatfield"];

    photos = shuffleArray(photos)

    // Set featured images based on the new order
    var featuredImage1 = photos[0];
    var featuredImage2 = photos[1];
    var featuredImage3 = photos[2];
    
    // Display featured images after three specific memories
    $('#story div:nth-child(3)').after('<img class="featuredImages" src="images/'+ featuredImage1 +'.jpg">');
    $('#story div:nth-child(6)').after('<img class="featuredImages" src="images/'+ featuredImage2 +'.jpg">');
    $('#story div:nth-child(10)').after('<img class="featuredImages" src="images/'+ featuredImage3 +'.jpg">');

  }
  
  function showQuotes() {
    // Display two quotes
    $('#story div:nth-child(2) blockquote').show();
    $('#story div:nth-child(9) blockquote').show();
        
  }

  // The function that shuffles the arrays I want shuffled
  function shuffleArray ( inputArray ) {
    var i = inputArray.length;
    if ( i == 0 ) return false;
    while ( --i ) {
      var j = Math.floor( Math.random() * ( i + 1 ) );
      var tempi = inputArray[i];
      var tempj = inputArray[j];
      inputArray[i] = tempj;
      inputArray[j] = tempi;
    } 
    return inputArray
  }

});