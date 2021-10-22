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
\"envName\":\"${AWS_APP_ENV}\",\
\"appId\":\"${AWS_APP_ID}\"\
}"
PROVIDERS="{\
\"awscloudformation\":${AWSCONFIG}\
}"
AUTHCONFIG="{\
\"userPoolId\": \"eu-west-2_iAg4gGRdW\",\
\"webClientId\": \"5ddmaprsi4kkrekbdqpp5a7a7p\",\
\"nativeClientId\": \"5ddmaprsi4kkrekbdqpp5a7a7p\"\
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