<div align="center">
  <img src="https://d1mys92jzce605.cloudfront.net/assets/cmsfiles_4d7238de7f07a45bd3ddbf9cfea8ba5eb6b62bbd.png" width="300" height="50"/>
  <br/>
</div>
<br/>

# AyeT Studios React Native publisher SDK

<br/>

AyeT Studios React Native publisher SDK. This package allows you to implement offerwall in your exsiting react native app in 5 minutes. You can check out [example app](https://github.com/ayetstudios/ayetstudiosreactnativeexample) here.


### Setup 

In your react native project folder call instal npm package 

```sh
$ npm i ayetsdk
```

### How to implementation sdk


Include AyetStudios sdk

```javascript
import {AyetOfferwall}  from 'ayetsdk';
```

Initialize the AyetOfferwall component requires passing userId and 

Option A) passing adslotName and appKey

```javascript
  <AyetOfferwall 
      userId = 'user_id_passed_from_your_system'
      adslotName = 'adslot_name_from_publisher_dashboard'
      appKey = 'app_key_from_placement_page'
      onClose = { onClose } 
      />
```

Option B) passing adslotId

```javascript
  <AyetOfferwall 
      userId = 'user_id_passed_from_your_system'
      adslotId = 'adslot_id_from_adslot_placement_in_publisher_dashboard'
      onClose = { onClose } 
      />
```


Define custom function to handle what happens on offerwall close button click

```javascript
  const onClose = () => {
    // code you want to execute on offerwall close button pressed  
  }
```






