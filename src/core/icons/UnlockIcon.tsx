import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minUnlockSolid } from "@minimalist-ui/core/icons/solid/UnlockIconSolid";
import { minUnlockOutline } from "@minimalist-ui/core/icons/outline/UnlockIconOutline";

export const minUnlock = createIcon({
  displayName: "Unlock",
  viewBox: "0 0 24 24",
  paths: {
    solid: minUnlockSolid.paths.solid,
    outline: minUnlockOutline.paths.outline,
  },
});

export const UnlockIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minUnlock} {...props} />
);
