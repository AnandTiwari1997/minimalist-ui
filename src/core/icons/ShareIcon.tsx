import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minShareSolid } from "@minimalist-ui/core/icons/solid/ShareIconSolid";
import { minShareOutline } from "@minimalist-ui/core/icons/outline/ShareIconOutline";

export const minShare = createIcon({
  displayName: "Share",
  viewBox: "0 0 24 24",
  paths: {
    solid: minShareSolid.paths.solid,
    outline: minShareOutline.paths.outline,
  },
});

export const ShareIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minShare} {...props} />
);
