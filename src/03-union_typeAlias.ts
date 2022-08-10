let username: string = "David";
let pageName: string | number = "1";
let errorMessage: string | null = null;

// =
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null

interface UserInterface2 {
    id: ID; // tipo ID, no tipo string
    name: string;
    surname: string;
}
const popularTags: PopularTag[] = ["dragon", "coffee"];
const dragonsTag: MaybePopularTag = "dragon"

let user3: UserInterface2 | null = null;
