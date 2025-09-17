import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minUserOutline = createIcon({
  displayName: "UserOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" />
      </g>
    ),
  },
});

export const UserIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minUserOutline} {...props} />
);
