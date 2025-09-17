import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minHeartOutline = createIcon({
  displayName: "HeartOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <path
        d="M12 20s-7-4.6-9-7.3c-1.8-2.3.1-5.7 2.8-5.7 2.1 0 3.1 1.6 3.8 2.6.6.9 1.5 1.9 2.4 2.4.9-.5 1.8-1.5 2.4-2.4.7-1 1.7-2.6 3.8-2.6 2.7 0 4.6 3.4 2.8 5.7-2 2.7-9 7.3-9 7.3z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const HeartIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minHeartOutline} {...props} />
);
