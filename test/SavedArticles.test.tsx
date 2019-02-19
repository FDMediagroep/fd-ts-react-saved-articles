import TestRenderer from 'react-test-renderer';
import SavedArticles from '../src/SavedArticles';
import React from 'react';

describe('SavedArticles', () => {
    const news = [{
        id: '1',
        dateTime: `11:18`,
        label: 'Trump vraagt om politieke samenwerking in State of the Union',
        url: 'https://fd.nl/economie-politiek/1288267/trump-vraagt-om-politieke-samenwerking-in-state-of-the-union',
    }, {
        id: '2',
        dateTime: `12:19`,
        label: 'Leraren slaan alarm: scholen stoppen met informatica in de bovenbouw',
        url: 'https://fd.nl/economie-politiek/1287621/leraren-slaan-alarm-scholen-stoppen-met-informatica-in-de-bovenbouw'
    }, {
        id: '3',
        dateTime: `13:20`,
        label: 'Verschillen tussen eurolanden gaan weer opspelen ',
        url: 'https://fd.nl/achtergrond/1288289/verschillen-tussen-eurolanden-gaan-weer-opspelen'
    }, {
        id: '4',
        dateTime: `14:21`,
        label: 'ING boekt meer winst dan verwacht',
        url: 'https://fd.nl/ondernemen/1288060/ing-boekt-meer-winst-dan-verwacht'
    }, {
        id: '5',
        dateTime: `Vandaag`,
        label: 'ING blinkt uit op hoger Damrak',
        url: 'https://fd.nl/beurs/1288359/beleggers-reageren-op-cijfers-ing-en-tomtom'
    }, {
        id: '6',
        dateTime: `Gisteren`,
        label: 'Vertrouwen van werknemers is kostbaar goed dat menige werkgever keer op keer blijft beschamen',
        url: 'https://fd.nl/opinie/1288043/vertrouwen-van-werknemers-is-kostbaar-goed-dat-menige-werkgever-keer-op-keer-blijft-beschamen'
    }, {
        id: '7',
        dateTime: `Eergisteren`,
        label: 'Verschillen tussen eurolanden gaan weer opspelen',
        url: 'https://fd.nl/achtergrond/1288289/verschillen-tussen-eurolanden-gaan-weer-opspelen'
    }, {
        id: '8',
        dateTime: `Vorige week`,
        label: 'Politieke druk op Vestager is onverteerbaar',
        url: 'https://fd.nl/economie-politiek/1288325/politieke-druk-op-vestager-is-onverteerbaar'
    }, {
        id: '9',
        dateTime: `Afgelopen maand`,
        label: 'Leraren slaan alarm: scholen stoppen met informatica in de bovenbouw',
        url: 'https://fd.nl/economie-politiek/1287621/leraren-slaan-alarm-scholen-stoppen-met-informatica-in-de-bovenbouw'
    }, {
        id: '10',
        dateTime: `Vorig jaar`,
        label: 'Zorgsector kan kunstmatige intelligentie veel slimmer inzetten',
        url: 'https://fd.nl/opinie/1288142/zorgsector-kan-kunstmatige-intelligentie-veel-slimmer-inzetten'
    }];

    test('renders correctly', () => {
        let savedArticles = TestRenderer.create(<SavedArticles
            cardStyle="default"
            items={news}
            onDelete={() => {}}
        />);
        expect(savedArticles.toJSON()).toMatchSnapshot();

        savedArticles = TestRenderer.create(<SavedArticles
            cardStyle="default"
            items={news}
            onDelete={() => {}}
        />);
        expect(savedArticles.toJSON()).toMatchSnapshot();
    });

    test('renders persoonlijk correctly', () => {
        let savedArticles = TestRenderer.create(<SavedArticles
            cardStyle="persoonlijk"
            items={news}
            onDelete={() => {}}
        />);
        expect(savedArticles.toJSON()).toMatchSnapshot();

        savedArticles = TestRenderer.create(<SavedArticles
            cardStyle="persoonlijk"
            items={news}
            onDelete={() => {}}
        />);
        expect(savedArticles.toJSON()).toMatchSnapshot();
    });
});
