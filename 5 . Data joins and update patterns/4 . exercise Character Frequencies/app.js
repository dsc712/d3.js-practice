// adding event listener on reset button 
d3.select("#reset")
    .on("click" , function(){
        d3.selectAll(".letter")
            .remove() ;
        d3.select("#phrase")
            .text("") ;
        d3.select("#count")
            .text("") ;
    });


d3.select("form")
   .on("submit" , function(){
      d3.event.preventDefault() ; // prevents the deault behaviour of the form 
      var input = d3.select("input") ;  // selecting the input tag 
      var text  = input.property("value") ;  // using property as getter 
      
      var letters = 
        d3.select("#letters")
          .selectAll(".letter")  // right now this selection is empty as there is no class letter in our html 
          .data(getFrequencies(text) , function(d){
          	 return d.character ;
          }) ;

        letters
           .classed("new" , false)       // new class's style has been given in css file
           .exit()                       // remove all the exit selections , i.e selections with no data like #phrase , #count e.t.c  
           .remove() ;

        letters
          .enter()
          .append("div")
            .classed("letter" , true)      // add these two classes to the enter selections  , i.e data with no seletion 
            .classed("new" , true)         // these two styles should be attached to only new letters
           .merge(letters)
            .style("width" , "20px")          // rest of the styles should be applied to both 
            .style("line-height" , "20px") 
            .style("margin-right" , "5px")
            .style("height" , function(d){
            	return d.count * 20 + "px" ;   // height should be related to the frequency count of letter 
            })
            .text(function(d){
            	return d.character ;          // finally setting the letter as text 
            }) ;

       d3.select("#phrase")                    // set the text in phrase
           .text("Analysis of : " + text) ;

       d3.select("#count")                    // new characters are those which were in enter selections that is they were previously not related to html 
           .text(" (New characters : " + letters.enter().nodes().length + " )" ) ;

       input.property("value" , "") ;  // property as setter 
   });


function getFrequencies(str){
	var sorted = str.split("").sort() ;
	var data = [] ;  // creating an empty array 
	

	for(var i = 0 ; i < sorted.length ; i++ ) {
		var last = data[data.length -1] ; // taking the last object present in data array 
		if(last && last.character === sorted[i] ){  // same characters will be consecutive to each other in sorted sequence
              last.count++ ;  // incrementing the frequency count
		}else{
			data.push({character : sorted[i] , count : 1} ) ;  // new character pushed as an object with 2 fields in data array
		}
	}

	return data ;
}


// getFrequencies("hello")  -->  [ {character : "e" , count : 1 } , {character : "h" , count : 1 } ....  ] 
//our data array should look like this