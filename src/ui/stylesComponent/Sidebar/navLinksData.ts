import React from "react";


// <li><NavLink to="/profile">Profile</NavLink></li>
// <li><NavLink to="/dialogs">Messages</NavLink></li>
// <li><NavLink to="/users" >Users</NavLink></li>
// <li><NavLink to="/news" >News</NavLink></li>
// <li><NavLink to="/music" >Music</NavLink></li>
// <li><NavLink to="/settings" >Settings</NavLink></li>

export const PATH = {
    profile: '/profile',
    messages: '/messages',
    users: '/users',
    music: '/music',
    news: '/news',
    settings: '/settings',
    login: '/login'
}
export const navLinks = [
    {
        id: 1,
        label: "profile",
        link: PATH.profile,
    },
    {
        id: 2,
        label: "messages",
        link: PATH.messages,
    },
    {
        id: 3,
        label: "users",
        link: PATH.users,
    },
    {
        id: 4,
        label: "music",
        link: PATH.music,
    },
    {
        id: 5,
        label: "news",
        link: PATH.news,
    }
]


