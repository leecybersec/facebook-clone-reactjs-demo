const menu = [
  {
    id: 1,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png",
    description: "Find friends",
  },
  {
    id: 2,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png",
    description: "Watch",
  },
  {
    id: 3,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png",
    description: "Groups",
  },
  {
    id: 4,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png",
    description: "Marketplace",
  },
  {
    id: 5,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png",
    description: "Memories",
  },
  {
    id: 6,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png",
    description: "Ad Center",
  },
  {
    id: 7,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png",
    description: "Ads Manager",
  },
  {
    id: 8,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/K4SvMBrrneO.png",
    description: "Blood Donantions",
  },
  {
    id: 9,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png",
    description: "Climate Science Center",
  },
  {
    id: 10,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png",
    description: "Crisis response",
  },
  {
    id: 11,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png",
    description: "Emotional Health",
  },
  {
    id: 12,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png",
    description: "Events",
  },
  {
    id: 13,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png",
    description: "Facebook Pay",
  },
  {
    id: 14,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png",
    description: "Favorites",
  },
  {
    id: 15,
    urlImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png",
    description: "Fundraisers",
  },
];

const friends = [
  {
    name: "David Brooks",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
    state: "online",
  },
  {
    name: "Jane Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    state: "online",
  },
  {
    name: "Matthew Hinkle Hinkle",
    imageUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80",
    haveStory: false,
    state: "offline",
  },
  {
    name: "Amy Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    state: "offline",
  },
  {
    name: "Ed Morris",
    imageUrl:
      "https://images.unsplash.com/photo-1575535468632-345892291673?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: false,
    state: "online",
  },
  {
    name: "Carolyn Duncan",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: false,
    state: "offline",
  },
  {
    name: "Paul Pinnock",
    imageUrl:
      "https://images.unsplash.com/photo-1519631128182-433895475ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80",
    state: "online",
  },
  {
    name: "Elizabeth Wong",
    imageUrl:
      "https://images.unsplash.com/photo-1515077678510-ce3bdf418862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=675&q=80",
    haveStory: false,
    state: "offline",
  },
  {
    name: "James Lathrop",
    imageUrl:
      "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=592&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    state: "online",
  },
  {
    name: "Jessie Samson",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: false,
    state: "offline",
  },
  {
    name: "David Brooks",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
    state: "offline",
  },
  {
    name: "Jane Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: false,
    state: "online",
  },
  {
    name: "Matthew Hinkle",
    imageUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80",
    haveStory: false,
    state: "offline",
  },
  {
    name: "Amy Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    haveStory: false,
    state: "offline",
  },
  {
    name: "Ed Morris",
    imageUrl:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80",
    haveStory: false,
    state: "offline",
  },
  {
    name: "Carolyn Duncan",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    state: "online",
  },
  {
    name: "Paul Pinnock",
    imageUrl:
      "https://images.unsplash.com/photo-1519631128182-433895475ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    haveStory: false,
    state: "offline",
  },
  {
    name: "Elizabeth Wong",
    imageUrl:
      "https://images.unsplash.com/photo-1515077678510-ce3bdf418862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=675&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    state: "offline",
  },
  {
    name: "James Lathrop",
    imageUrl:
      "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=592&q=80",
    haveStory: true,
    storyUrl:
      "https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80",
    state: "online",
  },
  {
    name: "Jessie Samson",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    haveStory: false,
    state: "online",
  },
];

const posts = [
  {
    name: "Jessie Samson",
    imageAva:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    caption:
      "Please enjoy this placeholder text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timeAgo: "3hr",
    imageUrl: null,
    likes: 683,
    comments: 79,
    shares: 18,
  },
  {
    name: "James Lathrop",
    imageAva:
      "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=592&q=80",
    caption: "This is a very good boi.",
    timeAgo: "8hr",
    imageUrl:
      "https://images.unsplash.com/photo-1575535468632-345892291673?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    likes: 894,
    comments: 201,
    shares: 27,
  },
  {
    name: "Paul Pinnock",
    imageAva:
      "https://images.unsplash.com/photo-1519631128182-433895475ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption:
      "More placeholder text for the soul: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timeAgo: "1d",
    imageUrl: null,
    likes: 482,
    comments: 37,
    shares: 9,
  },
  {
    name: "Ed Morris",
    imageAva:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80",
    caption: "A classic.",
    timeAgo: "1d",
    imageUrl:
      "https://images.unsplash.com/reserve/OlxPGKgRUaX0E1hg3b3X_Dumbo.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    likes: 1523,
    shares: 129,
    comments: 301,
  },
];

const loginLinks = [
  "Sign Up",
  "Log In",
  "Messenger",
  "Facebook Lite",
  "Watch",
  "Places",
  "Games",
  "Marketplace",
  "Facebook Pay",
  "Oculus",
  "Portal",
  "Insagram",
  "Bulletin",
  "Local",
  "Fundraisers",
  "Services",
  "Voting Infomation Centre",
  "Groups",
  "About",
  "Create ad",
  "Create Page",
  "Developers",
  "Carreers",
  "Privacy",
  "Cookies",
  "AdChoices",
  "Terms",
  "Help",
  "Contact uploading and non-users",
];

const languages = [
  "English (UK)",
  "Tiếng Việt",
  "中文(台灣)",
  "한국어",
  "日本語",
  "Français (France)",
  "ภาษาไทย",
  "Español",
  "Português (Brasil)",
  "Deutsch",
  "Italiano",
];
export default menu;
export { friends, posts, loginLinks, languages };
