# Official Publishing Guide — Toolbox S.L.

This guide provides step-by-step instructions on how to officially publish the Toolbox S.L. website. Since the codebase consists of clean, high-performance static files (`index.html`, `style.css`, `script.js`, and the `assets/` folder), hosting is extremely reliable, fast, and secure.

Below are the three most professional and recommended hosting routes for the client.

---

## Route 1: GitHub Pages with a Custom Domain (Recommended & Free!)

Since the repository is already hosted on GitHub and configured for GitHub Pages, you can publish it under a professional custom domain (like `www.toolboxsl.es` or `www.toolboxsl.com`) completely free of charge.

### Step 1: Purchase the Domain
If the client has not already done so, they should purchase their domain from a registrar (such as GoDaddy, Namecheap, Hostinger, or Nominalia for Spanish `.es` domains).

### Step 2: Configure Domain DNS Records
Log into the domain registrar's control panel and add the following records under the **DNS Zone Editor**:

1. **A Records** (Point the root domain `@` to GitHub's global servers):
   * Type: `A`, Host/Name: `@`, Value: `185.199.108.153`
   * Type: `A`, Host/Name: `@`, Value: `185.199.109.153`
   * Type: `A`, Host/Name: `@`, Value: `185.199.110.153`
   * Type: `A`, Host/Name: `@`, Value: `185.199.111.153`

2. **CNAME Record** (Redirects the subdomain `www` to their GitHub repository):
   * Type: `CNAME`, Host/Name: `www`, Value: `llSandroZll.github.io` *(Replace with their specific username if different)*

### Step 3: Configure GitHub Settings
1. Go to the GitHub repository online page.
2. Click on the **Settings** tab (the gear icon on top).
3. Select **Pages** from the left sidebar navigation menu.
4. Scroll down to the **Custom domain** section.
5. Enter the client's official domain (e.g. `www.toolboxsl.es`) and click **Save**.
6. Check the **Enforce HTTPS** box (once GitHub verifies the DNS records, which usually takes 5-15 minutes, it will automatically issue a free secure SSL certificate).

---

## Route 2: High-Performance Static Hosting (Vercel or Netlify)

Vercel and Netlify are modern hosting platforms designed specifically for speed. They automatically pull updates whenever you push code to GitHub and offer instant global load times.

### Step 1: Connect Account
1. Go to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) and sign up using the **GitHub** login option.
2. Authorize the platform to access your repository list.

### Step 2: Import Project
1. Click **Add New Project** / **Import Project**.
2. Select the `llSandroZll` repository.
3. Keep the default settings (Build command: *None*, Publish directory: *Root `./`*).
4. Click **Deploy**. Within 10 seconds, the site will be deployed under a temporary URL (e.g. `toolbox-sl.vercel.app`).

### Step 3: Assign Custom Domain
1. In the Vercel or Netlify project dashboard, click **Add Domain** / **Domain Settings**.
2. Enter their purchased custom domain (e.g., `www.toolboxsl.es`).
3. The platform will display a CNAME record value. Log into their domain registrar control panel and add that CNAME record pointing to Vercel/Netlify.
4. SSL certification will be provisioned automatically.

---

## Route 3: Traditional cPanel Web Hosting (FTP / File Manager)

If the client already has traditional shared hosting (such as Hostinger, GoDaddy, or Bluehost) and wants to keep all their corporate pages under that existing hosting plan:

### Step 1: Access cPanel
1. Log into the client's web hosting provider control panel (cPanel or hPanel).
2. Open the **File Manager** tool (or use an FTP client like FileZilla with their FTP login credentials).

### Step 2: Navigate to Web Root
1. Locate the root directory for their domain.
   * On cPanel, this is almost always the `public_html/` folder.
   * On modern panel architectures, it might be named after the domain itself (e.g., `toolboxsl.es/public/`).

### Step 3: Upload Files
1. Drag and drop the following files/folders directly into the public directory:
   * `index.html` *(Must be in the root directory so the browser loads it automatically)*
   * `style.css`
   * `script.js`
   * `assets/` *(Upload the entire folder with all the generated image files inside)*
2. Refresh the domain page to confirm it loads immediately.

---

## 💡 Pro-Tips for Launch

* **SEO Indexing**: Once the site is officially live under the custom domain, register it on [Google Search Console](https://search.google.com/search-console). This will immediately submit the site to Google's indexing bots to make sure Toolbox S.L. shows up on natural keyword searches in Campo de Criptana, Ciudad Real, Ibiza, and Mallorca.
* **Email Setup**: When purchasing their domain, they should set up business emails (like `contacto@toolboxsl.es` or `harvey@toolboxsl.es`) using a service like Google Workspace or the registrar's built-in email hosting to look highly professional.

---

## 🤝 Client Hand-off & Ownership Transfer

Since the codebase is currently hosted in your GitHub account and you will not be maintaining the site after the launch, you need to hand off the project to the client so that they own the code and host it under their own accounts. 

Here are the three best handover strategies depending on the client's technical comfort level:

### Option A: The No-Code ZIP Hand-off (Best for Non-Technical Clients)
If the client is not technical and does not know Git, the absolute easiest way to hand over the site is to send them the static files directly. They can host it on traditional cPanel/hPanel shared hosting (e.g., Hostinger, GoDaddy).

1. **Compress the Files**: In your local directory `c:\Users\zeval\Documents\Web Page Builder`, select the following elements, right-click, and compress them into a single `.zip` file:
   * `index.html`
   * `style.css`
   * `script.js`
   * `assets/` *(The folder containing all 5 generated images)*
2. **Deliver the ZIP**: Email or transfer the `.zip` file to the client.
3. **Client Upload**: The client (or their domain registrar support) can log into their hosting panel, open the **File Manager**, go to their domain's `public_html/` folder, and simply upload and extract the `.zip` file there. The site is instantly live under their domain, and you have zero maintenance overhead.

---

### Option B: Transferring GitHub Repository Ownership (Best for Technical/Git Handoff)
If you want to keep the repository structure and let the client host it using free GitHub Pages or Vercel under their own accounts:

1. **Have the Client Create a GitHub Account**: Ask the client to sign up for a free account at [GitHub](https://github.com/).
2. **Initiate Transfer from Your Account**:
   * Go to your repository page on GitHub.
   * Click on the **Settings** tab (the gear icon on top).
   * Scroll down to the very bottom of the page to the **Danger Zone**.
   * Click on **Transfer ownership**.
   * Enter the client's GitHub username in the **New owner's username** field.
   * Confirm by entering the repository name and clicking **Transfer**.
3. **Client Acceptance**: The client will receive an email invitation to accept the repository. Once they click accept, the repository is moved entirely to their account. They will be the sole owners of the repository, and you will no longer have any ties or maintenance responsibilities.
4. **Hosting Setup**: The client can then follow **Route 1** or **Route 2** in the guide above to connect their domain and hosting under their own GitHub account.

---

### Option C: The Clean Fork (Alternative Hand-off)
If you want to keep a read-only copy of the project in your portfolio repository but let the client own and maintain their own copy:

1. Ask the client to sign up for a free account at [GitHub](https://github.com/).
2. Direct them to your public repository URL.
3. Click the **Fork** button in the top-right corner of your repository page.
4. This copies the exact codebase, history, and assets into a new repository owned completely by the client.
5. They can then link their custom domain to their own fork, and you can delete or archive your repository at any time.

---

## 🛠️ Developer-Maintained Workflows (Future Maintenance Route)

If the client wants you to maintain, update, and manage the site for them in the future, the repository **stays in your GitHub account**. The client will only need to connect their purchased domain to your hosting deployment.

This is the standard workflow for developer maintenance contracts:

### Step 1: Client DNS Setup
Ask the client to log into their domain registrar and add the DNS records pointing to **your** hosting, depending on the platform you chose:
* **For GitHub Pages**: They point their DNS `A` records to GitHub's IPs (`185.199.108.153`, etc.) and their `CNAME` record for `www` to your username: `yourusername.github.io`.
* **For Vercel/Netlify**: In your hosting dashboard, add the client's custom domain to your project. Vercel/Netlify will display the exact DNS target value (e.g. `cname.vercel-dns.com`). Ask the client to add a DNS `CNAME` record pointing `www` to that value.

### Step 2: Map the Domain in Your Dashboard
1. Go to your repository settings on GitHub Pages or your project settings on Vercel/Netlify.
2. In the domain settings, input the client's custom domain (e.g., `www.toolboxsl.es`) and click **Save**.
3. Once the DNS records propagate (usually within 15 minutes), the client's official domain will load the files directly from your repository.

### Step 3: The Seamless Maintenance Workflow
Now that the pipeline is set up, you have complete control over the updates, and the client does not need to touch any code:
1. **Make Edits Locally**: Open the workspace locally, make edits to code, copy new images, or refine copywriting.
2. **Push to GitHub**: Use `git add .`, `git commit -m "Updates"`, and `git push`.
3. **Instant Live Updates**: The deployment platform automatically pulls your commit, builds the static files, and updates the client's live website instantly. 
4. **Client Peace of Mind**: The client has a perfectly working, secure site with zero technical tasks, and you can easily offer them monthly or quarterly maintenance updates under a service contract.
