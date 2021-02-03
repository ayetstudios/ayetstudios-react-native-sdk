package com.ayetstudios.reactnative; 

import android.content.Context;
import android.util.Log;
import com.ayetstudios.publishersdk.AyetSdk;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.ayetstudios.publishersdk.VideoAdInterstitial;
import com.ayetstudios.publishersdk.interfaces.ActivateOfferCallback;
import com.ayetstudios.publishersdk.interfaces.DeductUserBalanceCallback;
import com.ayetstudios.publishersdk.interfaces.NativeOffersCallback;
import com.ayetstudios.publishersdk.interfaces.RewardedVideoAsyncCallbackHandler;
import com.ayetstudios.publishersdk.interfaces.RewardedVideoCallbackHandler;
import com.ayetstudios.publishersdk.interfaces.UserBalanceCallback;
import com.ayetstudios.publishersdk.interfaces.VideoAsyncCallbackHandler;
import com.ayetstudios.publishersdk.interfaces.VideoCallbackHandler;
import com.ayetstudios.publishersdk.messages.SdkUserBalance;
import com.ayetstudios.publishersdk.models.NativeOfferList;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

public class AyetSdkModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private static final String TAG  = "AyetSDK";
    
    AyetSdkModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "AyetSDK";
    }

    @ReactMethod
    public void init(String externalIdentifier, final Callback userBalance) {
        AyetSdk.init(getCurrentActivity().getApplication(),externalIdentifier,new UserBalanceCallback() {

            @Override
            public void userBalanceChanged(SdkUserBalance sdkUserBalance) {
                Log.d(TAG, "userBalanceChanged");
            }

            @Override
            public void userBalanceInitialized(SdkUserBalance sdkUserBalance) {
                try{
                    userBalance.invoke(Integer.toString(sdkUserBalance.getAvailableBalance()));
                }catch(Exception e){
                    Log.d(TAG, "userBalance callback returned an error");
                }
            }

            @Override
            public void initializationFailed() {
                Log.d(TAG, "initializationFailed");
            }
        });
    }

    @ReactMethod
    public void getAvailableBalance(Callback getAvailableSdkBalance) {
        getAvailableSdkBalance.invoke(AyetSdk.getAvailableBalance(reactContext));
    }

    @ReactMethod
    public void isInitialized(Callback wasSDKInitialised) {
        wasSDKInitialised.invoke(AyetSdk.isInitialized());
    }

    @ReactMethod
    public void showOfferwall(String adslotName) {
        AyetSdk.showOfferwall(getCurrentActivity().getApplication(), adslotName);
    }

    @ReactMethod
    public void getNativeOffers(String adslotName,final Callback getNativeOffersList) {
        AyetSdk.getNativeOffers(getCurrentActivity().getApplication(), adslotName, new NativeOffersCallback() {
            @Override
            public void onResult(boolean success, NativeOfferList responseMessage) {
                try{
                    getNativeOffersList.invoke(new Gson().toJson( responseMessage.offers ));
                }catch(Exception e){
                    Log.d(TAG, "getNativeOffersList callback returned an error");
                }
            }
        });
    }


    @ReactMethod
    public void activateOffer(String offerId,final Callback wasOfferActivated) {
        AyetSdk.activateOffer(getCurrentActivity(), offerId, new ActivateOfferCallback() {
            @Override
            public void onFailed() {
                try{
                    wasOfferActivated.invoke(true);
                }catch(Exception e){
                    Log.d(TAG, "wasOfferActivated callback returned an error");
                }
            }

            @Override
            public void onSuccess() {
                try{
                    wasOfferActivated.invoke(false);
                }catch(Exception e){
                    Log.d(TAG, "wasOfferActivated callback returned an error");
                }
            }
        });
    }
}