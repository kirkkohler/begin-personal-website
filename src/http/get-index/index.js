const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Kirk Kohler', // ←  Start by adding your name!
    title: 'Kirk Kohler\'s Website | Home',
    occupation: 'Product Manager',
    location: 'Bay Area, CA, USA',
    bio: 'Kirk Kohler\'s web portal to my blogs, projects, twitter and contact information',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    twitter: 'kirkkohler',
    linkedin: 'kirkkohler',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    //image: staticAssetsHelper('background.jpg')
    image: 'https://github.com/kirkkohler/kirkkohlerWebsite/blob/master/dist/images/bigSur2012-Large.jpg?raw=true'
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
