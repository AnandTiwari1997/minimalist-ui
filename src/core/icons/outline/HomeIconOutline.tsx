import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minHomeOutline = createIcon({
  displayName: "HomeOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 11.5 L12 4 L21 11.5" />
        <rect x="5" y="11.5" width="14" height="7" rx="1.2" />
      </g>
    ),
  },
});

export const HomeIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minHomeOutline} {...props} />
);
