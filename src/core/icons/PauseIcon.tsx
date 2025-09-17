import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minPauseSolid } from "@minimalist-ui/core/icons/solid/PauseIconSolid";
import { minPauseOutline } from "@minimalist-ui/core/icons/outline/PauseIconOutline";

export const minPause = createIcon({
  displayName: "Pause",
  viewBox: "0 0 24 24",
  paths: {
    solid: minPauseSolid.paths.solid,
    outline: minPauseOutline.paths.outline,
  },
});

export const PauseIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPause} {...props} />
);
