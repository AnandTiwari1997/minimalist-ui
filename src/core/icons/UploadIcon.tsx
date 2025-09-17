import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minUploadSolid } from "@minimalist-ui/core/icons/solid/UploadIconSolid";
import { minUploadOutline } from "@minimalist-ui/core/icons/outline/UploadIconOutline";

export const minUpload = createIcon({
  displayName: "Upload",
  viewBox: "0 0 24 24",
  paths: {
    solid: minUploadSolid.paths.solid,
    outline: minUploadOutline.paths.outline,
  },
});

export const UploadIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minUpload} {...props} />
);
