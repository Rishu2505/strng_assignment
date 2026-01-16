import { truncateWithEllipsis } from '../text';

describe('truncateWithEllipsis', () => {
    it('should truncate text longer than maxLength', () => {
        const text = 'This is a long sentence that should be truncated.';
        const result = truncateWithEllipsis(text, 10);
        expect(result).toBe('This is a ...');
    });

    it('should return original text if shorter than maxLength', () => {
        const text = 'Short';
        const result = truncateWithEllipsis(text, 10);
        expect(result).toBe('Short');
    });

    it('should return empty string for null or empty input', () => {
        expect(truncateWithEllipsis('', 10)).toBe('');
        expect(truncateWithEllipsis(null, 10)).toBe('');
        expect(truncateWithEllipsis(undefined, 10)).toBe('');
    });
});
