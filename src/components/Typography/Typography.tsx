import React, { memo } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from '@/src/hooks/useTheme';
import { getVariantStyle } from './styles';
import { fonts } from '@/src/theme/fonts';

export interface TypographyProps extends TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption';
    color?: string;
    fontWeight?: 'normal' | 'bold' | '600' | '500';
    align?: 'left' | 'center' | 'right';
}

const Typography: React.FC<TypographyProps> = memo(({
    variant = 'body',
    color,
    fontWeight,
    align = 'left',
    style,
    children,
    ...props
}) => {
    const theme = useTheme();
    const finalColor = color || theme.text;
    const variantStyle = getVariantStyle(variant, theme) as TextStyle;

    const lineHeightMap: Record<string, number> = {
        h1: fonts.lineHeight.h1,
        h2: fonts.lineHeight.h2,
        h3: fonts.lineHeight.h3,
        body: fonts.lineHeight.body,
        bodySmall: fonts.lineHeight.small,
        caption: fonts.lineHeight.small,
    };

    const finalLineHeight = lineHeightMap[variant] || variantStyle.lineHeight;

    return (
        <Text
            style={[
                variantStyle,
                {
                    color: finalColor,
                    textAlign: align,
                    lineHeight: finalLineHeight,
                    letterSpacing: fonts.letterSpacing.normal,
                },
                fontWeight ? { fontWeight } : {},
                style,
            ]}
            {...props}
        >
            {children}
        </Text>
    );
});

export default Typography;
