export = AyetSDK;

declare namespace AyetSDK {
  class AyetSDK {
    getAid(callback: getPhonesAdvertisingId): void;
  }
}

export interface AyetOfferwallProps {
  userId: string;
  adslotId: string;
  onClose: () => void;
}

export declare const AyetOfferwall: React.SFC<AyetOfferwallProps>;
