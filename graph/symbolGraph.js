const SymbolTable = require('../find/binarySearchTree');
const Graph = require('./graph');

class SymbolGraph {
    constructor(lines, separator) {
        const st = new SymbolTable();

        for (let line of lines) {
            let verts = line.split(separator);

            for (let i = 0; i < verts.length; i++) {
                if (!st.contains(verts[i])) {
                    st.put(verts[i], st.size());
                }
            }
        }

        const keys = new Array(st.size());

        for (let name of st.keys()) {
            keys[st.get(name)] = name;
        }

        const graph = new Graph(st.size());

        for (let line of lines) {
            let verts = line.split(separator);
            let v = st.get(verts[0]);

            for (let i = 1; i < verts.length; i++) {
                graph.addEdge(v, st.get(verts[i]));
            }
        }

        this.st = st;
        this.keys = keys;
        this.graph = graph;
    }

    contains(name) {
        return this.st.contains(name);
    }

    index(name) {
        return this.st.get(name);
    }

    name(index) {
        return this.keys[index];
    }

    getGraph() {
        return this.graph;
    }
}

module.exports = SymbolGraph;