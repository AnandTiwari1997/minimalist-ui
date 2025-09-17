import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minArrowRightSolid = createIcon({
  displayName: "ArrowRightSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: <path d="M20 12 L14 6 V10 H4 V14 H14 V18 Z" fill="currentColor" />,
  },
});

export const ArrowRightIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowRightSolid} {...props} />
);
