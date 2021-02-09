import sanityClient from '@sanity/client'

const client = sanityClient({
    "projectId": "xv4ah19m",
    "dataset": "production",
    "useCdn":true,

})

export default client