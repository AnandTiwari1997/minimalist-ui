import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minAlertSolid } from "@minimalist-ui/core/icons/solid/AlertIconSolid";
import { minAlertOutline } from "@minimalist-ui/core/icons/outline/AlertIconOutline";

export const minAlert = createIcon({
  displayName: "Alert",
  viewBox: "0 0 24 24",
  paths: {
    solid: minAlertSolid.paths.solid,
    outline: minAlertOutline.paths.outline,
  },
});

export const AlertIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minAlert} {...props} />
);
