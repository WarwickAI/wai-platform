#!/bin/bash
set -e
IFS='|'

REACTCONFIG="{\
\"SourceDir\":\"src\",\
\"DistributionDir\":\"build\",\
\"BuildCommand\":\"npm run-script build\",\
\"StartCommand\":\"npm run-script start\"\
}"
AWSCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":true,\
\"profileName\":\"default\",\
\"AmplifyAppId\":\"${AWS_APP_ID}\"\
}"
AMPLIFY="{\
\"envName\":\"${AWS_BACKEND_BRANCH}\",\
\"appId\":\"${AWS_APP_ID}\"\
}"
PROVIDERS="{\
\"awscloudformation\":${AWSCONFIG}\
}"
AUTHCONFIG="{\
\"userPoolId\": \"eu-west-2_swavRQzxU\",\
\"webClientId\": \"6p16mvnvtc79sn2rp3s2ajkva1\",\
\"nativeClientId\": \"6p16mvnvtc79sn2rp3s2ajkva1\"\
}"
CATEGORIES="{\
\"auth\":$AUTHCONFIG\
}"
FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react\",\
\"config\":$REACTCONFIG\
}"
PROVIDERS="{\
\"awscloudformation\":$AWSCONFIG\
}"

amplify init \
--amplify $AMPLIFY \
--frontend $FRONTEND \
--providers $PROVIDERS \
--categories $CATEGORIES \
--yes 