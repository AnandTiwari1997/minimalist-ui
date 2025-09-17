import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minForwardSolid = createIcon({
  displayName: "ForwardSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M9 6 L15 12 L9 18 L9 15 L13 12 L9 9 Z" fill="currentColor" />
    ),
  },
});

export const ForwardIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minForwardSolid} {...props} />
);
