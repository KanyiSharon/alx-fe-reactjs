{
  "name": "my-company",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.1",  // react-router-dom dependency
    "web-vitals": "^2.1.4"
  },
  "devDependencies": {
    "vite": "^4.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  },
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "test": "react-scripts test"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
