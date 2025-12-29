import { Utensils, Coffee, Cake } from 'lucide-react';
import latteImage from '../Photos/Latte.jpg';
import salepImage from '../Photos/salep.jpg';
import cheesecakeImage from '../Photos/Cheesecake.jpg';

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  image?: string;
  popular?: boolean;
}

export interface MenuCategoryData {
  id: string;
  title: string;
  icon: React.ElementType;
  items: MenuItem[];
}

export const allCategories: MenuCategoryData[] = [
  {
    id: 'bowls',
    title: 'Bowls & Yemekler',
    icon: Utensils,
    items: [
      { 
        name: 'Köfte Bowl', 
        description: 'Ev yapımı ızgara köfte, basmati pilav, mevsim yeşillikleri, turşu, domates ve özel yoğurt sos.', 
        price: '340 ₺',
        popular: true,
        image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1760&auto=format&fit=crop'
      },
      { 
        name: 'Tavuklu Bowl', 
        description: 'Baharatlı ızgara tavuk dilimleri, taze salata, mısır, meksika fasulyesi ve yoğurt sos eşliğinde.', 
        price: '320 ₺',
        popular: true,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1760&auto=format&fit=crop'
      },
      { name: 'Falafel Bowl', description: 'Çıtır falafel topları, humus, tahin sos ve Akdeniz yeşillikleri.', price: '300 ₺' },
      { name: 'FitCheck Bowl', description: 'Sporculara özel yüksek proteinli, düşük karbonhidratlı, avokadolu özel karışım.', price: '360 ₺' },
    ]
  },
  {
    id: 'coffees',
    title: 'Kahveler',
    icon: Coffee,
    items: [
      { 
        name: 'Latte', 
        description: 'Espresso ve buharda ısıtılmış ipeksi süt. Brezilya çekirdeklerinden.', 
        price: '110 ₺',
        popular: true,
        image: latteImage
      },
      { 
        name: 'V60 Pour Over', 
        description: 'Özel nitelikli çekirdeklerden el demlemesi filtre kahve. Meyvemsi notalar.', 
        price: '140 ₺' 
      },
      { 
        name: 'Salep', 
        description: 'Tarçın serpilmiş, kış aylarının vazgeçilmezi gerçek süt ile hazırlanan geleneksel lezzet.', 
        price: '130 ₺',
        popular: true,
        image: salepImage
      },
      { name: 'Flat White', description: 'İnce mikro köpük süt ile double shot espresso.', price: '120 ₺' },
      { name: 'Cold Brew', description: '24 saat soğuk demlenmiş, asiditesi düşük, yumuşak içim.', price: '130 ₺' },
      { name: 'Iced Americano', description: 'Buz ve su üzerine double espresso.', price: '100 ₺' },
    ]
  },
  {
    id: 'desserts',
    title: 'Tatlılar',
    icon: Cake,
    items: [
      { 
        name: 'San Sebastian', 
        description: 'Akışkan iç dokusuyla imza tatlımız. Yanında Belçika çikolatası ile.', 
        price: '220 ₺',
        popular: true,
        image: cheesecakeImage
      },
      { name: 'Belçika Çikolatalı Brownie', description: 'Yoğun çikolata, ceviz parçaları ve dondurma ile.', price: '180 ₺' },
      { name: 'Lotus Cheesecake', description: 'Karamelize bisküvi tabanı ve kreması.', price: '200 ₺', image: cheesecakeImage },
      { name: 'Havuçlu Tarçınlı Kek', description: 'Taze havuç, ceviz ve özel krema dolgusu.', price: '160 ₺' },
    ]
  }
];

