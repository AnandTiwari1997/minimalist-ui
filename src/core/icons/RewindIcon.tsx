import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minRewindSolid } from "@minimalist-ui/core/icons/solid/RewindIconSolid";
import { minRewindOutline } from "@minimalist-ui/core/icons/outline/RewindIconOutline";

export const minRewind = createIcon({
  displayName: "Rewind",
  viewBox: "0 0 24 24",
  paths: {
    solid: minRewindSolid.paths.solid,
    outline: minRewindOutline.paths.outline,
  },
});

export const RewindIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minRewind} {...props} />
);
