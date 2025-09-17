import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minFolderSolid = createIcon({
  displayName: "FolderSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M3 7h6l2 2h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3V7z"
        fill="currentColor"
      />
    ),
  },
});

export const FolderIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFolderSolid} {...props} />
);
