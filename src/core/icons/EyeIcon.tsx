import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minEyeSolid } from "@minimalist-ui/core/icons/solid/EyeIconSolid";
import { minEyeOutline } from "@minimalist-ui/core/icons/outline/EyeIconOutline";

export const minEye = createIcon({
  displayName: "Eye",
  viewBox: "0 0 24 24",
  paths: {
    solid: minEyeSolid.paths.solid,
    outline: minEyeOutline.paths.outline,
  },
});

export const EyeIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minEye} {...props} />
);
