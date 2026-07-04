export function buildDependencyGraph(ast) {
  const graph = {};

  function addEdge(from, to) {
    if (!graph[from]) graph[from] = new Set();
    graph[from].add(to);
  }

  function walk(node, parent = null) {
    if (!node || typeof node !== "object") return;

    if (node.type === "FunctionDeclaration") {
      const name = node.id?.name || "anonymous";

      if (parent) addEdge(parent, name);

      parent = name;
    }

    if (node.type === "CallExpression") {
      const callee =
        node.callee?.name ||
        node.callee?.property?.name;

      if (callee && parent) {
        addEdge(parent, callee);
      }
    }

    for (const key in node) {
      const child = node[key];

      if (Array.isArray(child)) {
        child.forEach((c) => walk(c, parent));
      } else if (child && typeof child === "object") {
        walk(child, parent);
      }
    }
  }

  walk(ast);

  return Object.fromEntries(
    Object.entries(graph).map(([k, v]) => [k, [...v]])
  );
}