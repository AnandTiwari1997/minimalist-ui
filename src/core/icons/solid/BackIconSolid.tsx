import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minBackSolid = createIcon({
  displayName: "BackSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M15 6 L9 12 L15 18 L15 15 L11 12 L15 9 Z" fill="currentColor" />
    ),
  },
});

export const BackIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBackSolid} {...props} />
);
