import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minEyeOutline = createIcon({
  displayName: "EyeOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M1.5 12c2.5-5 8.5-7 10.5-7s8 2 10.5 7c-2.5 5-8.5 7-10.5 7s-8-2-10.5-7z" />
        <circle cx="12" cy="12" r="3" />
      </g>
    ),
  },
});

export const EyeIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minEyeOutline} {...props} />
);
