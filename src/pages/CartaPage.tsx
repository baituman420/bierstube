import React, { useState } from 'react';
import { ArrowLeft, Utensils, Sparkles } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: 'compartir' | 'salchichas' | 'especialidades' | 'cervezas';
  description: string;
  highlight?: string;
  image?: string;
}

const MENU_ITEMS: MenuItem[] = [
  // Para Compartir
  {
    id: 'surtido-bremen',
    name: 'SURTIDO BREMEN',
    category: 'compartir',
    description: '3 de nuestras salchichas, Bratwurst, Frankfurt y Alfred con chucrut y ensalada de patata.',
    highlight: 'Especialidad para compartir',
    image: './images/food/surtido-salchichas-chucrut.webp',
  },
  {
    id: 'schweinehaxe',
    name: 'SCHWEINEHAXE',
    category: 'compartir',
    description: 'Codillo asado de 650gr con chucrut y puré de patata.',
    highlight: 'Plato estrella de la casa',
    image: './images/food/schweinehaxe-codillo.webp',
  },
  {
    id: 'txori-coctel',
    name: 'TXORI-CÓCTEL',
    category: 'compartir',
    description: 'Cazuelita de mini txistorras.',
  },
  {
    id: 'kartoffeln-3-salsas',
    name: 'KARTOFFELN 3 SALSAS',
    category: 'compartir',
    description: 'Patatas caseras con tres salsas.',
  },
  {
    id: 'kaseplatte',
    name: 'KÄSEPLATTE',
    category: 'compartir',
    description: 'Tabla de 3 quesos: Comté, azul Stilton e Idiazabal.',
  },
  {
    id: 'raucherfischbrett',
    name: 'RÄUCHERFISCHBRETT',
    category: 'compartir',
    description: 'Salmón y bonito ahumado "KEIA".',
  },
  {
    id: 'maxmix-terramar',
    name: 'MAXMIX TERRAMAR',
    category: 'compartir',
    description: 'Ventresca de bonito, anchoas y pimientos del piquillo.',
  },

  // Nuestras Salchichas
  {
    id: 'saltxi-made-in-bilbao',
    name: 'SALTXI MADE IN BILBAO',
    category: 'salchichas',
    description: 'A escoger entre Frankfurt, Alfred o Bratwurst de la casa con berza y puré de patatas.',
    highlight: 'Elaboración artesanal',
  },
  {
    id: 'curry-wurst',
    name: 'CURRY WURST',
    category: 'salchichas',
    description: 'Salchicha de curry con patatas fritas.',
    highlight: 'Clásico de Berlín',
  },
  {
    id: 'la-de-coctel',
    name: 'LA DE CÓCTEL',
    category: 'salchichas',
    description: 'Seis saltxis blancas con beicon.',
  },
  {
    id: 'hot-dog-lua',
    name: 'HOT DOG LÙA',
    category: 'salchichas',
    description: 'Frankfurt delgada con berza y cebolla frita.',
  },
  {
    id: 'hot-dog-kala',
    name: 'HOT DOG KALA',
    category: 'salchichas',
    description: 'Frankfurt delgada con chilicarne, queso cheddar y patatas.',
  },

  // Otras Especialidades
  {
    id: 'fleischkase',
    name: 'FLEISCHKÄSE',
    category: 'especialidades',
    description: 'Pastel de carne con queso havarti, cebolla pochada y patatas fritas.',
    highlight: 'Tradición alemana',
    image: './images/food/embutidos-thate-artesanal.webp',
  },
  {
    id: 'blutwurst',
    name: 'BLUTWURST',
    category: 'especialidades',
    description: 'Morcilla con pimientos asados.',
    image: './images/food/blutwurst-morcilla-pimientos.webp',
  },
  {
    id: 'la-friki',
    name: 'LA FRIKI',
    category: 'especialidades',
    description: 'Frikadelle con ensalada de fiambre.',
  },
  {
    id: 'ensaladillas',
    name: 'FLEISCHSALAT O KARTOFFELSALAT',
    category: 'especialidades',
    description: 'Ensaladillas alemanas tradicionales.',
  },
  {
    id: 'kaiser-en-pan',
    name: 'KAISER EN PAN',
    category: 'especialidades',
    description: 'Sabroso bocata de codillo asado.',
  },

  // Cervezas Hofbräu München & Bodega
  {
    id: 'hb-original',
    name: 'HOFBRÄU ORIGINAL',
    category: 'cervezas',
    description: 'Lager rubia tradicional de Múnich, brillante, refrescante y con un perfecto balance de lúpulo noble.',
    highlight: 'De barril',
    image: './images/establishment/tirador-hb-bar.webp',
  },
  {
    id: 'hb-dunkel',
    name: 'HOFBRÄU DUNKEL',
    category: 'cervezas',
    description: 'Cerveza negra tradicional bávara de baja fermentación, con notas tostadas de malta y caramelo.',
    highlight: 'De barril',
  },
  {
    id: 'hb-helles-lager',
    name: 'HOFBRÄU HELLES LAGER',
    category: 'cervezas',
    description: 'Cerveza rubia dorada, suave y con un trago ligero y limpio.',
    image: './images/beer/nevera-cervezas.webp',
  },
  {
    id: 'st-bernardus',
    name: 'ST. BERNARDUS PRIOR 8',
    category: 'cervezas',
    description: 'Cerveza de abadía belga de alta fermentación con cuerpo pleno y matices complejos de malta.',
    highlight: 'Botella de bodega',
  },
];

interface CartaPageProps {
  onBackToHome: () => void;
}

export const CartaPage: React.FC<CartaPageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'compartir' | 'salchichas' | 'especialidades' | 'cervezas'>('todos');

  const filteredItems = activeTab === 'todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-transparent text-white pt-24 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-grotesk font-bold tracking-widest uppercase text-[#f4be58] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>VOLVER A INICIO</span>
          </button>
        </div>

        {/* Header Title */}
        <div className="border-b border-white/15 pb-10 mb-12">
          <div className="inline-flex items-center space-x-2 text-[#f4be58] font-grotesk text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
            <Utensils className="w-4 h-4" />
            <span>BIERSTUBE BY H. THATE • LICENCIADO POZA 50</span>
          </div>
          <h1 className="font-grotesk font-black text-5xl sm:text-6xl md:text-7xl uppercase text-white leading-tight tracking-tight">
            Nuestra <span className="text-[#f4be58]">Carta</span>
          </h1>
          <p className="font-sans text-white/80 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Platos para compartir, salchichas artesanas de receta propia y especialidades alemanas recién salidas de cocina.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          <button
            onClick={() => setActiveTab('todos')}
            className={`px-5 py-2.5 rounded-xl font-grotesk text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'todos'
                ? 'bg-[#f4be58] text-[#051945] shadow-lg'
                : 'bg-[#082260]/80 text-white/80 hover:text-white hover:bg-[#0d3da3]/80 border border-white/10'
            }`}
          >
            TODOS ({MENU_ITEMS.length})
          </button>

          <button
            onClick={() => setActiveTab('compartir')}
            className={`px-5 py-2.5 rounded-xl font-grotesk text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'compartir'
                ? 'bg-[#f4be58] text-[#051945] shadow-lg'
                : 'bg-[#082260]/80 text-white/80 hover:text-white hover:bg-[#0d3da3]/80 border border-white/10'
            }`}
          >
            PARA COMPARTIR
          </button>

          <button
            onClick={() => setActiveTab('salchichas')}
            className={`px-5 py-2.5 rounded-xl font-grotesk text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'salchichas'
                ? 'bg-[#f4be58] text-[#051945] shadow-lg'
                : 'bg-[#082260]/80 text-white/80 hover:text-white hover:bg-[#0d3da3]/80 border border-white/10'
            }`}
          >
            NUESTRAS SALCHICHAS
          </button>

          <button
            onClick={() => setActiveTab('especialidades')}
            className={`px-5 py-2.5 rounded-xl font-grotesk text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'especialidades'
                ? 'bg-[#f4be58] text-[#051945] shadow-lg'
                : 'bg-[#082260]/80 text-white/80 hover:text-white hover:bg-[#0d3da3]/80 border border-white/10'
            }`}
          >
            OTRAS ESPECIALIDADES
          </button>

          <button
            onClick={() => setActiveTab('cervezas')}
            className={`px-5 py-2.5 rounded-xl font-grotesk text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'cervezas'
                ? 'bg-[#f4be58] text-[#051945] shadow-lg'
                : 'bg-[#082260]/80 text-white/80 hover:text-white hover:bg-[#0d3da3]/80 border border-white/10'
            }`}
          >
            CERVEZAS HB & BODEGA
          </button>
        </div>

        {/* Menu Items Grid: Asymmetric and High Visual Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-[#082260]/75 backdrop-blur-md rounded-3xl border border-white/15 shadow-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#f4be58]/50 transition-colors ${
                item.image ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header row with category & highlight */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-grotesk text-[11px] font-bold tracking-[0.2em] text-[#f4be58] uppercase">
                    {item.category === 'compartir' && 'Para Compartir'}
                    {item.category === 'salchichas' && 'Salchicha Artesana'}
                    {item.category === 'especialidades' && 'Especialidad'}
                    {item.category === 'cervezas' && 'Cerveza Bávara'}
                  </span>
                  {item.highlight && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-grotesk font-extrabold uppercase bg-white/10 text-white/90 px-2.5 py-1 rounded-full border border-white/15">
                      <Sparkles className="w-3 h-3 text-[#f4be58]" />
                      <span>{item.highlight}</span>
                    </span>
                  )}
                </div>

                {/* Dish Title */}
                <h3 className="font-grotesk font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Optional Authentic Dish Photo */}
              {item.image && (
                <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA to Return or Contact */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center space-x-3 text-sm font-grotesk font-bold tracking-widest uppercase text-[#f4be58] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5" />
            <span>VOLVER A LA PORTADA</span>
          </button>

          <a
            href="https://www.instagram.com/bierstube_bilbao/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brush-yellow inline-flex items-center space-x-2 px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-extrabold text-[#051945]"
          >
            <span>CONSULTAR EN INSTAGRAM</span>
          </a>
        </div>

      </div>
    </div>
  );
};
