import { exec } from 'child_process';

const REPO_URL = "https://github.com/Shanmukha-Vardhan/Bhanu-sri-harsha.git";
const INTERVAL_MS = 30 * 1000; // 30 seconds

// Helper function to run shell commands
function runCommand(command) {
    return new Promise((resolve) => {
        exec(command, (error, stdout, stderr) => {
            // We resolve with the output, ignoring errors to keep the loop running
            resolve({ error, stdout, stderr });
        });
    });
}

async function syncRepository() {
    const timestamp = new Date().toLocaleString();
    console.log(`\n[${timestamp}] Starting sync cycle...`);

    try {
        // 1. "Search for" / pull remote changes first to avoid conflicts
        console.log('Pulling latest changes from remote...');
        await runCommand(`git pull ${REPO_URL} main`); // Change 'main' if using a different default branch

        // 2. "Commit every line of code" - Add all local changes
        await runCommand('git add .');

        // 3. Create a commit (this will fail silently if there are no changes to commit)
        const commitResult = await runCommand(`git commit -m "Auto-commit: ${timestamp}"`);

        if (!commitResult.error) {
            console.log('New changes committed. Pushing to remote...');
            // 4. Push changes to the repository
            await runCommand(`git push ${REPO_URL}`);
            console.log('✅ Successfully pushed changes.');
        } else {
            console.log('No local changes to commit.');
        }
    } catch (err) {
        console.error('An unexpected error occurred during sync:', err);
    }
}

// Start the first sync immediately
syncRepository();

// Run the sync function every 30 seconds
setInterval(syncRepository, INTERVAL_MS);

console.log(`Auto-sync script started. It will commit and sync with ${REPO_URL} every 30 seconds.`);
console.log('Press Ctrl+C to stop.');
