// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import propertyImage from './propertyImage'
import review from './review'
import traveller from './traveller'
import host from './host'
import person from './person'
import youtube from './youtube'
import route from './documents/route'
import propertyAirbnb from './documents/propertyAirbnb'
import siteConfig from './documents/siteConfig'

//Object and document schema
import property from './property'
// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Landing page sections
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import mailchimp from './objects/mailchimp'
import textSection from './objects/textSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    property,
    propertyAirbnb,
    propertyImage,
    youtube,
    review,
    traveller,
    host,
    person,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection
  ])
})
