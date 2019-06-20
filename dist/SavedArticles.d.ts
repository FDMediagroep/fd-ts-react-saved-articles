import { CardTypes } from "@fdmg/fd-card";
interface NewsItem {
    id: string;
    dateTime: string;
    label: string;
    url: string;
}
export interface Props {
    cardStyle: CardTypes;
    className?: string;
    items: NewsItem[];
    onDelete?: (id: string) => void;
    title?: string;
}
export default function SavedArticles(props: Props): JSX.Element;
export declare const SavedArticlesStyle: import("styled-components").FlattenSimpleInterpolation;
export {};
