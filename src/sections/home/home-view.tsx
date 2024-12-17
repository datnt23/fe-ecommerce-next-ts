"use client";

import { useScroll } from 'framer-motion';
import ScrollProgress from '../../components/scroll-progress'
import HomeLayout from '../../layouts/home'

// ----------------------------------------------------------------------

export default function HomeView() {
    const { scrollYProgress } = useScroll();

    return (
        <HomeLayout>
            <ScrollProgress scrollYProgress={scrollYProgress} />
        </HomeLayout>
    )
}
