"use strict";

const Bag = require('./../collection/bag');

class Graph {
    /**
     * undirected graph
     * @param verticesCount {Number|null} count of vertices
     * @param textSource {String} graph from source
     * @constructor
     */
    constructor(verticesCount, textSource) {
        if (textSource) {
            var graphData = textSource.split(/\n/);

            this.initGraph(graphData[0]);
            var edgesCount = graphData[1];

            graphData = graphData.slice(2);


            for (let i = 0; i < edgesCount; i++) {
                let pair = graphData.shift().split(' ');
                let v = +pair[0];
                let w = +pair[1];

                this.addEdge(v, w);
            }
        } else {
            this.initGraph(verticesCount);
        }
    }

    initGraph(verticesCount) {
        this.verticesCount = verticesCount;
        this.edgesCount = 0;
        this.adj = [];

        for (let i = 0; i < verticesCount; i++) {
            this.adj[i] = new Bag();
        }
    }

    /**
     * Count of vertices
     * @return Number
     */
    V() {
        return this.verticesCount;
    }

    /**
     * Count of edges
     * @return Number
     */
    E() {
        return this.edgesCount;
    }

    addEdge(v, w) {
        this.adj[v].add(w);
        this.adj[w].add(v);

        this.edgesCount++;
    }

    adjacencyFor(v) {
        return this.adj[v];
    }

    toString() {
        var graphString = '';

        for(let i = 0; i < this.adj.length; i++) {
            let row = '' + i + ': ';

            for(let item of this.adj[i]) {
                row += ' ' + item;
            }

            graphString += row + '\n';
        }

        console.log(graphString);
    }
}

module.exports = Graph;