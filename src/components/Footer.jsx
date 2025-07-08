import React, { useState, useEffect } from 'react';

// Main App component to provide context
const App = () => {
  return (
    <div className="bg-[#000319] min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* All your other sections (Home, Experience, Projects, etc.) would go here */}
        <div className="h-screen text-white flex items-center justify-center">
            <p className="text-center text-2xl">Scroll down to see the footer.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};


/**
 * An awesome and simple footer component.
 */
export const Footer = () => {
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState('');
  // State to hold the visitor count
  const [visitorCount, setVisitorCount] = useState(0);

  // This effect runs once on component mount to update the visitor count.
  useEffect(() => {
    // We check if `window` is defined to ensure this code only runs in the browser.
    if (typeof window !== 'undefined') {
      // Retrieve the count from localStorage, or default to 0 if it doesn't exist.
      let count = localStorage.getItem('portfolioVisitorCount') || 0;
      
      // Increment the count
      const newCount = parseInt(count) + 1;
      
      // Save the new count back to localStorage
      localStorage.setItem('portfolioVisitorCount', newCount);
      
      // Update the state to display the new count
      setVisitorCount(newCount);
    }
  }, []); // The empty dependency array [] ensures this effect runs only once.

  // This effect manages the live clock.
  useEffect(() => {
    // Function to get and format the time for Sylhet, Bangladesh (UTC+6)
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Dhaka', // Represents Bangladesh Standard Time
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime(); // Set time immediately on mount
    const timerId = setInterval(updateTime, 1000); // Update time every second

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <footer className="bg-[#000319] text-gray-400 py-8 px-4 sm:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Copyright and Location Info */}
        <div className="text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Ahmad Akil. All Rights Reserved.</p>
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-2 text-sm">
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Sylhet, Bangladesh</span>
                <span className="text-cyan-400 font-mono">{currentTime}</span>
            </div>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                <span>{visitorCount.toLocaleString()} Views</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-cyan-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-cyan-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.kaggle.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Kaggle Profile" className="hover:text-[#20BEFF] transition-colors duration-300">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><title>Kaggle</title><path d="M14.82,12l4.24-4.24L17.66,6.34,13.41,10.59,12,12l1.41,1.41,4.24,4.24,1.41-1.41L14.82,12ZM9.18,12,5,7.76,6.34,6.34,10.59,10.59,12,12,10.59,13.41,6.34,17.66,5,16.24,9.18,12Z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default App;
