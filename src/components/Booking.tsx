import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Home, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Booking() {
  const [location, setLocation] = useState<'salon' | 'home'>('salon');

  return (
    <section id="booking" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Reserva tu Cita
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Elige el servicio que deseas y reserva tu cita en minutos
          </motion.p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tipo de Servicio</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setLocation('salon')}
                  className={`flex-1 py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                    location === 'salon'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  En Salón
                </button>
                <button
                  onClick={() => setLocation('home')}
                  className={`flex-1 py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                    location === 'home'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  A Domicilio
                </button>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Servicio
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-700  dark:border-gray-600 dark:text-black dark:focus:ring-purple-400">
                  <option>Selecciona un servicio</option>
                  <option>Corte y Peinado</option>
                  <option>Coloración</option>
                  <option>Tratamiento Capilar</option>
                  <option>Peinado para Eventos</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Fecha
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border  border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-black dark:focus:ring-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Hora
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="time"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-black dark:focus:ring-purple-400"
                    />
                  </div>
                </div>
              </div>

              {location === 'home' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Dirección
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-purple-400"
                    rows={3}
                    placeholder="Ingresa tu dirección completa"
                  ></textarea>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 dark:hover:bg-purple-500"
              >
                <Scissors className="w-5 h-5" />
                Reservar Cita
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
