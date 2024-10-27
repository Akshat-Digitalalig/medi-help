export type NavLink = {
    title: string;
    link?: string;
    sublink?: NavLink[];
};

export const navlink: NavLink[] = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Hospitals',
        link: '/hospitals',
    },
    {
        title: 'Doctors',
        link: '/doctors',
    },
    {
        title: 'Cost',
        link: '/cost',
    },
    {
        title: 'Knowledge',
        link:'/knowledge-center',
        sublink: [
            {
                title: 'Blog',
                link: '/knowledge-center/blog',
            },
            {
                title: 'Videos',
                link: '/knowledge-center/videos',
            },
            {
                title: 'Medical Visa',
                link: '/knowledge-center/medical-visa',
            },
        ],
    },
    {
        title: 'About Us',
        link: '/about',
    },
    {
        title: 'Free Consult',
        link: '/consult-online',
    },
];