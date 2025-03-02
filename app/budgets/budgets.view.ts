namespace $.$$ {
	export class $finn_app_budgets extends $.$finn_app_budgets {
		income_head(): readonly (any)[] {
			return [this.Income_title(), this.Incomes().Tools()];
		}

		expanse_head(): readonly (any)[] {
			return [this.Expanse_title(), this.Expanses().Tools()];
		}

		incomes_list(): readonly (any)[] {
			return [this.Income_source(0)]  // для примера
		}

		expanses_list(): readonly (any)[] {
			return [this.Expance_category(0)] // для примера
		}

		expanse_subcats(id: any): readonly (any)[] {
			return [this.Expanse_subcat(0)] // для примера
		}
	}
}
