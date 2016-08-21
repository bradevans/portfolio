window.Globals = {
    adv_search: {
        any_or_all: {
            id: 'any_or_all',
            options: [
                {value: 'and', text: 'ALL of these filters are true'},
                {value: 'or', text: 'ANY of these filters are true'}
            ]
        },
        key_fields_props: {
            case_sensitive: [
                {
                    label: 'Case sensitive',
                    id: 'key-field-case-',
                    name: undefined,
                    checkall_part: undefined,
                    checkbox_part: undefined,
                    checkbox_group: undefined,
                    checked: false
                }
            ],
            filter_by: {
                id: 'key-field-filter-by-',
                options: [
                    {value: 'author', text: 'Author'},
                    {value: 'domain', text: 'Domain'},
                    {value: 'title', text: 'Title'},
                    {value: 'keywords', text: 'Keyword'},
                    {value: 'entities', text: 'Entity'},
                    {value: 'taxonomies-1', text: 'Topic Level 1'},
                    {value: 'taxonomies-2', text: 'Topic Level 2'},
                    {value: 'taxonomies-3', text: 'Topic Level 3'},
                    {value: 'taxonomies-4', text: 'Topic Level 4'},
                    {value: 'taxonomies-5', text: 'Topic Level 5'}
                ]
            },
            filter: {
                id: 'key-field-filter-',
                options: [
                    {value: 'notcontain', text: 'Does not contain'},
                    {value: 'contains', text: 'Contains'},
                    {value: 'equals', text: 'Equals'},
                    {value: 'starts', text: 'Starts with'},
                    {value: 'ends', text: 'Ends with'},
                    {value: 'notnull', text: 'Is not empty'}
                ]
            },
            text_field: {
                id: 'key-field-text-',
                placeholder: ''
            }
        },
        metrics_props: {
            filter_by: {
                id: 'metric-filter-by-',
                options: [
                    {value: 'interactions', text: 'Eng.'},
                    {value: 'reach', text: 'Reach'},
                    {value: 'posts', text: 'Posts'}
                ]
            },
            filter: {
                id: 'metric-filter-',
                options: [
                    {value: 'eq', text: '='},
                    {value: 'gt', text: '>'},
                    {value: 'lt', text: '<'},
                    {value: 'gte', text: '>='},
                    {value: 'lte', text: '<='}
                ]
            },
            text_field: {
                id: 'metric-text-',
                placeholder: ''
            }
        }
    },
    sources_a: [
        {
            label: 'Facebook',
            id: 'sources-fb',
            name: 'widget_sources',
            value: '2',
            checkall_part: 'sources',
            checkbox_part: undefined,
            checkbox_group: 'facebook',
            checked: false
        },
        {
            label: 'Status',
            id: 'sources-fb-status',
            name: 'widget_sources',
            value: '6',
            checkall_part: 'sources',
            checkbox_part: 'facebook',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Photo',
            id: 'sources-fb-photo',
            name: 'widget_sources',
            value: '7',
            checkall_part: 'sources',
            checkbox_part: 'facebook',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Video',
            id: 'sources-fb-video',
            name: 'widget_sources',
            value: '8',
            checkall_part: 'sources',
            checkbox_part: 'facebook',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Link',
            id: 'sources-fb-link',
            name: 'widget_sources',
            value: '9',
            checkall_part: 'sources',
            checkbox_part: 'facebook',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Offer',
            id: 'sources-fb-offer',
            name: 'widget_sources',
            value: '10',
            checkall_part: 'sources',
            checkbox_part: 'facebook',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Comment',
            id: 'sources-fb-comment',
            name: 'widget_sources',
            value: '11',
            checkall_part: 'sources',
            checkbox_part: 'facebook',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Twitter',
            id: 'sources-twitter',
            name: 'widget_sources',
            value: '3',
            checkall_part: 'sources',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Disqus',
            id: 'sources-disqus',
            name: 'widget_sources',
            value: '4',
            checkall_part: 'sources',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Tumblr',
            id: 'sources-tumblr',
            name: 'widget_sources',
            value: '5',
            checkall_part: 'sources',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        }
    ],
    sources_b: [
        {
            label: 'Websites',
            id: 'sources-websites',
            name: 'widget_sources',
            value: '1',
            checkall_part: 'sources',
            checkbox_part: undefined,
            checkbox_group: 'websites',
            checked: false
        },
        {
            label: 'Traditional Media',
            id: 'sources-trad-media',
            name: 'widget_categories',
            value: '9',
            checkall_part: 'sources',
            checkbox_part: 'websites',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Digital Media',
            id: 'sources-dig-media',
            name: 'widget_categories',
            value: '10',
            checkall_part: 'sources',
            checkbox_part: 'websites',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Coupons/Deals',
            id: 'sources-coupons',
            name: 'widget_categories',
            value: '13',
            checkall_part: 'sources',
            checkbox_part: 'websites',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'E-Commerce',
            id: 'sources-ecom',
            name: 'widget_categories',
            value: '72',
            checkall_part: 'sources',
            checkbox_part: 'websites',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Portals/Search',
            id: 'sources-portals',
            name: 'widget_categories',
            value: '70',
            checkall_part: 'sources',
            checkbox_part: 'websites',
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Other',
            id: 'sources-other',
            name: 'widget_categories',
            value: 'other',
            checkall_part: 'sources',
            checkbox_part: 'websites',
            checkbox_group: undefined,
            checked: false
        }
    ],
    key_fields: [
        {
            label: 'Author',
            id: 'Author',
            name: 'widget_columns',
            value: 'author',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Title',
            id: 'Title',
            name: 'widget_columns',
            value: 'title',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Brand',
            id: 'Brand',
            name: 'widget_columns',
            value: 'brand',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Category',
            id: 'Category',
            name: 'widget_columns',
            value: 'category',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Source',
            id: 'Source',
            name: 'widget_columns',
            value: 'source',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Domain',
            id: 'Domain',
            name: 'widget_columns',
            value: 'domain',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Date',
            id: 'Date',
            name: 'widget_columns',
            value: 'date',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Owned',
            id: 'Owned',
            name: 'widget_columns',
            value: 'owned',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Engaged',
            id: 'Engaged',
            name: 'widget_columns',
            value: 'engaged',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Topic',
            id: 'Topic',
            name: 'widget_columns',
            value: 'topic',
            checkall_part: 'key-fields',
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        }
    ],
    brands: [
        {
            label: 'Benoit Faucon',
            id: 'benoit-faucon',
            name: 'brands',
            value: '0',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'ISIS and KSA',
            id: 'isis-and-ksa',
            name: 'brands',
            value: '1',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'KSA',
            id: 'ksa',
            name: 'brands',
            value: '2',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Saudi and Christians',
            id: 'saudi-and-christians',
            name: 'brands',
            value: '3',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Saudi and Islam',
            id: 'saudi-and-islam',
            name: 'brands',
            value: '4',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        }
    ],
    brand_groups:{
        label: 'Brand Group',
        id: 'brand-group',
        name: 'brand-group',
        options: [
            {
                value: '318',
                text: 'Facebook Pages'
            },
            {
                value: '319',
                text: 'Iran'
            },
            {
                value: '320',
                text: 'ISIS'
            },
            {
                value: '321',
                text: 'KSA'
            },
            {
                value: '322',
                text: 'NOW'
            }
        ]
    },
    organic_or_owned: {
        label: 'Organic or Owned',
        id: 'organic-or-owned',
        name: 'organic-or-owned',
        options: [
            {
                value: '0',
                text: 'Both'
            },
            {
                value: '1',
                text: 'Organic'
            },
            {
                value: '2',
                text: 'Owned'
            }
        ]
    },
    metrics: [
        {
            label: 'Posts',
            id: 'posts',
            name: 'metrics',
            value: '0',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Reach',
            id: 'reach',
            name: 'metrics',
            value: '1',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Engagement',
            id: 'engagement',
            name: 'metrics',
            value: '2',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Sentiment',
            id: 'sentiment',
            name: 'metrics',
            value: '3',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Likes',
            id: 'likes',
            name: 'metrics',
            value: '4',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Comments',
            id: 'comments',
            name: 'metrics',
            value: '5',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        },
        {
            label: 'Shares',
            id: 'shares',
            name: 'metrics',
            value: '6',
            checkall_part: undefined,
            checkbox_part: undefined,
            checkbox_group: undefined,
            checked: false
        }
    ],
    name: {
        limit: 30,
        id: "report-name",
        name: "report-name",
        value: ""
    },
    description: {
        limit: 80,
        id: "report-description",
        name: "report-description",
        value: ""
    }
};



var Drawer = require('./Drawer');

ReactDOM.render(
    <Drawer/>, document.getElementById('Drawer')
);
