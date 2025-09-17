import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minDownloadSolid } from "@minimalist-ui/core/icons/solid/DownloadIconSolid";
import { minDownloadOutline } from "@minimalist-ui/core/icons/outline/DownloadIconOutline";

export const minDownload = createIcon({
  displayName: "Download",
  viewBox: "0 0 24 24",
  paths: {
    solid: minDownloadSolid.paths.solid,
    outline: minDownloadOutline.paths.outline,
  },
});

export const DownloadIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minDownload} {...props} />
);
