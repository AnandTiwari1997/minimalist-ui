import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minDownloadOutline = createIcon({
  displayName: "DownloadOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="4" y="3" width="16" height="4" rx="1" />
        <path d="M12 7v8" />
        <polyline points="8,13 12,17 16,13" />
      </g>
    ),
  },
});

export const DownloadIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minDownloadOutline} {...props} />
);
