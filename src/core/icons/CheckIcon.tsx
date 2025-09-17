import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minCheckSolid } from "@minimalist-ui/core/icons/solid/CheckIconSolid";
import { minCheckOutline } from "@minimalist-ui/core/icons/outline/CheckIconOutline";

export const minCheck = createIcon({
  displayName: "Check",
  viewBox: "0 0 24 24",
  paths: {
    solid: minCheckSolid.paths.solid,
    outline: minCheckOutline.paths.outline,
  },
});

export const CheckIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCheck} {...props} />
);
