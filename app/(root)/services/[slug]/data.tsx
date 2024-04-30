import { servicesIcon } from "@/public/assets/servicesIcon/index";
import { StaticImageData } from "next/image";

type ServiceInformation = {
  heading: string;
  info: string[];
};

type Service = {
  title: string;
  bgImage: StaticImageData;
  description: string;
  image: string;
  theme: string;
  information: ServiceInformation[];
};

type ServiceData = {
  webdevelopment: Service;
  seo: Service;
  socialmedia: Service;
  emailmarketing: Service;
  contentwriting: Service;
  googleads: Service;
  metaads: Service;
};

export const serviceData: ServiceData[] = [
  {
    webdevelopment: {
      title: "Web Development",
      bgImage: servicesIcon.webDevelopmentBg,
      description:
        "We will build you website that is optimized for search engines, user-friendly, and visually appealing",
      image: servicesIcon.webDevelopment,
      theme: "#C991F3",
      information: [
        {
          heading: "Planning and Strategy",
          info: [
            "This stage involves defining the purpose, goals, target audience, and scope of the website. It also includes creating a sitemap and wireframes to outline the structure and layout.",
          ],
        },
        {
          heading: "Front-end Development",
          info: [
            "Front-end development focuses on the visible parts of the website that users interact with.",
            "HTML (Hypertext Markup Language): Provides the structure and content of web pages.",
            "CSS (Cascading Style Sheets): Controls the presentation and style of the HTML elements.",
            "JavaScript: Adds interactivity and dynamic behavior to web pages",
          ],
        },
        {
          heading: "Responsive Design",
          info: [
            "Ensuring that the website is optimized for various devices and screen sizes (desktops, laptops, tablets, and smartphones) is crucial for a positive user experience.",
          ],
        },
        {
          heading: "Back-end Development",
          info: [
            "Back-end development involves server-side scripting, databases, and server management",
            "Server-side Languages: Such as PHP, Python, or React.js for handling server-side logic.",
            "Databases: Such as MySQL, PostgreSQL, MongoDB, etc., for storing and retrieving data.",
            "Frameworks and CMS (Content Management Systems): Such as WordPress, Drupal, Joomla, Django, Flask, Laravel, etc., to streamline development and manage content.",
            "Testing and Quality Assurance: Thoroughly testing the website for functionality, compatibility, usability, and performance across different browsers, devices, and operating systems.",
          ],
        },
        {
          heading: "Content Creation",
          info: [
            "Developing high-quality content including text, images, videos, and other multimedia elements that align with the website's goals and target audience.",
          ],
        },
        {
          heading: "Testing and Quality Assurance",
          info: [
            "Thoroughly testing the website for functionality, compatibility, usability, and performance across different browsers, devices, and operating systems.",
          ],
        },
      ],
    },

    seo: {
      title: "SEO",
      bgImage: servicesIcon.seoBg,
      description:
        "We will optimize your website to rank higher on search engines",
      image: servicesIcon.seo,
      theme: "#F8E28A",
      information: [
        {
          heading: "E-Commerce SEO",
          info: [
            "Conduct keyword research: Identify relevant keywords related to products/services offered by the e-commerce platform.",
            "Optimize product pages: Ensure each product page is optimized with appropriate title tags, meta descriptions, and product descriptions containing relevant keywords.",
            "Improve site structure: Enhance site navigation and structure for better user experience and search engine crawling.",
            "Improve site structure: Enhance site navigation and structure for better user experience and search engine crawling.",
            "Optimize images: Use descriptive alt text and file names for images to improve visibility in image search results.",
            "Implement schema markup: Add structured data markup to provide search engines with additional context about products and improve visibility in search results.",
          ],
        },
        {
          heading: "SEO Audit:",
          info: [
            "Evaluate current SEO performance: Analyze website traffic, keyword rankings, backlink profile, and technical SEO issues.",
            "Identify areas for improvement: Look for opportunities to optimize on-page elements, enhance site speed, fix broken links, and improve overall website usability.",
            "Competitive analysis: Assess competitor SEO strategies to identify strengths and weaknesses.",
            "Develop an action plan: Provide recommendations for addressing identified issues and improving overall SEO performance.",
          ],
        },
        {
          heading: "Technical SEO",
          info: [
            "Website crawlability: Ensure search engine bots can crawl and index all relevant pages on the website.",
            "Website speed optimization: Optimize page load times to improve user experience and search engine rankings.",
            "Mobile-friendliness: Ensure the website is responsive and provides a seamless experience across different devices.",
            "Fix technical errors: Address issues such as broken links, duplicate content, and crawl errors to improve site health.",
          ],
        },
        {
          heading: "Local SEO",
          info: [
            "Local keyword optimization: Target location-specific keywords to attract local customers.",
            "Google My Business optimization: Claim and optimize the Google My Business listing with accurate business information, photos, and customer reviews.",
            "Local citations: Build citations on relevant directories and websites to improve local search visibility.",
            "Local link building: Acquire backlinks from local websites and directories to establish relevance within the local community.",
          ],
        },
        {
          heading: "National SEO",
          info: [
            "Comprehensive keyword strategy: Target high-volume and competitive keywords relevant to the national audience.",
            "Content optimization: Create high-quality, authoritative content targeting national keywords to attract organic traffic.",
            "Backlink acquisition: Build a diverse backlink profile from authoritative websites to improve national search visibility.",
            " Social media marketing: Utilize social media platforms to promote content and engage with the national audience.",
          ],
        },
        {
          heading: "Link Building",
          info: [
            "Outreach campaigns: Identify relevant websites and blogs for link placement and conduct outreach to secure backlinks.",
            " Content marketing: Create compelling content assets to attract natural backlinks from other websites.",
            " Guest blogging: Contribute guest posts to authoritative websites within the industry to earn backlinks and increase brand visibility.",
            " Monitor backlink profile: Regularly audit and monitor the backlink profile to identify and address any toxic or spammy links.",
          ],
        },
      ],
    },

    socialmedia: {
      title: "Social Media Marketing",
      bgImage: servicesIcon.socialMediaBg,
      description:
        "We will help you create and manage your social media presence",
      image: servicesIcon.socialMedia,
      theme: "#F3A0D5",
      information: [
        {
          heading: "Content Strategy",
          info: [
            "Developing a plan for the type of content to create and share on social media platforms. This includes deciding on the content format (text, images, videos, etc.), frequency of posting, and topics that align with the target audience's interests.",
          ],
        },
        {
          heading: "Audience Research and Targeting",
          info: [
            "Understanding the demographics, interests, behaviors, and preferences of the target audience to tailor content and messaging accordingly. Utilizing analytics tools and insights from social media platforms can help in this process.",
          ],
        },
        {
          heading: "Advertising",
          info: [
            "Running paid advertising campaigns on social media platforms to reach a larger audience, target specific demographics, promote products or services, and increase brand visibility. This may include sponsored posts, display ads, and other forms of paid promotion.",
          ],
        },
        {
          heading: "Influencer Partnerships",
          info: [
            "Collaborating with influencers or key opinion leaders in the industry to amplify reach, credibility, and engagement with the target audience.",
          ],
        },
        {
          heading: "Social Media Management Tools",
          info: [
            "Utilizing tools and platforms to schedule posts, monitor conversations, track analytics, and manage multiple social media accounts efficiently.",
          ],
        },
        {
          heading: "Hashtag Strategy",
          info: [
            "Developing a strategic approach to using hashtags to increase discoverability and reach on platforms like Twitter, Instagram, and LinkedIn. Researching relevant and trending hashtags can help extend the reach of posts beyond existing followers.",
          ],
        },
      ],
    },

    emailmarketing: {
      title: "Email Marketing",
      bgImage: servicesIcon.emailMarketingBg,
      description:
        "We will help you create and manage your email marketing campaigns",
      image: servicesIcon.emailMarketing,
      theme: "#F87577",
      information: [
        {
          heading: "Subscriber List",
          info: [
            ": Building and maintaining a list of subscribers who have opted in to receive emails from your business is fundamental. These subscribers can include current customers, leads, or individuals who have shown interest in your products or services.",
          ],
        },
        {
          heading: "Email Content",
          info: [
            "The content of your emails should be relevant, valuable, and engaging to your subscribers. This may include promotions, product updates, educational content, newsletters, or personalized messages.",
          ],
        },
        {
          heading: "Subject Line",
          info: [
            "The subject line is the first thing subscribers see and plays a crucial role in whether they open the email or not. It should be compelling, concise, and relevant to the content of the email.",
          ],
        },
        {
          heading: "Design and Layout",
          info: [
            "The design and layout of your emails should be visually appealing, mobile-responsive, and consistent with your brand identity. Including images, graphics, and formatting that enhance readability and engagement is important.",
          ],
        },
        {
          heading: "Call to Action (CTA)",
          info: [
            "Every email should include a clear and actionable CTA that prompts subscribers to take the desired action, such as making a purchase, signing up for an event, or visiting your website.",
          ],
        },
        {
          heading: "Personalization",
          info: [
            "Personalizing emails based on subscriber preferences, past interactions, or demographics can significantly improve engagement and conversion rates. This may include using the subscriber's name, recommending products based on past purchases, or segmenting your email list for targeted messaging.",
          ],
        },
        {
          heading: "Timing and Frequency",
          info: [
            "Sending emails at the right time and frequency is crucial for maximizing open and click-through rates while minimizing unsubscribes. Test different send times and frequencies to determine what works best for your audience.",
          ],
        },
        {
          heading: "Email Automation",
          info: [
            "Automation allows you to send targeted, timely emails based on subscriber actions or triggers, such as welcome emails, abandoned cart reminders, or birthday offers. This helps streamline your email marketing efforts and improves efficiency.",
          ],
        },
        {
          heading: "Analytics and Tracking",
          info: [
            ": Monitoring and analyzing key metrics such as open rates, click-through rates, conversion rates, and unsubscribe rates is essential for evaluating the performance of your email campaigns and making data-driven decisions to optimize future campaigns.",
          ],
        },
      ],
    },
    contentwriting: {
      title: "Content Writing and Blog Post",
      bgImage: servicesIcon.blogBg,
      description:
        "We will help you create high-quality content that engages your audience",
      image: servicesIcon.blog,
      theme: "#AEE6E6",
      information: [
        {
          heading: "Headline",
          info: [
            "A compelling headline grabs attention and entices readers to click and read further.",
          ],
        },
        {
          heading: "Introduction",
          info: [
            "The introduction should provide a brief overview of what the blog post is about and hook the reader's interest to continue reading",
          ],
        },
        {
          heading: "Engaging Content",
          info: [
            "The main body of the content should be well-organized, informative, and engaging. It should address the topic thoroughly and provide value to the reader. This can include relevant information, insights, examples, and supporting evidence.",
          ],
        },
        {
          heading: "Clarity and Coherence",
          info: [
            "Content should be clear, easy to understand, and logically structured. Use subheadings, bullet points, and short paragraphs to improve readability.",
          ],
        },
        {
          heading: "Voice and Tone",
          info: [
            "Establishing a consistent voice and tone throughout the content helps create a connection with the audience. Whether it's formal, conversational, or authoritative, the tone should match the brand and target audience.",
          ],
        },
        {
          heading: "SEO Optimization",
          info: [
            "Incorporating relevant keywords naturally throughout the content helps improve search engine visibility and rankings. However, it's important to avoid keyword stuffing and prioritize creating valuable content for readers.",
          ],
        },
        {
          heading: "Visuals",
          info: [
            "Including images, infographics, videos, or other visual elements can enhance the appeal of the content and break up large blocks of text.",
          ],
        },
        {
          heading: "Call to Action",
          info: [
            "Every blog post should include a clear call to action that prompts readers to take the next step, whether it's subscribing to a newsletter, downloading a resource, or contacting the business.",
          ],
        },
        {
          heading: "Editing and Proofreading",
          info: [
            "Thoroughly editing and proofreading content ensures accuracy, clarity, and professionalism. Check for spelling and grammar errors, factual inaccuracies, and consistency in style and tone.",
          ],
        },
        {
          heading: "Conclusion",
          info: [
            "Summarize the key points discussed in the blog post and provide a conclusion that reinforces the main message or encourages further action.",
          ],
        },
      ],
    },
    googleads: {
      title: "Google Ads",
      bgImage: servicesIcon.googleAdsBg,
      description: "We will help you create and manage Google Ads campaigns",
      image: servicesIcon.googleAds,
      theme: "#8DD783",
      information: [
        {
          heading: "Ad Campaign Objective",
          info: [
            "Google Ads offers a wide range of campaign objectives including search campaigns, display campaigns, video campaigns, app campaigns, shopping campaigns, and smart campaigns.",
          ],
        },
        {
          heading: "Keyword Targeting",
          info: [
            "Advertisers can target specific keywords related to their products or services, allowing their ads to appear when users search for those keywords on Google Search.",
          ],
        },
        {
          heading: "Ad Creatives",
          info: [
            "Advertisers can create text ads, responsive search ads, image ads, video ads, app promotion ads, and shopping ads to showcase their products or services.",
          ],
        },
        {
          heading: "Ad Placement",
          info: [
            "Google Ads can appear on various Google platforms including Google Search, Google Display Network, YouTube, Google Maps, and Google Play.",
          ],
        },
        {
          heading: "Ad Bidding",
          info: [
            "Advertisers can choose from different bidding strategies such as cost per click (CPC), cost per thousand impressions (CPM), cost per acquisition (CPA), or target return on ad spend (ROAS).",
          ],
        },
        {
          heading: "Ad Extensions",
          info: [
            "Google Ads allow advertisers to enhance their ads with extensions such as sitelink extensions, callout extensions, structured snippet extensions, call extensions, location extensions, and app extensions.",
          ],
        },
        {
          heading: "Ad Performance Tracking",
          info: [
            "Advertisers can track the performance of their ads using the Google Ads platform, which provides insights such as clicks, impressions, click-through rate (CTR), conversions, conversion rate, and cost per conversion. They can also integrate Google Analytics for more comprehensive tracking and analysis.",
          ],
        },
      ],
    },
    metaads: {
      title: "Meta Ads",
      bgImage: servicesIcon.metaAdsBg,
      description: "We will help you create and manage Meta Ads campaigns",
      image: servicesIcon.metaAds,
      theme: "#3282F1",
      information: [
        {
          heading: "Ad Campaign Objective",
          info: [
            "Meta Ads allow advertisers to choose from various campaign objectives, such as brand awareness, reach, traffic, engagement, app installs, video views, lead generation, messages, conversions, catalogue sales, and store traffic.",
          ],
        },
        {
          heading: "Target Audience",
          info: [
            "Advertisers can define their target audience based on demographics, interests, behaviours, and connections on Meta platforms. Custom audiences, lookalike audiences, and retargeting options are also available.",
          ],
        },
        {
          heading: "Ad Creatives",
          info: [
            "Advertisers can create various types of ad creatives including images, videos, carousels, slideshows, collections, instant experiences (formerly Canvas ads), and augmented reality (AR) experiences.",
          ],
        },
        {
          heading: "Ad Placement",
          info: [
            "Ads can be placed across different placements on Meta platforms including Facebook, Instagram, Messenger, and Audience Network. Advertisers can choose automatic placements or manually select specific placements.",
          ],
        },
        {
          heading: "Ad Bidding",
          info: [
            "Advertisers can choose from different bidding strategies such as cost per click (CPC), cost per thousand impressions (CPM), cost per conversion, or value-based bidding.",
          ],
        },
        {
          heading: "Ad Formats",
          info: [
            "Meta Ads support various ad formats including single image, single video, slideshow, carousel, collection, instant experience, and playable ads.",
          ],
        },
        {
          heading: "Ad Performance Tracking",
          info: [
            "Advertisers can track the performance of their ads using the Ads Manager platform, which provides insights such as reach, impressions, clicks, conversions, and return on ad spend (ROAS).",
          ],
        },
      ],
    },
  },
];
