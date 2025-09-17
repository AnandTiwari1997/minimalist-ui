import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minFolderSolid } from "@minimalist-ui/core/icons/solid/FolderIconSolid";
import { minFolderOutline } from "@minimalist-ui/core/icons/outline/FolderIconOutline";

export const minFolder = createIcon({
  displayName: "Folder",
  viewBox: "0 0 24 24",
  paths: {
    solid: minFolderSolid.paths.solid,
    outline: minFolderOutline.paths.outline,
  },
});

export const FolderIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFolder} {...props} />
);
