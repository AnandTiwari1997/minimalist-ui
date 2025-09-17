import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minBackOutline = createIcon({
  displayName: "BackOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <polyline
        points="15,6 9,12 15,18"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const BackIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBackOutline} {...props} />
);
