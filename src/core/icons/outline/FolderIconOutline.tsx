import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minFolderOutline = createIcon({
  displayName: "FolderOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <path
        d="M3 7h6l2 2h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const FolderIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFolderOutline} {...props} />
);
