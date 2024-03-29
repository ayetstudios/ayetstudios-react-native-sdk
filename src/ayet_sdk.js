import {Platform, SafeAreaView } from "react-native";
import React, { useState, useEffect, Component } from "react";
import { WebView } from "react-native-webview";

class AyetOfferwall extends Component {
 
  render() {
    let gaid = "";
    let offerwallUrl = "";

    let deviceInfo =
      "&sdk=react_native" +
      "&os_version=" +
      Platform.Version +
      "&os=" +
      Platform.OS +
      "&model=" +
      Platform.constants.Model +
      "&make=" +
      Platform.constants.Manufacturer +
      "&type=" +
      (Platform.OS == "default" ? "desktop" : "phone");

      if (Platform.OS == "android" && this.props.gaid) {
        gaid = "&advertising_id=" + this.props.gaid;
      } else if (Platform.OS == "ios" && this.props.idfa) {
        gaid = "&advertising_id=" + this.props.idfa;
      } else {
        console.log("desktop ", Platform.OS);
      }

    if (this.props.adslotId) {
      offerwallUrl =
        "https://www.ayetstudios.com/offers/web_offerwall/" +
        this.props.adslotId +
        "?external_identifier=" +
        this.props.userId +
        deviceInfo +
        gaid;
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{
            uri: offerwallUrl,
          }}
          style={{
            marginTop: 0,
            marginLeft: 0,
            marginRigh: 0,
            marginBottom: 0,
          }}
          onMessage={(event) => {
            if (event.nativeEvent.data === "goBack") {
              this.props.onClose();
            }
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={false}
          scalesPageToFit={true}
        />
      </SafeAreaView>
    );
  }
}

export { AyetOfferwall };
