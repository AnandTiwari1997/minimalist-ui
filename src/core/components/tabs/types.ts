import type { CommonClasses, CommonParts, ComponentPropsWithCSSPropertiesWithoutRef } from "@minimalist-ui/core/components";

export interface TabPart extends CommonParts {

}

export interface TabClasses extends CommonClasses {

}

export interface TabsPart extends CommonParts {

}

export interface TabsClasses extends CommonClasses {

}

export interface TabProps extends ComponentPropsWithCSSPropertiesWithoutRef<'button'> {
    label?: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
}

export interface TabsProps extends ComponentPropsWithCSSPropertiesWithoutRef<'div'> {
    tabs?: TabProps[];
    activeTab?: string;
    onTabChange?: (value: string) => void;
}