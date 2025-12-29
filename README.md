<div align="center">
  <img src="n-components/public/n-components-logo.webp" alt="n-components logo" height="120">

  <h1>n-components</h1>

  <p>Simple web components for static vanilla HTML, JS and CSS websites</p>

  <p>
    <a href="https://n-components.com/">Website & Demos</a>
  </p>
</div>

---

## Installation

Add this script tag to your HTML `<head>`:

```html
<script src="https://unpkg.com/@trenoxxious/n-components@latest/dist/n-components.umd.js"></script>
```

## n-button

Custom button element with extensive styling options.

### Usage

```html
<n-button class="nb-success nb-rounded">Click me</n-button>
```

### Options

All classes start with `nb-` prefix:

| Class | Description | Values |
| --- | --- | --- |
| `nb-normal` | Color theme | `nb-normal`, `nb-info`, `nb-success`, `nb-warning`, `nb-alert` |
| `nb-dp` | Disable scale-down on click | `nb-dp`, `nb-dont-punch` |
| `nb-scale` | Scale on hover | `nb-scale` |
| `nb-outline` | Outline style only | `nb-outline` |
| `nb-fast` | Animation speed | `nb-fast`, `nb-slow`, `nb-very-slow` |
| `nb-thick` | Padding size | `nb-thick` (12x24px), `nb-thin` (4x8px) |
| `nb-dark` | White text color | `nb-dark` |
| `nb-rounded` | Corner style | `nb-rounded`, `nb-sharp` |
| `nb-dynamic` | Disable width constraints | `nb-dynamic` |
| `nb-nowrap` | Disable text wrapping | `nb-nowrap` |

The component also accepts standard HTML `style` attributes.

## Utilities

### n-copy

Drop-in copy-to-clipboard button.

**Usage:**

```html
<n-copy copy="Text to copy" class="nc-small nc-dark"></n-copy>
```

**Classes** (prefix: `nc-`):

| Class | Description | Values |
| --- | --- | --- |
| `nc-unset` | Position | `nc-tr`, `nc-tl`, `nc-t`, `nc-br`, `nc-bl`, `nc-b`, `nc-l`, `nc-r`, `nc-unset` |
| `nc-small` | Size | `nc-small` (16px), `nc-medium` (24px), `nc-large` (32px) |
| `nc-success-[color]` | Success color (2s) | Any HEX or named color (e.g., `nc-success-#00FF00`) |
| `nc-dark` | Dark mode | `nc-dark` |

**Attributes:**

| Attribute | Description |
| --- | --- |
| `copy` | String to copy to clipboard (escape special characters with `\`) |

**Note:** Position values other than `nc-unset` use absolute positioning. Place inside a relative container.

---

### n-tooltip

Display tooltips on hover for any element.

**Usage:**

```html
<button n-tooltip="This is a tooltip" class="nt-dark">
  Hover me
</button>
```

**Classes** (prefix: `nt-`):

| Class | Description | Values |
| --- | --- | --- |
| `nt-dark` | Dark theme | `nt-dark` |
| `nt-fast` | Animation speed | `nt-fast`, `nt-slow`, `nt-very-slow` |

**Attributes:**

| Attribute | Description |
| --- | --- |
| `n-tooltip` | Tooltip text to display (escape special characters with `\`) |

---