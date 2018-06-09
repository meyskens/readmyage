#!/bin/bash
if [ "$TRAVIS_BRANCH" != "master" ] || [ "$TRAVIS_PULL_REQUEST" == "true" ]; then exit 0; fi
cp ../patch/build.gradle ./platforms/android/build.gradle
git clone https://$CI_USER_TOKEN@github.com/meyskens/playstore-key.git
ionic cordova build android --release
cordova build android --release -- --keystore=./playstore-key/my-release-key.keystore --storePassword=$KEYSTORE_PASS --alias=alias_name --password=$KEYSTORE_PASS
fastlane betaandroid