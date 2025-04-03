export type Lab = {
    uid: string;
    title: string;
    description: string;
    cover: string;
    link: string;
}

export const LABS: Lab[] = [
    {
        uid: 'lab-1',
        title: 'Yaps World',
        description: 'Yet Another Pookie Student\'s World',
        cover: '/images/blackRec.png',
        link: '/lab/yaps-world',
    },
    {
        uid: 'lab-2',
        title: 'Open Community',
        description: 'a new kind of community to learn things in open',
        cover: '/images/blackRec.png',
        link: '/lab/open-community',
    },
    {
        uid: 'lab-3',
        title: 'That Two PhDs',
        description: 'a new kind of educational podcast on real applications',
        cover: '/images/blackRec.png',
        link: '/lab/that-two-phds',
    },

]