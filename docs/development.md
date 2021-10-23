# Development

This will document guidelines to follow when testing and making changes to this repository.

## Environments

GitHub and Amplify are split up into 3 key environments:

- `dev`: used when you are making major changes to the code, or want to test something out
- `staging`: use this to test your changes in a close to production environment
- `main`: this is the production environment and should only be updated with robust and complete changes

These environments have corresponding branches in the repository as well as Amplify backends.

## Start Coding

Here we will cover the steps to start work on the platform

1. Follow [setup](setup.md) to install and initialise the repository. You will be setup in both the `dev` Git branch and `dev` Amplify backend environment, this is where you should make your changes.
2. Now you can code! If you make any changes to Amplify, running `amplify push` will update the `dev` backend running online allowing you to use it within the app.
3. At this point, to test the app you would need to run it locally. To server the app on Amplify through the `dev` enviornment, commit and push your changes to the `dev` branch on GitHub. The Amplify frontend will then rebuild and you will be able to access the app [here](https://dev.dtq3eg2x08klj.amplifyapp.com/).
4. Now you want to test your changes on the `staging` branch. This is great to get final feedback and to test just before updating the production version. Here's how to do this:
   1. Make sure you have stashed or commited the changes made in the `dev` branch.
   2. In the root of the project, run `amplify env checkout staging` to switch to the `staging` environment.
   3. Run `amplify push` to update the `staging` backend on Amplify with the changes you brought through from `dev`.
   4. Switch to the `staging` git branch with `git checkout staging`.
   5. Commit the changes brought from `dev` to the `staging` branch and push them to GitHub.
   6. Amplify will now rebuild the `staging` frontend and will use the updated backend. You will be able to access the `staging` website [here](https://staging.dtq3eg2x08klj.amplifyapp.com/home).
5. Once you have tested your changes in `staging` and are sure they are ready to be put in production, follow the steps in Step 4 but this time moving from `staging` to `main`.

## Key Points

- Amplify environments work very similar to Git branches and GitHub. Think of the environment as a Git branch, that is pushed to Amplify to be server with `amplify push`.
- If you have updated `staging` with some changes, but decided they need more work in `dev`, make sure to revert `staging` (both the GitHub branch and Amplify backend) back to be consistent with `main`.
- With mutliple features or changes being made to the platform, it might be beneficial to add `dev-...` branches and environments. **If the updates do not involve changing the backend, there's no need to create a new Amplify backend environment**, instead you could just link it to `dev` or even `main`.
- If you create new branches and want to link an Amplify frontend (and maybe backend), name them with the following format `dev-<git_branch_name>`.