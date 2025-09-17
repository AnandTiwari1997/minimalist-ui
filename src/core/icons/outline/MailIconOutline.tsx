import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMailOutline = createIcon({
  displayName: "MailOutline",
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
        <polyline points="3,7 12,13 21,7" />
      </g>
    ),
  },
});

export const MailIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMailOutline} {...props} />
);
