import React from 'react';
import type { Stylist } from '../types';

const stylists: Stylist[] = [
  {
    id: 1,
    name: 'María González',
    role: 'Estilista Senior',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialties: ['Cortes', 'Coloración', 'Peinados de Novia']
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Colorista Experto',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialties: ['Mechas', 'Balayage', 'Coloración Creativa']
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Especialista en Tratamientos',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialties: ['Tratamientos Capilares', 'Hidratación', 'Queratina']
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Profesionales apasionados por la belleza y el cuidado del cabello
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map(stylist => (
            <div key={stylist.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                className="w-full h-80 object-cover"
                src={stylist.image}
                alt={stylist.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{stylist.name}</h3>
                <p className="text-purple-600 dark:text-purple-300 mb-4">{stylist.role}</p>
                <div className="flex flex-wrap gap-2">
                  {stylist.specialties.map(specialty => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-white rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
