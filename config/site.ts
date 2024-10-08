export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "GitHub Handbook",
    description: "The GitHub Handbook is a guide to using GitHub at the Department of Veterans Affairs.",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Getting Access",
            href: "/access",
        },
        {
            label: "Guides",
            href: "/guides",
        },
        {
            label: "Policies",
            href: "/policies",
        },
        {
            label: "About",
            href: "/about",
        }
    ],
    customer: {
        shortname: "VA",
        name: "Department of Veterans Affairs",
},
    links: {
        github: "https://github.com/department-of-veterans-affairs",
        source: "https://github.com/department-of-veterans-affairs/handbook",
        issues: "https://github.com/department-of-veterans-affairs/handbook/issues/new",
        support: "https://github.com/department-of-veterans-affairs/github-user-requests/issues/new/choose",
    },
};
