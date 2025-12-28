export { NButton } from './components/n-button.js';
export { NCopy } from './components/n-copy.js';
import { initializeTooltips } from './events/n-tooltip.js';

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTooltips);
} else {
    initializeTooltips();
}