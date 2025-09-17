import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minFastForwardSolid } from "@minimalist-ui/core/icons/solid/FastForwardIconSolid";
import { minFastForwardOutline } from "@minimalist-ui/core/icons/outline/FastForwardIconOutline";

export const minFastForward = createIcon({
  displayName: "FastForward",
  viewBox: "0 0 24 24",
  paths: {
    solid: minFastForwardSolid.paths.solid,
    outline: minFastForwardOutline.paths.outline,
  },
});

export const FastForwardIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFastForward} {...props} />
);
