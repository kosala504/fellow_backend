import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
    description: '';
  };
  attributes: {
    logoText: Schema.Attribute.String;
    navItems: Schema.Attribute.Component<'elements.link', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LayoutSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    subHeading: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutPriceGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_price_grids';
  info: {
    displayName: 'Price Grid';
  };
  attributes: {
    priceCard: Schema.Attribute.Component<'elements.price-card', true>;
  };
}

export interface LayoutLatestPostsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_latest_posts_sections';
  info: {
    displayName: 'Latest Posts Section';
    icon: 'message';
  };
  attributes: {
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    topLink: Schema.Attribute.Component<'elements.link', false>;
    buttonLink: Schema.Attribute.Component<'elements.link', true>;
    image: Schema.Attribute.Media<'images'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    text: Schema.Attribute.Text;
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_with_images';
  info: {
    displayName: 'Content With Image';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    richText: Schema.Attribute.Blocks;
  };
}

export interface LayoutCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_card_grids';
  info: {
    displayName: 'Card Grid';
    description: '';
  };
  attributes: {
    cardItems: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface LayoutBestTools extends Struct.ComponentSchema {
  collectionName: 'components_layout_best_tools';
  info: {
    displayName: 'Best Tools Section';
    icon: 'cog';
    description: '';
  };
  attributes: {
    Tool: Schema.Attribute.Component<'elements.tool', true>;
    Heading: Schema.Attribute.String;
    Description: Schema.Attribute.String;
  };
}

export interface ElementsTool extends Struct.ComponentSchema {
  collectionName: 'components_elements_tools';
  info: {
    displayName: 'Tool';
    icon: 'command';
    description: '';
  };
  attributes: {
    toolName: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_price_cards';
  info: {
    displayName: 'Price Card';
    description: '';
  };
  attributes: {
    selected: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    price: Schema.Attribute.String;
    feature: Schema.Attribute.Component<'elements.feature', true>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['Frame', 'Download', 'Globe', 'Sparkles', 'LayoutPanelLeft', 'Palette']
    >;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.top-nav': LayoutTopNav;
      'layout.section-heading': LayoutSectionHeading;
      'layout.price-grid': LayoutPriceGrid;
      'layout.latest-posts-section': LayoutLatestPostsSection;
      'layout.hero': LayoutHero;
      'layout.footer': LayoutFooter;
      'layout.content-with-image': LayoutContentWithImage;
      'layout.card-grid': LayoutCardGrid;
      'layout.best-tools': LayoutBestTools;
      'elements.tool': ElementsTool;
      'elements.price-card': ElementsPriceCard;
      'elements.link': ElementsLink;
      'elements.feature': ElementsFeature;
      'elements.card': ElementsCard;
    }
  }
}
