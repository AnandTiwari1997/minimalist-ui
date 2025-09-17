import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minForwardOutline = createIcon({
  displayName: "ForwardOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <polyline
        points="9,6 15,12 9,18"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const ForwardIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minForwardOutline} {...props} />
);
