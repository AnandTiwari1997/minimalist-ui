import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minChevronDownSolid = createIcon({
  displayName: "ChevronDownSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M6 10 L12 16 L18 10 L15 10 L12 13 L9 10 Z" fill="currentColor" />
    ),
  },
});

export const ChevronDownIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronDownSolid} {...props} />
);
