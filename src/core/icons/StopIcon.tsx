import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minStopSolid } from "@minimalist-ui/core/icons/solid/StopIconSolid";
import { minStopOutline } from "@minimalist-ui/core/icons/outline/StopIconOutline";

export const minStop = createIcon({
  displayName: "Stop",
  viewBox: "0 0 24 24",
  paths: {
    solid: minStopSolid.paths.solid,
    outline: minStopOutline.paths.outline,
  },
});

export const StopIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minStop} {...props} />
);
