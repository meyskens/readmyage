#!/bin/bash
if [ "$TRAVIS_BRANCH" != "master" ] || [ "$TRAVIS_PULL_REQUEST" == "true" ]; then exit 0; fi
export FL_PROJECT_SIGNING_FORCE_UPGRADE=true
sudo gem install bundler
../scripts/fix-cert.sh
/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" ./platforms/ios/ReadMyAge/ReadMyAge-Info.plist
fastlane add_plugin update_project_codesigning
fastlane setup
fastlane beta