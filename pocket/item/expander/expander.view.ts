namespace $.$$ {
	export class $finn_pocket_item_expander extends $.$finn_pocket_item_expander {
		@ $mol_mem
		rows() {
			return [
				this.Label(),
				... this.expanded() ? [ this.Content() ] : []
			]
		}

		expandable() {
			return this.content().length > 0
		}

		title_margin_style() {
			return this.expandable() ? 'calc(-1 * var(--mol_gap_block))' : 'calc(-2 * var(--mol_gap_block))'
		}
	}
}

