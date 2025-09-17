export const zIndex = {
    base: 0,
    tooltip: 100,
    popover: 300,
    modal: 1000,
    toast: 2000,
    alert: 3000
};

/*
* {
  "$schema": "https://design-tokens.org/schema.json",
  "tokens": {
    "zIndex": {
      "base": {
        "value": 0,
        "type": "z-index",
        "description": "Default application layer (cards, forms, navbars, content).",
        "portal": false,
        "aria": {
          "role": null,
          "props": {}
        },
        "dismiss": null,
        "usage": ["cards", "forms", "navbars", "content"]
      },
      "tooltip": {
        "value": 100,
        "type": "z-index",
        "description": "Transient hover/focus hints. Lowest overlay priority.",
        "portal": true,
        "aria": {
          "role": "tooltip",
          "props": {
            "trigger": "aria-describedby"
          }
        },
        "dismiss": "auto",
        "usage": ["buttons", "icons", "links", "form-fields"],
        "position": {
          "defaultPlacement": "top",
          "offset": 4,
          "strategy": ["flip", "shift"],
          "align": "center"
        }
      },
      "popover": {
        "value": 300,
        "type": "z-index",
        "description": "Interactive overlays (dropdowns, selects, menus).",
        "portal": true,
        "aria": {
          "role": ["listbox", "menu", "dialog"],
          "props": {
            "trigger": ["aria-expanded", "aria-controls"],
            "options": ["aria-selected", "aria-checked"]
          }
        },
        "dismiss": ["esc", "outside-click", "tab-away"],
        "usage": ["dropdowns", "selects", "menus", "tooltips", "buttons", "icons", "links", "form-fields"],
        "position": {
          "defaultPlacement": "bottom",
          "offset": 8,
          "strategy": ["flip", "shift"],
          "align": "start"
        }
      },
      "modal": {
        "value": 1000,
        "type": "z-index",
        "description": "Blocking dialogs/drawers. Capture focus until closed.",
        "portal": true,
        "aria": {
          "role": "dialog",
          "props": {
            "root": ["aria-modal=true", "aria-labelledby", "aria-describedby"]
          }
        },
        "dismiss": ["esc", "explicit-action"],
        "usage": ["dialog", "drawer", "form-modal", "dropdowns", "selects", "menus", "tooltips", "buttons", "icons", "links", "form-fields"],
        "position": {
          "defaultPlacement": "center",
          "strategy": [],
          "align": "center"
        }
      },
      "toast": {
        "value": 2000,
        "type": "z-index",
        "description": "Non-blocking notifications, fixed to viewport.",
        "portal": true,
        "aria": {
          "role": ["status", "alert"],
          "props": {
            "behavior": "non-interactive"
          }
        },
        "dismiss": ["timeout", "manual-close"],
        "usage": ["notifications", "alerts", "status-messages", "dialog", "drawer", "form-modal", "dropdowns", "selects", "menus", "tooltips", "buttons", "icons", "links", "form-fields"]
      },
      "alert": {
        "value": 3000,
        "type": "z-index",
        "description": "Critical blocking overlays. Must demand immediate attention.",
        "portal": true,
        "aria": {
          "role": "alertdialog",
          "props": {
            "root": ["aria-modal=true", "aria-labelledby", "aria-describedby"],
            "focus": "initial focus on primary action"
          }
        },
        "dismiss": ["explicit-action"],
        "usage": ["critical-alerts", "security-warnings", "system-errors", "notifications", "alerts", "status-messages", "dialog", "drawer", "form-modal", "dropdowns", "selects", "menus", "tooltips", "buttons", "icons", "links", "form-fields"]
      }
    }
  },
  "layerPriorityMap": {
    "base": 0,
    "tooltip": 1,
    "popover": 2,
    "modal": 3,
    "toast": 4,
    "alert": 5
  }
}

*  */
