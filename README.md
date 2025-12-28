# n-components
Simple web components for use with *static* vanilla HTML, JS and CSS websites.

To use, import with `<script src="https://unpkg.com/@trenoxxious/n-components@latest/dist/n-components.umd.js"></script>` in your HTML `<head>`.

## n-buttons
**An n-component button element is called using `<n-button></n-button>` in any HTML document/context.**

There are several class options for n-button components, including:
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

Called with `<n-copy></n-copy>` and additional options listed below.

| Class | Description | Default | Accepts | Note |
| -------- | -------- | -------- | -------- | -------- |
| *nc-unset* | Sets the position of the n-copy element. | "nc-unset" | "nc-tr", "nc-tl", "nc-t", "nc-br", "nc-bl", "nc-b", "nc-l", "nc-r", "nc-unset" | All positions outside of "nc-unset" will also be assigned **absolute positioning** and *should be placed inside of a relative element*. |
| *nc-small* | Sets the size of the copy button | "nc-small" | "nc-small" (16x16px), "nc-medium" (24x24px), "nc-large" (32x32px)| The button has a default padding of 4px. You can use `style="padding: 0;"` to eliminate this. |
| *nc-success-[green]* | When copied, sets the color of the copy button to the specified value for 2s | null | Any CSS-valid color string | |
| *nc-dark* | Sets the button text to white. | Black in color. | "nc-dark" | |

---