# iOS Native Module

This repo contains a sample of how to build a native module for iOS using Objective-C according to the <a href="https://reactnative.dev/docs/native-modules-ios">documentation</a>

### Instructions to run

- Clone the repo
- Run `yarn` to install dependencies
- `cd ios && pod install` to install pods
- `yarn ios`

### How it works

Two files were created in `ios/ios_module`. One, the header file and the other that exports a module and a function. This module is then imported into the React Native project using the `Native Modules` helper.
