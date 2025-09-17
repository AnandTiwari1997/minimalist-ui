import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minClipboardOutline = createIcon({
  displayName: "ClipboardOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="7" y="3" width="10" height="4" rx="1" />
        <rect x="6" y="7" width="12" height="14" rx="2" />
      </g>
    ),
  },
});

export const ClipboardIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minClipboardOutline} {...props} />
);
