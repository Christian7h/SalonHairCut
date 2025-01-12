import { Facebook, Instagram, Twitter, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold">Beauty Salon</span>
            </div>
            <p className="text-gray-400">
              Tu destino de belleza y cuidado personal, donde la excelencia se encuentra con el estilo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-500 transition-colors">Corte y Peinado</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Coloración</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Tratamientos</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Peinados de Eventos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-purple-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#services" className="hover:text-purple-500 transition-colors">Servicios</a></li>
              <li><a href="#gallery" className="hover:text-purple-500 transition-colors">Galería</a></li>
              <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Beauty Salon. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}