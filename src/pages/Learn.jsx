const guides = [
  { id: 1, title: "What is Bitcoin?", category: "Crypt0 Basics", image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=400&q=80" },
  { id: 2, title: "What is a Blockchain?", category: "Technology", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80" },
  { id: 3, title: "How to set up a Wallet", category: "Tips", image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80" },
];

export default function Learn() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Crypt0 questions, answered</h1>
        <p className="text-xl text-gray-600">Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <div key={guide.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src={guide.image} 
                alt={guide.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" 
              />
            </div>
            <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2">{guide.category}</p>
            <h3 className="text-2xl font-bold group-hover:text-blue-600 transition">{guide.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}