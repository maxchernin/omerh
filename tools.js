// Tools data array
const tools = [
    // AI Chat & Assistants
    {
        name: "ChatGPT",
        description: {
            en: "Advanced AI language model for conversation and assistance",
            he: "מודל שפה מתקדם לשיחה וסיוע"
        },
        url: "https://chat.openai.com",
        icon: "https://chat.openai.com/favicon.ico",
        category: "AI Chat",
        tags: ["chat", "GPT", "assistant"]
    },
    {
        name: "Claude",
        description: {
            en: "AI assistant from Anthropic for analysis and complex tasks",
            he: "עוזר בינה מלאכותית מבית Anthropic לניתוח ומשימות מורכבות"
        },
        url: "https://claude.ai",
        category: "AI Chat",
        tags: ["chat", "analysis", "writing"]
    },
    {
        name: "Bard",
        description: {
            en: "Google's conversational AI assistant",
            he: "עוזר בינה מלאכותית שיחתי של גוגל"
        },
        url: "https://bard.google.com",
        category: "AI Chat",
        tags: ["google", "chat", "search"]
    },

    // Development Tools
    {
        name: "Cursor",
        description: {
            en: "AI-powered code editor",
            he: "עורך קוד מבוסס בינה מלאכותית"
        },
        url: "https://cursor.sh",
        category: "Development",
        tags: ["coding", "IDE", "development"]
    },
    {
        name: "v0.dev",
        description: {
            en: "AI website builder by Vercel",
            he: "בניית אתרים באמצעות בינה מלאכותית מבית Vercel"
        },
        url: "https://v0.dev",
        category: "Development",
        tags: ["web", "ui", "development"]
    },
    {
        name: "Tenderly",
        description: {
            en: "Development platform for Web3 and blockchain",
            he: "פלטפורמת פיתוח ל-Web3 ובלוקצ'יין"
        },
        url: "https://tenderly.co",
        category: "Blockchain Dev",
        tags: ["development", "web3", "blockchain"]
    },

    // Creative & Design Tools
    {
        name: "Pika",
        description: {
            en: "AI video creation and editing platform",
            he: "פלטפורמה ליצירת ועריכת וידאו באמצעות בינה מלאכותית"
        },
        url: "https://pika.art",
        category: "Creation",
        tags: ["video", "creation", "editing"]
    },
    {
        name: "Kittl",
        description: {
            en: "AI-powered design tool for vector graphics",
            he: "כלי עיצוב מבוסס בינה מלאכותית לגרפיקה וקטורית"
        },
        url: "https://www.kittl.com",
        category: "Design",
        tags: ["design", "vector", "graphics"]
    },

    // Business & Communication
    {
        name: "Commbox",
        description: {
            en: "AI-powered customer communication platform",
            he: "פלטפורמת תקשורת לקוחות מבוססת בינה מלאכותית"
        },
        url: "https://commbox.io",
        category: "Business",
        tags: ["communication", "customer service"]
    },
    {
        name: "Make",
        description: {
            en: "Automation platform with AI capabilities",
            he: "פלטפורמת אוטומציה עם יכולות בינה מלאכותית"
        },
        url: "https://www.make.com",
        category: "Business",
        tags: ["automation", "workflow"]
    },

    // Cryptocurrency & Blockchain
    {
        name: "Token Terminal",
        description: {
            en: "Crypto analytics and metrics platform",
            he: "פלטפורמה לניתוח ומדדי קריפטו"
        },
        url: "https://tokenterminal.com",
        category: "Crypto",
        tags: ["analytics", "finance", "crypto"]
    },
    {
        name: "BitcoinTreasuries",
        description: {
            en: "Track institutional Bitcoin holdings",
            he: "מעקב אחר החזקות ביטקוין מוסדיות"
        },
        url: "https://bitcointreasuries.net",
        category: "Crypto",
        tags: ["bitcoin", "finance"]
    },
    {
        name: "zkSync",
        description: {
            en: "Ethereum scaling solution with zkRollup technology",
            he: "פתרון סקיילינג לאית'ריום עם טכנולוגיית zkRollup"
        },
        url: "https://portal.zksync.io",
        category: "Blockchain",
        tags: ["ethereum", "scaling", "zkrollup"]
    },
    {
        name: "Polygon Staking",
        description: {
            en: "Staking platform for Polygon network",
            he: "פלטפורמת סטייקינג לרשת פוליגון"
        },
        url: "https://wallet.polygon.technology/staking",
        category: "DeFi",
        tags: ["staking", "polygon", "earnings"]
    },
    {
        name: "KuCoin",
        description: {
            en: "Cryptocurrency exchange platform",
            he: "פלטפורמת מסחר במטבעות קריפטוגרפיים"
        },
        url: "https://www.kucoin.com",
        category: "Crypto Exchange",
        tags: ["exchange", "trading", "crypto"]
    },
    {
        name: "Kaspa Wallet",
        description: {
            en: "Digital wallet for Kaspa cryptocurrency",
            he: "ארנק דיגיטלי למטבע קריפטו קספה"
        },
        url: "https://wallet.kaspa.org",
        category: "Crypto Wallet",
        tags: ["wallet", "kaspa", "cryptocurrency"]
    },

    // Research & Learning
    {
        name: "Undermind",
        description: {
            en: "AI-powered scientific research assistant",
            he: "עוזר מחקר מדעי מבוסס בינה מלאכותית"
        },
        url: "https://www.undermind.ai",
        category: "Research",
        tags: ["research", "science", "academic"]
    },
    {
        name: "NotebookLM",
        description: {
            en: "Google's AI note-taking and research tool",
            he: "כלי רישום ומחקר מבוסס בינה מלאכותית של גוגל"
        },
        url: "https://notebooklm.google.com",
        category: "Learning",
        tags: ["notes", "research", "google"]
    },

    // Crypto News & Research
    {
        name: "Wu Blockchain",
        description: {
            en: "Chinese cryptocurrency and blockchain news platform",
            he: "פלטפורמת חדשות קריפטו ובלוקצ'יין סינית"
        },
        url: "https://www.wublockchain.com",
        category: "Crypto News",
        tags: ["news", "china", "blockchain"]
    },
    {
        name: "CryptoSlate",
        description: {
            en: "Cryptocurrency news, data, and research platform",
            he: "פלטפורמת חדשות, נתונים ומחקר בתחום הקריפטו"
        },
        url: "https://cryptoslate.com",
        category: "Crypto News",
        tags: ["news", "data", "research"]
    },
    {
        name: "Decrypt",
        description: {
            en: "Cryptocurrency and blockchain technology news and education",
            he: "חדשות וחינוך בנושא קריפטו וטכנולוגיית בלוקצ'יין"
        },
        url: "https://decrypt.co",
        category: "Crypto Education",
        tags: ["news", "education", "blockchain"]
    },
    {
        name: "Datawallet",
        description: {
            en: "Daily cryptocurrency newsletter and research platform",
            he: "פלטפורמת מחקר וניוזלטר יומי בתחום הקריפטו"
        },
        url: "https://datawallet.com",
        category: "Crypto Research",
        tags: ["newsletter", "research", "analysis"]
    },

    // Utilities
    {
        name: "12ft",
        description: {
            en: "Bypass article paywalls",
            he: "עקיפת חומות תשלום במאמרים"
        },
        url: "https://12ft.io",
        category: "Utilities",
        tags: ["reading", "paywall", "articles"]
    },
    {
        name: "Character Calculator",
        description: {
            en: "Count and analyze text characters",
            he: "ספירה וניתוח של תווים בטקסט"
        },
        url: "https://charactercalculator.com",
        category: "Utilities",
        tags: ["text", "analysis"]
    },

    // Design & Creative Tools
    {
        name: "SPACE TYPE GENERATOR",
        description: {
            en: "Creative typography and text design generator",
            he: "כלי ליצירת טיפוגרפיה ועיצוב טקסט יצירתי"
        },
        url: "https://spacetypegenerator.com",
        category: "Design",
        tags: ["typography", "design", "generator"]
    },
    {
        name: "Blockade Labs",
        description: {
            en: "3D AI image generation and transformation platform",
            he: "פלטפורמה ליצירת והמרת תמונות תלת-מימדיות באמצעות בינה מלאכותית"
        },
        url: "https://www.blockadelabs.com",
        category: "AI Design",
        tags: ["3D", "AI", "images"]
    },
    {
        name: "Spline",
        description: {
            en: "3D design tool for the web",
            he: "כלי עיצוב תלת-מימד לאינטרנט"
        },
        url: "https://spline.design",
        category: "Design",
        tags: ["3D", "web", "design"]
    },

    // Additional Crypto Analytics
    {
        name: "CoinMarketCap",
        description: {
            en: "Cryptocurrency prices, market data and analysis",
            he: "מחירי קריפטו, נתוני שוק וניתוח"
        },
        url: "https://coinmarketcap.com",
        category: "Crypto Analytics",
        tags: ["prices", "market data", "analytics"]
    },
    {
        name: "De.Fi",
        description: {
            en: "DeFi portfolio tracker and crypto wallet security",
            he: "מעקב תיק השקעות DeFi ואבטחת ארנק קריפטו"
        },
        url: "https://de.fi",
        category: "DeFi",
        tags: ["portfolio", "security", "tracking"]
    },
    {
        name: "Messari",
        description: {
            en: "Crypto market intelligence and research platform",
            he: "פלטפורמת מודיעין ומחקר שוק הקריפטו"
        },
        url: "https://messari.io",
        category: "Crypto Research",
        tags: ["research", "market", "intelligence"]
    },

    // Utility Tools
    {
        name: "Bitly",
        description: {
            en: "URL shortening and link management platform",
            he: "פלטפורמה לקיצור וניהול קישורים"
        },
        url: "https://bitly.com",
        category: "Utilities",
        tags: ["links", "shortener", "management"]
    },
    {
        name: "TinyURL",
        description: {
            en: "URL shortening service",
            he: "שירות לקיצור כתובות אינטרנט"
        },
        url: "https://tinyurl.com",
        category: "Utilities",
        tags: ["links", "shortener"]
    },
    {
        name: "BuiltWith",
        description: {
            en: "Website technology lookup tool",
            he: "כלי לזיהוי טכנולוגיות באתרי אינטרנט"
        },
        url: "https://builtwith.com",
        category: "Development",
        tags: ["technology", "analysis", "web"]
    },

    // AI Assistants & Productivity
    {
        name: "Taskade",
        description: {
            en: "AI-powered productivity and team collaboration platform",
            he: "פלטפורמת פרודוקטיביות ושיתוף פעולה צוותי מבוססת בינה מלאכותית"
        },
        url: "https://www.taskade.com",
        category: "Productivity",
        tags: ["collaboration", "productivity", "AI"]
    },
    {
        name: "Futurepedia",
        description: {
            en: "Directory of AI tools and software solutions",
            he: "ספריית כלים ופתרונות בינה מלאכותית"
        },
        url: "https://www.futurepedia.io",
        category: "AI Directory",
        tags: ["directory", "tools", "software"]
    },
    {
        name: "JENOVA",
        description: {
            en: "Unified AI platform combining multiple AI capabilities",
            he: "פלטפורמת בינה מלאכותית מאוחדת המשלבת יכולות מרובות"
        },
        url: "https://jenova.ai",
        category: "AI Platform",
        tags: ["unified", "AI", "platform"]
    },

    // Research & Educational Tools
    {
        name: "NoteGPT",
        description: {
            en: "AI note summarizer and study material generator",
            he: "מסכם הערות ויוצר חומרי לימוד מבוסס בינה מלאכותית"
        },
        url: "https://notegpt.io",
        category: "AI Learning",
        tags: ["notes", "study", "summarizer"]
    },
    {
        name: "PROMPTCACHE",
        description: {
            en: "AI-powered text extraction from images",
            he: "חילוץ טקסט מתמונות באמצעות בינה מלאכותית"
        },
        url: "https://promptcache.com",
        category: "AI Tools",
        tags: ["OCR", "images", "text"]
    },
    {
        name: "crewAI",
        description: {
            en: "Platform for building multi-AI agent systems",
            he: "פלטפורמה לבניית מערכות מרובות סוכני בינה מלאכותית"
        },
        url: "https://www.crewai.com",
        category: "AI Development",
        tags: ["agents", "development", "systems"]
    },

    // Market Analysis & Tracking
    {
        name: "Bitcoin Tools",
        description: {
            en: "Comprehensive Bitcoin analysis and tracking tools",
            he: "כלים מקיפים לניתוח ומעקב אחר ביטקוין"
        },
        url: "https://bitcoin.tools",
        category: "Crypto Analytics",
        tags: ["bitcoin", "analysis", "tracking"]
    },
    {
        name: "CompaniesMarketCap",
        description: {
            en: "Real-time market capitalization rankings and analysis",
            he: "דירוג וניתוח שווי שוק בזמן אמת"
        },
        url: "https://companiesmarketcap.com",
        category: "Market Data",
        tags: ["market cap", "rankings", "analysis"]
    },
    {
        name: "Ecoinometrics",
        description: {
            en: "Advanced cryptocurrency market metrics and analysis",
            he: "מדדים וניתוח מתקדם של שוק הקריפטו"
        },
        url: "https://ecoinometrics.substack.com",
        category: "Crypto Research",
        tags: ["metrics", "analysis", "research"]
    }
];
