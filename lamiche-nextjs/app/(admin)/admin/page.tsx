import { PRODUCTS } from '@/app/lib/data';

export default function AdminDashboard() {
  const allProducts = PRODUCTS;
  const stats = [
    { label: 'Total Revenue', value: '₹1,24,500', trend: '+12.5%' },
    { label: 'Total Orders', value: '1,284', trend: '+8.2%' },
    { label: 'Active Products', value: allProducts.length.toString(), trend: '0%' },
    { label: 'New Customers', value: '142', trend: '+24%' },
  ];

  return (
    <div className="animate-[fadeUp_0.4s_ease]">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-display text-[42px] font-extralight text-[#1A120B] tracking-tight mb-2">Dashboard</h1>
        <p className="text-[14px] text-[#9A806A] font-light">Welcome back. Here's what's happening at La Miche today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-[0_4px_24px_rgba(26,18,11,0.04)] border border-[rgba(26,18,11,0.06)]">
             <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#9A806A] mb-3">{stat.label}</div>
             <div className="flex items-end gap-3">
               <div className="font-display text-[32px] text-[#1A120B] leading-none">{stat.value}</div>
               <div className="text-[12px] font-medium text-[#4A7C59] mb-1">{stat.trend}</div>
             </div>
          </div>
        ))}
      </div>

      {/* Recent Orders & Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Orders (Mock) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_4px_24px_rgba(26,18,11,0.04)] border border-[rgba(26,18,11,0.06)] overflow-hidden">
           <div className="px-6 py-5 border-b border-[rgba(26,18,11,0.06)] flex justify-between items-center">
             <h2 className="text-[16px] font-medium text-[#1A120B]">Recent Orders</h2>
             <button className="text-[12px] text-[#BF5A2F] hover:text-[#A34A22] font-medium">View All</button>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-[#FAF5EC]">
                   <th className="px-6 py-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[#9A806A]">Order</th>
                   <th className="px-6 py-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[#9A806A]">Customer</th>
                   <th className="px-6 py-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[#9A806A]">Status</th>
                   <th className="px-6 py-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[#9A806A] text-right">Total</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-[rgba(26,18,11,0.06)] text-[13px]">
                 {[
                   { id: '#ORD-1092', name: 'Priya K.', status: 'Processing', color: 'text-[#C8962A] bg-[#FFF8E7]', total: '₹1,240' },
                   { id: '#ORD-1091', name: 'Rahul M.', status: 'Completed', color: 'text-[#4A7C59] bg-[#EAF5ED]', total: '₹850' },
                   { id: '#ORD-1090', name: 'Ananya S.', status: 'Completed', color: 'text-[#4A7C59] bg-[#EAF5ED]', total: '₹3,200' },
                   { id: '#ORD-1089', name: 'Vikram B.', status: 'Cancelled', color: 'text-[#8A3D18] bg-[#F9EAE1]', total: '₹420' },
                 ].map((order) => (
                   <tr key={order.id} className="hover:bg-[#FAF5EC]/50 transition-colors">
                     <td className="px-6 py-4 font-medium text-[#1A120B]">{order.id}</td>
                     <td className="px-6 py-4 text-[#6B5040]">{order.name}</td>
                     <td className="px-6 py-4">
                       <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${order.color}`}>
                         {order.status}
                       </span>
                     </td>
                     <td className="px-6 py-4 text-right font-medium text-[#1A120B]">{order.total}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(26,18,11,0.04)] border border-[rgba(26,18,11,0.06)] overflow-hidden">
           <div className="px-6 py-5 border-b border-[rgba(26,18,11,0.06)]">
             <h2 className="text-[16px] font-medium text-[#1A120B]">Top Products</h2>
           </div>
           <div className="p-6 space-y-5">
             {allProducts.filter((p: any) => p.badge === 'bestseller').map((product) => (
               <div key={product.id} className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#FAF5EC] flex-shrink-0 relative">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <div className="text-[13px] font-medium text-[#1A120B] truncate">{product.name}</div>
                   <div className="text-[11px] text-[#9A806A] mt-0.5">{product.cat}</div>
                 </div>
                 <div className="font-display text-[16px] text-[#BF5A2F]">₹{product.price}</div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}
