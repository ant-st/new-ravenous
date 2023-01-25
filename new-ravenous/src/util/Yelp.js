const apiKey = 'qalFOZmyj0ZRNrUg4mSJq4DqYtdP0pRcsl0sThaO-y8Zz1Kr9wVWnxxcdJobvpN8DJkPjyOUm8vuaB1jq4hVBdd0UZ8373XRdsSCoRt-CwfvXmV2QPd5mEOi9gnQY3Yx';
const urlLink = 'https://api.yelp.com/v3/businesses/search?';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
};

const Yelp = {

    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/${urlLink}term=${term}&location=${location}&sort_by=${sortBy}`, options)
            .then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business['image_url'],
                        name: business.name,
                        address: business.location['address1'],
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location['zip_code'],
                        category: business.categories.alias,
                        rating: business.rating,
                        reviewCount: business['review_count'],
                        url: business.url
                    }
                })
            }
        }).catch(e => {console.log(e)});
    }
};

export default Yelp;
