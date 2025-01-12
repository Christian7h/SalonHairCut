import React from 'react';
import { Scissors, Palette, Sparkles, Clock } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    name: 'Corte y Peinado',
    price: 35,
    duration: 60,
    description: 'Corte personalizado y peinado profesional adaptado a tu estilo.',
    category: 'hair'
  },
  {
    id: 2,
    name: 'Coloración Completa',
    price: 75,
    duration: 120,
    description: 'Coloración profesional con productos de alta calidad.',
    category: 'color'
  },
  {
    id: 3,
    name: 'Tratamiento Capilar',
    price: 45,
    duration: 45,
    description: 'Tratamiento nutritivo para revitalizar tu cabello.',
    category: 'treatment'
  },
  {
    id: 4,
    name: 'Peinado para Eventos',
    price: 60,
    duration: 90,
    description: 'Peinados especiales para bodas, graduaciones y eventos.',
    category: 'styling'
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  const icons = {
    hair: Scissors,
    color: Palette,
    treatment: Sparkles,
    styling: Clock
  };
  const Icon = icons[service.category];

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg dark:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-8 w-8 text-purple-600 dark:text-purple-500" />
        <span className="text-2xl font-bold text-purple-600 dark:text-purple-500">${service.price}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <Clock className="h-4 w-4 mr-1" />
        <span>{service.duration} minutos</span>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Ofrecemos una amplia gama de servicios profesionales tanto en salón como a domicilio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
