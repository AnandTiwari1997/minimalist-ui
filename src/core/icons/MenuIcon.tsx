import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minMenuSolid } from "@minimalist-ui/core/icons/solid/MenuIconSolid";
import { minMenuOutline } from "@minimalist-ui/core/icons/outline/MenuIconOutline";

export const minMenu = createIcon({
  displayName: "Menu",
  viewBox: "0 0 24 24",
  paths: {
    solid: minMenuSolid.paths.solid,
    outline: minMenuOutline.paths.outline,
  },
});

export const MenuIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMenu} {...props} />
);
