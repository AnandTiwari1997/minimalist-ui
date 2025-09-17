import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minArrowLeftSolid = createIcon({
  displayName: "ArrowLeftSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: <path d="M4 12 L10 6 V10 H20 V14 H10 V18 Z" fill="currentColor" />,
  },
});

export const ArrowLeftIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowLeftSolid} {...props} />
);
