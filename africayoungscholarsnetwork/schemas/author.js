export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'authorName',
            title: 'Full name',
            type: 'string',

        },
        {
            name: 'profession',
            title: 'Profession',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Profile',
            type: 'file',
            
        }
    ]
}