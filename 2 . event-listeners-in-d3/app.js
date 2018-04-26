d3.select("#new-note")
     .on("submit" , function(){
          d3.event.preventDefault() ;  // it prevents the default behaviour of the form

          var input = d3.select("input") ;

          d3.select("#notes")
             .append("p")
             .classed("note" , true ) 
             .text(input.property("value")) ;  // property as getter

          input.property("value" , "") ;   // property as setter 
          
      }) ;