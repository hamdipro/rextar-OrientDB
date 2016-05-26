var grex = require('grex');
var async = require('async');
var _ = require('lodash/array');
var gremlin = grex.gremlin;
var g = grex.g;
var client = null;



function Graph() {

    this.V = function(callback) {
        var query = gremlin('g.V'); // query.script === 'g.v(1)' 

        client.execute(query, function(err, response) {
            if (err) callback(err, null);
            callback(null, response);
        })
    };

    this.E = function(callback) {
        var query = gremlin('g.E'); // query.script === 'g.v(1)' 

        client.execute(query, function(err, response) {
            if (err) callback(err, null);
            callback(null, response);
        })
    };
    this.inV = function(idV, callback) {
    	var query = gremlin();
        query("g.v('" + idV + "').in()");
        client.fetch(query, function(err, response) {
            if (err) callback(err,null);
            callback(null,response);
        });

    }
    this.outV = function(idV, callback) {
    	var query = gremlin();
        query("g.v('" + idV + "').out()");
        client.fetch(query, function(err, response) {
            if (err) callback(err,null);
            callback(null,response);
        });

    }
}
module.exports = function(config) {
    client = grex.createClient(config);
    return { operations: new Graph() }
}