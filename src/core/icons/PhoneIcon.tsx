import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minPhoneSolid } from "@minimalist-ui/core/icons/solid/PhoneIconSolid";
import { minPhoneOutline } from "@minimalist-ui/core/icons/outline/PhoneIconOutline";

export const minPhone = createIcon({
  displayName: "Phone",
  viewBox: "0 0 24 24",
  paths: {
    solid: minPhoneSolid.paths.solid,
    outline: minPhoneOutline.paths.outline,
  },
});

export const PhoneIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPhone} {...props} />
);
