export function detectDeadCode(ast) {
  const used = new Set();
  const declared = new Set();

  function walk(node) {
    if (!node || typeof node !== "object") return;

    if (node.type === "FunctionDeclaration") {
      declared.add(node.id?.name);
    }

    if (node.type === "VariableDeclarator") {
      declared.add(node.id?.name);
    }

    if (node.type === "Identifier") {
      used.add(node.name);
    }

    for (const key in node) {
      const child = node[key];

      if (Array.isArray(child)) {
        child.forEach(walk);
      } else {
        walk(child);
      }
    }
  }

  walk(ast);

  return [...declared].filter((name) => !used.has(name));
}