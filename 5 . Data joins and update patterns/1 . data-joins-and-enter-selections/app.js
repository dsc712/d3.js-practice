// data is array of objects 
var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
  }, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
  }, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
  }, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
  }, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
  }
];

// colors object having rating and hexadecimal colors as key-value pairs
var colors = {
  "PG-13" : "#3cff00" ,
  "PG" : "#f9ff00" ,
  "R" : "#ff9000" ,
  "G" : "#ff0000"

} ;

d3.select("#quotes")
    .style("list-style" , "none")
   .selectAll("li")   // although there is no list item here, it will not return null as it will return a selection object with 0 nodes 
   .data(quotes)  // we are attaching each piece of our quotes array to our DOM element
   .enter()
   .append("li")
     .text( d => " ' " + d.quote + " '  - " + d.movie + " ( " + d.year + ") "  ) 
     .style("margin" , "20px") 
     .style("padding" , "20px")
     .style("font-size" , d => d.quote.length < 25 ? "2em" : "1em"  )
     .style("background-color" , d => colors[d.rating] ) 
     .style("border-radius" , "8px") ;



