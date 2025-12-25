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
        scaleHover: { type: Boolean },
        dark: { type: Boolean },
    };

    variant: 'normal' | 'info' | 'warning' | 'alert' = 'normal';
    thin = false;
    thick = false;
    outlineOnly = false;
    scaleHover = false;
    rounded = false;
    sharp = false;
    dark = false;
    animation: 'fast' | 'normal' | 'slow' | 'extra-slow' = 'normal';

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

        .animation-fast {
            transition: all 0.10s;
        }

        .animation-normal {
            transition: all 0.25s;
        }

        .animation-slow {
            transition: all 0.45s;
        }

        .animation-extra-slow {
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
        const color = this.variant === 'normal' && this.dark ? 'white' : '';
        return html`<button 
            class="${this.variant}${this.thin && !this.thick ? ' thin' : this.thick ? ' thick' : ''}${this.outlineOnly ? ' outline-only' : ''}${this.scaleHover ? ' scale-hover' : ''}${this.rounded && !this.sharp ? ' rounded' : this.sharp ? ' sharp' : ''} animation-${this.animation}"
            style="${color ? `color: ${color}` : ''}">
            <slot></slot>
        </button>`;
    }
}