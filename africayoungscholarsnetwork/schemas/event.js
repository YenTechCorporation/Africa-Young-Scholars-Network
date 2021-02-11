export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Event Name',
            type: 'string',
            validation: Rule=> Rule.required().min(3).max(80)
        },

    ]
}