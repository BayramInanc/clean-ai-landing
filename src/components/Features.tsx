"use client";

import { AlertCircle, Image as ImageIcon, Clock, Layers, Shield, Zap } from "lucide-react";

export default function Features() {
    return (
        <section className="py-32 bg-white text-black">
            <div className="container mx-auto px-6">

                {/* PROBLEM SECTION */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-16 text-center">Neden CleanAI?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center border border-[#E5E5E5]">
                                <AlertCircle className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-semibold">Depolama Alanı Dolu</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Gereksiz kopyalar ve ekran görüntüleri telefon hafızasının ortalama %30'unu işgal eder.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center border border-[#E5E5E5]">
                                <ImageIcon className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-semibold">Anılar Kayboluyor</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Binlerce ekran görüntüsü ve bulanık fotoğraf arasında en iyi kareleri bulmak zorlaşır.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center border border-[#E5E5E5]">
                                <Clock className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-semibold">Manuel Temizlik Zor</h3>
                            <p className="text-gray-500 leading-relaxed">
                                5.000 fotoğrafı tek tek ayıklamak ve düzenlemek ortalama 6 saat sürer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SOLUTION SECTION */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-[#F5F5F7] border border-[#E5E5E5]">
                            <Layers className="w-8 h-8 text-[#0066FF] mb-6" />
                            <h3 className="text-xl font-semibold mb-3">Akıllı Gruplama</h3>
                            <p className="text-gray-500">
                                Benzer kareleri %99 doğrulukla gruplar, en iyisini önerir ve diğerlerini silmenizi sağlar.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#F5F5F7] border border-[#E5E5E5]">
                            <Shield className="w-8 h-8 text-[#0066FF] mb-6" />
                            <h3 className="text-xl font-semibold mb-3">Gizlilik Odaklı</h3>
                            <p className="text-gray-500">
                                Tüm analiz cihazınızda yapılır (On-Device), fotoğraflarınız asla sunucuya yüklenmez.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#F5F5F7] border border-[#E5E5E5]">
                            <Zap className="w-8 h-8 text-[#0066FF] mb-6" />
                            <h3 className="text-xl font-semibold mb-3">Hızlı Temizlik</h3>
                            <p className="text-gray-500">
                                Tek dokunuşla yüzlerce gereksiz dosyayı silin ve geri alınabilir klasöre taşıyın.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
