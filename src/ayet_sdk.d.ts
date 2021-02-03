export = AyetSDK;

declare namespace AyetSDK {


  class AyetSDK {
    init(string: externalIdentifier, callback: userBalance): void 

    getAvailableBalance(callback: getAvailableSdkBalance): void 

    isInitialized(callback: wasSDKInitialised): void 

    showOfferwall(string: adslotName): void 

    getNativeOffers(string: adslotName, callback: getNativeOffersList): void 

    activateOffer(string: offerId, callback: wasOfferActivated): void 
  }
}
