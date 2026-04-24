"use client";

import { useState } from 'react';
import { 
  Settings, 
  Bell, 
  Database, 
  Globe, 
  Lock, 
  Eye, 
  Palette,
  Save,
  CheckCircle2,
  AlertTriangle,
  Zap
} from 'lucide-react';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('General');
  const [isSaved, setIsSaved] = useState(false);

  const sections = [
    { id: 'General', icon: Settings },
    { id: 'Notifications', icon: Bell },
    { id: 'Database', icon: Database },
    { id: 'Security', icon: Lock },
    { id: 'Appearance', icon: Palette },
  ];

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-8 animate-[fadeUp_0.4s_ease]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-[32px] font-extralight text-[#1A120B]">Portal Settings</h1>
          <p className="text-[14px] text-[#9A806A] mt-1">Configure your administrative environment and system preferences.</p>
        </div>
        <button 
          onClick={handleSave}
          className="flex items-center justify-center gap-2 bg-[#BF5A2F] hover:bg-[#A34A22] text-white px-6 py-3 rounded-xl text-[13px] font-medium tracking-[0.05em] transition-all duration-300 shadow-lg"
        >
          {isSaved ? <CheckCircle2 size={18} /> : <Save size={18} />}
          {isSaved ? 'Changes Saved' : 'Save Changes'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm overflow-hidden">
            <nav className="p-2 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-medium transition-all ${
                    activeSection === section.id 
                      ? 'bg-[#1A120B] text-white shadow-md' 
                      : 'text-[#6B5040] hover:bg-[#FAF5EC]'
                  }`}
                >
                  <section.icon size={18} />
                  {section.id}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {activeSection === 'General' && (
             <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm p-8 space-y-8">
               <section>
                 <h3 className="text-[16px] font-medium text-[#1A120B] mb-4">Bakery Information</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#9A806A]">Store Name</label>
                     <input type="text" defaultValue="La Miche" className="w-full px-4 py-2.5 bg-[#FAF5EC] border border-[rgba(26,18,11,0.06)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F]" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#9A806A]">Support Email</label>
                     <input type="email" defaultValue="hello@lamiche.com" className="w-full px-4 py-2.5 bg-[#FAF5EC] border border-[rgba(26,18,11,0.06)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F]" />
                   </div>
                 </div>
               </section>

               <section>
                 <h3 className="text-[16px] font-medium text-[#1A120B] mb-4">Localization</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#9A806A]">Timezone</label>
                     <select className="w-full px-4 py-2.5 bg-[#FAF5EC] border border-[rgba(26,18,11,0.06)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F]">
                        <option>(GMT+05:30) India Standard Time</option>
                        <option>(GMT+00:00) London</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#9A806A]">Currency</label>
                     <select className="w-full px-4 py-2.5 bg-[#FAF5EC] border border-[rgba(26,18,11,0.06)] rounded-xl text-[14px] focus:outline-none focus:border-[#BF5A2F]">
                        <option>INR (₹)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                     </select>
                   </div>
                 </div>
               </section>
             </div>
          )}

          {activeSection === 'Database' && (
             <div className="space-y-6">
               <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm p-8">
                 <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                       <AlertTriangle size={24} />
                     </div>
                     <div>
                       <h3 className="text-[16px] font-medium text-[#1A120B]">Connection Status</h3>
                       <p className="text-[13px] text-red-500 font-medium">Cluster Limit Reached</p>
                     </div>
                   </div>
                   <button className="px-4 py-2 bg-[#1A120B] text-white text-[12px] font-medium rounded-lg hover:bg-black transition-all">
                     Reconnect
                   </button>
                 </div>

                 <div className="space-y-4">
                   <div className="p-4 bg-[#FAF5EC] rounded-xl border border-[rgba(26,18,11,0.06)]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[12px] font-medium text-[#6B5040]">Active Cluster</span>
                        <span className="text-[11px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">DISABLED</span>
                      </div>
                      <code className="text-[11px] text-[#9A806A] block truncate">
                        postgresql://bhageerathareddy:****@grey-hunter-23311...
                      </code>
                   </div>
                   <p className="text-[12px] text-[#9A806A] leading-relaxed">
                     Your CockroachDB cluster has reached its monthly Request Unit limit. System has automatically switched to 
                     <strong className="text-[#BF5A2F]"> Local Fallback Mode</strong> to ensure portal availability.
                   </p>
                 </div>
               </div>

               <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm p-8">
                  <h3 className="text-[16px] font-medium text-[#1A120B] mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="p-4 border border-[rgba(26,18,11,0.04)] rounded-xl">
                        <p className="text-[11px] text-[#9A806A] uppercase font-bold tracking-[0.1em]">Avg Query Time</p>
                        <p className="text-[20px] font-display text-[#1A120B] mt-1">14ms</p>
                     </div>
                     <div className="p-4 border border-[rgba(26,18,11,0.04)] rounded-xl">
                        <p className="text-[11px] text-[#9A806A] uppercase font-bold tracking-[0.1em]">Uptime</p>
                        <p className="text-[20px] font-display text-green-600 mt-1">99.9%</p>
                     </div>
                  </div>
               </div>
             </div>
          )}

          {activeSection === 'Notifications' && (
             <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm p-8 space-y-6">
               <h3 className="text-[16px] font-medium text-[#1A120B]">Email Notifications</h3>
               <div className="space-y-4">
                 {[
                   { label: 'New Order Alerts', desc: 'Get notified immediately when a customer places an order.', default: true },
                   { label: 'Inventory Warnings', desc: 'Alert when a product stock falls below 5 items.', default: true },
                   { label: 'System Updates', desc: 'Monthly reports and security patches info.', default: false },
                 ].map((pref) => (
                   <div key={pref.label} className="flex items-start justify-between p-4 hover:bg-[#FAF5EC]/30 rounded-xl transition-colors">
                      <div className="flex-1 pr-4">
                        <p className="text-[14px] font-medium text-[#1A120B]">{pref.label}</p>
                        <p className="text-[12px] text-[#9A806A] mt-0.5">{pref.desc}</p>
                      </div>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={pref.default} className="sr-only peer" />
                        <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#BF5A2F]"></div>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
          )}

          {activeSection === 'Appearance' && (
             <div className="bg-white rounded-2xl border border-[rgba(26,18,11,0.06)] shadow-sm p-8 space-y-6">
               <h3 className="text-[16px] font-medium text-[#1A120B]">Interface Theme</h3>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {[
                   { id: 'light', label: 'Artisan Light', color: 'bg-white border-[#BF5A2F]' },
                   { id: 'dark', label: 'Obsidian Night', color: 'bg-[#1A120B]' },
                   { id: 'glass', label: 'Soft Glass', color: 'bg-white/50 backdrop-blur-md' },
                 ].map((theme) => (
                   <button key={theme.id} className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 hover:scale-[1.02] ${theme.color}`}>
                      <div className="w-full aspect-video rounded-lg bg-[#FAF5EC] flex items-center justify-center">
                         <Eye size={20} className="text-[#9A806A]" />
                      </div>
                      <span className="text-[12px] font-medium text-[#6B5040]">{theme.label}</span>
                   </button>
                 ))}
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
