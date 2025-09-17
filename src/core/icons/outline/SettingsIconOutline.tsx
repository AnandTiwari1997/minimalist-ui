import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minSettingsOutline = createIcon({
  displayName: "SettingsOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 12 a1 1 0 0 0 .1 -1.7 l1.6 -1.2 -1.8 -3.1 -1.9 .7 a1 1 0 0 0 -1.1 -.6 l-1.2 -1.8 h-3.4 l-1.2 1.8 a1 1 0 0 0 -1.1 .6 l-1.9 -.7 -1.8 3.1 1.6 1.2 a1 1 0 0 0 .1 1.7 l-1.6 1.2 1.8 3.1 1.9 -.7 a1 1 0 0 0 1.1 .6 l1.2 1.8 h3.4 l1.2 -1.8 a1 1 0 0 0 1.1 -.6 l1.9 .7 1.8 -3.1z" />
      </g>
    ),
  },
});

export const SettingsIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSettingsOutline} {...props} />
);
