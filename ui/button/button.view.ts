namespace $.$$ {
	export class $finn_ui_button extends $.$finn_ui_button {
		sub(): readonly ($mol_view_content)[] {
			if (this.icon()) {
				return [this.icon(), this.title()];
			}
			return [this.title()]
		}
	}
}
