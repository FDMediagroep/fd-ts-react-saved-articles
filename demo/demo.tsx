import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import SavedArticles from '../src/SavedArticles';
import { createGlobalStyle } from 'styled-components';
import uniqid from 'uniqid';

const GlobalStyle = createGlobalStyle`
    .content-area {
        &.persoonlijk {
            background-color: white;
        }

        aside {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }
`;

class App extends PureComponent<any, any> {
    state: any = {
        checked: false,
        news: [{
            id: uniqid(),
            dateTime: `11:18`,
            label: 'Trump vraagt om politieke samenwerking in State of the Union',
            url: 'https://fd.nl/economie-politiek/1288267/trump-vraagt-om-politieke-samenwerking-in-state-of-the-union',
        }, {
            id: uniqid(),
            dateTime: `12:19`,
            label: 'Leraren slaan alarm: scholen stoppen met informatica in de bovenbouw',
            url: 'https://fd.nl/economie-politiek/1287621/leraren-slaan-alarm-scholen-stoppen-met-informatica-in-de-bovenbouw'
        }, {
            id: uniqid(),
            dateTime: `13:20`,
            label: 'Verschillen tussen eurolanden gaan weer opspelen ',
            url: 'https://fd.nl/achtergrond/1288289/verschillen-tussen-eurolanden-gaan-weer-opspelen'
        }, {
            id: uniqid(),
            dateTime: `14:21`,
            label: 'ING boekt meer winst dan verwacht',
            url: 'https://fd.nl/ondernemen/1288060/ing-boekt-meer-winst-dan-verwacht'
        }, {
            id: uniqid(),
            dateTime: `Vandaag`,
            label: 'ING blinkt uit op hoger Damrak',
            url: 'https://fd.nl/beurs/1288359/beleggers-reageren-op-cijfers-ing-en-tomtom'
        }, {
            id: uniqid(),
            dateTime: `Gisteren`,
            label: 'Vertrouwen van werknemers is kostbaar goed dat menige werkgever keer op keer blijft beschamen',
            url: 'https://fd.nl/opinie/1288043/vertrouwen-van-werknemers-is-kostbaar-goed-dat-menige-werkgever-keer-op-keer-blijft-beschamen'
        }, {
            id: uniqid(),
            dateTime: `Eergisteren`,
            label: 'Verschillen tussen eurolanden gaan weer opspelen',
            url: 'https://fd.nl/achtergrond/1288289/verschillen-tussen-eurolanden-gaan-weer-opspelen'
        }, {
            id: uniqid(),
            dateTime: `Vorige week`,
            label: 'Politieke druk op Vestager is onverteerbaar',
            url: 'https://fd.nl/economie-politiek/1288325/politieke-druk-op-vestager-is-onverteerbaar'
        }, {
            id: uniqid(),
            dateTime: `Afgelopen maand`,
            label: 'Leraren slaan alarm: scholen stoppen met informatica in de bovenbouw',
            url: 'https://fd.nl/economie-politiek/1287621/leraren-slaan-alarm-scholen-stoppen-met-informatica-in-de-bovenbouw'
        }, {
            id: uniqid(),
            dateTime: `Vorig jaar`,
            label: 'Zorgsector kan kunstmatige intelligentie veel slimmer inzetten',
            url: 'https://fd.nl/opinie/1288142/zorgsector-kan-kunstmatige-intelligentie-veel-slimmer-inzetten'
        }]
    }

    onDelete = (id: string) => {
        this.setState({
            news: this.state.news.filter((savedArticle: any) => savedArticle.id !== id)
        });
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <SavedArticles
                    cardStyle={this.props.cardStyle}
                    items={this.state.news}
                    onDelete={this.onDelete}
                />
            </>
        );
    }
}

ReactDOM.render(<>
    <div>
        <App cardStyle="default"/>
    </div>
</>,
document.querySelector('.overview aside'));

ReactDOM.render(<>
    <div>
        <App cardStyle="persoonlijk"/>
    </div>
</>,
document.querySelector('.persoonlijk aside'));

