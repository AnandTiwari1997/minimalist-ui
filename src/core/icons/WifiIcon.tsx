import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minWifiSolid } from "@minimalist-ui/core/icons/solid/WifiIconSolid";
import { minWifiOutline } from "@minimalist-ui/core/icons/outline/WifiIconOutline";

export const minWifi = createIcon({
  displayName: "Wifi",
  viewBox: "0 0 24 24",
  paths: {
    solid: minWifiSolid.paths.solid,
    outline: minWifiOutline.paths.outline,
  },
});

export const WifiIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minWifi} {...props} />
);
