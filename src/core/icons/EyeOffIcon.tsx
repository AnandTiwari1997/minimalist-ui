import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minEyeOffSolid } from "@minimalist-ui/core/icons/solid/EyeOffIconSolid";
import { minEyeOffOutline } from "@minimalist-ui/core/icons/outline/EyeOffIconOutline";

export const minEyeOff = createIcon({
  displayName: "EyeOff",
  viewBox: "0 0 24 24",
  paths: {
    solid: minEyeOffSolid.paths.solid,
    outline: minEyeOffOutline.paths.outline,
  },
});

export const EyeOffIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minEyeOff} {...props} />
);
