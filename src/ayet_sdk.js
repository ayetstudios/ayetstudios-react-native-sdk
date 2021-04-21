import { NativeModules, Platform } from 'react-native';
import React,{useState,useEffect, Component} from 'react';
import { WebView } from 'react-native-webview';
const { AyetSDK } = NativeModules;


class AyetOfferwall extends Component {

    constructor(props) {
      super(props)
      this.state = {
        gaid: ''
      }
    }
    
     getAdvertisingID(){
      AyetSDK.getAid((advId) => {
        this.setState({
          gaid: advId
        });
      });
    }

    componentDidMount(){
      this.getAdvertisingID();
    }

    render() {
      let gaid = '';
      let offerwallUrl = '';

      let deviceInfo ='&os_version=' + Platform.Version + '&os=' + Platform.OS + '&model=' + Platform.constants.Model + '&make=' +  Platform.constants.Manufacturer + '&type=' + ((Platform.OS == 'default') ? 'desktop' : 'phone');


      if(Platform.OS == 'android'){
        gaid = '&advertising_id='+this.state.gaid;
      }else if(Platform.OS == 'ios' && this.props.idfa){
        gaid = '&advertising_id='+this.props.idfa;
      }else{
        console.log('desktop ',Platform.OS);
      }

      if(this.props.adslotId){
        offerwallUrl = 'http://ayetstudios.com/offers/web_offerwall/' + this.props.adslotId + '?external_identifier='+this.props.userId + deviceInfo + gaid;
      }else if(this.props.adslotName && this.props.appKey){
        offerwallUrl = 'http://ayetstudios.com/offers/web_offerwall/' + this.props.adslotName + '?external_identifier='+this.props.userId + '&app_key=' + this.props.appKey + '&adslot_name=' + this.props.adslotName + deviceInfo + gaid;
      }

      return (
          <WebView
            source={{ 
              uri: offerwallUrl
            }}
            style={{ 
              marginTop: 0,
              marginLeft: 0,
              marginRigh: 0,
              marginBottom: 0
            }}
            onMessage={(event) => {
              if(event.nativeEvent.data === 'goBack'){
                this.props.onClose()
              }
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={false}
            scalesPageToFit={true}
          />
      );
    }
}
  
export { AyetOfferwall };