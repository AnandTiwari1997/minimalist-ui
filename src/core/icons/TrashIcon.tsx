import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minTrashSolid } from "@minimalist-ui/core/icons/solid/TrashIconSolid";
import { minTrashOutline } from "@minimalist-ui/core/icons/outline/TrashIconOutline";

export const minTrash = createIcon({
  displayName: "Trash",
  viewBox: "0 0 24 24",
  paths: {
    solid: minTrashSolid.paths.solid,
    outline: minTrashOutline.paths.outline,
  },
});

export const TrashIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minTrash} {...props} />
);
