type LensInfo = {
  focalLength: number;
  aperture: number;
  lensName: string;
};

export interface PhotoMetadata {
  iso: number;
  usedAperture: number;
  shutterSpeed: string;
  time: string;
  lensInfo: LensInfo;
  cameraModel: string;
  bitDepth: number;
  dpi: number;
  resolution: { width: number; height: number };
}

export interface BackEndPhotoMetadata {
  iso: number;
  usedAperture: number;
  shutterSpeed: string;
  time: string;
  lensInfo: {
    focalLength: number;
    aperture: number;
    lensName: string;
  };
  cameraModel: string;
  bitDepth: number;
  dpi: number;
  resolution: {
    width: number;
    height: number;
  };
}
