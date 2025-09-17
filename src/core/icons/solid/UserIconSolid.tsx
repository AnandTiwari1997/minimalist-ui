import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minUserSolid = createIcon({
  displayName: "UserSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 20c1.5-4 6-6 8-6s6.5 2 8 6H4z"
        fill="currentColor"
      />
    ),
  },
});

export const UserIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minUserSolid} {...props} />
);
