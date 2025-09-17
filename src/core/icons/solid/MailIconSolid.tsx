import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMailSolid = createIcon({
  displayName: "MailSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <polyline points="3,7 12,13 21,7" fill="white" />
      </g>
    ),
  },
});

export const MailIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMailSolid} {...props} />
);
