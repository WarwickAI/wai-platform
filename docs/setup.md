# Setup

Note; the instructions are for setting up in a Linux environment - if you don't have Linux and you're on windows, you can set up WSL in 10 minutes via following this guide up to the 10 minute mark: https://www.youtube.com/watch?v=_fntjriRe48

- Fork the repository
- Install `node js 14+` and `npm 6+`
- Install dependencies: `npm install` or `yarn install`
- Start the server: `npm run start` or `yarn start`

## Amplify

- Install [amplify cli](https://docs.amplify.aws/cli/start/install/#install-the-amplify-cli)
- `amplify configure`

  - eu-west-2
  - create access key for your iam user in aws (https://console.aws.amazon.com/iam)
  - profile name is local and doesn't matter much

- `amplify init`
  - Y to existing env
  - select `dev` env (do not push backend changes directly to `staging` or `main`, see [development](development.md) for more)
  - auth with aws profile - use local profile made earlier

- `git checkout dev`
  - this will make sure you are making changes to the correct environment
