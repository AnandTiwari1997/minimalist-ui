import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMinusOutline = createIcon({
  displayName: "MinusOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const MinusIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMinusOutline} {...props} />
);
