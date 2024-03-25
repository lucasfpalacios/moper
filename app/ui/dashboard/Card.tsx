import Link from 'next/link';
import Image from 'next/image';
import '../styles/Card.css'



interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, link }) => {
  return (
    <div className="card">
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <div className='p-5'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
{/*       <Link href={link} passHref>
      </Link> */}
    </div>
  );
};

export default Card;