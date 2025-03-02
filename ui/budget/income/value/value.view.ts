namespace $.$$ {
	export class $finn_ui_budget_income_value extends $.$finn_ui_budget_income_value {
		value_presentation(next?: string): string {
			const prettified_value = this.value().toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

			if (this.value() > 0) {
				return `+ ${prettified_value} ${this.currency()}`
			}
			else {
				return `${prettified_value} ${this.currency()}`
			}
		}

		value_color(next?: string): string {
			if (this.value() > 0) {
				return `var(--mol_theme_control)`;
			}
			else {
				return `var(--mol_theme_shade)`;
			}
		}
	}
}
