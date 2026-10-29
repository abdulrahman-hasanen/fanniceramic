// Simple site configuration. Admin can edit via admin.html; falls back to these defaults.
const __cfg = getConfig();
window.SITE_DEFAULT_CONFIG = {
    business: {
        name: 'Fanni Ceramic',
        phone: '60707610',
        whatsapp: '+96560707610',
        city: 'الكويت - حولي'
    },
    hero: {
        title: 'فني سيراميك الكويت',
        subtitle: 'خبرة أكثر من 15 عام في تركيب وصيانة السيراميك',
        tagline: 'أفضل فني تركيب سيراميك وبورسلين ورخام في الكويت'
    },
    gallery: [
        { src: 'معيشة.jpg', alt: 'تركيب سيراميك', category: 'ceramic', title: 'تركيب سيراميك', subtitle: 'غرفة معيشة' },
        { src: 'مطبخ.jpg', alt: 'تركيب سيراميك', category: 'ceramic', title: 'تركيب سيراميك', subtitle: 'مطبخ حديث' },
        { src: 'حمام.jpg', alt: 'تركيب بورسلين', category: 'porcelain', title: 'تركيب بورسلين', subtitle: 'حمام حديث' },
        { src: 'غرف.jpg', alt: 'تركيب بورسلين', category: 'porcelain', title: 'تركيب بورسلين', subtitle: 'غرفة نوم' },
        { src: 'مدخل.jpg', alt: 'تركيب رخام', category: 'marble', title: 'تركيب رخام', subtitle: 'مدخل فيلا' },
        { src: 'درج.jpg', alt: 'تركيب رخام', category: 'marble', title: 'تركيب رخام', subtitle: 'درج داخلي' }
    ],    
};


