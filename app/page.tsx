import styles from './ui/home.module.css';
import './ui/global.css'
import { Card } from './ui/dashboard/cards';

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-6">
        <div className={styles.headerMoper}>
          <h1 className='p-5 text-7xl'>
            MopEr 
          </h1>
          <h2 className='p-5 text-5xl'>
            Servicios de Ingeniería
          </h2>
        </div>
       <Card />
      </main>
    </>
  );
}
