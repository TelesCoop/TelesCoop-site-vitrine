declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"le-tltravail-chez-telescoop.md": {
	id: "le-tltravail-chez-telescoop.md";
  slug: "le-tltravail-chez-telescoop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"palettes": {
"colorblind.md": {
	id: "colorblind.md";
  slug: "colorblind";
  body: string;
  collection: "palettes";
  data: InferEntrySchema<"palettes">
} & { render(): Render[".md"] };
"monochrome.md": {
	id: "monochrome.md";
  slug: "monochrome";
  body: string;
  collection: "palettes";
  data: InferEntrySchema<"palettes">
} & { render(): Render[".md"] };
"pale.md": {
	id: "pale.md";
  slug: "pale";
  body: string;
  collection: "palettes";
  data: InferEntrySchema<"palettes">
} & { render(): Render[".md"] };
"peps.md": {
	id: "peps.md";
  slug: "peps";
  body: string;
  collection: "palettes";
  data: InferEntrySchema<"palettes">
} & { render(): Render[".md"] };
};
"projects": {
"aktivisda.md": {
	id: "aktivisda.md";
  slug: "aktivisda";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"akuo.md": {
	id: "akuo.md";
  slug: "akuo";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"backmarket-comparateur.md": {
	id: "backmarket-comparateur.md";
  slug: "backmarket-comparateur";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"dataphonia.md": {
	id: "dataphonia.md";
  slug: "dataphonia";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"dmomtre.md": {
	id: "dmomtre.md";
  slug: "dmomtre";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"evidence-orthophonie.md": {
	id: "evidence-orthophonie.md";
  slug: "evidence-orthophonie";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"excellent-excdents.md": {
	id: "excellent-excdents.md";
  slug: "excellent-excdents";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"greenmenu.md": {
	id: "greenmenu.md";
  slug: "greenmenu";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"iarbre.md": {
	id: "iarbre.md";
  slug: "iarbre";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"indice-de-fragilit-numrique.md": {
	id: "indice-de-fragilit-numrique.md";
  slug: "indice-de-fragilit-numrique";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"la-base.md": {
	id: "la-base.md";
  slug: "la-base";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"le-mmo-des-fresques.md": {
	id: "le-mmo-des-fresques.md";
  slug: "le-mmo-des-fresques";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"les-tablis.md": {
	id: "les-tablis.md";
  slug: "les-tablis";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"mangmap.md": {
	id: "mangmap.md";
  slug: "mangmap";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"mesaidesjeunes.md": {
	id: "mesaidesjeunes.md";
  slug: "mesaidesjeunes";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"msf-campagne-de-dons.md": {
	id: "msf-campagne-de-dons.md";
  slug: "msf-campagne-de-dons";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"openfoodfacts-searchalicious.md": {
	id: "openfoodfacts-searchalicious.md";
  slug: "openfoodfacts-searchalicious";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"openfoodfacts-webcomponents.md": {
	id: "openfoodfacts-webcomponents.md";
  slug: "openfoodfacts-webcomponents";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"socit-numrique.md": {
	id: "socit-numrique.md";
  slug: "socit-numrique";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"terre-de-liens-campagne-de-donation-2024.md": {
	id: "terre-de-liens-campagne-de-donation-2024.md";
  slug: "terre-de-liens-campagne-de-donation-2024";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"team": {
"antoine.md": {
	id: "antoine.md";
  slug: "antoine";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"camille.md": {
	id: "camille.md";
  slug: "camille";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"clment.md": {
	id: "clment.md";
  slug: "clment";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
"maxime-bellec.md": {
	id: "maxime-bellec.md";
  slug: "maxime-bellec";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".md"] };
};
"testimonials": {
"anthakarana.md": {
	id: "anthakarana.md";
  slug: "anthakarana";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"les-etablis.md": {
	id: "les-etablis.md";
  slug: "les-etablis";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"medecins-sans-frontieres.md": {
	id: "medecins-sans-frontieres.md";
  slug: "medecins-sans-frontieres";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"open-food-facts.md": {
	id: "open-food-facts.md";
  slug: "open-food-facts";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
"terre-de-liens.md": {
	id: "terre-de-liens.md";
  slug: "terre-de-liens";
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"data": {
"404": {
	id: "404";
  collection: "data";
  data: any
};
"blog": {
	id: "blog";
  collection: "data";
  data: any
};
"categories": {
	id: "categories";
  collection: "data";
  data: any
};
"cooperative": {
	id: "cooperative";
  collection: "data";
  data: any
};
"employees": {
	id: "employees";
  collection: "data";
  data: any
};
"engagements": {
	id: "engagements";
  collection: "data";
  data: any
};
"extra": {
	id: "extra";
  collection: "data";
  data: any
};
"filters": {
	id: "filters";
  collection: "data";
  data: any
};
"home": {
	id: "home";
  collection: "data";
  data: any
};
"measures": {
	id: "measures";
  collection: "data";
  data: any
};
"metadata": {
	id: "metadata";
  collection: "data";
  data: any
};
"projects": {
	id: "projects";
  collection: "data";
  data: any
};
"references": {
	id: "references";
  collection: "data";
  data: any
};
"services": {
	id: "services";
  collection: "data";
  data: any
};
"skills": {
	id: "skills";
  collection: "data";
  data: any
};
"values": {
	id: "values";
  collection: "data";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
