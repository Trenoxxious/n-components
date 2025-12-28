import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('n-copy')
export class NCopy extends LitElement {
    static properties = {
        copy: { type: String },
        // Standard HTML button attributes
        id: { type: String },
        style: { type: String },
        name: { type: String },
        disabled: { type: Boolean },
        ariaLabel: { type: String, attribute: 'aria-label' },
        ariaDescribedby: { type: String, attribute: 'aria-describedby' },
        ariaPressed: { type: String, attribute: 'aria-pressed' },
    };

    copy = '';
    // Standard HTML button attributes
    id = '';
    name = '';
    disabled = false;
    ariaLabel = '';
    ariaDescribedby = '';
    ariaPressed = '';

    colorChanging = false;
    colorToChangeTo = '';

    static styles = css`
        .copy-button {
            z-index: 9999;
            background: transparent;
            border: none;
            display: block;
            position: unset;
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

        .copy-button.nc-tr {
            position: absolute !important;
            top: 0;
            right: 0;
        }

        .copy-button.nc-tl {
            position: absolute !important;
            top: 0;
            left: 0;
        }
        
        .copy-button.nc-t {
            position: absolute !important;
            top: 0;
            right: 50%;
            transform: translateX(-50%);
        }

        .copy-button.nc-br {
            position: absolute !important;
            bottom: 0;
            right: 0;
        }

        .copy-button.nc-bl {
            position: absolute !important;
            bottom: 0;
            left: 0;
        }
        
        .copy-button.nc-b {
            position: absolute !important;
            bottom: 0;
            right: 50%;
            transform: translateX(-50%);
        }

        .copy-button.nc-r {
            position: absolute !important;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .copy-button.nc-l {
            position: absolute !important;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .copy-button.nc-dark {
            color: white;
        }
    `;

    private getButtonClasses() {
        const classes: string[] = [];

        // Add nb- prefixed classes from the element
        const elementClasses = this.getAttribute('class')?.split(' ') || [];
        elementClasses.forEach(cl => {
            if (cl.startsWith('nc-')) {
                classes.push(cl);

                if (cl.endsWith(']')) {
                    const match = cl.match(/\[([^\]]+)\]/);
                    if (match) {
                        this.colorToChangeTo = match[1];
                    }
                }
            }
        });

        return classes.join(' ');
    }

    render() {
        let sizePx = '16px';

        if (this.classList.contains('nc-medium')) {
            sizePx = '24px';
        } else if (this.classList.contains('nc-large')) {
            sizePx = '32px';
        }

        return html`<button 
            ?disabled="${this.disabled}"
            id="${this.id || ''}"
            @click="${this.handleCopy}"
            name="${this.name || ''}"
            copy="${this.copy || ''}"
            aria-label="${this.ariaLabel || ''}"
            aria-describedby="${this.ariaDescribedby || ''}"
            aria-pressed="${this.ariaPressed || ''}"
            class="copy-button ${this.getButtonClasses()}"
            style="${this.style}">
            <svg xmlns="http://www.w3.org/2000/svg" height="${sizePx}" viewBox="0 -960 960 960" width="${sizePx}" fill="currentColor">
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
            </svg>
        </button>`;
    }

    private handleCopy() {
        const button = this.shadowRoot?.querySelector('.copy-button') as HTMLElement;

        if (!this.colorChanging) {
            this.colorChanging = true;
            if (this.colorToChangeTo !== '' && button) {
                button.style.color = this.colorToChangeTo;
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