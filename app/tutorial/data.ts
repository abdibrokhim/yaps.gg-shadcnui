type Social = {
    medium?: string
    dev?: string
    github?: string
    youtube?: string
    twitter?: string
    linkedin?: string
}

type Tutorial = {
    uid: string
    title: string
    description: string
    link: string
    cover: string
    socials?: Social
}

export type VideoTutorial = {
    uid: string
    title: string
    description: string
    link: string
    youtubeUrl: string
    cover?: string
    mediumUrl?: string
    devUrl?: string
    githubUrl?: string
    twitterUrl?: string
    linkedinUrl?: string
}

// we should order them bottom to top while displaying them as a content
export const TUTORIALS: Tutorial[] = [
    {
        uid: 'blog-2',
        title: 'Build a Llama 2 App with Clarifai Integration: Step-by-Step',
        description:
            'Discover how to harness the power of Llama 2 and Clarifai for AI-driven app development. Learn setup, integration, and best practices.',
        link: '/tutorial/llama2-clarifai-integration-tutorial',
        cover: 'https://storage.googleapis.com/lablab-static-eu/images/tutorials/llama-clarifai.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-3',
        title: 'StableCode Tutorial: Quick Start with Code Completion Models',
        description:
            'Use StableCode for AI-driven code generation in Google Colab or Hugging Face. Explore multiple models for efficient code completion.',
        link: '/tutorial/stablecode-code-completion-tutorial',
        cover: 'https://storage.googleapis.com/lablab-static-eu/images/tutorials/stablecodetut.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-4',
        title: 'Shap-E Tutorial: Generate and Customize 3D Models with Blender',
        description:
            'Set up OpenAI\'s Shap-E model in Google Colab. Create 3D models and customize them in Blender Studio for a streamlined 3D workflow.',
        link: '/tutorial/shap-e-3d-model-tutorial',
        cover: 'https://imagedelivery.net/K11gkZF3xaVyYzFESMdWIQ/2f76bffb-6436-4985-f78f-87d7666c7a00/full',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-5',
        title: 'ChatGPT Plugin Tutorial: Stable Diffusion Image Generation',
        description:
            'Learn to build and integrate a ChatGPT Plugin for image creation with Stable Diffusion. Test your new plugin easily within ChatGPT.',
        link: '/tutorial/chatgpt-plugin-stable-diffusion',
        cover: 'https://storage.googleapis.com/lablab-static-eu/images/tutorials/chatgpt-plugin-tutorial.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-6',
        title: 'Bring Book Characters to Life with Stable Diffusion & Cohere',
        description:
            'Use Chroma DB, Cohere embeddings, and Stable Diffusion to visualize personas from books. Perfect for immersive storytelling and fun.',
        link: '/tutorial/stable-diffusion-book-characters',
        cover: 'https://imagedelivery.net/K11gkZF3xaVyYzFESMdWIQ/619421a9-af45-47f9-e46d-34b3567a1800/full',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-7',
        title: 'Build a Podcast Generation App with ElevenLabs & Langchain',
        description:
            'Deploy a dynamic podcast generator using ElevenLabs voice tech and Langchain. Harness Streamlit for a fully Python-based web app.',
        link: '/tutorial/elevenlabs-podcast-generation',
        cover: 'https://imagedelivery.net/K11gkZF3xaVyYzFESMdWIQ/a49bcb3c-289d-4cd5-b599-cafd4975df00/full',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-8',
        title: 'Chirp Tutorial: Google\'s Speech-to-Text AI Model Setup Guide',
        description:
            'Master Chirp on Google Cloud console. Learn step-by-step to configure and start using Google\'s powerful speech-to-text AI model.',
        link: '/tutorial/google-chirp-speech-to-text-setup',
        cover: 'https://imagedelivery.net/K11gkZF3xaVyYzFESMdWIQ/709873ac-2620-421c-3fcb-7831a115ec00/full',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-9',
        title: 'PaLM2 Tutorial: Build Your Own AI-Powered Virtual Assistant',
        description:
            'Leverage Google\'s next-gen PaLM2 model for advanced AI tasks. Create a custom virtual assistant with superior code, math, and Q&A skills.',
        link: '/tutorial/palm2-ai-virtual-assistant',
        cover: 'https://imagedelivery.net/K11gkZF3xaVyYzFESMdWIQ/b7b1119d-174d-4e01-2286-be08f0a67800/full',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-10',
        title: 'Create an AI Assistant on monday.com with Vertex PaLM2',
        description:
            'Learn to integrate Google Vertex PaLM API (powered by PaLM2) into monday.com. Build a dynamic AI-powered Assistant step-by-step.',
        link: '/tutorial/ai-assistant-monday-vertex-palm2',
        cover: 'https://storage.googleapis.com/lablab-static-eu/images/tutorials/google-tutorial-thumb.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-12',
        title: 'Generative AI Studio by Google: Quick-Start Tutorial',
        description:
            'Discover how to test and customize generative AI models within Google Cloud\'s Generative AI Studio and integrate them into your apps.',
        link: '/tutorial/generative-ai-studio-google-tutorial',
        cover: 'https://storage.googleapis.com/lablab-static-eu/images/tutorials/giigle-tut-thumb1.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-13',
        title: 'Getting Started with Imagen by Vertex AI: Text-to-Image Basics',
        description:
            'Explore Imagen by Vertex AI for generating, editing, and analyzing images. Learn powerful text-to-image techniques and workflows.',
        link: '/tutorial/imagen-vertex-ai-tutorial',
        cover: 'https://storage.googleapis.com/lablab-static-eu/images/tutorials/imagen-thumb.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-14',
        title: 'AI21 Labs + Stable Diffusion: Beginner-Friendly App Tutorial',
        description:
            'Build a fun tweet-creation app with AI21 Labs for text and Stable Diffusion for images. Deploy easily using Python\'s Streamlit framework.',
        link: '/tutorial/ai21-stable-diffusion-tutorial',
        cover: 'https://storage.googleapis.com/lablab-static-eu/images/tutorials/ai21stablediff32423.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-1',
        title: 'Find the Largest Clique in Python Using NetworkX: A How-To',
        description: 
            'Learn to identify the largest clique in graph data with NetworkX. Step-by-step Python guide for advanced graph analysis and AI projects.',
        link: '/tutorial/largest-clique-networkx-python',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/42.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/how-to-find-largest-clique-using-networkx-in-python-174e62ac177b',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-11',
        title: 'yaps[dot]chat - one-time end-to-end encrypted anonymous chats',
        description:
            'yaps[dot]chat is a new kind of messenger. You can easily chat, send files and images to anyone without middle man. all the messages and shared information end-to-end encrypted and never stored on the server.',
        link: '/tutorial/yaps-dot-chat',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/43.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-15',
        title: 'Build a Chrome Extension with AI/ML API, Deepgram Aura & IndexedDB',
        description:
            'From manifest setup to data storage, learn to build a Chrome extension using Deepgram Aura, AI/ML API, and IndexedDB integration.',
        link: '/tutorial/chrome-extension-deepgram-indexeddb',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/41.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/building-a-chrome-extension-from-scratch-with-ai-ml-api-deepgram-aura-and-indexeddb-integration-2e5d1e6fbfb0',
            dev: 'https://dev.to/abdibrokhim/building-a-chrome-extension-from-scratch-with-aiml-api-deepgram-aura-and-indexeddb-integration-25hd',
            github: 'https://github.com/TechWithAbee/Building-a-Chrome-Extension-from-Scratch-with-AI-ML-API-Deepgram-Aura-and-IndexDB-Integration',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-16',
        title: 'Create an AI Sticker Maker with Next.js and OpenAI',
        description:
            'Build a platform to generate custom AI-driven stickers using AI/ML API, Next.js, React, Tailwind CSS, and DALL·E 3 for unique designs.',
        link: '/tutorial/ai-sticker-maker-nextjs',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/39.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/building-an-ai-sticker-maker-platform-with-ai-ml-api-next-js-8b0767a7e159',
            dev: 'https://dev.to/abdibrokhim/building-an-ai-sticker-maker-platform-with-aiml-api-nextjs-react-and-tailwind-css-using-openai-gpt-4o-and-dalle-3-models-46ip',
            github: 'https://github.com/abdibrokhim/ai-sticker-maker',
            youtube: '',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-17',
        title: 'Comprehensive Guide: Build an AI Text Humanizer with Next.js',
        description:
            'Learn to convert AI-generated text into human-like copy. Integrate AI/ML API, Clerk Auth, Next.js, Tailwind CSS, and deploy on Vercel.',
        link: '/tutorial/ai-text-humanizer-nextjs',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/40.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/comprehensive-and-step-by-step-tutorial-on-building-an-ai-text-humanizer-with-ai-ml-api-next-js-d42c4850a31c',
            dev: 'https://dev.to/abdibrokhim/step-by-step-tutorial-on-building-an-ai-text-humanizer-with-aiml-api-and-integration-with-clerk-auth-and-deploying-to-vercel-moj',
            github: 'https://github.com/abdibrokhim/humanaize',
            youtube: 'https://youtu.be/CLrENdjIe58?si=694k_MrF6pBaplf7',
            twitter: '',
            linkedin: '',
        },
    },
    {
        uid: 'blog-18',
        title: 'Create an AI Coding Interviewer Startup with Clerk Auth & Vercel',
        description:
            'Design PrepAlly—an interactive AI-driven coding interviewer. Integrate AI/ML API, Clerk authentication, and deploy easily on Vercel.',
        link: '/tutorial/ai-coding-interviewer-startup',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/38.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/lets-build-startup-2eb5ddfab4af',
            dev: 'https://dev.to/abdibrokhim/step-by-step-tutorial-on-building-ai-coding-interviewer-with-aiml-api-and-integration-with-clerk-367l',
            github: 'https://github.com/abdibrokhim/ai-coding-interviewer',
            youtube: 'https://youtu.be/qebSzqR7Tq4?si=NckCJRXIBpvqNxxc',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_lets-build-a-startup-and-apply-to-y-combinator-activity-7264306363613265920-XhCL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-19',
        title: 'Build a Chat With PDF App Using Pinecone Vector Database',
        description:
            'Learn to index PDF content and enable advanced Q&A using Pinecone. Perfect for students seeking quick answers in large documents.',
        link: '/tutorial/chat-with-pdf-pinecone',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/37.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/building-chat-with-pdf-from-scratch-with-advanced-ai-ml-api-and-pinecone-leading-vector-database-2dbdb6b3e470',
            dev: 'https://dev.to/abdibrokhim/building-chat-with-pdf-from-scratch-with-advanced-aiml-api-and-pinecone-leading-vector-database-3o7m',
            github: 'https://github.com/abdibrokhim/nextgen-o1',
            youtube: 'https://youtu.be/_wTaMLL4by0?si=LsUizYox8IjAx36z',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_building-chat-with-pdf-eg-nextgen-o1-activity-7268279006490185728-T1Zb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-20',
        title: 'Transform Modern Websites into Authentic 90s-Style Designs',
        description:
            'Use AI/ML APIs, Firecrawl, Next.js, and Tailwind CSS to redesign web pages into vintage 90s style without losing core functionality.',
        link: '/tutorial/90s-style-website-transformation',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/36.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/building-a-tool-that-transforms-modern-websites-into-authentic-90s-style-designs-while-preserving-95a835b5b7a0',
            dev: 'https://dev.to/abdibrokhim/building-a-tool-that-transforms-modern-websites-into-authentic-90s-style-designs-using-aiml-api-5ame',
            github: 'https://github.com/abdibrokhim/neuronostalgia-hack24',
            youtube: 'https://youtu.be/QzuHMTORsB8?si=gqkj927Dp0TRxMm8',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_new-tutorial-with-aiml-api-learn-to-activity-7275479646672998400-q_Sz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-21',
        title: 'Build an AI Agent for High-Converting Emails (2025 Guide)',
        description:
            'Step-by-step tutorial on creating a Gradio-based AI Email Crafting Tool. Leverage AI/ML API and OpenAI for hyper-personalized outreach.',
        link: '/tutorial/ai-agent-high-converting-emails',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/25.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/step-by-step-guide-building-an-ai-agent-to-craft-high-converting-emails-with-ai-ml-api-2025-cb68213204f4',
            dev: 'https://dev.to/abdibrokhim/step-by-step-guide-building-an-ai-agent-to-craft-high-converting-emails-with-aiml-api-2025-49bc',
            github: 'https://huggingface.co/spaces/AimlAPI/EmailAgent/main/TUTORIAL.md',
            youtube: 'https://www.youtube.com/watch?v=2FDoN_w7Uz0',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_ai-agents-tutorial-out-now-using-chatgpt-activity-7292657697517137920-EJN3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-22',
        title: 'Integrate Google Maps into Swift Playgrounds: A Quick Guide',
        description:
            'Learn how to add Google Maps to Swift Playgrounds for interactive iOS experiences. Enhance your app with location-based features fast.',
        link: '/tutorial/google-maps-swift-playgrounds',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/maps.png',
        socials: {
            medium: '',
            dev: '',
            github: '',
            youtube: 'https://www.youtube.com/watch?v=gDEMCw6R7Qc',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_integrating-google-maps-into-your-project-activity-7299074093830578176-ER_D?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-23',
        title: 'Build a Better Perplexity-Like App with Python & Gradio',
        description:
            'Follow a structured walkthrough to create Bagoodex—an open-source Perplexity-style app using Python, Gradio, and advanced AI/ML capabilities.',
        link: '/tutorial/open-source-perplexity-like-app',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/bagoodex-search.png',
        socials: {
            medium: '',
            dev: '',
            github: 'https://huggingface.co/spaces/AimlAPI/Bagoodex-Web-Search/main/TUTORIAL.md',
            youtube: 'https://youtu.be/A97hyCT5OF4?si=FztX1TmMqj3lHjSv',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_try-bagoodex-web-search-like-perplexity-activity-7300523473028710400-TnuX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-24',
        title: 'Build an AI Voice Agent with ElevenLabs, Pinecone, and OpenAI',
        description:
            'Create a knowledge-based AI voice agent using URL scraping, Pinecone vector database, OpenAI embeddings, and ElevenLabs for natural speech.',
        link: '/tutorial/ai-voice-agent-elevenlabs-pinecone-openai',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/ai-voice-agent.png',
        socials: {
            medium: '',
            dev: '',
            github: 'https://github.com/abdibrokhim/ai-voice-agent',
            youtube: 'https://www.youtube.com/watch?v=kVM_7m0iwrE',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_ai-voice-agent-with-knowledge-base-integration-activity-7302248896058028032-GlFM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-25',
        title: 'aiXplain Tutorial: SEO Keyword Generator AI Agent',
        description:
            'Discover how to leverage aiXplain as a powerful SEO keyword generator using AI Agent technology for precise content optimization.',
        link: '/tutorial/aixplain-seo-keyword-generator',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/cover-images/main/seo-keywords.png',
        socials: {
            medium: '',
            dev: '',
            github: 'https://huggingface.co/spaces/abdibrokhim/aiXplain-SEO-Keyword-Generator',
            youtube: 'https://www.youtube.com/watch?v=dKx-F1NomI4',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_aixplain-seo-keyword-generator-ai-agent-activity-7302706942819364864-gTsh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-26',
        title: 'Create a Twitter ReplyGuy using AI/ML and Twitter API V2',
        description:
            'Build a ReplyGuy bot with AI/ML API and Twitter API V2. Explore AI Agents, Function Calling, and OpenAI Agents SDK for automated replies.',
        link: '/tutorial/twitter-replyguy-ai-ml',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/Twitter-ReplyGuy/main/public/reply-guy-cover.png',
        socials: {
            medium: 'https://medium.com/@abdibrokhim/tutorial-build-a-twitter-replyguy-using-ai-ml-api-and-twitter-api-v2-c71a03426359',
            dev: 'https://dev.to/abdibrokhim/build-a-twitter-replyguy-using-aiml-api-and-twitter-api-v2-3c3j',
            github: 'https://github.com/abdibrokhim/Twitter-ReplyGuy/main/TUTORIAL.md',
            youtube: '',
            twitter: 'https://x.com/abdibrokhim/status/1904474811666985301',
            linkedin: 'https://www.linkedin.com/posts/abdibrokhim_yo-wanna-blow-up-on-twitter-without-grindin-activity-7310358499677364224-W3kj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
    {
        uid: 'blog-27',
        title: 'Build a Blazing-Fast Rust URL Shortener with Shuttle',
        description:
            'Learn step-by-step to create notlink—an open-source, lightning-fast Rust URL shortener. Perfect for Rust enthusiasts seeking quick deployment.',
        link: '/tutorial/rust-url-shortener-shuttle',
        cover: 'https://raw.githubusercontent.com/abdibrokhim/notlink/main/assets/cover.png',
        socials: {
            medium: '',
            dev: '',
            github: 'https://github.com/abdibrokhim/notlink/main/TUTORIAL.md',
            youtube: 'https://www.youtube.com/watch?v=Mhz_eVH3XnQ',
            twitter: '',
            linkedin: 'https://www.linkedin.com/posts/opencommunity_just-uploaded-my-first-ever-rust-video-tutorial-activity-7296255009766170624-VhAt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt2h8MBtHotRGgb_ePOpWusMY9VKCqELw8',
        },
    },
]

export const TUTORIALS_BY_UID = TUTORIALS.reduce((acc, tutorial) => {
    acc[tutorial.uid] = tutorial;
    return acc;
}, {} as Record<string, Tutorial>);

// Filter tutorials that have YouTube videos
export const VIDEO_TUTORIALS: VideoTutorial[] = TUTORIALS
    .filter(tutorial => tutorial.socials?.youtube && tutorial.socials.youtube !== '')
    .map(tutorial => ({
        uid: tutorial.uid,
        title: tutorial.title,
        description: tutorial.description,
        link: tutorial.link,
        youtubeUrl: tutorial.socials!.youtube!,
        cover: tutorial.cover || '',
        mediumUrl: tutorial.socials?.medium || '',
        devUrl: tutorial.socials?.dev || '',
        githubUrl: tutorial.socials?.github || '',
        twitterUrl: tutorial.socials?.twitter || '',
        linkedinUrl: tutorial.socials?.linkedin || ''
    }));

// Index for quick lookup by UID
export const VIDEO_TUTORIALS_BY_UID = VIDEO_TUTORIALS.reduce((acc, tutorial) => {
    acc[tutorial.uid] = tutorial;
    return acc;
}, {} as Record<string, VideoTutorial>);
