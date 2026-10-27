document.addEventListener("DOMContentLoaded", function() {
    
    // 1. تشغيل خلفية الذرات (tsParticles) بكثافة عالية وشبكات متصلة
    if (document.getElementById("tsparticles")) {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            particles: {
                number: {
                    value: 180, /* كثافة عالية جداً للذرات لملء الخلفية بالكامل */
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                color: {
                    value: ["#ffffff", "#8052ff", "#ffb829", "#d0bfff"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: { min: 0.25, max: 0.75 }
                },
                size: {
                    value: { min: 2.5, max: 6 }
                },
                links: {
                    enable: true,
                    distance: 180, /* زيادة مسافة التشابك لتتصل الشبكات ببعضها بقوة أكبر */
                    color: "#8052ff",
                    opacity: 0.6,  /* إبراز خطوط الشبكة والاتصال بوضوح تام */
                    width: 1.5
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out"
                    }
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab" /* تفاعل الذرات مع الماوس أو اللمس */
                    },
                    onClick: {
                        enable: true,
                        mode: "push"
                    }
                }
            },
            detectRetina: true
        });
    }

    // 2. تشغيل القائمة الجانبية (Hamburger Menu) للموبايل
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links-list");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", function() {
            navLinks.classList.toggle("active");
            mobileMenu.classList.toggle("is-active");
        });

        // روابط القوائم المنسدلة (href="#") لا تغلق القائمة ولا تقفز لأعلى الصفحة
        document.querySelectorAll(".drop-btn").forEach(btn => {
            btn.addEventListener("click", e => e.preventDefault());
        });

        // إغلاق القائمة تلقائياً عند الضغط على أي رابط فعلي داخلها
        document.querySelectorAll(".nav-links a:not(.drop-btn)").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                mobileMenu.classList.remove("is-active");
            });
        });
    }
});
