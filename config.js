var config = module.exports = {};

config.app = {
    'title': 'LibrarySearch'
}

config.server = {
    'port': 7777
};

config.constants = {
    'engines': {
        'aquabrowser': {
            'timeout': 5000,
            'uri': 'http://search.lib.cam.ac.uk/sru.ashx?'
        },
        'summon': {
            'auth': {
                'id':   'cam',
                'key':  'n74nDv98EFz8hE1wVNoq3MgrU66a9r4M'
            },
            'timeout': 10000,
            'uri': 'api.summon.serialssolutions.com',
            'version': '/2.0.0/search'
        }
    },
    'types': {
        'books': {
            'aquabrowser': 'book',
            'summon': 'Book'
        },
        'ebooks': {
            'aquabrowser': 'ebook',
            'summon': 'Ebook'
        },
        'ejournals': {
            'aquabrowser': 'ejournal',
            'summon': 'Ejournal'
        },
        'manuscripts': {
            'aquabrowser': 'manuscript',
            'summon': 'Manuscript'
        },
        'journals': {
            'aquabrowser': 'journal',
            'summon': 'Journal'
        } 
    }
}
