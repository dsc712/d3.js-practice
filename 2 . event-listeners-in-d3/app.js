
 // logic for submitting a new note 
d3.select("#new-note")
     .on("submit" , function(){
     	  // we can access the event object inside of callback using d3.event 
          d3.event.preventDefault() ;  // it prevents the default behaviour of the form ,i.e everytime we submit the form page reloads 
                                       // and we don't want that to happen 
          var input = d3.select("input") ;

          d3.select("#notes")
             .append("p")      // append adds the tag in the current selection 
             .classed("note" , true ) // for adding the class to the appended p
             .text(input.property("value")) ;  // property as getter , as second argument have not been passed

          input.property("value" , "") ;   // property as setter , resetting the input as null once form is submitted
          
      }) ;