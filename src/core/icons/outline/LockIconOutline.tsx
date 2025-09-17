import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minLockOutline = createIcon({
  displayName: "LockOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="5" y="10" width="14" height="9" rx="1.5" />
        <path d="M8 10V8a4 4 0 0 1 8 0v2" />
      </g>
    ),
  },
});

export const LockIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minLockOutline} {...props} />
);
