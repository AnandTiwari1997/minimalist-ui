import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minCloseSolid } from "@minimalist-ui/core/icons/solid/CloseIconSolid";
import { minCloseOutline } from "@minimalist-ui/core/icons/outline/CloseIconOutline";

export const minClose = createIcon({
  displayName: "Close",
  viewBox: "0 0 24 24",
  paths: {
    solid: minCloseSolid.paths.solid,
    outline: minCloseOutline.paths.outline,
  },
});

export const CloseIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minClose} {...props} />
);
