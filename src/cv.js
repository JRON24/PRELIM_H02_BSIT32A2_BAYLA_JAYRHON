import React, { useState } from "react";
import "./styles.css"; // Assuming you still want to keep the styles

const CV = () => {
  const [hobbies, setHobbies] = useState([]);

  const showDialog = () => {
    alert("Form submitted successfully!");
  };

  const showHobbies = () => {
    setHobbies(["Video Games", "Basketball", "Music"]);
  };

  return (
    <div>
      <header>
        <h1>Jayrhon M. Bayla</h1>
        <h5>BSIT-32A2</h5>
        <p>College | Academic Interests</p>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h2>Welcome to My CV!</h2>
        <p>
          I am a passionate student interested in the BSIT course. Here, you
          will find information about my education, skills, and extracurricular
          activities.
        </p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <div>
          <h3>Education</h3>
          <ul>
            <li>Elementary - Maranatha Christian Academy</li>
            <li>High School - Mountaintop Christian Academy</li>
            <li>Senior High School - Lyceum of Alabang</li>
            <li>College - Lyceum of Alabang</li>
          </ul>
        </div>
        <br />
        <div>
          <h3>School Activities & Achievements</h3>
          <ul>
            <li>Mobile Legends Champion</li>
            <li>CCS Basketball Champion</li>
            <li>High Honors</li>
          </ul>
        </div>
        <br />
        <div>
          <h3>Skills</h3>
          <ul>
            <li>Web Development</li>
            <li>Software Development</li>
            <li>Game Development</li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="button" onClick={showDialog}>
            Submit
          </button>
        </form>

        <button id="hobbiesBtn" onClick={showHobbies}>
          See My Hobbies
        </button>
        {hobbies.length > 0 && (
          <div>
            <h3>My Hobbies:</h3>
            <ul>
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <footer>
        <p>&copy; 2025 Jayrhon M. Bayla | All Rights Reserved</p>
        <p>
          <a href="#home">Home</a> |<a href="#about">About</a> |
          <a href="#contact">Contact</a>
        </p>
      </footer>
    </div>
  );
};

export default CV;
