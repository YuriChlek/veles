export interface AdminMenuItem {
    id: string,
    icon: string,
    itemText: string,
    linkHref: string,
}

export interface AdminMenuTopItem extends AdminMenuItem{
    children: Array<AdminMenuItem> | [];
}

export interface AdminMenuItemProps {
    id: string,
    toggledId: string,
    setOpenItemId: any
    items: Array<AdminMenuItem>
}
