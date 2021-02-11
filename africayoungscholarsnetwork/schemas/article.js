export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}]
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}]
        },
        {
            name: 'publisedOn',
            title: 'Date',
            type: 'datetime',
        },
        {
            name: 'posterImage',
            title: 'Main Article Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'body',
            title: 'Article Content',
            type: 'array',
            of: [{type: 'block'}, {type: 'image'}]

        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'author',
            media: 'posterImage'
        }
    }
}