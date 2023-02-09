'use client';

import { Inter } from '@next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Account() {
    const router = useRouter();
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <h1>Accounts</h1>
            </div>
            <Link href='/'>Back To Home</Link>
            {/* <button type="button" onClick={() => router.push('/')}>
                Back To Home
                </button> */}
        </main>
    );
}
