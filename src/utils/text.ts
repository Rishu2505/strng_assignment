export const truncateWithEllipsis = (
    text?: string | null,
    maxLength: number = 100
): string => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};
