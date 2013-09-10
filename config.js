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
                'id':   'cam',
                'key':  'n74nDv98EFz8hE1wVNoq3MgrU66a9r4M'
            },
            'uri': 'api.summon.serialssolutions.com',
            'version': '/2.0.0/search'
        },
        'aquabrowser': {
            'uri': 'http://search.lib.cam.ac.uk/sru.ashx?'
        }
    }
}
