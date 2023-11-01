This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Introduction
This is a project for a developer test on React Native from seconds.

### Features
1. Image selection is initially inactive until "Select Multiple" is clicked, and the "Next" button remains inactive.
2. Once "Select Multiple" is clicked, you can now select images by clicking on them, and a circle appears in the top right corner.
3. When an image is selected, a number appears in the center of the circle, indicating the order in which the image was chosen.
4. When an image is selected, the "Next" button becomes disabled.
5. If an image is deselected, the number is removed, but the order remains intact.
6. The images you've selected are displayed at the bottom of the screen.
7. You can remove or deselect selected images using a button attached to them at the bottom.
   
### Technologies Used
1. React Native
2. JavaScript
3. StyleSheet in React Native for styling

# Getting Started
First, you'll need to clone the application.
You can run the line below in your terminal
```bash
git clone "https://github.com/TomisinAjayi/SecondsApp.git"
```

Then move into the folder:
```bash
cd secondsApp
```

## Step 2: Install the Application

You will need to install **Metro**, the libraries.

To install Metro, run the following command from the _root_ of your React Native project:

```bash
yarn install
```

## Step 2: Start the Metro Server

You will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android 
```

### For iOS
Before starting ios, do this:
```bash
cd ios
pod install
cd ..
```

Then you can run this, ensure you're in the root of the folder
```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run your React Native App. :partying_face:

