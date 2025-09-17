import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minChevronLeftSolid = createIcon({
  displayName: "ChevronLeftSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M14 6 L8 12 L14 18 L14 15 L11 12 L14 9 Z" fill="currentColor" />
    ),
  },
});

export const ChevronLeftIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronLeftSolid} {...props} />
);
