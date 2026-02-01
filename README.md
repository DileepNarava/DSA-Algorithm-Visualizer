🧠 DSA Algorithm Visualizer

A DSA Algorithm Visualizer built using Java + HTML + CSS + JavaScript to visually demonstrate how popular algorithms work step by step.

This project helps learners understand algorithm behavior visually and serves as a strong portfolio & interview project.

🚀 Features

🔵 Bubble Sort visualization

🟣 Merge Sort visualization

🔴 Quick Sort visualization

🎛 Real-time speed control

🔽 Algorithm selection dropdown

🎲 Random array generation

🔄 Reset animation support

📊 Step-by-step visualization using Java-generated states

🧩 Technologies Used

Java – Algorithm implementation & step recording

HTML – UI structure

CSS – Visualization styling

JavaScript – Animation & interaction logic

VS Code – Development environment

🏗️ Project Structure
DSA-Algorithm-Visualizer/
│
├── src/
│   ├── sorting/
│   │   ├── BubbleSort.java
│   │   ├── MergeSort.java
│   │   └── QuickSort.java
│   ├── searching/
│   ├── graphs/
│   ├── utils/
│   │   └── Step.java
│   └── Main.java
│
├── ui/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── docs/
└── README.md

⚙️ How It Works

Algorithms are implemented in Java

Each algorithm records execution steps as:

array state

compared indices (i, j)

Java converts these steps into JSON

JavaScript reads the JSON and animates bars in the browser

UI controls allow:

speed adjustment

algorithm switching

reset & regeneration

▶️ How to Run the Project
1️⃣ Compile Java Code
javac -d src src/utils/*.java src/sorting/*.java src/Main.java

2️⃣ Run Java (Generate Steps)
java -cp src Main


This prints JSON output like:

[
  {"array":[40,20,60,10,90],"i":0,"j":1},
  {"array":[20,40,60,10,90],"i":0,"j":1}
]

3️⃣ Run the Visualizer

Open ui/index.html in VS Code

Right-click → Open with Live Server

Choose algorithm

Adjust speed

Click Start

📈 Algorithms & Complexity
Algorithm	Time Complexity	Space Complexity
Bubble Sort	O(n²)	O(1)
Merge Sort	O(n log n)	O(n)
Quick Sort	O(n log n) avg	O(log n)
🎯 Use Cases

Learning Data Structures & Algorithms

Understanding algorithm behavior visually

Interview preparation

Portfolio showcase project

🔮 Future Enhancements

Searching algorithms (Linear, Binary)

Graph algorithms (BFS, DFS)

Live Java ↔ JavaScript communication

Time & swap counters

Mobile-friendly UI

👨‍💻 Author

Dileep
Built with ❤️ to master DSA and system thinking