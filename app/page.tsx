import HeroCEMBotics from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-deep-blue text-white scroll-smooth overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section Split Layout */}
      <HeroCEMBotics />
      
      {/* Nos Piliers (Bento Grid Focus) */}
      <section id="piliers" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-bright-orange font-bold tracking-widest uppercase text-sm border border-bright-orange/30 px-4 py-2 rounded-full inline-block mb-2">Notre Méthode</span>
          <h2 className="text-4xl md:text-5xl font-black">Nos Piliers d'Intervention</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Une approche globale et modulaire pour démocratiser efficacement la robotique de pointe au Togo.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilier 1 : Hub */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden min-h-[450px] flex flex-col justify-end p-8 shadow-2xl hover:border-bright-orange/50 transition-all cursor-pointer">
            <Image src="/images/ateliers/vue_ensemble.png" alt="CEM LNTA" fill className="object-cover mix-blend-luminosity opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/95 via-deep-blue/60 to-transparent z-10" />
            <div className="relative z-20 space-y-4 transform group-hover:-translate-y-2 transition-transform duration-500">
              <span className="px-4 py-2 bg-bright-orange text-deep-blue rounded-full text-xs font-black uppercase tracking-wider">Le Hub Local</span>
              <h3 className="text-3xl font-black text-white mt-4">CEM @LNTA</h3>
              <p className="text-gray-300 font-light leading-relaxed">Le centre permanent ouvert à tous les jeunes d'Adjidogomé pour concevoir, coder et expérimenter l'électronique de A à Z.</p>
            </div>
          </div>

          {/* Pilier 2 : Orphelinats */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden min-h-[450px] flex flex-col justify-end p-8 shadow-2xl hover:border-blue-500/50 transition-all cursor-pointer">
            <Image src="/images/ateliers/groupe_orphelinat.png" alt="CEM Orphelinats" fill className="object-cover mix-blend-luminosity opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/95 via-deep-blue/60 to-transparent z-10" />
            <div className="relative z-20 space-y-4 transform group-hover:-translate-y-2 transition-transform duration-500">
              <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-xs font-black uppercase tracking-wider">L'Action Mobile</span>
              <h3 className="text-3xl font-black text-white mt-4">CEM @Orphelinats</h3>
              <p className="text-gray-300 font-light leading-relaxed">Des mallettes-ateliers déplacées au cœur des structures humanitaires à travers le pays pour ne laisser aucune idée derrière.</p>
            </div>
          </div>

          {/* Pilier 3 : Kits Maison */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden min-h-[450px] flex flex-col justify-end p-8 shadow-2xl hover:border-yellow-400/50 transition-all cursor-pointer">
            <Image src="/images/ateliers/garcon_robot.png" alt="CEM Home" fill className="object-cover mix-blend-luminosity opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/95 via-deep-blue/60 to-transparent z-10" />
            <div className="relative z-20 space-y-4 transform group-hover:-translate-y-2 transition-transform duration-500">
              <span className="px-4 py-2 bg-yellow-400 text-deep-blue rounded-full text-xs font-black uppercase tracking-wider">Le Kit Complet</span>
              <h3 className="text-3xl font-black text-white mt-4">CEM @Home</h3>
              <p className="text-gray-300 font-light leading-relaxed">Le kit complet à 30 000 FCFA (carte Arduino, composants, carton, ciseaux...) pour s'exercer et bâtir son propre robot autonome directement chez soi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau d'Impact 2026 */}
      <section id="impact" className="py-20 bg-bright-orange text-deep-blue relative overflow-hidden border-t border-b border-orange-600">
        {/* Motif d'ingénierie simple */}
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          <div className="space-y-3">
            <h4 className="text-7xl font-black tracking-tighter">2026</h4>
            <p className="text-xl font-bold uppercase tracking-widest opacity-80">Horizon d'Impact</p>
          </div>
          <div className="space-y-3 md:border-l border-r border-deep-blue/20">
            <h4 className="text-7xl font-black tracking-tighter">500+</h4>
            <p className="text-xl font-bold uppercase tracking-widest opacity-80">Enfants Initiés</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-7xl font-black tracking-tighter">50+</h4>
            <p className="text-xl font-bold uppercase tracking-widest opacity-80">Kits Arduino Distribués</p>
          </div>
        </div>
      </section>

      {/* Partenaires (Grayscale to Color) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest">Ils soutiennent notre vision commune</h2>
         </div>
         <div className="flex flex-wrap justify-between items-center gap-12">
             <div className="text-3xl font-black tracking-widest opacity-30 grayscale hover:grayscale-0 hover:opacity-100 hover:text-bright-orange transition-all duration-300 cursor-pointer">PARTNER 1</div>
             <div className="text-3xl font-black tracking-widest opacity-30 grayscale hover:grayscale-0 hover:opacity-100 hover:text-blue-500 transition-all duration-300 cursor-pointer">ONG TECH</div>
             <div className="text-3xl font-black tracking-widest opacity-30 grayscale hover:grayscale-0 hover:opacity-100 hover:text-green-500 transition-all duration-300 cursor-pointer">MAIRIE LOMÉ</div>
             <div className="text-3xl font-black tracking-widest opacity-30 grayscale hover:grayscale-0 hover:opacity-100 hover:text-purple-500 transition-all duration-300 cursor-pointer">FONDATION</div>
         </div>
      </section>

      {/* Formulaire & Appel au Don (Contact) */}
      <section id="don" className="py-32 px-6 bg-gradient-to-t from-[#0a121d] to-deep-blue text-white flex flex-col justify-center relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          <div className="space-y-8 lg:col-span-2">
             <span className="text-bright-orange font-bold tracking-widest uppercase text-sm border border-bright-orange/30 px-4 py-2 rounded-full mb-2">Agir</span>
             <h2 className="text-4xl md:text-5xl font-black">Devenez Donateur ou Formateur</h2>
             <p className="text-xl text-gray-300 font-light leading-relaxed">
                Le changement débute maintenant. Nous avons besoin de fonds pour fournir directement le matériel électronique (Capteurs, Breadboards, Arduino). Remplissez le formulaire et rejoignez le mouvement Maker Togolais !
             </p>
             
             {/* Contact Info */}
             <div className="pt-8 space-y-6 border-t border-white/10">
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-bright-orange text-2xl shadow-xl">📞</div>
                   <div>
                     <span className="block font-bold text-xl">+228 70 04 21 36</span>
                     <span className="text-sm font-light text-gray-400">Ligne directe, WhatsApp</span>
                   </div>
                </div>
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-bright-orange text-2xl shadow-xl">📍</div>
                   <div>
                     <span className="block font-bold text-xl">Maison de Quartier LNTA</span>
                     <span className="text-sm font-light text-gray-400">Adjidogomé, Lomé - Togo</span>
                   </div>
                </div>
             </div>
          </div>

          <form className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-12 rounded-[2.5rem] shadow-2xl lg:col-span-3">
             <h3 className="text-3xl font-bold mb-8">Proposition de Soutien</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div>
                 <label className="block text-sm font-medium text-gray-400 mb-2">Nom / Organisation *</label>
                 <input type="text" required className="w-full bg-deep-blue/70 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-bright-orange transition-colors" placeholder="Ex: Jean Dupont" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                 <input type="email" required className="w-full bg-deep-blue/70 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-bright-orange transition-colors" placeholder="contact@example.com" />
               </div>
             </div>

             <div className="mb-6">
               <label className="block text-sm font-medium text-gray-400 mb-2">N° Téléphone / WhatsApp</label>
               <input type="tel" className="w-full bg-deep-blue/70 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-bright-orange transition-colors" placeholder="+33 6 00 00 00 00" />
             </div>

             <div className="mb-8">
               <label className="block text-sm font-medium text-gray-400 mb-2">Type d'engagement</label>
               <select className="w-full bg-deep-blue/70 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-bright-orange appearance-none transition-colors">
                 <option>Dons matériels (Kits Arduino, PCs)</option>
                 <option>Parrainer un Kit Complet (30 000 FCFA)</option>
                 <option>Dons Pack Accessoires (5 000 FCFA)</option>
                 <option>Je souhaite devenir Mentor/Formateur</option>
                 <option>Sponsoring d'entreprise</option>
               </select>
             </div>
             
             <button type="submit" className="w-full py-5 bg-bright-orange text-deep-blue text-lg font-black rounded-2xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,140,0,0.3)]">
                Envoyer ma volonté de don
             </button>
             <p className="text-center text-xs text-gray-500 mt-4">Nous vous recontacterons sous 24h ouvrées.</p>
          </form>
          
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-[#0a121d]">
        <p>&copy; {new Date().getFullYear()} CEMBotics Togo (LNTA Adjidogomé). Initiative communautaire Pédagogique.</p>
      </footer>
    </div>
  );
}
