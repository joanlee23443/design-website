"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import VimeoEmbed from "@/components/vimeo-embed"

const projectData: Record<string, any> = {
  hiraeth: {
    title: "Hiraeth",
    year: "2025",
    duration: "4 months",
    client: "Senior Capstone",
    tags: ["Physical Prototyping", "Illustration", "UX Research"],
    description:
      'A collection of my friends\' childhood stories, sentimental objects, and interpretations of "home" in dollhouse form.',
    heroImage: "/images/recent-project-interior.jpeg",
    introImage: "/images/hiraeth-hero-pic.png",
    sections: {
      context: {
        heading: "What is Home?",
        content:
          "Hiraeth: a deep longing and nostalgia for a home that may or may not have ever existed. This was my last project in school, so I took the opportunity to create something personally meaningful and connect with people around me on a deeper level. As someone who has moved throughout my childhood, I have been unable to consider my place of living my home ever since I left my first house. Home looks different for everyone and it might not be a place that actually exists. Maybe it's a combination of places that exist. Or a place that exists only in the heart. Perhaps it's literally your childhood home, or at least the parts that you remember. To me, a home is a place that holds my dearest memories, fills me with comfort and nostalgia, and evokes a sense of belonging. It is a combination of all the places I've lived and people I've loved, so I was curious as to what home looked like to some of the people who made Pittsburgh home to me for the past four years.",
        images: ["/images/recent-project-interior.jpeg"],
      },
      concept: {
        heading: "Interactive History",
        content:
          "A series of miniature spaces, designed based on various individuals' personal interpretations of home. Each room can be stacked in a box that allows it to be played with as a dollhouse, just as one did as a child, making new stories within the context of the old. Perhaps even strangers can find a home within Hiraeth's paper walls when they read through the small zines that contain personal accounts that pertain to each room.",
        images: ["/images/hiraeth-interviews.png", "/images/hiraeth-rooms.png"],
      },
      process: {
        subsections: [
          {
            heading: "Story Collection",
            content:
              "In order to deeply understand each person's concept of home, I organized interviews with them and had them draw as they shared. Questions were asked only to prompt interviewees if they were having trouble visualizing or remembering. Some preferred having a box to draw within, while others freely doodled all over the page.  Overall, I conducted ten interviews and selected the ones that allowed for the most range in terms of themes and upbringings. Then, using their sketches and recordings of our interviews, I created templates that I could cut and assemble.",
            images: ["/images/hiraeth-drawings1.png", "/images/hiraeth-drawings2.png", "/images/hiraeth-drawings3.png"],
          },
          {
            heading: "Building a Home",
            content:
              "I knew I wanted to use paper for these structures since I enjoyed the idea of the two-dimensional paper the interviewees used to sketch, turning into a three-dimensional model they could interact with. After a series of experiments, the best performing material proved to be bristol board, with its stiffness providing support and smoothness offering a clean aesthetic. Additionally, I prototyped various versions of a room (drawings printed onto the paper, coloring all surfaces, pop-up style, etc.), but feedback from my interviewees informed my decisions to leave the paper blank and fully construct 3D miniatures. Only the key elements from each room would be highlighted by making them out of colored papers. Everything was cut out using a Cricut Maker for the most precise edges, then glued by hand.",
            images: ["/images/hiraeth-building.png", "/images/hiraeth-structures.png"],
          },
        ],
      },
      interaction: {
        heading: "Explore & Enjoy",
        content:
          "Each room has some combination of moveable parts, furniture pieces scaled to dolls, and hidden details. On top of that, they are modular and can be moved around within the dollhouse's frame to customize the layout of the home.",
        images: [
          "/images/hiraeth-interactions1.png",
          "/images/hiraeth-interactions2.png",
          "/images/hiraeth-interactions3.png",
          "/images/hiraeth-interactions4.png",
        ],
      },
      gallery: {
        heading: "Written Form",
        content: "Zines made to keep record of each individual's stories, miniature homes, and spoken words.",
        images: ["/images/hiraeth-zines.png", "/images/hiraeth-spreads.gif"],
      },
      reflection: {
        heading: "Tangible Storytelling",
        images: ["/images/hiraeth-showcase2.png", "/images/hiraeth-showcase1.png"],
        content:
          "This dollhouse is simply a miniature model of a house. No screens, no buttons, no speakers... and yet, inherently interactive and engaging. Simplicity is often just as effective as complex ideas. This project made me confident that I could design an experience that was humble, but memorable. Additionally, the responses I received from the showcase reinforced the idea that products and spaces (as Hiraeth is, in a way, both) are effective media for storytelling, as friends and strangers alike commented that the mini rooms touched their hearts. I greatly enjoyed utilizing skills like model-making, UX research, and iterative prototyping that I had learned throughout the years, and pouring them into a project that resonated with my soul. Many thanks to Nicki, Roy, Minjoo, Izzy, Julianne, and Hannah for being so open and sharing your stories with me. When I began this project, I was only sure of two things--I wanted to connect with people and build something physical. Little did I know that would lead me to form such deep relationships with the people who were willing to participate. Moreover, thanks to Peter for always offering feedback, and to Dylan for being the most encouraging professor and consistently providing me with pep talks. Lastly, thank you Pittsburgh, for being a place where I now consider home.",
      },
    },
    programs: ["Adobe Ai/PS", "Cricut"],
    roles: ["Creative Director", "Visual Designer", "Physical Fabricator"],
    skills: ["UX Research", "Spatial Design", "Physical Prototyping", "Illustration", "Photography", "Graphic Design"],
  },
  "shwood-experience": {
    title: "Shwood Pop-Up Experience",
    year: "2024",
    duration: "12 weeks",
    client: "Shwood Eyewear",
    tags: ["Exhibition", "Game Design", "Illustration"],
    description:
      "Bringing adventure into the everyday with office cubicles that have been overtaken by nature, showcasing Shwood's exploratory use of materials in their products.",
    heroImage: "/images/forrest-shwoodson-interior.jpeg",
    sections: {
      context: {
        heading: "Brand Essence",
        content:
          "<a href='https://shwoodshop.com/' target='_blank' rel='noopener noreferrer' class='underline hover:text-gray-300'>Shwood</a> is an eyewear brand that stands out for its broad use of materials in its frames. They are also known for their lighthearteded personality and quirky founding story. How can we showcase these selling points while bringing in a new audience? Full research deck <a href='https://drive.google.com/file/d/1-jgz-RmeiwWJT8-CGl1qDOFRyXae3XFp/view?usp=sharing' target='_blank' rel='noopener noreferrer' class='underline hover:text-gray-300'>here</a>.",
        images: ["/images/shwood-research.png"],
      },
      concept: {
        heading: "Bringing Adventure Into the Everyday",
        content:
          "A familiar, mundane office cubicle that's been... consumed by nature? Why is there a computer with a half-wooden keyboard asking for a password? Explore this curious space and search for answers with Shwood as you sift through drawers full of foliage and printers that dispense bark.",
        images: ["/images/shwood-hero.jpg"],
      },
      process: {
        heading: "Where + How",
        content:
          "I selected Market Square in downtown Pittsburgh as the project location. This site often hosts live events and vendors, and is right beside office buildings like PPG Place and PNC Bank. The green of the nature in Shwood's pop-up would contrast with the gray surroundings, which would intrigue anyone walking by. The time of year this event would set up would be spring or summer, as those seasons bring in an influx of new employees to the city and weather nice enough for participation in an outdoor activity. As for the visualization of this concept, I was able to 3D model, design UI, iterate on spatial movements, roleplay emotional reactions, and consider logistics, such as the presence of moderators in the form of NPC-like actors. I learned to refine every step, from beginning (seeing the structure in the distance) to end (leaving with newfound attitudes). Additionally, based on the objectives, I decided that the KPIs of this experience would be newsletter sign-ups and social media posts.",
        images: ["/images/shwood-location.png", "/images/shwood-figma-process.png", "/images/shwood-3d-modeling.png"],
      },
      interaction: {
        subsections: [
          {
            heading: "First Contact",
            content:
              "For the average office worker in downtown Pittsburgh, the initial impression of this pop-up is curiosity. What is that patch of green on this otherwise gray view? Something's different between these cubicles and the ones they just left...",
            images: [
              "/images/shwood-grid-aerial.png",
              "/images/shwood-outdoor-view.png",
              "/images/forrest-shwoodson-interior.jpeg",
            ],
          },
          {
            heading: "Into the Woods",
            content:
              "A screen is showing live footage from the room, allowing visitors to see themselves in this strange environment. When a key is pressed, a pop up window asks visitors to look for passwords that unlock the Shwood archives. They must search around the room for pairs of glasses that contain the answers.",
            imageLayout: "grid-cols-2",
            images: ["/images/shwood-live-cam.png", "/images/shwood-ui.png"],
          },
          {
            heading: "This is Shwood",
            content:
              "Each pair of glasses with its unique password unlocks a video from the Shwood archives. Each reel is a comical, absurd version of the history behind each pair of glasses or the founding story. The style of each clip is reminiscent of 70's slapstick, highlighting Shwood's quirky personality.",
            images: ["/images/shwood-closeup.png", "/images/shwood-inlays.png", "/images/shwood-video.png"],
          },
          {
            heading: "For All Your Touble...",
            content:
              "After the video finishes playing, there is a reward for finding the password--a discount on one Shwood eyewear product! Each pair of glasses have their own special codes, so visitors can collect discounts for multiple pairs of glasses if they wish. They can also exit out of the window and take selfies in the computer wearing the glasses they just found. Moderators will give instructions to stash them away again before they leave for the next visitors to find.",
            images: ["/images/shwood-reward.png"],
          },
          {
            heading: "Leaving with Fresh Eyes",
            content:
              "Visitors may visit the other cubicles as well and be amazed at each office that has been swallowed up by seashells, stone, and even feathers, which are all materials Shwood uses in their products. If not, they can feel free to leave and take with them a newfound attitude towards the mundane. With Shwood, even the everyday can be an adventure!",
            images: ["/images/shwood-cubicle-concepts.png"],
          },
        ],
      },
      gallery: {
        heading: "Spatial Model",
        imageLayout: "grid-cols-2",
        images: ["/images/shwood-1-physmod.png", "/images/shwood-2-physmod.png", "/images/shwood-3-physmod.jpg"],
      },
      reflection: {
        heading: "Designing is Worldbuilding",
        content:
          "Curating a gamified experience pushed me to consider every detail of the experience, from logistics, to the activity itself, to the quantifiable measures of success. How can I justify each design decision with the brand's values, products, and objectives? Would this feature benefit both the client and the consumers? Why should the visitor want to engage more with the brand? These are some examples of questions I had to ask myself in order to curate a pop-up that was both intriguing and effective. Immersive spaces are able to move people in a special way because they are memorable and interactive in a way that totally envelops you in a new world. Many thanks to Daphne, who gave hugely constructive feedback and constantly gave suggestions that supported my ideas.",
      },
    },
    programs: ["Rhino", "Figma", "Adobe PS/Ai"],
    roles: ["Creative Director", "Experience Designer", "Graphic Designer", "Spatial Designer", "Game Designer"],
    skills: [
      "3D Modeling",
      "Design Research",
      "Brand Design",
      "Interaction Design",
      "Physical Prototyping",
      "Storytelling",
      "Presentation",
    ],
  },
  orli: {
    title: "Orli",
    year: "2024",
    duration: "4 weeks",
    client: "",
    tags: ["Physical Prototyping", "UI/UX", "XR"],
    description: "A living desk lamp that draws attention to the presence of AI in our daily digital habits.",
    heroImage: "/images/orli-hero-banner.png",
    sections: {
      context: {
        heading: "AI and Self",
        content:
          "As an exercise to begin this project, my team and I recorded each time we used AI in a week. What we found was that almost everything we did on our devices used artificial intelligence in some way, revealing that it is more deeply incorporated in our lives than we had thought. The most common types of AI we encountered were Generative (Grammarly, ChatGPT, Dall-E), Computer Vision (Face ID, Zoom), and Algorithmic (Social Media, Google Search Engine). How can we be more mindful about our usage of AI?",
        images: ["/images/frame-62.png", "/images/frame-63.png"],
      },
      concept: {
        heading: "Communication Through Behavior",
        content:
          "Orli is a desk lamp that detects, records, and alerts you on your usage of AI. Connect it to your device through bluetooth and set your own limits on a widget. The AI alarm clock intentionally irks its user, bringing light to how desensitized we have become to the presence of AI in our daily digital habits.",
        images: ["/images/frame-61.png", "/images/concept-pic.gif"],
      },
      process: {
        heading: "Prototyping Orli",
        content:
          "From determining the material of the lampshade to designing the widget's interface, there was a plethora of physical and digital prototypes alike. Orli's exterior is made of bristol paper, folded in the Kresling pattern, and is brought to life with Arduino parts.",
        images: [
          "/images/orli-prototyping-workspace.jpg",
          "/images/light-orli.gif",
          "/images/servo-orli.gif",
          "/images/alarm-orli.gif",
          "/images/orli-process-additional.avif",
        ],
        imageLayout: "large-with-three-small",
      },
      interaction: {
        heading: "A Holistic Experience",
        subsections: [
          {
            heading: "Customization",
            content:
              "Users can personalize their usage limits for different types of AI through the companion widget interface.",
            images: ["/images/customization-widget.webp"],
            captions: ["Widget interface for setting AI usage limits"],
          },
          {
            heading: "Active",
            content:
              "Orli comes alive when you engage with AI in your device. Through the lamp's behavior, the invisible nature of AI becomes visible and personified.",
            images: [
              "/images/searching-lamp.webp",
              "/images/pulsing-lamp.webp",
              "/images/deepbreaths-lamp.gif",
              "/images/alarm-lamp.webp",
            ],
            captions: [
              "SEARCHING. Orli is curious to know what type of AI you are using.",
              "PULSING. When you engage with AI, Orli begins to breathe. The color of the light reflects the type of AI being used.",
              "BREATHING. If multiple types of AI are being used, the breaths get deeper and more colors shine through.",
              "OVERWHELMED. You will be alerted when you have reached any of the time limits you have set for yourself. Calm Orli back down by covering the eyes.",
            ],
            imageLayout: "side-by-side-with-captions",
          },
          {
            heading: "Passive",
            content:
              "When the user is not using their device, Orli emits colored light that represents the types of AI, replaying your past AI interactions.",
            images: ["/images/static-lamp.jpeg"],
            captions: ["Ambient lighting reflecting past AI usage"],
          },
          {
            heading: "Reflection",
            content:
              'The user can reflect on their AI usage trends with the widget, which visualizes the data Orli has collected. Similarly to a "screentime" application, the statistics include the time spent using each type of AI over time and the platforms on which you used AI most.',
            images: ["/images/stats-visualization.webp", "/images/windows-desktop.png"],
            captions: ["Usage statistics interface", "Desktop widget showing AI usage trends"],
          },
          {
            heading: "User Journey",
            content: "",
            images: ["/images/user-journey-map.png"],
          },
        ],
      },
      gallery: {
        heading: "Physical Prototype",
        imageLayout: "grid-cols-2",
        images: [
          "/images/orli-installation.png",
          "/images/orli-title-slide.png",
          "/images/orli-3d-print.avif",
          "/images/orli-tech-diagram.webp",
        ],
      },
      reflection: {
        heading: "Personality of Products",
        content:
          "My designs aim to evoke certain emotional responses from guests, hence why I always make an effort to empathize with the consumers of a product or space. Orli was the first project in which I put myself also in the product's shoes to see how it would feel. How would Orli behave if a user is not using AI? He wouldn't know what the user is doing, so maybe he would be searching for an answer while he waits. This lamp is like a pet that requires some food but not too much--it is fueled by your AI usage while also being overwhelmed when you pass your limit. It asks for a great deal of attention, but the cute eyes make up for it; after all, it's just doing its job. Considering the character traits of the product enhances the experience for the user as it makes the interactions more believable, and therefore more engaging. Many thanks to Sojung and Juhi, for making up a team that was able to blend ideas and create something memorable. Thanks also to Dina, who encouraged us continuously and provided us with the equipment necessary.",
      },
    },
    programs: ["Figma", "Arduino", "Adobe Ae", "Rhino"],
    roles: ["UI/UX Designer", "Visual Designer"],
    skills: ["Experience Design", "Interaction Design", "Physical Prototyping"],
    team: ["Sojung Pak", "Juhi Kedia"],
  },
  serenitea: {
    title: "Serenitea",
    year: "2024",
    duration: "4 weeks",
    client: "Dobra Tea",
    tags: ["Motion Graphics", "Physical Prototyping", "XR"],
    description: "A motion-tracking tea table that visually reflects the social behaviors of its guests.",
    heroImage: "/images/serenitea-interactive.png",
    sections: {
      context: {
        heading: "Want Some Tea?",
        content:
          "Young people from all over Pittsburgh stop at Dobra Tea for a cup to chitchat over. Whether it be a group of friends or a first date, sipping tea together is often a social and/or cultural activity. How can interpersonal experiences in a tea shop setting spark introspection and social engagement?",
        images: ["/images/dobra-tea-interior.jpg"],
        imageLayout: "large",
      },
      concept: {
        heading: "Brewing Ambiance",
        content:
          "Serenitea is the table top that reacts to realtime movements of tea cups. Whether you are here for 10 minutes or 2 hours, watch as your behavior affects your experience.",
        images: ["/images/interactive-table-surface.avif"],
      },
      process: {
        heading: "Designing By Making",
        content:
          "We extensively prototyped the height, area, and surface material for the table in order to provide the most effective proof of concept. Additionally, we went through many rounds of iterations for the visuals of the graphics and animations.\n\nThe mosaic water lily became the centerpoint for our visual language, as it matches the mosaic artwork found in Dobra Tea, while also referencing tea leaves floating in water.",
        images: ["/images/serenitea-research-summary.png", "/images/serenitea-systems-diagram.jpg"],
      },
      interaction: {
        heading: "Reflective, Not Distractive",
        subsections: [
          {
            heading: "Primary Interaction",
            content:
              "What makes Dobra special is their vast selection of teas, sourced from their respective countries of origin. When the waiter first places the cup down, brief animations that describe the origins of the tea splash onto the table.",
            images: ["/images/primary-interaction-1.gif", "/images/primary-interaction-new.gif"],
            imageLayout: "grid-cols-2",
            imageStyles: [null, null],
          },
          {
            heading: "Passive Interactions",
            content:
              "As you sip your tea and engage with others at the table, there will be ambient movements that reflect your social interactions.",
            images: [
              "/images/hand-cup-interaction.webp",
              "/images/mosaic-pattern-2.webp",
              "/images/mosaic-pattern-3.webp",
              "/images/mosaic-pattern-1.webp",
              "/images/mosaic-flower-single.webp",
              "/images/micro-interactions-final.png",
            ],
            imageCaptions: [
              "Real-time interaction as cups are moved on the table surface",
              "Pattern grid with central design",
              "Complete mosaic tile arrangement",
              "Mosaic water lily pattern variations",
              "Individual flower motif",
              "Complete system of six micro-interaction types with visual, audio, and haptic feedback",
            ],
            imageLayout: "large-with-small-squares-and-final",
          },
          {
            heading: "User Journey",
            content:
              "The complete flow of user experience from initial approach to meaningful interaction with the Serenitea table.",
            images: ["/images/serenitea-user-journey.avif"],
          },
        ],
      },
      gallery: {
        heading: "Interactive Demo",
        images: ["/images/serenitea-main-hero.png", "/images/serenitea-users-context.avif"],
      },
      reflection: {
        heading: "Playtesting & Prototyping",
        content:
          "As this project was a physical product, it required numerous rounds of iteration and user testing. There were countless considerations, as well as various modes of research that led to the finished result. Interviews, lo-fi models, roleplays, material tests, technological limits, etc. are a few examples things I found key to solidifying each and every design decision. Thus, I've come to view projects practically and consider every detail when drafting an experience. Thanks to my team members, Helen and Juhi, for being delightful collaborators with skills that I lacked and hardworking attitudes throughout the whole duration of the project. And to Dina, for advising us when we needed direction.",
      },
    },
    programs: ["Figma", "Adobe Ai/PS/Ae", "p5.js"],
    roles: ["Experience Designer", "Graphic Designer", "Motion Designer"],
    skills: ["Brand Research", "Animation", "Physical Prototyping", "Visual Design", "Interaction Design"],
    team: ["Helen Zhang", "Juhi Kedia"],
  },
  "imagine-usa-pavilion": {
    title: "Imagine: USA Pavilion",
    year: "2023",
    duration: "6 weeks",
    client: "World Expo 2025 Osaka",
    tags: ["Exhibition", "XR", "Motion Graphics"],
    description:
      "Concept for the guest experience at a national pavilion that highlights the USA's sustainability goals.",
    heroImage: "/images/usa-pavilion-interior.jpeg",
    sections: {
      context: {
        heading: "World Expo 2025",
        content: "Designing for a global audience to showcase America's commitment to sustainability and innovation.",
        images: ["/images/entrancelights.jpg", "/images/entrance-posters.jpg"],
      },
      concept: {
        heading: "Protect Our Lands",
        content:
          "National parks are a uniquely American contribution to a sustainable future. Learn about the US leaders' initiatives as well as the ordinary people's--how the American company, <a href='https://rfcx.org' target='_blank' rel='noopener noreferrer' class='text-white hover:text-gray-300 underline transition-colors'>Rainforest Connection</a>'s innovative technology has become a beacon of light in protecting biodiversity around the world.",
        images: ["/images/treeswithguardians.jpg", "/images/space-view.jpg"],
      },
      process: {
        heading: "An Immersive Pavilion",
        content:
          "Ideating, storyboarding, prototyping, and visualizing the elements of the interactions and overall experience. Will the guests feel inspired? Accomplished? Proud? Amazed?",
        images: [
          "/images/user-experience-flowchart.png",
          "/images/artboard-collage.png",
          "/images/usa-pavilion-moodboard.png",
          "/images/data-visualization.png",
          "/images/learning-objectives.png",
          "/images/pavilion-concepts.png",
        ],
      },
      interaction: {
        heading: "Light & Life",
        content:
          "Like the endangered, but cherished synchronized fireflies of the Great Smoky Mountains, guests bring light to this environment as patterns of nature light up the trees and walls. Each action taken by you helps to save America's lands. Tree-like sculptures transform the space into a forest. Miniature models of the Guardian, biodiversity-protecting devices planted around forests that emit realtime sounds for park rangers, are offered to the guests to place onto the trees. Listen as the soundscape changes with each visitor's action!",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firefliestoguardian-xht1AY4Dik4XQ5ZuXriO1Nz3O0UZtK.mp4",
          "/images/guardian-hand-light.png",
          "/images/guardian-circle-text.png",
          "/images/visitor-light-interaction.png",
          "/images/tongass-progress-screen.png",
          "/images/visitor-forest-interaction.png",
          "/images/tech-diagram-flowchart.png",
          "/images/forest-sequence-storyboard.png",
          "/images/pavilion-floor-plan.png",
        ],
      },
      gallery: {
        heading: "Proof of Concept",
        content:
          "Laser-cut acrylic, paper sculpture, projection mapping in Unity, Arduino, and magnets come together to provide a live demonstration of this pavilion's concept.",
        images: [
          "/images/guardian-white-pedestal.jpg",
          "/images/guardian-green-panel.png",
          "/images/white-angular-form.jpg",
          "/images/guardian-prototypes.jpg",
        ],
      },
      reflection: {
        heading: "Curation of Research",
        content:
          "I dove deep into an entire country's values, assets, and values as if it were a brand, and the result was a *lot* of information that I ended up not using in my final ideation. Learning to sort through content and discern the parts I would and would not take with me into the project was a valuable lesson. Research is crucial in being able to communicate a brand's voice effectively and accurately, but choosing what parts to dig into is a crucial skill as well. What is important and not so important? The guests can only take in so much during a visit. A designer must constantly be peering through the lens of the client as well as the audience. Thank you to Haeyoung for pushing me to go deeper and for inspiring me to flesh out concepts fully.",
      },
    },
    programs: ["Adobe PS/Ai/AE", "Rhino", "Arduino", "IoT", "Unity"],
    roles: ["Creative Director", "Spatial Designer", "Motion Designer", "Creative Technologist", "Visual Designer"],
    skills: ["3D Modeling", "Experience Design", "Physical Prototyping", "Animation", "Storytelling", "Presentation"],
  },
  "samsung-phantasma": {
    title: "Samsung X Phantasma: Spatial UX",
    year: "2023",
    duration: "5 months",
    client: "Samsung Electronics",
    tags: ["XR", "Systems Mapping", "UX Research"],
    description:
      "Research + Consulting project for Samsung Electronics under Phantasma, LLC.\nPlease reach out with any questions!",
    heroImage: "/images/spatial-storytelling-movement.png",
    sections: {},
    programs: ["Figma", "Adobe PS/Ai"],
    roles: ["Junior Designer"],
    skills: ["UX Research", "Storytelling", "Presentation", "Systems Mapping", "Iterative Ideation"],
  },
  unhuman: {
    title: 'UNHUMAN: A James "Yaya" Hough Exhibition',
    year: "2022",
    duration: "4 weeks",
    client: "Carnegie Museum of Art",
    tags: ["Exhibition", "XR"],
    description:
      "A temporary, interactive exhibition that showcases artist James \"Yaya\" Hough's illustrations while communicating his critiques of America's incarceration system.",
    heroImage: "/images/unhumana-exhibition.png",
    sections: {
      context: {
        heading: "The Artist",
        content:
          'James "Yaya" Hough is a formerly incarcerated illustrator. His work reflects his personal experience in prison and his main goal is to spark conversation about the oppressive US prison system by use of jarring symbolism.',
        images: ["/images/unhuman-context-artist.png"],
      },
      concept: {
        heading: "Designing the Exhibit",
        content:
          "Bringing Yaya's artistic symbols out into a physical space that educates visitors about the dehumanization he experienced in prison. Meaningful motifs include lightbulbs, single file lines, holes, missing facial features, cameras, and the colors pink and yellow.",
        images: ["/images/unhuman-process-collage.webp"],
      },
      process: {
        heading: "Spatial Planning",
        content: "Brainstorming engaging, educational interactions, and designing the exhibition space with intention.",
        images: [
          "/images/unhuman-process-aerial.webp",
          "/images/unhuman-process-layouts.webp",
          "/images/unhuman-process-sequence.webp",
          "/images/unhuman-process-perspective.webp",
        ],
      },
      interaction: {
        heading: "Visitor Experience",
        content:
          "Learning not just about a single artist, but the larger message he seeks to send as you walk through this series of interactive environments.",
        images: [
          "/images/unhuman-mirror-woman.gif",
          "/images/unhuman-hallway-yellow.gif",
          "/images/unhuman-lightbulbs.gif",
          "/images/unhuman-yellow-floor-black.gif",
          "/images/unhuman-interaction-aerial1.webp",
          "/images/unhuman-interaction-aerial2.webp",
          "/images/unhuman-interaction-elevations.webp",
        ],
      },
      gallery: {
        heading: "Building It Out",
        content: "Visualizing the space in scaled, physical form.",
        images: [
          "/images/unhuman-gallery-pink-lines.webp",
          "/images/unhuman-gallery-white-walls.webp",
          "/images/unhuman-gallery-pink-screens.webp",
          "/images/unhuman-gallery-yellow-floor.webp",
          "/images/unhuman-gallery-cmoa-table.webp",
        ],
      },
      reflection: {
        heading: "Space as a Medium",
        content:
          "As someone with a fine arts background, I had mostly created work that was purely visual and not iterative. This project taught me that designing an experience within a physical environment takes endless rounds of ideating, prototyping, and presentations. I learned skills such as scaling type, 3D modeling, giving and receiving feedback, and empathizing with hypothetical guests. Thank you to Daphne for guiding me through this experience and providing me with resources!",
      },
    },
    programs: ["SketchUp", "Adobe PS/Ai", "littleBits"],
    roles: ["Exhibit Designer", "Experience Designer", "Spatial Designer", "Graphic Designer"],
    skills: [
      "Design Research",
      "3D Modeling",
      "Parti Diagramming",
      "Spatial Design",
      "Branding",
      "Storyboarding",
      "IoT",
      "Prototyping",
      "Presentation",
    ],
  },
  // New archive categories
  "typographic-studies": {
    title: "Typographic Studies",
    year: "2020-2024",
    duration: "Ongoing",
    client: "Various Projects",
    tags: ["Typography", "Design Research"],
    description:
      "A collection of typographic explorations examining the relationship between letterforms, space, and meaning in both digital and physical environments.",
    heroImage: "/experimental-typography.png",
    images: ["/placeholder-7i2sm.png", "/experimental-typography.png", "/kinetic-typography-motion.png"],
    programs: ["Adobe InDesign", "Illustrator", "After Effects", "Glyphs"],
    roles: ["Typographer", "Graphic Designer", "Design Researcher"],
    skills: ["Typography", "Layout Design", "Motion Graphics", "Type Design"],
  },
  "visual-design": {
    title: "Visual Design",
    year: "2019-2024",
    duration: "Ongoing",
    client: "Various Clients",
    tags: ["Branding", "UI/UX"],
    description:
      "A comprehensive portfolio of visual design work spanning brand identity, digital interfaces, and print design with a focus on clean, purposeful aesthetics.",
    heroImage: "/brand-identity-logo.png",
    images: ["/brand-identity-logo.png", "/digital-interface-ui.png", "/print-design-layout-poster.png"],
    programs: ["Adobe Creative Suite", "Figma", "Sketch", "Principle"],
    roles: ["Visual Designer", "Brand Designer", "UI/UX Designer"],
    skills: ["Brand Identity", "Interface Design", "Print Design", "Design Systems"],
  },
  animation: {
    title: "Animation",
    year: "2021-2024",
    duration: "Ongoing",
    client: "Various Projects",
    tags: ["Motion Graphics", "Animation"],
    description:
      "Motion graphics and animation work that brings static designs to life, creating engaging narratives through movement, timing, and visual storytelling.",
    heroImage: "/motion-graphics-animation.png",
    images: ["/motion-graphics-animation.png", "/kinetic-typography-animation.png", "/3d-animation-vfx.png"],
    programs: ["After Effects", "Cinema 4D", "Blender", "Premiere Pro"],
    roles: ["Motion Designer", "Animator", "Creative Director"],
    skills: ["Motion Graphics", "3D Animation", "Video Editing", "Visual Effects"],
  },
}

// Updated color palette with more distinct Exhibition and XR colors
const tagColorMap: Record<string, string> = {
  "Physical Prototyping": "border-blue-300/70", // Soft blue
  Illustration: "border-amber-300/70", // Warm amber
  Exhibition: "border-rose-300/70", // Gentle rose (changed from teal)
  "Game Design": "border-purple-300/70", // Gentle purple
  "UI/UX": "border-orange-300/70", // Soft orange (swapped with rose)
  XR: "border-emerald-300/70", // Muted emerald (kept distinct)
  "Motion Graphics": "border-indigo-300/70", // Soft indigo
  "Systems Mapping": "border-teal-300/70", // Muted teal (swapped with exhibition)
  "UX Research": "border-slate-300/70", // Soft neutral
  Typography: "border-pink-300/70", // Soft pink
  "Design Research": "border-cyan-300/70", // Soft cyan
  Branding: "border-yellow-300/70", // Soft yellow
  Animation: "border-violet-300/70", // Soft violet
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projectData[slug]

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <main className="pt-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-light">Project not found</h1>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors mt-4 inline-block">
            Return home
          </Link>
        </div>
      </main>
    )
  }

  const sectionOrder = ["context", "concept", "process", "interaction", "userJourney", "gallery", "reflection"]

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src={project.heroImage || "/placeholder.svg"}
          alt={`${project.title} Hero`}
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="pl-4 md:pl-6 pr-2 md:pr-4 pb-20 pt-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link
              href={
                slug.includes("typographic") || slug.includes("visual") || slug.includes("animation") ? "/archive" : "/"
              }
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              {slug.includes("typographic") || slug.includes("visual") || slug.includes("animation")
                ? "Back to Archive"
                : "Back to Studio"}
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-4 space-y-16">
              <ScrollReveal>
                <div>
                  <h1 className="text-4xl font-light tracking-wide mb-4">{project.title}</h1>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 md:gap-2 mb-6">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <div
                        key={tagIndex}
                        className={`px-4 py-2 md:px-3 md:py-1 rounded-full border text-white/80 text-sm tracking-wide bg-transparent ${
                          tagColorMap[tag] || "border-gray-300/70"
                        }`}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-8 text-gray-400 mb-8">
                    <span>
                      {project.duration} [{project.year}]
                    </span>
                    {project.client && <span>{project.client}</span>}
                  </div>
                  <div className="text-gray-300 leading-relaxed text-lg">
                    {project.description.split("\n").map((line: string, index: number) => (
                      <p key={index} className={index > 0 ? "mt-4" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                  {project.introImage && (
                    <div className="mt-8">
                      <Image
                        src={project.introImage || "/placeholder.svg"}
                        alt={`${project.title} intro`}
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded object-contain"
                        sizes="(min-width: 1024px) 900px, 100vw"
                        quality={85}
                        priority={false}
                      />
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {slug === "imagine-usa-pavilion" && (
                <div className="mb-16">
                  <VimeoEmbed videoId="893730637" title="Imagine USA Pavilion Video" className="w-full" />
                </div>
              )}

              {slug === "serenitea" && (
                <div className="mb-16">
                  <VimeoEmbed videoId="1114564858" title="Serenitea Interactive Demo" className="w-full" />
                </div>
              )}

              {slug === "orli" && (
                <div className="mb-16">
                  <VimeoEmbed videoId="1114968306" title="Orli Interactive Demo" className="w-full" />
                </div>
              )}

              {/* Project Sections */}
              {slug === "samsung-phantasma" ? (
                <ScrollReveal delay={200}>
                  <div className="flex items-center justify-center aspect-video bg-gray-900/50 border border-gray-700 rounded">
                    <div className="text-center">
                      <Lock className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400 text-sm">Project details are confidential</p>
                    </div>
                  </div>
                </ScrollReveal>
              ) : project.sections ? (
                <div className="space-y-16">
                  <ScrollReveal delay={200}>

                  </ScrollReveal>

                  {sectionOrder.map((sectionKey, index) => {
                    const section = project.sections[sectionKey]
                    if (!section) return null

                    return (
                      <ScrollReveal key={sectionKey} delay={index * 200}>
                        <div className="space-y-6">
                          <div className="flex items-baseline gap-4">
                            <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                              {sectionKey}
                            </span>
                            <h2 className="text-2xl font-light text-white">{section.heading}</h2>
                          </div>
                          {(sectionKey === "concept" && params.slug === "imagine-usa-pavilion") ||
                          (sectionKey === "context" && params.slug === "shwood-experience") ? (
                            <div
                              className="text-gray-300 leading-relaxed text-base"
                              dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                          ) : (
                            <p className="text-gray-300 leading-relaxed text-base">{section.content}</p>
                          )}

                          {sectionKey === "reflection" && (
                            <div className="flex items-center gap-2 mt-8">
                              {[1, 2, 3].map((index) => (
                                <div key={index} className="relative w-4 h-4">
                                  <Image
                                    src="/images/new-logo.svg"
                                    alt=""
                                    fill
                                    className="object-contain"
                                    style={{ imageRendering: "crisp-edges" }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                          {section.images && section.images.length > 0 && (
                            <div className="space-y-6">
                              {sectionKey === "process" && params.slug === "imagine-usa-pavilion" ? (
                                <div className="space-y-6">
                                  {/* First image - user experience flowchart */}
                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[0] || "/placeholder.svg"}
                                      alt={`${project.title} - ${section.heading} - User Experience Flowchart`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "80vh" }}
                                      loading="lazy"
                                      quality={85}
                                    />
                                  </div>

                                  {/* Second image - artboard collage */}
                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[1] || "/placeholder.svg"}
                                      alt={`${project.title} - ${section.heading} - Artboard Collage`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "80vh" }}
                                      loading="lazy"
                                      quality={85}
                                    />
                                  </div>

                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="relative w-full">
                                      <Image
                                        src={section.images[4] || "/placeholder.svg"}
                                        alt={`${project.title} - ${section.heading} - Learning Objectives`}
                                        width={600}
                                        height={400}
                                        className="object-contain w-full h-auto"
                                        loading="lazy"
                                        quality={80}
                                      />
                                    </div>
                                    <div className="relative w-full">
                                      <Image
                                        src={section.images[5] || "/placeholder.svg"}
                                        alt={`${project.title} - ${section.heading} - Data Visualization`}
                                        width={600}
                                        height={400}
                                        className="object-contain w-full h-auto"
                                        loading="lazy"
                                        quality={80}
                                      />
                                    </div>
                                  </div>

                                  {/* Third image - usa pavilion moodboard */}
                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[2] || "/placeholder.svg"}
                                      alt={`${project.title} - ${section.heading} - USA Pavilion Moodboard`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "80vh" }}
                                      loading="lazy"
                                      quality={85}
                                    />
                                  </div>

                                  {/* Fourth image - pavilion concepts */}
                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[3] || "/placeholder.svg"}
                                      alt={`${project.title} - ${section.heading} - Pavilion Concepts`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "80vh" }}
                                      loading="lazy"
                                      quality={85}
                                    />
                                  </div>
                                </div>
                              ) : sectionKey === "interaction" && params.slug === "imagine-usa-pavilion" ? (
                                <div className="space-y-6">
                                  {/* First row - 3 smaller adjacent images: video, guardian hand, guardian circle */}
                                  <div className="grid grid-cols-3 gap-4">
                                    <div className="relative w-full">
                                      <video
                                        src={section.images[0]}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto rounded object-cover"
                                        style={{ aspectRatio: "4/3" }}
                                      >
                                        Your browser does not support the video tag.
                                      </video>
                                    </div>
                                    <div className="relative w-full">
                                      <Image
                                        src={section.images[1] || "/placeholder.svg"}
                                        alt={`${project.title} - Guardian Hand Light`}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-auto rounded"
                                        style={{ aspectRatio: "4/3" }}
                                      />
                                    </div>
                                    <div className="relative w-full">
                                      <Image
                                        src={section.images[2] || "/placeholder.svg"}
                                        alt={`${project.title} - Guardian Circle Text`}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-auto rounded"
                                        style={{ aspectRatio: "4/3" }}
                                      />
                                    </div>
                                  </div>

                                  {/* Second - person in front of yellow blobs */}
                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[3] || "/placeholder.svg"}
                                      alt={`${project.title} - Visitor Light Interaction`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "70vh" }}
                                    />
                                  </div>

                                  {/* Third - 50% graphic with map */}
                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[4] || "/placeholder.svg"}
                                      alt={`${project.title} - Tongass Progress Screen`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "70vh" }}
                                    />
                                  </div>

                                  {/* Fourth - person in front of circular images */}
                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[5] || "/placeholder.svg"}
                                      alt={`${project.title} - Visitor Forest Interaction`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "70vh" }}
                                      loading="lazy"
                                      quality={80}
                                    />
                                  </div>

                                  {/* Last few images - tech diagram, storyboard, parti diagram */}
                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[6] || "/placeholder.svg"}
                                      alt={`${project.title} - Tech Diagram Flowchart`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "70vh" }}
                                      loading="lazy"
                                      quality={80}
                                    />
                                  </div>

                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[7] || "/placeholder.svg"}
                                      alt={`${project.title} - Forest Sequence Storyboard`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "70vh" }}
                                      loading="lazy"
                                      quality={80}
                                    />
                                  </div>

                                  <div className="relative w-full max-w-4xl">
                                    <Image
                                      src={section.images[8] || "/placeholder.svg"}
                                      alt={`${project.title} - Pavilion Floor Plan`}
                                      width={1200}
                                      height={800}
                                      className="object-contain w-full h-auto"
                                      style={{ maxHeight: "70vh" }}
                                      loading="lazy"
                                      quality={80}
                                    />
                                  </div>
                                </div>
                              ) : sectionKey === "gallery" ? (
                                section.imageLayout === "grid-cols-2" ? (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {section.images.map((image: string, imgIndex: number) => (
                                      <div key={imgIndex} className="relative w-full">
                                        <Image
                                          src={image || "/placeholder.svg"}
                                          alt={`${project.title} - ${section.heading} ${imgIndex + 1}`}
                                          width={900}
                                          height={675}
                                          className="w-full h-auto rounded object-cover"
                                          sizes="(min-width: 640px) 50vw, 100vw"
                                          quality={85}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="space-y-6">
                                    {section.images.map((image: string, imgIndex: number) => (
                                      <div key={imgIndex} className="relative w-full">
                                        <Image
                                          src={image || "/placeholder.svg"}
                                          alt={`${project.title} - ${section.heading} ${imgIndex + 1}`}
                                          width={800}
                                          height={450}
                                          className="object-cover w-full h-auto rounded"
                                          loading="lazy"
                                          quality={85}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                )
                              ) : sectionKey === "process" && params.slug === "unhuman" ? (
                                // Special 2x2 collage layout for UNHUMAN process section with consistent row heights
                                <div className="space-y-4">
                                  {/* Top row - aerial view and layouts side by side with same height */}
                                  <div className="grid grid-cols-2 gap-4" style={{ height: "400px" }}>
                                    <div className="relative w-full h-full">
                                      <Image
                                        src={section.images[0] || "/placeholder.svg"}
                                        alt={`${project.title} - ${section.heading} - Aerial View`}
                                        fill
                                        className="object-contain rounded"
                                      />
                                    </div>
                                    <div className="relative w-full h-full">
                                      <Image
                                        src={section.images[1] || "/placeholder.svg"}
                                        alt={`${project.title} - ${section.heading} - Layout Plans`}
                                        fill
                                        className="object-contain rounded"
                                      />
                                    </div>
                                  </div>
                                  {/* Bottom row - two sketches side by side with same height */}
                                  <div className="grid grid-cols-2 gap-4" style={{ height: "300px" }}>
                                    <div className="relative w-full h-full">
                                      <Image
                                        src={section.images[2] || "/placeholder.svg"}
                                        alt={`${project.title} - ${section.heading} - Sequence Sketch`}
                                        fill
                                        className="object-contain rounded"
                                      />
                                    </div>
                                    <div className="relative w-full h-full">
                                      <Image
                                        src={section.images[3] || "/placeholder.svg"}
                                        alt={`${project.title} - ${section.heading} - Perspective Sketch`}
                                        fill
                                        className="object-contain rounded"
                                      />
                                    </div>
                                  </div>
                                </div>
                              ) : sectionKey === "interaction" && params.slug === "unhuman" ? (
                                // Special handling for UNHUMAN interaction section with gifs and additional images
                                <div className="space-y-6">
                                  {/* First 4 images are the gifs with special sizing */}
                                  {section.images.slice(0, 4).map((image: string, imgIndex: number) => (
                                    <div key={imgIndex} className="relative w-full max-w-4xl">
                                      <Image
                                        src={image || "/placeholder.svg"}
                                        alt={`${project.title} - ${section.heading} ${imgIndex + 1}`}
                                        width={imgIndex === 2 ? 800 : 1200} // Third gif (index 2) stays smaller
                                        height={imgIndex === 2 ? 600 : 900} // Third gif (index 2) stays smaller
                                        className="object-contain w-full h-auto rounded"
                                        style={{
                                          maxHeight: imgIndex === 2 ? "50vh" : "70vh", // Third gif smaller max height
                                          maxWidth: "100%",
                                        }}
                                      />
                                    </div>
                                  ))}

                                  {/* Additional images at the bottom: two aerial views side by side, then elevations underneath */}
                                  {section.images.length > 4 && (
                                    <div className="space-y-4 mt-8">
                                      {/* Two aerial views side by side */}
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="relative w-full">
                                          <Image
                                            src={section.images[4] || "/placeholder.svg"}
                                            alt={`${project.title} - ${section.heading} - Aerial View 1`}
                                            width={600}
                                            height={600}
                                            className="object-contain w-full h-auto rounded"
                                          />
                                        </div>
                                        <div className="relative w-full">
                                          <Image
                                            src={section.images[5] || "/placeholder.svg"}
                                            alt={`${project.title} - ${section.heading} - Aerial View 2`}
                                            width={600}
                                            height={600}
                                            className="object-contain w-full h-auto rounded"
                                          />
                                        </div>
                                      </div>
                                      {/* Elevations image underneath */}
                                      {section.images[6] && (
                                        <div className="relative w-full max-w-4xl">
                                          <Image
                                            src={section.images[6] || "/placeholder.svg"}
                                            alt={`${project.title} - ${section.heading} - Elevations`}
                                            width={1200}
                                            height={800}
                                            className="object-contain w-full h-auto rounded"
                                            style={{ maxHeight: "70vh" }}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ) : section.imageLayout === "large-with-three-small" ? (
                                <div className="space-y-6">
                                  {/* First large image */}
                                  {section.images[0] && (
                                    <div className="relative w-full max-w-4xl">
                                      <Image
                                        src={section.images[0] || "/placeholder.svg"}
                                        alt={`${project.title} - ${section.heading} - Main Process Image`}
                                        width={1200}
                                        height={800}
                                        className="object-contain w-full h-auto"
                                        style={{ maxHeight: "80vh" }}
                                        loading="lazy"
                                        quality={85}
                                      />
                                    </div>
                                  )}

                                  {/* Three small images in a horizontal row */}
                                  {section.images.length > 1 && (
                                    <div className="grid grid-cols-3 gap-4">
                                      {section.images.slice(1, 4).map((image: string, imgIndex: number) => (
                                        <div key={imgIndex + 1} className="relative w-full">
                                          <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${project.title} - ${section.heading} - Process Detail ${imgIndex + 1}`}
                                            width={400}
                                            height={300}
                                            className="object-contain w-full h-auto rounded"
                                            loading="lazy"
                                            quality={80}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  )}

                                  {section.images.length > 4 && (
                                    <div className="space-y-4">
                                      {section.images.slice(4).map((image: string, imgIndex: number) => (
                                        <div key={imgIndex + 4} className="relative w-full max-w-3xl">
                                          <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${project.title} - ${section.heading} - Additional Process Image ${imgIndex + 1}`}
                                            width={800}
                                            height={600}
                                            className="object-contain w-full h-auto rounded"
                                            loading="lazy"
                                            quality={85}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="space-y-6">
                                  {section.images.map((image: string, imgIndex: number) => (
                                    <div key={imgIndex} className="relative w-full max-w-4xl">
                                      {image.endsWith(".mp4") ? (
                                        <video
                                          src={image}
                                          controls
                                          className="w-full h-auto rounded"
                                          style={{ maxHeight: "80vh" }}
                                        >
                                          Your browser does not support the video tag.
                                        </video>
                                      ) : (
                                        <Image
                                          src={image || "/placeholder.svg"}
                                          alt={`${project.title} - ${section.heading} ${imgIndex + 1}`}
                                          width={1200}
                                          height={800}
                                          className="object-contain w-full h-auto"
                                          style={{ maxHeight: "80vh" }}
                                        />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Special handling for interaction subsections */}
                          {section.subsections && (
                            <div className="space-y-12 mt-8">
                              {section.subsections.map((subsection: any, subIndex: number) => (
                                <div key={subIndex} className="space-y-6">
                                  <h3 className="text-xl font-light text-white">{subsection.heading}</h3>
                                  <p className="text-gray-300 leading-relaxed text-base">{subsection.content}</p>
                                  {subsection.images && subsection.images.length > 0 && (
                                    <div className="space-y-6">
                                      {subsection.imageLayout === "grid-cols-2" ? (
                                        // Side by side layout for primary interaction
                                        <div className="grid grid-cols-2 gap-4">
                                          {subsection.images.map((image: string, imgIndex: number) => (
                                            <div key={imgIndex} className="relative w-full max-w-4xl">
                                              <Image
                                                src={image || "/placeholder.svg"}
                                                alt={`${subsection.heading} ${imgIndex + 1}`}
                                                width={1200}
                                                height={800}
                                                className="object-contain w-full h-auto"
                                                style={{ maxHeight: "80vh" }}
                                              />
                                            </div>
                                          ))}
                                        </div>
                                      ) : subsection.imageLayout === "side-by-side-with-captions" ? (
                                        // Small gifs with captions to the right
                                        <div className="space-y-6 mt-6">
                                          {subsection.images.map((src: string, idx: number) => (
                                            <div key={idx} className="flex items-center space-x-4">
                                              <Image
                                                src={src || "/placeholder.svg"}
                                                alt={subsection.captions?.[idx] || ""}
                                                width={500}
                                                height={500}
                                                className="rounded-lg shadow-md object-contain"
                                              />
                                              {subsection.captions?.[idx] && (
                                                <p className="text-sm text-gray-400 max-w-xs">
                                                  {subsection.captions[idx]}
                                                </p>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      ) : subsection.imageLayout === "mixed" ? (
                                        // Mixed layout: 1 large, then 2x2 grid
                                        <div className="space-y-4">
                                          {/* First large image */}
                                          {subsection.images[0] && (
                                            <div className="relative w-full max-w-4xl">
                                              <Image
                                                src={subsection.images[0] || "/placeholder.svg"}
                                                alt={`${subsection.heading} overview`}
                                                width={1200}
                                                height={800}
                                                className="object-contain w-full h-auto"
                                                style={{ maxHeight: "80vh" }}
                                              />
                                            </div>
                                          )}
                                          {/* Grid of remaining images */}
                                          {subsection.images.length > 1 && (
                                            <div className="grid grid-cols-2 gap-4">
                                              {subsection.images.slice(1).map((image: string, imgIndex: number) => (
                                                <div key={imgIndex + 1} className="relative w-full max-w-4xl">
                                                  <Image
                                                    src={image || "/placeholder.svg"}
                                                    alt={`${subsection.heading} detail ${imgIndex + 1}`}
                                                    width={1200}
                                                    height={800}
                                                    className="object-contain w-full h-auto"
                                                    style={{ maxHeight: "80vh" }}
                                                  />
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      ) : subsection.imageLayout === "large-with-small-squares" ? (
                                        <div className="space-y-4">
                                          {/* Large image (hand-cup interaction) */}
                                          {subsection.images[1] && (
                                            <div className="relative w-full max-w-4xl">
                                              <Image
                                                src={subsection.images[1] || "/placeholder.svg"}
                                                alt={`${subsection.heading} - Hand Cup Interaction`}
                                                width={1200}
                                                height={800}
                                                className="object-contain w-full h-auto rounded"
                                                style={{ maxHeight: "80vh" }}
                                              />
                                            </div>
                                          )}

                                          {/* Small horizontal images (mosaic patterns) */}
                                          <div className="grid grid-cols-4 gap-4">
                                            {subsection.images.slice(2).map((image: string, imgIndex: number) => (
                                              <div key={imgIndex + 2} className="relative w-full h-32">
                                                <Image
                                                  src={image || "/placeholder.svg"}
                                                  alt={`${subsection.heading} - Mosaic Pattern ${imgIndex + 1}`}
                                                  fill
                                                  className="object-cover rounded"
                                                />
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      ) : subsection.imageLayout === "large-with-small-squares-and-final" ? (
                                        <div className="space-y-4">
                                          {/* Large image (hand-cup interaction) */}
                                          {subsection.images[0] && (
                                            <div className="relative w-full max-w-4xl">
                                              <Image
                                                src={subsection.images[0] || "/placeholder.svg"}
                                                alt={`${subsection.heading} - Hand Cup Interaction`}
                                                width={1200}
                                                height={800}
                                                className="object-contain w-full h-auto rounded"
                                                style={{ maxHeight: "80vh" }}
                                              />
                                            </div>
                                          )}

                                          {/* Small horizontal images (mosaic patterns) */}
                                          <div className="grid grid-cols-4 gap-4">
                                            {subsection.images.slice(1, 5).map((image: string, imgIndex: number) => (
                                              <div key={imgIndex + 1} className="relative w-full h-32">
                                                <Image
                                                  src={image || "/placeholder.svg"}
                                                  alt={`${subsection.heading} - Mosaic Pattern ${imgIndex + 1}`}
                                                  fill
                                                  className="object-cover rounded"
                                                />
                                              </div>
                                            ))}
                                          </div>

                                          {/* Final image (micro-interactions diagram) */}
                                          {subsection.images[5] && (
                                            <div className="relative w-full max-w-4xl">
                                              <Image
                                                src={subsection.images[5] || "/placeholder.svg"}
                                                alt={`${subsection.heading} - Micro-interactions Diagram`}
                                                width={1200}
                                                height={800}
                                                className="object-contain w-full h-auto rounded"
                                                style={{ maxHeight: "80vh" }}
                                              />
                                            </div>
                                          )}
                                        </div>
                                      ) : (
                                        // Default layout
                                        <div className="space-y-6">
                                          {subsection.images.map((image: string, imgIndex: number) => (
                                            <div key={imgIndex} className="relative w-full max-w-4xl">
                                              <Image
                                                src={image || "/placeholder.svg"}
                                                alt={`${subsection.heading} ${imgIndex + 1}`}
                                                width={1200}
                                                height={800}
                                                className="object-contain w-full h-auto"
                                                style={{ maxHeight: "80vh" }}
                                              />
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </ScrollReveal>
                    )
                  })}
                </div>
              ) : (
                // Fallback for archive projects without sections
                project.images &&
                project.images.length > 0 && (
                  <div className="space-y-8">
                    {project.images.map((image: string, index: number) => (
                      <ScrollReveal key={index} delay={index * 200}>
                        <div className="relative w-full">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Image ${index + 1}`}
                            width={1200}
                            height={800}
                            className="object-contain w-full h-auto"
                            style={{ maxHeight: "80vh" }}
                          />
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                )
              )}
            </div>

            <div className="lg:col-span-1 space-y-8">
              {/* Team section - only show if team exists */}
              {project.team && project.team.length > 0 && (
                <ScrollReveal delay={300}>
                  <div>
                    <h2 className="text-2xl font-light mb-6">Team</h2>
                    <ul className="space-y-2">
                      {project.team.map((member: string, index: number) => (
                        <li key={index} className="text-gray-400 text-sm">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              <ScrollReveal delay={400}>
                <div>
                  <h2 className="text-2xl font-light mb-6">Programs</h2>
                  <ul className="space-y-2">
                    {project.programs.map((program: string, index: number) => (
                      <li key={index} className="text-gray-400 text-sm">
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div>
                  <h2 className="text-2xl font-light mb-6">Roles</h2>
                  <ul className="space-y-2">
                    {project.roles.map((role: string, index: number) => (
                      <li key={index} className="text-gray-400 text-sm">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <div>
                  <h2 className="text-2xl font-light mb-6">Skills</h2>
                  <ul className="space-y-2">
                    {project.skills.map((skill: string, index: number) => (
                      <li key={index} className="text-gray-400 text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
