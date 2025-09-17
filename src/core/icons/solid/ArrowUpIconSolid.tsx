import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minArrowUpSolid = createIcon({
  displayName: "ArrowUpSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: <path d="M12 4 L18 10 H14 V18 H10 V10 H6 Z" fill="currentColor" />,
  },
});

export const ArrowUpIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowUpSolid} {...props} />
);
