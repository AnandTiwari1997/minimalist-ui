/**
 * A custom React hook that generates CSS class names based on a base class name and configuration options.
 *
 * @param {boolean} includeRoot - Indicates whether the root class should be included in the generated classes (default is true).
 * @returns {Function} A function that takes a base class name and an optional configuration object as arguments, and returns an object containing the generated CSS class names.
 *
 * @example
 * const MyComponent = () => {
 *   const generateClasses = useGenerateClasses();
 *   const classes = generateClasses('my-component', { parts: ['header', 'footer'], variants: { active: true, size: 'large' } });
 *
 *   return <div className={classes.root}>...</div>;
 * }
 */
export function useGenerateClasses(includeRoot: boolean = true) {
    return (
        base: string,
        config: {
            parts?: string[];
            variants?: { [P: string]: string | boolean };
        } = {}
    ): { [p: string]: string } => {
        const classes: { [key: string]: string } = {};

        for (const element of config.parts ?? []) {
            classes[element as string] = `${base}--${String(element)}`;
        }

        for (const key in config.variants) {
            const value = config.variants[key];

            if (value) {
                if (typeof value === 'boolean') {
                    classes[key] = `${base}--${key}`;
                } else {
                    classes[key] = `${base}--${key}-${String(value)}`;
                }
            }
        }

        return includeRoot ? { base: `minimalist-ui`, root: `${base}--root`, ...classes } : { ...classes };
    };
}
