> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-saved-articles.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-saved-articles)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-saved-articles/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-saved-articles?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-saved-articles.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-saved-articles)


# fd-saved-articles
FD-themed saved articles.

# Installation
* Run `npm i -D @fdmg/fd-saved-articles`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/saved-articles/demo.html)

# Usage
```
import SavedArticles from '@fdmg/fd-saved-articles';
...
<SavedArticles
    cardStyle="default"
    items={[{
        id: '1',
        dateTime: `11:18`,
        label: 'Trump vraagt om politieke samenwerking in State of the Union',
        url: 'https://fd.nl/economie-politiek/1288267/trump-vraagt-om-politieke-samenwerking-in-state-of-the-union',
    }, {
        id: '2',
        dateTime: `12:19`,
        label: 'Leraren slaan alarm: scholen stoppen met informatica in de bovenbouw',
        url: 'https://fd.nl/economie-politiek/1287621/leraren-slaan-alarm-scholen-stoppen-met-informatica-in-de-bovenbouw'
    }]}
    onDelete={() => {}}
/>
```
