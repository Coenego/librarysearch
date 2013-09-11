var config = module.exports = {};

config.app = {
    'title': 'LibrarySearch'
}

config.server = {
    'port': 1234
};

config.constants = {
    'engines': {
        'summon': {
            'auth': {
                'id':   '',
                'key':  ''
            },
            'timeout': 10000,
            'uri': 'api.summon.serialssolutions.com',
            'version': '/2.0.0/search'
        },
        'aquabrowser': {
            'timeout': 5000,
            'uri': 'http://search.lib.cam.ac.uk/sru.ashx?'
        }
    }
}
