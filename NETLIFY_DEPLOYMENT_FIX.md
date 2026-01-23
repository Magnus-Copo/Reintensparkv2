# Netlify Deployment Fix Instructions

## Problem Identified
The Netlify site has **Base directory** set to `reinternspark-site` in the UI, but since your Git repository root IS `reinternspark-site`, this creates a duplicate path: `reinternspark-site/reinternspark-site` which doesn't exist.

## Solution - Fix Netlify Site Settings

### Step 1: Clear Base Directory in Netlify UI
1. Go to https://app.netlify.com/sites/reinternspark/configuration/deploys
2. Scroll to **Build settings**
3. Find **Base directory** field
4. **CLEAR IT** (leave it empty) or set it to `/`
5. Click **Save**

### Step 2: Verify Other Settings
Ensure these settings are correct:
- **Build command**: `npm ci && npm run build`
- **Publish directory**: `.next`
- **Base directory**: (empty or `/`)

### Step 3: Trigger Deploy
After saving the settings:
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**
3. Monitor the build log

## Expected Build Log Output
```
Build command from netlify.toml:
$ npm ci && npm run build

Installing dependencies...
Building Next.js application...
✓ Compiled successfully

Publishing directory: .next
Deploy succeeded!
```

## Alternative: Git-Based Auto-Deploy
Since your code is already pushed to `main` branch:
1. Fix the Base directory setting as described above
2. Netlify will automatically deploy on every push to `main`
3. The `netlify.toml` in your repo will handle the rest

## Site Information
- **Site Name**: reinternspark
- **Site ID**: 7ef8f1ad-4879-48f3-a583-50732d0d1089
- **URL**: https://reinternspark.netlify.app
- **Repo**: https://github.com/Magnus-Copo/Reintensparkv2

## Files in Repository
- ✅ `netlify.toml` - Proper configuration committed
- ✅ `.next/` - Built and ready locally
- ✅ All dependencies installed
- ✅ Build succeeds locally

## What Was Done
1. ✅ Created proper `netlify.toml` in repository root
2. ✅ Committed and pushed to `main` branch
3. ✅ Built site locally - all 31 routes generated successfully
4. ✅ Verified `.next` output exists with all assets
5. ✅ Linked Netlify CLI to correct site
6. ⚠️ **BLOCKED**: Cannot proceed with CLI deploy due to incorrect Base directory setting in Netlify UI

## Next Steps (You Must Do This)
**Go to Netlify Dashboard and clear the Base directory field**, then trigger a new deploy. The site will deploy successfully.
