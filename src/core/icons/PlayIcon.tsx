import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minPlaySolid } from "@minimalist-ui/core/icons/solid/PlayIconSolid";
import { minPlayOutline } from "@minimalist-ui/core/icons/outline/PlayIconOutline";

export const minPlay = createIcon({
  displayName: "Play",
  viewBox: "0 0 24 24",
  paths: {
    solid: minPlaySolid.paths.solid,
    outline: minPlayOutline.paths.outline,
  },
});

export const PlayIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPlay} {...props} />
);
