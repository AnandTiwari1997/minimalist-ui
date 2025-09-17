import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minFileSolid } from "@minimalist-ui/core/icons/solid/FileIconSolid";
import { minFileOutline } from "@minimalist-ui/core/icons/outline/FileIconOutline";

export const minFile = createIcon({
  displayName: "File",
  viewBox: "0 0 24 24",
  paths: {
    solid: minFileSolid.paths.solid,
    outline: minFileOutline.paths.outline,
  },
});

export const FileIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFile} {...props} />
);
