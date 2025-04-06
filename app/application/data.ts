type Social = {
    medium?: string
    dev?: string
    github?: string
    youtube?: string
    patreon?: string
    topmate?: string
    substack?: string
}

type Application = {
    uid: string
    title: string
    link: string
    socials?: Social
    year?: string
    status: 'in-progress' | 'rejected' | 'accepted' | 'unknown'
    writingType?: 'Q&A Essay' | 'Essay' | 'Cover Letter' | 'Application' | 'Interview' | 'All Combined' | 'Video Essay' | 'Statement of Purpose/Objectives'
}

export const APPLICATIONS: Application[] = [
    {
        uid: 'application-0',
        title: 'Future Leaders Congress 2024 in Kuala Lumpur',
        link: '/application/future-leaders-congress-kuala-lumpur-2024',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: 'https://www.patreon.com/posts/accepted-future-111913095',
        },
        status: 'accepted',
        writingType: 'Q&A Essay',
    },
    {
        uid: 'application-1',
        title: 'HPAIR 2024 Asia Conference: 2nd Stage Application Guide',
        link: '/application/hpair-2024-asia-conference-2nd-stage',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: 'https://www.patreon.com/posts/accepted-harvard-111913883',
            topmate: 'https://topmate.io/abdibrokhim/1324206',
        },
        status: 'accepted',
        writingType: 'All Combined',
    },
    {
        uid: 'application-2',
        title: 'Become a UPG Sustainability Leader & Drive Global Impact',
        link: '/application/upg-sustainability-leader',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: 'https://www.patreon.com/posts/accepted-become-111913405',
            topmate: 'https://topmate.io/abdibrokhim/1324206',
        },
        status: 'accepted',
        writingType: 'All Combined',
    },
    {
        uid: 'application-3',
        title: 'Hack the North 2024: Canada\'s Premier Hackathon Awaits',
        link: '/application/hack-the-north-2024-canada',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: 'https://www.patreon.com/posts/accepted-hack-111914002',
            topmate: 'https://topmate.io/abdibrokhim/1324206',
        },
        status: 'accepted',
        writingType: 'Q&A Essay',
    },
    {
        uid: 'application-4',
        title: 'IES at Copernicus Berlin: 2nd Stage Scholarship Application',
        link: '/application/ies-copernicus-berlin-2nd-stage',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: 'https://youtu.be/m6eWBvbf4Uk',
            patreon: '',
            topmate: 'https://topmate.io/abdibrokhim/1324206',
        },
        status: 'accepted',
        writingType: 'Video Essay',
    },
    {
        uid: 'application-5',
        title: 'Leaders Fellowship Maldives 2024: Empower Future Changemakers',
        link: '/application/leaders-fellowship-maldives-2024',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: 'https://topmate.io/abdibrokhim/1324206',
        },
        status: 'accepted',
        writingType: 'Q&A Essay',
    },
    {
        uid: 'application-6',
        title: 'Ladder Student Application: Build Skills & Network',
        link: '/application/ladder-student-application',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Q&A Essay',
    },
    {
        uid: 'application-7',
        title: 'Youth Interfaith Leaders Fellowship 2025: Climate Action',
        link: '/application/youth-interfaith-climate-fellowship-2025',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: 'https://youtu.be/4BPB8Cx6Ll4',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'All Combined',
    },
    {
        uid: 'application-8',
        title: 'Hack MIT 2024: Innovate at MIT\'s Leading Hackathon',
        link: '/application/hack-mit-2024-application',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Q&A Essay',
    },
    {
        uid: 'application-9',
        title: 'World Food Forum 2024: Good Food for All',
        link: '/application/world-food-forum-2024',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Q&A Essay',
    },
    {
        uid: 'application-10',
        title: 'IRENA Youth Forum: Pioneering Renewable Energy Leadership',
        link: '/application/irena-youth-forum',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'All Combined',
    },
    {
        uid: 'application-11',
        title: 'BRB Fintech Hackcelerator: 2nd Round Application',
        link: '/application/brb-fintech-hackcelerator-2nd-round',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Q&A Essay',
    },
    {
        uid: 'application-12',
        title: 'Headstarter Fellowship & Accelerator: Propel Your Startup',
        link: '/application/headstarter-fellowship-accelerator',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'accepted',
        writingType: 'Application',
    },
]