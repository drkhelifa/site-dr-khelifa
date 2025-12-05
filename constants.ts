import { Brain, CloudRain, BatteryWarning, Moon, Stethoscope, HeartHandshake } from 'lucide-react';
import { ContactInfo, NavItem, Service, BlogPost, ScheduleItem, Tip } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "0665416904",
  whatsappFull: "213665416904",
  address: {
    fr: "Lot 261, 1er étage",
    ar: "قطعة 261، الطابق الأول"
  },
  city: {
    fr: "Baraki, Alger",
    ar: "براقي، الجزائر العاصمة"
  },
  mapsLink: "https://maps.app.goo.gl/R6pg7oFHPvgvriT68"
};

export const NAV_ITEMS: NavItem[] = [
  { label: { fr: "Accueil", ar: "الرئيسية" }, path: "/" },
  { label: { fr: "À Propos", ar: "من أنا" }, path: "/a-propos" },
  { label: { fr: "Expertises", ar: "الخدمات" }, path: "/services" },
  { label: { fr: "Conseils", ar: "نصائح" }, path: "/tips" },
  { label: { fr: "Blog", ar: "المقالات" }, path: "/blog" },
  { label: { fr: "Contact", ar: "إتصل بي" }, path: "/contact" },
];

export const SERVICES: Service[] = [
  {
    title: { fr: "Troubles Anxieux", ar: "اضطرابات القلق" },
    description: { fr: "Prise en charge des TOC, phobies, anxiété sociale et attaques de panique.", ar: "علاج الوسواس القهري، الرهاب، القلق الاجتماعي ونوبات الهلع." },
    icon: CloudRain,
    details: [
      { fr: "Trouble Obsessionnel Compulsif (TOC)", ar: "الوسواس القهري (TOC)" },
      { fr: "Trouble Anxieux Généralisé (TAG)", ar: "القلق العام (TAG)" },
      { fr: "Phobies spécifiques", ar: "الرهاب المحدد" },
      { fr: "Anxiété sociale", ar: "الرهاب الاجتماعي" }
    ]
  },
  {
    title: { fr: "Troubles de l'Humeur", ar: "اضطرابات المزاج" },
    description: { fr: "Accompagnement pour la dépression et les troubles bipolaires.", ar: "مرافقة وعلاج حالات الاكتئاب والاضطراب ثنائي القطب." },
    icon: Brain,
    details: [
      { fr: "Dépression majeure", ar: "الاكتئاب الحاد" },
      { fr: "Dépression saisonnière", ar: "الاكتئاب الموسمي" },
      { fr: "Trouble bipolaire", ar: "الاضطراب ثنائي القطب" },
      { fr: "Dysthymie", ar: "تعكر المزاج المزمن" }
    ]
  },
  {
    title: { fr: "Burn-out & Stress", ar: "الإرهاق والتوتر" },
    description: { fr: "Gestion de l'épuisement professionnel et du stress chronique.", ar: "إدارة الاحتراق المهني والتوتر المزمن في العمل." },
    icon: BatteryWarning,
    details: [
      { fr: "Épuisement professionnel", ar: "الاحتراق المهني" },
      { fr: "Stress au travail", ar: "ضغوط العمل" },
      { fr: "Gestion émotionnelle", ar: "إدارة الانفعالات" },
      { fr: "Rééquilibre vie pro/vie perso", ar: "التوازن بين العمل والحياة" }
    ]
  },
  {
    title: { fr: "Troubles du Sommeil", ar: "اضطرابات النوم" },
    description: { fr: "Retrouver un sommeil réparateur grâce à des solutions adaptées.", ar: "استعادة النوم الصحي والمريح من خلال حلول مناسبة." },
    icon: Moon,
    details: [
      { fr: "Insomnie chronique", ar: "الأرق المزمن" },
      { fr: "Troubles du rythme circadien", ar: "اضطرابات الساعة البيولوجية" },
      { fr: "Hygiène du sommeil", ar: "نظافة النوم" },
      { fr: "Cauchemars récurrents", ar: "الكوابيس المتكررة" }
    ]
  },
  {
    title: { fr: "Thérapie Cognitive (TCC)", ar: "العلاج السلوكي المعرفي (TCC)" },
    description: { fr: "Une approche brève, validée scientifiquement, centrée sur l'ici et maintenant.", ar: "نهج علاجي حديث ومثبت علمياً يركز على الحاضر وحل المشكلات." },
    icon: HeartHandshake,
    details: [
      { fr: "Restructuration cognitive", ar: "إعادة الهيكلة المعرفية" },
      { fr: "Exposition progressive", ar: "التعرض التدريجي" },
      { fr: "Gestion des émotions", ar: "إدارة العواطف" },
      { fr: "Prévention de la rechute", ar: "الوقاية من الانتكاس" }
    ]
  },
  {
    title: { fr: "Approche Intégrative", ar: "الطب النفسي التكاملي" },
    description: { fr: "Combinaison équilibrée de psychothérapie et de traitement médicamenteux si nécessaire.", ar: "الجمع المتوازن بين العلاج النفسي والدوائي عند الضرورة." },
    icon: Stethoscope,
    details: [
      { fr: "Suivi médical", ar: "متابعة طبية" },
      { fr: "Prescription raisonnée", ar: "وصف الأدوية بدقة" },
      { fr: "Approche globale", ar: "مقاربة شاملة" },
      { fr: "Coordination des soins", ar: "تنسيق الرعاية" }
    ]
  }
];

// Helper to generate tips
const generateTips = (): Tip[] => {
  const categories = ['general', 'stress', 'sleep', 'social', 'habits'] as const;
  const tips: Tip[] = [];
  
  const frenchTips = [
    // General (1-20)
    "Prenez le temps de respirer profondément chaque jour.", "L'hydratation influence votre humeur, buvez de l'eau.", "Faites une marche de 15 minutes pour aérer votre esprit.",
    "Tenez un journal de gratitude.", "Acceptez que vous ne pouvez pas tout contrôler.", "La perfection n'existe pas, visez le progrès.",
    "Accordez-vous des pauses sans culpabilité.", "Écoutez de la musique qui vous apaise.", "Rangez votre espace pour clarté mentale.",
    "Apprenez à dire non poliment.", "Votre valeur ne dépend pas de votre productivité.", "Soyez bienveillant envers vous-même.",
    "Identifiez vos émotions sans les juger.", "Riez, c'est un anti-stress naturel.", "Exposez-vous à la lumière du jour le matin.",
    "Limitez les actualités anxiogènes.", "Faites une chose à la fois (monotâche).", "Célébrez vos petites victoires.", "Connectez-vous à la nature.", "Demander de l'aide est un signe de force.",
    // Stress (21-40)
    "Pratiquez la cohérence cardiaque (respiration 5-5).", "Distinguez ce qui est urgent de ce qui est important.", "Faites des étirements quand la tension monte.",
    "Visualisez un endroit calme.", "Écrivez vos soucis pour les sortir de votre tête.", "Utilisez une balle anti-stress.",
    "Prenez un bain chaud ou une douche relaxante.", "Réduisez la caféine en cas d'anxiété.", "Adoptez la technique Pomodoro pour travailler.",
    "Déconnectez des notifications le soir.", "Faites du yoga ou de la méditation.", "Parlez de votre stress à un ami.",
    "Acceptez l'incertitude comme faisant partie de la vie.", "Comptez jusqu'à 10 avant de réagir.", "Focalisez-vous sur l'instant présent.",
    "Identifiez vos déclencheurs de stress.", "Dormez suffisamment pour être plus résilient.", "Mangez équilibré pour soutenir votre système nerveux.",
    "Pratiquez la relaxation musculaire progressive.", "Donnez-vous le droit à l'erreur.",
    // Sleep (41-60)
    "Créez une routine de coucher régulière.", "Évitez les écrans 1h avant de dormir.", "Gardez votre chambre fraîche et sombre.",
    "Le lit ne sert qu'à dormir (et l'intimité).", "Évitez les repas lourds le soir.", "Lisez un livre papier avant de dormir.",
    "Si vous ne dormez pas après 20 min, levez-vous.", "Évitez le sport intense tard le soir.", "La régularité est la clé du sommeil.",
    "Utilisez des bruits blancs si nécessaire.", "Évitez l'alcool qui perturbe le sommeil profond.", "Exposez-vous au soleil le matin pour régler l'horloge bio.",
    "Notez vos tâches du lendemain pour vider votre esprit.", "Pratiquez la respiration 4-7-8.", "Investissez dans un bon oreiller.",
    "Évitez les siestes trop longues (>20 min).", "Prenez une tisane relaxante (camomille, valériane).", "Assurez-vous du silence dans la chambre.",
    "Ne regardez pas l'heure si vous vous réveillez.", "Associez la chambre au calme et à la sécurité.",
    // Social (61-80)
    "Écoutez pour comprendre, pas pour répondre.", "Exprimez vos besoins clairement (Communication Non Violente).", "Entourez-vous de personnes positives.",
    "Posez des limites saines.", "Ne prenez pas tout personnellement.", "Faites un compliment sincère par jour.",
    "Pardonnez pour vous libérer, pas pour l'autre.", "Soyez présent quand vous êtes avec quelqu'un.", "Acceptez les désaccords sans conflit.",
    "Appelez un proche juste pour prendre des nouvelles.", "Souriez, c'est contagieux.", "Ne supposez pas, posez des questions.",
    "Soyez authentique plutôt que parfait.", "L'empathie renforce les liens.", "Respectez l'opinion des autres.",
    "Partagez vos sentiments.", "Faites des activités de groupe.", "Aidez quelqu'un sans rien attendre en retour.",
    "Soyez ponctuel par respect.", "Remerciez les gens autour de vous.",
    // Habits (81-100)
    "Commencez petit pour créer une habitude.", "Soyez constant plutôt qu'intense.", "Préparez vos affaires la veille.",
    "Fixez des objectifs SMART.", "Récompensez-vous après un effort.", "Changez votre environnement pour changer vos habitudes.",
    "Lisez 10 minutes par jour.", "Apprenez quelque chose de nouveau chaque semaine.", "Faites votre lit le matin.",
    "Planifiez votre semaine le dimanche.", "Désencombrez une zone par semaine.", "Cuisinez vos propres repas.",
    "Marchez au lieu de prendre la voiture si possible.", "Buvez un verre d'eau au réveil.", "Mettez de l'argent de côté régulièrement.",
    "Faites un bilan de votre journée le soir.", "Remplacez 'je dois' par 'je choisis de'.", "Visualisez votre succès.",
    "Soyez patient avec vous-même.", "Croyez en votre capacité à changer."
  ];

  const arabicTips = [
    // General
    "خذ وقتاً للتنفس بعمق كل يوم.", "شرب الماء يؤثر على مزاجك، حافظ على رطوبتك.", "امشِ لمدة 15 دقيقة لتصفية ذهنك.",
    "احتفظ بمذكرة للامتنان.", "تقبل أنك لا تستطيع السيطرة على كل شيء.", "الكمال غير موجود، اهدف إلى التقدم.",
    "امنح نفسك استراحات دون شعور بالذنب.", "استمع إلى موسيقى تهدئك.", "رتب مساحتك لصفاء الذهن.",
    "تعلم قول 'لا' بلطف.", "قيمتك لا تعتمد على إنتاجيتك.", "كن رحيماً بنفسك.",
    "تعرف على مشاعرك دون الحكم عليها.", "اضحك، فهو مضاد طبيعي للتوتر.", "تعرض لضوء النهار في الصباح.",
    "قلل من متابعة الأخبار المقلقة.", "قم بشيء واحد في كل مرة.", "احتفل بانتصاراتك الصغيرة.", "تواصل مع الطبيعة.", "طلب المساعدة علامة قوة.",
    // Stress
    "مارس التنفس المنتظم لتنظيم ضربات القلب.", "ميز بين ما هو عاجل وما هو مهم.", "قم بتمارين التمدد عند الشعور بالضغط.",
    "تخيل مكاناً هادئاً.", "اكتب مخاوفك لإخراجها من رأسك.", "استخدم كرة الضغط.",
    "خذ حماماً دافئاً للاسترخاء.", "قلل من الكافيين في حالة القلق.", "استخدم تقنية بومودورو للعمل.",
    "افصل الإشعارات في المساء.", "مارس اليوغا أو التأمل.", "تحدث عن ضغوطك مع صديق.",
    "تقبل عدم اليقين كجزء من الحياة.", "عد إلى 10 قبل رد الفعل.", "ركز على اللحظة الحالية.",
    "تعرف على مسببات التوتر لديك.", "نم جيداً لتكون أكثر مرونة.", "تناول طعاماً متوازناً لدعم جهازك العصبي.",
    "مارس الاسترخاء العضلي التدريجي.", "امنح نفسك الحق في الخطأ.",
    // Sleep
    "أنشئ روتيناً منتظماً للنوم.", "تجنب الشاشات قبل ساعة من النوم.", "حافظ على غرفتك باردة ومظلمة.",
    "السرير للنوم فقط.", "تجنب الوجبات الثقيلة مساءً.", "اقرأ كتاباً ورقياً قبل النوم.",
    "إذا لم تنم بعد 20 دقيقة، انهض.", "تجنب الرياضة العنيفة في وقت متأخر.", "الانتظام هو مفتاح النوم الجيد.",
    "استخدم الضوضاء البيضاء إذا لزم الأمر.", "تجنب المنبهات التي تضر بالنوم العميق.", "تعرض للشمس صباحاً لضبط ساعتك البيولوجية.",
    "دون مهام الغد لتفريغ عقلك.", "مارس تنفس 4-7-8.", "استثمر في وسادة مريحة.",
    "تجنب القيلولة الطويلة (>20 دقيقة).", "تناول شاي الأعشاب المهدئ.", "تأكد من الهدوء في الغرفة.",
    "لا تنظر إلى الساعة إذا استيقظت.", "اربط الغرفة بالهدوء والأمان.",
    // Social
    "استمع لتفهم، لا لترد.", "عبر عن احتياجاتك بوضوح.", "أحط نفسك بأشخاص إيجابيين.",
    "ضع حدوداً صحية.", "لا تأخذ الأمور بشكل شخصي.", "قدم مجاملة صادقة يومياً.",
    "سامح لتحرر نفسك، ليس من أجل الآخر.", "كن حاضراً بذهنك مع الآخرين.", "تقبل الخلافات دون نزاع.",
    "اتصل بقريب فقط للاطمئنان.", "ابتسم، الابتسامة معدية.", "لا تفترض، بل اسأل.",
    "كن حقيقياً بدلاً من مثالياً.", "التعاطف يقوي الروابط.", "احترم رأي الآخرين.",
    "شارك مشاعرك.", "شارك في أنشطة جماعية.", "ساعد شخصاً دون انتظار مقابل.",
    "كن دقيقاً في مواعيدك احتراماً للغير.", "اشكر من حولك.",
    // Habits
    "ابدأ صغيراً لبناء عادة.", "كن مستمراً بدلاً من مكثفاً.", "جهز أغراضك في الليلة السابقة.",
    "ضع أهدافاً ذكية وقابلة للقياس.", "كافئ نفسك بعد الجهد.", "غير بيئتك لتغيير عاداتك.",
    "اقرأ 10 دقائق يومياً.", "تعلم شيئاً جديداً كل أسبوع.", "رتب سريرك في الصباح.",
    "خطط لأسبوعك يوم الأحد.", "تخلص من الفوضى في منطقة واحدة أسبوعياً.", "اطبخ وجباتك بنفسك.",
    "امشِ بدلاً من ركوب السيارة إن أمكن.", "اشرب كوب ماء عند الاستيقاظ.", "دخر مبلغاً من المال بانتظام.",
    "قيم يومك في المساء.", "استبدل 'يجب علي' بـ 'أختار أن'.", "تخيل نجاحك.",
    "كن صبوراً مع نفسك.", "آمن بقدرتك على التغيير."
  ];

  for (let i = 0; i < 100; i++) {
    tips.push({
      id: i + 1,
      category: categories[Math.floor(i / 20)],
      content: {
        fr: frenchTips[i] || "Conseil à venir...",
        ar: arabicTips[i] || "نصيحة قادمة..."
      }
    });
  }
  return tips;
};

export const TIPS_LIST = generateTips();

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: { fr: "Comprendre la TCC : Plus qu'une simple discussion", ar: "فهم العلاج السلوكي المعرفي: أكثر من مجرد حديث" },
    excerpt: { fr: "La Thérapie Cognitivo-Comportementale est l'une des approches les plus validées scientifiquement. Découvrez comment elle fonctionne en profondeur.", ar: "يعتبر العلاج السلوكي المعرفي من أكثر الأساليب المثبتة علميًا. اكتشف كيف يعمل بشكل معمق." },
    date: { fr: "15 Octobre 2023", ar: "15 أكتوبر 2023" },
    content: { 
      fr: `La Thérapie Cognitivo-Comportementale (TCC) représente une révolution dans le domaine de la psychothérapie. Contrairement à l'image traditionnelle du patient allongé sur un divan racontant ses rêves, la TCC est une thérapie active, collaborative et centrée sur le présent.
      
      Le principe fondamental de la TCC est que ce ne sont pas les événements eux-mêmes qui nous perturbent, mais le sens que nous leur donnons. Nos pensées (cognitions) influencent nos émotions et nos comportements. Par exemple, si vous croisez un ami qui ne vous salue pas, vous pouvez penser "Il est fâché contre moi" (pensée), ce qui génère de la tristesse (émotion) et vous pousse à vous isoler (comportement). La TCC vous apprend à envisager d'autres interprétations : "Peut-être ne m'a-t-il pas vu".
      
      Une thérapie TCC se déroule généralement en plusieurs phases :
      1. L'analyse fonctionnelle : Comprendre les déclencheurs de vos problèmes.
      2. La restructuration cognitive : Apprendre à identifier et modifier les pensées distordues.
      3. L'exposition : Se confronter progressivement aux situations redoutées (pour les phobies ou l'anxiété).
      
      C'est une méthode validée scientifiquement pour traiter la dépression, les troubles anxieux, les TOC, et bien d'autres pathologies. Elle demande un investissement personnel du patient, avec des exercices à faire entre les séances.`,
      ar: `يمثل العلاج السلوكي المعرفي (TCC) ثورة في مجال العلاج النفسي. على عكس الصورة التقليدية للمريض المستلقي على الأريكة وهو يسرد أحلامه، فإن العلاج السلوكي المعرفي هو علاج نشط وتشاركي ويركز على الحاضر.

      المبدأ الأساسي للعلاج السلوكي المعرفي هو أن الأحداث نفسها ليست هي التي تزعجنا، بل المعنى الذي نعطيه لها. أفكارنا (الإدراك) تؤثر على عواطفنا وسلوكنا. على سبيل المثال، إذا قابلت صديقًا ولم يلقِ عليك التحية، فقد تفكر "إنه غاضب مني" (فكرة)، مما يولد الحزن (عاطفة) ويدفعك للعزلة (سلوك). يعلمك العلاج السلوكي المعرفي النظر في تفسيرات أخرى: "ربما لم يرني".

      عادة ما يمر العلاج السلوكي المعرفي بعدة مراحل:
      1. التحليل الوظيفي: فهم مسببات مشاكلك.
      2. إعادة الهيكلة المعرفية: تعلم تحديد وتعديل الأفكار المشوهة.
      3. التعرض: مواجهة المواقف المخيفة تدريجيًا (لأجل علاج الرهاب أو القلق).

      إنها طريقة مثبتة علميًا لعلاج الاكتئاب، واضطرابات القلق، والوسواس القهري، والعديد من الأمراض الأخرى. يتطلب الأمر استثمارًا شخصيًا من المريض، مع وجود تمارين للقيام بها بين الجلسات.`
    },
    tags: [
      { fr: "TCC", ar: "علاج سلوكي" },
      { fr: "Thérapie", ar: "علاج نفسي" },
      { fr: "Science", ar: "علم" }
    ],
    image: "https://picsum.photos/800/400?random=1"
  },
  {
    id: 2,
    title: { fr: "Dépression vs Tristesse : Le guide complet", ar: "الاكتئاب مقابل الحزن: الدليل الشامل" },
    excerpt: { fr: "Il est normal de se sentir triste. Mais quand la tristesse devient-elle pathologique ? Analyse détaillée des symptômes.", ar: "من الطبيعي أن نشعر بالحزن. ولكن متى يصبح الحزن مرضيًا؟ تحليل مفصل للأعراض." },
    date: { fr: "22 Septembre 2023", ar: "22 سبتمبر 2023" },
    content: {
      fr: `La frontière entre la tristesse normale et la dépression est parfois floue pour le grand public, mais elle est très claire sur le plan médical. La tristesse est une émotion humaine normale, une réaction à une perte ou à une déception. Elle est passagère et n'empêche généralement pas de fonctionner au quotidien.

      La dépression, ou épisode dépressif caractérisé, est une maladie. Pour poser un diagnostic, les symptômes doivent être présents presque toute la journée, tous les jours, depuis au moins deux semaines.
      
      Les symptômes clés incluent :
      - Une humeur dépressive constante ou une irritabilité.
      - L'anhédonie : une perte d'intérêt ou de plaisir pour les activités habituelles.
      - Des changements physiques : perte ou gain de poids significatif, insomnie ou hypersomnie, fatigue chronique.
      - Des changements cognitifs : difficulté à se concentrer, indécision, pensées de dévalorisation ou de culpabilité excessive.
      - Parfois, des pensées de mort ou suicidaires.
      
      La dépression n'est pas un signe de faiblesse ou un manque de volonté. C'est un déséquilibre neurobiologique et psychologique qui nécessite une prise en charge professionnelle, souvent par une combinaison de psychothérapie et, si nécessaire, de médicaments antidépresseurs.`,
      ar: `الحد الفاصل بين الحزن الطبيعي والاكتئاب يكون أحيانًا غير واضح للعامة، ولكنه واضح جدًا طبيًا. الحزن عاطفة إنسانية طبيعية، رد فعل لفقدان أو خيبة أمل. إنه عابر ولا يمنع عادة من ممارسة الحياة اليومية.

      الاكتئاب، أو النوبة الاكتئابية الكبرى، هو مرض. لتشخيص الحالة، يجب أن تكون الأعراض موجودة طوال اليوم تقريبًا، كل يوم، لمدة أسبوعين على الأقل.

      تشمل الأعراض الرئيسية:
      - مزاج مكتئب مستمر أو سرعة انفعال.
      - انعدام التلذذ: فقدان الاهتمام أو المتعة بالأنشطة المعتادة.
      - تغيرات جسدية: فقدان أو زيادة كبيرة في الوزن، أرق أو فرط في النوم، تعب مزمن.
      - تغيرات معرفية: صعوبة في التركيز، تردد، أفكار تحقير الذات أو الشعور المفرط بالذنب.
      - أحيانًا، أفكار حول الموت أو الانتحار.

      الاكتئاب ليس علامة ضعف أو نقص في الإرادة. إنه خلل بيولوجي عصبي ونفسي يتطلب رعاية مهنية، غالبًا من خلال مزيج من العلاج النفسي، وإذا لزم الأمر، الأدوية المضادة للاكتئاب.`
    },
    tags: [
      { fr: "Dépression", ar: "اكتئاب" },
      { fr: "Diagnostic", ar: "تشخيص" },
      { fr: "Symptômes", ar: "أعراض" }
    ],
    image: "https://picsum.photos/800/400?random=2"
  },
  {
    id: 3,
    title: { fr: "Le Burn-out : Quand le travail rend malade", ar: "الاحتراق المهني: عندما يمرضك العمل" },
    excerpt: { fr: "L'épuisement professionnel est un processus lent. Comprendre les étapes pour mieux le prévenir et le guérir.", ar: "الإرهاق المهني عملية بطيئة. فهم المراحل للوقاية والعلاج بشكل أفضل." },
    date: { fr: "10 Septembre 2023", ar: "10 سبتمبر 2023" },
    content: {
      fr: `Le syndrome d'épuisement professionnel, ou burn-out, n'apparaît pas du jour au lendemain. C'est le résultat d'un stress chronique au travail qui n'a pas été géré correctement. Il touche souvent les personnes très engagées, perfectionnistes, qui ne comptent pas leurs heures.

      Le processus se déroule souvent en trois dimensions :
      1. L'épuisement émotionnel : C'est le premier signe. On se sent vidé, sans ressources, incapable de récupérer même après un week-end.
      2. La dépersonnalisation (ou cynisme) : Pour se protéger, la personne développe une attitude détachée, négative, voire insensible envers ses collègues ou ses clients. On devient "robotique".
      3. La perte d'accomplissement personnel : Le sentiment d'être inefficace, incompétent, que le travail n'a plus de sens.
      
      Les causes sont multiples : surcharge de travail, manque de reconnaissance, conflits de valeurs, manque d'autonomie.
      
      Le traitement nécessite impérativement un arrêt de l'exposition au stress (arrêt de travail), un repos profond, et un travail psychothérapeutique pour comprendre comment on en est arrivé là et comment retourner au travail (ou changer de voie) sans rechuter.`,
      ar: `متلازمة الاحتراق المهني لا تظهر بين عشية وضحاها. إنها نتيجة لتوتر مزمن في العمل لم تتم إدارته بشكل صحيح. غالبًا ما يصيب الأشخاص الملتزمين جدًا، والساعين للكمال، والذين لا يحسبون ساعات عملهم.

      تحدث العملية غالبًا في ثلاثة أبعاد:
      1. الإرهاق العاطفي: هذه هي العلامة الأولى. يشعر الشخص بالفراغ، ونفاد الموارد، وعدم القدرة على التعافي حتى بعد عطلة نهاية الأسبوع.
      2. تبدد الشخصية (أو السخرية): لحماية نفسه، يطور الشخص موقفًا منفصلاً، سلبيًا، أو حتى غير مبالٍ تجاه الزملاء أو العملاء. يصبح الشخص "روبوتيًا".
      3. فقدان الإنجاز الشخصي: الشعور بعدم الفعالية، وعدم الكفاءة، وأن العمل لم يعد له معنى.

      الأسباب متعددة: عبء العمل الزائد، نقص التقدير، تضارب القيم، نقص الاستقلالية.

      يتطلب العلاج بالضرورة وقف التعرض للتوتر (إجازة مرضية)، وراحة عميقة، وعملًا نفسيًا لفهم كيفية الوصول إلى هذه الحالة وكيفية العودة للعمل (أو تغيير المسار) دون انتكاسة.`
    },
    tags: [
      { fr: "Burn-out", ar: "إرهاق مهني" },
      { fr: "Travail", ar: "عمل" },
      { fr: "Prévention", ar: "وقاية" }
    ],
    image: "https://picsum.photos/800/400?random=3"
  },
  {
    id: 4,
    title: { fr: "Attaque de Panique : Que faire ?", ar: "نوبة الهلع: ماذا تفعل؟" },
    excerpt: { fr: "Cœur qui bat, sensation d'étouffement, peur de mourir... Comment gérer une crise d'angoisse sur le moment.", ar: "خفقان القلب، الشعور بالاختناق، الخوف من الموت... كيفية التعامل مع نوبة القلق في حينها." },
    date: { fr: "05 Aout 2023", ar: "05 أوت 2023" },
    content: {
      fr: `Une attaque de panique est une montée brusque de peur intense ou de malaise qui atteint son pic en quelques minutes. Les symptômes physiques sont terrifiants : palpitations, transpiration, tremblements, sensation d'étouffement, douleur thoracique, nausée. Psychologiquement, on a souvent peur de perdre le contrôle, de devenir fou ou de mourir.
      
      Cependant, une attaque de panique n'est pas dangereuse physiquement. Votre corps est en mode "alerte maximale" (fuite ou combat) sans danger réel.
      
      Voici quoi faire pendant une crise :
      1. Acceptez ce qui se passe. Ne luttez pas contre les symptômes, cela les amplifie. Dites-vous : "C'est juste de l'anxiété, ça va passer".
      2. Respirez. L'hyperventilation aggrave les symptômes. Essayez de respirer lentement par le ventre (inspirez 4 secondes, expirez 6 secondes).
      3. Ancrez-vous. Utilisez la technique "5-4-3-2-1" : Nommez 5 choses que vous voyez, 4 que vous pouvez toucher, 3 que vous entendez, 2 que vous sentez, 1 que vous goûtez.
      
      Si ces crises se répètent, on parle de Trouble Panique. La TCC est extrêmement efficace pour traiter ce trouble en vous déconditionnant de la peur des symptômes eux-mêmes.`,
      ar: `نوبة الهلع هي تصاعد مفاجئ لخوف شديد أو انزعاج يصل ذروته في بضع دقائق. الأعراض الجسدية مرعبة: خفقان، تعرق، ارتجاف، شعور بالاختناق، ألم في الصدر، غثيان. نفسياً، غالباً ما يكون هناك خوف من فقدان السيطرة، أو الجنون، أو الموت.

      ومع ذلك، نوبة الهلع ليست خطيرة جسدياً. جسمك في وضع "الإنذار الأقصى" (الكر أو الفر) دون وجود خطر حقيقي.

      إليك ما يجب فعله أثناء النوبة:
      1. تقبل ما يحدث. لا تقاوم الأعراض، فهذا يزيدها سوءاً. قل لنفسك: "إنه مجرد قلق، وسيمر".
      2. تنفس. فرط التنفس يفاقم الأعراض. حاول التنفس ببطء من البطن (شهيق 4 ثوانٍ، زفير 6 ثوانٍ).
      3. ثبت نفسك. استخدم تقنية "5-4-3-2-1": سمِّ 5 أشياء تراها، 4 يمكنك لمسها، 3 تسمعها، 2 تشمها، وشيء واحد تتذوقه.

      إذا تكررت هذه النوبات، نتحدث عن اضطراب الهلع. العلاج السلوكي المعرفي فعال للغاية في علاج هذا الاضطراب من خلال إزالة الخوف الشرطي من الأعراض نفسها.`
    },
    tags: [
      { fr: "Anxiété", ar: "قلق" },
      { fr: "Urgence", ar: "طوارئ" },
      { fr: "Conseils", ar: "نصائح" }
    ],
    image: "https://picsum.photos/800/400?random=4"
  },
  {
    id: 5,
    title: { fr: "Les Mythes sur les Médicaments Psychiatriques", ar: "خرافات حول الأدوية النفسية" },
    excerpt: { fr: "On entend tout et son contraire sur les psychotropes. Démêlons le vrai du faux.", ar: "نسمع الكثير من المعلومات المتناقضة حول الأدوية النفسية. لنفصل الحقيقة عن الخيال." },
    date: { fr: "20 Juillet 2023", ar: "20 جويلية 2023" },
    content: {
      fr: `Il existe une grande méfiance envers les médicaments psychiatriques. Pourtant, lorsqu'ils sont bien prescrits, ils sauvent des vies et améliorent considérablement la qualité de vie.
      
      Mythe 1 : "Les antidépresseurs rendent accro."
      FAUX. Contrairement aux anxiolytiques (benzodiazépines) qui peuvent créer une dépendance s'ils sont pris longtemps, les antidépresseurs ne créent pas d'addiction physique. On ne ressent pas de "manque" violent nécessitant d'augmenter la dose pour avoir le même effet. L'arrêt doit être progressif pour éviter un syndrome de discontinuation, mais ce n'est pas une addiction.
      
      Mythe 2 : "Les médicaments changent la personnalité."
      FAUX. Le but du traitement est de restaurer votre personnalité, celle qui a été étouffée par la maladie (dépression, anxiété). Les patients disent souvent "Je me sens enfin redevenu moi-même". Si vous vous sentez "zombie", c'est que le dosage ou la molécule n'est pas adapté.
      
      Mythe 3 : "C'est une solution de facilité."
      FAUX. Prendre un traitement demande du courage. C'est un outil qui permet souvent de rendre la psychothérapie possible. C'est comme une béquille pour une jambe cassée : elle aide à marcher pendant que l'os se ressoude.`,
      ar: `هناك توجس كبير تجاه الأدوية النفسية. ومع ذلك، عندما توصف بشكل صحيح، فإنها تنقذ الأرواح وتحسن نوعية الحياة بشكل كبير.

      خرافة 1: "مضادات الاكتئاب تسبب الإدمان."
      خطأ. على عكس مزيلات القلق (البنزوديازيبينات) التي قد تسبب الإدمان إذا أخذت لفترة طويلة، فإن مضادات الاكتئاب لا تسبب إدمانًا جسديًا. لا يشعر المريض بـ "نقص" عنيف يتطلب زيادة الجرعة للحصول على نفس التأثير. يجب أن يكون التوقف تدريجيًا لتجنب أعراض الانسحاب، لكنه ليس إدمانًا.

      خرافة 2: "الأدوية تغير الشخصية."
      خطأ. الهدف من العلاج هو استعادة شخصيتك، تلك التي خنقتها الأمراض (الاكتئاب، القلق). يقول المرضى غالبًا "أشعر أخيرًا أنني عدت لنفسي". إذا شعرت بأنك "زومبي"، فهذا يعني أن الجرعة أو الدواء غير مناسب.

      خرافة 3: "إنه حل سهل."
      خطأ. تناول العلاج يتطلب شجاعة. إنه أداة تجعل العلاج النفسي ممكنًا غالبًا. إنه مثل العكاز للساق المكسورة: يساعد على المشي بينما يلتئم العظم.`
    },
    tags: [
      { fr: "Médicaments", ar: "أدوية" },
      { fr: "Éducation", ar: "تثقيف" },
      { fr: "Santé", ar: "صحة" }
    ],
    image: "https://picsum.photos/800/400?random=5"
  },
  {
    id: 6,
    title: { fr: "L'Hygiène du Sommeil : Clé de la santé mentale", ar: "نظافة النوم: مفتاح الصحة العقلية" },
    excerpt: { fr: "Bien dormir ne s'improvise pas. Découvrez les règles d'or pour retrouver des nuits réparatrices.", ar: "النوم الجيد لا يأتي صدفة. اكتشف القواعد الذهبية لاستعادة ليالٍ مريحة." },
    date: { fr: "12 Juin 2023", ar: "12 جوان 2023" },
    content: {
      fr: `Le sommeil est le pilier de notre santé mentale. Un manque de sommeil chronique augmente les risques d'anxiété, de dépression et d'irritabilité. L'hygiène du sommeil désigne l'ensemble des habitudes qui favorisent un bon endormissement.
      
      Voici les règles fondamentales :
      1. La régularité : Le cerveau adore les routines. Couchez-vous et levez-vous à la même heure tous les jours, même le week-end. Cela synchronise votre horloge biologique.
      2. L'environnement : Votre chambre doit être un sanctuaire. Obscurité totale, silence, température fraîche (environ 18-19°C).
      3. La déconnexion : La lumière bleue des écrans (téléphone, PC) bloque la sécrétion de mélatonine, l'hormone du sommeil. Arrêtez les écrans au moins 1h avant de dormir.
      4. L'association lit-sommeil : Le lit ne doit servir qu'à dormir et à l'intimité. Pas de travail, pas de télé, pas de repas au lit. Si vous ne dormez pas après 20 minutes, levez-vous et faites une activité calme ailleurs jusqu'à ce que la fatigue revienne.
      
      Si les troubles persistent malgré ces mesures, il peut s'agir d'une insomnie psychophysiologique qui se traite très bien par TCC spécifique à l'insomnie.`,
      ar: `النوم هو ركيزة صحتنا العقلية. نقص النوم المزمن يزيد من مخاطر القلق، الاكتئاب، وسرعة الانفعال. نظافة النوم تشير إلى مجموعة العادات التي تعزز النوم الجيد.

      إليك القواعد الأساسية:
      1. الانتظام: الدماغ يعشق الروتين. اذهب للنوم واستيقظ في نفس الوقت كل يوم، حتى في عطلات نهاية الأسبوع. هذا يضبط ساعتك البيولوجية.
      2. البيئة: يجب أن تكون غرفتك ملاذًا. ظلام دامس، هدوء، ودرجة حرارة معتدلة (حوالي 18-19 درجة مئوية).
      3. الانفصال: الضوء الأزرق للشاشات (الهاتف، الكمبيوتر) يمنع إفراز الميلاتونين، هرمون النوم. توقف عن استخدام الشاشات قبل ساعة على الأقل من النوم.
      4. ارتباط السرير بالنوم: السرير يجب أن يستخدم للنوم والعلاقة الحميمة فقط. لا عمل، لا تلفاز، لا أكل في السرير. إذا لم تنم بعد 20 دقيقة، انهض وقم بنشاط هادئ في مكان آخر حتى يعود النعاس.

      إذا استمرت الاضطرابات رغم هذه التدابير، فقد يكون أرقًا نفسيًا فيسيولوجيًا، وهو يعالج جيدًا بالعلاج السلوكي المعرفي الخاص بالأرق.`
    },
    tags: [
      { fr: "Sommeil", ar: "نوم" },
      { fr: "Bien-être", ar: "رفاهية" },
      { fr: "Conseils", ar: "نصائح" }
    ],
    image: "https://picsum.photos/800/400?random=6"
  },
  {
    id: 7,
    title: { fr: "TOC : Quand les rituels deviennent prison", ar: "الوسواس القهري: عندما تصبح الطقوس سجناً" },
    excerpt: { fr: "Vérifier la porte 10 fois, se laver les mains à l'excès... Le TOC est une maladie invalidante mais traitable.", ar: "التحقق من الباب 10 مرات، غسل اليدين بإفراط... الوسواس القهري مرض معيق ولكنه قابل للعلاج." },
    date: { fr: "28 Mai 2023", ar: "28 ماي 2023" },
    content: {
      fr: `Le Trouble Obsessionnel Compulsif (TOC) se caractérise par deux composantes : les obsessions et les compulsions.
      
      Les obsessions sont des pensées, images ou impulsions intrusives qui reviennent sans cesse et provoquent une anxiété majeure. Exemples : peur de la contamination, peur d'avoir oublié le gaz, peur de faire du mal à quelqu'un.
      
      Les compulsions sont des comportements répétitifs ou des actes mentaux que la personne se sent obligée d'accomplir pour neutraliser l'anxiété de l'obsession. Exemples : se laver les mains jusqu'au sang, vérifier les serrures, compter, répéter des phrases.
      
      Le problème est que la compulsion ne soulage l'anxiété que temporairement. Très vite, l'obsession revient, et il faut refaire le rituel. C'est un cercle vicieux infernal qui peut prendre des heures chaque jour.
      
      Le traitement de référence est la TCC avec exposition et prévention de la réponse (EPR). On apprend au patient à affronter ses peurs (toucher un objet "sale") sans faire le rituel (ne pas se laver les mains tout de suite). L'anxiété monte, puis finit par redescendre naturellement. C'est ainsi que le cerveau apprend qu'il n'y a pas de danger réel.`,
      ar: `يتميز اضطراب الوسواس القهري (TOC) بمكونين: الوساوس والأفعال القهرية.

      الوساوس هي أفكار، صور، أو دوافع تطفلية تعود باستمرار وتسبب قلقًا كبيرًا. أمثلة: الخوف من التلوث، الخوف من نسيان الغاز، الخوف من إيذاء شخص ما.

      الأفعال القهرية هي سلوكيات متكررة أو أفعال عقلية يشعر الشخص بأنه مجبر على القيام بها لتحييد قلق الوسواس. أمثلة: غسل اليدين حتى النزيف، التحقق من الأقفال، العد، تكرار جمل معينة.

      المشكلة هي أن الفعل القهري يخفف القلق مؤقتًا فقط. وسرعان ما يعود الوسواس، ويجب إعادة الطقوس. إنها حلقة مفرغة جحيمية قد تستغرق ساعات كل يوم.

      العلاج المرجعي هو العلاج السلوكي المعرفي مع التعرض ومنع الاستجابة (EPR). نتعلم كيفية مواجهة المخاوف (لمس شيء "قذر") دون القيام بالطقوس (عدم غسل اليدين فورًا). يرتفع القلق، ثم ينخفض طبيعيًا في النهاية. هكذا يتعلم الدماغ أنه لا يوجد خطر حقيقي.`
    },
    tags: [
      { fr: "TOC", ar: "وسواس قهري" },
      { fr: "Anxiété", ar: "قلق" },
      { fr: "Psychiatrie", ar: "طب نفسي" }
    ],
    image: "https://picsum.photos/800/400?random=7"
  },
  {
    id: 8,
    title: { fr: "La Confiance en Soi : Ça se construit", ar: "الثقة بالنفس: إنها تبنى" },
    excerpt: { fr: "La confiance en soi n'est pas innée. C'est une compétence qui s'apprend par l'action.", ar: "الثقة بالنفس ليست فطرية. إنها مهارة تُكتسب من خلال العمل." },
    date: { fr: "14 Avril 2023", ar: "14 أفريل 2023" },
    content: {
      fr: `Beaucoup de patients attendent d'avoir confiance en eux avant d'agir. "Je postulerai à ce travail quand je serai sûr de moi". C'est une erreur fondamentale. La confiance en soi est la conséquence de l'action, pas la cause.
      
      Le cycle de la confiance fonctionne ainsi :
      1. On ose faire une petite action malgré la peur (courage).
      2. On constate qu'on a survécu, même si ce n'était pas parfait (expérience).
      3. On gagne en compétence (apprentissage).
      4. La confiance augmente pour la prochaine fois.
      
      L'estime de soi (s'aimer soi-même) et la confiance en soi (croire en ses capacités) sont souvent fragilisées par notre critique intérieur. Cette petite voix qui dit "Tu es nul", "Tu vas échouer". En thérapie, on apprend à repérer cette voix et à la remettre en question.
      
      Pour booster votre confiance : fixez-vous des objectifs réalistes et progressifs. Sortez de votre zone de confort par petits pas. Acceptez l'échec comme une partie normale de l'apprentissage, et non comme une preuve de votre incompétence.`,
      ar: `ينتظر الكثير من المرضى أن تكون لديهم ثقة بأنفسهم قبل التصرف. "سأتقدم لهذه الوظيفة عندما أكون واثقًا من نفسي". هذا خطأ جوهري. الثقة بالنفس هي نتيجة العمل، وليست سببه.

      تعمل دورة الثقة كالتالي:
      1. نجرؤ على القيام بعمل صغير رغم الخوف (شجاعة).
      2. نلاحظ أننا نجونا، حتى لو لم يكن الأمر مثاليًا (تجربة).
      3. نكتسب مهارة (تعلم).
      4. تزداد الثقة للمرة القادمة.

      تقدير الذات (حب الذات) والثقة بالنفس (الإيمان بالقدرات) غالبًا ما يضعفهما ناقدنا الداخلي. ذلك الصوت الصغير الذي يقول "أنت فاشل"، "ستخفق". في العلاج، نتعلم رصد هذا الصوت والتشكيك فيه.

      لتعزيز ثقتك: حدد أهدافًا واقعية وتدريجية. اخرج من منطقة راحتك بخطوات صغيرة. تقبل الفشل كجزء طبيعي من التعلم، وليس كدليل على عدم كفاءتك.`
    },
    tags: [
      { fr: "Développement", ar: "تطوير الذات" },
      { fr: "Confiance", ar: "ثقة" },
      { fr: "Psychologie", ar: "علم النفس" }
    ],
    image: "https://picsum.photos/800/400?random=8"
  },
  {
    id: 9,
    title: { fr: "Trouble Bipolaire : Au-delà des hauts et des bas", ar: "الاضطراب ثنائي القطب: أبعد من التقلبات" },
    excerpt: { fr: "Ce n'est pas juste changer d'humeur rapidement. C'est une maladie chronique qui nécessite un traitement stabilisateur.", ar: "إنه ليس مجرد تغير سريع في المزاج. إنه مرض مزمن يتطلب علاجاً مثبتاً." },
    date: { fr: "02 Mars 2023", ar: "02 مارس 2023" },
    content: {
      fr: `Le trouble bipolaire (anciennement maniaco-dépression) est une maladie de l'humeur caractérisée par l'alternance d'épisodes dépressifs et d'épisodes d'exaltation de l'humeur (manie ou hypomanie).
      
      En phase maniaque, la personne déborde d'énergie, dort très peu, parle vite, a mille projets, dépense sans compter et peut perdre contact avec la réalité (délires de grandeur). Elle se sent invincibles.
      En phase dépressive, c'est l'effondrement total, avec un risque suicidaire élevé.
      Entre les deux, l'humeur peut être normale (euthymie).
      
      Il existe plusieurs types de troubles bipolaires (Type I, Type II, Cyclothymie) selon l'intensité des phases maniaques.
      
      C'est une maladie largement biologique et génétique. Le traitement médicamenteux par thymorégulateurs (comme le Lithium ou certains antiépileptiques) est la pierre angulaire de la prise en charge pour stabiliser l'humeur sur le long terme. La psychothérapie aide à accepter la maladie, à repérer les signes précurseurs d'une rechute et à maintenir une bonne hygiène de vie (le sommeil est crucial ici).`,
      ar: `الاضطراب ثنائي القطب (سابقًا الهوس الاكتئابي) هو مرض مزاجي يتميز بتناوب نوبات الاكتئاب ونوبات ارتفاع المزاج (الهوس أو الهوس الخفيف).

      في مرحلة الهوس، يفيض الشخص بالطاقة، ينام قليلًا جدًا، يتحدث بسرعة، لديه ألف مشروع، ينفق بلا حساب وقد يفقد الاتصال بالواقع (أوهام العظمة). يشعر بأنه لا يقهر.
      في مرحلة الاكتئاب، يحدث الانهيار التام، مع خطر انتحار مرتفع.
      بين الاثنين، قد يكون المزاج طبيعيًا.

      هناك عدة أنواع من الاضطراب ثنائي القطب (النوع الأول، النوع الثاني، دوروية المزاج) حسب شدة نوبات الهوس.

      إنه مرض بيولوجي وجيني إلى حد كبير. العلاج الدوائي بمثبتات المزاج (مثل الليثيوم أو بعض مضادات الصرع) هو حجر الزاوية في الرعاية لتثبيت المزاج على المدى الطويل. يساعد العلاج النفسي في تقبل المرض، ورصد العلامات المبكرة للانتكاسة، والحفاظ على نمط حياة صحي (النوم حاسم هنا).`
    },
    tags: [
      { fr: "Bipolarité", ar: "ثنائي القطب" },
      { fr: "Humeur", ar: "مزاج" },
      { fr: "Psychiatrie", ar: "طب نفسي" }
    ],
    image: "https://picsum.photos/800/400?random=9"
  },
  {
    id: 10,
    title: { fr: "L'Anxiété Sociale : La peur du jugement", ar: "القلق الاجتماعي: الخوف من الحكم" },
    excerpt: { fr: "Quand la timidité devient paralysante. Comprendre et surmonter la phobie sociale.", ar: "عندما يصبح الخجل مشلاً. فهم وتجاوز الرهاب الاجتماعي." },
    date: { fr: "18 Fevrier 2023", ar: "18 فيفري 2023" },
    content: {
      fr: `L'anxiété sociale (ou phobie sociale) n'est pas juste une grande timidité. C'est une peur intense et persistante d'une ou plusieurs situations sociales où le sujet est exposé à l'éventuelle observation attentive d'autrui. La personne craint d'agir de façon humiliante ou embarrassante.
      
      Les situations redoutées : parler en public, manger devant les autres, entrer dans une pièce où les gens sont déjà assis, parler à des inconnus, ou même simplement être regardé.
      
      Les symptômes sont intenses : rougissement (éreutophobie), tremblements, incapacité à parler, envie de fuir. Pour éviter cette souffrance, la personne commence à éviter ces situations. L'évitement soulage sur le moment, mais renforce la peur à long terme et isole la personne.
      
      La TCC est le traitement de choix. On travaille sur :
      1. Les pensées : "Tout le monde me regarde", "Je vais avoir l'air ridicule". On apprend que les gens sont souvent plus centrés sur eux-mêmes que sur nous.
      2. L'exposition : On s'expose progressivement aux situations sociales, sans utiliser de comportements de sécurité (comme regarder son téléphone pour ne pas croiser les regards).
      3. L'affirmation de soi : Apprendre à communiquer ses besoins.`,
      ar: `القلق الاجتماعي (أو الرهاب الاجتماعي) ليس مجرد خجل كبير. إنه خوف شديد ومستمر من موقف اجتماعي واحد أو أكثر حيث يتعرض الشخص لاحتمال المراقبة الدقيقة من قبل الآخرين. يخشى الشخص التصرف بطريقة مهينة أو محرجة.

      المواقف المخيفة: التحدث أمام الجمهور، الأكل أمام الآخرين، دخول غرفة حيث يجلس الناس بالفعل، التحدث إلى الغرباء، أو حتى مجرد النظر إليه.

      الأعراض شديدة: احمرار الوجه، ارتعاش، عدم القدرة على الكلام، الرغبة في الهروب. لتجنب هذه المعاناة، يبدأ الشخص في تجنب هذه المواقف. التجنب يريح في اللحظة، لكنه يعزز الخوف على المدى الطويل ويعزل الشخص.

      العلاج السلوكي المعرفي هو العلاج المفضل. نعمل على:
      1. الأفكار: "الجميع ينظر إلي"، "سأبدو سخيفًا". نتعلم أن الناس غالبًا ما يركزون على أنفسهم أكثر مما يركزون علينا.
      2. التعرض: نعرض أنفسنا تدريجيًا للمواقف الاجتماعية، دون استخدام سلوكيات الأمان (مثل النظر في الهاتف لتجنب تلاقي الأعين).
      3. توكيد الذات: تعلم توصيل الاحتياجات.`
    },
    tags: [
      { fr: "Social", ar: "اجتماعي" },
      { fr: "Phobie", ar: "رهاب" },
      { fr: "TCC", ar: "علاج سلوكي" }
    ],
    image: "https://picsum.photos/800/400?random=10"
  }
];

export const HORAIRES: ScheduleItem[] = [
  { day: { fr: "Samedi", ar: "السبت" }, hours: { fr: "09:00 - 16:00", ar: "09:00 - 16:00" } },
  { day: { fr: "Dimanche", ar: "الأحد" }, hours: { fr: "09:00 - 16:00", ar: "09:00 - 16:00" } },
  { day: { fr: "Lundi", ar: "الإثنين" }, hours: { fr: "09:00 - 16:00", ar: "09:00 - 16:00" } },
  { day: { fr: "Mardi", ar: "الثلاثاء" }, hours: { fr: "09:00 - 16:00", ar: "09:00 - 16:00" } },
  { day: { fr: "Mercredi", ar: "الأربعاء" }, hours: { fr: "09:00 - 16:00", ar: "09:00 - 16:00" } },
  { day: { fr: "Jeudi", ar: "الخميس" }, hours: { fr: "09:00 - 16:00", ar: "09:00 - 16:00" } },
  { day: { fr: "Vendredi", ar: "الجمعة" }, hours: { fr: "Fermé", ar: "مغلق" } },
];

export const TRANSLATIONS = {
  fr: {
    subtitle: "Médecin Psychiatre - Psychothérapeute",
    consultation: "Consultation sur rendez-vous",
    takeRdv: "Prendre RDV",
    readMore: "Lire la suite",
    readLess: "Lire moins",
    heroTitle1: "Retrouvez votre",
    heroTitle2: "équilibre mental",
    heroDesc: "Cabinet de psychiatrie moderne à Baraki, Alger. Une approche scientifique et bienveillante basée sur les TCC et la médecine intégrative pour surmonter l'anxiété, la dépression et le stress.",
    whatsappBtn: "Prendre RDV sur WhatsApp",
    discoverBtn: "Découvrir mes soins",
    whyConsult: "Pourquoi consulter ?",
    whyTitle: "Une psychiatrie démystifiée et accessible",
    whyDesc: "Prendre soin de sa santé mentale est aussi important que sa santé physique. Je vous accompagne avec des méthodes prouvées.",
    expertiseTitle: "Expertise Scientifique",
    expertiseDesc: "Une double approche médicale et psychothérapeutique (TCC) pour un diagnostic précis.",
    trustTitle: "Espace de Confiance",
    trustDesc: "Un cadre confidentiel, sans jugement et bienveillant à Baraki.",
    personalTitle: "Approche Personnalisée",
    personalDesc: "Nous construisons ensemble une alliance thérapeutique solide.",
    medicalAdviceTitle: "Besoin d'un avis médical ?",
    medicalAdviceDesc: "N'attendez pas que la situation s'aggrave. La première étape est souvent la plus difficile.",
    aboutTitle: "À Propos du Dr Khelifa.K.H",
    aboutSubtitle: "Psychiatre Psychothérapeute à Alger",
    aboutSectionTitle: "Mon Parcours & Ma Vision",
    aboutP1: "Médecin psychiatre installé à Baraki (Alger), je propose une prise en charge moderne de la santé mentale. Mon parcours en médecine générale complété par une spécialisation en psychiatrie me permet d'avoir une vision globale de la santé de mes patients.",
    aboutP2: "Je suis particulièrement formé aux Thérapies Cognitivo-Comportementales (TCC). Cette approche, validée par de nombreuses études internationales, vise à donner aux patients des outils concrets pour comprendre et modifier les pensées et comportements qui génèrent de la souffrance.",
    aboutP3: "Ma philosophie de soin repose sur une approche intégrative : je combine, lorsque c'est nécessaire, la psychothérapie et un traitement médicamenteux raisonné.",
    formationTitle: "Formation Médicale Solide",
    formationDesc: "Docteur en Médecine, Spécialiste en Psychiatrie.",
    therapyTitle: "Thérapies Validées",
    therapyDesc: "Praticien TCC (Thérapie Cognitivo-Comportementale) et approche scientifique.",
    allianceTitle: "Alliance Thérapeutique",
    allianceDesc: "Une collaboration active entre le médecin et le patient.",
    servicesTitle: "Mes Domaines d'Expertise",
    servicesSubtitle: "Une prise en charge spécialisée pour l'adulte, centrée sur les troubles anxieux, de l'humeur et l'épuisement.",
    processTitle: "Déroulement d'une Consultation",
    processStep1Title: "L'Évaluation",
    processStep1Desc: "Le premier entretien permet de faire connaissance, de comprendre votre histoire et de poser un diagnostic précis.",
    processStep2Title: "Le Plan de Soin",
    processStep2Desc: "Nous définissons ensemble les objectifs thérapeutiques : psychothérapie TCC, conseils hygiéno-diététiques et/ou traitement.",
    processStep3Title: "Le Suivi",
    processStep3Desc: "Des consultations régulières pour évaluer les progrès, ajuster le traitement et consolider votre rétablissement.",
    blogTitle: "Blog & Ressources",
    blogSubtitle: "Informations fiables sur la psychiatrie, la psychologie et le bien-être mental.",
    contactTitle: "Contact & Accès",
    contactSubtitle: "Cabinet de Psychiatrie à Baraki, Alger.",
    coordsTitle: "Coordonnées",
    addressLabel: "Adresse",
    mapsLabel: "Voir sur Google Maps",
    phoneLabel: "Téléphone",
    phoneNote: "Prise de rendez-vous prioritaire via WhatsApp.",
    scheduleTitle: "Horaires de Consultation",
    scheduleNote: "Consultations sur rendez-vous uniquement.",
    locationTitle: "Localisation du Cabinet",
    gpsBtn: "Ouvrir la navigation GPS",
    footerDesc: "Psychiatre à Baraki, Alger. Spécialiste en Thérapie Cognitivo-Comportementale (TCC) et approche intégrative.",
    footerLinks: "Liens Rapides",
    footerContact: "Contact",
    footerRights: "Tous droits réservés.",
    imageQuote: "\"Comprendre pour mieux guérir.\"",
    // Form Translations
    formTitle: "Demande de Rendez-vous Rapide",
    formSubtitle: "Remplissez ce formulaire pour pré-remplir votre message WhatsApp.",
    formNameLabel: "Nom Complet",
    formNamePlaceholder: "Votre nom complet",
    formPhoneLabel: "Téléphone",
    formPhonePlaceholder: "Votre numéro de téléphone",
    formDateLabel: "Date Souhaitée",
    formDatePlaceholder: "Date souhaitée",
    formReasonLabel: "Motif",
    formReasonPlaceholder: "Motif de consultation (bref)",
    formSubmit: "Envoyer sur WhatsApp",
    // Tips Page
    tipsTitle: "100 Conseils Utiles",
    tipsSubtitle: "Des petits gestes quotidiens pour améliorer votre santé mentale.",
    tipsCategoryAll: "Tous",
    tipsCategoryGeneral: "Bien-être Général",
    tipsCategoryStress: "Stress & Anxiété",
    tipsCategorySleep: "Sommeil",
    tipsCategorySocial: "Relations",
    tipsCategoryHabits: "Habitudes de Vie"
  },
  ar: {
    subtitle: "طبيب نفسي - معالج نفسي",
    consultation: "الاستشارة بموعد",
    takeRdv: "حجز موعد",
    readMore: "اقرأ المزيد",
    readLess: "إقرأ أقل",
    heroTitle1: "استعد توازنك",
    heroTitle2: "النفسي والذهني",
    heroDesc: "عيادة الطب النفسي الحديثة في براقي، الجزائر العاصمة. نهج علمي وإنساني يعتمد على العلاج السلوكي المعرفي والطب التكاملي للتغلب على القلق والاكتئاب والتوتر.",
    whatsappBtn: "حجز موعد عبر واتساب",
    discoverBtn: "اكتشف خدماتي",
    whyConsult: "لماذا تزور الطبيب النفسي؟",
    whyTitle: "طب نفسي حديث ومتاح للجميع",
    whyDesc: "العناية بصحتك النفسية لا تقل أهمية عن صحتك الجسدية. أرافقك بأساليب علاجية مثبتة.",
    expertiseTitle: "خبرة علمية",
    expertiseDesc: "مقاربة مزدوجة تجمع بين الطب والعلاج النفسي (TCC) لتشخيص دقيق.",
    trustTitle: "مساحة ثقة",
    trustDesc: "إطار سري، بدون أحكام ومرحب في براقي.",
    personalTitle: "نهج شخصي",
    personalDesc: "نبني معًا تحالفًا علاجيًا قويًا للتقدم حسب وتيرتك.",
    medicalAdviceTitle: "بحاجة لرأي طبي؟",
    medicalAdviceDesc: "لا تنتظر حتى يتفاقم الوضع. الخطوة الأولى غالبًا ما تكون الأصعب.",
    aboutTitle: "عن الدكتور خليفة ك.هـ",
    aboutSubtitle: "طبيب نفسي ومعالج نفسي في الجزائر",
    aboutSectionTitle: "مساري ورؤيتي",
    aboutP1: "طبيب نفسي في براقي (الجزائر العاصمة)، أقدم رعاية حديثة للصحة النفسية. مساري في الطب العام وتخصصي في الطب النفسي يسمح لي بامتلاك رؤية شاملة لصحة مرضاي.",
    aboutP2: "أنا مختص بشكل خاص في العلاجات السلوكية المعرفية (TCC). يهدف هذا النهج، المثبت علميًا، إلى منح المرضى أدوات ملموسة لفهم وتعديل الأفكار والسلوكيات التي تسبب المعاناة.",
    aboutP3: "فلسفتي في العلاج تعتمد على نهج تكاملي: أجمع، عند الضرورة، بين العلاج النفسي والعلاج الدوائي المدروس.",
    formationTitle: "تكوين طبي رصين",
    formationDesc: "دكتور في الطب، مختص في الأمراض العقلية.",
    therapyTitle: "علاجات مثبتة",
    therapyDesc: "ممارس للعلاج السلوكي المعرفي (TCC) ومنهج علمي.",
    allianceTitle: "التحالف العلاجي",
    allianceDesc: "تعاون فعال بين الطبيب والمريض.",
    servicesTitle: "مجالات خبرتي",
    servicesSubtitle: "رعاية متخصصة للبالغين، تركز على اضطرابات القلق، المزاج والإرهاق.",
    processTitle: "كيف تجري الاستشارة؟",
    processStep1Title: "التقييم",
    processStep1Desc: "المقابلة الأولى تسمح بالتعارف، فهم تاريخك ووضع تشخيص دقيق.",
    processStep2Title: "خطة العلاج",
    processStep2Desc: "نحدد معًا الأهداف العلاجية: علاج نفسي، نصائح حياتية و/أو علاج دوائي.",
    processStep3Title: "المتابعة",
    processStep3Desc: "استشارات منتظمة لتقييم التقدم، تعديل العلاج وتثبيت التعافي.",
    blogTitle: "المقالات والموارد",
    blogSubtitle: "معلومات موثوقة حول الطب النفسي، علم النفس والرفاهية العقلية.",
    contactTitle: "الاتصال والوصول",
    contactSubtitle: "عيادة الطب النفسي في براقي، الجزائر العاصمة.",
    coordsTitle: "معلومات الاتصال",
    addressLabel: "العنوان",
    mapsLabel: "عرض على خرائط جوجل",
    phoneLabel: "الهاتف",
    phoneNote: "حجز المواعيد يفضل أن يكون عبر واتساب.",
    scheduleTitle: "ساعات العمل",
    scheduleNote: "الاستشارات تتم بموعد مسبق فقط.",
    locationTitle: "موقع العيادة",
    gpsBtn: "فتح نظام الملاحة GPS",
    footerDesc: "طبيب نفسي في براقي، الجزائر العاصمة. مختص في العلاج السلوكي المعرفي (TCC) والنهج التكاملي.",
    footerLinks: "روابط سريعة",
    footerContact: "اتصل بنا",
    footerRights: "جميع الحقوق محفوظة.",
    imageQuote: "\"الفهم هو بداية الشفاء.\"",
    // Form Translations
    formTitle: "طلب موعد سريع",
    formSubtitle: "املأ هذا النموذج لتحضير رسالتك على واتساب.",
    formNameLabel: "الاسم الكامل",
    formNamePlaceholder: "الاسم الكامل",
    formPhoneLabel: "الهاتف",
    formPhonePlaceholder: "رقم الهاتف",
    formDateLabel: "التاريخ المفضل",
    formDatePlaceholder: "التاريخ المفضل",
    formReasonLabel: "السبب",
    formReasonPlaceholder: "سبب الزيارة (باختصار)",
    formSubmit: "إرسال عبر واتساب",
    // Tips Page
    tipsTitle: "100 نصيحة مفيدة",
    tipsSubtitle: "خطوات يومية صغيرة لتحسين صحتك النفسية.",
    tipsCategoryAll: "الكل",
    tipsCategoryGeneral: "رفاهية عامة",
    tipsCategoryStress: "توتر وقلق",
    tipsCategorySleep: "نوم",
    tipsCategorySocial: "علاقات",
    tipsCategoryHabits: "عادات الحياة"
  }
};