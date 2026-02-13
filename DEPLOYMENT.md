# Deploy to GitHub Pages

This Valentine's Day page is ready to deploy to GitHub Pages! Follow these steps:

## Setup Instructions

1. **Create a new GitHub repository** (or use an existing one)

2. **Push this code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Add Valentine's Day page for Isabel"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** in the left sidebar
   - Under **Build and deployment**, set:
     - Source: **GitHub Actions**

4. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - Wait for the deployment workflow to complete
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## That's it!

The GitHub Action will automatically build and deploy your site whenever you push changes to the main branch.

Share the link with Isabel and watch the magic happen!
