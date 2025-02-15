import React from "react"; // Import React library
import CV from "./cv"; // Import the CV component
import "./styles.css"; // Import the CSS styles

// App component which renders the CV component
function App() {
  return (
    <div className="App">
      <CV /> {/* Render the CV component */}
    </div>
  );
}

export default App; // Export the App component
