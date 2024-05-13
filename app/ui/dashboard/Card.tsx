import Link from 'next/link';
import Image from 'next/image';
import '../styles/Card.css'



interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkedin: string;
  instagram: string
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, linkedin, instagram }) => {
  return (
    <div className="card">
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <div className='p-5'>
        <h3>{title}</h3>
        <p>{description}</p>       
      </div>
      <div className='p-5'>
        <Link href={linkedin} passHref className='links-profiles mx-5'>
          <i className="fa-linkedin-in">linkedin</i>
        </Link>
        <Link href={instagram} passHref className='links-profiles'>
          <i className="fa-brands fa-instagram">Instagram</i>
        </Link>
      </div>
    </div>
  );
};

export default Card;