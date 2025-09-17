import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minChevronRightSolid = createIcon({
  displayName: "ChevronRightSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M10 6 L16 12 L10 18 L10 15 L13 12 L10 9 Z" fill="currentColor" />
    ),
  },
});

export const ChevronRightIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronRightSolid} {...props} />
);
