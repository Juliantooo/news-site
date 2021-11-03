import React from "react";

const Home = React.lazy(()=> import('../views/home'));
const Covid = React.lazy(()=> import('../views/covid'));
const Indonesia = React.lazy(()=> import('../views/indonesia'));
const Programing = React.lazy(()=> import('../views/programing'));
const Saved = React.lazy(()=> import('../views/saved'));
const DetailNews = React.lazy(()=> import('../views/detailNews'));

const routes = [
    {
        path: '/',
        name : 'Home',
        exact:true,
        component : Home
    },
    {
        path: '/programing',
        name : 'Programing',
        exact:true,
        component : Programing
    },
    {
        path: '/indonesia',
        name : 'Indonesia',
        exact:true,
        component : Indonesia
    },
    {
        path: '/covid',
        name : 'Covid',
        exact:true,
        component : Covid
    },
    {
        path: '/saved',
        name : 'Save',
        exact:true,
        component : Saved
    },
    {
        path: '/detail/:title',
        name : 'Detail',
        exact:true,
        component : DetailNews
    },
];

export default routes