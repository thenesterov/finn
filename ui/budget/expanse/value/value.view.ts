namespace $.$$ {
	export class $finn_ui_budget_expanse_value extends $.$finn_ui_budget_expanse_value {
		value_presentation(next?: string): string {
			let presentation = `${this.value()} / ${this.total()} ${this.currency()}`;

			if (this.value() > this.total()) {
				presentation = "‼️ " + presentation;
			}

			return presentation;
		}

		value_color(next?: string): string {
			const control_color = "var(--mol_theme_control)";
			const shade_color = "var(--mol_theme_shade)";
			const red_color = "var(--mol_theme_current)";

			if (this.total() == 0) {
				if (this.value() == 0) {
					return shade_color;
				}
				return red_color;
			}

			const percent = (this.value() / this.total()) * 100;

			if (percent >= 100) {
				return red_color;
			}

			const result = `color-mix(in oklab, ${control_color} ${100-percent}%, ${red_color} ${percent}%)`
			return result
		}
	}
}
