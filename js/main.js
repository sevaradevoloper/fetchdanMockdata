document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menyusi uchun funksionallik (O'zgarmadi)
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.menu__hamburger');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open'); 
            mobileMenu.classList.toggle('open');
        });
    }

    // ===============================mock data va fon qo'shildi=======================

    let mockData = [
        { img: "./image/image 6.svg", backgroundClass: "bg-two" },    // Esda tuting: .main da allaqachon birinchi fon bor
        { img: "./image/pngwing 5.svg", backgroundClass: "bg-three" },
        { img: "./image/pngwing 4.svg", backgroundClass: "bg-four" },
        { img: "./image/pngwing 6.svg", backgroundClass: "bg-five" },
        // Agar 5-rasm bo'lsa: { img: "...", backgroundClass: "bg-five" },
    ];
    
    const heroImageElement = document.querySelector('.hero__img');
    const mainElement = document.querySelector('.main'); // Main elementini tanlash
    let currentIndex = 0; 
    let currentBackgroundClass = 'bg-two'; // Hozirgi fon klassini kuzatib borish

    /**
     * Rasmlar va fonni avtomatik almashtirish funksiyasi
     */
    function startHeroImageSlider() {
        if (!heroImageElement || !mainElement) return;

        // Boshlashdan oldin asosiy rasm va fonni o'rnatish
        heroImageElement.src = mockData[currentIndex].img;
        // Asosiy fon (.main ga bevosita) allaqachon `var(--background-hero-one)` berilgan, 
        // shuning uchun keyingi rasmga o'tishdan boshlaymiz.

        setInterval(() => {
            // Indeksni oshirish
            currentIndex = (currentIndex + 1) % mockData.length;
            
            const nextData = mockData[currentIndex];

            // 1. Rasmni almashtirish
            heroImageElement.src = nextData.img;
            
            // 2. Fonni almashtirish
            
            // Eski fon klassini olib tashlash (Masalan, 'bg-one')
            mainElement.classList.remove(currentBackgroundClass);

            // Yangi fon klassini o'rnatish (Masalan, 'bg-two')
            // Agar "bg-one" klassi mavjud bo'lmasa, uni alohida berish shart emas.
            // Shunchaki to'g'ri nomni currentBackgroundClass ga yozish kerak
            if (nextData.backgroundClass !== 'bg-two') {
                mainElement.classList.add(nextData.backgroundClass);
            }
            
            // Hozirgi fon klassini yangilash
            currentBackgroundClass = nextData.backgroundClass;

        }, 3000); // Har 3 soniyada
    }

    startHeroImageSlider();
});