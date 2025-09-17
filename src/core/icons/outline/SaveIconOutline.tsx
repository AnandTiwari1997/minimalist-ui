import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minSaveOutline = createIcon({
  displayName: "SaveOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 3h12v6H6z" />
        <rect x="5" y="9" width="14" height="10" rx="1.5" />
      </g>
    ),
  },
});

export const SaveIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSaveOutline} {...props} />
);
