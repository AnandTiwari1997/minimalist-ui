/**
 * Combines multiple class names into a single string, filtering out any undefined values.
 * @param {...(string | undefined)} classes - The class names to be combined.
 * @returns {string} A string containing the combined class names.
 */
export function names(...classes: (string | undefined)[]): string {
    const classesToApply = classes.filter((value) => value !== undefined);
    return classesToApply.join(' ');
}
