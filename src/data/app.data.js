import { AiFillHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { MdSubscriptions } from 'react-icons/md';
import { BiLibrary } from 'react-icons/bi';
import { MdHistory } from 'react-icons/md';
import { BiVideo } from 'react-icons/bi';
import { BsStopwatch } from 'react-icons/bs';
import { MdLocalMovies } from 'react-icons/md';
import { SiFacebookgaming } from 'react-icons/si';
import { SiLivechat } from 'react-icons/si';
import { GiLargeDress } from 'react-icons/gi';
import { AiFillYoutube } from 'react-icons/ai';
import { SiYoutubestudio } from 'react-icons/si';
import { TbBrandYoutube } from 'react-icons/tb';
import { CgYoutube } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { FaHistory } from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import { MdFeedback } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import { MdCardMembership } from 'react-icons/md';
import { SiReasonstudios } from 'react-icons/si';
import { AiOutlineDatabase } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';

export const notificationData = [
  {
    id: 1,
    text: 'Vercel is live! Personalization at the edge',
    time: '7 hours ago',
    url: '/',
    avatar: 'https://i.pravatar.cc/150?img=1',
    alt: 'item 1',
  },
  {
    id: 2,
    text: 'Recommended: ThinkMedia upload new video',
    time: '11 hours ago',
    url: '/',
    avatar: 'https://i.pravatar.cc/150?img=2',
    alt: 'item 2',
  },
  {
    id: 3,
    text: 'SportsCentral: Uploaded India vs Pak Match',
    time: '12 hours ago',
    url: '/',
    avatar: 'https://i.pravatar.cc/150?img=3',
    alt: 'item 3',
  },
  {
    id: 4,
    text: 'SunMusic: PS1 Video Ponni Nadhi | AR Rahman | Mani Ratnam',
    time: '1 day ago',
    url: '/',
    avatar: 'https://i.pravatar.cc/150?img=4',
    alt: 'item 4',
  },
];

export const sideListItems = [
  { id: 1, text: 'Home', icon: <AiFillHome size={24} /> },
  { id: 2, text: 'Explore', icon: <MdOutlineExplore size={24} /> },
  { id: 3, text: 'Shorts', icon: <AiOutlinePlaySquare size={24} /> },
  { id: 4, text: 'Subscriptions', icon: <MdSubscriptions size={24} /> },
  { id: 5, divider: true },
  { id: 6, text: 'Library', icon: <BiLibrary size={24} /> },
  { id: 7, text: 'History', icon: <MdHistory size={24} /> },
  { id: 8, text: 'Your Videos', icon: <BiVideo size={24} /> },
  { id: 9, text: 'Watch Later', icon: <BsStopwatch size={24} /> },
  { id: 10, subdivision: true, text: 'Explore' },
  { id: 11, text: 'Movies & Shows', icon: <MdLocalMovies size={24} /> },
  { id: 12, text: 'Gaming', icon: <SiFacebookgaming size={24} /> },
  { id: 13, text: 'Live', icon: <SiLivechat size={24} /> },
  { id: 14, text: 'Fashion & Beauty', icon: <GiLargeDress size={24} /> },
  { id: 15, subdivision: true, text: 'More from Youtube' },
  {
    id: 16,
    text: 'Youtube Premium',
    icon: <AiFillYoutube size={24} color="red" />,
  },
  {
    id: 17,
    text: 'Creator Studio',
    icon: <SiYoutubestudio size={24} color="red" />,
  },
  {
    id: 18,
    text: 'Youtube Music',
    icon: <TbBrandYoutube size={24} color="red" />,
  },
  { id: 19, text: 'Youtube TV', icon: <CgYoutube size={24} color="red" /> },
  { id: 20, divider: true },
  { id: 21, text: 'Settings', icon: <FiSettings size={24} /> },
  { id: 22, text: 'Report History', icon: <FaHistory size={24} /> },
  { id: 23, text: 'Help', icon: <FiHelpCircle size={24} /> },
  { id: 24, text: 'Send Feedback', icon: <MdFeedback size={24} /> },
];

export const tabItems = [
  { id: 1, text: 'All' },
  { id: 2, text: 'Music' },
  { id: 3, text: 'A.R. Rahman' },
  { id: 4, text: 'Tamil Cinema' },
  { id: 5, text: 'Javascript' },
  { id: 6, text: 'Live' },
  { id: 7, text: 'Editing' },
  { id: 8, text: 'Web Development' },
  { id: 9, text: 'Anirudh Ravichander' },
  { id: 10, text: 'Film' },
  { id: 11, text: 'Debate' },
  { id: 12, text: 'Cricket' },
  { id: 13, text: 'Conversation' },
  { id: 14, text: 'Pop Music' },
  { id: 15, text: 'Recently Updated' },
];

export const userProfileItems = [
  { id: 1, text: 'Your Channel', icon: <GrChannel size={24} /> },
  { id: 2, text: 'Youtube Studio', icon: <SiReasonstudios size={24} /> },
  { id: 3, text: 'Switch Account', icon: <GrChannel size={24} /> },
  { id: 4, text: 'Sign out', icon: <SiReasonstudios size={24} /> },
  { id: 5, divider: true },
  {
    id: 6,
    text: 'Purchase & Membership',
    icon: <MdCardMembership size={24} />,
  },
  {
    id: 7,
    text: 'Your data in Youtube',
    icon: <AiOutlineDatabase size={24} />,
  },
];

export const uploadMenuItems = [
  { id: 1, icon: <FiPlay />, text: 'Upload Video' },
  { id: 2, text: 'Go Live' },
];

export const shortsItems = [
  {
    id: 1,
    url: 'https://i.ytimg.com/vi/5CK7UrLThYY/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBkgIZm1dFl6OAzpG31oADTMLab5w',
    views: '1.7M',
    text: 'തല്ലുമാല Dance | Alambanz Shorts',
    shortsUrl: 'https://www.youtube.com/shorts/5CK7UrLThYY',
  },
  {
    id: 2,
    url: 'https://i.ytimg.com/vi/y0q50KVq1X8/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDsC28SPAIXlZrP4NDS7DnYnJzyLQ',
    views: '1.2M',
    text: 'അടിപൊളി Glitch Transition Create ചെയ്‌യാം | Premiere pro transitions Malayalam',
    shortsUrl: 'https://www.youtube.com/shorts/y0q50KVq1X8',
  },
  {
    id: 3,
    url: 'https://i.ytimg.com/vi/MOFXN37pNgI/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDLRR9LHKDCnneHS8A4c0W0t4UaDA',
    views: '1.3M',
    text: 'Mahaveeryar movie whatsapp status 😅 അമ്പട കള്ളാ 😂 | Nivin Pauly |',
    shortsUrl: 'https://www.youtube.com/shorts/MOFXN37pNgI',
  },
  {
    id: 4,
    url: 'https://i.ytimg.com/vi/gAqN6R25Jrw/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDLlyqNfI2mW24DdrL-jNW1lOKucw',
    views: '1.4M',
    text: 'ബ്ലാക്ക് ഡ്രസ്സിന്റെ ഒരു പവർ 🔥/ ബ്ലാക്ക് ഡ്രസ്സ് ഇഷ്ടപ്പെടുന്നവർ ഉണ്ടോ /celebrities in black dress',
    shortsUrl: 'https://www.youtube.com/shorts/gAqN6R25Jrw',
  },
  {
    id: 5,
    url: 'https://i.ytimg.com/vi/u869FP5JT5c/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLD3cq0jyhILiVJRMwaaoYA9Rov-hw',
    views: '1.5M',
    text: '#bimbilikkipilapi #sivakarthikeyan #thamans #sk #anirudh #anirudhravichander #anirudhmusic #siva',
    shortsUrl: 'https://www.youtube.com/shorts/u869FP5JT5c',
  },
  {
    id: 6,
    url: 'https://i.ytimg.com/vi/UFMdpvzNuk8/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLD62tHklAVRuOgOe7cOcRF2imHM3g',
    views: '2.7M',
    text: 'കണ്ണൂരുകാർക്ക് വിഷമമായിട്ടുണ്ടാകും പക്ഷേ ഇത് എല്ലാ മലയാളികൾക്കും വേണ്ടിയുള്ള കഥയാണ് | THALLUMAALA |',
    shortsUrl: 'https://www.youtube.com/shorts/UFMdpvzNuk8',
  },
  {
    id: 7,
    url: 'https://i.ytimg.com/vi/2W8Nyv38f1M/hq720_2.jpg?sqp=-oaymwEdCNAFENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDS03CCwAQcuXP-gxQw8WUUM0XMRw',
    views: '3.7M',
    text: 'உலக நாயகன் உருமாறும் Video 😱💥 #Kamalhasan #Vikram #Lokeshkanagaraj',
    shortsUrl: 'https://www.youtube.com/shorts/2W8Nyv38f1M',
  },
  {
    id: 8,
    url: 'https://i.ytimg.com/vi/lD_vlkLKG20/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAa5koHh1cfIJ_Q-j6RhanORjNqLw',
    views: '4.7M',
    text: 'സ്റ്റേജിൽ സുപ്രിയയുടെ ഇംഗ്ലീഷ് കേട്ടപ്പോൾ, ദൈവമേ മൂർഖൻ പാമ്പിനെ ആണല്ലോ ചവിട്ടിയത്',
    shortsUrl: 'https://www.youtube.com/shorts/lD_vlkLKG20',
  },
];

export const trimText = (text) => {
  return text.substring(0, 75);
};

// Response taken from actual youtube query
export const youtubeResponse = [
  {
    kind: 'youtube#searchResult',
    etag: '9zNhZmjDv0NY8B7hKm3yQaXxdGY',
    id: {
      kind: 'youtube#video',
      videoId: 'W6NZfCO5SIk',
    },
    snippet: {
      publishedAt: '2018-04-24T02:37:33Z',
      channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
      title: 'JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour',
      description:
        'Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. Want to master JavaScript? Get my complete ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Programming with Mosh',
      liveBroadcastContent: 'none',
      publishTime: '2018-04-24T02:37:33Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'J3yPQN95mQq8PpjOIHNvVVu-V_0',
    id: {
      kind: 'youtube#video',
      videoId: 'PkZNo7MFNFg',
    },
    snippet: {
      publishedAt: '2018-12-10T14:13:40Z',
      channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
      title: 'Learn JavaScript - Full Course for Beginners',
      description:
        'This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'freeCodeCamp.org',
      liveBroadcastContent: 'none',
      publishTime: '2018-12-10T14:13:40Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'h-xzJbcP3NW0wCX5ygrQEoAjtjM',
    id: {
      kind: 'youtube#video',
      videoId: 'jS4aFq5-91M',
    },
    snippet: {
      publishedAt: '2021-06-21T16:42:15Z',
      channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
      title: 'JavaScript Programming - Full Course',
      description:
        'Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/jS4aFq5-91M/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/jS4aFq5-91M/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'freeCodeCamp.org',
      liveBroadcastContent: 'none',
      publishTime: '2021-06-21T16:42:15Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'vEHVr68DEykB2fIELSe_if_CmmA',
    id: {
      kind: 'youtube#video',
      videoId: 'c-I5S_zTwAc',
    },
    snippet: {
      publishedAt: '2019-12-09T19:15:01Z',
      channelId: 'UCRLEADhMcb8WUdnQ5_Alk7g',
      title: 'Learn JAVASCRIPT in just 5 MINUTES (2020)',
      description:
        "Learn the most important parts of 2020 Javascript in just 5 minutes If you're serious about learning & earning money with ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/c-I5S_zTwAc/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/c-I5S_zTwAc/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/c-I5S_zTwAc/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Aaron Jack',
      liveBroadcastContent: 'none',
      publishTime: '2019-12-09T19:15:01Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'dZ15Z3XmGGZ_F7uEbYCaAyj6Gjc',
    id: {
      kind: 'youtube#video',
      videoId: 'hdI2bqOjy3c',
    },
    snippet: {
      publishedAt: '2019-03-13T15:46:32Z',
      channelId: 'UC29ju8bIPH5as8OGnQzwJyA',
      title: 'JavaScript Crash Course For Beginners',
      description:
        'In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/hdI2bqOjy3c/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/hdI2bqOjy3c/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Traversy Media',
      liveBroadcastContent: 'none',
      publishTime: '2019-03-13T15:46:32Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'gDLg0I6UoQrAiVEWbjF7bEE_6EE',
    id: {
      kind: 'youtube#video',
      videoId: 'DHjqpvDnNGE',
    },
    snippet: {
      publishedAt: '2022-01-13T17:56:13Z',
      channelId: 'UCsBjURrPoezykLs9EqgamOA',
      title: 'JavaScript in 100 Seconds',
      description:
        'JavaScript is the the programming language that built the web. Learn how it evolved into a powerful tool for building websites, ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/DHjqpvDnNGE/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/DHjqpvDnNGE/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/DHjqpvDnNGE/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Fireship',
      liveBroadcastContent: 'none',
      publishTime: '2022-01-13T17:56:13Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'd7myMENvjjTJJpFU0Y6kQ3BS4LY',
    id: {
      kind: 'youtube#video',
      videoId: 'a00NRSFgHsY',
    },
    snippet: {
      publishedAt: '2021-02-02T15:00:00Z',
      channelId: 'UC-T8W79DN6PBnzomelvqJYw',
      title: '5 JavaScript Concepts You HAVE TO KNOW',
      description:
        "How well do you know JavaScript? Well, if you don't know these 5 concepts, then you better get on it! 00:00 - Intro 01:00 - Equality ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/a00NRSFgHsY/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/a00NRSFgHsY/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/a00NRSFgHsY/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'James Q Quick',
      liveBroadcastContent: 'none',
      publishTime: '2021-02-02T15:00:00Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'mjf4FW2UtZbz3ERoA28z0ZEyaIw',
    id: {
      kind: 'youtube#channel',
      videoId: 'lI1ae4REbFM',
    },
    snippet: {
      publishedAt: '2018-12-25T10:37:24Z',
      channelId: 'UCmXmlB4-HJytD7wek0Uo97A',
      title: 'JavaScript Mastery',
      description:
        'Launch your development career with project-based coaching - showcase your skills with practical development experience and ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/lI1ae4REbFM/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/lI1ae4REbFM/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/lI1ae4REbFM/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'JavaScript Mastery',
      liveBroadcastContent: 'none',
      publishTime: '2018-12-25T10:37:24Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '8ixGuE6ojMSP9_bZ70yRVcNAtkM',
    id: {
      kind: 'youtube#video',
      videoId: 'lI1ae4REbFM',
    },
    snippet: {
      publishedAt: '2022-06-30T16:00:11Z',
      channelId: 'UCqrILQNl5Ed9Dz6CGMyvMTQ',
      title:
        'JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)',
      description:
        'FORK THIS REPL https://join.replit.com/cp-javascript GET THE FREE COURSE ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/lI1ae4REbFM/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/lI1ae4REbFM/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/lI1ae4REbFM/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Clever Programmer',
      liveBroadcastContent: 'none',
      publishTime: '2022-06-30T16:00:11Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'p_ZuYdgqG_rPTZ5SQ4YHqbAMKF0',
    id: {
      kind: 'youtube#video',
      videoId: '9emXNzqCKyg',
    },
    snippet: {
      publishedAt: '2019-07-15T16:41:44Z',
      channelId: 'UCsBjURrPoezykLs9EqgamOA',
      title: 'The JavaScript Survival Guide',
      description:
        'The JavaScript Survival Guide provides protection from the so-called "weird" features that you will encounter as a JS developer.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/9emXNzqCKyg/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/9emXNzqCKyg/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/9emXNzqCKyg/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Fireship',
      liveBroadcastContent: 'none',
      publishTime: '2019-07-15T16:41:44Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'SVOBpzWHoQmKpdvR8x3fBS06NvY',
    id: {
      kind: 'youtube#playlist',
      playlistId: 'PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf',
    },
    snippet: {
      publishedAt: '2019-01-02T12:05:27Z',
      channelId: 'UCuT0rj__qEq_ZO3kYwun4Qg',
      title: '🏆 JavaScript Tutorial for beginners in Hindi / Urdu',
      description:
        'JavaScript Tutorial for beginners in hindi and urdu in most easiest way.This javascript crash course in hindi explain you every ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Lgxgm-T9cgA/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Lgxgm-T9cgA/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/Lgxgm-T9cgA/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Yahoo Baba',
      liveBroadcastContent: 'none',
      publishTime: '2019-01-02T12:05:27Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'h9HWMhOXrb1-Knl7Dw5p-BdsfHk',
    id: {
      kind: 'youtube#video',
      videoId: 'jjydMpW47wk',
    },
    snippet: {
      publishedAt: '2021-05-30T16:59:48Z',
      channelId: 'UC-bFgwL_kFKLZA60AiB-CCQ',
      title: 'Learning JavaScript in 3 Days ?? | Code With Me',
      description:
        "In this video, I attempt to learn JavaScript in 3 Days! GitHub Link: https://github.com/TheComeUpCode/hide-ex LET'S BE FRIENDS ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/jjydMpW47wk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/jjydMpW47wk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/jjydMpW47wk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Bukola',
      liveBroadcastContent: 'none',
      publishTime: '2021-05-30T16:59:48Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'sufqVYZ42_sbzSFd3TENkYBbjiw',
    id: {
      kind: 'youtube#playlist',
      playlistId: 'PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE',
    },
    snippet: {
      publishedAt: '2022-01-01T05:52:36Z',
      channelId: 'UCbQh1yxBPVhyjB-G_blFFEQ',
      title: 'كورس جافا سكريبت كامل | Javascript Tutorial',
      description:
        'اذا كنت من محبي البرمجة فحتماً قد وقع نظرك على لغة javascript او المعروفة بلغة js لكن هل تملك المعلومات الكافية عنها؟! تعتبر لغة ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/PWuTLTFMtYw/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/PWuTLTFMtYw/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/PWuTLTFMtYw/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Abdelrahman Gamal',
      liveBroadcastContent: 'none',
      publishTime: '2022-01-01T05:52:36Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'LvsEivZBkg_VtzxqhfmKYUiBa-g',
    id: {
      kind: 'youtube#video',
      videoId: 'upDLs1sn7g4',
    },
    snippet: {
      publishedAt: '2018-04-24T04:00:17Z',
      channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
      title: 'What is JavaScript?',
      description:
        'What is JavaScript? This short video explains it in 5 minutes. Get the full JavaScript course: http://bit.ly/2M1sp4B Subscribe for ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/upDLs1sn7g4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/upDLs1sn7g4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/upDLs1sn7g4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Programming with Mosh',
      liveBroadcastContent: 'none',
      publishTime: '2018-04-24T04:00:17Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'P1Jjr52E25GvwmZDdry7yqMFWxQ',
    id: {
      kind: 'youtube#video',
      videoId: 'Ukg_U3CnJWI',
    },
    snippet: {
      publishedAt: '2014-08-05T14:30:15Z',
      channelId: 'UCc1Pn7FxieMohCZFPYEbs7w',
      title: 'Learn JavaScript in 12 Minutes',
      description:
        'Learn the fundamental features of JavaScript - the language used to add dynamic, interactive content to websites. I teach you how ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Ukg_U3CnJWI/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Ukg_U3CnJWI/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/Ukg_U3CnJWI/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Jake Wright',
      liveBroadcastContent: 'none',
      publishTime: '2014-08-05T14:30:15Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'xS0OEimDF3S0fyD0dCuvYd3LOU0',
    id: {
      kind: 'youtube#video',
      videoId: 'DqaTKBU9TZk',
    },
    snippet: {
      publishedAt: '2021-04-28T23:50:07Z',
      channelId: 'UCB6dvaWu0N8uVq2yKsZ5s5g',
      title:
        'BEST JavaScript Tutorial for Beginners for Getting a Job 2021 (High Quality, Project Based Course)',
      description:
        'Build a full app in this JavaScript tutorial, designed to help new programmers get into the tech industry. Exercises, code ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/DqaTKBU9TZk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/DqaTKBU9TZk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/DqaTKBU9TZk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'SuperSimpleDev',
      liveBroadcastContent: 'none',
      publishTime: '2021-04-28T23:50:07Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'QSpRoyrnnrN--11z0ThE58qdGL4',
    id: {
      kind: 'youtube#video',
      videoId: 'ec8vSKJuZTk',
    },
    snippet: {
      publishedAt: '2022-02-28T14:47:20Z',
      channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
      title: 'Learn JavaScript by Building 7 Games - Full Course',
      description:
        'Learn JavaScript by building 7 retro games. ✏️ Ania Kubów created this course. Check out her channel: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/ec8vSKJuZTk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ec8vSKJuZTk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/ec8vSKJuZTk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'freeCodeCamp.org',
      liveBroadcastContent: 'none',
      publishTime: '2022-02-28T14:47:20Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '8n-HmnsXaf_qcLEhC2LdaowcJb4',
    id: {
      kind: 'youtube#video',
      videoId: 'R8rmfD9Y5-c',
    },
    snippet: {
      publishedAt: '2019-02-02T13:00:05Z',
      channelId: 'UCFbNIlppjAuEX4znoulh0Cw',
      title: '8 Must Know JavaScript Array Methods',
      description:
        'Working with arrays in JavaScript used to be a pain with barely any support for complex array operations. Fast forward to today, ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/R8rmfD9Y5-c/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/R8rmfD9Y5-c/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/R8rmfD9Y5-c/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Web Dev Simplified',
      liveBroadcastContent: 'none',
      publishTime: '2019-02-02T13:00:05Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: '4VOYecwFH5q3u2D7S86GTzkMhpI',
    id: {
      kind: 'youtube#playlist',
      playlistId: 'PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
    },
    snippet: {
      publishedAt: '2020-10-18T02:47:42Z',
      channelId: 'UC3N9i_KvKZYP4F84FPIzgPQ',
      title: 'Namaste 🙏 JavaScript',
      description:
        'Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/pN6jk0uUrD8/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Akshay Saini',
      liveBroadcastContent: 'none',
      publishTime: '2020-10-18T02:47:42Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'WmdF37_hirPkegwTXomVSUC5dFM',
    id: {
      kind: 'youtube#video',
      videoId: 'bG2BmmYr9NQ',
    },
    snippet: {
      publishedAt: '2020-05-16T17:29:38Z',
      channelId: 'UCwjglHy7pCPF4ES-S7FKxQg',
      title: 'The Easiest Javascript Game Ever',
      description:
        "In this video I show you how I created the most basic, simple javascript game that you can make yourself. It's similar to the google ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/bG2BmmYr9NQ/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/bG2BmmYr9NQ/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/bG2BmmYr9NQ/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'KnifeCircus',
      liveBroadcastContent: 'none',
      publishTime: '2020-05-16T17:29:38Z',
    },
  },
];
