This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started
First, you'll need to clone the application.
You can run the line below in your terminal
```bash
git clone ""
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

