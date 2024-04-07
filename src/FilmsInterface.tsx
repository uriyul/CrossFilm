interface FilmsRoot {
  data: Data;
  extensions: Extensions;
}
interface Extensions {
  disclaimer: string;
  experimentalFields: ExperimentalFields;
}
interface ExperimentalFields {
  janet: any[];
  markdown: any[];
  ratings: any[];
  video: any[];
}
interface Data {
  name: Name;
}
interface Name {
  id: string;
  nameText: NameText;
  primaryImage: PrimaryImage;
  actress_credits?: Actorcredits;
  actor_credits?: Actorcredits;
}
interface Actorcredits {
  total: number;
  edges: Edge3[];
  pageInfo: PageInfo;
}
interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
}
interface Edge3 {
  node: FilmNode;
}
interface FilmNode {
  attributes?: NameText[];
  category: Category;
  characters?: Character[];
  episodeCredits: EpisodeCredits;
  title: Title;
}
interface Title {
  id: string;
  canRate: CanRate;
  certificate?: Certificate;
  originalTitleText: NameText;
  titleText: NameText;
  titleType: TitleType;
  primaryImage?: PrimaryImage2;
  ratingsSummary: RatingsSummary;
  latestTrailer?: LatestTrailer;
  releaseYear: YearRange;
  runtime?: Runtime;
  series?: any;
  titleGenres: TitleGenres;
  productionStatus: ProductionStatus;
}
interface ProductionStatus {
  currentProductionStage: Category;
}
interface TitleGenres {
  genres: Genre[];
}
interface Genre {
  genre: NameText;
}
interface Runtime {
  seconds: number;
}
interface LatestTrailer {
  id: string;
}
interface RatingsSummary {
  aggregateRating: number;
  voteCount: number;
}
interface PrimaryImage2 {
  id: string;
  url: string;
  height: number;
  width: number;
  caption: Caption;
}
interface TitleType {
  canHaveEpisodes: boolean;
  displayableProperty: DisplayableProperty;
  text: string;
  id: string;
}
interface Certificate {
  rating: string;
}
interface CanRate {
  isRatable: boolean;
}
interface EpisodeCredits {
  total: number;
  yearRange?: YearRange;
  displayableYears: DisplayableYears;
  displayableSeasons: DisplayableSeasons;
}
interface DisplayableSeasons {
  total: number;
  edges: Edge2[];
}
interface Edge2 {
  node: Node2;
}
interface Node2 {
  season: string;
  displayableProperty: DisplayableProperty;
}
interface DisplayableYears {
  total: number;
  edges: Edge[];
}
interface Edge {
  node: Node;
}
interface Node {
  year: string;
  displayableProperty: DisplayableProperty;
}
interface DisplayableProperty {
  value: Caption;
}
interface YearRange {
  year: number;
  endYear?: number;
}
interface Character {
  name: string;
}
interface Category {
  id: string;
  text: string;
}
interface PrimaryImage {
  caption: Caption;
  height: number;
  width: number;
  url: string;
}
interface Caption {
  plainText: string;
}
interface NameText {
  text: string;
}

export default FilmsRoot;
export type { FilmsRoot };
export type { FilmNode };
export type { Title };
export type { Actorcredits };
