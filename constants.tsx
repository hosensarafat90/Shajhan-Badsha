
import { Product, Partner, Project, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'BSRM Extreme 500W',
    category: 'Rod',
    brand: 'BSRM',
    description: 'বিএসআরএম এক্সট্রিম ৫০০ডব্লিউ একটি উচ্চ মানের রিইনফোর্সমেন্ট স্টিল যা এর চমৎকার নমনীয়তা এবং উচ্চ শক্তির জন্য পরিচিত। এটি জারা প্রতিরোধে অতুলনীয়।',
    image: 'https://images.unsplash.com/photo-1610448721566-473f93308550?q=80&w=1200&auto=format&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1610448721566-473f93308550?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ],
    reviews: [
      { id: 'r1', userName: 'আব্দুর রহিম', rating: 5, comment: 'খুবই উন্নত মানের রড। ওজনে একদম সঠিক ছিল।', date: '২০২৪-০৩-১০' }
    ]
  },
  {
    id: 'p2',
    name: 'Shah Cement Special',
    category: 'Cement',
    brand: 'Shah Cement',
    description: 'শাহ সিমেন্ট স্পেশাল দেশের অন্যতম সেরা মানের পোর্টল্যান্ড কম্পোজিট সিমেন্ট। এটি দ্রুত সেট হয় এবং দীর্ঘস্থায়ী মজবুত কাঠামো প্রদান করে।',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7e2c?q=80&w=1200&auto=format&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7e2c?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'p3',
    name: 'AKS TMT 500W',
    category: 'Rod',
    brand: 'AKS',
    description: 'একেএস টিএমটি রড এর চমৎকার বন্ডিং এবং ভূমিকম্প সহনশীলতার জন্য পরিচিত। আধুনিক স্থাপনায় এটি একটি আস্থার নাম।',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'p4',
    name: 'Bashundhara Cement',
    category: 'Cement',
    brand: 'Bashundhara',
    description: 'বসুন্ধরা সিমেন্ট ভিআরএম প্রযুক্তিতে তৈরি, যা আপনার বাড়ির ছাদ এবং পিলারকে দেয় পাথরের মতো শক্ত গাঁথুনি।',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'ইঞ্জিনিয়ার মশিউর রহমান',
    role: 'সিভিল ইঞ্জিনিয়ার, খুলনা',
    content: 'আমি গত ৫ বছর ধরে শাহজাহান এন্টারপ্রাইজ থেকে রড ও সিমেন্ট নিচ্ছি। তাদের পণ্যের মান এবং সঠিক ওজনের ব্যাপারে আমি শতভাগ নিশ্চিত।',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'মোঃ জসিম উদ্দিন',
    role: 'ঠিকাদার, রূপসা',
    content: 'ডেলিভারি সার্ভিস খুব ফাস্ট। বড় প্রজেক্টের জন্য তাদের উপর ভরসা করা যায়। দামও বাজারের তুলনায় বেশ ভালো।',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop'
  }
];

export const PRICE_UPDATES = [
  { name: 'BSRM Rod', price: '৯৫,৫০০', change: '+৫০০', trend: 'up' },
  { name: 'AKS Rod', price: '৯৩,০০০', change: '-২০০', trend: 'down' },
  { name: 'Shah Cement', price: '৫৪০', change: '+১০', trend: 'up' },
  { name: 'Bashundhara Cement', price: '৫৩০', change: '০', trend: 'neutral' }
];

export const PARTNERS: Partner[] = [
  { id: 'bp1', name: 'BSRM' },
  { id: 'bp2', name: 'AKS' },
  { id: 'bp3', name: 'Shah Cement' },
  { id: 'bp4', name: 'Bashundhara Cement' }
];

export const PROJECTS: Project[] = [
  {
    id: 'pr1',
    title: 'খুলনা সিটি কমার্শিয়াল টাওয়ার',
    location: 'শিববাড়ি মোড়, খুলনা',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    materials: ['BSRM রড', 'শাহ সিমেন্ট'],
    status: 'সম্পন্ন'
  },
  {
    id: 'pr2',
    title: 'রূপসা মাল্টি-পারপাস ওয়্যারহাউজ',
    location: 'রূপসা ঘাট রোড, খুলনা',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    materials: ['AKS রড', 'বসুন্ধরা সিমেন্ট'],
    status: 'চলমান'
  },
  {
    id: 'pr3',
    title: 'কয়রা রিভারসাইড ইমব্যাঙ্কমেন্ট',
    location: 'কয়রা, খুলনা',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1200&auto=format&fit=crop',
    materials: ['BSRM রড', 'সেভেন রিংস সিমেন্ট'],
    status: 'সম্পন্ন'
  }
];

export const CONTACT_INFO = {
  owner: 'Shajahan Badsha',
  address: 'কয় বাজার, খুলনা',
  phone: '+8801700000000',
  whatsapp: '+8801700000000'
};
