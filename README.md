# n-components

Simple web components for use with *static* vanilla HTML, JS and CSS websites.

Visit [the website](https://n-components.com/) for demos.

To use, import with `<script src="https://unpkg.com/@trenoxxious/n-components@latest/dist/n-components.umd.js"></script>` in your HTML `<head>`.

## n-buttons
**An n-component button element is called using `<n-button></n-button>` in any HTML document/context.**

A button element you can use to replace the default button element.

Called with `<n-button></n-button>` and additional options listed below, starting with **nb-** for **n-button**.

| Class | Description | Default | Accepts |
| -------- | -------- | -------- | -------- |
| ***nb-normal*** | Changes the main color theme of the button. | "nb-normal" | "nb-normal", "nb-info", "nb-success", "nb-warning", "nb-alert" |
| ***nb-dp*** | Does not scale down when clicked if this is set. | Scales down when clicked. | "nb-dp", "nb-dont-punch" |
| ***nb-scale*** | Will scale when hovered if this is set. | Does not scale on hover. | "nb-scale" |
| ***nb-outline*** | Will **only** show the outline of the button if this is set. | Shows the button background. | "nb-outline" |
| ***nb-fast*** | Sets the animation speed of most button animations. | Has 0.25s animation speed. | "nb-fast", "nb-slow", "nb-very-slow" |
| ***nb-thick*** | Sets the padding high or low on the button. (12x24px or 4x8px padding) | Normal 8x16px padding. | "nb-thick", "nb-thin" |
| ***nb-dark*** | Sets the button text to white. | Default button color based on theme. | "nb-dark" |
| ***nb-rounded*** | Rounds or sharpens the button corners. | A border radius of 2px. | "nb-rounded", "nb-sharp" |
| ***nb-dynamic*** | Disables the button's default max/min width. | Min width of 100px, max width of 200px. | "nb-dynamic" |
| ***nb-nowrap*** | Disables the button's default text wrapping. | Text wrap of **pretty**. | "nb-nowrap" |

* The n-button component also accepts the *style* attribute as normal.

## n-utility
**An n-component utility is called using the appropriate element in any HTML document/context.**

### n-copy
A drop-in **copy** button you can throw pretty much anywhere.

Called with `<n-copy></n-copy>` and additional options listed below, staring with **nc-** for **n-copy**.

| Class | Description | Default | Accepts | Note |
| -------- | -------- | -------- | -------- | -------- |
| *nc-unset* | Sets the position of the n-copy element. | "nc-unset" | "nc-tr", "nc-tl", "nc-t", "nc-br", "nc-bl", "nc-b", "nc-l", "nc-r", "nc-unset" | All positions outside of "nc-unset" will also be assigned **absolute positioning** and *should be placed inside of a relative element*. |
| *nc-small* | Sets the size of the copy button/SVG element. | "nc-small" | "nc-small" (16x16px), "nc-medium" (24x24px), "nc-large" (32x32px)| The button has a default padding of 4px. You can use `style="padding: 0;"` to eliminate this. |
| *nc-success-[#00FF00]* | When copied, sets the color of the copy button to the specified value for 2s | null | Any valid **HEX** or **name** color string | |
| *nc-dark* | Sets the button text to white. | The copy SVG is black in color. | "nc-dark" | |

Then, the `<n-copy></n-copy>` element also takes a `copy` attribute:

| Attribute | Description | Default | Accepts | Note |
| -------- | -------- | -------- | -------- | -------- |
| *copy* | Sets the string to be copied when clicked. | null | A valid string. | You may have to escape the string you intend the user to copy using backslashes (\\). |

---

### n-tooltip
An attribute you can assign to almost anything to display a tooltip at the user's cursor.

Called with the `n-tooltip=` dataset and additional options listed below, starting with **nt-** for **n-tooltip**.

| Class | Description | Default | Accepts |
| -------- | -------- | -------- | -------- |
| *nt-dark* | Sets the tooltip to dark mode with a dark background and white text. | White background and black text. | "nc-dark" |
| *nt-fast* | Sets the opacity animation speed. | Has 0.25s opacity animation speed. | "nt-fast", "nt-slow", "nt-very-slow" |

Then, the `n-tooltip` attribute also requires a string to display:

| Attribute | Description | Default | Accepts | Note |
| -------- | -------- | -------- | -------- | -------- |
| *n-tooltip="This is a tooltip."* | Sets the string that is displayed on element hover. | null | A valid string. | You may have to escape the string you intend to display to the user using backslashes (\\). |

---