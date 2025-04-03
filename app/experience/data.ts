type Metadata = {
    position: string
    startDate: string
    endDate?: string
}

type Responsibility = {
    description: string
}

type Experience = {
    uid: string
    title: string
    description?: string
    link?: string
    url?: string
    responsibilities: Responsibility[]
    metadata: Metadata
}

export const EXPERIENCES: Experience[] = [
    {
        uid: 'experience-0',
        title: 'Huawei',
        description: 'Huawei Technologies Co., Ltd',
        link: '/experience/huawei',
        url: 'https://www.huawei.com',
        responsibilities: [
            {
                description: 'Integrating AI Neural Network chips into human brain.',
            },
        ],
        metadata: {
            position: 'Network Engineer',
            startDate: 'April 2025',
            endDate: 'Present',
        },
    },
    {
        uid: 'experience-1',
        title: 'Open Community',
        description: 'a new kind of community to learn things',
        link: '/experience/open-community',
        url: 'https://www.theopencommunity.co',
        responsibilities: [
            {
                description: 'Launched a global tech education platform delivering project-based tutorials to builders, with a focus on rapid skill acquisition for emerging technologies (AI, IoT, cloud).',
            },
            {
                description: 'Spearheaded a 307-participant international hackathon across 5 continents, resulting in 73 deployed projects; partnered with 12 Expert mentors, 3 YC-backed founders and 1 ML Engineering Researcher as mentors/judges. (ps: it\'s our first time hosting a hackathon)',
            },
            {
                description: 'Drove $4,515 in prize allocations (including crypto incentives), enhancing engagement and attracting partnerships with organizations like AI/ML API.',
            },
        ],
        metadata: {
            position: 'Founder, CEO & CTO',
            startDate: 'June 2024',
            endDate: 'Present',
        },
    },
    {
        uid: 'experience-2',
        title: 'The Earth Foundation',
        description: 'Inspire. Educate. Mentor. Empower.',
        link: '/experience/the-earth-foundation',
        url: 'https://www.theearthprize.org',
        responsibilities: [
            {
                description: 'Mentored 50+ young entrepreneurs in product development and open-source tooling.',
            },
        ],
        metadata: {
            position: 'Startup Mentor & Facilitator',
            startDate: 'September 2024',
            endDate: 'Present',
        },
    },
    {
        uid: 'experience-3',
        title: 'Moonshot Pirates',
        description: 'WHERE GEN Z INNOVATORS SHAPE THE FUTURE',
        link: '/experience/moonshot-pirates',
        url: 'https://moonshotpirates.com',
        responsibilities: [
            {
                description: 'Mentored 50+ young entrepreneurs in product development and open-source tooling.',
            },
        ],
        metadata: {
            position: 'Startup Mentor',
            startDate: 'October 2024',
            endDate: 'December 2024',
        },
    },
    {
        uid: 'experience-4',
        title: 'AI/ML API',
        description: 'AI/ML API',
        link: '/experience/aiml-api',
        url: 'https://aimlapi.com',
        responsibilities: [
            {
                description: '1st Regional Ambassador in Central Asia.',
            },
            {
                description: 'Designed and hosted bi-weekly technical masterclasses for 500+ participants on AI/ML, project building, and startup pitching, improving learner retention by 40% through hands-on workshops.',
            },
            {
                description: 'Authored 15+ in-depth tutorials (Medium, Dev.to, aimlapi.com) on AI deployment and MLOps, reaching 500+ monthly readers.',
            },
        ],
        metadata: {
            position: 'AI/ML Mentor & Developer Educator',
            startDate: 'October 2024',
            endDate: 'Present',
        },
    },
    {
        uid: 'experience-5',
        title: 'HeadOn (formerly Dugree)',
        description: 'The platform for the toughest conversations',
        link: '/experience/headon',
        url: 'https://www.headon.ai',
        responsibilities: [
            {
                description: 'Researched and presented insights on 10+ ML papers (e.g., transformer architectures, diffusion models), accelerating team understanding of cutting-edge AI trends.',
            },
            {
                description: 'Collaborated on cross-functional reviews of 30+ research papers, identifying few novel methods later integrated into company prototypes.',
            },
        ],
        metadata: {
            position: 'GenAI Research Scientist Intern',
            startDate: 'June 2024',
            endDate: 'September 2024',
        },
    },
    {
        uid: 'experience-6',
        title: 'Headstarter',
        description: 'Building the #1 community for software engineers.',
        link: '/experience/headstarter',
        url: 'https://headstarter.co/',
        responsibilities: [
            {
                description: 'Built and deployed 5 full-stack AI applications in 5 weeks using React, Next.js, and AWS EC2, reducing development cycles by 30% via CI/CD pipelines.',
            },
            {
                description: 'Optimized cloud costs by 25% through AWS EC2 auto-scaling strategies, presented in weekly engineering reviews with Google and Amazon engineers.',
            },
        ],
        metadata: {
            position: 'Software Engineering Fellow',
            startDate: 'July 2024',
            endDate: 'August 2024',
        },
    },
    {
        uid: 'experience-7',
        title: 'Langflow',
        description: 'Langflow is a low-code tool for developers that makes it easier to build powerful AI agents and workflows that can use any API, model, or database.',
        link: '/experience/langflow',
        url: 'https://www.langflow.org/',
        responsibilities: [
            {
                description: 'Automated Langflow\'s UI/UX using OpenAI\'s Whisper model, enabling voice-command app development and reducing drag-and-drop build time by 30% (15s → 10.5s).',
            },
        ],
        metadata: {
            position: 'Software Engineer & Open Source Contributor',
            startDate: 'July 2024',
            endDate: 'July 2024',
        },
    },
    {
        uid: 'experience-8',
        title: 'Upwork',
        description: 'Upwork is a global freelancing platform that connects businesses with independent professionals.',
        link: '/experience/upwork',
        url: 'https://upwork.com/',
        responsibilities: [
            {
                description: 'Engineered a mobile app for GreenWay Logistics reducing report generation time by 60% and saving 20+ hours/month in manual workflows.',
            },
            {
                description: 'Automated 10+ mission-critical workflows (e.g., dispatch alerts, inventory sync) via Zapier, Python, and Telegram API, cutting average response time by 40% and eliminating 15+ hours/month of repetitive tasks.',
            },
            {
                description: 'Delivered 10+ scalable backend services with 100% success rate (0 critical bugs), resulting in 100% client satisfaction scores.',
            },
        ],
        metadata: {
            position: 'Software Engineer Freelance',
            startDate: 'October 2023',
            endDate: 'March 2024',
        },
    },
    {
        uid: 'experience-9',
        title: 'Lablab.ai',
        description: 'Community of Makers, building with state-of-the-art, modern Artificial Intelligence. Join a Hackathon event today!',
        link: '/experience/lablab',
        url: 'https://lablab.ai/',
        responsibilities: [
            {
                description: 'Produced 50+ tutorials on LLMs, generative AI, and MLOps for a community of 160,000+, driving a 25% increase in platform engagement.',
            },
            {
                description: 'Coached 10,000+ teams across 1,500+ AI prototypes, with few projects transitioning to commercial MVP stage.',
            },
        ],
        metadata: {
            position: 'Content Creator & AI/ML Mentor',
            startDate: 'June 2023',
            endDate: 'March 2024',
        },
    },
    {
        uid: 'experience-10',
        title: 'Souk',
        description: 'E-commerce app for MENA',
        link: '/experience/souk',
        url: 'https://www.linkedin.com/company/souk-app/',
        responsibilities: [
            {
                description: 'Boosted mobile app performance by 60% via Flutter optimization (Dart, Redux), supporting seamless scaling to 10,000+ active users.',
            },
            {
                description: 'Developed an AI-powered product metadata generator using TensorFlow, automating image-to-text workflows and reducing manual input by 90%.',
            },
        ],
        metadata: {
            position: 'FullStack Flutter Developer Intern',
            startDate: 'April 2023',
            endDate: 'November 2024',
        },
    },
    {
        uid: 'experience-11',
        title: 'New Uzbekistan University',
        description: 'Where Knowledge Meets Innovation',
        link: '/experience/newuu',
        url: 'https://www.newuu.uz',
        responsibilities: [
            {
                description: 'Achieved 87.5% accuracy in medical image classification using SVM and LBP, contributing to early-stage cancer detection research.',
            },
            {
                description: 'Pioneered deep learning models for cybersecurity, reducing false positives in network anomaly detection by 35%.',
            },
        ],
        metadata: {
            position: 'Undergraduate AI/ML Research Assistant',
            startDate: 'February 2023',
            endDate: 'May 2025',
        },
    },
    {
        uid: 'experience-12',
        title: 'DKU 2024 Conference',
        description: 'The Kazakh-German University',
        link: '/experience/dku',
        url: 'https://dku.kz/en',
        responsibilities: [
            {
                description: 'Presented AI-driven research on “Enhancing Trade and Investment Patterns in Central Asia with Machine Learning” to 50+ Ph.D. scholars and professors, proposing a framework to optimize regional GDP growth by 12% through predictive analytics.',
            },
            {
                description: 'Collaborated with international researchers from 10+ countries in workshops on AI ethics and sustainable tech, fostering partnerships with institutions in Germany, South Korea, and Kazakhstan.',
            },
        ],
        metadata: {
            position: 'Young Ph.D. delegate & Industry Conference Speaker',
            startDate: 'September 2023',
            endDate: 'October 2023',
        },
    },
    {
        uid: 'experience-13',
        title: 'Technovation Girls',
        description: 'Technology and Entrepreneurship for Girls',
        link: '/experience/technovation',
        url: 'https://technovationchallenge.org/',
        responsibilities: [
            {
                description: 'Trained 5 schoolgirls in AI app development using Python, TensorFlow, resulting in 1 deployed app addressing community challenges in Healthcare.',
            },
            {
                description: 'Simplified complex AI/ML concepts through video tutorials and hands-on labs, achieving a 100% completion rate for the team\'s coursework and earning recognition as a “Top Mentor” regionally. (girls vote/selection)',
            },
        ],
        metadata: {
            position: 'Mentor & Facilitator',
            startDate: 'February 2024',
            endDate: 'June 2024',
        },
    },
    {
        uid: 'experience-14',
        title: 'Nobel Learning PBC',
        description: 'Global network of youth',
        link: '/experience/nobel',
        url: 'https://nobelnavigators.com/',
        responsibilities: [
            {
                description: 'Led a 1-month UI/UX Design bootcamp for 20+ interns, teaching Figma, Wordpress, and user-centered design principles.',
            },
        ],
        metadata: {
            position: 'Mentor & Facilitator',
            startDate: 'February 2024',
            endDate: 'August 2024',
        },
    },
    {
        uid: 'experience-15',
        title: 'TruthSuite (formerly Anarchy) (YC W23)',
        description: 'AI Fact Checking for Lawyers',
        link: '/experience/truthsuite',
        url: 'https://www.truthsuite.com/',
        responsibilities: [
            {
                description: 'Contributed to the development of a fact-checking tool that uses AI to verify the accuracy of statements made by lawyers in court.',
            },
        ],
        metadata: {
            position: 'Open Source Contributor',
            startDate: 'January 2024',
            endDate: 'February 2024',
        },
    },
    {
        uid: 'experience-16',
        title: 'Topmate',
        description: 'Learn from those who\'ve nailed it',
        link: '/experience/topmate',
        url: 'https://www.topmate.io/',
        responsibilities: [
            {
                description: 'Mentored 80+ people in GenAI, with a focus on prompt engineering, MLOps, and LLMs.',
            },
        ],
        metadata: {
            position: 'GenAI Mentor',
            startDate: 'December 2024',
            endDate: 'Present',
        },
    },
    {
        uid: 'experience-17',
        title: 'That Two PhDs',
        description: 'a new kind of educational podcast',
        link: '/experience/that-two-phds',
        url: '',
        responsibilities: [
            {
                description: 'New Episode Everyday. Get Early Access:https://www.patreon.com/collection/1230004',
            },
        ],
        metadata: {
            position: 'Founder, CEO & Content Creator',
            startDate: 'December 2024',
            endDate: 'Present',
        },
    },
    {
        uid: 'experience-18',
        title: 'PaperAI',
        description: 'The Open Source Collaborative AI Research Platform',
        link: '/experience/paperai',
        url: 'https://paperai.pro/',
        responsibilities: [
            {
                description: 'Dive deep into the future of research with PaperAI. Our platform redefines collaborative exploration of academic papers. Join us in this revolution!',
            },
        ],
        metadata: {
            position: 'Co-Founder, CEO & CTO',
            startDate: 'September 2024',
            endDate: 'December 2024',
        },
    },
    {
        uid: 'experience-19',
        title: 'CoMedAI (by CoMed)',
        description: 'The Open Source autonomous AI Brain MRI analysis & diagnosis platform for doctors to help their patients.',
        link: '/experience/comedai',
        url: 'https://www.comedai.vercel.app/',
        responsibilities: [
            {
                description: 'CoMedAI (Collaborative Medicine with AI) makes brain MRI diagnosis more accurate, faster, and more affordable. By seamlessly integrating two models; CNN and NLP, we\'ve confirmed that we can achieve even higher accuracy. Currently, our paper is under peer review, and our platform has been launched for testing purposes only.',
            },
        ],
        metadata: {
            position: 'Founder, CEO & CTO',
            startDate: 'February 2024',
            endDate: 'December 2024',
        },
    },
    {
        uid: 'experience-20',
        title: 'OpenAI',
        description: 'OpenAI is a research and deployment company that develops and applies advanced artificial intelligence.',
        link: '/experience/openai',
        url: 'https://www.openai.com/',
        responsibilities: [
            {
                description: 'Currently I\'m closely working/collaborating with ChatGPT on daily bases. Utilizing STRONG Prompting Techniques.',
            },
            {
                description: 'I built AI using AI. Langflow AI (drag-and-drop)=>dictate',
            },
            {
                description: 'I guided ChatGPT and other different LLMs to collaboratively write Research Papers and Book Chapters. I instructed to check their own writings and refactor required paragraphs or phrases. Plagiarism below 10%. AI influency is really less.',
            },
            {
                description: 'I Instructed ChatGPT to code the UI of CoMedAI, an AI powered mobile app for Medical Diagnostics, Managing Records, and Reporting for further treatment steps. I designed the UI/UX first, then guided ChatGPT to built app with one-to-one similar to my UI/UX design.',
            },
            {
                description: 'I guided ChatGPT to write entire Benchmarking codes for Medical Dataset. I made a template with long prompts and instructions. It Includes CSV file management, JSONL file management, writing multiple functions for different purposes, and writing test codes to compare the results of 3 different OpenAI LLMs. My fine-tuned model\'s accuracy is HIGHER than gpt4o\'s accuracy.',
            },
            {
                description: 'I closely collaborated with ChatGPT to build MeWellAI, an AI-powered mobile app for Mental Wellness. I fully generated backend services and APIs with a small changes. I managed to guide ChatGPT to strictly follow my instructions and design MeWellAI\'s UI same as actual ChatGPT mobile app\'s UI. I WON the Mental Wellness Hackathon.',
            },
            {
                description: 'I built Astro AI using only ChatGPT from scratch. I utilized the GPT Builder and Strong prompts, instructions and connected to 3rd party APIs. I WON AstroHacks hackathon.',
            },
            {
                description: 'I built company named @GPT Hub using only ChatGPT from scratch. I created LinkedIn profile and Designed Logo. I managed to build website, generated the content and images. Hyped and got over 300 followers in a day.',
            },
            {
                description: 'I utilized ChatGPT to built WeShot. WeShot fully made by ChatGPT with small refactoring on different parts. Including Backend, Frontend, Databases, APIs, and Testing. I got the HIGHEST score on my University final exams.',
            },
        ],
        metadata: {
            position: 'Prompt Engineer & AI/ML Engineer',
            startDate: 'April 2023',
            endDate: 'December 2024',
        },
    },
    {
        uid: 'experience-21',
        title: 'Huawei Seeds for Future',
        description: 'Seeds for the Future is Huawei\'s flagship CSR program at the corporate level.',
        link: '/experience/huawei-seeds-for-future',
        url: 'https://www.huawei.com/minisite/seeds-for-the-future/index.html',
        responsibilities: [
            {
                description: 'Worked in a team of 7 amazing students including, creators, business analysts, mechanical and software engineers to built an AI powered platform to generate, manage and report Brain MRI observations. One ecosystem for both doctors and their patients. Making MRI diagnosis easier, faster, and cheaper. We are NOT replacing doctors, however, building tool for doctors to help their patients',
            },
            {
                description: 'Participated in daily sessions with top leaders and mentors from various countries.',
            },
            {
                description: 'Engaged with over 150 diverse students from different countries and nationalities, including Kazakhstan, Kyrgyzstan, Kuwait, the UAE, Bahrain, Jordan, Lebanon, and others. Exchanged ideas, shared cultures, and different perspectives, contributing to shaping the world.',
            },
        ],
        metadata: {
            position: 'Senior Team Lead',
            startDate: 'August 2024',
            endDate: 'August 2024',
        },
    },
    {
        uid: 'experience-22',
        title: 'Buildspace',
        description: 'we were the biggest school in the world for people who wanted to work on their own ideas — ty for the memories. love you.',
        link: '/experience/buildspace',
        url: 'https://www.buildspace.so/',
        responsibilities: [
            {
                description: 'S5 nights&weekends - Backed by YCombinator and a16z',
            },
            {
                description: 'selected from 32,000 applicants to build my startup as a part of the nights & weekends s5 cohort.',
            },
            {
                description: 'Built CoMedAI, an AI-powered mobile app to generate, manage, and report Brain MRI diagnosis.',
            },
            {
                description: 'Participate in weekly sessions and labs with founder from Y Combinator, venture-backed startups and passionate builders',
            },
            {
                description: 'The genesis of CrunchGPT was in recognizing the overwhelming complexity of information in educational and research materials. We were inspired by the idea of leveraging AI to simplify and personalize the learning experience, making education more accessible and engaging for everyone.',
            },
        ],
        metadata: {
            position: 'Data Software Engineer & iOS Developer',
            startDate: 'June 2024 & July 2023',
            endDate: 'July 2024 & August 2023',
        },
    },
    {
        uid: 'experience-23',
        title: 'Lil Cute Ghost Club',
        description: 'Lil Cute Ghost Club is a collection of 69 unique Ghost NFTs — unique digital collectibles living on the Imaginary world.',
        link: '/experience/lil-cute-ghost-club',
        url: 'https://opensea.io/collection/lilcuteghostclub',
        responsibilities: [
            {
                description: 'I used Blender to create one model and various collections including eyes, clothes, and etc.',
            },
            {
                description: 'I used Python to automate the process of creation 69 unique NFTs.',
            },
        ],
        metadata: {
            position: 'Founder & NFT Artist',
            startDate: 'February 2022',
            endDate: 'June 2022',
        },
    },
    {
        uid: 'experience-24',
        title: 'LONE.Guy',
        description: 'LONE.Guy is a music producer who produces instrumentals and beats.',
        link: '/experience/lone-guy',
        url: 'https://soundcloud.com/loneguy',
        responsibilities: [
            {
                description: 'Produced over 40 instrumentals and got over 10,000 impressions.',
            },
        ],
        metadata: {
            position: 'Music Producer',
            startDate: 'September 2021',
            endDate: 'June 2022',
        },
    },
]
