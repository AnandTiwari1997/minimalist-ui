import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minBackSolid } from "@minimalist-ui/core/icons/solid/BackIconSolid";
import { minBackOutline } from "@minimalist-ui/core/icons/outline/BackIconOutline";

export const minBack = createIcon({
  displayName: "Back",
  viewBox: "0 0 24 24",
  paths: {
    solid: minBackSolid.paths.solid,
    outline: minBackOutline.paths.outline,
  },
});

export const BackIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBack} {...props} />
);
