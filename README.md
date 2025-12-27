# n-components
Simple web components for use with *static* vanilla HTML, JS and CSS websites.

To use, import with `<script src="https://unpkg.com/@trenoxxious/n-components@latest/dist/n-components.umd.js"></script>` in your HTML `<head>`.

## Buttons
**An n-component button element is called using `<n-button></n-button>` in any HTML document/context.**

There are several options for n-button components, including:
| Variable | Description | Default | Accepts |
| -------- | -------- | -------- | -------- |
| ***variant*** | Changes the main color theme of the button. | normal | normal, info, success, warning, alert |
| ***dontPunch*** | Does not scale down when clicked if this is set to true. | false | true, false |
| ***scaleOnHover*** | Will scale when hovered if this is set to true. | false | true, false |
| ***outlineOnly*** | Will only show the outline of the button if this is set to true. | false | true, false |
| ***animation*** | Sets the animation speed of most button animations. | normal | fast, normal, slow, very-slow |
| ***thick*** | Sets the padding high on the button. | false | true, false |
| ***thin*** | Sets the padding low on the button. | false | true, false |
| ***dark*** | Sets the button text to white. | false | true, false |
| ***background*** | Sets the button's background. | null | Any CSS-valid background |
| ***borderColor*** | Sets the button's border color. | null | Any CSS-valid color string |
| ***textColor*** | Sets the button's text color. | null | Any CSS-valid color string |
| ***rounded*** | Rounds the button corners a little more. | false | true, false |
| ***sharp*** | Sharpens the button corners. | false | true, false |

## Utility
**An n-component utility is called using the appropriate element in any HTML document/context.**

### n-copy
An almost drag-n-drop copy button you can throw anywhere.

Called with `<n-copy></n-copy>`

| Variable | Description | Default | Accepts | Note |
| -------- | -------- | -------- | -------- | -------- |
| *position* | Sets the position of the n-copy element. | "block" | "top right", "top left", "top", "bottom right", "bottom left", "bottom", "left", "right", "block" | All positions outside of "block" will be assigned absolute positioning and should be placed inside of a relative element. |
| *copy* | What text will be copied when the button is pressed. | null | Valid strings | You may need to escape strings that are to be copied. |
| *size* | Sets the size of the copy button | "small" | "small" (16x16px), "medium" (24x24px), "large" (32x32px)| The button has a default padding of 4px. You can use `style="padding: 0;"` to eliminate this. |
| *dark* | Sets the button text to white. | false | true, false | |
| *background* | Sets the button's background. | null | Any CSS-valid background | |

---