import '../button/button-icon.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
import { VisibleOnAncestorMixin, visibleOnAncestorStyles } from '../../mixins/visible-on-ancestor-mixin.js';
import { DropdownOpenerMixin } from './dropdown-opener-mixin.js';
import { dropdownOpenerStyles } from './dropdown-opener-styles.js';

class DropdownMore extends DropdownOpenerMixin(VisibleOnAncestorMixin(LitElement)) {

	static get properties() {
		return {
			/**
			 * Label for the more button (required for accessibility).
			 */
			text: {
				type: String
			},
			translucent: {
				type: Boolean
			},
		};
	}

	static get styles() {
		return [dropdownOpenerStyles, visibleOnAncestorStyles, css`
			:host {
				display: inline-block;
			}
		`];
	}
	constructor() {
		super();
		this.translucent = false;
	}

	render() {
		return html`
			<d2l-button-icon aria-label=${this.text} ?disabled=${this.disabled} icon="tier1:more" text=${this.text} ?translucent=${this.translucent}>
			</d2l-button-icon>
			<slot></slot>
		`;
	}

	/**
	 * Gets the "d2l-button-icon" opener element (required by dropdown-opener-mixin).
	 * @return {HTMLElement}
	 */
	getOpenerElement() {
		return this.shadowRoot.querySelector('d2l-button-icon');
	}

}
customElements.define('d2l-dropdown-more', DropdownMore);
