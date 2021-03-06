import React, { useState } from "react";
import Card, { CardTypes, getAllCardStyles } from "@fdmg/fd-card";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import { createGlobalStyle, css } from "styled-components";

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

export default function SavedArticles(props: Props) {
    const [showAll, setShowAll] = useState(false);

    const onDelete = (e: React.MouseEvent<HTMLElement>) => {
        if (props.onDelete) { props.onDelete(e.currentTarget.getAttribute('data-uuid') as string); }
    };

    const onShowMore = () => {
        setShowAll(true);
    };

    const onShowLess = () => {
        setShowAll(false);
    };

    return (
        <>
            <GlobalStyle/>
            <Card cardStyle={props.cardStyle} className={`fd-saved-articles${props.className ? ` ${props.className}` : ''}${showAll ? ' show-all' : ''}`}>
                <TypoGraphy textStyle="card-h" className="fd-saved-articles-h"><h3>{props.title ? props.title : 'Bewaarde artikelen'}</h3></TypoGraphy>
                <nav>
                    {
                        props.items.map((newsItem, idx: number) => {
                            if (idx > 4) { return null; }
                            return (
                                <div className="news-item" key={newsItem.id}>
                                    <a href={newsItem.url}>
                                        <time>{newsItem.dateTime}</time>
                                        <span>{newsItem.label}</span>
                                    </a>
                                    <i className="icon-times" data-uuid={newsItem.id} onClick={onDelete}/>
                                </div>
                            );
                        })
                    }
                </nav>
                {props.items.length > 4 ?
                    <>
                        <nav className="optional-content">
                            {
                                props.items.map((newsItem, idx: number) => {
                                    if (idx <= 4) { return null; }
                                    return (
                                        <div className="news-item" key={newsItem.id}>
                                            <a href={newsItem.url}>
                                                <time>{newsItem.dateTime}</time>
                                                <span>{newsItem.label}</span>
                                            </a>
                                            <i className="icon-times" data-uuid={newsItem.id} onClick={onDelete}/>
                                        </div>
                                    );
                                })
                            }
                        </nav>
                        <span className="show-less" onClick={onShowLess}><i className="icon-chevron-up"/><div>Toon minder</div></span>
                        <span className="show-more" onClick={onShowMore}><div>Toon meer</div><i className="icon-chevron-down"/></span>
                    </> : null}
            </Card>
        </>
    );
}

const styles = css`
.fd-saved-articles {
    .card-h.fd-saved-articles-h,
    .news-item > a {
        padding: 12px 10px;
        @media only screen and (min-width: 641px) {
            padding: 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 12px 15px;
        }
    }

    .news-item {
        display: flex;
        align-items: stretch;
        border-top: 1px solid rgba(0,0,0,0.1);
        &:hover a {
            color: #49a4a2;
        }
        i {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 44px;
            cursor: pointer;
            &:hover {
                background: rgba(0,0,0,0.04);
            }
        }
    }
    a {
        text-decoration: none;
        flex: 1 1 auto;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
        color: #191919;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.0625rem;
        }
    }
    time {
        color: #677381;
        display: block;
        font-size: 13px;
        @media only screen and (min-width: 641px) {
            font-size: 14px;
        }
    }

    i {
        color: #677381;
        display: flex;
        align-content: center;
        justify-content: center;
        user-select: none;
    }

    .show-less,
    .optional-content {
        display: none;
    }

    .show-more {
        display: flex;
    }

    &.show-all {
        .show-less {
            display: flex;
        }
        .optional-content {
            display: block;
        }
        .show-more {
            display: none;
        }
    }

    .show-more, .show-less {
        user-select: none;
        border-top: 1px solid rgba(0,0,0,0.1);
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        padding: .5rem;
        font-family: 'ProximaNovaRegular',Helvetica,sans-serif;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.0625rem;
        }
        &:hover {
            background: rgba(0, 0, 0, 0.04);
        }
        div {
            text-align: center;
        }
    }
}
`;

export const SavedArticlesStyle = css`
${getAllCardStyles()}
${getAllTextStyles(['card-h'])}
${styles}
`;

const GlobalStyle = createGlobalStyle`${SavedArticlesStyle}`;
