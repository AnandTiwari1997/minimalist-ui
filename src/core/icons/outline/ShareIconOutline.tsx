import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minShareOutline = createIcon({
  displayName: "ShareOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="6" cy="18" r="1.6" />
        <circle cx="12" cy="6" r="1.6" />
        <circle cx="18" cy="18" r="1.6" />
        <path d="M7 17l4-10 4 10" />
        <path d="M7 19l10-1" />
      </g>
    ),
  },
});

export const ShareIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minShareOutline} {...props} />
);
