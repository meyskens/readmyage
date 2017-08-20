#!/bin/bash

security delete-certificate -c "Apple Worldwide Developer Relations Certification Authority" /Library/Keychains/System.keychain
security delete-certificate -c "Apple Worldwide Developer Relations Certification Authority" /Library/Keychains/login.keychain
curl -O -L http://developer.apple.com/certificationauthority/AppleWWDRCA.cer
security import AppleWWDRCA.cer  -k ~/Library/Keychains/login.keychain -A