import { FileSystemItem, DesktopIcon } from '../types';

export const fileSystem: FileSystemItem[] = [
  {
    id: 'important-txt',
    name: 'IMPORTANT.txt',
    type: 'file',
    icon: '📄',
    path: '/desktop/IMPORTANT.txt',
    content: 'assad likes getting pegged:3'
  },
  {
    id: 'yuzy-secret',
    name: "Yuzy's Secret Folder",
    type: 'folder',
    icon: '💕',
    path: '/desktop/yuzy-secret',
    children: [
      {
        id: 'yuzy-love-note',
        name: 'i love assad:3',
        type: 'file',
        icon: '💌',
        path: '/desktop/yuzy-secret/i love assad:3',
        content: 'Dear Assad,\n\nYou mean the world to me! Every moment with you is like a dream come true. Your smile lights up my day and your laugh is music to my ears.\n\nForever yours,\nYuzy 💕'
      }
    ]
  },
  {
    id: 'assad-secret',
    name: "Assad's Secret Folder",
    type: 'folder',
    icon: '💖',
    path: '/desktop/assad-secret',
    children: [
      {
        id: 'assad-love-note',
        name: 'i love yuzy:3',
        type: 'file',
        icon: '💌',
        path: '/desktop/assad-secret/i love yuzy:3',
        content: 'My dearest Yuzy,\n\nYou are my sunshine, my happiness, and my everything. I fall in love with you more each day. Thank you for being the most amazing person in my life.\n\nWith all my love,\nAssad 💖'
      }
    ]
  },
  {
    id: 'yuzy-socials',
    name: 'Yuzy Socials',
    type: 'folder',
    icon: '🌸',
    path: '/desktop/yuzy-socials',
    children: [
      {
        id: 'yuzy-discord',
        name: 'Discord - 1004882309520035860',
        type: 'file',
        icon: 'discord',
        path: '/desktop/yuzy-socials/discord',
        content: 'https://discord.com/users/1004882309520035860'
      },
      {
        id: 'yuzy-telegram',
        name: 'Telegram - bleedout2',
        type: 'file',
        icon: 'telegram',
        path: '/desktop/yuzy-socials/telegram',
        content: 'https://web.telegram.org/k/#@bleedout2'
      },
      {
        id: 'yuzy-roblox',
        name: 'Roblox - yumeowss',
        type: 'file',
        icon: 'roblox',
        path: '/desktop/yuzy-socials/roblox',
        content: 'https://www.roblox.com/users/3805854228/profile'
      },
      {
        id: 'yuzy-spotify',
        name: 'Spotify - yvkeo',
        type: 'file',
        icon: 'spotify',
        path: '/desktop/yuzy-socials/spotify',
        content: 'https://open.spotify.com/user/31alef7rgg2vcho2efrpkbb2p5we'
      }
    ]
  },
  {
    id: 'assad-socials',
    name: 'Assad Socials',
    type: 'folder',
    icon: '🌟',
    path: '/desktop/assad-socials',
    children: [
      {
        id: 'assad-discord',
        name: 'Discord - 1364362924478435443',
        type: 'file',
        icon: 'discord',
        path: '/desktop/assad-socials/discord',
        content: 'https://discord.com/users/1364362924478435443'
      },
      {
        id: 'assad-telegram',
        name: 'Telegram - assad12341',
        type: 'file',
        icon: 'telegram',
        path: '/desktop/assad-socials/telegram',
        content: 'https://web.telegram.org/k/#@assad12341'
      },
      {
        id: 'assad-twitter',
        name: 'X (Twitter) - assadKEK',
        type: 'file',
        icon: 'twitter',
        path: '/desktop/assad-socials/twitter',
        content: 'https://x.com/assadKEK'
      },
      {
        id: 'assad-github',
        name: 'GitHub - assad12341',
        type: 'file',
        icon: 'github',
        path: '/desktop/assad-socials/github',
        content: 'https://github.com/assad12341'
      },
      {
        id: 'assad-spotify',
        name: 'Spotify - LM',
        type: 'file',
        icon: 'spotify',
        path: '/desktop/assad-socials/spotify',
        content: 'https://open.spotify.com/user/3155s6zwds5fne3tnb7vktt4oayu'
      },
      {
        id: 'assad-roblox',
        name: 'Roblox - fullypieced200',
        type: 'file',
        icon: 'roblox',
        path: '/desktop/assad-socials/roblox',
        content: 'https://www.roblox.com/users/7976872534/profile?friendshipSourceType=PlayerSearch'
      }
    ]
  }
];

export const desktopIcons: DesktopIcon[] = [
  {
    id: 'important-txt',
    name: 'IMPORTANT.txt',
    icon: '📄',
    position: { x: 600, y: 100 }, // Top center area with spacing
    type: 'file',
    action: 'open-file',
    data: { fileId: 'important-txt' }
  },
  {
    id: 'yuzy-profile',
    name: 'Yuzy',
    icon: '/media/yuzy.jpg',
    position: { x: 50, y: 50 },
    type: 'app',
    action: 'popup',
    data: { message: 'i kidnapped assad' }
  },
  {
    id: 'yuzy-socials-folder',
    name: 'Yuzy Socials',
    icon: '/media/y-social.jpg',
    position: { x: 50, y: -310 }, // Calculated from bottom - moved higher
    type: 'folder',
    action: 'open-folder',
    data: { folderId: 'yuzy-socials' }
  },
  {
    id: 'yuzy-secret-folder',
    name: "Yuzy's Secret Folder",
    icon: '💕',
    position: { x: 50, y: -180 }, // Calculated from bottom - moved higher
    type: 'folder',
    action: 'open-folder',
    data: { folderId: 'yuzy-secret' }
  },
  {
    id: 'assad-profile',
    name: 'Assad',
    icon: '/media/assads.jpg',
    position: { x: 180, y: 50 },
    type: 'app',
    action: 'popup',
    data: { message: 'who’s basement is this?' }
  },
  {
    id: 'assad-socials-folder',
    name: 'Assad Socials',
    icon: '/media/a-social.jpg',
    position: { x: 180, y: -310 }, // Calculated from bottom - moved higher
    type: 'folder',
    action: 'open-folder',
    data: { folderId: 'assad-socials' }
  },
  {
    id: 'assad-secret-folder',
    name: "Assad's Secret Folder",
    icon: '💖',
    position: { x: 180, y: -180 }, // Calculated from bottom - moved higher
    type: 'folder',
    action: 'open-folder',
    data: { folderId: 'assad-secret' }
  }
];