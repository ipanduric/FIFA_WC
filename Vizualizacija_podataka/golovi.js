//velicina barchart-a 
var margin = {top: 10, right: 0, bottom: 0, left: 50},
    width = 600;
    height = 400;
    var flag = 0;
d3.json("golovi.json", function(error, data) {

    data.forEach(function(d) {
        d.PRVENSTVO = d.PRVENSTVO;
        d.BROJ_GOLOVA = +d.BROJ_GOLOVA;
    });

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);

// definiranje osi
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(20);
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Broj golova:</strong> <span style='color:green'>" + d.BROJ_GOLOVA + "</span>";
  })
// dodavanje SVG-a
var svg = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 600)
  .append("g")
    .attr("transform", 
          "translate("+ margin.left + "," + margin.top +")");
svg.call(tip);	
  // raspon podataka
  x.domain(data.map(function(d) { return d.PRVENSTVO; }));
  y.domain([0, d3.max(data, function(d) { return d.BROJ_GOLOVA; })]);

  // dodavanje osi
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Broj golova");

  // Add bar chart
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
    .on("click", clicked)
      .attr("class", "bar")   
      .attr ("height", 0)   
      .transition()      
      .duration(10)   
      .delay(function(d,i){ return i*150})  
      .attr("x", function(d) { return x(d.PRVENSTVO); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.BROJ_GOLOVA); })
      .attr("height", function(d) { return height - y(d.BROJ_GOLOVA); });
   
});
// http://bl.ocks.org/Caged/6476579

function type(d) {
  d.BROJ_GOLOVA = +d.BROJ_GOLOVA;
  return d;
}

//funkcija za prikaz strijelaca
function clicked (d) {

if (flag == 1) {
  d3.selectAll(".element")
  .remove();
}

if (d.PRVENSTVO == "1930. Urugvaj") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("urugvaj.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1934. Italija") { 

  var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("italija.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1938. Francuska") { 

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("francuska38.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(7);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1950. Brazil") { 

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("brazil50.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}



if (d.PRVENSTVO == "1954. Švicarska") { 

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("svicarska.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(11);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1958. Švedska") { 

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("svedska.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(11);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1962. Čile") { 

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("cile.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(4);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}
        if (d.PRVENSTVO == "1966. Engleska") { 

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("engleska.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(9);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1970. Meksiko") { 

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("meksiko.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1974. Njemačka") { 

  var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("njemacka74.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(7);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1978. Argentina") { 

  var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("argentina.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1982. Španjolska") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("spanjolska.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1986. Meksiko") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("meksiko86.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1990. Italija") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("italija90.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1994. USA") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("sad.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "1998. Francuska") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("francuska98.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "2002. Koreja/Japan") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("koreajapan.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(8);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "2006. Njemačka") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("njemacka06.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}

if (d.PRVENSTVO == "2010. JAR") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("jar.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}


if (d.PRVENSTVO == "2014. Brazil") {

   var margin = {top: 30, left: 50},
    width = 300;
    height = 200;

  d3.json("brazil14.json", function(error, data) {

    data.forEach(function(d) {
        d.IGRAC = d.IGRAC;
        d.GOLOVI = +d.GOLOVI;
    });        
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);
 var tip = d3.tip()
   .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Igrač:</strong> <span style='color:green'>" + d.IGRAC + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr ("class", "element")
    .attr("width", 500)
    .attr("height", 500)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);
   x.domain(data.map(function(d) { return d.IGRAC; }));
  y.domain([0, d3.max(data, function(d) { return d.GOLOVI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(0)")
      .attr("y", -5)
      .attr("dy", "-0.4em")
      .attr("dx", "2.5em")
      .style("text-anchor", "end")
      .text("Golovi");

  svg.selectAll("barStr")
      .data(data)
    .enter().append("rect")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
      .attr("class", "barStr")
      .attr("transform", "translate(0)")
      .attr("height", 0)
      .transition()
      .duration(1550)
      .delay(function(d,i){ return i*250})
      .attr("x", function(d) { return x(d.IGRAC); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.GOLOVI); })
      .attr("height", function(d) { return height - y(d.GOLOVI); });

flag = 1;
});
}

function type(d) {
  d.IGRAC = +d.IGRAC;
  return d;
}


}


