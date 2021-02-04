<div align="center">
  <img src="https://d1mys92jzce605.cloudfront.net/assets/cmsfiles_4d7238de7f07a45bd3ddbf9cfea8ba5eb6b62bbd.png" width="300" height="50"/>
  <br/>
</div>
<br/>

# AyeT Studios React Native Sdk

<br/>

AyeT Studios react native sdk package. This package allows you to implement offerwall and native feed offers in your exsiting app in 5 minutes. For now it only works for android apps. You can check out [example app](https://github.com/ayetstudios/ayetstudios-react-native-sdk) here.


Functions available:
- init(string callback): void 
- isInitialized(callback): void 
- getAvailableBalance(callback): void 
- showOfferwall(string): void 
- getNativeOffers(string, callback): void 
- activateOffer(string, callback): void 

### Setup 

In your react native project folder call instal npm package 

```sh
$ npm i ayetsdk
```

Afterwards open your AndroidManifest.xml and add our offerwall activity to your application scope:

```xml
<uses-permission android:name="android.permission.INTERNET" />  <!-- mandatory permission -->

<activity
    android:name="com.ayetstudios.publishersdk.OfferwallActivity"
    android:configChanges="orientation|screenSize">
    <intent-filter android:label="offer">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="offer" android:host="com.ayetstudiosreactnativeexample" /> <!-- replace with your package name -->
    </intent-filter>
</activity>
<activity android:name="com.ayetstudios.publishersdk.VideoActivity" android:configChanges="orientation|screenSize" />	
<meta-data android:name="AYET_APP_KEY" android:value="xxxxxxxxxxxxxxxxxxxxxxxx" /> <!-- replace with your app key -->
```

Also make sure to check your permissions in the AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.INTERNET" />  <!-- mandatory permission -->
```




### How to implementation sdk


Include ayetstudios sdk

```javascript
import AyetSDK from 'ayetsdk';
```

Initialize the SDK 

```javascript
 AyetSDK.init('{user-identifier}',(pointsAvailable) => { //replace user-identifier value with your user id
      setPoints(pointsAvailable);
    });
```

Call offerwall

```javascript
    AyetSDK.showOfferwall("{adslot_name}"); //get adslot name from your publisher dashboard 
```


Call native offers 

```javascript
      AyetSDK.getNativeOffers("{adslot_name}",(nativeFeed)=> { //get adslot name from your publisher dashboard 
        setOffers(nativeFeed)
    });
```


Check available balance 

```javascript
    AyetSDK.getAvailableBalance((balance) => {
    setPoints(balance);
    });                  
```

Activate offer 

```javascript
    AyetSDK.activateOffer(objOffers[0].id,(wasOfferActivated) => {
        if(wasOfferActivated){
            console.log('offer id #'+objOffers[0].id+' succesfully activated ');
        }
    });                  
```