import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('n-button')
export class NButton extends LitElement {
    static properties = {
        variant: { type: String },
        animation: { type: String },
        thin: { type: Boolean },
        thick: { type: Boolean },
        outlineOnly: { type: Boolean },
        rounded: { type: Boolean },
        sharp: { type: Boolean },
        scaleOnHover: { type: Boolean },
        dark: { type: Boolean },
        bgColor: { type: String },
        borderColor: { type: String },
        dontPunch: { type: Boolean },
        // Standard HTML button attributes
        type: { type: String },
        id: { type: String },
        name: { type: String },
        disabled: { type: Boolean },
        form: { type: String },
        formaction: { type: String },
        formmethod: { type: String },
        formnovalidate: { type: Boolean },
        formtarget: { type: String },
        title: { type: String },
        ariaLabel: { type: String, attribute: 'aria-label' },
        ariaDescribedby: { type: String, attribute: 'aria-describedby' },
        ariaPressed: { type: String, attribute: 'aria-pressed' },
    };

    variant: 'normal' | 'info' | 'warning' | 'alert' | 'success' = 'normal';
    thin = false;
    thick = false;
    outlineOnly = false;
    scaleOnHover = false;
    rounded = false;
    sharp = false;
    dark = false;
    dontPunch = false;
    animation: 'fast' | 'normal' | 'slow' | 'very-slow' = 'normal';
    // Standard HTML button attributes
    type = 'button';
    id = '';
    name = '';
    disabled = false;
    form = '';
    formaction = '';
    formmethod = '';
    formnovalidate = false;
    formtarget = '';
    title = '';
    ariaLabel = '';
    ariaDescribedby = '';
    ariaPressed = '';
    bgColor = '';
    borderColor = '';

    static styles = css`
        button {
            padding: 8px 16px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            border-radius: 2px;
            transition: all;
            animation-duration: 0.3s;
            min-width: 100px;
            user-select: none;
        }

        button:not(.dont-punch):active {
            transition: transform 0.15s linear;
            scale: 0.97;
        }

        button.info {
            background-color: #007bff;
            color: white;
            border: 1px solid #2c92ffff;
        }

        button.info:hover {
            background-color: #268fffff;
            border: 1px solid #4da3ffff;
        }

        button.success {
            background-color: #00ff55ff;
            color: #242424ff;
            border: 1px solid #2cff72ff;
        }

        button.success:hover {
            background-color: #26ff67ff;
            border: 1px solid #93ffb7ff;
        }

        button.normal {
            background-color: #e0e0e0;
            color: #242424ff;
            border: 1px solid #ddd;
        }

        button.normal:hover {
            background-color: #f5f5f5ff;
            border: 1px solid #ffffffff;
        }

        button.warning {
            background-color: rgba(241, 132, 7, 1);
            color: white;
            border: 1px solid rgba(248, 142, 42, 1);
        }

        button.warning:hover {
            background-color: rgba(240, 162, 16, 1);
            border: 1px solid rgba(255, 184, 53, 1);
        }

        button.alert {
            background-color: rgba(233, 30, 23, 1);
            color: white;
            border: 1px solid rgba(248, 49, 42, 1);
        }

        button.alert:hover {
            background-color: rgba(248, 44, 44, 1);
            border: 1px solid rgba(255, 76, 76, 1);
        }

        button.thin {
            padding: 4px 8px;
        }

        button.thick {
            padding: 12px 24px;
        }

        button.outline-only {
            background-color: transparent !important;
        }

        button.scale-hover:hover {
            transform: scale(1.05);
        }

        button.custom-color:hover {
            filter: brightness(1.1);
        }

        .animation-fast {
            transition: all 0.10s;
        }

        .animation-normal {
            transition: all 0.25s;
        }

        .animation-slow {
            transition: all 0.45s;
        }

        .animation-very-slow {
            transition: all 1s;
        }

        .rounded {
            border-radius: 4px;
        }

        .sharp {
            border-radius: 0;
        }

        @media screen and (width <= 1024px) {
            button {
                font-size: 12px;
            }   
        }
    `;

    render() {
        const color = (this.variant === 'normal' || this.variant === 'success') && this.dark ? this.variant === 'normal' ? 'white' : '#2cff72ff' : '';
        const bgColor = (this.variant === 'normal' && this.bgColor !== '') ? this.bgColor : null;
        const borderColor = (this.variant === 'normal' && this.borderColor !== '') ? this.borderColor : null;

        return html`<button 
            type="${this.type}"
            ?disabled="${this.disabled}"
            id="${this.id || ''}"
            name="${this.name || ''}"
            form="${this.form || ''}"
            formaction="${this.formaction || ''}"
            formmethod="${this.formmethod || ''}"
            ?formnovalidate="${this.formnovalidate}"
            formtarget="${this.formtarget || ''}"
            title="${this.title || ''}"
            aria-label="${this.ariaLabel || ''}"
            aria-describedby="${this.ariaDescribedby || ''}"
            aria-pressed="${this.ariaPressed || ''}"
            class="${this.variant}${this.bgColor || this.borderColor ? ' custom-color' : ''}${this.dontPunch ? ' dont-punch' : ''}${this.thin && !this.thick ? ' thin' : this.thick ? ' thick' : ''}${this.outlineOnly ? ' outline-only' : ''}${this.scaleOnHover ? ' scale-hover' : ''}${this.rounded && !this.sharp ? ' rounded' : this.sharp ? ' sharp' : ''} animation-${this.animation}"
            style="${color ? `color: ${color}; ` : ''}${bgColor && !this.outlineOnly ? `background-color: ${bgColor}; ` : ``}${bgColor && !borderColor ? `border: 1px solid color-mix(in hsl, ${bgColor} 100%, white 10%); ` : borderColor ? `border: 1px solid ${borderColor}; ` : ``}">
            <slot></slot>
        </button>`;
    }
}