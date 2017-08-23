#!/bin/bash
git clone https://$CI_USER_TOKEN@github.com/meyskens/playstore-key.git
cordova build android --release -- --keystore=./playstore-key/my-release-key.keystore --storePassword=$KEYSTORE_PASS --alias=alias_name --password=$KEYSTORE_PASS
fastlane betaandroid