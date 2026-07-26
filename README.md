# My_portfolio
Madhavi_Nadindla Portfolio


# 🌐 My Portfolio

A personal portfolio website built as part of the **Codomax Digital Solutions Internship**.

This project is being developed step by step while learning HTML, CSS, Git, and GitHub. Instead of simply completing the internship tasks, the goal is to understand every concept by building a real portfolio.

---

# 📅 Internship Progress

## Day 2

### Objective
- Learn the basics of Semantic HTML.
- Create a simple HTML page.

### Completed
- Created a basic `index.html`
- Used semantic HTML tags:
  - `<header>`
  - `<nav>`
  - `<main>`
  - `<section>`
  - `<footer>`
- Uploaded the project to GitHub.
- Shared the progress on LinkedIn.

---

## Day 3

### Objective
Create a personal portfolio using semantic HTML.

### Changes Made

The demo content was replaced with my own portfolio information.

Updated sections include:

- Personal Introduction
- Navigation Bar
- About Me
- Skills
- Education
- Contact Form
- Footer

The portfolio was converted from a generic HTML example into a real portfolio template that can be improved throughout the internship.

---

# 📚 What I Learned

## Semantic HTML

Instead of using generic `<div>` elements everywhere, I learned when to use:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`

This makes the webpage more organized, readable, and accessible.

---

## Updating HTML Content

I learned how to replace placeholder content with real portfolio information, including:

- Name
- About Me
- Skills
- Education
- Contact Details

This helped me understand how HTML is used to structure actual websites.

---

# 🖼 Image Handling

Initially I tried using a local file path:

```html
src="C:\Users\...\image.png"
```

I learned that this only works on my own computer.

The correct approach is to store images inside the project folder and reference them using a relative path.

Example:

```html
src="images/profile.png"
```

---

# 🖥 Git & GitHub Learning

This project also helped me understand how Git works.

## Commands Used

### Initialize Git

```bash
git init
```

Creates a local Git repository by generating a hidden `.git` folder.

---

### Check Repository Status

```bash
git status
```

Shows modified, new, and tracked files.

---

### Stage Files

```bash
git add .
```

Stages all project files for the next commit.

---

### Commit Changes

```bash
git commit -m "Day 3: Updated portfolio with semantic HTML"
```

Creates a snapshot of the current project.

---

### Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/MadhuN-400266/My_portfolio.git
```

Links the local repository with the remote GitHub repository.

---

### Pull Existing Repository

```bash
git pull origin main --allow-unrelated-histories
```

Merged my local repository with the existing GitHub repository.

This was necessary because:

- The GitHub repository already existed.
- My local Git repository was initialized separately.

---

### Resolve Merge Conflict

During the pull operation, Git reported a merge conflict because both repositories contained an `index.html`.

I resolved the conflict by keeping the updated portfolio version and committing the merged result.

---

### Push Changes

```bash
git push origin main
```

Uploaded the latest project to GitHub.

---

# 🔄 Git Workflow Learned

For future updates, the workflow is:

```text
Edit Files
      ↓
git status
      ↓
git add .
      ↓
git commit -m "Meaningful commit message"
      ↓
git push origin main
```

---

# 💡 Key Learnings

- Learned Semantic HTML.
- Converted a demo webpage into a personal portfolio.
- Learned the difference between Git and GitHub.
- Connected a local Git repository to an existing GitHub repository.
- Understood remote repositories and merge conflicts.
- Successfully resolved a merge conflict.
- Learned the complete Git workflow for updating projects.

---

# 🚀 Tech Stack

- HTML5
- Git
- GitHub

---

# 📌 Future Improvements

- Add CSS styling
- Responsive design
- JavaScript functionality
- Project showcase
- Resume download
- Dark mode
- Contact form validation

---

# 🎨 Day 4 – Styling My Portfolio with CSS

## 🎯 Objective

Transform the basic HTML portfolio into a modern, visually appealing, and responsive website using CSS.

## ✅ What I Worked On

* Added an external `style.css` file to organize all styling.
* Applied a soft **lavender and sky-blue** color palette for a clean, modern look.
* Improved typography using the **Poppins** Google Font.
* Created a responsive layout for better viewing on different screen sizes.
* Styled the navigation bar with a floating glassmorphism effect.
* Designed the hero section with a two-column layout for text and profile image.
* Added rounded cards, shadows, spacing, and hover effects to improve readability.
* Styled the Skills section with interactive badges.
* Enhanced the Contact form with modern input fields and buttons.
* Added smooth animations, floating background blobs, and subtle transitions to make the website feel more engaging.

## 💡 What I Learned

Today's work showed me that CSS is much more than adding colors to a webpage. It helps create structure, improve readability, guide the user's attention, and make a website feel interactive and enjoyable. Small details like spacing, typography, shadows, and animations have a huge impact on the overall user experience.

## 🚧 Challenges Faced

* Finding a color combination that looked professional while still being creative.
* Balancing animations so they enhanced the design without becoming distracting.
* Making sure the layout remained clean and responsive across different screen sizes.

## 🔧 How I Solved Them

* Chose a consistent color palette instead of mixing random colors.
* Used Flexbox to build a responsive layout.
* Applied hover effects and animations carefully to improve the user experience.
* Organized the CSS into sections to make it easier to maintain and update.

## 🚀 Outcome

By the end of Day 4, my portfolio evolved from a simple HTML page into a modern personal website with a polished design, responsive layout, interactive elements, and a much better user experience.

## 📌 Key Takeaway

> **HTML gives a website its structure, but CSS gives it personality.** Thoughtful design isn't just about making a website look good—it's about creating an experience that users enjoy.

### 🛠️ Technologies Used

* HTML5
* CSS3
* Google Fonts (Poppins)
* Flexbox
* CSS Animations
* Glassmorphism Design
* Git & GitHub



# Day 5 - Responsive Portfolio with Flexbox, CSS Grid & CSS Animations

## Overview

On Day 5, I improved my personal portfolio by making it more responsive and interactive using modern CSS techniques.

Instead of redesigning the website, I enhanced the existing layout to provide a smoother user experience across different screen sizes while adding subtle animations to make the interface more engaging.

---

## What I Learned

- Creating responsive layouts using Flexbox
- Organizing content with CSS Grid
- Writing Media Queries for mobile devices
- Improving user experience with hover effects
- Using CSS Transitions and Keyframe Animations
- Making interfaces feel interactive without JavaScript

---

## Features Added

### Responsive Layout
- Used **Flexbox** for the Hero section
- Responsive navigation layout
- Mobile-friendly layout using **Media Queries**

### CSS Grid
- Improved content organization with Grid where appropriate
- Better spacing and alignment for responsive sections

### Hover Effects
- Sections lift with a smooth shadow effect
- Navigation links display animated underline
- Buttons glow and lift on hover
- Skills animate when hovered
- Education cards become interactive
- Footer links animate smoothly

### Animations
- Floating profile image using CSS Keyframes
- Fade-in animation for page sections
- Smooth transitions across interactive elements

### Better User Experience
- Responsive image scaling
- Improved form input focus effects
- Smooth scrolling navigation
- Glassmorphism UI maintained while adding subtle interactions

---

## CSS Concepts Practiced

- Flexbox
- CSS Grid
- Media Queries
- CSS Transitions
- CSS Transform
- CSS Keyframes
- Hover Effects
- Responsive Design
- Glassmorphism Styling

---

## Technologies Used

- HTML5
- CSS3
- Flexbox
- CSS Grid
- Visual Studio Code
- Git & GitHub

---

## Outcome

My portfolio is now more responsive, visually engaging, and provides a better experience across desktop and mobile devices. This project helped me understand how modern CSS techniques can improve both usability and design without changing the overall structure of a website.

## GitHub Repository

👉 https://github.com/MadhuN-400266/My_portfolio
