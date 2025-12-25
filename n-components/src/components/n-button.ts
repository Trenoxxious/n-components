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
        scaleHover: { type: Boolean },
    };

    variant: 'primary' | 'secondary' | 'warning' = 'primary';
    thin = false;
    thick = false;
    outlineOnly = false;
    scaleHover = false;
    animation: 'fast' | 'normal' | 'slow' | 'extra-slow' = 'normal';

    static styles = css`
        button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all;
            animation-duration: 0.3s;
        }

        button.primary {
            background-color: #007bff;
            color: white;
            border: 1px solid #2c92ffff;
        }

        button.primary:hover {
            background-color: #0056b3;
        }

        button.secondary {
            background-color: #f0f0f0;
            color: #333;
            border: 1px solid #ddd;
        }

        button.secondary:hover {
            background-color: #e0e0e0;
        }

        button.warning {
            background-color: rgba(233, 100, 23, 1);
            color: white;
            border: 1px solid rgba(248, 142, 42, 1);
        }

        button.warning:hover {
            background-color: rgba(248, 177, 44, 1);
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

        @media screen and (width <= 1024px) {
            button {
                font-size: 12px;
            }   
        }
    `;

    render() {
        return html`<button class="${this.variant}${this.thin && !this.thick ? ' thin' : this.thick ? ' thick' : ''}${this.outlineOnly ? ' outline-only' : ''}${this.scaleHover ? ' scale-hover' : ''} animation-${this.animation}"><slot></slot></button>`;
    }
}