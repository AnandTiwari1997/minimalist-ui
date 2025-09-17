import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minSaveSolid } from "@minimalist-ui/core/icons/solid/SaveIconSolid";
import { minSaveOutline } from "@minimalist-ui/core/icons/outline/SaveIconOutline";

export const minSave = createIcon({
  displayName: "Save",
  viewBox: "0 0 24 24",
  paths: {
    solid: minSaveSolid.paths.solid,
    outline: minSaveOutline.paths.outline,
  },
});

export const SaveIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSave} {...props} />
);
