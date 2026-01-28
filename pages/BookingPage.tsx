
import React, { useState } from 'react';
import { 
  SERVICES, 
  CAR_BRANDS, 
  CAR_MODELS 
} from '../constants';
import { 
  CheckCircle2, 
  Calendar as CalendarIcon, 
  User, 
  Phone, 
  Car, 
  Tool, 
  Clock, 
  AlertCircle,
  X,
  ChevronRight
} from 'lucide-react';

const BookingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    brand: '',
    model: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    notes: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.brand) newErrors.brand = 'Required';
    if (!formData.model) newErrors.model = 'Required';
    if (!formData.date) newErrors.date = 'Required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowSuccess(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const selectedService = SERVICES.find(s => s.id === formData.service);

  return (
    <div className="min-h-screen bg-zinc-950 py-24 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-black italic tracking-tighter">BOOK AN APPOINTMENT</h1>
          <p className="text-zinc-400">Reserve your spot at Car Kings BTM Layout. No payment required upfront.</p>
        </div>

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 block">Select Service</label>
                <div className="relative">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full bg-zinc-800 border ${errors.service ? 'border-red-500' : 'border-zinc-700'} rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all`}
                  >
                    <option value="">-- Choose a Service --</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                    <ChevronRight className="rotate-90" />
                  </div>
                </div>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Car Brand */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 block">Car Brand</label>
                <select 
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className={`w-full bg-zinc-800 border ${errors.brand ? 'border-red-500' : 'border-zinc-700'} rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                >
                  <option value="">-- Select Brand --</option>
                  {CAR_BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand}</p>}
              </div>

              {/* Car Model */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 block">Car Model</label>
                <input 
                  type="text"
                  name="model"
                  placeholder="e.g. Fortuner GR Sport"
                  value={formData.model}
                  onChange={handleInputChange}
                  className={`w-full bg-zinc-800 border ${errors.model ? 'border-red-500' : 'border-zinc-700'} rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                />
                {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model}</p>}
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 block">Preferred Date</label>
                <input 
                  type="date"
                  name="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={handleInputChange}
                  className={`w-full bg-zinc-800 border ${errors.date ? 'border-red-500' : 'border-zinc-700'} rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                  <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-zinc-800 border ${errors.name ? 'border-red-500' : 'border-zinc-700'} rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                  <input 
                    type="tel"
                    name="phone"
                    placeholder="10-digit Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full bg-zinc-800 border ${errors.phone ? 'border-red-500' : 'border-zinc-700'} rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-500 block">Additional Notes</label>
              <textarea 
                name="notes"
                rows={3}
                placeholder="Mention any specific requirements..."
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-orange-500 text-zinc-950 font-black text-xl py-5 rounded-2xl hover:bg-orange-600 transition-all transform active:scale-[0.98] shadow-xl shadow-orange-500/20"
            >
              CONFIRM APPOINTMENT
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-zinc-900 border border-zinc-800 max-w-lg w-full rounded-3xl p-8 shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white"
            >
              <X />
            </button>

            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full mb-4">
                <CheckCircle2 size={48} />
              </div>
              
              <h2 className="text-3xl font-heading font-black italic">BOOKING SUCCESS!</h2>
              
              <div className="bg-zinc-800/50 rounded-2xl p-6 text-left space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 uppercase tracking-widest font-bold">Ref No:</span>
                  <span className="text-orange-500 font-black">#CK-{Math.floor(Math.random() * 90000) + 10000}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Service:</span>
                  <span className="text-white font-bold">{selectedService?.title || 'Custom Service'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Vehicle:</span>
                  <span className="text-white font-bold">{formData.brand} {formData.model}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Date:</span>
                  <span className="text-white font-bold">{formData.date}</span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Thank you for choosing Car Kings! Our team will call you within 2 hours to finalize the time and logistics.
              </p>

              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-zinc-100 text-zinc-950 font-bold py-4 rounded-xl hover:bg-white transition-colors"
                >
                  DISMISS
                </button>
                <a 
                  href="https://wa.me/919876543210" 
                  className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>CONTACT ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
