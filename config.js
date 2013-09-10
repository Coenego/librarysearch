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
                'id':   '[ID]',
                'key':  '[KEY]'
            },
            'uri': 'api.summon.serialssolutions.com',
            'version': '/2.0.0/search'
        },
        'aquabrowser': {
            'uri': 'http://search.lib.cam.ac.uk/sru.ashx?'
        }
    }
}
