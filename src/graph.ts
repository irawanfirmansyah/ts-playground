/**
 * A* ---> C ---> D*
 *          \
 *           \
 *            --> B ---> E
 *
 *
 *
 */

const map: Record<string, boolean> = {
  A: true,
  B: false,
  C: false,
  D: true,
  E: false,
};

const graph: Record<string, string[]> = {
  A: ["C"],
  B: ["E"],
  C: ["D", "B"],
  D: [],
  E: [],
};

const map1: Record<string, boolean> = {
  A: false,
  B: true,
  C: false,
  D: false,
  E: true,
  F: true,
  G: false,
};

const graph1: Record<string, string[]> = {
  A: ["C", "D"],
  B: ["D"],
  C: [],
  D: [],
  E: ["C"],
  F: [],
  G: ["E"],
};

function checkPackageIsPrivate(
  graph: Record<string, string[]>,
  map: Record<string, boolean>,
  packageName: string
) {
  const deps = graph[packageName];
  if (map[packageName]) return true;

  for (let i = 0; i < deps.length; i++) {
    if (checkPackageIsPrivate(graph, map, deps[i])) {
      return true;
    }
  }

  return false;
}

function checkGraph(
  graph: Record<string, string[]>,
  map: Record<string, boolean>
): string[] {
  const graphNodes = Object.keys(graph);
  const result: string[] = [];

  graphNodes.forEach((p) => {
    if (checkPackageIsPrivate(graph, map, p)) {
      result.push(p);
    }
  });

  return result;
}

function mainGraph() {
  console.log(checkGraph(graph, map));
  console.log(checkGraph(graph1, map1));
}

mainGraph();
