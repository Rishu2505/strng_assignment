import { m } from "@/src/utils/metrics";
import { PoppinsSemiBold, PoppinsMedium, PoppinsRegular } from '@/src/theme/fonts';

export const getVariantStyle = (variant: string, theme: any) => {
    switch (variant) {
        case 'h1':
            return { fontSize: m(32), fontFamily: PoppinsSemiBold };
        case 'h2':
            return { fontSize: m(24), fontFamily: PoppinsSemiBold };
        case 'h3':
            return { fontSize: m(20), fontFamily: PoppinsMedium };
        case 'body':
            return { fontSize: m(16), fontFamily: PoppinsRegular };
        case 'bodySmall':
            return { fontSize: m(14), fontFamily: PoppinsRegular };
        case 'caption':
            return { fontSize: m(12), color: theme.appDarkGrey, fontFamily: PoppinsSemiBold };
        default:
            return { fontSize: m(16), fontFamily: PoppinsRegular };
    }
};
