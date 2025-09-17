import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minCloseSolid = createIcon({
  displayName: "CloseSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: <path d="M5 5 L19 19 L15 23 L1 9 Z" fill="currentColor" />,
  },
});

export const CloseIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCloseSolid} {...props} />
);
