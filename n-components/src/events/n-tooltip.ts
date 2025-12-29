const maxTooltipLength = 30;

if (!document.querySelector('style[data-tooltip]')) {
    const styleEle = document.createElement('style');

    styleEle.setAttribute('data-tooltip', 'true');
    styleEle.textContent = `
        .tooltip {
            font-family: system-ui, sans-serif;
            text-wrap: nowrap;
            z-index: 9999999999;
            font-size: 1rem;
            transition: opacity 0.25s ease-in-out;
            pointer-events: none;
            opacity: 0;
            position: fixed;
            background: white;
            color: black;
            outline: 1px solid black;
            padding: 4px 8px;
            font-weight: 400;
            border-radius: 5px;
            max-width: 300px;
        }

        .tooltip.nt-dark {
            background: #1e1e1e;
            color: #ffffff;
            outline: 1px solid #444444;
        }

        .tooltip.nt-fast {
            transition: opacity 0.15s ease-in-out;
        }

        .tooltip.nt-slow {
            transition: opacity 0.5s ease-in-out;
        }

        .tooltip.nt-very-slow {
            transition: opacity 1s ease-in-out;
        }
    `;

    document.head.appendChild(styleEle);
}

function findAllNClasses(classlist: string) {
    const classes = classlist.split(' ');
    const classesToAdd: string[] = [];

    classes.forEach(cl => {
        if (cl.startsWith('nt-')) {
            classesToAdd.push(cl);
        }
    });

    return classesToAdd;
}

function calculateTooltipPosition(mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const margin = 10;
    const cursorOffset = 15;

    let top = mouseY - tooltipHeight - cursorOffset;
    let left = mouseX - (tooltipWidth / 2);

    if (top < margin) {
        top = mouseY + cursorOffset;
    }

    if (top + tooltipHeight > viewportHeight - margin) {
        top = mouseY - tooltipHeight - cursorOffset;
        if (top < margin) {
            top = margin;
        }
    }

    if (left < margin) {
        left = margin;
    }

    if (left + tooltipWidth > viewportWidth - margin) {
        left = viewportWidth - tooltipWidth - margin;
    }

    return { top, left };
}

function showTooltip(target: HTMLElement, textToShow: string | null, mouseX: number, mouseY: number) {
    if (textToShow) {
        const targetElement = target;
        const toolTip = document.createElement('div');

        toolTip.classList.add('tooltip');

        const classesToAdd = findAllNClasses(targetElement.classList.toString());

        classesToAdd.forEach(cl => {
            toolTip.classList.add(cl);
        });

        toolTip.innerHTML = textToShow;

        if (textToShow.length >= maxTooltipLength) {
            toolTip.style.textWrap = 'pretty';
        }

        toolTip.style.visibility = 'hidden';
        toolTip.style.opacity = '0';
        document.body.appendChild(toolTip);

        const tooltipRect = toolTip.getBoundingClientRect();
        const tooltipWidth = tooltipRect.width;
        const tooltipHeight = tooltipRect.height;
        const position = calculateTooltipPosition(mouseX, mouseY, tooltipWidth, tooltipHeight);

        toolTip.style.top = `${position.top}px`;
        toolTip.style.left = `${position.left}px`;
        toolTip.style.visibility = 'visible';

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const newPosition = calculateTooltipPosition(
                moveEvent.clientX,
                moveEvent.clientY,
                tooltipWidth,
                tooltipHeight
            );
            toolTip.style.top = `${newPosition.top}px`;
            toolTip.style.left = `${newPosition.left}px`;
        };

        targetElement.addEventListener('mousemove', handleMouseMove);

        const closeTooltip = () => {
            targetElement.removeEventListener('mousemove', handleMouseMove);
            targetElement.removeEventListener('mouseleave', closeTooltip);
            document.removeEventListener('scroll', closeTooltip, true);
            toolTip.style.opacity = '0';
            setTimeout(() => {
                if (toolTip.parentElement) {
                    toolTip.remove();
                }
            }, 160);
        };

        setTimeout(() => {
            if (toolTip) {
                toolTip.style.opacity = '1';
            }
        }, 10);

        targetElement.addEventListener("mouseleave", closeTooltip);
        document.addEventListener('scroll', closeTooltip, true);

        targetElement.addEventListener("focusout", function focusClosed() {
            if (target.classList.contains('focus-hint')) {
                toolTip.style.opacity = '0';
                setTimeout(() => {
                    toolTip.remove();
                    targetElement.removeEventListener("mouseleave", focusClosed);
                }, 160);
            }
        });
    }
}

export function initializeTooltips() {
    document.addEventListener('mouseenter', (e) => {
        const target = e.target as HTMLElement;
        const mouseEvent = e as MouseEvent;

        if (target instanceof HTMLElement && target.hasAttribute('n-tooltip')) {
            showTooltip(target, target.getAttribute('n-tooltip'), mouseEvent.clientX, mouseEvent.clientY);
        }
    }, true);

    document.addEventListener('touchstart', (e) => {
        const target = e.target as HTMLElement;
        const touch = e.touches[0];

        if (target instanceof HTMLElement && target.hasAttribute('n-tooltip')) {
            showTooltip(target, target.getAttribute('n-tooltip'), touch.clientX, touch.clientY);
        }
    }, true);

    document.addEventListener('mouseleave', (e) => {
        const target = e.target as HTMLElement;

        if (!target) {

        }
    });
}