This repository was created to reproduce an issue with `react-spring/native` (React Native) when we try to animate `shadowOffset` props (`height` and `width`) on iOS.

## Tech Stack

It uses the following stack:

- `react 16.8.6`
- `react-native 0.59.5`
- `react-spring 9.0.0-beta.3`

But the issue can also be seen using `react-spring 8.0.19`.

## Running the project

After cloning the project install all dependencies.

#### Running the iOS app

`yarn/npm start`

`react-native run-ios`

#### Running the Android app

`yarn/npm start`

`react-native run-android`

## The error

The following error can be seen on iOS only:

![Error image](https://raw.githubusercontent.com/flsilva/react-spring-ios-shadow-issue/master/error-image.jpg)

Everything works as expected on iOS if we just comment out the object that tries to animate `shadowOffset` props (`height` and `width`), or if we apply them statically, i.e., without trying to animate them.
