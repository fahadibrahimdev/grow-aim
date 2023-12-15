import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Enter the Exciting World of SideBlocks',
    subHeading: 'A Gaming App for Inquisitive Minds',
    text: 'Growaim is a modern educational app that is designed to be fun and engaging while helping the player understand various mathematical concepts. Targeted towards children the games aim to make screen time productive amongst young ones.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}

export const brandSelectionContent = {
    heading: 'Why Choose Growaim?',
    descriptions: [
        'Growaim is an intelligently compiled gaming app to help young and old learn mathematical concepts that are difficult to grasp. The app is aimed at teaching strategy at a young age and is excellent to fill the gaps during the day where you can pass the time productively.'
    ],
}

export const brandFeaturesContent = {
    heading: 'SideBlocks is the New Way to do Math.',
    subHeading: 'READY, SET, PLAY!',
    features: [
        {
            title: 'Learn Math Easy',
            description: 'In SideBlocks players make and create their own path in a random dynamic playing field vs. memorizing a formula or a pattern',
            icon: 'network'
        },
        {
            title: 'Video Tutorials',
            description: 'Gain access to resources on how to play and interact with the app.',
            icon: 'stack'
        },
        {
            title: 'Classic Patterns',
            description: 'Use traditional visuals that you are familiar with.',
            icon: 'infographic'
        },
        {
            title: 'Fun and Interactive',
            description: 'The game model lets you add point by counting the sides on each shape.',
            icon: 'chats'
        },
    ]
}

export const benefitsContent = {
    heading: 'Not your Average Gaming App',
    text: 'The learning app is far from your textbook tools. It is designed as a game through and through with rewards every time you win.',
    benefits: [
        {
            title: 'Learning through Visuals',
            description: 'It is easier to learn new concepts through visuals.',
            icon: 'visuals'
        },
        {
            title: 'Excellent for Teaching Environment',
            description: 'Can be used as homeschool tool and a classroom resource.',
            icon: 'stack'
        },
        {
            title: 'Critical Thinking and Pattern Recognition',
            description: 'Growaim introduces and builds on your problem-solving skills.',
            icon: 'chats'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is the app compatible with iOS or Android?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Who is this app aimed towards?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'What do I do if I have a question regarding my app?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'A Unique Learning and Gaming Experience Every Time You Play',
    text: 'Download Growaim app and embark on an enlightening journey today.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        },
        {
            icon: 'instagram',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: 'Why Growaim', sectionId: 'whyUs' }
]
