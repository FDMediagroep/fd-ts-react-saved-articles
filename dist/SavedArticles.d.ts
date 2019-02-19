import React, { PureComponent } from "react";
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
export default class SavedArticles extends PureComponent<Props, any> {
    state: any;
    onDelete: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onShowMore: () => void;
    onShowLess: () => void;
    render(): JSX.Element;
}
export declare const SavedArticlesStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export {};
