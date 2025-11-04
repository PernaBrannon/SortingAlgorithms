# 🔢 Sorting Algorithms Visualizer

A comprehensive implementation of popular sorting algorithms in Java with an interactive web-based visualization.

## 🎮 [Live Demo](https://pernabrannon.github.io/SortingAlgorithms/)

[![Sorting Algorithms Visualization](https://img.shields.io/badge/Demo-Live-brightgreen?style=for-the-badge&logo=github-pages)](https://pernabrannon.github.io/SortingAlgorithms/web-visualization/)

## 📋 Features

### Java Implementation
- ✅ **6 Sorting Algorithms** implemented in pure Java
- ✅ **Clean, readable code** with proper documentation
- ✅ **Comprehensive testing** with random array generation
- ✅ **Console output** showing before/after states

### Web Visualization
- 🎨 **Interactive Canvas Animation** showing real-time sorting process
- ⚡ **Adjustable Speed Control** (Very Slow to Very Fast)
- 📏 **Customizable Array Size** (10-100 elements)
- 🎯 **Algorithm Selection** with live switching
- 📊 **Performance Metrics** including execution time
- 📱 **Responsive Design** works on desktop and mobile
- 🔍 **Complexity Analysis** with color-coded performance indicators

## 🔄 Implemented Algorithms

| Algorithm | Best Case | Average Case | Worst Case | Space Complexity |
|-----------|-----------|--------------|------------|------------------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(1) |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | O(1) |
| **Selection Sort** | O(n²) | O(n²) | O(n²) | O(1) |
| **Shell Sort** | O(n log n) | O(n^1.25) | O(n²) | O(1) |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) |

## 📁 Project Structure

```
SortingAlgorithms/
├── Workspace/
│   └── SortingAlgorithms/
│       ├── bin/                     # Compiled Java classes
│       └── src/
│           └── Sort.java           # Java implementation
├── web-visualization/              # Web-based visualizer
│   ├── css/
│   │   └── styles.css             # Responsive styling
│   ├── js/
│   │   ├── sorting-algorithms.js  # JavaScript port of algorithms
│   │   ├── visualizer.js          # Canvas rendering engine
│   │   ├── app.js                 # Main application controller
│   │   └── complexity-info.js     # Algorithm complexity data
│   └── index.html                 # Main visualization page
├── index.html                     # GitHub Pages landing page
└── README.md                      # This file
```

## 🚀 Quick Start

### Running Java Implementation
```bash
# Navigate to Java source directory
cd Workspace/SortingAlgorithms/src

# Compile the Java file
javac Sort.java

# Run the program
java Sort
```

### Running Web Visualization
1. **Local Development:**
   ```bash
   # Navigate to web-visualization directory
   cd web-visualization
   
   # Serve files using Python
   python -m http.server 8000
   
   # Or use Node.js
   npx http-server
   
   # Open http://localhost:8000 in your browser
   ```

2. **GitHub Pages (Recommended):**
   - Visit the [live demo](https://pernabrannon.github.io/SortingAlgorithms/web-visualization/)
   - No installation required!

## 🎮 How to Use the Visualizer

1. **Select Algorithm:** Choose from the dropdown menu
2. **Adjust Array Size:** Use the slider to set array length (10-100)
3. **Set Speed:** Control animation speed from Very Slow to Very Fast
4. **Generate Array:** Click "Generate New Array" for random data
5. **Start Sorting:** Click "Start Sorting" to begin visualization
6. **Stop Anytime:** Use "Stop" button to halt the process

## 🛠️ Technical Implementation

### Java to JavaScript Conversion
- Maintained identical algorithm logic and structure
- Added visualization hooks for step-by-step animation
- Implemented async/await for smooth animations
- Preserved all original algorithm characteristics

### Visualization Features
- **Canvas Rendering:** HTML5 Canvas for smooth 60fps animations
- **Color Coding:** 
  - 🔵 Blue: Default elements
  - 🟠 Orange: Currently comparing
  - 🔴 Red: Currently swapping
  - 🟢 Green: Sorted elements
- **Responsive Design:** Adapts to different screen sizes
- **Performance Tracking:** Real-time execution time measurement

## 📊 Performance Analysis

The visualizer includes built-in complexity analysis:
- **🟢 Excellent:** O(1), O(log n)
- **🔵 Good:** O(n), O(n log n) 
- **🟠 Fair:** O(n²), O(n^1.25)
- **🔴 Poor:** Higher order complexities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test both Java and web implementations
5. Commit: `git commit -m "Add feature"`
6. Push: `git push origin feature-name`
7. Submit a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **[🎮 Live Demo](https://pernabrannon.github.io/SortingAlgorithms/web-visualization/)**
- **[📱 GitHub Repository](https://github.com/PernaBrannon/SortingAlgorithms)**
- **[📚 Sorting Algorithms Wiki](https://en.wikipedia.org/wiki/Sorting_algorithm)**

## 🙏 Acknowledgments

- Original Java implementation serves as the foundation
- Inspired by computer science education and algorithm visualization tools
- Built with modern web technologies for maximum accessibility

---

**Made with ❤️ for computer science education**