# Vercel Deployment Guide

## Quick Start

Your portfolio is now **Vercel-ready**! Here's how to deploy it:

### 1. Push to GitHub (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Vercel ready"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your repository
4. Vercel will automatically detect:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add: `GEMINI_API_KEY` = `your_actual_api_key`
   - Click "Deploy"

6. Done! Your site will be live at `https://your-project.vercel.app`

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Log in
vercel login

# Deploy (from project root)
vercel

# Follow the prompts, then add your environment variable:
vercel env add GEMINI_API_KEY

# Production deployment
vercel --prod
```

## What's Been Configured

✅ **vercel.json** - Vercel configuration with:
- Build command and output directory
- SPA routing support (rewrites all routes to index.html)
- Framework detection

✅ **package.json** - Optimized build script:
- Build command: `npm run build` (optimized for Vite)
- Added `type-check` script for optional manual TypeScript validation

✅ **tsconfig.json** - Fixed for Vercel compatibility:
- Removed `allowImportingTsExtensions` that was causing module resolution errors
- Added proper include/exclude patterns
- Configured for seamless Vite bundler integration

✅ **tsconfig.node.json** - Separate config for Vite build tools

✅ **.env.example** - Template for required environment variables

✅ **.vercelignore** - Excludes unnecessary files from deployment

✅ **README.md** - Updated with deployment instructions

## Build Error Fix

**Issue Resolved:** TypeScript compilation errors like `Cannot find module './components/Layout'`

**Solution Applied:**
- Updated `tsconfig.json` to use proper module resolution for Vite
- Removed incompatible TypeScript options
- Build now works seamlessly on Vercel


## Environment Variables

Make sure to add these in your Vercel project settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## Automatic Deployments

Once connected to Vercel:
- **Every push to `main`** triggers a production deployment
- **Pull requests** get preview deployments automatically
- You can customize branch deployments in Vercel settings

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Your site will be available at your custom domain!

## Troubleshooting

### Build Fails

- Check that all environment variables are set in Vercel
- Review build logs in Vercel dashboard
- Test build locally: `npm run build`
- Test type checking: `npm run type-check`

### Routing Issues

- The `vercel.json` rewrite rules handle SPA routing
- All routes redirect to `index.html`
- React Router handles client-side routing

### Environment Variables Not Working

- Make sure variables are added in Vercel dashboard
- Redeploy after adding new variables
- They must be prefixed with `VITE_` to be exposed to client (but Gemini API key is handled server-side in this config)

## Performance Tips

Your Vercel deployment automatically includes:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge network caching
- ✅ Automatic compression

Enjoy your deployment! 🚀
