# rexter-OrientDB

rexter-OrientDB is a javascript wrapper around the Gremlin API using Rexster.

## Rexster

Rexster provides a RESTful shell to any Blueprints-complaint graph database. This HTTP web service provides: a set of standard low-level GET, POST, and DELETE methods, a flexible extension model which allows plug-in like development for external services (such as ad-hoc graph queries through Gremlin), and a browser-based interface called The Dog House.

A graph database hosted in the OrientDB can be configured in Rexster and then accessed using the standard RESTful interface powered by the Rexster web server.

#### Installation

You can get the latest stable release of Rexster from its Download Page. The latest stable release when this page was last updated was 2.6.0.

Or you can build a snapshot by executing the following Git and Maven commands:

```bash
$ git clone https://github.com/tinkerpop/rexster.git
$ cd rexster
$ mvn clean install
```

#### Configuration

In order to configure Rexster to connect to your OrientDB graph, locate the rexster.xml in the Rexster directory and add the following snippet of code:

```xml
<rexster>
  ...
  <graphs>
    ...
    <graph>
      <graph-enabled>true</graph-enabled>
      <graph-name>orientdbsample</graph-name>
      <graph-type>com.tinkerpop.rexster.OrientGraphConfiguration</graph-type>
      <graph-location>{{ DATABASE'S LOCATION }}</graph-location>
      <extensions>
        <allows>
           <allow>tp:gremlin</allow>
        </allows>
      </extensions>
      <properties>
        <username>{{ USERNAME }}</username>
        <password>{{ PASSWORD }}</password>
      </properties>
    </graph>
  ...
  </graphs>
</rexster>
```
For instance, for local database, replace `{{ DATABASE'S LOCATION }}` by `remote:localhost/{{ DATABASE'S NAME }}`.

#### Run

Locate the BIN folder in the Rexster directory, and enter this command line :

```bash
$ ./rexster.sh -s -c ../config/rexster.xml 
```

## Installation

```bash
$ git clone git@github.com:hamdipro/rextar-OrientDB.git
$ cd rextar-OrientDB && npm install
```

To run your app, you need to run these step by step :

1. Orientdb server.
2. Rexster server.
3. Node.js application.

## Examples

#### Exaple

```javascript
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
```


## Contributing

Contributions to the project are most welcome, so feel free to fork and improve.
