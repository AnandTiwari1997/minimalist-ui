import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minUploadOutline = createIcon({
  displayName: "UploadOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="4" y="17" width="16" height="4" rx="1" />
        <path d="M12 17V9" />
        <polyline points="8,13 12,9 16,13" />
      </g>
    ),
  },
});

export const UploadIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minUploadOutline} {...props} />
);
