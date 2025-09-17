import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minShareSolid = createIcon({
  displayName: "ShareSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M18 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M7 17l4-10 4 10-4-2-4 2z"
        fill="currentColor"
      />
    ),
  },
});

export const ShareIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minShareSolid} {...props} />
);
