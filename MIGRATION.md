# Migration Guide to New Git Account

Follow these steps to upload this project to a new Git repository on your new account.

## Prerequisites

1. Create a new repository on your GitHub account (do **not** initialize it with a README or License).
2. Copy the new repository URL (e.g., `https://github.com/YOUR_USERNAME/academia-pilot.git`).

## Step-by-Step Migration

Run these commands in your terminal from the project root:

### 1. Remove the old remote
```bash
git remote remove origin
```

### 2. Add your new remote
Replace `URL_OF_YOUR_NEW_REPO` with the URL you copied:
```bash
git remote add origin URL_OF_YOUR_NEW_REPO
```

### 3. Rename branch (if needed)
Ensure you are on the `main` branch:
```bash
git branch -M main
```

### 4. Push to the new account
```bash
git push -u origin main
```

---

## Alternative: Start with a Completely Clean History

If you want to start fresh without any of the old commit history:

1. **Delete the existing .git folder:**
   ```powershell
   Remove-Item -Recurse -Force .git
   ```

2. **Initialize a new repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Link and push to new account:**
   ```bash
   git remote add origin URL_OF_YOUR_NEW_REPO
   git branch -M main
   git push -u origin main
   ```

> [!WARNING]
> Starting with a clean history will erase all previous commit messages and history. Use this only if you want a totally fresh start.
