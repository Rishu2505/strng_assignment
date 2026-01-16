jest.mock('react-native', () => ({
    Dimensions: {
        get: jest.fn().mockReturnValue({ width: 390, height: 844 }),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    },
    Platform: {
        OS: 'ios',
        select: jest.fn((obj) => obj.ios || obj.default),
    },
    StatusBar: {
        currentHeight: 44,
    },
    PixelRatio: {
        roundToNearestPixel: jest.fn((size) => Math.round(size)),
    },
}));

jest.mock('react-native-reanimated', () => ({
    FadeInDown: {
        delay: jest.fn().mockReturnThis(),
        duration: jest.fn().mockReturnThis(),
        springify: jest.fn().mockReturnThis(),
    },
}));
