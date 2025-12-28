import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('n-copy')
export class NCopy extends LitElement {
    static properties = {
        dark: { type: Boolean },
        copy: { type: String },
        position: { type: String },
        background: { type: String },
        size: { type: String },
        successColor: { type: String },
        // Standard HTML button attributes
        id: { type: String },
        style: { type: String },
        name: { type: String },
        disabled: { type: Boolean },
        ariaLabel: { type: String, attribute: 'aria-label' },
        ariaDescribedby: { type: String, attribute: 'aria-describedby' },
        ariaPressed: { type: String, attribute: 'aria-pressed' },
    };

    position: "unset" | "top right" | "top left" | "bottom right" | "bottom left" | "left" | "right" | "top" | "bottom" = "unset";
    dark = false;
    copy = '';
    background = '';
    size: "small" | "medium" | "large" = "small";
    successColor = '';
    // Standard HTML button attributes
    id = '';
    name = '';
    disabled = false;
    ariaLabel = '';
    ariaDescribedby = '';
    ariaPressed = '';

    colorChanging = false;

    static styles = css`
        .copy-button {
            display: block;
            cursor: pointer;
            user-select: none;
            padding: 4px;
            border-radius: 4px;
            color: black;
        }

        .copy-button.dark {
            color: white;
        }

        .copy-button:active {
            scale: 0.90;
        }
    `;

    render() {
        let sizePx = '16px';
        let positionAttr = '';

        if (this.size === "medium") {
            sizePx = '24px';
        } else if (this.size === "large") {
            sizePx = '32px';
        }

        switch (this.position) {
            case "top right":
                positionAttr = `position: absolute; top: 0; right: 0;`;
                break;
            case "bottom right":
                positionAttr = `position: absolute; bottom: 0; right: 0;`;
                break;
            case "top left":
                positionAttr = `position: absolute; top: 0; left: 0;`;
                break;
            case "bottom left":
                positionAttr = `position: absolute; bottom: 0; left: 0;`;
                break;
            case "top":
                positionAttr = `position: absolute; top: 0; right: 50%; transform: translateX(-50%);`;
                break;
            case "bottom":
                positionAttr = `position: absolute; bottom: 0; right: 50%; transform: translateX(-50%);`;
                break;
            case "left":
                positionAttr = `position: absolute; left: 0; top: 50%; transform: translateY(-50%);`;
                break;
            case "right":
                positionAttr = `position: absolute; right: 0; top: 50%; transform: translateY(-50%);`;
                break;
            case "unset":
            default:
                positionAttr = `position: unset;`;
                break;
        }

        return html`<div 
            ?disabled="${this.disabled}"
            id="${this.id || ''}"
            @click="${this.handleCopy}"
            name="${this.name || ''}"
            copy="${this.copy || ''}"
            aria-label="${this.ariaLabel || ''}"
            aria-describedby="${this.ariaDescribedby || ''}"
            aria-pressed="${this.ariaPressed || ''}"
            class="copy-button${this.dark ? ' dark' : ''}"
            style="${positionAttr}${` width: ${sizePx}; height: ${sizePx};`}${this.background !== '' ? ` background: ${this.background};` : ``}${this.style ? ` ${this.style}` : ``}">
            <svg xmlns="http://www.w3.org/2000/svg" height="${sizePx}" viewBox="0 -960 960 960" width="${sizePx}" fill="currentColor">
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
            </svg>
        </div>`;
    }

    private handleCopy() {
        const button = this.shadowRoot?.querySelector('.copy-button') as HTMLElement;

        if (!this.colorChanging) {
            this.colorChanging = true;
            if (this.successColor !== '' && button) {
                button.style.color = this.successColor;
            }
            navigator.clipboard.writeText(this.copy);
            setTimeout(() => {
                if (button) {
                    button.style.color = '';
                }
                this.colorChanging = false;
            }, 2000);
        }
    }
}