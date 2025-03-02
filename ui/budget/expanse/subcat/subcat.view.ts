namespace $.$$ {
	export class $finn_ui_budget_expanse_subcat extends $.$finn_ui_budget_expanse_subcat {
		edit_title_click(next?: Event) {
			this.title_editing_mode_active(true);
		}

		save_editing_title(next?: any) {
			this.title_editing_mode_active(false);
		}

		cancel_editing_title(next?: any) {
			this.title_editing_mode_active(false);
		}

		_subcat_title(): string {
			if (!this.title_editing_mode_active()) {
				return this.title()
			}
			else if (this.edited_title_value() == "") {
				return this.title()
			}
			return this.edited_title_value()
		}

		edit_total_click(next?: Event) {
			this.total_editing_mode_active(true);
		}

		save_editing_total(next?: any) {
			this.total_editing_mode_active(false);
		}

		cancel_editing_total(next?: any) {
			this.total_editing_mode_active(false);
		}

		@ $mol_mem
		edited_total_value(next?: number): number {
			return next ?? this.total();
		}

		_subcat_total(): number {
			if (!this.total_editing_mode_active()) {
				return this.total()
			}

			return this.edited_total_value();
		}

		sub(): readonly (any)[] {
			let sub = [... super.sub()];

			if (!this.title_editing_mode_active()) {
				sub = sub.filter(item => item != this.Editing_title())
			}

			if (!this.total_editing_mode_active()) {
				sub = sub.filter(item => item != this.Editing_total())
			}

			return sub;
		}
	}
}
