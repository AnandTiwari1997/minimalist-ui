import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minImageSolid } from "@minimalist-ui/core/icons/solid/ImageIconSolid";
import { minImageOutline } from "@minimalist-ui/core/icons/outline/ImageIconOutline";

export const minImage = createIcon({
  displayName: "Image",
  viewBox: "0 0 24 24",
  paths: {
    solid: minImageSolid.paths.solid,
    outline: minImageOutline.paths.outline,
  },
});

export const ImageIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minImage} {...props} />
);
