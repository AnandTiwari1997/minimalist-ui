import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minMuteSolid } from "@minimalist-ui/core/icons/solid/MuteIconSolid";
import { minMuteOutline } from "@minimalist-ui/core/icons/outline/MuteIconOutline";

export const minMute = createIcon({
  displayName: "Mute",
  viewBox: "0 0 24 24",
  paths: {
    solid: minMuteSolid.paths.solid,
    outline: minMuteOutline.paths.outline,
  },
});

export const MuteIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMute} {...props} />
);
