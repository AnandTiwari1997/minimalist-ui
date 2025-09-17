import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minArrowDownSolid = createIcon({
  displayName: "ArrowDownSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M6 14 L12 20 L18 14 H14 V4 H10 V14 Z" fill="currentColor" />
    ),
  },
});

export const ArrowDownIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowDownSolid} {...props} />
);
