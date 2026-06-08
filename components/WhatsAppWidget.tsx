import Image from 'next/image';
import './WhatsAppWidget.css';

export function WhatsAppWidget() {
  return (
    <a 
      href="https://wa.me/919592406555" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-widget"
      aria-label="Chat with us on WhatsApp"
    >
      <Image src="/whatsapp.svg" alt="WhatsApp" width={60} height={60} />
    </a>
  );
}
