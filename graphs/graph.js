class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) this.adjacencyList.set(vertex, []);
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList.set(
      v1,
      this.adjacencyList.get(v1).filter((vertex) => vertex !== v2)
    );

    this.adjacencyList.set(
      v2,
      this.adjacencyList.get(v2).filter((vertex) => vertex !== v1)
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log("Vertex not found.");
      return;
    }

    for (const edge of this.adjacencyList.get(vertex)) {
      this.removeEdge(vertex, edge);
    }

    this.adjacencyList.delete(vertex);
  }

  isEmpty() {
    return this.adjacencyList.size === 0;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Graph is empty.");
      return;
    }

    for (const [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} --> ${edges.join(", ")}`);
    }
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    while (queue.length > 0) {
      const vertex = queue.shift();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
      }

      const edges = this.adjacencyList.get(vertex);

      for (const edge of edges) {
        if (!visited.has(edge)) queue.push(edge);
      }
    }

    return result;
  }

  dfs(start) {
    const visited = new Set();
    const stack = [start];
    const result = [];

    while (stack.length > 0) {
      const vertex = stack.pop();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
      }

      const edges = this.adjacencyList.get(vertex);

      for (let i = edges.length - 1; i >= 0; i--) {
        if (!visited.has(edges[i])) stack.push(edges[i]);
      }
    }

    return result;
  }

  dfsRecursive(start) {
    const visited = new Set();
    const result = [];

    const dfs = (vertex) => {
      if (!vertex || visited.has(vertex)) return;

      visited.add(vertex);
      result.push(vertex);

      for (const edge of this.adjacencyList.get(vertex)) {
        dfs(edge);
      }
    };

    dfs(start);

    return result;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

graph.print();

graph.removeEdge("B", "D");
graph.removeVertex("D");

graph.print();

console.log(graph.bfs("C"));

console.log(graph.dfs("C"));

console.log(graph.dfsRecursive("C"));