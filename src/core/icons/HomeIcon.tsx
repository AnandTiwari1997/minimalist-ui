import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minHomeSolid } from "@minimalist-ui/core/icons/solid/HomeIconSolid";
import { minHomeOutline } from "@minimalist-ui/core/icons/outline/HomeIconOutline";

export const minHome = createIcon({
  displayName: "Home",
  viewBox: "0 0 24 24",
  paths: {
    solid: minHomeSolid.paths.solid,
    outline: minHomeOutline.paths.outline,
  },
});

export const HomeIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minHome} {...props} />
);
