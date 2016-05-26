var config = {
    host: 'localhost',
    port: 8182,
    graph: 'orientgraph'
};
var Graph = require("./lib/graphrexter.js")(config);

Graph.operations.V(function(err,data){
	if(err) console.log("Error Accured");
	console.log("Vertexes Data ",data);
})
Graph.operations.E(function(err,data){
	if(err) console.log("Error Accured");
	console.log("Edges Data ",data);
})

Graph.operations.inV("#9:2",function(err,data){
	if(err) console.log("Error Accured");
	console.log("INV Data ",data);
})
Graph.operations.outV("#9:1",function(err,data){
	if(err) console.log("Error Accured");
	console.log("OUT Data ",data);
})


