import { PrimeNGConfig } from "primeng/api";

export function initPrimeNG(
    primengConfig: PrimeNGConfig
) {
    return () => {
        primengConfig.ripple = true;
    }
}