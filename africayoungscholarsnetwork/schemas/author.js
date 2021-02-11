export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'authorName',
            title: 'Full name',
            type: 'string',
            validation: Rule => Rule.required().min(3).max(80)
        },
        {
            name: 'profession',
            title: 'Profession',
            type: 'string',
            validation: Rule => Rule.required().min(6).max(80)
        },
        {
            name: 'mainImage',
            title: 'Profile',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ],
    preview: {
        select: {
            title: 'authorName',
            subtitle: 'profession',
            media: 'mainImage',
        }
    }
}