# awsSolArchPro


sudo cordova build android --prod --release
rm *.apk
cp /Users/faeezshaikh/git/awsSolArchPro/platforms/android/build/outputs/apk/android-release-unsigned.apk .
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore awsArch-key.keystore android-release-unsigned.apk awsArch-
/Users/faeezshaikh/Library/Android/sdk/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk AWS-Certified-Pro-Arch.apk

OR
/Users/faeezshaikh/Library/Android/sdk/build-tools/27.0.0/zipalign -v 4 android-release-unsigned.apk AWS-Certified-Pro-Arch.apk


For iOS Release:
https://ionicframework.com/docs/v1/guide/publishing.html
For Signing certs error (Udemy vid) & 
https://stackoverflow.com/questions/37806538/code-signing-is-required-for-product-type-application-in-sdk-ios-10-0-stic#answer-39498874



Troubleshooting:
===============
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb kill-server
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb start-server
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb devices


Known Issues:
0. Change icon. too think text
1. Reset Password , enter invalid email..nothing happened (Get 400 Bad Request) - Reset Password when tested with invalid or unpresent email does a 400 bad request with no response to user on UI.
2. Error Msg on Registration (blank Emails)..very ugly msg..But dont change since its dynamic
3. . Update links in Social sharing -? 
4. Randomize Questions and within questions randomize options


bug: Timer up causes page to crash when scrollToTop fails on menu list home page.
Bug: going back to list while timer is running will elapse timer on the lists page


Ionic serve not starting
=========================
npm install @ionic/app-scripts@1.1.4
npm run ionic:serve





## Social Login buttons:
https://codepen.io/matchboxhero/pen/VYNejG



Nice to have:
1. Ionic Cloud - Push Notification
3. Slides on login to walk through

Cross-promotion (in-house ads)
chat with author
Chat with other users
Comment on a question




FB Mobile App Ads:
https://developers.facebook.com/videos/f8-2016/driving-growth-with-mobile-app-ads/


## Error:

[app-scripts] /Users/faeezshaikh/git/awsCloudPract/node_modules/source-map/lib/source-node.js:115
[app-scripts]         node.add(nextLine.substr(0, mapping.generatedColumn));
[app-scripts]                           ^
[app-scripts]
[app-scripts] TypeError: Cannot read property 'substr' of undefined


## Resolution:
https://stackoverflow.com/questions/41907409/typeerror-cannot-read-property-substr-of-undefined-source-node-js/41923610

=======


3. Your results for the examination are reported as a scaled score from 100 through 1000, with a minimum passing score of 700.
5. Content
    Exam1.js has first 10 questions from Exam sample.


 Done:
 ----
1. bug : not all exams appearing sometimes.. splice not working
 1. Social login - Css styling buttong
 2. Multiple-choice: Has one correct response and three incorrect responses (distractors).
   Multiple-response: Has two correct responses out of five options.    
4. Videos