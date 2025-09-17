import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minPhoneSolid = createIcon({
  displayName: "PhoneSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <circle cx="12" cy="18" r="1" fill="white" />
      </g>
    ),
  },
});

export const PhoneIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPhoneSolid} {...props} />
);
