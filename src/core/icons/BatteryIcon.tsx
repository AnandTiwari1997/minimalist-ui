import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minBatterySolid } from "@minimalist-ui/core/icons/solid/BatteryIconSolid";
import { minBatteryOutline } from "@minimalist-ui/core/icons/outline/BatteryIconOutline";

export const minBattery = createIcon({
  displayName: "Battery",
  viewBox: "0 0 24 24",
  paths: {
    solid: minBatterySolid.paths.solid,
    outline: minBatteryOutline.paths.outline,
  },
});

export const BatteryIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBattery} {...props} />
);
