---
title: Setup Android
---

## Automatic Install

Open a command-prompt or terminal and run the following command:

    openfl setup android

If you intend to use an Android emulator, create an AVD with hardware acceleration that targets Android 4.1 or greater. If you are using an Android device, you may need to install drivers before it will be recognized by the Android tools.

## Manual Install

Similar to standard Android native development, you will need the following installed:

 * [Android SDK](http://developer.android.com/sdk/index.html)
 * [Android NDK](http://developer.android.com/tools/sdk/ndk/index.html)
 * [Apache Ant](http://ant.apache.org/bindownload.cgi)
 * [Java JDK](http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase6-419409.html#jdk-6u45-oth-JPR)

After installing the Android SDK, you should install the `Android SDK platform-tools` and `Android API 16` packages from the Android SDK Manager.

OpenFL uses API 16 to support modern Android features, but is still compatible with API 9 devices. You only need to install the newer API package.

Currently, the C++ build tools support Android NDK version r8b, newer versions are not officially supported. In the future, we have plans to update the tools to detect which version of the NDK is installed.

Although there are newer versions of the Java JDK, there are known problems using Java 7 to code-sign Android applications. We recommend that you only use the Java 6 JDK for Android development.

After these tools are installed, OpenFL still needs to know where they are installed. Open a command-prompt or terminal and run the following command:

    openfl setup android

When prompted to automatically download and install each component, type "n" and press enter. At the end, the setup process will ask for each location. When prompted, enter the path to where the Android SDK, NDK and other components are installed.

If you intend to use an Android emulator, create an AVD with hardware acceleration that targets Android 4.1 or greater. You may also need to install drivers for your Android device, before you can deploy to it. Note that x86 emulators and devices are supported.

## Forums

If you encounter any problems when setting up OpenFL for Android, please visit the [forums](http://community.openfl.org/c/help).
