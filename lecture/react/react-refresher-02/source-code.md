## Counter App


```jsx
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
    </div>
  )
}

export default App

```

## UseEffect

```jsx
import React, { useState , useEffect } from "react";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [count , setCount] = useState(0);
  const onToggleTheme = () => {
    setDarkMode(!darkMode);
  
  };

  // // *1. Without dep array []
  // useEffect(()=>{
  //   // heavy billions cal
  // })

  // *2 with empty dep
  // useEffect(()=>{
  //   console.log("Hello from useEffect")
  // },[])

  useEffect(()=>{
    console.log("Hello from useEffect")
  },[count , darkMode])
    <div
      style={{
        height: "100vh",
        backgroundColor: darkMode ? "#121212" : "#ffff",
        color: darkMode ? "#ffffff" : "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>Mode {darkMode ? "Change to light" : "Change to Dark"}</h1>
      <button onClick={onToggleTheme}>Toggle Theme</button>

      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>

    </div>
  );
};

export default App;

```

## A mini github profile project

### App.jsx
```jsx
import React, { useState, useEffect } from "react";
import GitHubProfile from "./GitHubProfile";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.github.com/users/aestheticsuraj234",
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return <GitHubProfile data={data} isLoading={isLoading} />;
};

export default App;
```

### GithubProfile.css
```css
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0a0e27;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.profile-card {
  background: #111827;
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  border: 1px solid #1f2937;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.profile-card:hover {
  border-color: #fbbf24;
  box-shadow: 0 20px 60px rgba(251, 191, 36, 0.1);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fbbf24;
  margin-bottom: 24px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
}

.name {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.username {
  font-size: 14px;
  color: #fbbf24;
  font-weight: 500;
  margin: 0 0 16px 0;
  text-decoration: none;
}

.bio {
  font-size: 14px;
  color: #d1d5db;
  margin: 16px 0;
  line-height: 1.5;
}

.stats {
  display: flex;
  justify-content: space-around;
  gap: 16px;
  margin: 32px 0;
  padding: 24px 0;
  border-top: 1px solid #1f2937;
  border-bottom: 1px solid #1f2937;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #fbbf24;
}

.stat-label {
  font-size: 12px;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.location {
  font-size: 13px;
  color: #d1d5db;
  margin: 16px 0 24px 0;
}

.github-btn {
  display: inline-block;
  background: #fbbf24;
  color: #0a0e27;
  padding: 12px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  border: 2px solid #fbbf24;
  cursor: pointer;
}

.github-btn:hover {
  background: transparent;
  color: #fbbf24;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.2);
}

.skeleton {
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, #1f2937 25%, #2d3748 50%, #1f2937 75%);
  background-size: 200% 100%;
  border-radius: 12px;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 480px) {
  .profile-card {
    padding: 30px 20px;
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .name {
    font-size: 20px;
  }

  .stats {
    gap: 12px;
    padding: 20px 0;
  }
}
```

### GithubProfile.jsx
```jsx
import React from 'react'
import './GitHubProfile.css'

const GitHubProfile = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="profile-container">
        <div className="skeleton"></div>
      </div>
    )
  }

  if (!data) {
    return <div className="profile-container">No data available</div>
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={data.avatar_url} alt={data.name} className="avatar" />
        
        <h1 className="name">{data.name}</h1>
        <p className="username">@{data.login}</p>
        
        {data.bio && <p className="bio">{data.bio}</p>}
        
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{data.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">{data.following}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat">
            <span className="stat-value">{data.public_repos}</span>
            <span className="stat-label">Repos</span>
          </div>
        </div>

        {data.location && (
          <p className="location">📍 {data.location}</p>
        )}

        <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="github-btn">
          Visit Profile
        </a>
      </div>
    </div>
  )
}

export default GitHubProfile


// make me a basic github profile section in dark mode with yellow theme make sure to keep the ui as minimal as possible but that looks modern
```

### index.css
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0a0e27;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

html, body, #root {
  height: 100%;
  width: 100%;
}
```