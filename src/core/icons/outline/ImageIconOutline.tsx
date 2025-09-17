import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minImageOutline = createIcon({
  displayName: "ImageOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M5 17l5-6 6 8 6-6" />
        <circle cx="17" cy="8" r="1.2" />
      </g>
    ),
  },
});

export const ImageIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minImageOutline} {...props} />
);
