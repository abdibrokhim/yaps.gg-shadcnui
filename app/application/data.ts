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
    status: 'in-progress' | 'rejected' | 'accepted' | 'unknown' | 'ongoing'
    writingType?: 'Q&A Essay' | 'Essay' | 'Cover Letter' | 'Interview' | 'All Combined' | 'Video Essay' | 'Statement of Purpose/Objectives' | 'Letter of Motivation'
    appliedAt?: string
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        appliedAt: '2024'
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
        writingType: 'Q&A Essay',
        appliedAt: '2024'
    },
    {
        uid: 'application-13',
        title: 'KAUST Application: Craft an Impactful Statement of Purpose',
        link: '/application/kaust-application-sop',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Statement of Purpose/Objectives',
        appliedAt: '2024'
    },
    {
        uid: 'application-14',
        title: 'OECD Internship Cover Letter: Highlight Global Impact',
        link: '/application/oecd-internship-cover-letter',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Cover Letter',
        appliedAt: '2024'
    },
    {
        uid: 'application-15',
        title: 'Scale AI Software Engineering Intern 2025: Cover Letter Tips',
        link: '/application/scale-ai-intern-2025-cover-letter',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'unknown',
        writingType: 'Cover Letter',
        appliedAt: '2024'
    },
    {
        uid: 'application-16',
        title: '2024 Central Asia & Türkiye Youth Talks: Join & Inspire',
        link: '/application/central-asia-turkiye-youth-talks-2024',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-17',
        title: 'Business Today\'s 50th International Conference: Global Insights',
        link: '/application/business-today-50th-international-conference',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: 'https://youtu.be/bZRPy2pv2BM',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Q&A Essay',
        appliedAt: '2024'
    },
    {
        uid: 'application-18',
        title: 'KAIST Summer Program Application: Study in South Korea',
        link: '/application/kaist-summer-program-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-19',
        title: '778 Foundation Startup Application: Fuel Your Venture',
        link: '/application/778-foundation-startup-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-20',
        title: 'Yandex Internship: Launch Your Tech Career in Russia',
        link: '/application/yandex-intern-application',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'accepted',
        writingType: 'Q&A Essay',
        appliedAt: '2024'
    },
    {
        uid: 'application-21',
        title: 'VISA Interview Questions: My Real & Honest Experience. Buildspace Nights&Weekends s5 IRL Event',
        link: '/application/visa-interview-prep-questions',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-22',
        title: 'Next Shift Learning: Snap Engineering Academy 2024',
        link: '/application/snap-engineering-academy-2024',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-23',
        title: 'MrBeast Data Analyst Application: Stand Out in Analytics',
        link: '/application/mrbeast-data-analyst-application',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'unknown',
        writingType: 'Cover Letter',
        appliedAt: '2024'
    },
    {
        uid: 'application-24',
        title: 'HPAIR 2024 Asia Conference: 1st Stage Application',
        link: '/application/hpair-2024-asia-conference-1st-stage',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'accepted',
        writingType: 'Q&A Essay',
        appliedAt: '2024'
    },
    {
        uid: 'application-25',
        title: 'Yale Transfer Essays: Craft a Winning Application',
        link: '/application/yale-transfer-essays',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-26',
        title: 'Cognition of Language Lab Application: Advance Linguistic Research',
        link: '/application/cognition-of-language-lab-application',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'unknown',
        writingType: 'Cover Letter',
        appliedAt: '2024'
    },
    {
        uid: 'application-27',
        title: 'Notion Cover Letter: Secure Your Software Engineering Role',
        link: '/application/notion-software-engineer-cover-letter',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Cover Letter',
        appliedAt: '2024'
    },
    {
        uid: 'application-28',
        title: 'Lex Fridman Application: Python Programmer Opportunity',
        link: '/application/lex-fridman-python-programmer-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-29',
        title: 'Catalyst Program Application: Accelerate Your Growth',
        link: '/application/catalyst-program-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-30',
        title: 'Generative AI Accelerator: Ignite Your Creative Tech Ideas',
        link: '/application/generative-ai-accelerator-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-31',
        title: 'Entrepreneur First Application: Build a World-Changing Startup',
        link: '/application/entrepreneur-first-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-32',
        title: 'Tufts Transfer Application: Elevate Your Academic Journey',
        link: '/application/tufts-transfer-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-33',
        title: 'University of Chicago Transfer: Tips for a Standout Application',
        link: '/application/university-of-chicago-transfer-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-34',
        title: 'USC Transfer Essays: Write to Impress & Succeed',
        link: '/application/usc-transfer-application-essays',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-35',
        title: 'Cornell University Transfer: Craft a Compelling Application',
        link: '/application/cornell-transfer-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-36',
        title: 'YC Internships: Persuasive Cold Cover Letters & Emails',
        link: '/application/yc-internships-cold-cover-letters',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Cover Letter',
        appliedAt: '2024'
    },
    {
        uid: 'application-37',
        title: 'Neurolink Application Cover Letter',
        link: '/application/neurolink-application-cover-letter',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Cover Letter',
        appliedAt: '2024'
    },
    {
        uid: 'application-38',
        title: 'Upwork Cover Letter Template',
        link: '/application/upwork-cover-letter-template',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'ongoing',
        writingType: 'Cover Letter',
        appliedAt: '2024'
    },
    {
        uid: 'application-39',
        title: 'Uzum Internship Q&A Application',
        link: '/application/uzum-internship-qna-application',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'accepted',
        writingType: 'Q&A Essay',
        appliedAt: '2024'
    },
    {
        uid: 'application-40',
        title: 'OIST Research Internship Application',
        link: '/application/oist-research-internship-application',
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
        appliedAt: '2024'
    },
    {
        uid: 'application-41',
        title: 'HPAIR Harvard Conference 2025: Scholarship Application',
        link: '/application/hpair-2025-harvard-conference-scholarship',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'accepted',
        writingType: 'Q&A Essay',
        appliedAt: '2025'
    },
    {
        uid: 'application-42',
        title: 'Application to the 2025 cohort of Knight-Hennessy Scholars at Stanford University',
        link: '/application/knight-hennessy-scholars-2025-application',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'unknown',
        writingType: 'All Combined',
        appliedAt: '2025'
    },
    {
        uid: 'application-43',
        title: 'The Earth Prize Facilitator\'s Community of Practice Application Form',
        link: '/application/earth-prize-facilitator-application',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: 'https://youtu.be/mj0H4EiCIr0',
            patreon: '',
            topmate: '',
        },
        status: 'accepted',
        writingType: 'Video Essay',
        appliedAt: '2025'
    },
    {
        uid: 'application-44',
        title: 'DAAD Letter of Motivation',
        link: '/application/daad-letter-of-motivation',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'Letter of Motivation',
        appliedAt: '2025'
    },
    {
        uid: 'application-45',
        title: 'Shape the Future Challenge 2025 | Moonshot Pirates',
        link: '/application/shape-the-future-challenge-moonshot-pirates',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'accepted',
        writingType: 'Q&A Essay',
        appliedAt: '2025'
    },
    {
        uid: 'application-46',
        title: '2025 Young Leaders Fellowship: Ignite Global Change',
        link: '/application/2025-young-leaders-fellowship',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: 'https://youtu.be/PF6yA1hM6xM',
            patreon: '',
            topmate: '',
        },
        status: 'rejected',
        writingType: 'All Combined',
        appliedAt: '2025'
    },
    {
        uid: 'application-47',
        title: 'IES at Copernicus Berlin: Stages 3 & 4 Scholarship Application',
        link: '/application/ies-copernicus-berlin-stage-3-and-4',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: 'https://topmate.io/abdibrokhim/1324206',
        },
        status: 'rejected',
        writingType: 'Interview',
        appliedAt: '2025'
    },
    {
        uid: 'application-48',
        title: 'Young Professional Internships Program 2025',
        link: '/application/young-professional-internships-program',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: '',
            topmate: '',
        },
        status: 'unknown',
        writingType: 'Essay',
        appliedAt: '2025'
    },
    {
        uid: 'application-49',
        title: 'f.inc Founders Application',
        link: '/application/founders-application-finc',
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
        appliedAt: '2025'
    },
    {
        uid: 'application-50',
        title: 'AI Action Summit 2025 in France: CoMedAI (by CoMed)',
        link: '/application/ai-action-summit-2025-france-comed',
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
        appliedAt: '2025'
    },
]