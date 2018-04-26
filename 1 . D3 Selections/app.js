// method chaining in D3 
d3.select(".outer")
       .style("background-color" , "grey")
       .style("color" , "white")
   .select("div")
        .style("background-color" , "purple")
        .style("color" , "white") 
   .select("div")
         .style("background-color" , "red")
         .style("color : white") ; 

// d3 methods with callbacks 
 d3.selectAll("li")
   .style("background-color" , function( ab , idx){
        return (idx % 2 === 0) ? "grey" : "white" ; 
    }) ;

d3.selectAll("li")
   .style("color" , function( ab , idx){
        return (idx % 2 === 0) ? "white" : "black" ; 
    }) ;