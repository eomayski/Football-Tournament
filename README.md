# Football Tournament Visualization App

This is a web application developed with React that allows processing and visualization of football tournament data. The application processes information from CSV files and provides beautifully structured information for tournament brackets, matches, teams and players.

## 🌍 Live Demo

The application is deployed on GitHub Pages and can be accessed here:
👉 **[https://eomayski.github.io/Football-Tournament/](https://eomayski.github.io/Football-Tournament/)**

## ⭐ Key Features

### 📥 Data Management

![](https://github.com/user-attachments/assets/203e89cc-8b0c-4a5b-be85-8350a690f053)

-   **CSV File Upload:** Users upload tournament data from CSV files (Matches, Players, Records, and Teams).
-   **Optimized Data Parsing:** The application parses CSV files and converts them into objects where the key is the record `ID` and the value is the corresponding data. This structure provides O(1) access time for optimized performance.
-   **Persistent Storage:** Data is automatically saved to localStorage using Redux Persist and the tournament information persists across sessions.
-   **Data Validation:** The application validates that all files are uploaded before processing.

### 🏆 Tournament Visualization

![](https://github.com/user-attachments/assets/df94683a-f952-4996-9b7c-4e9afd0f813a)

-   **Dynamic Bracket Generation:** Automatically generates and visualizes the tournament bracket structure.
-   **Multi-Stage Support:** Displays tournament stages from Round of 32, Round of 16, Quarter-Finals, Semi-Finals, to the Final.
-   **Third Place Match:** Supports optional third-place playoff matches.
-   **Match Linking:** Automatically links matches and determines connections based on next round matches.

![](https://github.com/user-attachments/assets/5b8cea3b-30e1-4556-bcea-c4d2479a3a41)

### ⚽ Match Details

![](https://github.com/user-attachments/assets/424c3b5d-daa1-45c1-8c34-c87641cdffd3)

-   **Detailed Match Views:** View comprehensive match information including teams, lineups, and final scores.
-   **Player Formations:** Visualize team formations and player positions for each match.
-   **Player Substitutions:** Track all player substitutions throughout the match with visualization of who replaced whom.
-   **Red Cards:** Display player departures due to red cards, showing that the players were sent off.

### 🔍 Team Details

![](https://github.com/user-attachments/assets/7d8f73bc-9479-42a8-8955-a10962f7d98b)

-   **Team Search:** Advanced search functionality to quickly find teams in the tournament.
-   **Search Optimization:** Debounced search for smooth and responsive filtering.
-   **Team Information:** Shows team name, country flag, and manager name.
-   **Team Lineup:** Complete roster visualization with player numbers, full names and playing positions.

![](https://github.com/user-attachments/assets/00c01357-bd6e-4dd6-953f-5ab9f367cbe4)


### 🎨 User Interface
-   **Responsive Design:** Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
-   **Intuitive Navigation:** Clean navigation with route-based page navigation using React Router.
-   **Toast Notifications:** Real-time feedback with informative notifications using React Toastify.
-   **Modern Styling:** CSS Modules for component-level styling and design consistency.

## 🛠️ Technologies Used

The project is built using the following technologies and libraries:

-   **[React](https://react.dev/)** - JavaScript library for building the user interface.
-   **[Vite](https://vitejs.dev/)** - Fast build tool.
-   **[Redux Toolkit](https://redux-toolkit.js.org/)** - Application state management.
-   **[Redux Persist](https://github.com/rt2zz/redux-persist)** - Persisting data in localStorage.
-   **[React Router](https://reactrouter.com/)** - Routing and navigation.
-   **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Displaying notifications to the user.
-   **CSS Modules** - Component styling.

## 🚀 Installation and Setup

To start the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/eomayski/Football-Tournament.git
    cd Football-Tournament
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open your browser at `http://localhost:5173` (or another port provided by Vite).

## 📝 Data Format

The application expects 4 CSV files with specific column headers. The key identification column is `ID`.

1.  **matches.csv**: Information about played matches.
2.  **players.csv**: List of players.
3.  **records.csv**: Players records.
4.  **teams.csv**: Information about teams.

Ensure files are correctly formatted before uploading.
Ready assets are provided in /publick/assets directory.

## 📂 Project Structure
```
src/
├── public/          # Static assets
├── components/      # React components
│   ├── Matches/     # Match-related components (Bracket, Details)
│   ├── Teams/       # Team and search components
│   ├── NotFound/    # 404 Error page
│   └── ...          # Shared components (Header, Footer, FileUploader)
├── hooks/           # Custom React hooks (useDebounce)
├── store/           # Redux slices and store configuration
├── utils/           # Helper functions (CSV parsing, tournament logic)
├── App.jsx          # Main component and routing
└── main.jsx         # Application entry point
```

## 🙏 Acknowledgments

Thank you again **Sirma Academy** for this exciting challenge and opportunity to develop this application for Football Tournament visualization.
