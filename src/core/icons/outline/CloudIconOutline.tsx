import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minCloudOutline = createIcon({
  displayName: "CloudOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <path
        d="M6 16a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10 1 3.5 3.5 0 0 1 1 6"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const CloudIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCloudOutline} {...props} />
);
