import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export const Menus = [
    {
        name: 'Students',
        Icon: PeopleAltIcon,
        route: '/students'
    },

    {
        name: 'Books',
        Icon: LibraryBooksIcon,
        route: '/books'
    }
]

export const Config = {
    drawerWidth: 240
}