import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minSettingsSolid } from "@minimalist-ui/core/icons/solid/SettingsIconSolid";
import { minSettingsOutline } from "@minimalist-ui/core/icons/outline/SettingsIconOutline";

export const minSettings = createIcon({
  displayName: "Settings",
  viewBox: "0 0 24 24",
  paths: {
    solid: minSettingsSolid.paths.solid,
    outline: minSettingsOutline.paths.outline,
  },
});

export const SettingsIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSettings} {...props} />
);
