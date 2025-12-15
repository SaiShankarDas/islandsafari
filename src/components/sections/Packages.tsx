import React from 'react';
import { MapPin, ArrowUpRight, Clock, Banknote } from 'lucide-react';

const packages = [
    {
        id: 1,
        name: "4 Nights / 5 Days Island Escape",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2874&auto=format&fit=crop", // Goa image ref
        description: "Experience the serenity of Agatti Island with our compact luxury package.",
        price: "₹10,000",
        duration: "4N / 5D",
        tips: "Perfect for a quick getaway."
    },
    {
        id: 2,
        name: "5 Nights / 6 Days Lakshadweep Explorer",
        image: "https://images.unsplash.com/photo-1589979481223-deb893043163?q=80&w=2874&auto=format&fit=crop", // Andaman image ref
        description: "Deep dive into the beauty of Lakshadweep including Kalpitti Island excursions.",
        price: "₹20,000",
        duration: "5N / 6D",
        tips: "Best value for explorers."
    },
    {
        id: 3,
        name: "Scuba Diving Special",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2874&auto=format&fit=crop", // Maldives image ref
        description: "Witness the vibrant marine life of the coral reefs with our guided diving sessions.",
        price: "Custom Pricing",
        duration: "Flexible",
        tips: "Includes certification options."
    }
];

export const Packages = () => {
    return (
        <section id="packages" className="py-24 bg-brand-gold/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span
                        className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block"
                    >
                        Escape to Paradise
                    </span>
                    <h2
                        className="font-serif text-4xl md:text-6xl font-bold text-brand-blue mb-6"
                    >
                        Exclusive Packages
                    </h2>
                    <p
                        className="text-brand-blue/70 max-w-2xl mx-auto text-lg"
                    >
                        Curated experiences designed to give you the best of Agatti Island and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-brand-blue"
                        >
                            {/* Image */}
                            <img
                                src={pkg.image}
                                alt={pkg.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/40 to-transparent opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                                    <div className="flex items-center gap-4 text-brand-gold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-xs font-bold tracking-widest uppercase">{pkg.duration}</span>
                                        </div>
                                    </div>

                                    <h3 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">{pkg.name}</h3>

                                    <div className="flex items-center gap-2 text-brand-gold mb-3">
                                        <Banknote className="w-5 h-5" />
                                        <span className="text-lg font-bold">From {pkg.price}</span>
                                    </div>

                                    <div className="overflow-hidden">
                                        <p className="text-white/80 text-sm line-clamp-3 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-brand-gold text-xs italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 border-t border-white/10 pt-4 font-medium">
                                        <span>Note: {pkg.tips}</span>
                                    </div>
                                </div>

                                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-brand-gold hover:text-brand-blue translate-y-[-10px] group-hover:translate-y-0">
                                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-brand-blue" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button
                        className="px-8 py-4 bg-brand-blue text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:bg-brand-blue/90 transition-all hover:scale-105 active:scale-95"
                    >
                        View All Packages
                    </button>
                </div>
            </div>
        </section>
    );
};
