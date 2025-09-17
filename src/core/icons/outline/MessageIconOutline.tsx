import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMessageOutline = createIcon({
  displayName: "MessageOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M3 17l5-4 5 4 8-6" />
      </g>
    ),
  },
});

export const MessageIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMessageOutline} {...props} />
);
