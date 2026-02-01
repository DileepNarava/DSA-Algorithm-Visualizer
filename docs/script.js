/* ===============================
   STATUS HELPER
================================ */

function setStatus(text) {
  const status = document.getElementById("statusText");
  if (status) status.innerText = text;
}

/* ===============================
   STEP DATA (FROM JAVA OUTPUT)
================================ */

const bubbleSteps = [
  {"array":[40,20,60,10,90],"i":0,"j":1},
  {"array":[20,40,60,10,90],"i":0,"j":1},
  {"array":[20,40,60,10,90],"i":1,"j":2},
  {"array":[20,40,60,10,90],"i":2,"j":3},
  {"array":[20,40,10,60,90],"i":2,"j":3},
  {"array":[20,40,10,60,90],"i":3,"j":4},
  {"array":[20,40,10,60,90],"i":0,"j":1},
  {"array":[20,40,10,60,90],"i":1,"j":2},
  {"array":[20,10,40,60,90],"i":1,"j":2},
  {"array":[20,10,40,60,90],"i":2,"j":3},
  {"array":[20,10,40,60,90],"i":0,"j":1},
  {"array":[10,20,40,60,90],"i":0,"j":1},
  {"array":[10,20,40,60,90],"i":1,"j":2},
  {"array":[10,20,40,60,90],"i":0,"j":1}
];

// TEMP (same steps used for demo)
const mergeSteps = bubbleSteps;
const quickSteps = bubbleSteps;
/* ===============================
   SEARCHING STEPS
================================ */

function linearSearchSteps(array, target) {
  const steps = [];
  for (let i = 0; i < array.length; i++) {
    steps.push({
      array: [...array],
      i: i,
      j: -1
    });
    if (array[i] === target) break;
  }
  return steps;
}
function binarySearchSteps(array, target) {
  const steps = [];
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    steps.push({
      array: [...array],
      i: mid,
      j: -1
    });

    if (array[mid] === target) break;
    else if (array[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return steps;
}



/* ===============================
   GLOBAL STATE
================================ */

let speed = 300;
let isRunning = false;

/* ===============================
   SPEED CONTROL
================================ */

document.getElementById("speed").addEventListener("input", (e) => {
  speed = Number(e.target.value);
});

/* ===============================
   DRAW BARS
================================ */

function draw(array, i, j) {
  const container = document.getElementById("array");
  container.innerHTML = "";

  array.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = value * 3 + "px";

    if (index === i || index === j) {
      bar.classList.add("active");
    }

    container.appendChild(bar);
  });
}

/* ===============================
   GENERATE RANDOM ARRAY
================================ */

function generateArray(size = 10) {
  if (isRunning) return;

  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 90) + 10);
  }

  draw(arr, -1, -1);
  setStatus("Array generated");
}

/* ===============================
   RESET
================================ */

function reset() {
  isRunning = false;
  document.getElementById("array").innerHTML = "";
  setStatus("Reset");
}

/* ===============================
   START ANIMATION
================================ */

async function start() {
  if (isRunning) return;

const algo = document.getElementById("algo").value;
let steps = [];

if (algo === "bubble") steps = bubbleSteps;
if (algo === "merge") steps = mergeSteps;
if (algo === "quick") steps = quickSteps;
if (algo === "linear") setStatus("Linear Search running...");
if (algo === "binary") setStatus("Binary Search running...");

  if (algo === "binary") {
  const arr = [10, 20, 40, 60, 90]; // MUST be sorted
  const target = 60;
  steps = binarySearchSteps(arr, target);
}
if (algo === "linear") {
  const arr = [40, 20, 60, 10, 90];
  const target = 10;
  steps = linearSearchSteps(arr, target);
}
if (algo === "bfs") {
  document.getElementById("array").innerHTML = "";
  bfs();
  return;
}
if (algo === "dfs") {
  document.getElementById("array").innerHTML = "";
  dfs();
  return;
}


  isRunning = true;
  setStatus("Sorting...");

  for (let step of steps) {
    draw(step.array, step.i, step.j);
    await new Promise(resolve => setTimeout(resolve, speed));
  }

  isRunning = false;
  setStatus("Completed ✔");
  if (algo === "linear") setStatus("Search completed");
  if (algo === "binary") setStatus("Binary Search completed");
}

/* ===============================
   DARK MODE TOGGLE
================================ */

function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("themeBtn");
  if (!btn) return;

  if (document.body.classList.contains("dark")) {
    btn.innerText = "☀ Light";
    setStatus("Dark mode enabled");
  } else {
    btn.innerText = "🌙 Dark";
    setStatus("Light mode enabled");
  }
}
/* ===============================
   GRAPH BFS
================================ */

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: []
};

function drawGraph(activeNode = null, visited = []) {
  const g = document.getElementById("graph");
  g.innerHTML = "";

  Object.keys(graph).forEach(node => {
    const div = document.createElement("div");
    div.className = "node";
    div.innerText = node;

    if (visited.includes(node)) div.classList.add("visited");
    if (node === activeNode) div.classList.add("active");

    g.appendChild(div);
  });
}

async function bfs() {
  setStatus("BFS running...");
  const visited = [];
  const queue = ["A"];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      drawGraph(node, visited);
      await new Promise(r => setTimeout(r, speed));

      for (let neighbor of graph[node]) {
        queue.push(neighbor);
      }
    }
  }

  setStatus("BFS completed ✔");
}
/* ===============================
   GRAPH DFS
================================ */

async function dfs() {
  setStatus("DFS running...");
  const visited = [];

  async function dfsVisit(node) {
    if (visited.includes(node)) return;

    visited.push(node);
    drawGraph(node, visited);
    await new Promise(r => setTimeout(r, speed));

    for (let neighbor of graph[node]) {
      await dfsVisit(neighbor);
    }
  }

  await dfsVisit("A");
  setStatus("DFS completed ✔");
}


