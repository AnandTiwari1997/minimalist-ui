import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minArrowUpSolid } from "@minimalist-ui/core/icons/solid/ArrowUpIconSolid";
import { minArrowUpOutline } from "@minimalist-ui/core/icons/outline/ArrowUpIconOutline";

export const minArrowUp = createIcon({
  displayName: "ArrowUp",
  viewBox: "0 0 24 24",
  paths: {
    solid: minArrowUpSolid.paths.solid,
    outline: minArrowUpOutline.paths.outline,
  },
});

export const ArrowUpIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowUp} {...props} />
);
