import styles from './ui/styles/home.module.css';
import './ui/global.css'
import Card  from './ui/dashboard/Card';
import Projects from './ui/dashboard/Projects';

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-6">
        <section className={styles.headerMoper}>
          <h1 className='p-5 text-7xl'>
            MopEr 
          </h1>
          <h2 className='p-5 text-5xl'>
            Servicios de Ingeniería
          </h2>
        </section>
        <section className={styles.headerMoper}>
          <h1 className='flex justify-center items-center text-white title-team p-5'>
            Nuestro Equipo
          </h1>
          <div className='flex justify-center items-center flex-wrap p-5'>
            <Card 
              imageUrl="/assets/matias-palacios.png"
              title="Matias Omar Palacios"
              description="Ingeniero Mecánico"
              linkedin='https://www.linkedin.com/in/matiasomarpalacios-ingeniero-mecanico/'
              instagram='https://www.instagram.com/moprc/'
            />
            <Card 
              imageUrl="/assets/bernardo-frattini.png"
              title=" Bernardo Frattini"
              description="Ingeniero Mecánico"
              linkedin='https://www.linkedin.com/in/matiasomarpalacios-ingeniero-mecanico/'
              instagram='https://www.instagram.com/moprc/'
            />
          </div>
        </section>
        <section>
          <Projects title={''} description={''} />
        </section>
      </main>
    </>
  );
}
