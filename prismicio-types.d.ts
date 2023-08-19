// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for About Section documents
 */
interface AboutSectionDocumentData {
  /**
   * Background Image field in *About Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Title Text field in *About Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.title_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_text: prismic.KeyTextField;

  /**
   * Body Text field in *About Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.body_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body_text: prismic.RichTextField;
}

/**
 * About Section document from Prismic
 *
 * - **API ID**: `about_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AboutSectionDocumentData>,
    "about_section",
    Lang
  >;

/**
 * Content for Contact Section documents
 */
interface ContactSectionDocumentData {
  /**
   * Background Image field in *Contact Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Title Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.title_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_text: prismic.KeyTextField;

  /**
   * Body Text field in *Contact Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.body_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body_text: prismic.RichTextField;

  /**
   * Contact Request Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.contact_request_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_request_text: prismic.KeyTextField;

  /**
   * First Name Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.first_name_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name_text: prismic.KeyTextField;

  /**
   * Last Name Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.last_name_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name_text: prismic.KeyTextField;

  /**
   * Email Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.email_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_text: prismic.KeyTextField;

  /**
   * Phone Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.phone_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_text: prismic.KeyTextField;

  /**
   * Comments Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.comments_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  comments_text: prismic.KeyTextField;

  /**
   * Send Button Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.send_button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  send_button_text: prismic.KeyTextField;
}

/**
 * Contact Section document from Prismic
 *
 * - **API ID**: `contact_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ContactSectionDocumentData>,
    "contact_section",
    Lang
  >;

/**
 * Content for General Information documents
 */
interface GeneralInformationDocumentData {
  /**
   * Small Logo field in *General Information*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  small_logo: prismic.ImageField<never>;

  /**
   * Small Logo Width field in *General Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo_width
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  small_logo_width: prismic.KeyTextField;

  /**
   * Small Logo Height field in *General Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo_height
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  small_logo_height: prismic.KeyTextField;

  /**
   * Book Now Text field in *General Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.book_now_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  book_now_text: prismic.KeyTextField;
}

/**
 * General Information document from Prismic
 *
 * - **API ID**: `general_information`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GeneralInformationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<GeneralInformationDocumentData>,
    "general_information",
    Lang
  >;

/**
 * Content for Home Section documents
 */
interface HomeSectionDocumentData {
  /**
   * Background Image field in *Home Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Top Text field in *Home Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.top_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  top_text: prismic.KeyTextField;

  /**
   * Bottom Text field in *Home Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.bottom_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bottom_text: prismic.KeyTextField;

  /**
   * Slogan Text field in *Home Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.slogan_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slogan_text: prismic.KeyTextField;
}

/**
 * Home Section document from Prismic
 *
 * - **API ID**: `home_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomeSectionDocumentData>,
    "home_section",
    Lang
  >;

/**
 * Item in *Menu → Menu Links*
 */
export interface MenuDocumentDataMenuLinksItem {
  /**
   * Link field in *Menu → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;

  /**
   * Label field in *Menu → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Menu documents
 */
interface MenuDocumentData {
  /**
   * Menu Links field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_links: prismic.GroupField<Simplify<MenuDocumentDataMenuLinksItem>>;
}

/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MenuDocumentData>, "menu", Lang>;

/**
 * Content for Rent Section documents
 */
interface RentSectionDocumentData {
  /**
   * Background Image field in *Rent Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: rent_section.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Title Text field in *Rent Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rent_section.title_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_text: prismic.KeyTextField;

  /**
   * Body Text field in *Rent Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rent_section.body_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body_text: prismic.RichTextField;
}

/**
 * Rent Section document from Prismic
 *
 * - **API ID**: `rent_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RentSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<RentSectionDocumentData>,
    "rent_section",
    Lang
  >;

/**
 * Content for SEO documents
 */
interface SeoDocumentData {
  /**
   * Title field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Default Description field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  default_description: prismic.KeyTextField;

  /**
   * Default Keywords field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_keywords
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  default_keywords: prismic.KeyTextField;

  /**
   * Default URL field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  default_url: prismic.KeyTextField;

  /**
   * Default Image field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  default_image: prismic.KeyTextField;
}

/**
 * SEO document from Prismic
 *
 * - **API ID**: `seo`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SeoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<SeoDocumentData>, "seo", Lang>;

/**
 * Content for Share Section documents
 */
interface ShareSectionDocumentData {
  /**
   * Background Image field in *Share Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: share_section.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Title Text field in *Share Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: share_section.title_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_text: prismic.KeyTextField;

  /**
   * Body Text field in *Share Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: share_section.body_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body_text: prismic.RichTextField;
}

/**
 * Share Section document from Prismic
 *
 * - **API ID**: `share_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ShareSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ShareSectionDocumentData>,
    "share_section",
    Lang
  >;

/**
 * Content for Vehicle documents
 */
interface VehicleDocumentData {
  /**
   * Name field in *Vehicle*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: vehicle.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Year field in *Vehicle*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: vehicle.year
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;

  /**
   * Vehicle Image field in *Vehicle*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: vehicle.vehicle_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  vehicle_image: prismic.ImageField<never>;

  /**
   * Description field in *Vehicle*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: vehicle.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Turo URL field in *Vehicle*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: vehicle.turo_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  turo_url: prismic.KeyTextField;
}

/**
 * Vehicle document from Prismic
 *
 * - **API ID**: `vehicle`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VehicleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<VehicleDocumentData>,
    "vehicle",
    Lang
  >;

export type AllDocumentTypes =
  | AboutSectionDocument
  | ContactSectionDocument
  | GeneralInformationDocument
  | HomeSectionDocument
  | MenuDocument
  | RentSectionDocument
  | SeoDocument
  | ShareSectionDocument
  | VehicleDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutSectionDocument,
      AboutSectionDocumentData,
      ContactSectionDocument,
      ContactSectionDocumentData,
      GeneralInformationDocument,
      GeneralInformationDocumentData,
      HomeSectionDocument,
      HomeSectionDocumentData,
      MenuDocument,
      MenuDocumentData,
      RentSectionDocument,
      RentSectionDocumentData,
      SeoDocument,
      SeoDocumentData,
      ShareSectionDocument,
      ShareSectionDocumentData,
      VehicleDocument,
      VehicleDocumentData,
      AllDocumentTypes,
    };
  }
}
