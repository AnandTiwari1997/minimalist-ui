import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minForwardSolid } from "@minimalist-ui/core/icons/solid/ForwardIconSolid";
import { minForwardOutline } from "@minimalist-ui/core/icons/outline/ForwardIconOutline";

export const minForward = createIcon({
  displayName: "Forward",
  viewBox: "0 0 24 24",
  paths: {
    solid: minForwardSolid.paths.solid,
    outline: minForwardOutline.paths.outline,
  },
});

export const ForwardIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minForward} {...props} />
);
