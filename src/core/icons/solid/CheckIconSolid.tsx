import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minCheckSolid = createIcon({
  displayName: "CheckSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: <path d="M2 12l4 4 6-6 8 8 1-1-9-9-7 7-3-3z" fill="currentColor" />,
  },
});

export const CheckIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCheckSolid} {...props} />
);
