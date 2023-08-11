import React from "react";
import Head from "../components/head";
import NavBar from "../components/navbar";
import Contact from "./contact"; //Different from component/contact.jsx. <Contact> in component folder is for Popup.



import Prismic from 'prismic-javascript'
import { PrismicClient } from '../prismic-configuration'
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"


const Homepage = props => {
    
  const { NonQmLoansContent, QmLoansContent, actualLocale, locales, seo, generalInformation, menuContent, members, footerContent, meetTeamContent, CirclesGridContent, RealtorsResourceContent, PreApprovalProcessContent, BuyingRefinancingProcessContent, signUpContent } = props
  return<div className="main overflow-x-hidden">

    EN CONSTRUCCION
          {/* <Head
            title={seo.data.title}
            description={seo.data.default_description}
            keywords={seo.data.default_keywords}
            url={seo.data.default_url}
            ogImage={seo.data.default_image}
          />
          <NavBar
              content={menuContent.data.menu_links} 
              logo={generalInformation.data.small_logo.url}
              imageWidth={generalInformation.data.small_logo_width}
              imageHeight={generalInformation.data.small_logo_height}
              locales={locales}
              actualLocale={actualLocale}
            /> */}
        </div>
}

const getStaticProps = async ({ params, locale, previewData }) => {
  const client = createClient({ previewData });
  const locales = await getLocales(client)
  return {
      props: {
        // seo: await getPrismicData('seo', locale),
        // generalInformation: await getPrismicData('general_information', locale),
        // menuContent: await getPrismicData('menu', locale),
        // members: await getPrismicCustomTypeData('member', locale), // Different Function to query multi instances.
        // footerContent: await getPrismicData('footer', locale),
        // meetTeamContent: await getPrismicData('meet_team', locale),
        // RealtorsResourceContent: await getPrismicData('realtors_resource', locale),
        // PreApprovalProcessContent: await getPrismicData('pre_approval_process', locale),
        // BuyingRefinancingProcessContent: await getPrismicData('buying_refinancing_process', locale), 
        // signUpContent : await getPrismicData('sign_up', locale),
        // CirclesGridContent : await getPrismicData('circle_grid_info', locale),
        // QmLoansContent : await getPrismicData('qm_loans', locale),
        // NonQmLoansContent : await getPrismicData('non_qm_loans', locale),
        // locales: locales,
        // actualLocale: locale
      }
  }
}

// Wrapper for prismic functions
const getPrismicData = async (name, lang) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name),{ lang } 
  )
  // Get first doc of this type (there should be 1 doc per type)
  const doc = prismicAnswer.results[0]
  return doc
}

const getPrismicCustomTypeData = async (name, lang) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name), { lang }  
  )
  // Get all docs of this type (there should many docs per type)
  const CustomTypeDoc = prismicAnswer.results
  return CustomTypeDoc
}

export default Homepage
export { getStaticProps }