import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('n-button')
export class NButton extends LitElement {
    static properties = {
        style: { type: String },
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
    background = '';
    borderColor = '';
    textColor = '';

    static styles = css`
        button {
            padding: 8px 16px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            border-radius: 2px;
            transition: all 0.25s;
            min-width: 100px;
            max-width: 200px;
            text-wrap: pretty;
            user-select: none;
        }

        button:not(.nb-dp):not(.nb-dont-punch):active {
            transition: transform 0.15s linear;
            scale: 0.97;
        }

        button.nb-info {
            background-color: #007bff;
            color: white;
            border: 1px solid #2c92ffff;
        }

        button.nb-info:hover {
            background-color: #268fffff;
            border: 1px solid #4da3ffff;
        }

        button.nb-success {
            background-color: #00ff55ff;
            color: #242424ff;
            border: 1px solid #2cff72ff;
        }

        button.nb-success:hover {
            background-color: #26ff67ff;
            border: 1px solid #93ffb7ff;
        }

        button,
        button.nb-normal {
            background-color: #e0e0e0;
            color: #242424ff;
            border: 1px solid #ddd;
        }

        button:hover,
        button.nb-normal:hover {
            background-color: #f5f5f5ff;
            border: 1px solid #ffffffff;
        }

        button.nb-warning {
            background-color: rgba(241, 132, 7, 1);
            color: white;
            border: 1px solid rgba(248, 142, 42, 1);
        }

        button.nb-warning:hover {
            background-color: rgba(240, 162, 16, 1);
            border: 1px solid rgba(255, 184, 53, 1);
        }

        button.nb-alert {
            background-color: rgba(233, 30, 23, 1);
            color: white;
            border: 1px solid rgba(248, 49, 42, 1);
        }

        button.nb-alert:hover {
            background-color: rgba(248, 44, 44, 1);
            border: 1px solid rgba(255, 76, 76, 1);
        }

        .nb-dynamic {
            min-width: unset !important;
            max-width: unset !important;
        }

        .nb-nowrap {
            text-wrap: nowrap !important;
        }

        .nb-thin {
            padding: 4px 8px;
        }

        .nb-thick {
            padding: 12px 24px !important;
        }

        .nb-outline {
            background-color: transparent !important;
        }

        .nb-scale:hover {
            transform: scale(1.05);
        }

        .nb-fast {
            transition: all 0.10s !important;
        }

        .nb-slow {
            transition: all 0.45s !important;
        }

        .nb-very-slow {
            transition: all 1s !important;
        }

        .nb-dark {
            color: white !important;
        }

        .nb-rounded {
            border-radius: 4px;
        }

        .nb-sharp {
            border-radius: 0 !important;
        }

        @media screen and (width <= 1024px) {
            button {
                font-size: 12px;
            }   
        }
    `;

    private getButtonClasses() {
        const classes: string[] = [];

        // Add nb- prefixed classes from the element
        const elementClasses = this.getAttribute('class')?.split(' ') || [];
        elementClasses.forEach(cl => {
            if (cl.startsWith('nb-')) {
                classes.push(cl);
            }
        });

        return classes.join(' ');
    }

    render() {
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
            class="${this.getButtonClasses()}"
            style="${this.style}">
            <slot></slot>
        </button>`;
    }
}