import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
  fa: {
    translation: {
      navBar: {
        home: "خانه",
        about: "درباره ما",
        contact: "تماس با ما",
        subscription: "اشتراک",
        billing: "صورتحساب",

        services: {
          title: "خدمات",
          telegramDashboard: "داشبورد ربات تلگرام",
          copyTradingDashboard: "داشبورد کپی تریدینگ",
          discountPremiumDashboard: "داشبورد Discount Premium",
          adminFinance: "امور مالی ادمین",
        },
      },

      language: {
        persian: "فارسی",
        english: "English",
      },

      user: {
        member: "عضو",
      },
      home: {
        // Hero
        professionalCopyTradingSignals: "کپی تریدینگ و سیگنال‌های حرفه‌ای",
        tradeSmarter: "هوشمندانه معامله کنید.",
        growConsistently: "به‌صورت پیوسته رشد کنید.",
        heroDescription:
          "از بیش از ۷ سال تجربه واقعی در بازارهای فارکس و ارزهای دیجیتال بهره‌مند شوید. یاد بگیرید، تحلیل کنید و با استفاده از استراتژی‌های ساختاریافته، عادت‌های معاملاتی بهتری ایجاد کنید.",
        getStartedNow: "همین حالا شروع کنید",
        learnMore: "بیشتر بدانید",
        secureTransparent: "امن و شفاف",
        trustedByTraders: "مورد اعتماد بیش از ۱۰۰۰ معامله‌گر",

        // About Academy
        aboutAmiriFinanceAcademy: "درباره آکادمی مالی امیری",
        turningMarketExperience: "تبدیل تجربه بازار",
        intoYourSuccess: "به موفقیت شما",
        aboutDescription:
          "آکادمی مالی امیری تحت مدیریت آقای ابراهیم امیری، معامله‌گر حرفه‌ای و تحلیل‌گر بازار، با بیش از ۷ سال تجربه عملی در بازارهای فارکس و ارزهای دیجیتال فعالیت می‌کند.",
        aboutMission:
          "ماموریت ما ساده است: با ارائه استراتژی‌های اثبات‌شده، ابزارهای پیشرفته و منابع آموزشی ساختاریافته، مسیر یادگیری و معامله‌گری شما را کوتاه‌تر کنیم.",

        sevenPlusYears: "بیش از ۷ سال",
        tradingExperience: "تجربه معاملاتی",
        forexCrypto: "فارکس و کریپتو",
        specialist: "متخصص",
        trustedBrokers: "بروکرهای معتبر",
        partnerships: "همکاری‌ها",
        riskManagement: "مدیریت ریسک",
        focused: "تمرکز بر مدیریت ریسک",
        years: "سال",
        experience: "تجربه",
        aboutAcademyImageAlt: "درباره آکادمی",

        // Features
        ourServices: "خدمات ما",
        professionalSolutionsFor: "راهکارهای حرفه‌ای برای",
        smartTraders: "معامله‌گران هوشمند",

        copyTrading: "کپی تریدینگ",
        copyTradingDescription:
          "استراتژی‌های معاملاتی انتخاب‌شده را به‌صورت خودکار و لحظه‌ای کپی کنید و از فعالیت‌های ساختاریافته بازار یاد بگیرید.",

        tradingSignals: "سیگنال‌های معاملاتی",
        tradingSignalsDescription:
          "بینش‌های بازار و ایده‌های آموزشی معاملاتی را بر اساس تحلیل تکنیکال و فاندامنتال دریافت کنید.",

        riskManagementService: "مدیریت ریسک",
        riskManagementDescription:
          "استراتژی‌های حرفه‌ای کنترل ریسک برای کمک به کاربران در درک حجم معاملات و میزان ریسک و سرمایه درگیر.",

        accountSupport: "پشتیبانی حساب",
        accountSupportDescription:
          "راهنمایی برای اتصال حساب، راه‌اندازی پلتفرم و مدیریت خدمات.",

        // Stats
        yearsOf: "سال",
        happy: "راضی",
        traders: "معامله‌گر",
        managedTrading: "حجم معاملات",
        volume: "مدیریت‌شده",
        customer: "پشتیبانی",
        support: "مشتری",
        // How It Works
        howCopyTradingWorks: "کپی تریدینگ چگونه کار می‌کند",
        simpleStepsToStart: "مراحل ساده برای شروع",
        learning: "یادگیری",

        createAnAccount: "ایجاد حساب کاربری",
        createAccountDescription: "ثبت‌نام کنید و حساب شخصی خود را ایجاد کنید.",

        connectYourBroker: "اتصال بروکر",
        connectBrokerDescription:
          "حساب بروکر یا صرافی خود را به‌صورت امن متصل کنید.",

        chooseAPlan: "انتخاب یک پلن",
        choosePlanDescription:
          "اشتراک یا خدمتی را که برای شما مناسب است انتخاب کنید.",

        startLearning: "شروع یادگیری",
        startLearningDescription:
          "استراتژی‌های بازار را بررسی کنید و سرویس انتخابی خود را دنبال کنید.",

        // Testimonials
        whatOurClientsSay: "مشتریان ما چه می‌گویند",
        trustedByTradersWorldwide: "مورد اعتماد معامله‌گران سراسر جهان",

        jamesTraderRole: "معامله‌گر فارکس",
        jamesTestimonial:
          "ساختار آموزشی به من کمک کرد تا فرآیند بازار را بسیار بهتر درک کنم.",

        sarahInvestorRole: "سرمایه‌گذار کریپتو",
        sarahTestimonial:
          "توضیحات واضح، سیگنال‌های منظم و راهنمایی‌های مفید در زمینه مدیریت ریسک.",

        davidTraderRole: "معامله‌گر تمام‌وقت",
        davidTestimonial:
          "این پلتفرم راهی ساده برای دنبال کردن مسیر یادگیری فراهم می‌کند.",

        // FAQ
        faq: "سؤالات متداول",
        frequentlyAsked: "سؤالات",
        questions: "متداول",
        faqDescription:
          "پاسخ سؤالات رایج درباره آکادمی، آموزش معامله‌گری و خدمات موجود را پیدا کنید.",

        whatIsCopyTrading: "کپی تریدینگ چیست؟",
        whatIsCopyTradingAnswer:
          "کپی تریدینگ سیستمی است که می‌تواند به حساب معاملاتی کاربر اجازه دهد فعالیت‌های معاملاتی انتخاب‌شده را به‌صورت خودکار دنبال کند؛ این موضوع به پلتفرم و تنظیمات سرویس بستگی دارد.",

        isMyMoneyTransferred: "آیا پول من به امیری منتقل می‌شود؟",
        isMyMoneyTransferredAnswer:
          "خیر. وجوه شما باید در حساب شخصی شما نزد بروکر یا صرافی باقی بماند. پیش از اتصال حساب، همیشه مجوزها، مدل امنیتی و شرایط پلتفرم را بررسی کنید.",

        howMuchCapital: "به چه مقدار سرمایه نیاز دارم؟",
        howMuchCapitalAnswer:
          "مقدار مورد نیاز به بروکر، صرافی و سرویس انتخابی بستگی دارد. در بازارهای مالی هیچ سودی تضمین‌شده نیست و کاربران باید فقط ریسک‌هایی را در نظر بگیرند که درک می‌کنند.",

        whichMarketsSupported: "کدام بازارها پشتیبانی می‌شوند؟",
        whichMarketsSupportedAnswer:
          "این پلتفرم بر محتوای آموزشی و خدمات مرتبط با بازارهای فارکس و ارزهای دیجیتال تمرکز دارد.",

        doINeedTechnicalKnowledge: "آیا به دانش فنی نیاز دارم؟",
        doINeedTechnicalKnowledgeAnswer:
          "فرآیند اتصال به‌گونه‌ای طراحی شده است که ساده باشد و پشتیبانی می‌تواند کاربران را در مراحل راه‌اندازی موجود راهنمایی کند.",

        isProfitGuaranteed: "آیا سود تضمین می‌شود؟",
        isProfitGuaranteedAnswer:
          "خیر. بازارهای مالی دارای ریسک هستند و هیچ استراتژی معاملاتی نمی‌تواند سود ثابت را تضمین کند.",

        // CTA
        readyToStartTradingJourney: "آماده‌اید مسیر معاملاتی خود را شروع کنید؟",
        ctaDescription:
          "منابع آموزشی ما را بررسی کنید و با رویکردی ساختاریافته‌تر برای یادگیری درباره بازارهای مالی آشنا شوید.",
        joinNow: "همین حالا بپیوندید",
      },
      about: {
        // AboutHero
        aboutAmiriFinanceAcademy: "درباره آکادمی مالی امیری",
        experienceThat: "تجربه‌ای که",
        movesWithTheMarket: "با بازار حرکت می‌کند",
        heroDescription:
          "آکادمی مالی امیری تحت مدیریت آقای ابراهیم امیری، معامله‌گر حرفه‌ای و تحلیل‌گر بازار، با بیش از ۷ سال تجربه در بازارهای فارکس و ارزهای دیجیتال فعالیت می‌کند.",
        sevenPlusYearsExperience: "بیش از ۷ سال تجربه",
        riskFocused: "تمرکز بر مدیریت ریسک",
        tradingImageAlt: "معاملات آکادمی مالی امیری",

        // AboutStory
        ourStory: "داستان ما",
        turningMarketExperience: "تبدیل تجربه بازار",
        intoASmarterJourney: "به یک مسیر هوشمندانه‌تر",
        storyDescription:
          "آکادمی مالی امیری با هدف کوتاه‌تر کردن مسیر دشوار یادگیری بازارهای مالی ایجاد شد تا سال‌ها تجربه عملی، دانش بازار و استراتژی‌های آزمایش‌شده را در یک پلتفرم گرد هم آورد.",
        experienceDescription:
          "آقای ابراهیم امیری بیش از هفت سال در بازارهای فارکس و ارزهای دیجیتال فعالیت داشته و از طریق شرایط مختلف بازار و استفاده از پلتفرم‌های معاملاتی و ابزارهای تحلیلی مدرن، تجربه کسب کرده است.",

        ourMission: "ماموریت ما",
        missionDescription:
          "ساده‌تر کردن مسیر معامله‌گری از طریق آموزش ساختاریافته، بینش‌های بازار و مدیریت منضبط ریسک.",

        ourApproach: "رویکرد ما",
        approachDescription:
          "ما بر دانش عملی، تصمیم‌گیری مسئولانه و درک ریسک بازار تمرکز داریم، نه وعده دادن نتایج تضمین‌شده.",

        // AboutExpertise
        expertiseAndBackground: "تخصص و پیشینه",
        builtOnMarketExperience: "بناشده بر سال‌ها تجربه بازار",
        expertiseDescription:
          "تجربه عملی، پلتفرم‌های مدرن و مدیریت منضبط ریسک، پایه و اساس رویکرد ما را تشکیل می‌دهند.",

        forexCryptoMarkets: "بازارهای فارکس و کریپتو",
        forexCryptoMarketsDescription:
          "تجربه در بازارهای مالی اصلی، از جمله فارکس و ارزهای دیجیتال.",

        tradingPlatforms: "پلتفرم‌های معاملاتی",
        tradingPlatformsDescription:
          "تجربه عملی با پلتفرم‌هایی مانند Binance و MetaTrader 4 و 5.",

        riskManagement: "مدیریت ریسک",
        riskManagementDescription:
          "رویکردی منضبط برای تعیین حجم معاملات، حفاظت از سرمایه و مدیریت ریسک بازار.",

        // AboutServices
        whatWeOffer: "آنچه ارائه می‌دهیم",
        servicesDesignedAround: "خدماتی طراحی‌شده برای",
        yourTradingJourney: "مسیر معاملاتی شما",
        servicesDescription:
          "پلتفرم ما تجربه عملی بازار را با خدمات مدرنی ترکیب می‌کند که دسترسی به آموزش معامله‌گری، بینش‌های بازار و ابزارهای کپی تریدینگ را آسان‌تر می‌سازند.",

        copyTrading: "کپی تریدینگ",
        copyTradingDescription:
          "استراتژی‌های معاملاتی منتخب را از طریق یک سیستم ساختاریافته کپی تریدینگ دنبال کنید.",

        tradingSignals: "سیگنال‌های معاملاتی",
        tradingSignalsDescription:
          "بینش‌های بازار و ایده‌های آموزشی معاملاتی را بر اساس تحلیل تکنیکال و فاندامنتال دریافت کنید.",

        supportAndGuidance: "پشتیبانی و راهنمایی",
        supportAndGuidanceDescription:
          "تیم پشتیبانی ما در طول فرآیند اتصال حساب و راه‌اندازی خدمات به کاربران کمک می‌کند.",

        // AboutQuote
        quote:
          "بازارهای مالی جای حدس و گمان نیستند. آن‌ها به نظم، آمار، روان‌شناسی بازار و مدیریت مسئولانه ریسک نیاز دارند.",
        ebrahimAmiri: "ابراهیم امیری",
        traderAndMarketAnalyst: "معامله‌گر و تحلیل‌گر بازار",
      },
      contact: {
        // Contact Hero
        contactUs: "تماس با ما",
        contactHeroDescription:
          "ما همیشه آماده پاسخ‌گویی به سؤالات شما و کمک به شروع کار با خدمات معاملاتی خود هستیم.",

        // Contact Info
        phoneNumber: "شماره تلفن",
        telegramSupport: "پشتیبانی تلگرام",
        availableOnTelegram: "در تلگرام در دسترس هستیم",
        directSupport: "پشتیبانی مستقیم",
        emailAddress: "آدرس ایمیل",
        workingHours: "ساعات کاری",
        workingDays: "شنبه تا پنجشنبه",
        workingTime: "۸:۰۰ صبح تا ۵:۰۰ عصر",

        // Contact Form
        sendUsMessage: "پیام خود را برای ما ارسال کنید",
        formDescription:
          "فرم زیر را تکمیل کنید و ما در کوتاه‌ترین زمان با شما تماس خواهیم گرفت.",

        yourName: "نام شما",
        yourEmail: "ایمیل شما",
        subject: "موضوع",
        yourMessage: "پیام شما",

        pleaseEnterName: "لطفاً نام خود را وارد کنید.",
        pleaseEnterEmail: "لطفاً ایمیل خود را وارد کنید.",
        pleaseEnterValidEmail: "لطفاً یک ایمیل معتبر وارد کنید.",
        pleaseEnterSubject: "لطفاً موضوع را وارد کنید.",
        pleaseEnterMessage: "لطفاً پیام خود را وارد کنید.",

        messageSentSuccessfully: "پیام شما با موفقیت ارسال شد.",
        somethingWentWrong: "مشکلی پیش آمد. لطفاً بعداً دوباره تلاش کنید.",

        sending: "در حال ارسال...",
        sendMessage: "ارسال پیام",
        customerSupport: "پشتیبانی مشتریان",

        // Contact FAQ
        lookingForQuickAnswers: "به دنبال پاسخ‌های سریع هستید؟",
        faqDescription:
          "برای یافتن پاسخ سؤالات رایج درباره خدمات ما، بخش سؤالات متداول را بررسی کنید.",
        viewFaq: "مشاهده سؤالات متداول",
      },
      subscription: {
        // Subscription Header
        subscription: "اشتراک",
        manageSubscription:
          "اشتراک خود را مدیریت کنید و حساب معاملاتی خود را فعال نگه دارید.",

        // Current Subscription
        proTrader: "معامله‌گر حرفه‌ای",
        currentPlan: "پلن فعلی",
        active: "فعال",
        fullAccess: "دسترسی کامل به داشبورد معاملاتی و امکانات پلتفرم شما.",
        startDate: "تاریخ شروع",
        expiryDate: "تاریخ انقضا",

        // Subscription Progress
        subscriptionStatus: "وضعیت اشتراک",
        trackRemainingTime: "زمان باقی‌مانده اشتراک خود را پیگیری کنید.",
        daysRemaining: "روز باقی‌مانده",
        daysUsed: "روز استفاده‌شده",
        renewSubscription: "تمدید اشتراک",
        // Subscription Plans
        subscriptionPlans: "پلن‌های اشتراک",
        chooseService: "سرویسی را که می‌خواهید فعال کنید انتخاب کنید.",
        weeklySubscription: "اشتراک هفتگی",
        choose: "انتخاب",

        telegramBot: "ربات تلگرام",
        telegramBotDescription:
          "معاملات خودکار با ربات تلگرام، سیگنال‌های معاملاتی، کنترل ریسک و نظارت بر حساب.",

        telegramTradingBot: "ربات معاملاتی تلگرام",
        tradingSignals: "سیگنال‌های معاملاتی",
        riskControl: "کنترل ریسک",
        accountMonitoring: "نظارت بر حساب",

        week: "/ هفته",
      },
      payment: {
        backToSubscription: "بازگشت به اشتراک",

        title: "پرداخت",

        description: "پرداخت خود را تکمیل کنید تا اشتراک شما فعال شود.",

        paymentMethod: "روش پرداخت",

        selectPaymentMethod: "روش پرداخت مورد نظر خود را انتخاب کنید.",

        cryptocurrencyPayment: "پرداخت با ارز دیجیتال",

        cryptocurrencyDescription:
          "پرداخت خود را با استفاده از ارز دیجیتال به‌صورت امن انجام دهید.",

        pay: "پرداخت",

        paymentVerification:
          "اشتراک شما پس از تأیید موفقیت‌آمیز پرداخت فعال خواهد شد.",

        orderSummary: "خلاصه سفارش",

        total: "مجموع",

        subscription: "اشتراک",

        week: "هفته",

        month: "ماه",

        telegramBot: "ربات تلگرام",

        copyTrading: "کپی تریدینگ",

        telegramDescription:
          "معاملات خودکار با ربات تلگرام، سیگنال‌ها، کنترل ریسک و نظارت بر حساب.",

        copyTradingDescription:
          "دنبال کردن معامله‌گران حرفه‌ای و کپی خودکار استراتژی‌های معاملاتی آن‌ها.",

        telegramFeatures: [
          "ربات معاملاتی تلگرام",
          "سیگنال‌های معاملاتی",
          "کنترل ریسک",
          "نظارت بر حساب",
        ],

        copyTradingFeatures: [
          "معامله‌گران حرفه‌ای",
          "کپی تریدینگ خودکار",
          "پوزیشن‌های فعال",
          "تحلیل پورتفولیو",
        ],
      },
      cryptoPayment: {
        backToPayment: "بازگشت به پرداخت",
        title: "پرداخت با ارز دیجیتال",
        description: "مبلغ دقیق را به آدرس کیف پول زیر ارسال کنید.",
        subscription: "اشتراک",
        amountToPay: "مبلغ قابل پرداخت",
        paymentCode: "کد پرداخت",
        copyPaymentCode: "کپی کد پرداخت",
        paymentInstructions: "راهنمای پرداخت",
        sendExactAmount: "دقیقاً مبلغ",
        sendToAddress: "پرداخت را به آدرس بالا ارسال کنید.",
        activationAfterVerification:
          "اشتراک شما پس از تأیید پرداخت فعال خواهد شد.",
        completedPayment: "پرداخت را انجام داده‌ام",
      },
      billing: {
        synchronizing: "در حال همگام‌سازی دفترکل پرداخت مرکزی رمزگذاری‌شده...",
        noActiveSubscription: "اشتراک فعالی وجود ندارد",

        financialCenter: "مرکز مالی",
        billing: "صورتحساب",
        billingDescription:
          "موجودی حساب، پرداخت‌های ارز دیجیتال و تاریخچه تراکنش‌های خود را در یک مکان مدیریت کنید.",
        addFunds: "افزایش موجودی",

        availableBalance: "موجودی قابل استفاده",
        currentAccountBalance: "موجودی فعلی حساب",

        totalDeposits: "مجموع سپرده‌ها",
        totalFundsDeposited: "مجموع وجوه واریزشده",

        totalPaidFees: "مجموع کارمزدهای پرداخت‌شده",
        totalFeesSubscriptionsPaid: "مجموع کارمزدها و اشتراک‌های پرداخت‌شده",

        accountActivity: "فعالیت حساب",
        netGrowthTrajectoryReturn: "بازده خالص رشد حساب",

        telegramBotPremiumIntegration: "اتصال پریمیوم ربات تلگرام",
        fixedSubscriptionCharge: "هزینه ثابت اشتراک برای سیگنال‌های سازمانی",

        activePlan: "اشتراک فعال",
        expiredInactive: "منقضی / غیرفعال",

        accessExpirationSequence: "تاریخ انقضای دسترسی",
        noActiveLicense: "هیچ مجوز فعالی در دفترکل مرکزی پیدا نشد.",

        renewLicense: "تمدید مجوز",
        activateLicense: "فعال‌سازی مجوز",

        recentTransactions: "تراکنش‌های اخیر",
        latestFinancialActivity: "آخرین فعالیت‌های مالی شما.",
        viewAllTransactions: "مشاهده همه تراکنش‌ها",

        transaction: "تراکنش",
        service: "سرویس",
        date: "تاریخ",
        amount: "مبلغ",
        status: "وضعیت",

        noFinancialActivity: "هنوز هیچ فعالیت مالی برای حساب شما ثبت نشده است.",

        systemLedger: "دفترکل سیستم",

        completed: "تکمیل‌شده",
        failed: "ناموفق",
        pending: "در انتظار",
      },
      wallet: {
        // ...

        backToBilling: "بازگشت به صورتحساب",
        wallet: "کیف پول",
        walletDescription: "USDT را با استفاده از شبکه امن TRC20 واریز کنید.",

        depositUsdt: "واریز USDT",
        depositUsdtDescription:
          "حساب خود را با استفاده از شبکه USDT TRC20 شارژ کنید.",

        depositAmount: "مبلغ واریز",
        enterAmount: "مبلغ را وارد کنید",
        network: "شبکه",
        tronNetwork: "شبکه TRON",

        generatePayment: "ایجاد پرداخت",
        generatingSecuringTicket: "در حال ایجاد درخواست پرداخت...",

        paymentDetails: "جزئیات پرداخت",
        secureCryptocurrencyPayment: "پرداخت امن با ارز دیجیتال.",

        noActiveInvoice: "فاکتور فعالی وجود ندارد",
        noActiveInvoiceDescription:
          "مبلغ را وارد کرده و پرداخت را ایجاد کنید تا اطلاعات کیف پول نمایش داده شود.",

        walletAddress: "آدرس کیف پول",
        copied: "کپی شد!",
        copyAddress: "کپی آدرس",

        amount: "مبلغ",
        invoiceId: "شناسه فاکتور",

        networkWarning:
          "فقط USDT را از طریق شبکه TRC20 ارسال کنید. ارسال وجه از طریق شبکه دیگر ممکن است باعث از دست رفتن وجه شود.",

        blockchainGatewayError:
          "خطای درگاه بلاکچین: ایجاد درخواست پرداخت با مشکل مواجه شد.",
      },
      transactions: {
        backToBilling: "بازگشت به صورتحساب",
        financialHistory: "تاریخچه مالی",
        transactions: "تراکنش‌ها",
        transactionsDescription:
          "واریزها، اشتراک‌ها و تراکنش‌های کپی تریدینگ خود را مشاهده کنید.",

        searchTransactions: "جستجوی تراکنش‌ها...",
        allTypes: "همه انواع",
        deposit: "واریز",
        subscription: "اشتراک",
        copyTrading: "کپی تریدینگ",

        transaction: "تراکنش",
        service: "سرویس",
        date: "تاریخ",
        amount: "مبلغ",
        status: "وضعیت",

        noTransactions: "هیچ تراکنشی مطابق با فیلترهای انتخاب‌شده پیدا نشد.",

        systemAutomatedSettlementLedger: "تسویه خودکار سیستم",

        completed: "تکمیل‌شده",
        failed: "ناموفق",
        pending: "در انتظار",
      },
      adminFinance: {
        backToWebsite: "بازگشت به وب‌سایت",
        administration: "مدیریت",
        financeOverview: "نمای کلی امور مالی",
        financeDescription:
          "درآمد پلتفرم، عملکرد خدمات و پرداختی‌های معامله‌گران مستر را بررسی کنید.",

        synchronizing: "در حال همگام‌سازی اطلاعات کلی دفتر مالی پلتفرم...",

        // Finance Stats
        grossPlatformRevenue: "درآمد ناخالص پلتفرم",
        totalPlatformRevenue: "کل درآمد پلتفرم.",

        telegramBotRevenue: "درآمد ربات تلگرام",
        telegramBotRevenueDescription: "درآمد حاصل از ربات تلگرام.",

        copyTradingRevenue: "درآمد کپی تریدینگ",
        copyTradingRevenueDescription: "درآمد حاصل از کپی تریدینگ.",

        masterTraderPayouts: "پرداختی به معامله‌گران مستر",
        masterTraderPayoutsDescription: "پرداخت‌شده به معامله‌گران مستر.",

        // Revenue Breakdown
        revenueBreakdown: "جزئیات درآمد",
        revenueBreakdownDescription:
          "درآمد پلتفرم و پرداختی‌های معامله‌گران مستر.",

        serviceDetails: "سرویس / جزئیات",
        grossRevenue: "درآمد ناخالص (۲۰٪)",
        traderPayout: "پرداختی معامله‌گر (۱۵٪)",
        netRevenue: "درآمد خالص (۵٪)",

        noRevenue:
          "هنوز هیچ سابقه تسویه درآمدی در دفتر مالی یکپارچه شبکه ثبت نشده است.",

        master: "مستر",
        follower: "فالوور",
      },
      common: {
        checkingAuthentication: "در حال بررسی احراز هویت...",
      },
      auth: {
        // کلیدهای قبلی auth را نگه دار
        login: "ورود",
        logout: "خروج",
        register: "ثبت‌نام",

        signInToAccount: "وارد حساب کاربری خود شوید",
        signInToAccess: "برای دسترسی به حساب کاربری خود وارد شوید.",
        emailOrMobile: "ایمیل یا شماره موبایل",
        enterEmailOrMobile: "ایمیل یا شماره موبایل خود را وارد کنید",
        password: "رمز عبور",
        enterPassword: "رمز عبور خود را وارد کنید",
        signingIn: "در حال ورود...",
        signIn: "ورود",
        orContinueWith: "یا ادامه دهید با",
        noAccount: "حساب کاربری ندارید؟",
        signUp: "ثبت‌نام",
        loginSuccess: "ورود با موفقیت انجام شد.",
        invalidCredentials: "اطلاعات ورود نادرست است یا سرور پاسخ نمی‌دهد.",
        continueWithGoogle: "ادامه با Google",
      },
      loginBenefits: {
        welcome: "به آکادمی مالی امیری خوش آمدید",
        welcomeDescription:
          "برای دسترسی به ابزارهای حرفه‌ای، سیگنال‌های معاملاتی، دوره‌های آموزشی و امکانات ویژه وارد حساب خود شوید.",

        accurateSignals: "سیگنال‌های دقیق و به‌روز",
        accurateSignalsDescription:
          "سیگنال‌های روزانه همراه با تحلیل تکنیکال و بینش‌های کاربردی بازار دریافت کنید.",

        educationalCourses: "دوره‌های آموزشی تخصصی",
        educationalCoursesDescription:
          "به دوره‌های آموزشی از سطح مبتدی تا پیشرفته به زبان فارسی دسترسی داشته باشید.",

        riskManagement: "مدیریت حرفه‌ای ریسک",
        riskManagementDescription:
          "از ابزارهای مدیریت سرمایه و کنترل احساسات برای معاملات منظم و پایدار استفاده کنید.",
      },
      register: {
        home: "خانه",
        title: "ایجاد حساب کاربری",
        description:
          "حساب خود را ایجاد کنید و همین امروز سفر معاملاتی خود را آغاز کنید.",

        formTitle: "ایجاد حساب کاربری",
        formSubtitle: "سفر معاملاتی خود را از امروز آغاز کنید.",

        fullName: "نام کامل",
        fullNamePlaceholder: "نام کامل خود را وارد کنید",

        lastName: "نام خانوادگی",
        lastNamePlaceholder: "نام خانوادگی خود را وارد کنید",

        email: "ایمیل",
        emailPlaceholder: "ایمیل خود را وارد کنید",

        password: "رمز عبور",
        passwordPlaceholder: "رمز عبور خود را وارد کنید",

        confirmPassword: "تأیید رمز عبور",
        confirmPasswordPlaceholder: "رمز عبور خود را دوباره وارد کنید",

        createAccount: "ایجاد حساب",
        creatingAccount: "در حال ایجاد حساب...",

        or: "یا",

        alreadyHaveAccount: "قبلاً حساب کاربری دارید؟",
        signIn: "ورود",

        passwordMismatch: "⚠️ رمزهای عبور با یکدیگر مطابقت ندارند!",

        success:
          "✅ حساب کاربری با موفقیت ایجاد شد! لطفاً برای ورود به حساب خود وارد شوید.",

        registrationRejected: "❌ ثبت‌نام رد شد:",

        networkError:
          "❌ خطای شبکه: امکان برقراری ارتباط با سرویس ثبت‌نام وجود ندارد.",

        benefitsTitle: "چرا در Amiri Finance Academy ثبت‌نام کنیم؟",

        benefitsDescription:
          "به آکادمی ما بپیوندید و دانش معاملاتی خود را با استفاده از منابع آموزشی حرفه‌ای ارتقا دهید.",

        signalsTitle: "سیگنال‌های معاملاتی حرفه‌ای",
        signalsDescription:
          "به سیگنال‌های حرفه‌ای معاملات فارکس و ارزهای دیجیتال دسترسی پیدا کنید.",

        analysisTitle: "تحلیل پیشرفته",
        analysisDescription:
          "با تحلیل‌های دقیق بازار و استراتژی‌های حرفه‌ای یاد بگیرید.",

        riskManagementTitle: "مدیریت ریسک",
        riskManagementDescription:
          "نحوه مدیریت ریسک معاملات و محافظت از سرمایه خود را یاد بگیرید.",

        supportTitle: "پشتیبانی ۲۴/۷",
        supportDescription:
          "تیم پشتیبانی ما هر زمان که به کمک نیاز داشته باشید در دسترس شماست.",
      },
      telegramBotDashboard: {
        synchronizing: "در حال همگام‌سازی اطلاعات...",

        title: "نمای کلی مالی",
        description:
          "ترمینال‌های فعال معاملات کپی و نسبت اجرای دارایی‌های خود را به‌صورت لحظه‌ای بررسی کنید.",

        accountBalanceTitle: "موجودی حساب",
        accountBalanceSubtitle: "موجودی لحظه‌ای MetaTrader 5",

        totalNetProfitTitle: "مجموع سود خالص",
        totalNetProfitSubtitle: "سودهای انباشته معاملات",
        totalNetProfitTrend: "+ سود فعال",

        winRateTitle: "نرخ معاملات موفق",
        winRateSubtitle: "نسبت موفقیت معاملات گذشته",

        availableCapitalTitle: "سرمایه قابل استفاده",
        availableCapitalSubtitle: "ذخیره حاشیه امن حساب",

        portfolioGrowthTitle: "رشد پرتفوی",
        portfolioGrowthDescription: "نمودار عملکرد لحظه‌ای ارزش حساب",
        last7Days: "۷ روز گذشته",
        last30Days: "۳۰ روز گذشته",
        last90Days: "۹۰ روز گذشته",
        calculatingGrowth: "در حال محاسبه رشد حساب...",
        balance: "موجودی",
        dayOne: "روز اول",
        current: "فعلی",

        accountAllocationTitle: "تخصیص حساب",
        portfolio: "پرتفوی",
        total: "مجموع",
        forex: "فارکس",
        crypto: "ارز دیجیتال",
        cash: "نقدینگی",
        calculatingAllocation: "در حال محاسبه تخصیص پرتفوی...",

        brokerConnectionTitle: "اتصال بروکر",
        tradingAccount: "حساب معاملاتی",
        connected: "متصل",
        cloudExecutionActive: "اجرای ابری فعال است",
        disconnected: "قطع شده",
        copyTradePaused: "مسیریابی معاملات کپی متوقف است",
        manageConnection: "مدیریت اتصال",
        checking: "در حال بررسی اتصال...",

        riskControlGaugeTitle: "نشانگر کنترل ریسک",
        currentRisk: "ریسک فعلی",
        currentRiskScale: "مقیاس ریسک فعلی",

        totalRisk: "مجموع ریسک",
        botStatus: "وضعیت ربات",
        active: "فعال",
        inactive: "غیرفعال",

        riskSettingsTitle: "تنظیمات ریسک",
        riskLevel: "سطح ریسک",
        save: "ذخیره",
        update: "به‌روزرسانی",

        emergencyStopTitle: "توقف اضطراری",
        stopBot: "توقف ربات",
        startBot: "فعال‌سازی ربات",
        botActive: "ربات فعال است",
        botInactive: "ربات غیرفعال است",

        activity: "فعالیت",
        recentTradesTitle: "آخرین معاملات",
        viewAll: "مشاهده همه",
        asset: "دارایی",
        type: "نوع",
        size: "حجم",
        result: "نتیجه",
        syncing: "در حال همگام‌سازی سوابق معاملات...",
        noTrades: "هنوز هیچ معامله‌ای توسط ربات اجرا نشده است.",
        riskControlGaugeTitle: "نشانگر کنترل ریسک",
        currentRisk: "ریسک فعلی",
        currentRiskScale: "مقیاس ریسک فعلی",

        // RiskStats
        maxDailyLoss: "حداکثر ضرر روزانه",
        protectionStatus: "وضعیت حفاظت",
        riskAlerts: "هشدارهای ریسک",

        // RiskGauge
        currentRiskLevel: "سطح ریسک فعلی",
        lowRisk: "ریسک پایین",
        moderateRisk: "ریسک متوسط",
        highRisk: "ریسک بالا",

        // RiskSettings
        riskSettingsTitle: "تنظیمات ریسک",
        riskSettingsDescription: "پارامترهای ریسک معاملات خود را تنظیم کنید",
        totalRiskPercent: "مجموع ریسک %",
        firstEntryPercent: "ورود اول %",
        secondEntryPercent: "ورود دوم %",
        tradeVolume: "حجم معامله",
        maxOpenTrades: "حداکثر معاملات باز",
        tradeVolumeRange: "حجم معامله باید بین 0.01 تا 3.00 باشد",
        saving: "در حال ذخیره...",
        saveChanges: "ذخیره تغییرات",

        // RiskSettings alerts
        fillRiskFields: "لطفاً تمام فیلدهای تنظیمات ریسک را تکمیل کنید.",
        combinedRiskError:
          "خطا: مجموع ریسک ورود اول و ورود دوم نمی‌تواند بیشتر از 100٪ موجودی حساب شما باشد.",
        riskSaveSuccess:
          "موفقیت: تنظیمات سفارشی تخصیص ریسک شما با موفقیت ذخیره شد.",
        riskSaveError:
          "خطا: ذخیره تنظیمات انجام نشد. لطفاً اتصال به بک‌اند را بررسی کنید.",

        // EmergencyStop
        emergencyStopTitle: "توقف اضطراری",
        emergencyStopDescription:
          "ربات معاملاتی خود را به‌صورت فوری کنترل کنید.",
        running: "در حال اجرا",
        stopped: "متوقف",
        turnOffBot: "خاموش کردن ربات",
        turnOnBot: "روشن کردن ربات",
      },
      SidebarTelegramBotDashboard: {
        overview: "نمای کلی",
        accountStatus: "وضعیت حساب",
        brokerForm: "اتصال بروکر",
        riskControl: "کنترل ریسک",
        tradeHistory: "تاریخچه معاملات",
        subscription: "اشتراک",

        mainMenu: "منوی اصلی",
        backHome: "بازگشت به خانه",
        user: "کاربر",
        member: "عضو",
        logout: "خروج",
        closeMenu: "بستن منو",
      },
      headerTelegramBotDashboard: {
        // Header
        welcomeBack: "خوش آمدید",
        proTrader: "معامله‌گر حرفه‌ای",
        openMenu: "باز کردن منو",
        notifications: "اعلان‌ها",
        userFallback: "معامله‌گر",
      },
      telegramBotAccountStatus: {
        // Account Status
        synchronizing: "در حال همگام‌سازی اطلاعات حساب...",
        // Account Overview
        accountBalanceTitle: "موجودی حساب",
        currentAccountBalance: "موجودی فعلی حساب",
        totalProfitTitle: "مجموع سود",
        accumulatedGains: "سودهای انباشته",
        totalLossTitle: "مجموع ضرر",
        closedPositionsLoss: "ضرر از معاملات بسته‌شده",
        winRateTitle: "نرخ معاملات موفق",
        historicalWinRate: "نسبت موفقیت معاملات گذشته",
        // Balance Card
        availableBalance: "موجودی قابل استفاده",
        equity: "اکویتی",
        usedMargin: "مارجین استفاده‌شده",
        marginLevelPercent: "درصد سطح مارجین",
        // Trading Statistics
        tradingStatistics: "آمار معاملات",
        totalTrades: "مجموع معاملات",
        winningTrades: "معاملات موفق",
        averageDuration: "میانگین مدت معامله",
        activeTrades: "معاملات فعال",
        // Account Information
        accountInformation: "اطلاعات حساب",
        accountType: "نوع حساب",
        accountId: "شناسه حساب",
        baseCurrency: "ارز پایه",
        riskProfile: "پروفایل ریسک",
        // Account Type
        professionalLive: "حساب حرفه‌ای واقعی",
        demoAccount: "حساب آزمایشی",
        // Account ID
        notLinked: "متصل نشده",
        // Currency
        usd: "دلار آمریکا",
        // Risk
        risk: "ریسک",
        moderate: "متوسط",
        // Fallback Values
        zeroAmount: "$0.00",
        zeroPercent: "0%",
        zeroValue: "0",
        // Duration
        averageDurationValue: "۴ ساعت و ۳۲ دقیقه",
      },
      telegramBotBrokerForm: {
        // Broker Header
        brokerConnection: "اتصال بروکر",
        connectYourBroker: "بروکر خود را متصل کنید",
        connectTradingAccount:
          "حساب معاملاتی خود را متصل کنید تا معاملات خود را مدیریت کرده و پرتفوی خود را از یک مکان نظارت کنید.",
        secureConnection: "اتصال امن",

        // Broker Connection Card
        currentConnection: "اتصال فعلی",
        currentlyConnectedAccount: "حساب معاملاتی متصل فعلی",
        connected: "متصل",
        account: "حساب",
        server: "سرور",
        testConnection: "تست اتصال",
        disconnect: "قطع اتصال",
        lastChecked: "آخرین بررسی چند لحظه پیش",
        loadingConnectionState: "در حال بارگذاری وضعیت اتصال...",
        connectionActive:
          "وضعیت اتصال: فعال و با شبکه گره‌های ابری همگام‌سازی شده است.",
        connectionError: "خطای اتصال: امکان ارتباط با سرور ترمینال وجود ندارد.",
        disconnectConfirmation:
          "آیا مطمئن هستید که می‌خواهید این حساب معاملاتی را قطع کنید؟",
        brokerDeactivated: "حساب بروکر با موفقیت غیرفعال شد.",
        disconnectError: "خطا در قطع اتصال حساب.",

        // Broker Form
        brokerAccount: "حساب بروکر",
        brokerAccountDescription:
          "اطلاعات حساب بروکر خود را وارد کنید تا اتصال برقرار شود.",
        broker: "بروکر",
        loadingVerifiedBrokers: "در حال بارگذاری بروکرهای تأییدشده...",
        other: "سایر",

        accountType: "نوع حساب",
        liveAccount: "حساب واقعی",
        demoAccount: "حساب آزمایشی",

        accountIdLogin: "شناسه حساب / ورود",
        symbol: "نماد",
        password: "رمز عبور",
        enterYourPassword: "رمز عبور خود را وارد کنید",

        showPassword: "نمایش رمز عبور",
        hidePassword: "مخفی کردن رمز عبور",

        apiKey: "کلید API",
        optional: "اختیاری",
        enterApiKeyIfRequired: "در صورت نیاز، کلید API را وارد کنید",

        rememberAccount: "این حساب را به خاطر بسپار",

        connectCloudNode: "در حال اتصال به گره ابری...",
        connectBroker: "اتصال بروکر",

        configurationError:
          "خطای پیکربندی: لطفاً فیلدهای شناسه حساب، سرور و رمز عبور را تکمیل کنید.",
        authenticationSuccessful:
          "احراز هویت موفق بود: ترمینال MT5 شما با موتور ابری اجرای معاملات کپی متصل شد.",
        authenticationRejected:
          "احراز هویت رد شد: اتصال ناموفق بود. اطلاعات ورود و تنظیمات سرور MT5 را بررسی کنید.",

        // Supported Brokers
        supportedBrokers: "بروکرهای پشتیبانی‌شده",
        supportedBrokersDescription:
          "یکی از پلتفرم‌های معاملاتی پشتیبانی‌شده را انتخاب کنید.",
        noBrokersRegistered: "هیچ بروکری در پایگاه داده ثبت نشده است.",
        forexCfd: "فارکس و CFD",
        loadingVerifiedPlatforms: "در حال بارگذاری پلتفرم‌های تأییدشده...",

        // Security Notice
        encryptionActive: "رمزنگاری سرتاسری فعال است",
        securityDescription:
          "رمزهای عبور معاملاتی MT5 شما با استفاده از استانداردهای امنیتی پیشرفته به‌طور کامل رمزنگاری می‌شوند. اطلاعات ورود به‌صورت امن جدا شده و صرفاً از طریق گره‌های ابری اختصاصی برای همگام‌سازی اجرای معاملات کپی پردازش می‌شوند.",
      },
      telegramBotRiskControl: {
        title: "کنترل ریسک",
        description: "محافظت از حساب و ریسک معاملات را مدیریت کنید.",
      },
      telegramBotTradeHistory: {
        badge: "تاریخچه معاملات",
        title: "تاریخچه معاملات",
        description: "معاملات اخیر خود را بررسی و تحلیل کنید.",
        exportHistory: "خروجی تاریخچه",
        exportError:
          "دریافت تاریخچه ناموفق بود. اندپوینت سرور هنوز تنظیم نشده است.",

        totalTrades: "مجموع معاملات",
        winning: "معاملات سودده",
        winRate: "نرخ برد",
        realHistoricalStats: "آمار واقعی معاملات",
        totalProfit: "مجموع سود",
        loss: "زیان",
        tradingVolume: "حجم معاملات",
        lots: "لات",
        accumulatedVolume: "حجم تجمعی معاملات",

        searchPlaceholder: "جستجوی جفت‌ارز...",
        last7Days: "۷ روز گذشته",
        last30Days: "۳۰ روز گذشته",
        last90Days: "۹۰ روز گذشته",
        allTime: "تمام مدت",

        allTypes: "همه انواع",
        buy: "خرید",
        sell: "فروش",

        allStatus: "همه وضعیت‌ها",
        closed: "بسته",
        open: "باز",

        appliedMessage: "فیلترها روی تاریخچه معاملات شما اعمال شده‌اند.",

        recentTrades: "معاملات اخیر",
        latestActivity: "آخرین فعالیت‌های معاملاتی شما",
        totalTradesCount: "مجموع معاملات",
        noTrades: "هیچ معامله‌ای پیدا نشد.",

        pair: "جفت‌ارز",
        type: "نوع",
        volume: "حجم",
        openPrice: "قیمت باز شدن",
        closePrice: "قیمت بسته شدن",
        profitLoss: "سود / زیان",
        status: "وضعیت",
        time: "زمان",

        showing: "نمایش معاملات",
        previous: "صفحه قبلی",
        next: "صفحه بعدی",
      },
      copyTrading: {
        copyTrading: "کپی تریدینگ",
        dashboardTitle: "داشبورد کپی تریدینگ",
        dashboardDescription:
          "تریدرهای حرفه‌ای را پیدا کنید، استراتژی‌های آن‌ها را کپی کنید و عملکرد کپی تریدینگ خود را از یک مکان مدیریت کنید.",
        exploreTraders: "مشاهده تریدرها",

        totalBalance: "موجودی کل",
        copyTradingBalance: "موجودی کپی تریدینگ",
        totalProfit: "مجموع سود",
        activeTraders: "تریدرهای فعال",
        winRate: "نرخ برد",

        copyTradingPerformance: "عملکرد کپی تریدینگ",
        portfolioGrowth: "رشد پرتفوی",
        last30Days: "۳۰ روز گذشته",
        last3Months: "۳ ماه گذشته",
        last6Months: "۶ ماه گذشته",

        copyAllocation: "تخصیص کپی تریدینگ",
        total: "مجموع",

        activeCopyTraders: "تریدرهای فعال کپی",
        noActiveCopyTraders: "هنوز هیچ تریدر اصلی فعالی در حال کپی شدن نیست.",

        viewPerformance: "مشاهده عملکرد",
        copySettings: "تنظیمات کپی",

        investment: "سرمایه‌گذاری",
        profit: "سود",
        return: "بازدهی",
        copyStatus: "وضعیت کپی",
        copyingActive: "کپی فعال است",
        activePositions: "موقعیت‌های فعال",
        positions: "موقعیت",
        copyRatio: "نسبت کپی",
      },
      copyTradingSidebar: {
        overview: "نمای کلی",
        brokerConnections: "اتصال بروکرها",
        myCopyTrades: "معاملات کپی من",
        activePositions: "موقعیت‌های فعال",
        performance: "عملکرد",
        copySettings: "تنظیمات کپی",
        history: "تاریخچه",
        masterEarnings: "درآمد مستر",
        backHome: "بازگشت به خانه",
        logout: "خروج",
        closeSidebar: "بستن منو",
      },
      copyTradingBrokerConnections: {
        brokerConnection: "اتصال بروکر",
        connectYourBroker: "بروکر خود را متصل کنید",
        headerDescription:
          "حساب معاملاتی خود را متصل کنید تا معاملات خود را مدیریت کرده و پرتفوی خود را از یک مکان نظارت کنید.",
        secureConnection: "اتصال امن",

        loadingConnection: "در حال بارگذاری وضعیت اتصال...",
        currentConnection: "اتصال فعلی",
        currentConnectionDescription: "حساب معاملاتی متصل فعلی شما",
        connected: "متصل",
        inactive: "غیرفعال",

        connectionActive: "وضعیت اتصال: فعال و با شبکه کپی ترید همگام است.",
        connectionError: "خطای اتصال: امکان ارتباط با سرور وجود ندارد.",
        testing: "در حال بررسی...",
        testConnection: "بررسی اتصال",

        loginAccount: "حساب ورود",
        server: "سرور",
        symbol: "نماد",

        noBrokerLinked: "هیچ بروکری متصل نیست",
        noBrokerDescription:
          "لطفاً فرم زیر را تکمیل کنید تا حساب شما همگام شود.",

        brokerAccount: "حساب بروکر",
        brokerAccountDescription:
          "مشخصات حساب بروکر خود را وارد کنید تا اتصال برقرار شود.",

        broker: "بروکر",
        loadingBrokers: "در حال بارگذاری بروکرهای تأییدشده...",
        other: "سایر",

        accountType: "نوع حساب",
        liveAccount: "حساب واقعی",
        demoAccount: "حساب آزمایشی",

        accountId: "شناسه حساب / ورود",

        password: "رمز عبور",
        passwordPlaceholder: "رمز عبور خود را وارد کنید",
        togglePassword: "نمایش یا مخفی کردن رمز عبور",

        configurationError:
          "لطفاً فیلدهای شناسه حساب، سرور و رمز عبور را تکمیل کنید.",

        authenticationSuccess:
          "احراز هویت موفق بود: ترمینال MT5 شما به موتور ابری کپی ترید متصل شد.",

        authenticationRejected:
          "احراز هویت رد شد: اتصال برقرار نشد. مشخصات خود را بررسی کنید.",

        connecting: "در حال اتصال...",
        connectBroker: "اتصال بروکر",

        loadingVerifiedBrokers: "در حال بارگذاری بروکرهای تأییدشده...",

        supportedBrokers: "بروکرهای پشتیبانی‌شده",
        supportedBrokersDescription:
          "یکی از پلتفرم‌های معاملاتی پشتیبانی‌شده را انتخاب کنید.",

        noActiveBrokers: "هنوز هیچ بروکر فعالی در سیستم اصلی ثبت نشده است.",

        forexCfdVerified: "فارکس و CFD تأییدشده",

        credentialsSecure: "اطلاعات ورود شما امن است",
        securityDescription:
          "اطلاعات ورود بروکر شما محافظت می‌شود و فقط برای برقراری اتصال با حساب معاملاتی شما استفاده خواهد شد.",
      },
      // fa
      myCopyTrading: {
        // ... کلیدهای قبلی

        myCopyTrades: "معاملات کپی من",
        copyTradingLabel: "کپی تریدینگ",
        myCopyTradesTitle: "معاملات کپی من",
        myCopyTradesDescription:
          "معاملاتی را که از Amiri Pro Trader به حساب معاملاتی متصل شما کپی شده‌اند مشاهده کنید.",
        automaticCopyNotice:
          "این معاملات به‌صورت خودکار از Amiri Pro Trader کپی می‌شوند.",

        loadingCopiedTrades: "در حال بارگذاری معاملات کپی‌شده...",

        totalCopiedTrades: "مجموع معاملات کپی‌شده",
        winningTrades: "معاملات سودده",
        losingTrades: "معاملات زیان‌ده",
        totalProfit: "مجموع سود",

        copiedTradesPortfolio: "پرتفوی و کنترل معاملات کپی‌شده",
        terminalSyncLogs: "گزارش‌های همگام‌سازی لحظه‌ای ترمینال MetaTrader 5.",
        symbol: "نماد",
        type: "نوع",
        volume: "حجم",
        entry: "ورود",
        exit: "خروج",
        pnl: "سود و زیان",
        status: "وضعیت",
        actions: "عملیات",

        noCopiedTrades:
          "هنوز هیچ معامله فعال یا بسته‌شده‌ای از دفتر معاملات ترمینال MT5 شما همگام‌سازی نشده است.",

        buy: "خرید",
        sell: "فروش",
        pause: "توقف",
        start: "شروع",
      },
      copyTradingActivePositions: {
        activePositions: "موقعیت‌های فعال",

        copyTradingActivePositionsTitle: "موقعیت‌های فعال",
        copyTradingActivePositionsDescription:
          "موقعیت‌های باز فعلی خود را که از معامله‌گر حرفه‌ای کپی می‌شوند مشاهده کنید.",
        copyTradingActivePositionsRefresh: "تازه‌سازی",

        copyTradingActivePositionsLoading:
          "در حال دریافت موقعیت‌های فعال از بروکر...",

        copyTradingActivePositionsOpenPositions: "موقعیت‌های باز",
        copyTradingActivePositionsOpenPositionsDescription:
          "موقعیت‌های فعال فعلی",

        copyTradingActivePositionsTotalVolume: "مجموع حجم",
        copyTradingActivePositionsTotalVolumeDescription:
          "مجموع حجم معاملات بازار",

        copyTradingActivePositionsFloatingPnl: "سود و زیان شناور",
        copyTradingActivePositionsFloatingPnlDescription:
          "سود و زیان تحقق‌نیافته فعلی",

        copyTradingActivePositionsCopyStatus: "وضعیت کپی",
        copyTradingActivePositionsActive: "فعال",
        copyTradingActivePositionsIdle: "بدون فعالیت",

        copyTradingActivePositionsCopying: "معاملات در حال کپی شدن هستند",

        copyTradingActivePositionsWaiting: "در انتظار معاملات مستر",

        copyTradingActivePositionsLiveCopied: "موقعیت‌های کپی‌شده فعال",

        copyTradingActivePositionsSymbol: "نماد",
        copyTradingActivePositionsTrader: "معامله‌گر",
        copyTradingActivePositionsDirection: "جهت",
        copyTradingActivePositionsLotSize: "حجم لات",
        copyTradingActivePositionsEntryPrice: "قیمت ورود",

        copyTradingActivePositionsLiveProfitLoss: "سود/زیان لحظه‌ای",

        copyTradingActivePositionsOpenTime: "زمان باز شدن",

        copyTradingActivePositionsEmpty:
          "در حال حاضر هیچ معامله فعال کپی‌شده‌ای در حساب MT5 شما در حال دریافت نیست.",

        copyTradingActivePositionsMaster: "مستر",
        copyTradingActivePositionsJustNow: "همین حالا",
      },
      copyTradingPerformance: {
        performance: "عملکرد",

        copyTradingPerformanceTitle: "عملکرد",
        copyTradingPerformanceDescription:
          "عملکرد و سودآوری معاملات کپی‌شده خود را در طول زمان بررسی کنید.",

        copyTradingPerformanceLast30Days: "۳۰ روز گذشته",
        copyTradingPerformanceLast3Months: "۳ ماه گذشته",
        copyTradingPerformanceLast6Months: "۶ ماه گذشته",
        copyTradingPerformanceAllTime: "تمام مدت",

        copyTradingPerformanceLoading:
          "در حال بررسی سوابق معاملات بسته‌شده MetaTrader 5...",

        copyTradingPerformanceTotalProfit: "مجموع سود",
        copyTradingPerformanceTotalProfitDescription:
          "سود خالص حاصل از معاملات کپی‌شده.",

        copyTradingPerformanceRoi: "بازده سرمایه",
        copyTradingPerformanceRoiDescription: "بازده سرمایه‌گذاری.",

        copyTradingPerformanceWinRate: "نرخ معاملات سودده",
        copyTradingPerformanceWinRateDescription: "معاملات کپی‌شده سودده.",

        copyTradingPerformanceMaximumDrawdown: "حداکثر افت سرمایه",
        copyTradingPerformanceMaximumDrawdownDescription:
          "بیشترین کاهش ارزش پرتفوی.",

        copyTradingPerformanceProfitFactor: "ضریب سود",
        copyTradingPerformanceProfitFactorDescription:
          "سود ناخالص / زیان ناخالص.",

        copyTradingPerformanceEquityCurve: "منحنی سرمایه",
        copyTradingPerformanceEquityCurveDescription:
          "رشد حساب کپی تریدینگ شما در طول زمان.",

        copyTradingPerformanceLiveAnalyticsActive: "تحلیل لحظه‌ای فعال است",

        copyTradingPerformanceEquityVectorMessage:
          "نمودار تغییرات سرمایه با موفقیت با داده‌های ترمینال MetaTrader 5 همگام‌سازی شد.",

        copyTradingPerformanceNoLedgerCoordinates:
          "هیچ مختصات ثبت‌شده‌ای از دفتر معاملات دریافت نشد.",

        copyTradingPerformanceProfitLoss: "سود و زیان",
        copyTradingPerformanceProfitLossDescription:
          "نمای کلی نتایج معاملات شما.",

        copyTradingPerformanceGrossProfit: "سود ناخالص",
        copyTradingPerformanceGrossLoss: "زیان ناخالص",

        copyTradingPerformanceWinningTrades: "معاملات سودده",
        copyTradingPerformanceLosingTrades: "معاملات زیان‌ده",

        copyTradingPerformanceBreakdown: "جزئیات عملکرد",

        copyTradingPerformanceBestTrade: "بهترین معامله",
        copyTradingPerformanceWorstTrade: "بدترین معامله",
        copyTradingPerformanceAverageTrade: "میانگین معامله",
        copyTradingPerformanceAverageHoldingTime: "میانگین زمان نگهداری",

        copyTradingPerformanceDailyPerformance: "عملکرد روزانه",
      },
      copyTradingCopySettings: {
        copySettings: "تنظیمات کپی",

        copySettingsTitle: "تنظیمات کپی",
        copySettingsDescription:
          "نحوه کپی شدن معاملات معامله‌گر حرفه‌ای به حساب معاملاتی متصل خود را مدیریت کنید.",

        copyingActive: "کپی تریدینگ فعال است",

        synchronizingAllocationProtocols: "در حال همگام‌سازی تنظیمات تخصیص...",

        configureCopySettingsTitle: "تنظیمات کپی",
        configureCopySettingsDescription:
          "نحوه کپی شدن معاملات Amiri Pro Trader به حساب خود را تنظیم کنید.",

        copyMode: "حالت کپی",
        percentage: "درصدی",
        fixedLot: "لات ثابت",

        copyRatioMultiplier: "نسبت / ضریب کپی",

        maximumDrawdown: "حداکثر افت سرمایه",
        maximumDailyLoss: "حداکثر زیان روزانه",
        maximumLotSize: "حداکثر حجم لات",
        maximumOpenPositions: "حداکثر موقعیت‌های باز",

        tradeControls: "کنترل معاملات",
        tradeControlsDescription:
          "انتخاب کنید کدام بخش‌های معاملات معامله‌گر حرفه‌ای باید کپی شوند.",

        copyNewTrades: "کپی معاملات جدید",
        copyNewTradesDescription:
          "معاملات جدیدی را که توسط معامله‌گر باز می‌شوند به‌صورت خودکار کپی کنید.",

        copyStopLoss: "کپی حد ضرر",
        copyStopLossDescription:
          "حد ضرر معامله‌گر را روی معاملات کپی‌شده اعمال کنید.",

        copyTakeProfit: "کپی حد سود",
        copyTakeProfitDescription:
          "حد سود معامله‌گر را روی معاملات کپی‌شده اعمال کنید.",

        pauseCopying: "توقف موقت کپی",
        pauseCopyingDescription:
          "بدون قطع اتصال حساب، کپی معاملات جدید را موقتاً متوقف کنید.",

        stopCopying: "توقف کپی",
        stopCopyingDescription: "کپی معاملات Amiri Pro Trader را متوقف کنید.",

        deploying: "در حال اعمال...",

        saveSettings: "ذخیره تنظیمات",

        strategyParametersDeployed:
          "پارامترهای استراتژی با موفقیت در شبکه ابری اعمال شدند.",

        cloudSyncError: "خطای همگام‌سازی ابری: اعمال تغییرات انجام نشد.",

        aboutCopySettings: "درباره تنظیمات کپی",

        aboutCopySettingsDescription:
          "تنظیمات کپی تعیین می‌کنند که معاملات معامله‌گر حرفه‌ای چگونه در حساب معاملاتی متصل شما تکرار شوند. قبل از ذخیره تغییرات، آن‌ها را با دقت بررسی کنید.",

        fundsSecurity: "سرمایه شما در حساب بروکر متصل شما باقی می‌ماند.",
      },
      copyTradingHistory: {
        history: "تاریخچه",

        tradeHistory: "تاریخچه معاملات",
        tradeHistoryDescription:
          "فعالیت‌های تکمیل‌شده کپی تریدینگ و تاریخچه معاملات خود را مشاهده کنید.",

        synchronizingHistory:
          "در حال همگام‌سازی لحظه‌ای دفتر تاریخچه سفارشات MetaTrader 5...",

        completedTrades:
          "تمام معاملات تکمیل‌شده کپی‌شده از Amiri Pro Trader را مشاهده کنید.",

        trader: "معامله‌گر",
        symbol: "نماد",
        type: "نوع",
        copied: "کپی‌شده",
        closed: "بسته‌شده",
        profitLoss: "سود / زیان",
        date: "تاریخ",

        yes: "بله",
        buy: "BUY",
        sell: "SELL",

        noCompletedTrades:
          "هنوز هیچ گزارش معامله تکمیل‌شده‌ای از دفتر معاملات ترمینال MT5 شما همگام‌سازی نشده است.",

        closedStatus: "بسته‌شده",
      },
      copyTradingMyTraders: {
        myCopyTraders: "معامله‌گران کپی من",

        myCopyTradersTitle: "معامله‌گران کپی من",
        myCopyTradersDescription:
          "اتصالات فعال کپی تریدینگ خود را مدیریت کرده و عملکرد آن‌ها را بررسی کنید.",

        copyTradingSystemConnected: "سیستم کپی تریدینگ متصل است",
        refresh: "تازه‌سازی",

        synchronizingCopyPortfolio: "در حال همگام‌سازی اطلاعات پرتفوی کپی...",

        activeTraders: "معامله‌گران فعال",
        activeTradersDescription: "در حال حاضر در حال کپی",

        investment: "سرمایه‌گذاری",
        investmentDescription: "اختصاص‌یافته به کپی تریدینگ",

        totalProfit: "مجموع سود",
        totalProfitDescription: "سود معاملات بسته‌شده",

        return: "بازدهی",
        returnDescription: "بازدهی کلی حساب",

        noCopyTraders: "معامله‌گر کپی وجود ندارد",
        noCopyTradersDescription:
          "در حال حاضر هیچ معامله‌گر حرفه‌ای را کپی نمی‌کنید. معامله‌گران را پیدا کنید و یک استراتژی را برای شروع کپی انتخاب کنید تا اینجا نمایش داده شود.",

        manageActiveTraderConnections:
          "اتصالات فعال معامله‌گران خود را مدیریت کنید.",

        trader: "معامله‌گر",
        traders: "معامله‌گران",

        tradingAccount: "حساب معاملاتی",
        account: "حساب",

        metaTrader5: "MetaTrader 5",

        profit: "سود",
        winRate: "نرخ برد",
        drawdown: "افت سرمایه",

        started: "شروع شده",

        processing: "در حال پردازش...",
        resumeCopying: "ادامه کپی",
        pauseCopying: "توقف موقت کپی",
        stopCopying: "توقف کپی",
        copyingStopped: "کپی متوقف شده است",

        active: "فعال",
        paused: "متوقف موقت",
        stopped: "متوقف",

        professionalTrader: "معامله‌گر حرفه‌ای",
      },
      copyTradingActiveCopyTraders: {
        activeCopyTraders: "معامله‌گران کپی فعال",

        synchronizingActiveCopyTradingNodes:
          "در حال همگام‌سازی لحظه‌ای اطلاعات معامله‌گران کپی فعال...",

        yourActiveCopyTraders: "معامله‌گران کپی فعال شما",

        noActiveMasterTraders:
          "هنوز هیچ معامله‌گر مستری در حساب MetaTrader 5 شما در حال کپی شدن نیست.",

        viewPerformance: "مشاهده عملکرد",
        copySettings: "تنظیمات کپی",

        investment: "سرمایه‌گذاری",
        profit: "سود",
        return: "بازدهی",
        winRate: "نرخ برد",

        copyStatus: "وضعیت کپی",
        copyingActive: "کپی فعال است",

        activePositions: "موقعیت‌های فعال",
        positions: "موقعیت",

        copyRatio: "نسبت کپی",

        tradingStatistics: "آمار معاملاتی",
        detailedTradingPerformance: "جزئیات عملکرد معاملاتی.",

        totalTrades: "مجموع معاملات",
        profitFactor: "ضریب سود",
        averageWin: "میانگین سود",

        riskManagement: "مدیریت ریسک",
        monitorAndControlRisk: "ریسک کپی تریدینگ خود را بررسی و مدیریت کنید.",

        maxDrawdown: "حداکثر افت سرمایه",
        stopLoss: "حد ضرر",
        takeProfit: "حد سود",

        active: "فعال",
        forexAndGold: "فارکس و طلا",
      },
      copyTradingEarnings: {
        masterEarnings: "درآمد مستر",

        loadingMasterAllocationMetrics: "در حال بارگذاری اطلاعات درآمد مستر...",

        yourMasterEarnings: "درآمد مستر شما",

        requestWithdrawal: "درخواست برداشت",

        withdrawalDescription:
          "کارمزد عملکرد خود را مستقیماً به کیف پول شخصی TRC20 خود برداشت کنید.",

        amountUsdt: "مبلغ (USDT)",

        amountPlaceholder: "مثلاً 150",

        usdtTrc20Address: "آدرس USDT TRC-20",

        walletAddressPlaceholder: "T...",

        submitWithdrawalRequest: "ارسال درخواست برداشت",

        withdrawalRequested: "درخواست برداشت ثبت شد",

        requestRejected:
          "درخواست رد شد: موجودی کافی نیست یا آدرس کیف پول معتبر نیست.",
      },
      meta: {
        login: {
          title: "ورود",
          description:
            "وارد حساب Trade-platform خود شوید و به داشبورد معاملاتی و خدمات معاملاتی خود دسترسی پیدا کنید.",
        },
        register: {
          title: "ثبت‌نام",
          description:
            "حساب Trade-platform خود را ایجاد کنید و به داشبورد و خدمات معاملاتی خود دسترسی پیدا کنید.",
        },

        contact: {
          title: "تماس با ما",
          description:
            "با پشتیبانی Trade-platform در ارتباط باشید یا بازخورد خود را برای ما ارسال کنید.",
        },

        home: {
          title: "خانه",
          description:
            "Trade-platform؛ پلتفرم خدمات معاملاتی و مدیریت معاملات.",
        },

        about: {
          title: "درباره ما",
          description: "با Trade-platform و خدمات معاملاتی ما بیشتر آشنا شوید.",
        },

        subscription: {
          title: "اشتراک",
          description:
            "اشتراک‌ها و خدمات معاملاتی Trade-platform را مشاهده کنید.",
        },
      },
      footer: {
        description:
          "ارائه‌دهنده خدمات کپی تریدینگ و سیگنال‌های حرفه‌ای برای بازارهای فارکس و ارزهای دیجیتال.",

        quickLinks: "لینک‌های سریع",
        home: "خانه",
        aboutUs: "درباره ما",
        contact: "تماس با ما",

        account: "حساب کاربری",
        login: "ورود",
        register: "ثبت نام",
        dashboard: "داشبورد",

        contactSupport: "تماس و پشتیبانی",
        telegramSupport: "پشتیبانی تلگرام",
        emailSupport: "پشتیبانی ایمیل",

        copyright: "© 2025 آکادمی مالی امیری. تمامی حقوق محفوظ است.",
      },
    },
  },

  en: {
    translation: {
      navBar: {
        home: "Home",
        about: "About Us",
        contact: "Contact",
        subscription: "Subscription",
        billing: "Billing",

        services: {
          title: "Services",
          telegramDashboard: "Telegram Bot Dashboard",
          copyTradingDashboard: "Copy Trading Dashboard",
          discountPremiumDashboard: "Discount Premium Dashboard",
          adminFinance: "Admin Finance",
        },
      },
      language: {
        persian: "Persian",
        english: "English",
      },

      user: {
        member: "Member",
      },
      home: {
        // Hero
        professionalCopyTradingSignals: "Professional Copy Trading & Signals",
        tradeSmarter: "Trade Smarter.",
        growConsistently: "Grow Consistently.",
        heroDescription:
          "Benefit from 7+ years of real market experience in Forex and Cryptocurrency. Learn, analyze and build better trading habits with structured strategies.",
        getStartedNow: "Get Started Now",
        learnMore: "Learn More",
        secureTransparent: "Secure & Transparent",
        trustedByTraders: "Trusted by 1000+ Traders",

        // About Academy
        aboutAmiriFinanceAcademy: "About Amiri Finance Academy",
        turningMarketExperience: "Turning Market Experience",
        intoYourSuccess: "Into Your Success",
        aboutDescription:
          "Amiri Finance Academy is led by Mr. Ebrahim Amiri, a professional trader and market analyst with more than 7 years of hands-on experience in Forex and Cryptocurrency markets.",
        aboutMission:
          "Our mission is simple: shorten your trading journey by providing proven strategies, advanced tools and structured learning resources.",

        sevenPlusYears: "7+ Years",
        tradingExperience: "Trading Experience",
        forexCrypto: "Forex & Crypto",
        specialist: "Specialist",
        trustedBrokers: "Trusted Brokers",
        partnerships: "Partnerships",
        riskManagement: "Risk Management",
        focused: "Focused",
        years: "Years",
        experience: "Experience",
        aboutAcademyImageAlt: "About Academy",

        // Features
        ourServices: "Our Services",
        professionalSolutionsFor: "Professional Solutions for",
        smartTraders: "Smart Traders",

        copyTrading: "Copy Trading",
        copyTradingDescription:
          "Automatically copy selected trading strategies in real-time and learn from structured market activity.",

        tradingSignals: "Trading Signals",
        tradingSignalsDescription:
          "Receive market insights and educational trade ideas based on technical and fundamental analysis.",

        riskManagementService: "Risk Management",
        riskManagementDescription:
          "Professional risk-control strategies designed to help users understand position sizing and exposure.",

        accountSupport: "Account Support",
        accountSupportDescription:
          "Guidance for account connection, platform setup and service management.",

        // Stats
        yearsOf: "Years of",
        happy: "Happy",
        traders: "Traders",
        managedTrading: "Managed Trading",
        volume: "Volume",
        customer: "Customer",
        support: "Support",
        // How It Works
        howCopyTradingWorks: "How Copy Trading Works",
        simpleStepsToStart: "Simple Steps to Start",
        learning: "Learning",

        createAnAccount: "Create an Account",
        createAccountDescription: "Sign up and create your personal account.",

        connectYourBroker: "Connect Your Broker",
        connectBrokerDescription:
          "Connect your broker or exchange account securely.",

        chooseAPlan: "Choose a Plan",
        choosePlanDescription:
          "Select the subscription or service that suits you.",

        startLearning: "Start Learning",
        startLearningDescription:
          "Explore market strategies and follow your selected service.",

        // Testimonials
        whatOurClientsSay: "What Our Clients Say",
        trustedByTradersWorldwide: "Trusted by Traders Worldwide",

        jamesTraderRole: "Forex Trader",
        jamesTestimonial:
          "The educational structure helped me understand the market process much better.",

        sarahInvestorRole: "Crypto Investor",
        sarahTestimonial:
          "Clear explanations, organized signals and useful risk-management guidance.",

        davidTraderRole: "Full-time Trader",
        davidTestimonial:
          "The platform provides a simple way to follow the learning journey.",

        // FAQ
        faq: "FAQ",
        frequentlyAsked: "Frequently Asked",
        questions: "Questions",
        faqDescription:
          "Find answers to common questions about the academy, trading education and available services.",

        whatIsCopyTrading: "What is Copy Trading?",
        whatIsCopyTradingAnswer:
          "Copy trading is a system that can allow a user's trading account to automatically follow selected trading activity, depending on the platform and service configuration.",

        isMyMoneyTransferred: "Is my money transferred to Amiri?",
        isMyMoneyTransferredAnswer:
          "No. Your funds should remain in your own broker or exchange account. Always review the permissions, security model and terms of the platform before connecting an account.",

        howMuchCapital: "How much capital do I need?",
        howMuchCapitalAnswer:
          "The required amount depends on the broker, exchange and selected service. There is no guaranteed profit in financial markets, and users should only consider risks they understand.",

        whichMarketsSupported: "Which markets are supported?",
        whichMarketsSupportedAnswer:
          "The platform is designed around educational content and services related to Forex and Cryptocurrency markets.",

        doINeedTechnicalKnowledge: "Do I need technical knowledge?",
        doINeedTechnicalKnowledgeAnswer:
          "The connection process is designed to be straightforward, and support can guide users through the available setup process.",

        isProfitGuaranteed: "Is profit guaranteed?",
        isProfitGuaranteedAnswer:
          "No. Financial markets involve risk and no trading strategy can guarantee a fixed profit.",

        // CTA
        readyToStartTradingJourney: "Ready to Start Your Trading Journey?",
        ctaDescription:
          "Explore our educational resources and discover a more structured approach to learning about financial markets.",
        joinNow: "Join Now",
      },
      about: {
        // AboutHero
        aboutAmiriFinanceAcademy: "About Amiri Finance Academy",
        experienceThat: "Experience That",
        movesWithTheMarket: "Moves With The Market",
        heroDescription:
          "Amiri Finance Academy is led by Mr. Ebrahim Amiri, a professional trader and market analyst with more than 7 years of experience across the Forex and Cryptocurrency markets.",
        sevenPlusYearsExperience: "7+ Years Experience",
        riskFocused: "Risk Focused",
        tradingImageAlt: "Amiri Finance Academy Trading",

        // AboutStory
        ourStory: "Our Story",
        turningMarketExperience: "Turning Market Experience",
        intoASmarterJourney: "Into A Smarter Journey",
        storyDescription:
          "Amiri Finance Academy was created to shorten the difficult learning journey of financial markets by bringing years of practical experience, market knowledge and tested strategies together in one platform.",
        experienceDescription:
          "Mr. Ebrahim Amiri has spent more than seven years working across Forex and Cryptocurrency markets, gaining experience through different market conditions and using modern trading platforms and analytical tools.",

        ourMission: "Our Mission",
        missionDescription:
          "Make the trading journey simpler through structured education, market insights and disciplined risk management.",

        ourApproach: "Our Approach",
        approachDescription:
          "We focus on practical knowledge, responsible decision-making and understanding market risk rather than promising guaranteed results.",

        // AboutExpertise
        expertiseAndBackground: "Expertise & Background",
        builtOnMarketExperience: "Built On Years of Market Experience",
        expertiseDescription:
          "Practical experience, modern platforms and disciplined risk management form the foundation of our approach.",

        forexCryptoMarkets: "Forex & Crypto Markets",
        forexCryptoMarketsDescription:
          "Experience across major financial markets, including Forex and Cryptocurrency.",

        tradingPlatforms: "Trading Platforms",
        tradingPlatformsDescription:
          "Practical experience with platforms such as Binance and MetaTrader 4 & 5.",

        riskManagement: "Risk Management",
        riskManagementDescription:
          "A disciplined approach to position sizing, capital protection and managing market risk.",

        // AboutServices
        whatWeOffer: "What We Offer",
        servicesDesignedAround: "Services Designed Around",
        yourTradingJourney: "Your Trading Journey",
        servicesDescription:
          "Our platform combines practical market experience with modern services designed to make accessing trading education, insights and copy-trading tools easier.",

        copyTrading: "Copy Trading",
        copyTradingDescription:
          "Follow selected trading strategies through a structured copy-trading system.",

        tradingSignals: "Trading Signals",
        tradingSignalsDescription:
          "Receive market insights and educational trade ideas based on technical and fundamental analysis.",

        supportAndGuidance: "Support & Guidance",
        supportAndGuidanceDescription:
          "Our support team helps users throughout the account connection and service setup process.",

        // AboutQuote
        quote:
          "The financial markets are not a place for guesswork. They require discipline, statistics, market psychology and responsible risk management.",
        ebrahimAmiri: "Ebrahim Amiri",
        traderAndMarketAnalyst: "Trader & Market Analyst",
      },

      subscription: {
        // Subscription Header
        subscription: "Subscription",
        manageSubscription:
          "Manage your subscription and keep your trading account active.",

        // Current Subscription
        proTrader: "Pro Trader",
        currentPlan: "Current Plan",
        active: "Active",
        fullAccess:
          "Full access to your trading dashboard and platform features.",
        startDate: "Start Date",
        expiryDate: "Expiry Date",

        // Subscription Progress
        subscriptionStatus: "Subscription Status",
        trackRemainingTime: "Track your remaining subscription time.",
        daysRemaining: "days remaining",
        daysUsed: "days used",
        renewSubscription: "Renew Subscription",
        // Subscription Plans
        subscriptionPlans: "Subscription Plans",
        chooseService: "Choose the service you want to activate.",
        weeklySubscription: "Weekly subscription",
        choose: "Choose",

        telegramBot: "Telegram Bot",
        telegramBotDescription:
          "Automated trading with Telegram bot, signals, risk control, and account monitoring.",

        telegramTradingBot: "Telegram trading bot",
        tradingSignals: "Trading signals",
        riskControl: "Risk control",
        accountMonitoring: "Account monitoring",

        week: "/ week",
      },
      contact: {
        // Contact Hero
        contactUs: "Contact Us",
        contactHeroDescription:
          "We're always ready to answer your questions and help you get started with our trading services.",

        // Contact Info
        phoneNumber: "Phone Number",
        telegramSupport: "Telegram Support",
        availableOnTelegram: "Available on Telegram",
        directSupport: "Direct Support",
        emailAddress: "Email Address",
        workingHours: "Working Hours",
        workingDays: "Saturday - Thursday",
        workingTime: "8:00 AM - 5:00 PM",

        // Contact Form
        sendUsMessage: "Send Us a Message",
        formDescription:
          "Fill out the form below and we will get back to you shortly.",

        yourName: "Your Name",
        yourEmail: "Your Email",
        subject: "Subject",
        yourMessage: "Your Message",

        pleaseEnterName: "Please enter your name.",
        pleaseEnterEmail: "Please enter your email.",
        pleaseEnterValidEmail: "Please enter a valid email.",
        pleaseEnterSubject: "Please enter a subject.",
        pleaseEnterMessage: "Please enter your message.",

        messageSentSuccessfully: "Your message has been sent successfully.",
        somethingWentWrong: "Something went wrong. Please try again later.",

        sending: "Sending...",
        sendMessage: "Send Message",
        customerSupport: "Customer Support",

        // Contact FAQ
        lookingForQuickAnswers: "Looking for quick answers?",
        faqDescription:
          "Check out our FAQ section for answers to the most common questions about our services.",
        viewFaq: "View FAQ",
      },
      payment: {
        backToSubscription: "Back to Subscription",

        title: "Payment",

        description: "Complete your payment to activate your subscription.",

        paymentMethod: "Payment Method",

        selectPaymentMethod: "Select your preferred payment method.",

        cryptocurrencyPayment: "Cryptocurrency Payment",

        cryptocurrencyDescription: "Pay securely using cryptocurrency.",

        pay: "Pay",

        paymentVerification:
          "Your subscription will be activated after the payment is successfully verified.",

        orderSummary: "Order Summary",

        total: "Total",

        subscription: "Subscription",

        week: "week",

        month: "month",

        telegramBot: "Telegram Bot",

        copyTrading: "Copy Trading",

        telegramDescription:
          "Automated trading with Telegram bot, signals, risk control, and account monitoring.",

        copyTradingDescription:
          "Follow professional traders and automatically copy their trading strategies.",

        telegramFeatures: [
          "Telegram trading bot",
          "Trading signals",
          "Risk control",
          "Account monitoring",
        ],

        copyTradingFeatures: [
          "Professional traders",
          "Automatic copy trading",
          "Active positions",
          "Portfolio analytics",
        ],
      },
      cryptoPayment: {
        backToPayment: "Back to Payment",
        title: "Cryptocurrency Payment",
        description: "Send the exact amount to the wallet address below.",
        subscription: "Subscription",
        amountToPay: "Amount to Pay",
        paymentCode: "Payment Code",
        copyPaymentCode: "Copy payment code",
        paymentInstructions: "Payment Instructions",
        sendExactAmount: "Send exactly",
        sendToAddress: "Send the payment to the address above.",
        activationAfterVerification:
          "Your subscription will be activated after verification.",
        completedPayment: "I Have Completed the Payment",
      },
      billing: {
        synchronizing: "Synchronizing encrypted central billing ledger...",
        noActiveSubscription: "No active subscription",

        financialCenter: "Financial Center",
        billing: "Billing",
        billingDescription:
          "Manage your balance, cryptocurrency payments, and transaction history in one place.",
        addFunds: "Add Funds",

        availableBalance: "Available Balance",
        currentAccountBalance: "Current account balance.",

        totalDeposits: "Total Deposits",
        totalFundsDeposited: "Total funds deposited.",

        totalPaidFees: "Total Paid Fees",
        totalFeesSubscriptionsPaid: "Total fees & subscriptions paid.",

        accountActivity: "Account Activity",
        netGrowthTrajectoryReturn: "Net growth trajectory return.",

        telegramBotPremiumIntegration: "Telegram Bot Premium Integration",
        fixedSubscriptionCharge:
          "Fixed subscription charge for institutional signals.",

        activePlan: "Active Plan",
        expiredInactive: "Expired / Inactive",

        accessExpirationSequence: "Access Expiration",
        noActiveLicense: "No active license key found in central ledger.",

        renewLicense: "Renew License",
        activateLicense: "Activate License",

        recentTransactions: "Recent Transactions",
        latestFinancialActivity: "Your latest financial activity.",
        viewAllTransactions: "View all transactions",

        transaction: "Transaction",
        service: "Service",
        date: "Date",
        amount: "Amount",
        status: "Status",

        noFinancialActivity:
          "No financial activity recorded in your database yet.",

        systemLedger: "System Ledger",

        completed: "Completed",
        failed: "Failed",
        pending: "Pending",
      },
      wallet: {
        // ...

        backToBilling: "Back to Billing",
        wallet: "Wallet",
        walletDescription: "Deposit USDT using the secure TRC20 network.",

        depositUsdt: "Deposit USDT",
        depositUsdtDescription:
          "Add funds to your account using the USDT TRC20 network.",

        depositAmount: "Deposit Amount",
        enterAmount: "Enter amount",
        network: "Network",
        tronNetwork: "TRON Network",

        generatePayment: "Generate Payment",
        generatingSecuringTicket: "Generating Payment...",

        paymentDetails: "Payment Details",
        secureCryptocurrencyPayment: "Secure cryptocurrency payment.",

        noActiveInvoice: "No Active Invoice",
        noActiveInvoiceDescription:
          "Enter an amount and generate a payment to receive your wallet details.",

        walletAddress: "Wallet Address",
        copied: "Copied!",
        copyAddress: "Copy Address",

        amount: "Amount",
        invoiceId: "Invoice ID",

        networkWarning:
          "Send only USDT using the TRC20 network. Sending funds through another network may result in loss of funds.",

        blockchainGatewayError:
          "Blockchain Gateway Error: Failed to initialize the payment request.",
      },
      transactions: {
        backToBilling: "Back to Billing",
        financialHistory: "Financial History",
        transactions: "Transactions",
        transactionsDescription:
          "View your deposits, subscriptions, and copy trading transactions.",

        searchTransactions: "Search transactions...",
        allTypes: "All Types",
        deposit: "Deposit",
        subscription: "Subscription",
        copyTrading: "Copy Trading",

        transaction: "Transaction",
        service: "Service",
        date: "Date",
        amount: "Amount",
        status: "Status",

        noTransactions:
          "No transactions found matching your filtering parameters.",

        systemAutomatedSettlementLedger: "System Automated Settlement Ledger",

        completed: "Completed",
        failed: "Failed",
        pending: "Pending",
      },
      adminFinance: {
        backToWebsite: "Back to Website",
        administration: "Administration",
        financeOverview: "Finance Overview",
        financeDescription:
          "Monitor platform revenue, service performance, and master trader payouts.",

        synchronizing: "Synchronizing global platform ledger metrics...",

        // Finance Stats
        grossPlatformRevenue: "Gross Platform Revenue",
        totalPlatformRevenue: "Total platform revenue.",

        telegramBotRevenue: "Telegram Bot Revenue",
        telegramBotRevenueDescription: "Revenue from Telegram Bot.",

        copyTradingRevenue: "Copy Trading Revenue",
        copyTradingRevenueDescription: "Revenue from Copy Trading.",

        masterTraderPayouts: "Master Trader Payouts",
        masterTraderPayoutsDescription: "Paid to master traders.",

        // Revenue Breakdown
        revenueBreakdown: "Revenue Breakdown",
        revenueBreakdownDescription:
          "Platform revenue and master trader payouts.",

        serviceDetails: "Service / Details",
        grossRevenue: "Gross Revenue (20%)",
        traderPayout: "Trader Payout (15%)",
        netRevenue: "Net Revenue (5%)",

        noRevenue:
          "No revenue settlement logs recorded in the unified network ledger yet.",

        master: "Master",
        follower: "Follower",
      },
      common: {
        checkingAuthentication: "Checking authentication...",
      },
      auth: {
        // کلیدهای قبلی auth را نگه دار
        login: "Login",
        logout: "Logout",
        register: "Register",

        signInToAccount: "Sign in to your account",
        signInToAccess: "Sign in to access your account.",
        emailOrMobile: "Email or Mobile Number",
        enterEmailOrMobile: "Enter your email or mobile number",
        password: "Password",
        enterPassword: "Enter your password",
        signingIn: "Signing in...",
        signIn: "Sign In",
        orContinueWith: "Or continue with",
        noAccount: "Don't have an account?",
        signUp: "Sign up",
        loginSuccess: "Logged in successfully.",
        invalidCredentials: "Invalid credentials or server node timeout.",
        continueWithGoogle: "Continue with Google",
      },
      loginBenefits: {
        welcome: "Welcome to Amiri Finance Academy",
        welcomeDescription:
          "Sign in to your account to access professional tools, trading signals, educational courses, and exclusive features.",

        accurateSignals: "Accurate and Up-to-Date Signals",
        accurateSignalsDescription:
          "Receive daily signals with technical analysis and practical market insights.",

        educationalCourses: "Specialized Educational Courses",
        educationalCoursesDescription:
          "Access educational courses from beginner to advanced levels in Persian.",

        riskManagement: "Professional Risk Management",
        riskManagementDescription:
          "Capital management and emotional control tools for consistent and sustainable trading.",
      },
      register: {
        home: "Home",
        title: "Create Account",
        description:
          "Create your account and start your trading journey today.",

        formTitle: "Create Account",
        formSubtitle: "Start your trading journey today.",

        fullName: "Full Name",
        fullNamePlaceholder: "Enter your full name",

        lastName: "Last Name",
        lastNamePlaceholder: "Enter your last name",

        email: "Email",
        emailPlaceholder: "Enter your email",

        password: "Password",
        passwordPlaceholder: "Enter your password",

        confirmPassword: "Confirm Password",
        confirmPasswordPlaceholder: "Confirm your password",

        createAccount: "Create Account",
        creatingAccount: "Creating Account...",

        or: "OR",

        alreadyHaveAccount: "Already have an account?",
        signIn: "Sign in",

        passwordMismatch: "⚠️ Passwords do not match!",

        success:
          "✅ Account created successfully! Please sign in to access your account.",

        registrationRejected: "❌ Registration Rejected:",

        networkError:
          "❌ Network Error: Unable to connect to the registration service.",

        benefitsTitle: "Why register at Amiri Finance Academy?",

        benefitsDescription:
          "Join our academy and improve your trading knowledge with professional educational resources.",

        signalsTitle: "Professional Trading Signals",
        signalsDescription:
          "Get access to professional Forex and Crypto trading signals.",

        analysisTitle: "Advanced Analysis",
        analysisDescription:
          "Learn from accurate market analysis and professional strategies.",

        riskManagementTitle: "Risk Management",
        riskManagementDescription:
          "Learn how to manage your trading risk and protect your capital.",

        supportTitle: "24/7 Support",
        supportDescription:
          "Our support team is available whenever you need assistance.",
      },
      telegramBotDashboard: {
        synchronizing: "Synchronizing institutional cloud nodes...",

        title: "Financial Overview",
        description:
          "Monitor your active copy-trade terminals and asset execution ratios in real-time.",

        accountBalanceTitle: "Account Balance",
        accountBalanceSubtitle: "Live MetaTrader 5 Balance",

        totalNetProfitTitle: "Total Net Profit",
        totalNetProfitSubtitle: "Accumulated trade gains",
        totalNetProfitTrend: "+ Profit active",

        winRateTitle: "Win Rate Ratio",
        winRateSubtitle: "Historical hit formula",

        availableCapitalTitle: "Available Capital",
        availableCapitalSubtitle: "Free margin safety buffer",

        portfolioGrowthTitle: "Portfolio Growth",
        portfolioGrowthDescription: "Live account equity performance curve",
        last7Days: "Last 7 Days",
        last30Days: "Last 30 Days",
        last90Days: "Last 90 Days",
        calculatingGrowth: "Calculating account growth nodes...",
        balance: "Balance",
        dayOne: "Day 1",
        current: "Current",

        accountAllocationTitle: "Account Allocation",
        portfolio: "Portfolio",
        total: "Total",
        forex: "Forex",
        crypto: "Crypto",
        cash: "Cash",
        calculatingAllocation: "Calculating portfolio allocation...",

        brokerConnectionTitle: "Broker Connection",
        tradingAccount: "Trading Account",
        connected: "Connected",
        cloudExecutionActive: "Cloud execution is active",
        disconnected: "Disconnected",
        copyTradePaused: "Copy-trade routing is paused",
        manageConnection: "Manage Connection",
        checking: "Checking gateway link...",

        riskControlGaugeTitle: "Risk Control Gauge",
        currentRisk: "Current Risk",
        currentRiskScale: "Current Risk Scale",

        totalRisk: "Total Risk",
        botStatus: "Bot Status",
        active: "Active",
        inactive: "Inactive",

        riskSettingsTitle: "Risk Settings",
        riskLevel: "Risk Level",
        save: "Save",
        update: "Update",

        emergencyStopTitle: "Emergency Stop",
        stopBot: "Stop Bot",
        startBot: "Start Bot",
        botActive: "Bot Active",
        botInactive: "Bot Inactive",

        activity: "Activity",
        recentTradesTitle: "Recent Trades",
        viewAll: "View All",
        asset: "Asset",
        type: "Type",
        size: "Size",
        result: "Result",
        syncing: "Syncing operations ledger...",
        noTrades: "No live trades executed by the bot yet.",

        // ... keyهای قبلی

        riskControlGaugeTitle: "Risk Control Gauge",
        currentRisk: "Current Risk",
        currentRiskScale: "Current Risk Scale",

        // RiskStats
        maxDailyLoss: "Max Daily Loss",
        protectionStatus: "Protection Status",
        riskAlerts: "Risk Alerts",

        // RiskGauge
        currentRiskLevel: "Current Risk Level",
        lowRisk: "Low Risk",
        moderateRisk: "Moderate Risk",
        highRisk: "High Risk",

        // RiskSettings
        riskSettingsTitle: "Risk Settings",
        riskSettingsDescription: "Configure your trading risk parameters",
        totalRiskPercent: "Total Risk %",
        firstEntryPercent: "First Entry %",
        secondEntryPercent: "Second Entry %",
        tradeVolume: "Trade Volume",
        maxOpenTrades: "Max Open Trades",
        tradeVolumeRange: "Trade volume must be between 0.01 and 3.00",
        saving: "Saving...",
        saveChanges: "Save Changes",

        // RiskSettings alerts
        fillRiskFields: "Please fill in all the risk configuration fields.",
        combinedRiskError:
          "Error: The combined risk of First and Second entry cannot exceed 100% of your account balance.",
        riskSaveSuccess:
          "Success: Your customized risk allocation parameters have been saved.",
        riskSaveError:
          "Error: Failed to save preferences. Please check your backend connection.",

        // EmergencyStop
        emergencyStopTitle: "Emergency Stop",
        emergencyStopDescription: "Control your trading bot instantly.",
        running: "Running",
        stopped: "Stopped",
        turnOffBot: "Turn Off Bot",
        turnOnBot: "Turn On Bot",
      },
      SidebarTelegramBotDashboard: {
        overview: "Overview",
        accountStatus: "Account Status",
        brokerForm: "Broker Connection",
        riskControl: "Risk Control",
        tradeHistory: "Trade History",
        subscription: "Subscription",

        mainMenu: "Main Menu",
        backHome: "Back Home",
        user: "User",
        member: "Member",
        logout: "Logout",
        closeMenu: "Close menu",
      },
      headerTelegramBotDashboard: {
        welcomeBack: "Welcome back,",
        proTrader: "Pro Trader",
        openMenu: "Open menu",
        notifications: "Notifications",
        userFallback: "Trader",
      },

      telegramBotAccountStatus: {
        // Account Status
        synchronizing: "Synchronizing account information...",
        // Account Overview
        accountBalanceTitle: "Account Balance",
        currentAccountBalance: "Current account balance",
        totalProfitTitle: "Total Profit",
        accumulatedGains: "Accumulated gains",
        totalLossTitle: "Total Loss",
        closedPositionsLoss: "Loss from closed positions",
        winRateTitle: "Win Rate",
        historicalWinRate: "Historical win ratio",
        // Balance Card
        availableBalance: "Available Balance",
        equity: "Equity",
        usedMargin: "Used Margin",
        marginLevelPercent: "Margin Level Percent",
        // Trading Statistics
        tradingStatistics: "Trading Statistics",
        totalTrades: "Total Trades",
        winningTrades: "Winning Trades",
        averageDuration: "Average Duration",
        activeTrades: "Active Trades",
        // Account Information
        accountInformation: "Account Information",
        accountType: "Account Type",
        accountId: "Account ID",
        baseCurrency: "Base Currency",
        riskProfile: "Risk Profile",
        // Account Type
        professionalLive: "Professional Live",
        demoAccount: "Demo Account",
        // Account ID
        notLinked: "Not Linked",
        //  Currency
        usd: "USD",
        // Risk
        risk: "Risk",
        moderate: "Moderate",
        // Fallback Values
        zeroAmount: "$0.00",
        zeroPercent: "0%",
        zeroValue: "0",
        // Duration
        averageDurationValue: "4h 32m",
      },
      telegramBotBrokerForm: {
        // Broker Header
        brokerConnection: "Broker Connection",
        connectYourBroker: "Connect Your Broker",
        connectTradingAccount:
          "Connect your trading account to manage your trades and monitor your portfolio from one place.",
        secureConnection: "Secure Connection",

        // Broker Connection Card
        currentConnection: "Current Connection",
        currentlyConnectedAccount: "Your currently connected trading account",
        connected: "Connected",
        account: "Account",
        server: "Server",
        testConnection: "Test Connection",
        disconnect: "Disconnect",
        lastChecked: "Last checked a few moments ago",
        loadingConnectionState: "Loading live connection state...",
        connectionActive:
          "Connection Status: Active & Synced with cloud node network.",
        connectionError:
          "Connection Error: Cannot communicate with the terminal server.",
        disconnectConfirmation:
          "Are you sure you want to disconnect this trading account?",
        brokerDeactivated: "Broker account deactivated successfully.",
        disconnectError: "Error disconnecting account.",

        // Broker Form
        brokerAccount: "Broker Account",
        brokerAccountDescription:
          "Enter your broker account credentials to establish a connection.",
        broker: "Broker",
        loadingVerifiedBrokers: "Loading verified brokers...",
        other: "Other",

        accountType: "Account Type",
        liveAccount: "Live Account",
        demoAccount: "Demo Account",

        accountIdLogin: "Account ID / Login",
        symbol: "Symbol",
        password: "Password",
        enterYourPassword: "Enter your password",

        showPassword: "Show password",
        hidePassword: "Hide password",

        apiKey: "API Key",
        optional: "Optional",
        enterApiKeyIfRequired: "Enter API key if required",

        rememberAccount: "Remember this account",

        connectCloudNode: "Connecting to Cloud Node...",
        connectBroker: "Connect Broker",

        configurationError:
          "Configuration Error: Please fill in Account ID, Server, and Password fields.",
        authenticationSuccessful:
          "Authentication Successful: Your MT5 terminal has been linked to the copy-trade cloud engine.",
        authenticationRejected:
          "Authentication Rejected: Connection failed. Verify your login details and matching MT5 server architecture.",

        // Supported Brokers
        supportedBrokers: "Supported Brokers",
        supportedBrokersDescription:
          "Select one of the supported trading platforms.",
        noBrokersRegistered: "No brokers registered in database.",
        forexCfd: "Forex & CFD",
        loadingVerifiedPlatforms: "Loading verified platforms...",

        // Security Notice
        encryptionActive: "End-to-End Encryption Active",
        securityDescription:
          "Your MT5 trading passwords are fully encrypted using advanced security standards. Credentials are securely isolated and processed strictly via dedicated cloud nodes to synchronize the copy-trade execution.",
      },
      telegramBotRiskControl: {
        title: "Risk Control",
        description: "Manage account protection and trading risk.",
      },
      telegramBotTradeHistory: {
        badge: "Trade History",
        title: "Trade History",
        description: "Review and analyze your recent trading activity.",
        exportHistory: "Export History",
        exportError:
          "Failed to export history. Server endpoint is not configured yet.",

        totalTrades: "Total Trades",
        winning: "Winning Trades",
        winRate: "Win Rate",
        realHistoricalStats: "Real historical stats",
        totalProfit: "Total Profit",
        loss: "Loss",
        tradingVolume: "Trading Volume",
        lots: "Lots",
        accumulatedVolume: "Accumulated volume",

        searchPlaceholder: "Search pair...",
        last7Days: "Last 7 Days",
        last30Days: "Last 30 Days",
        last90Days: "Last 90 Days",
        allTime: "All Time",

        allTypes: "All Types",
        buy: "Buy",
        sell: "Sell",

        allStatus: "All Status",
        closed: "Closed",
        open: "Open",

        appliedMessage: "Filters are applied to your trade history.",

        recentTrades: "Recent Trades",
        latestActivity: "Showing your latest trading activity",
        totalTradesCount: "trades total",
        noTrades: "No trades found.",

        pair: "Pair",
        type: "Type",
        volume: "Volume",
        openPrice: "Open Price",
        closePrice: "Close Price",
        profitLoss: "Profit / Loss",
        status: "Status",
        time: "Time",

        showing: "Showing trades",
        previous: "Previous page",
        next: "Next page",
      },
      copyTrading: {
        copyTrading: "Copy Trading",
        dashboardTitle: "Copy Trading Dashboard",
        dashboardDescription:
          "Discover professional traders, copy their strategies and monitor your copy trading performance from one place.",
        exploreTraders: "Explore Traders",

        totalBalance: "Total Balance",
        copyTradingBalance: "Copy Trading Balance",
        totalProfit: "Total Profit",
        activeTraders: "Active Traders",
        winRate: "Win Rate",

        copyTradingPerformance: "Copy Trading Performance",
        portfolioGrowth: "Portfolio Growth",
        last30Days: "Last 30 Days",
        last3Months: "Last 3 Months",
        last6Months: "Last 6 Months",

        copyAllocation: "Copy Allocation",
        total: "Total",

        activeCopyTraders: "Active Copy Traders",
        noActiveCopyTraders: "No active master traders are being copied yet.",

        viewPerformance: "View Performance",
        copySettings: "Copy Settings",

        investment: "Investment",
        profit: "Profit",
        return: "Return",
        copyStatus: "Copy Status",
        copyingActive: "Copying Active",
        activePositions: "Active Positions",
        positions: "Positions",
        copyRatio: "Copy Ratio",
      },
      copyTradingSidebar: {
        overview: "Overview",
        brokerConnections: "Broker Connections",
        myCopyTrades: "My Copy Trades",
        activePositions: "Active Positions",
        performance: "Performance",
        copySettings: "Copy Settings",
        history: "History",
        masterEarnings: "Master Earnings",
        backHome: "Back Home",
        logout: "Logout",
        closeSidebar: "Close Sidebar",
      },
      copyTradingBrokerConnections: {
        brokerConnection: "Broker Connection",
        connectYourBroker: "Connect Your Broker",
        headerDescription:
          "Connect your trading account to manage your trades and monitor your portfolio from one place.",
        secureConnection: "Secure Connection",

        loadingConnection: "Loading live connection state...",
        currentConnection: "Current Connection",
        currentConnectionDescription:
          "Your currently connected trading account",
        connected: "Connected",
        inactive: "Inactive",

        connectionActive:
          "Connection Status: Active & Synced with copy-trade node network.",
        connectionError:
          "Connection Error: Cannot communicate with the server.",
        testing: "Testing...",
        testConnection: "Test Connection",

        loginAccount: "Login Account",
        server: "Server",
        symbol: "Symbol",

        noBrokerLinked: "No Broker Linked",
        noBrokerDescription:
          "Please fill out the form below to synchronize your account.",

        brokerAccount: "Broker Account",
        brokerAccountDescription:
          "Enter your broker account credentials to establish a connection.",

        broker: "Broker",
        loadingBrokers: "Loading verified brokers...",
        other: "Other",

        accountType: "Account Type",
        liveAccount: "Live Account",
        demoAccount: "Demo Account",

        accountId: "Account ID / Login",

        password: "Password",
        passwordPlaceholder: "Enter your password",
        togglePassword: "Show or hide password",

        configurationError:
          "Please fill in Account ID, Server, and Password fields.",

        authenticationSuccess:
          "Authentication Successful: Your MT5 terminal has been linked to the copy-trade cloud engine.",

        authenticationRejected:
          "Authentication Rejected: Connection failed. Verify your details.",

        connecting: "Connecting...",
        connectBroker: "Connect Broker",

        loadingVerifiedBrokers: "Loading verified broker nodes...",

        supportedBrokers: "Supported Brokers",
        supportedBrokersDescription:
          "Select one of the supported trading platforms.",

        noActiveBrokers: "No active brokers registered in the core ledger yet.",

        forexCfdVerified: "Forex & CFD Verified",

        credentialsSecure: "Your credentials are secure",
        securityDescription:
          "Your broker credentials are protected and used only for establishing a connection with your trading account.",
      },
      // en
      myCopyTrading: {
        // ... previous keys

        myCopyTrades: "My Copy Trades",
        copyTradingLabel: "Copy Trading",
        myCopyTradesTitle: "My Copy Trades",
        myCopyTradesDescription:
          "View the trades copied from Amiri Pro Trader to your connected trading account.",
        automaticCopyNotice:
          "These trades are automatically copied from Amiri Pro Trader.",

        loadingCopiedTrades: "Loading copied trades...",

        totalCopiedTrades: "Total Copied Trades",
        winningTrades: "Winning Trades",
        losingTrades: "Losing Trades",
        totalProfit: "Total Profit",

        copiedTradesPortfolio: "Copied Trades Portfolio & Controls",
        terminalSyncLogs:
          "Real-time terminal synchronization logs from MetaTrader 5.",
        symbol: "Symbol",
        type: "Type",
        volume: "Volume",
        entry: "Entry",
        exit: "Exit",
        pnl: "P&L",
        status: "Status",
        actions: "Actions",

        noCopiedTrades:
          "No active or closed trades synchronizing from your MT5 terminal ledger yet.",

        buy: "Buy",
        sell: "Sell",
        pause: "Pause",
        start: "Start",
      },
      copyTradingActivePositions: {
        // ... previous keys

        activePositions: "Active Positions",

        copyTradingActivePositionsTitle: "Active Positions",
        copyTradingActivePositionsDescription:
          "Monitor your currently open positions that are being copied from the professional trader.",
        copyTradingActivePositionsRefresh: "Refresh",

        copyTradingActivePositionsLoading:
          "Streaming active ledger positions from broker...",

        copyTradingActivePositionsOpenPositions: "Open Positions",
        copyTradingActivePositionsOpenPositionsDescription:
          "Currently active live",

        copyTradingActivePositionsTotalVolume: "Total Volume",
        copyTradingActivePositionsTotalVolumeDescription:
          "Combined market volume",

        copyTradingActivePositionsFloatingPnl: "Floating P/L",
        copyTradingActivePositionsFloatingPnlDescription:
          "Current unrealized P/L",

        copyTradingActivePositionsCopyStatus: "Copy Status",
        copyTradingActivePositionsActive: "Active",
        copyTradingActivePositionsIdle: "Idle",
        copyTradingActivePositionsCopying: "Trades are being copied",
        copyTradingActivePositionsWaiting: "Waiting for master trades",

        copyTradingActivePositionsLiveCopied: "Live Copied Positions",

        copyTradingActivePositionsSymbol: "Symbol",
        copyTradingActivePositionsTrader: "Trader",
        copyTradingActivePositionsDirection: "Direction",
        copyTradingActivePositionsLotSize: "Lot Size",
        copyTradingActivePositionsEntryPrice: "Entry Price",
        copyTradingActivePositionsLiveProfitLoss: "Live Profit/Loss",
        copyTradingActivePositionsOpenTime: "Open Time",

        copyTradingActivePositionsEmpty:
          "No active copier trades streaming on MT5 account right now.",

        copyTradingActivePositionsMaster: "Master",
        copyTradingActivePositionsJustNow: "Just Now",
      },
      copyTradingPerformance: {
        performance: "Performance",

        copyTradingPerformanceTitle: "Performance",
        copyTradingPerformanceDescription:
          "Track the performance and profitability of your copied trades over time.",

        copyTradingPerformanceLast30Days: "Last 30 Days",
        copyTradingPerformanceLast3Months: "Last 3 Months",
        copyTradingPerformanceLast6Months: "Last 6 Months",
        copyTradingPerformanceAllTime: "All Time",

        copyTradingPerformanceLoading:
          "Auditing MetaTrader 5 closed order history sequences...",

        copyTradingPerformanceTotalProfit: "Total Profit",
        copyTradingPerformanceTotalProfitDescription:
          "Net profit from copied trades.",

        copyTradingPerformanceRoi: "ROI",
        copyTradingPerformanceRoiDescription: "Return on investment.",

        copyTradingPerformanceWinRate: "Win Rate",
        copyTradingPerformanceWinRateDescription: "Winning copied trades.",

        copyTradingPerformanceMaximumDrawdown: "Maximum Drawdown",
        copyTradingPerformanceMaximumDrawdownDescription:
          "Largest portfolio decline.",

        copyTradingPerformanceProfitFactor: "Profit Factor",
        copyTradingPerformanceProfitFactorDescription:
          "Gross profit / gross loss.",

        copyTradingPerformanceEquityCurve: "Equity Curve",
        copyTradingPerformanceEquityCurveDescription:
          "Growth of your copy trading account over time.",

        copyTradingPerformanceLiveAnalyticsActive: "Live Analytics Active",

        copyTradingPerformanceEquityVectorMessage:
          "Equity vector maps successfully synchronized to Metatrader 5 terminal feeds.",

        copyTradingPerformanceNoLedgerCoordinates:
          "No ledger index coordinates captured.",

        copyTradingPerformanceProfitLoss: "Profit & Loss",
        copyTradingPerformanceProfitLossDescription:
          "Overview of your trading results.",

        copyTradingPerformanceGrossProfit: "Gross Profit",
        copyTradingPerformanceGrossLoss: "Gross Loss",

        copyTradingPerformanceWinningTrades: "Winning Trades",
        copyTradingPerformanceLosingTrades: "Losing Trades",

        copyTradingPerformanceBreakdown: "Performance Breakdown",

        copyTradingPerformanceBestTrade: "Best Trade",
        copyTradingPerformanceWorstTrade: "Worst Trade",
        copyTradingPerformanceAverageTrade: "Average Trade",
        copyTradingPerformanceAverageHoldingTime: "Avg. Holding Time",

        copyTradingPerformanceDailyPerformance: "Daily Performance",
      },
      copyTradingCopySettings: {
        copySettings: "Copy Settings",

        copySettingsTitle: "Copy Settings",
        copySettingsDescription:
          "Manage how trades from the professional trader are copied to your connected trading account.",

        copyingActive: "Copying Active",

        synchronizingAllocationProtocols:
          "Synchronizing allocation protocols...",

        configureCopySettingsTitle: "Copy Settings",
        configureCopySettingsDescription:
          "Configure how trades from Amiri Pro Trader are copied to your account.",

        copyMode: "Copy Mode",
        percentage: "Percentage",
        fixedLot: "Fixed Lot",

        copyRatioMultiplier: "Copy Ratio / Multiplier",

        maximumDrawdown: "Maximum Drawdown",
        maximumDailyLoss: "Maximum Daily Loss",
        maximumLotSize: "Maximum Lot Size",
        maximumOpenPositions: "Maximum Open Positions",

        tradeControls: "Trade Controls",
        tradeControlsDescription:
          "Choose which parts of the professional trader's trades should be copied.",

        copyNewTrades: "Copy New Trades",
        copyNewTradesDescription:
          "Automatically copy new trades opened by the trader.",

        copyStopLoss: "Copy Stop Loss",
        copyStopLossDescription:
          "Apply the trader's stop loss to copied trades.",

        copyTakeProfit: "Copy Take Profit",
        copyTakeProfitDescription:
          "Apply the trader's take profit to copied trades.",

        pauseCopying: "Pause Copying",
        pauseCopyingDescription:
          "Temporarily stop copying new trades without disconnecting the account.",

        stopCopying: "Stop Copying",
        stopCopyingDescription: "Stop copying trades from Amiri Pro Trader.",

        deploying: "Deploying...",
        saveSettings: "Save Settings",

        strategyParametersDeployed:
          "Strategy parameters successfully deployed to cloud network.",

        cloudSyncError: "Cloud Sync Error: Failed to commit modifications.",

        aboutCopySettings: "About Copy Settings",

        aboutCopySettingsDescription:
          "Your copy settings determine how trades from the professional trader are replicated on your connected trading account. Changes should be reviewed carefully before saving.",

        fundsSecurity: "Your funds remain in your connected broker account.",
      },
      copyTradingHistory: {
        history: "History",

        tradeHistory: "Trade History",
        tradeHistoryDescription:
          "View your completed copy trading activity and trade history.",

        synchronizingHistory:
          "Synchronizing live MetaTrader 5 order history ledger...",

        completedTrades:
          "View all completed trades copied from Amiri Pro Trader.",

        trader: "Trader",
        symbol: "Symbol",
        type: "Type",
        copied: "Copied",
        closed: "Closed",
        profitLoss: "Profit / Loss",
        date: "Date",

        yes: "Yes",
        buy: "BUY",
        sell: "SELL",

        noCompletedTrades:
          "No completed trading logs synchronized from your MT5 terminal ledger yet.",

        closedStatus: "Closed",
      },
      copyTradingMyTraders: {
        myCopyTraders: "My Copy Traders",

        myCopyTradersTitle: "My Copy Traders",
        myCopyTradersDescription:
          "Manage your active copy trading connections and monitor performance.",

        copyTradingSystemConnected: "Copy trading system connected",
        refresh: "Refresh",

        synchronizingCopyPortfolio: "Synchronizing copy portfolio nodes...",

        activeTraders: "Active Traders",
        activeTradersDescription: "Currently copying",

        investment: "Investment",
        investmentDescription: "Allocated to copy trading",

        totalProfit: "Total Profit",
        totalProfitDescription: "Closed trades profit",

        return: "Return",
        returnDescription: "Overall account return",

        noCopyTraders: "No Copy Traders",
        noCopyTradersDescription:
          "You are not currently copying any professional trader. Discover traders and start copying a strategy to see it here.",

        manageActiveTraderConnections: "Manage your active trader connections.",

        trader: "Trader",
        traders: "Traders",

        tradingAccount: "Trading Account",
        account: "Account",

        metaTrader5: "MetaTrader 5",

        profit: "Profit",
        winRate: "Win Rate",
        drawdown: "Drawdown",

        started: "Started",

        processing: "Processing...",
        resumeCopying: "Resume Copying",
        pauseCopying: "Pause Copying",
        stopCopying: "Stop Copying",
        copyingStopped: "Copying stopped",

        active: "Active",
        paused: "Paused",
        stopped: "Stopped",

        professionalTrader: "Professional Trader",
      },
      copyTradingActiveCopyTraders: {
        activeCopyTraders: "Active Copy Traders",

        synchronizingActiveCopyTradingNodes:
          "Synchronizing live active copy-trading nodes...",

        yourActiveCopyTraders: "Your Active Copy Traders",

        noActiveMasterTraders:
          "No active master traders are being copied on your MetaTrader 5 account yet.",

        viewPerformance: "View Performance",
        copySettings: "Copy Settings",

        investment: "Investment",
        profit: "Profit",
        return: "Return",
        winRate: "Win Rate",

        copyStatus: "Copy Status",
        copyingActive: "Copying Active",

        activePositions: "Active Positions",
        positions: "Positions",

        copyRatio: "Copy Ratio",

        tradingStatistics: "Trading Statistics",
        detailedTradingPerformance: "Detailed trading performance nodes.",

        totalTrades: "Total Trades",
        profitFactor: "Profit Factor",
        averageWin: "Average Win",

        riskManagement: "Risk Management",
        monitorAndControlRisk: "Monitor and control your copy-trading risk.",

        maxDrawdown: "Max Drawdown",
        stopLoss: "Stop Loss",
        takeProfit: "Take Profit",

        active: "Active",
        forexAndGold: "Forex & Gold",
      },
      copyTradingEarnings: {
        masterEarnings: "Master Earnings",

        loadingMasterAllocationMetrics: "Loading master allocation metrics...",

        yourMasterEarnings: "Your Master Earnings",

        requestWithdrawal: "Request Withdrawal",

        withdrawalDescription:
          "Withdraw your performance fees directly to your personal TRC20 wallet.",

        amountUsdt: "Amount (USDT)",

        amountPlaceholder: "e.g. 150",

        usdtTrc20Address: "USDT TRC-20 Address",

        walletAddressPlaceholder: "T...",

        submitWithdrawalRequest: "Submit Withdrawal Request",

        withdrawalRequested: "Withdrawal Requested",

        requestRejected:
          "Request Rejected: Insufficient balance or invalid wallet sequence.",
      },

      meta: {
        login: {
          title: "Login",
          description:
            "Sign in to your Trade-platform account to access your trading dashboard and manage your trading services.",
        },
        register: {
          title: "Register",
          description:
            "Create your Trade-platform account to access your trading dashboard and manage your trading services.",
        },

        contact: {
          title: "Contact",
          description:
            "Get in touch with Trade-platform support or send us your feedback.",
        },

        home: {
          title: "Home",
          description:
            "Trade-platform, a platform for trading services and trade management.",
        },

        about: {
          title: "About Us",
          description:
            "Learn more about Trade-platform and our trading services.",
        },

        subscription: {
          title: "Subscription",
          description:
            "Explore Trade-platform subscriptions and trading services.",
        },
      },
      footer: {
        description:
          "Professional copy trading and signals provider for Forex and Cryptocurrency markets.",

        quickLinks: "Quick Links",
        home: "Home",
        aboutUs: "About Us",
        contact: "Contact",

        account: "Account",
        login: "Login",
        register: "Register",
        dashboard: "Dashboard",

        contactSupport: "Contact & Support",
        telegramSupport: "Telegram Support",
        emailSupport: "Email Support",

        copyright: "© 2025 Amiri Finance Academy. All Rights Reserved.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,

  fallbackLng: "fa",

  supportedLngs: ["fa", "en"],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
