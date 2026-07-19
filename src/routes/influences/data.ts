export interface InfluenceItem {
	title: string;
	creator: string;
	year?: number;
	reflection: string;
}

export interface InfluenceCategory {
	type: string;
	items: InfluenceItem[];
}

export const influenceCategories: InfluenceCategory[] = [
	{
		type: "books",
		items: [
			{
				title: "Privacy is Power",
				creator: "Carissa Véliz",
				year: 2022,
				reflection: "Nil."
			},
			{
				title: "Sun and Steel",
				creator: "Yukio Mishima",
				year: 1968,
				reflection: "Nil."
			}
		]
	},
	{
		type: "albums",
		items: [
			{
				title: "Variety",
				creator: "Mariya Takeuchi",
				year: 1984,
				reflection: "Nil."
			},
			{
				title: "hypocondriac",
				creator: "Brakence",
				year: 2022,
				reflection: "Nil."
			}
		]
	},
	{
		type: "games",
		items: [
			{
				title: "Death Stranding",
				creator: "Hideo Kojima",
				year: 2019,
				reflection: "Nil."
			}
		]
	}
];
