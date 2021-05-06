import carsData from "../data/cars.json";

// gotta type cast due to https://github.com/remix-run/remix/blob/f1d6557511368c8832439235dc9a235ac7d95127/packages/remix-node/assetImportTypes.ts#L29-L32
type Car = Record<string, string>;

export const cars = (carsData as unknown) as Car[];
