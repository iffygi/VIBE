export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  accent: string;
  image: string;
  ingredients: string[];
  nutrition: {
    calories: number;
    sugar: number;
    caffeine: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'original',
    name: 'VIBE Original',
    tagline: 'The One and Only.',
    description: 'A complex blend of 23 secret flavors that hits different. Bold, fizzy, and unapologetically unique.',
    color: '#4a0404',
    accent: '#00ff41',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Carbonated Water', 'High Fructose Corn Syrup', 'Caramel Color', 'Phosphoric Acid', 'Natural and Artificial Flavors', 'Sodium Benzoate', 'Caffeine'],
    nutrition: {
      calories: 150,
      sugar: 40,
      caffeine: '41mg'
    }
  },
  {
    id: 'electric-lime',
    name: 'VIBE Electric',
    tagline: 'Shock Your Senses.',
    description: 'A citrus explosion with a neon kick. Perfect for late-night gaming sessions or high-intensity vibes.',
    color: '#004a04',
    accent: '#00f2ff',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Carbonated Water', 'Citric Acid', 'Natural Lime Flavor', 'Potassium Citrate', 'Aspartame', 'Acesulfame Potassium', 'Caffeine'],
    nutrition: {
      calories: 0,
      sugar: 0,
      caffeine: '35mg'
    }
  },
  {
    id: 'cherry-rebel',
    name: 'Cherry Rebel',
    tagline: 'Sweet. Tart. Wild.',
    description: 'A deep cherry infusion that breaks all the rules. Smooth finish with a rebellious aftertaste.',
    color: '#8b0000',
    accent: '#ff00ea',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Carbonated Water', 'Sugar', 'Cherry Juice Concentrate', 'Malic Acid', 'Natural Flavors', 'Red 40', 'Caffeine'],
    nutrition: {
      calories: 160,
      sugar: 42,
      caffeine: '38mg'
    }
  }
];
