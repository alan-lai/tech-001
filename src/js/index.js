new Vue({
    el: '#app',
    data: {
        showMenu: false,
        menuItems: [
            {
                name: 'Menu 1',
                href: '#',
                active: false,
                children: [
                    {
                        name: 'Submenu 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        href: '#'
                    },
                    {
                        name: 'Submenu 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        href: '#'
                    }
                ]
            },
            {
                name: 'Menu 2',
                href: '#',
                active: false
            },
            {
                name: 'Menu 3',
                href: '#',
                active: false
            },
            {
                name: 'Menu 4',
                href: '#',
                active: false,
                children: [
                    {
                        name: 'Submenu 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        href: '#'
                    },
                    {
                        name: 'Submenu 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        href: '#'
                    }
                ]
            }
        ],
        articles: []
    },
    methods: {
        toggleMobileMenu() {
            this.showMenu = !this.showMenu;
        },
        toggleItem(menuItem, e) {
            e.preventDefault();
            menuItem.active = !menuItem.active;

        }
    },
    created() {
        //if we were to load from datasource
        let articles = [
            {
                image: '/images/placeholder-01.jpg',
                title: 'Cras egestas turpis vel erat ullamcorper efficitur &hellip;',
                blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur igitur easdem res, inquam, Peripateticis dicentibus ur igitur easdem &hellip;',
                link: {
                    text: 'Read more',
                    href: '#'
                }
            },
            {
                image: '/images/placeholder-02.jpg',
                title: 'Cras egestas turpis',
                blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur igitur easdem res, inquam, Peripateticis dicentibus igitur easdem res &hellip;',
                link: {
                    text: 'Join Us',
                    href: '#'
                }
            },
            {
                image: '/images/placeholder-03.jpg',
                title: 'Cras egestas turpis',
                blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur igitur easdem res, inquam, Peripateticis dicentibus igitur easdem res &hellip;',
                link: {
                    text: 'Read more',
                    href: '#'
                }
            }
        ];
        this.articles = articles;
    }
})