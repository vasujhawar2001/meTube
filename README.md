# MeTube - YouTube Clone

Live Demo - https://vasujhawar2001.github.io/meTube/

Deployed on gh-pages. :rocket:

MeTube is a responsive web application that allows users to search for and watch YouTube videos, explore different categories, and enjoy a seamless video viewing experience.

## Features
- Search Bar: Easily search for your favorite YouTube videos using the integrated search bar.
- Sidebar Navigation: Navigate through various video categories using the sidebar.
- Responsive Design: MeTube is designed to work smoothly on different devices and screen sizes.
- Video Playback: Enjoy a seamless video playback experience right within the app.
- ContextProvider: State management using ContextProvider for efficient data flow.
- BrowserRouter: Utilizes BrowserRouter for smooth client-side routing.
- Material-UI (MUI): Stylish and responsive UI components for a modern look and feel.

### Usage
Enter keywords into the search bar to find videos related to your query.
Use the sidebar to explore different video categories.
Click on a video thumbnail to watch the video.
Enjoy a smooth and responsive video playback experience.

### Technologies Used
- HTML
- CSS
- Vite
- React
- JavaScript (ES6+)
- Material-UI (MUI)
- YouTube v3 API

# System Design Interview

### Functional Requirements

- Users should be able to upload videos.
- Users should be able to view videos.
- Users should be able to change video quality.
- The system should keep the count of likes, dislikes, comments, and views.

### Non-Functional Requirements

- Video uploading should be fast and users should have a smooth streaming experience.
- The system should be highly available, scalable, and reliable. We can compromise with consistency to offer high availability. It should be fine if a user sees a slight lag in the video data.
- The system should offer low latency and high throughput. 
- The system should be cost-efficient.

[System Design](systemdesign.pdf)