import {AdminMenuTopItem} from "../../../../interfaces/admin/menu/adminMenu";

export const adminMenuRouting: Array<AdminMenuTopItem> = [
    {
        id: 'menu-admin-dashboard',
        icon: 'AiOutlineDashboard',
        itemText: 'Dashboard',
        linkHref: '/admin/panel/dashboard',
        children: []
    },
    {
        id: 'menu-admin-catalog',
        icon: 'AiOutlineProduct',
        itemText: 'Catalog',
        linkHref: '',
        children: [
            {
                id: 'menu-admin-products',
                icon: 'test',
                itemText: 'Products',
                linkHref: '/admin/panel/products'
            },
            {
                id: 'menu-admin-catalog',
                icon: 'test',
                itemText: 'Categories',
                linkHref: '/admin/panel/categories'
            }
        ]
    },
    {
        id: 'menu-admin-customers',
        icon: 'AiOutlineUser',
        itemText: 'Customers',
        linkHref: '',
        children: [
            {
                id: 'menu-admin-admins',
                icon: 'test',
                itemText: 'Admin Customers',
                linkHref: '#'
            },
            {
                id: 'menu-admin-customers',
                icon: 'test',
                itemText: 'Customers',
                linkHref: '#'
            }
        ]
    },
    {
        id: 'menu-admin-settings',
        icon: 'AiOutlineSetting ',
        itemText: 'Settings',
        linkHref: '/admin/panel/settings',
        children: []
    }
];
