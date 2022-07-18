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
        'BE:COMPANY': [
            {
                label: 'Proyectos',
                path: '/proyecto',
                iconName: 'ballot'
            },
            {
                label: 'Empresa',
                path: '/empresa',
                iconName: 'ballot'
            },
            {
                label: 'Usuarios',
                path: '/usuario',
                iconName: 'group'
            },
        ],
        'BE:LICI': [
            {
                label: "Mis Proyectos",
                path: '/proyectos',
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
                routesAvailables: routesAvailables[currentUser['permission-name']],
                name: currentUser['full-name'],
                role: currentUser['permission-name']
            });

        }
    }, []);

    return user;
}