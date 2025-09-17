import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minSettingsSolid = createIcon({
  displayName: "SettingsSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M12 9.5 a2.5 2.5 0 1 0 0 5 a2.5 2.5 0 0 0 0 -5z"
        fill="currentColor"
      />
    ),
  },
});

export const SettingsIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSettingsSolid} {...props} />
);
