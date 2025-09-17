import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minClipboardSolid } from "@minimalist-ui/core/icons/solid/ClipboardIconSolid";
import { minClipboardOutline } from "@minimalist-ui/core/icons/outline/ClipboardIconOutline";

export const minClipboard = createIcon({
  displayName: "Clipboard",
  viewBox: "0 0 24 24",
  paths: {
    solid: minClipboardSolid.paths.solid,
    outline: minClipboardOutline.paths.outline,
  },
});

export const ClipboardIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minClipboard} {...props} />
);
