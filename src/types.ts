export type CategoryType = 'all' | 'seasonal' | 'anniversary' | 'propose';

export interface Product {
  id: string;
  category: 'seasonal' | 'anniversary' | 'propose';
  badge: string;
  name: string;
  subtitle: string;
  priceSmall: number;
  priceMedium: number;
  priceGrand: number;
  imageUrl: string;
  description: string;
  flowers: string[];
  careTips: string[];
}

export interface Masterclass {
  id: string;
  level: 'Beginner' | 'Intermediate' | 'Special';
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  iconName: string;
  description: string;
  curriculum: string[];
  included: string[];
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  item: string;
  rating: number;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MessageOption {
  target: '연인' | '부모님' | '친구' | '동료/은사';
  occasion: '축하' | '감사' | '위로' | '기념일/프로포즈';
  tone: '다정한' | '정중한' | '시적인' | '진솔한';
}

export interface ReservationState {
  type: 'product' | 'class';
  selectedItemName: string;
  size: 'Small' | 'Medium' | 'Grand';
  pickupDate: string;
  pickupTime: string;
  orderType: 'pickup' | 'delivery';
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  cardMessage: string;
  specialNotes: string;
}
