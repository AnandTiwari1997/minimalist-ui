import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minClipboardSolid = createIcon({
  displayName: "ClipboardSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="7" y="3" width="10" height="4" rx="1" fill="white" />
        <rect x="6" y="7" width="12" height="14" rx="2" />
      </g>
    ),
  },
});

export const ClipboardIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minClipboardSolid} {...props} />
);
