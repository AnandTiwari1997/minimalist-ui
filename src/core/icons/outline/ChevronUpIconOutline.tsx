import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minChevronUpOutline = createIcon({
  displayName: "ChevronUpOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <polyline
        points="6,14 12,8 18,14"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const ChevronUpIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronUpOutline} {...props} />
);
