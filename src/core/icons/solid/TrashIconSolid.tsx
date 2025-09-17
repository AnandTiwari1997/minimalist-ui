import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minTrashSolid = createIcon({
  displayName: "TrashSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M21 7H3l2 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l2-14z M10 11h4v6h-4z"
        fill="currentColor"
      />
    ),
  },
});

export const TrashIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minTrashSolid} {...props} />
);
