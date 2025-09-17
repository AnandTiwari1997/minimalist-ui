import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minMailSolid } from "@minimalist-ui/core/icons/solid/MailIconSolid";
import { minMailOutline } from "@minimalist-ui/core/icons/outline/MailIconOutline";

export const minMail = createIcon({
  displayName: "Mail",
  viewBox: "0 0 24 24",
  paths: {
    solid: minMailSolid.paths.solid,
    outline: minMailOutline.paths.outline,
  },
});

export const MailIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMail} {...props} />
);
