Steps for adding react-native vector icons

### npm install --save react-native-vector-icons

* Android
* Ios

# Android

In android -> app -> build.gradle

---

add this line apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

---

# IOS

* Open XCode
* In iOS folder open appname.xcodeproj
* Drag the fonts folder from node modules and keep it down the appname in xcodeproj
* Open iOS folder -> app name -> info.plist add whatever icons we need to add
---
	<key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Ionicons.ttf</string>
		<string>Entypo.ttf</string>
	</array>
---
* In XCode click the targets -> appname -> Build phases
* Open Copy Bundle Resources
* remove all the icons