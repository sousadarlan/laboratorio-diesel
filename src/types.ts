export type ProductCategory =
  | 'Bicos Injetores'
  | 'Bombas de Alta Pressão'
  | 'Bombas Injetoras'
  | 'Turbinas'
  | 'Tubo Rail'
  | 'Válvulas e Reguladores'
  | 'Sensores e Componentes';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  code: string;
  oemCode: string;
  brand: 'Bosch' | 'Denso' | 'Delphi' | 'Continental' | 'Siemens VDO' | 'Cummins' | 'Caterpillar' | 'Garrett' | 'BorgWarner' | 'Holset' | 'Original';
  vehicleApplication: string;
  compatibleVehicles: string[];
  inStock: boolean;
  stockCount?: number;
  condition: 'Novo' | 'Reman' | 'Novo Original' | 'Recondicionado com Laudo' | 'Garantia de Laboratório';
  warranty: string;
  price?: number;
  priceOnRequest: boolean;
  shortDesc: string;
  description: string;
  technicalSpecs: {
    systemType: string;
    pressure?: string;
    cylinders?: string;
    voltage?: string;
    plugType?: string;
    nozzleType?: string;
    calibrationStd?: string;
  };
  images: string[];
  featured: boolean;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  benefits: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  equipmentUsed: string[];
  symptomsAddressed: string[];
  turnaroundTime: string;
  warranty: string;
  image: string;
}

export interface DieselSymptom {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  probableCauses: string[];
  affectedComponents: string[];
  urgency: 'Alta' | 'Média' | 'Crítica';
  consequences: string;
  recommendedLaboratoryAction: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  serviceRealized: string;
  date: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  vehicleModel?: string;
}

export type ActivePage =
  | 'home'
  | 'products'
  | 'product-detail'
  | 'services'
  | 'service-detail'
  | 'for-workshops'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'diagnostic-tool';
