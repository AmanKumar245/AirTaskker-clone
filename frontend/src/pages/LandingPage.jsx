import React from 'react';
import Hero from '../components/Hero';
import Membership from '../components/Membership';
import TaskCategories from '../components/TaskCategories';
import RecentTasks from '../components/RecentTasks';
import TrustAndSafety from '../components/TrustAndSafety';
import BeYourOwnBoss from '../components/BeYourOwnBoss';
import Articles from '../components/Articles';
import TopCategories from '../components/TopCategories';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <RecentTasks />
            <Membership />
            <TaskCategories />
            <TrustAndSafety />
            <BeYourOwnBoss />
            <Articles />
            <TopCategories />
        </>
    );
};

export default LandingPage;
