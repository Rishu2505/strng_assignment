import { m } from "../utils/metrics";

export const fonts = {
    regular: "PoppinsRegular",
    medium: "PoppinsMedium",
    semiBold: "PoppinsSemiBold",
    lineHeight: {
        h1: m(42),
        h2: m(34),
        h3: m(28),
        body: m(24),
        small: m(18),
    },
    letterSpacing: {
        tight: -0.5,
        normal: 0,
        wide: 0.5,
    }
};

export const PoppinsMedium = "PoppinsMedium";
export const PoppinsSemiBold = "PoppinsSemiBold";
export const PoppinsRegular = "PoppinsRegular";
