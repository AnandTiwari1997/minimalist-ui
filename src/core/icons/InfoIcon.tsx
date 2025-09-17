import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minInfoSolid } from "@minimalist-ui/core/icons/solid/InfoIconSolid";
import { minInfoOutline } from "@minimalist-ui/core/icons/outline/InfoIconOutline";

export const minInfo = createIcon({
  displayName: "Info",
  viewBox: "0 0 24 24",
  paths: {
    solid: minInfoSolid.paths.solid,
    outline: minInfoOutline.paths.outline,
  },
});

export const InfoIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minInfo} {...props} />
);
