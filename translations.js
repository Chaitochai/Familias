const translations = {
    en: {
        title: "Family Card Game - 7 Ethnicities",
        level: "Level",
        attempts: "Attempts:",
        reset: "Reset game",
        rotateMessage: "🔄 For a better experience, rotate your mobile device horizontally",
        winMessage: "You won Level {level} in {attempts} attempts! 🎉",
        sharePrompt: "Do you want to share your victory on WhatsApp?",
        shareMessage: "I won Level {level} in {attempts} attempts! 🎉\n\nPlay also at: https://chaitochai.github.io/Familias/",
        roles: {
            grandmother: "Grandmother",
            grandfather: "Grandfather",
            father: "Father",
            mother: "Mother",
            son: "Son",
            daughter: "Daughter"
        },
        ethnicities: {
            arab: "Arab",
            bantu: "Bantu",
            chinese: "Chinese",
            eskimo: "Eskimo",
            mexican: "Mexican",
            tyrolean: "Tyrolean",
            indian: "Indian"
        }
    },
    es: {
        title: "Juego de Familias de 7 Etnias",
        level: "Nivel",
        attempts: "Intentos:",
        reset: "Reiniciar juego",
        rotateMessage: "🔁 Para una mejor experiencia, gira tu móvil horizontalmente",
        winMessage: "¡Has ganado el Nivel {level} en {attempts} intentos! 🎉",
        sharePrompt: "¿Quieres compartir tu victoria en WhatsApp?",
        shareMessage: "¡He ganado el Nivel {level} en {attempts} intentos! 🎉\n\nJuega también en: https://chaitochai.github.io/Familias/",
        roles: {
            grandmother: "Abuela",
            grandfather: "Abuelo",
            father: "Padre",
            mother: "Madre",
            son: "Hijo",
            daughter: "Hija"
        },
        ethnicities: {
            arab: "Árabe",
            bantu: "Bantú",
            chinese: "Chino",
            eskimo: "Esquimal",
            mexican: "Mexicano",
            tyrolean: "Tiroles",
            indian: "Indio"
        }
    },
    ja: {
        title: "7つの民族の家族カードゲーム",
        level: "レベル",
        attempts: "試行回数:",
        reset: "ゲームをリセット",
        rotateMessage: "🔄 より良い体験のために、携帯電話を横向きにしてください",
        winMessage: "レベル{level}を{attempts}回の試行でクリアしました！🎉",
        sharePrompt: "WhatsAppで勝利を共有しますか？",
        shareMessage: "レベル{level}を{attempts}回の試行でクリアしました！🎉\n\nこちらでもプレイできます: https://chaitochai.github.io/Familias/",
        roles: {
            grandmother: "祖母",
            grandfather: "祖父",
            father: "父",
            mother: "母",
            son: "息子",
            daughter: "娘"
        },
        ethnicities: {
            arab: "アラブ",
            bantu: "バントゥ",
            chinese: "中国",
            eskimo: "エスキモー",
            mexican: "メキシコ",
            tyrolean: "チロル",
            indian: "インド"
        }
    }
};

// Language detection and management
let currentLang = 'es'; // Default language

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        document.documentElement.lang = lang;
        updateUI();
    }
}

function t(key) {
    return translations[currentLang][key] || key;
}

function updateUI() {
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key.includes('.')) {
            const [category, subkey] = key.split('.');
            element.textContent = t(category)[subkey];
        } else {
            element.textContent = t(key);
        }
    });
} 