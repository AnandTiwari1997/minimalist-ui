import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minMessageSolid } from "@minimalist-ui/core/icons/solid/MessageIconSolid";
import { minMessageOutline } from "@minimalist-ui/core/icons/outline/MessageIconOutline";

export const minMessage = createIcon({
  displayName: "Message",
  viewBox: "0 0 24 24",
  paths: {
    solid: minMessageSolid.paths.solid,
    outline: minMessageOutline.paths.outline,
  },
});

export const MessageIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMessage} {...props} />
);
