namespace $.$$ {
	export class $finn_ui_budget_income extends $.$finn_ui_budget_income {
		edit_title_click(next?: Event) {
			this.title_editing_mode_active(true);
		}

		save_editing_title(next?: any) {
			this.title_editing_mode_active(false);
		}

		cancel_editing_title(next?: any) {
			this.title_editing_mode_active(false);
		}

		_income_title(): string {
			if (this.title_editing_mode_active() && this.edited_title_value() != "") {
				return this.edited_title_value()
			}

			return this.title()
		}

		sub(): readonly (any)[] {
			if (!this.title_editing_mode_active()) {
				return super.sub().filter(item => item != this.Editing_title())
			}

			return super.sub();
		}
	}
}
