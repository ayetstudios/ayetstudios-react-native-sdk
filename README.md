<div align="center">
  <img src="https://d1mys92jzce605.cloudfront.net/assets/cmsfiles_4d7238de7f07a45bd3ddbf9cfea8ba5eb6b62bbd.png" width="300" height="50"/>
  <br/>
</div>
<br/>

# ayeT-Studios React Native Publisher SDK

<br/>

This package allows integration a web offerwall in a react native application effortlessly. 
You can check out our [example app](https://github.com/ayetstudios/ayetstudiosreactnativedemo) here.

### Preparations
Before going forward with the implementation, you should create a *web placement* and a *web offerwall adslot* in your publisher account at [ayetstudios.com](https://www.ayetstudios.com).

### Project Setup
First, add & install the `ayetsdk` package to your react native project:
```sh
$ npm i ayetsdk
$ npm i --save react-native-webview
```

For additional platform specific setup steps that might be required, please refer to [react-native webview](https://github.com/react-native-webview/react-native-webview).

### How to integrate the offerwall in your app

```javascript
import { AyetOfferwall } from "ayetsdk";
```

When rendering the `AyetOfferwall` component, a `userId` and an `adslotId` has to be passed.
The `userId` should be a unique, persistent identifier (alphanumeric) for the user. An example might be a unique user id or the hashed email address of the user.
`adslotId` is the id of the `web_offerwall` adslot created in your publisher dashboard at [ayetstudios.com](https://www.ayetstudios.com).

```javascript
<AyetOfferwall
  userId="myuser-23374"
  adslotId="123"
  onClose={onClose}
/>
```

The `onClose` callback function should be implemented according to your requirements.
A common practice is to navigate back in your router when the `onClose` callback is triggered.

```javascript
const onClose = () => {
  // code you want to execute on offerwall close button pressed
};
```
