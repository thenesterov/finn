namespace $.$$ {
	export class $finn_ui_budget_expanse extends $.$finn_ui_budget_expanse {
		edit_title_click(next?: Event) {
			this.title_editing_mode_active(true);
		}

		save_editing_title(next?: any) {
			this.title_editing_mode_active(false);
		}

		cancel_editing_title(next?: any) {
			this.title_editing_mode_active(false);
		}
	
		_expanse_title(): string {
			if (!this.title_editing_mode_active()) {
				return this.title()
			}
			else if (this.edited_title_value() == "") {
				return this.title()
			}
			return this.edited_title_value()
		}

		sub(): readonly (any)[] {
			if (!this.title_editing_mode_active()) {
				return super.sub().filter(item => item != this.Editing_title())
			}
			return super.sub();
		}
	}
}
