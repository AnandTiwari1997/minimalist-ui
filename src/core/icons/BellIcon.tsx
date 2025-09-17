import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minBellSolid } from "@minimalist-ui/core/icons/solid/BellIconSolid";
import { minBellOutline } from "@minimalist-ui/core/icons/outline/BellIconOutline";

export const minBell = createIcon({
  displayName: "Bell",
  viewBox: "0 0 24 24",
  paths: {
    solid: minBellSolid.paths.solid,
    outline: minBellOutline.paths.outline,
  },
});

export const BellIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBell} {...props} />
);
