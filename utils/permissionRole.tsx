import { useEffect, useState } from 'react';


export interface IUser {
    routesAvailables: Array<any>,
    name: string;
    role: "BE:ADMIN" | "BE:LICI" | "BE:COMPANY";
}

export function useRolePermission() {
    const [user, setUser] = useState<IUser>();
    const routesAvailables = {
        'BE:ADMIN': [
            {
                label: 'Proyectos',
                path: '/proyecto',
                iconName: 'ballot'
            },
            {
                label: 'Usuarios',
                path: '/usuario',
                iconName: 'group'
            },
            {
                label: 'Hojas de vida',
                path: '/hojas-de-vida',
                iconName: 'cv'
            },
        ],
        'BE:LICI': [
            {
                label: 'Proyectos',
                path: '/proyecto',
                iconName: 'ballot'
            },
            {
                label: 'Usuarios',
                path: '/usuario',
                iconName: 'group'
            },
        ],
        'BE:COMPANY': [
            {
                label: "Mis Proyectos",
                path: '/proyecto',
                iconName: 'ballot'
            },
            {
                label: "La Empresa",
                path: '/empresa',
                iconName: 'company'
            },
            {
                label: 'Hojas de vida',
                path: '/hojas-de-vida',
                iconName: 'cv'
            },
        ]
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentUser = JSON.parse(localStorage.getItem('user'));

            setUser({
                ...user,
                routesAvailables: routesAvailables[currentUser.licenses[0]],
                name: currentUser['first-name'] + ' ' + currentUser['last-name'],
                role: currentUser.licenses[0]
            });

        }
    }, []);

    return user;
}