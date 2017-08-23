#!/bin/bash
export FL_PROJECT_SIGNING_FORCE_UPGRADE=true
/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" ./platforms/ios/ReadMyAge/ReadMyAge-Info.plist
fastlane add_plugin update_project_codesigning
fastlane setup
fastlane beta