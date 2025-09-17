import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minUserSolid } from "@minimalist-ui/core/icons/solid/UserIconSolid";
import { minUserOutline } from "@minimalist-ui/core/icons/outline/UserIconOutline";

export const minUser = createIcon({
  displayName: "User",
  viewBox: "0 0 24 24",
  paths: {
    solid: minUserSolid.paths.solid,
    outline: minUserOutline.paths.outline,
  },
});

export const UserIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minUser} {...props} />
);
