import OsfSerializer from './osf-serializer';

export default OsfSerializer.extend({
    serialize: function(snapshot, options) {
        // Restore relationships to serialized data
        var serialized = this._super(snapshot, options);
        // APIv2 expects contributor information to be nested under relationships.
        serialized.data.relationships = {
            users: {
                data: {
                    id: serialized.data.id,
                    type: 'users'
                }
            }
        };
        return serialized;
    },
});