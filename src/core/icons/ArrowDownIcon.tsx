import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minArrowDownSolid } from "@minimalist-ui/core/icons/solid/ArrowDownIconSolid";
import { minArrowDownOutline } from "@minimalist-ui/core/icons/outline/ArrowDownIconOutline";

export const minArrowDown = createIcon({
  displayName: "ArrowDown",
  viewBox: "0 0 24 24",
  paths: {
    solid: minArrowDownSolid.paths.solid,
    outline: minArrowDownOutline.paths.outline,
  },
});

export const ArrowDownIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowDown} {...props} />
);
