export interface IExpense {
  category: string;
  date: Date;
  sum: number;
  icon: string;
}

export interface ICategory {
  icon: string,
  name: string,
}
