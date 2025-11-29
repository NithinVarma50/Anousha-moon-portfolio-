<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ZtrZIc60UR82GX9BFHHnA-cwDFYRVS64


## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

This project is optimized for Vercel deployment. You have two options:

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/anousha-mohon-portfolio)

### Option 2: Manual Deployment

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Connect your repository to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the Vite framework

3. **Configure Environment Variables**:
   - In your Vercel project settings, go to "Environment Variables"
   - Add `GEMINI_API_KEY` with your API key value
   - This is required for the app to function properly

4. **Deploy**:
   - Click "Deploy"
   - Your app will be live in minutes!

### Build Configuration

The project includes a `vercel.json` configuration file that:
- Specifies the build command (`npm run build`)
- Sets the output directory (`dist`)
- Configures SPA routing rewrites
- Detects the Vite framework automatically

Your builds will automatically include TypeScript type checking to catch errors before deployment.

## Project Structure

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
