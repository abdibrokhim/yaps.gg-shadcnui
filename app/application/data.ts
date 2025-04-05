type Social = {
    medium?: string
    dev?: string
    github?: string
    youtube?: string
    patreon?: string
}

type Application = {
    uid: string
    title: string
    link: string
    cover: string
    socials?: Social
    status: 'in-progress' | 'rejected' | 'accepted' | 'unknown'
    type?: 'Q&A' | 'Essay' | 'Cover Letter' | 'Application' | 'Interview' | 'All Combined' | 'Video Essay'
}

export const APPLICATIONS: Application[] = [
    {
        uid: 'application-0',
        title: 'Future Leaders Congress 2024 in Kuala Lumpur',
        link: '/application/future-leaders-congress-kuala-lumpur-2024',
        cover: '',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: 'https://www.patreon.com/posts/accepted-future-111913095',
        },
        status: 'accepted',
        type: 'Q&A',
    },
    {
        uid: 'application-1',
        title: 'HPAIR 2024 Asia Conference: 2nd Stage Application Guide',
        link: '/application/hpair-2024-asia-conference-2nd-stage',
        cover: '',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: 'https://www.patreon.com/posts/accepted-harvard-111913883',
        },
        status: 'accepted',
        type: 'All Combined',
    },
    {
        uid: 'application-2',
        title: 'Become a UPG Sustainability Leader & Drive Global Impact',
        link: '/application/upg-sustainability-leader',
        cover: '',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            patreon: 'https://www.patreon.com/posts/accepted-become-111913405',
        },
        status: 'accepted',
        type: 'All Combined',
    },
]