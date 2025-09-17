export function names(...classes: (string | undefined)[]): string {
    const classesToApply = classes.filter((value) => value !== undefined);
    return classesToApply.join(' ');
}
