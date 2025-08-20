namespace $.$$ {
	export class $finn_pocket_item extends $.$finn_pocket_item {
		edit_items(): readonly (any)[] {
			return [
				... this.show_title_edit_form() ? [ this.Title_edit_form() ] : [],
			];
		}

		@ $mol_mem
		show_title_edit_form(next?: boolean): boolean {
			if (!!next) {
				this.Item().expanded(false);
				new this.$.$mol_after_frame(() => {
					this.Title_edit_field().focused(true)
				})
				return true;
			}

			return false;
		}

		item_title(): string {
			if (!this.show_title_edit_form()) {
				return this.title()
			}
			else if (this.title_edited_value() == "") {
				return this.title()
			}

			return this.title_edited_value()
		}

		title_save_button_enabled(): boolean {
			return this.title_edited_value() != "";
		}

		cancel_title_editing(next?: any) {
			this.show_title_edit_form(false);
		}
	}
}
