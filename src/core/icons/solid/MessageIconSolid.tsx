import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMessageSolid = createIcon({
  displayName: "MessageSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M3 17l5-4 5 4 8-6" fill="white" />
      </g>
    ),
  },
});

export const MessageIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMessageSolid} {...props} />
);
