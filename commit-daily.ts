import { execSync } from "child_process";

const commitMessage = `Automated commit on ${new Date().toLocaleDateString()}`;

execSync(`git add .`);
execSync(`git commit -m "${commitMessage}"`);
execSync(`git push`);
