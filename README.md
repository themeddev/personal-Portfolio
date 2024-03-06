### Ahmed's Portfolio V1.2 👨‍💻
Ahmed's Portfolio is a contemporary and customizable personal portfolio web template built using the popular React library. It serves as a platform for developers, designers, and creatives to showcase their skills, projects, and achievements in a professional and visually appealing manner. With a responsive design and clean code, Ahmed's Portfolio can be easily tailored to individual preferences, making it an ideal choice for creating a compelling online portfolio.

<center>
<img src="./public/portfolio.png" alt="Ahmed's Portfolio" />
</center>
Live demo available here

Features
Getting started
Installation and Setup Instructions
Folder structure
Configurations
Google Analytics
Building the React App
FAQ
Contribution
### 📙  Features
### 📖  Multi-Page Layout
Home
About
Projects
Articles
Contact
## 📱 Fully Responsive
## 🛠 Easy Configurations
## 📚 Getting started
Clone down this repository. You will need NodeJS and git installed globally on your machine.

## 🛠 Installation and Setup Instructions
Installation: npm install

Run the project: npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.

## 📁 Folder Structure
/public: publicly accessible contents (e.g., images, media).
/src: all components used in this project.
/src/components/: reusable components for each page.
/src/data: configurations of the web app.
/src/pages: pages included in the web app.
## ⚙️ Configurations
/src/data/user.js: Update content for each page.
/src/data/articles.js: Add your articles to the web application.
/src/data/seo.js: Manage SEO information for different pages.
/src/data/styles.css: Change font colors and font families.
## 📈 Google Analytics
Add your Google Analytics 4 MEASUREMENT ID to /src/data/tracking.js.

## 🚀 Building the React App
To build the React app, use the npm run build command. This creates a production-ready build in the build/ directory.

## 🤔 FAQ
Q1. Subpages can only be accessed through links on the homepage or navigation bar, but those pages are not accessible through direct links.

If using Apache, insert the following into your .htaccess file:

c
Copy code
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteCond %{REQUEST_FILENAME} !-l
        RewriteRule . /index.html [L]
    </IfModule>
    
## 🌱 Contribution

Suggestions for improvements in Ahmed's Portfolio are welcomed. Feel free to leave an issue or fork the project to implement your ideas.