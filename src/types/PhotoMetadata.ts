type LensInfo = {
  focalLength: number;
  aperture: number;
  lensName: string;
};

export interface PhotoMetadata {
  iso: number;
  usedAperture: number;
  shutterSpeed: string;
  time: Temporal.Instant;
  lensInfo: LensInfo;
  cameraModel: string;
  bitDepth: number;
  dpi: number;
  resolution: { width: number; height: number };
}
