# commit-a-day
## Commit Streak Keeper for Github

A TypeScript script that commits automatically to GitHub every day to keep your contributions streak alive.

### Features

* Commits automatically every day at midnight
* Customizable commit message
* Easy to set up and use

### Installation

1. Clone this repository to your local machine.
2. Install the `npm` dependencies: `npm install`.
3. Create a new GitHub Actions workflow file and name it `.github/workflows/commit-daily.yml`.
4. Add the following code to the file:

```yaml
name: Commit daily

on:
  schedule:
    - cron: "0 0 * * *"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - run: npm install

      - run: npx ts-node commit-daily.ts


5. Save the file and close it.
6. Push your changes to GitHub.

### Usage

Once you have installed and configured the Commit Streak Keeper, you can start using it by running the following command:


npx ts-node commit-daily.ts


This will commit a small change to your repository and push it to GitHub. You can repeat this command as often as you like, but it is recommended to run it once a day to keep your contributions streak alive.

### Customization

You can customize the commit message by setting the `commitMessage` variable in the `commit-daily.ts` script. For example, you could change the message to:

typescript
const commitMessage = `Automated commit on ${new Date().toLocaleDateString()} - My custom message`;