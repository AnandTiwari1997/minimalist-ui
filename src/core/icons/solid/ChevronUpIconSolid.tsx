import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minChevronUpSolid = createIcon({
  displayName: "ChevronUpSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M6 14 L12 8 L18 14 L15 14 L12 11 L9 14 Z" fill="currentColor" />
    ),
  },
});

export const ChevronUpIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronUpSolid} {...props} />
);
