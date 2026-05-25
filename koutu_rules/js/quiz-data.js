'use strict';
/* ============================================================
   quiz-data.js  — 多言語クイズデータ（全20問）
   対応言語: ja / en / zh / vi / tl / id / my
   ============================================================ */
const QUIZ_DATA = [

  /* ===== Q1: ながら運転 ===== */
  {
    id: 1,
    question: {
      ja: '自転車に乗りながらスマートフォンを手に持って通話した。これはどんな違反ですか？',
      en: 'You held your smartphone and made a phone call while riding your bicycle. What violation is this?',
      zh: '骑自行车时手持智能手机通话。这属于哪种违规行为？',
      vi: 'Bạn vừa đạp xe vừa cầm điện thoại thông minh để gọi điện. Đây là vi phạm gì?',
      tl: 'Habang nagbibisikleta, hawak mo ang smartphone at tumawag. Anong uri ng paglabag ito?',
      id: 'Saat bersepeda, Anda memegang smartphone dan menelepon. Ini termasuk pelanggaran apa?',
      my: 'စက်ဘီးစီးနင်းစဉ် smartphone ကိုင်ကာ ဖုန်းဆက်သည်။ မည်သည့် ချိုးဖောက်မှုနည်း?'
    },
    signImage: 'img/kiken01.png',
    category: 'ながら運転',
    choices: [
      {
        text: {
          ja: '片手運転になるが違反ではない',
          en: 'One-handed riding, but not a violation',
          zh: '单手骑车，但不算违规',
          vi: 'Lái xe một tay nhưng không vi phạm',
          tl: 'Isang kamay lang pero hindi paglabag',
          id: 'Berkendara satu tangan tapi bukan pelanggaran',
          my: 'တစ်ဘက်လက်ဖြင့် မောင်းသည်၊ ချိုးဖောက်မှု မဟုတ်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ながら運転（携帯電話使用等）の違反',
          en: 'Distracted riding (mobile phone use) violation',
          zh: '边骑车边使用手机的违规行为',
          vi: 'Vi phạm lái xe mất tập trung (sử dụng điện thoại)',
          tl: 'Paglabag sa distracted riding (paggamit ng cellphone)',
          id: 'Pelanggaran berkendara sambil menggunakan HP',
          my: 'ဖုန်းသုံးကာ စီးနင်း ချိုးဖောက်မှု (ဆက်သွယ်ရေးကိရိယာ သုံးစွဲမှု)'
        },
        correct: true
      },
      {
        text: {
          ja: '周囲に注意すれば問題ない',
          en: 'No problem as long as you watch your surroundings',
          zh: '只要注意周围就没问题',
          vi: 'Không sao nếu chú ý xung quanh',
          tl: 'Walang problema kung mapagmatyag sa paligid',
          id: 'Tidak masalah selama memperhatikan sekitar',
          my: 'ပတ်ဝန်းကျင် သတိထားလျှင် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: 'ハンズフリーでないと違反',
          en: 'Only a violation without a hands-free device',
          zh: '不用免提才算违规',
          vi: 'Chỉ vi phạm khi không dùng thiết bị rảnh tay',
          tl: 'Paglabag lang kung walang hands-free device',
          id: 'Hanya pelanggaran jika tidak menggunakan hands-free',
          my: 'Hands-free မသုံးမှသာ ချိုးဖောက်မှု'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '自転車に乗りながらスマートフォンを手で保持して通話することは「携帯電話使用等（保持）」の違反です。2026年5月施行の改正道路交通法により自転車にも青切符が交付されます。',
      en: 'Holding a smartphone and making a call while cycling is a "mobile device use (holding)" violation. Under the revised Road Traffic Law effective May 2026, bicycles can also receive a blue ticket.',
      zh: '骑车时手持智能手机通话属于"手机使用（持有）"违规。根据2026年5月实施的修订道路交通法，自行车也将被开具蓝色罚单。',
      vi: 'Cầm điện thoại và gọi điện khi đang đạp xe là vi phạm "sử dụng điện thoại di động (cầm giữ)". Theo Luật Giao thông sửa đổi có hiệu lực tháng 5/2026, xe đạp cũng có thể bị phạt phiếu xanh.',
      tl: 'Ang paghawak ng smartphone at pagtawag habang nagbibisikleta ay paglabag sa "paggamit ng mobile phone (hawak)." Sa ilalim ng binagong batas trapiko na epektibo Mayo 2026, maaari ring makatanggap ng blue ticket ang bisikleta.',
      id: 'Memegang smartphone sambil bersepeda dan menelepon adalah pelanggaran "penggunaan HP (memegang)." Berdasarkan revisi UU Lalu Lintas yang berlaku Mei 2026, sepeda pun bisa mendapat blue ticket.',
      my: 'စက်ဘီးစီးနင်းစဉ် smartphone ကိုင်ကာ ဖုန်းဆက်ခြင်းသည် "မိုဘိုင်းကိရိယာ သုံးစွဲမှု (ကိုင်ဆောင်ခြင်း)" ချိုးဖောက်မှုဖြစ်သည်။ ၂၀၂၆ ခုနှစ် မေလတွင် ပြင်ဆင်ထားသော လမ်းအသွားအလာ ဥပဒေ အသက်ဝင်ပြီး စက်ဘီးများကိုလည်း ဒဏ်ပေးနိုင်သည်။'
    },
    fineAmount: '6,000',
    criminal: false
  },

  /* ===== Q2: ながら運転（画面注視） ===== */
  {
    id: 2,
    question: {
      ja: '自転車で走行中、ポケットからスマホを取り出し画面を見ながら走った。問題はありますか？',
      en: 'While cycling, you took out your smartphone and looked at the screen as you rode. Is this a problem?',
      zh: '骑自行车途中，从口袋取出手机边看屏幕边骑。这有问题吗？',
      vi: 'Trong khi đạp xe, bạn lấy điện thoại ra và vừa nhìn màn hình vừa đi. Điều này có vấn đề không?',
      tl: 'Habang nagbibisikleta, kinuha mo ang smartphone mula sa bulsa at tumingin sa screen habang nagmamaneho. May problema ba ito?',
      id: 'Saat bersepeda, Anda mengeluarkan smartphone dari saku dan melihat layar sambil mengayuh. Apakah ini bermasalah?',
      my: 'စက်ဘီးစီးနင်းစဉ် အိတ်ကပ်မှ smartphone ထုတ်ကာ မျက်နှာပြင်ကြည့်ရင်း မောင်းသည်။ ပြဿနာရှိသလား?'
    },
    signImage: 'img/kiken02.png',
    category: 'ながら運転',
    choices: [
      {
        text: {
          ja: '一瞬なら問題ない',
          en: 'No problem if it is just a glance',
          zh: '只看一眼没问题',
          vi: 'Chỉ liếc qua thì không sao',
          tl: 'Walang problema kung sandali lang',
          id: 'Tidak masalah jika hanya sebentar',
          my: 'တစ်ချက်ကြည့်ရုံမျှ ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '止まってから見れば問題ない（走行中は違反）',
          en: 'Fine if you stop first — looking while moving is a violation',
          zh: '停车后再看没问题（行驶中看是违规）',
          vi: 'Dừng lại rồi xem thì không sao — xem khi đang chạy là vi phạm',
          tl: 'Okay kung huminto muna — pagtingin habang gumagalaw ay paglabag',
          id: 'Boleh jika berhenti dulu — melihat saat bergerak adalah pelanggaran',
          my: 'ရပ်ပြီးမှ ကြည့်လျှင် ပြဿနာမရှိ — မောင်းစဉ် ကြည့်ခြင်းသည် ချိုးဖောက်မှု'
        },
        correct: true
      },
      {
        text: {
          ja: '歩道なら問題ない',
          en: 'No problem on a sidewalk',
          zh: '在人行道上没问题',
          vi: 'Trên vỉa hè thì không sao',
          tl: 'Walang problema sa sidewalk',
          id: 'Tidak masalah di trotoar',
          my: 'လမ်းလျှောက်ကွင်းတွင်ဆိုလျှင် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: 'ながら運転は自動車だけの規制',
          en: 'Distracted riding rules apply only to cars',
          zh: '边走边看手机只是针对汽车的规定',
          vi: 'Quy định lái xe mất tập trung chỉ áp dụng cho ô tô',
          tl: 'Ang distracted riding rules ay para lang sa mga sasakyan',
          id: 'Aturan berkendara sambil main HP hanya untuk mobil',
          my: 'မောင်းရင်းဖုန်းကြည့်ဆိုသည်မှာ ကားများအတွက်သာ စည်းကမ်းရှိ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '走行中に画面を注視する行為は「携帯電話使用等（画像目視）」に該当し、自転車でも違反です。交差点や歩道での事故リスクが非常に高く、危険性があると判断されればより重い罰則が適用される場合もあります。',
      en: 'Looking at a screen while riding is classified as "mobile device use (screen viewing)" and is a violation even on a bicycle. The accident risk at intersections and on sidewalks is very high, and more serious penalties may apply if the behavior is deemed dangerous.',
      zh: '行驶中注视手机屏幕属于"手机使用（图像查看）"违规，骑自行车也不例外。在路口和人行道发生事故的风险极高，若被认定具有危险性，可能面临更重的处罚。',
      vi: 'Nhìn vào màn hình khi đang đạp xe được xếp vào "sử dụng điện thoại di động (xem màn hình)" và là vi phạm dù trên xe đạp. Nguy cơ tai nạn tại ngã tư và trên vỉa hè rất cao; có thể bị phạt nặng hơn nếu bị coi là nguy hiểm.',
      tl: 'Ang pagtingin sa screen habang nagmamaneho ay "paggamit ng mobile device (pagtingin sa screen)" at paglabag kahit sa bisikleta. Napakataas ng panganib ng aksidente sa interseksyon at sidewalk; maaaring mas mabigat na parusa kung ituturing na mapanganib.',
      id: 'Melihat layar saat bersepeda termasuk "penggunaan HP (melihat layar)" dan tetap merupakan pelanggaran. Risiko kecelakaan di persimpangan dan trotoar sangat tinggi, dan sanksi yang lebih berat bisa diterapkan jika dianggap berbahaya.',
      my: 'မောင်းနင်းစဉ် မျက်နှာပြင်ကြည့်ခြင်းသည် "မိုဘိုင်းကိရိယာ သုံးစွဲမှု (မျက်နှာပြင် ကြည့်ရှုခြင်း)" ဟု သတ်မှတ်ပြီး စက်ဘီးတွင်လည်း ချိုးဖောက်မှုဖြစ်သည်။ လမ်းဆုံနှင့် လမ်းလျှောက်ကွင်းတို့တွင် မတော်တဆမှု ဖြစ်နိုင်ချေ မြင့်မားသည်။'
    },
    fineAmount: '6,000',
    criminal: false
  },

  /* ===== Q3: ながら運転（イヤホン） ===== */
  {
    id: 3,
    question: {
      ja: '自転車に乗りながらイヤホンを両耳につけて音楽を聴いた。どうなりますか？',
      en: 'You wore earphones in both ears and listened to music while cycling. What happens?',
      zh: '骑自行车时双耳戴耳机听音乐。会有什么问题？',
      vi: 'Bạn đeo tai nghe cả hai tai và nghe nhạc trong khi đạp xe. Điều gì sẽ xảy ra?',
      tl: 'Nagsuot ka ng earphone sa magkabilang tainga at nakinig ng musika habang nagbibisikleta. Ano ang mangyayari?',
      id: 'Anda memakai earphone di kedua telinga dan mendengarkan musik saat bersepeda. Apa yang akan terjadi?',
      my: 'စက်ဘီးစီးနင်းစဉ် နားကြပ်နှစ်ဘက်ပြည့် တပ်ဆင်ကာ သီချင်းနားထောင်သည်။ မည်သို့ ဖြစ်မည်နည်း?'
    },
    signImage: 'img/kiken03.png',
    category: 'ながら運転',
    choices: [
      {
        text: {
          ja: '音量を小さくすれば問題ない',
          en: 'No problem if you keep the volume low',
          zh: '音量小就没问题',
          vi: 'Không sao nếu giảm âm lượng',
          tl: 'Walang problema kung mababa ang volume',
          id: 'Tidak masalah jika volume kecil',
          my: 'အသံချဲ့မှု နှိမ့်ချထားလျှင် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '片耳だけなら問題ない',
          en: 'No problem with only one ear',
          zh: '只戴一只耳机没问题',
          vi: 'Chỉ một tai thì không sao',
          tl: 'Walang problema kung isang tainga lang',
          id: 'Tidak masalah jika hanya satu telinga',
          my: 'တစ်ဘက်နားသာ ဆိုလျှင် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '周囲の音が聞こえない状態は違反になる',
          en: 'Being unable to hear surrounding sounds is a violation',
          zh: '无法听到周围声音的状态属于违规',
          vi: 'Không thể nghe âm thanh xung quanh là vi phạm',
          tl: 'Ang hindi makarinig ng mga tunog sa paligid ay paglabag',
          id: 'Tidak dapat mendengar suara sekitar merupakan pelanggaran',
          my: 'ပတ်ဝန်းကျင် အသံ မကြားနိုင်သော အခြေအနေသည် ချိုးဖောက်မှု'
        },
        correct: true
      },
      {
        text: {
          ja: '骨伝導イヤホンなら常に問題ない',
          en: 'Bone-conduction earphones are always fine',
          zh: '骨传导耳机永远没问题',
          vi: 'Tai nghe dẫn truyền xương thì luôn không sao',
          tl: 'Ang bone-conduction earphone ay palaging okay',
          id: 'Earphone konduksi tulang selalu tidak masalah',
          my: 'အရိုးဆက်ပြေး နားကြပ်ဆိုလျှင် အမြဲပြဿနာမရှိ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '両耳にイヤホンをつけて周囲の音が聞こえない状態での運転は、都道府県の交通規則により「安全運転義務違反」等に問われます。緊急車両のサイレンや他者の警告が聞こえず重大事故につながります。',
      en: 'Riding with earphones in both ears so you cannot hear surrounding sounds may be cited as a "safe driving obligation violation" under prefectural traffic rules. Missing emergency sirens or warnings from others can lead to serious accidents.',
      zh: '双耳戴耳机导致无法听到周围声音，根据各都道府县交通规则，可能被追究"安全驾驶义务违反"等责任。听不到救护车警报或他人警告，可能引发严重事故。',
      vi: 'Đeo tai nghe cả hai tai khiến không nghe được âm thanh xung quanh có thể bị xử phạt "vi phạm nghĩa vụ lái xe an toàn" theo quy định giao thông của từng tỉnh. Không nghe thấy còi xe cứu thương hay cảnh báo của người khác có thể dẫn đến tai nạn nghiêm trọng.',
      tl: 'Ang pagsakay nang may earphone sa magkabilang tainga na hindi makarinig ng mga tunog sa paligid ay maaaring makulong bilang "paglabag sa ligtas na pagmamaneho" ayon sa mga lokal na regulasyon. Ang hindi pakiramdam ng sirena ng emergency o babala ng iba ay maaaring magdulot ng malubhang aksidente.',
      id: 'Bersepeda dengan earphone di kedua telinga sehingga tidak dapat mendengar suara sekitar dapat dikenai "pelanggaran kewajiban berkendara aman" sesuai peraturan lalu lintas prefektur. Tidak mendengar sirene kendaraan darurat atau peringatan orang lain bisa menyebabkan kecelakaan serius.',
      my: 'နားကြပ်နှစ်ဘက်တပ်ဆင်ကာ ပတ်ဝန်းကျင် အသံ မကြားနိုင်သော အခြေအနေတွင် စီးနင်းခြင်းသည် ခရိုင်ဆိုင်ရာ ယာဉ်ကြောစည်းကမ်းများအရ "လုံခြုံသောမောင်းနှင်မှု တာဝန်ဝတ္တရားချိုးဖောက်ခြင်း" ဟု ယူဆနိုင်သည်။'
    },
    fineAmount: '3,000〜6,000',
    criminal: false
  },

  /* ===== Q4: ながら運転（傘差し） ===== */
  {
    id: 4,
    question: {
      ja: '自転車走行中に傘を片手でさしながら雨の中を走った。この行為は？',
      en: 'You held an umbrella with one hand while cycling in the rain. What is this behavior?',
      zh: '骑自行车时单手撑伞在雨中行驶。这种行为如何？',
      vi: 'Bạn cầm ô bằng một tay khi đạp xe trong mưa. Hành động này như thế nào?',
      tl: 'Humawak ka ng payong ng isang kamay habang nagbibisikleta sa ulan. Ano ang gawaing ito?',
      id: 'Anda memegang payung dengan satu tangan saat bersepeda di tengah hujan. Apa tindakan ini?',
      my: 'မိုးထဲတွင် စက်ဘီးစီးနင်းစဉ် တစ်ဘက်လက်ဖြင့် ထီးကိုင်၍ မောင်းသည်။ ဤလုပ်ရပ်မှာ?'
    },
    signImage: 'img/kiken04.png',
    category: 'ながら運転',
    choices: [
      {
        text: {
          ja: '小雨なら問題ない',
          en: 'No problem in light rain',
          zh: '小雨没问题',
          vi: 'Mưa nhỏ thì không sao',
          tl: 'Walang problema sa magaang na ulan',
          id: 'Tidak masalah saat hujan ringan',
          my: 'မိုးသေးသေးဆိုလျှင် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '歩道を走るなら傘を差してもよい',
          en: 'Using an umbrella is fine on a sidewalk',
          zh: '在人行道骑车可以撑伞',
          vi: 'Dùng ô trên vỉa hè thì được',
          tl: 'Okay ang payong sa sidewalk',
          id: 'Payung boleh digunakan di trotoar',
          my: 'လမ်းလျှောက်ကွင်းတွင် ဆိုလျှင် ထီးကိုင်ပါ သွားနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '傘差し運転は安全運転義務違反',
          en: 'Riding with an umbrella is a safe-driving obligation violation',
          zh: '撑伞骑车属于违反安全驾驶义务',
          vi: 'Đi xe đạp cầm ô là vi phạm nghĩa vụ lái xe an toàn',
          tl: 'Ang pagsakay na may payong ay paglabag sa safe-driving obligation',
          id: 'Bersepeda sambil memegang payung melanggar kewajiban berkendara aman',
          my: 'ထီးကိုင်ကာ စီးနင်းခြင်းသည် လုံခြုံသောမောင်းနှင်မှု တာဝန်ဝတ္တရားချိုးဖောက်ခြင်း'
        },
        correct: true
      },
      {
        text: {
          ja: '片手でも安全に走れれば問題ない',
          en: 'No problem if you can ride safely one-handed',
          zh: '单手能安全骑行就没问题',
          vi: 'Không sao nếu có thể đi xe an toàn bằng một tay',
          tl: 'Walang problema kung ligtas na makasakay ng isang kamay',
          id: 'Tidak masalah jika bisa berkendara aman dengan satu tangan',
          my: 'တစ်ဘက်လက်ဖြင့် လုံခြုံစွာ မောင်းနင်းနိုင်လျှင် ပြဿနာမရှိ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '傘を片手で差しながら自転車を運転する「傘差し運転」は、ハンドル操作が不十分になり安全運転義務違反に該当します。2026年5月施行の改正道路交通法で青切符の対象です。雨天時はレインコートを使用しましょう。',
      en: '"Umbrella riding" — holding an umbrella with one hand while cycling — impairs steering control and is a safe-driving obligation violation. It is subject to a blue ticket under the revised Road Traffic Law effective May 2026. Use a raincoat in wet weather.',
      zh: '单手撑伞骑自行车的"撑伞骑行"行为，会导致把手操作不足，属于违反安全驾驶义务。依据2026年5月实施的修订道路交通法，将被开具蓝色罚单。雨天请使用雨衣。',
      vi: '"Đi xe đạp cầm ô" — cầm ô bằng một tay khi đạp xe — làm giảm khả năng điều khiển tay lái và là vi phạm nghĩa vụ lái xe an toàn. Sẽ bị phạt phiếu xanh theo Luật Giao thông sửa đổi có hiệu lực tháng 5/2026. Hãy mặc áo mưa khi trời mưa.',
      tl: 'Ang "umbrella riding" — paghawak ng payong ng isang kamay habang nagbibisikleta — ay nagpapahina ng kontrol sa manibela at paglabag sa safe-driving obligation. Sakop ng blue ticket sa ilalim ng binagong batas trapiko na epektibo Mayo 2026. Gumamit ng raincoat sa mauvlan na panahon.',
      id: '"Berkendara dengan payung" — memegang payung satu tangan saat bersepeda — mengurangi kemampuan mengendalikan setang dan melanggar kewajiban berkendara aman. Dikenai blue ticket berdasarkan revisi UU Lalu Lintas Mei 2026. Gunakan jas hujan saat hujan.',
      my: 'ထီးကိုင်ကာ စီးနင်းသည့် "ထီးကိုင်စီး" ပုံစံသည် ဘောင်းပတ်ကို မှန်ကန်စွာ မကိုင်နိုင်သောကြောင့် လုံခြုံသောမောင်းနှင်မှု တာဝန်ဝတ္တရားချိုးဖောက်ခြင်း ဖြစ်သည်။ မိုးရာသီတွင် မိုးကာဝတ်ကို သုံးပါ။'
    },
    fineAmount: '3,000',
    criminal: false
  },

  /* ===== Q5: 酒気帯び運転 ===== */
  {
    id: 5,
    question: {
      ja: 'お酒を飲んだ後に自転車に乗ってはいけない理由として、正しいものはどれですか？',
      en: 'Which of the following correctly explains why you must not ride a bicycle after drinking?',
      zh: '以下哪项正确说明了饮酒后不能骑自行车的原因？',
      vi: 'Điều nào sau đây giải thích đúng lý do tại sao không được đi xe đạp sau khi uống rượu?',
      tl: 'Alin sa mga sumusunod ang tamang paliwanag kung bakit hindi dapat magbisikleta pagkatapos uminom?',
      id: 'Mana yang benar menjelaskan mengapa tidak boleh bersepeda setelah minum alkohol?',
      my: 'အောက်ပါတို့တွင် အရက်သောက်ပြီးနောက် စက်ဘီးမစီးသင့်ရသည့် အကြောင်းရင်းကို မှန်ကန်စွာ ရှင်းပြသည်မှာ အဘယ်နည်း?'
    },
    signImage: 'img/kiken05.png',
    category: '酒気帯び運転',
    choices: [
      {
        text: {
          ja: '自転車は飲酒運転の規則に含まれない',
          en: 'Bicycles are not covered by drunk-riding rules',
          zh: '自行车不在酒驾规定范围内',
          vi: 'Xe đạp không thuộc phạm vi quy định lái xe say rượu',
          tl: 'Hindi saklaw ng mga patakaran sa drunk riding ang bisikleta',
          id: 'Sepeda tidak termasuk dalam aturan berkendara mabuk',
          my: 'စက်ဘီးသည် မူးယစ်မောင်းနှင်မှုဆိုင်ရာ စည်းကမ်းတွင် မပါဝင်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ふらついて事故を起こしやすく、法律で禁止されている',
          en: 'Alcohol causes unsteady riding and accidents, and it is banned by law',
          zh: '容易摇摇晃晃发生事故，且法律明令禁止',
          vi: 'Rượu gây mất thăng bằng và tai nạn, và bị pháp luật cấm',
          tl: 'Nagdudulot ng pagkakaroon ng aksidente dahil sa pagkawala ng balanse, at ipinagbabawal ng batas',
          id: 'Alkohol menyebabkan oleng dan kecelakaan, serta dilarang oleh hukum',
          my: 'မတည်ငြိမ်မှု ဖြစ်ပေါ်ပြီး မတော်တဆမှု ဖြစ်နိုင်သည်၊ ထို့ပြင် ဥပဒေအရ တားမြစ်ထားသည်'
        },
        correct: true
      },
      {
        text: {
          ja: '歩道を走れば大丈夫',
          en: 'It is fine to ride on the sidewalk',
          zh: '走人行道就没问题',
          vi: 'Đi trên vỉa hè thì không sao',
          tl: 'Okay lang kung sa sidewalk magmaneho',
          id: 'Tidak masalah jika bersepeda di trotoar',
          my: 'လမ်းလျှောက်ကွင်းပေါ်တွင် ဆိုလျှင် ရပါသည်'
        },
        correct: false
      },
      {
        text: {
          ja: '近所なら問題ない',
          en: 'No problem for short distances nearby',
          zh: '附近的话没问题',
          vi: 'Gần nhà thì không sao',
          tl: 'Walang problema kung malapit lang',
          id: 'Tidak masalah jika jaraknya dekat',
          my: 'နီးနားလျှင် ပြဿနာမရှိ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: 'お酒を飲むと判断力や運動能力が下がり、ふらついて歩行者や車にぶつかる危険があります。自転車の飲酒運転は道路交通法で厳しく禁止されており、重い罰則があります。「少しだから」「近くだから」は通じません。絶対にやめましょう。',
      en: 'Alcohol impairs judgment and coordination, making you wobble and risk colliding with pedestrians or vehicles. Drunk cycling is strictly prohibited under the Road Traffic Law and carries heavy penalties. "Just a little" or "only nearby" are not excuses. Never do it.',
      zh: '饮酒会降低判断力和运动能力，容易摇晃撞上行人或车辆。自行车酒驾在《道路交通法》中被严格禁止，处罚严厉。"只喝了一点"或"距离很近"都不是理由，请务必杜绝。',
      vi: 'Rượu làm giảm khả năng phán đoán và phối hợp, khiến bạn loạng choạng và có nguy cơ va chạm với người đi bộ hoặc phương tiện khác. Đạp xe sau khi uống rượu bị nghiêm cấm theo Luật Giao thông và chịu hình phạt nặng. "Chỉ uống một chút" hay "gần nhà thôi" không phải là lý do. Tuyệt đối không làm vậy.',
      tl: 'Pinipigilan ng alkohol ang pagpapasya at koordinasyon, na nagpapanganib na mabangga ang mga pedestrian o sasakyan. Ang drunk cycling ay mahigpit na ipinagbabawal ng Road Traffic Law at may mabigat na parusa. "Kaunti lang" o "malapit lang" ay hindi dahilan. Huwag gawin.',
      id: 'Alkohol mengganggu penilaian dan koordinasi, membuat Anda oleng dan berisiko menabrak pejalan kaki atau kendaraan. Bersepeda dalam keadaan mabuk dilarang keras oleh UU Lalu Lintas dan dikenai sanksi berat. "Hanya sedikit" atau "dekat saja" bukan alasan. Jangan pernah lakukan.',
      my: 'အရက်သောက်ခြင်းသည် ဆုံးဖြတ်ချက်ချနိုင်မှုနှင့် ကိုယ်ခန္ဓာ တော်တောင့်မှုကို လျော့နည်းစေပြီး လမ်းလျှောက်သူများနှင့် ယာဉ်များကို တိုက်မိနိုင်သည်။ အရက်မူးကာ စက်ဘီးစီးနင်းခြင်းကို လမ်းအသွားအလာ ဥပဒေဖြင့် တင်းကျပ်စွာ တားမြစ်ထားသည်။'
    },
    fineAmount: null,
    criminal: true
  },

  /* ===== Q6: 二人乗り ===== */
  {
    id: 6,
    question: {
      ja: '友達を自転車の後ろに乗せて2人で走った。これは違反になりますか？',
      en: 'You let a friend ride on the back of your bicycle and rode together. Is this a violation?',
      zh: '让朋友坐在自行车后座一起骑行。这算违规吗？',
      vi: 'Bạn để bạn bè ngồi sau xe đạp của mình và cùng đạp. Đây có phải vi phạm không?',
      tl: 'Pinasakay mo ang kaibigan sa likod ng iyong bisikleta at nagmaneho kayo. Paglabag ba ito?',
      id: 'Anda membawa teman naik di belakang sepeda dan bersepeda bersama. Apakah ini pelanggaran?',
      my: 'မိတ်ဆွေကို စက်ဘီးနောက်ကျော တင်ကာ နှစ်ဦးအတူ မောင်းသည်။ ဤသည် ချိုးဖောက်မှုလား?'
    },
    signImage: 'img/kiken06.png',
    category: 'その他の違反',
    choices: [
      {
        text: {
          ja: '友達なら乗せてもよい',
          en: 'It is fine to carry a friend',
          zh: '朋友的话可以带',
          vi: 'Bạn bè thì được phép',
          tl: 'Okay kung kaibigan ang sinasakay',
          id: 'Boleh jika yang dibawa teman',
          my: 'မိတ်ဆွေဆိုလျှင် တင်ခွင့်ရှိသည်'
        },
        correct: false
      },
      {
        text: {
          ja: '歩道なら2人乗りしてもよい',
          en: 'Two people are allowed on a sidewalk',
          zh: '在人行道可以两人骑',
          vi: 'Được phép hai người trên vỉa hè',
          tl: 'Dalawang tao ay okay sa sidewalk',
          id: 'Dua orang boleh di trotoar',
          my: 'လမ်းလျှောက်ကွင်းတွင် ဆိုလျှင် နှစ်ဦးစီးနင်းခွင့်ရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '原則として違反になる',
          en: 'In principle, it is a violation',
          zh: '原则上属于违规',
          vi: 'Về nguyên tắc, đây là vi phạm',
          tl: 'Sa prinsipyo, ito ay paglabag',
          id: 'Pada prinsipnya, ini adalah pelanggaran',
          my: 'မူလမူအရ ချိုးဖောက်မှုဖြစ်သည်'
        },
        correct: true
      },
      {
        text: {
          ja: 'ゆっくり走れば問題ない',
          en: 'No problem if you ride slowly',
          zh: '慢慢骑就没问题',
          vi: 'Không sao nếu đi chậm',
          tl: 'Walang problema kung mabagal ang takbo',
          id: 'Tidak masalah jika bersepeda pelan',
          my: 'နှေးနှေး မောင်းလျှင် ပြဿနာမရှိ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '自転車の二人乗りは原則として違反です（安全運転義務違反）。ただし、幼児用座席に6歳未満の子どもを乗せる場合や、特別に認められた自転車（タンデム自転車など）は例外です。転倒すると2人とも大けがをする危険があります。',
      en: 'Carrying a passenger on a bicycle is, in principle, a violation (safe-driving obligation). Exceptions include placing a child under 6 in an infant seat, or using a specially approved tandem bicycle. Both riders risk serious injury in a fall.',
      zh: '原则上，自行车两人乘坐属于违规（违反安全驾驶义务）。但例外情况包括：将6岁以下幼儿安置于儿童座椅，或使用特别认可的自行车（如双人自行车）。摔倒时两人都可能受重伤。',
      vi: 'Về nguyên tắc, chở người trên xe đạp là vi phạm (vi phạm nghĩa vụ lái xe an toàn). Ngoại lệ bao gồm việc đặt trẻ dưới 6 tuổi vào ghế trẻ em, hoặc sử dụng xe đạp đôi được phép. Cả hai người đều có nguy cơ bị thương nặng khi té ngã.',
      tl: 'Ang pagdadala ng pasahero sa bisikleta ay, sa prinsipyo, paglabag (safe-driving obligation). Kasama sa mga pagbubukod ang paglalagay ng batang wala pang 6 sa infant seat, o paggamit ng espesyal na awtorisadong tandem bicycle. Parehong maaaring matamaan nang malubha sa isang pagkahulog.',
      id: 'Membawa penumpang di sepeda pada prinsipnya adalah pelanggaran (kewajiban berkendara aman). Pengecualiannya adalah menempatkan anak di bawah 6 tahun di kursi bayi, atau menggunakan sepeda tandem yang disetujui khusus. Keduanya berisiko cedera serius jika jatuh.',
      my: 'မူလမူအရ၊ စက်ဘီးတွင် ခရီးသည် တင်ခြင်းသည် ချိုးဖောက်မှု (လုံခြုံသောမောင်းနှင်မှု တာဝန်ဝတ္တရားချိုးဖောက်ခြင်း) ဖြစ်သည်။ ၆ နှစ်မပြည့်သေးသော ကလေးကို ကလေးထိုင်ခုံတွင် ထိုင်ခိုင်းခြင်း သို့မဟုတ် ထူးခြားစွာ ခွင့်ပြုထားသော ဆိုင်ကယ် (tandem bicycle) သုံးခြင်း သည် ချွင်းချက်ဖြစ်သည်။'
    },
    fineAmount: '3,000',
    criminal: false
  },

  /* ===== Q7: 信号無視（赤信号） ===== */
  {
    id: 7,
    question: {
      ja: '赤信号で止まろうとしたとき「自転車だから少しくらい…」と思い、そのまま進んだ。これは？',
      en: 'At a red light, you thought "It\'s just a bicycle, a little bit is fine…" and proceeded. What is this?',
      zh: '红灯时想"反正是自行车，差不多吧……"就直接通过了。这是？',
      vi: 'Khi đèn đỏ, bạn nghĩ "Chỉ là xe đạp thôi, một chút cũng được…" rồi tiếp tục đi. Đây là gì?',
      tl: 'Sa pulang ilaw, naisip mo "Bisikleta lang naman, kaunti lang…" at nagpatuloy ka. Ano ito?',
      id: 'Saat lampu merah, Anda berpikir "Hanya sepeda, sedikit saja tidak apa…" dan terus melaju. Apa ini?',
      my: 'အနီရောင် မီးတွင် "စက်ဘီးသာမို့ နည်းနည်းလောက်…" ဟုထင်ကာ ဆက်မောင်းသည်။ ဤသည်မှာ?'
    },
    signImage: 'img/kiken07.png',
    category: '信号無視',
    choices: [
      {
        text: {
          ja: '自転車は信号に従わなくてよい',
          en: 'Bicycles do not need to obey traffic signals',
          zh: '自行车不需要遵守信号灯',
          vi: 'Xe đạp không cần tuân thủ đèn giao thông',
          tl: 'Hindi kailangang sundin ng bisikleta ang traffic signal',
          id: 'Sepeda tidak perlu mematuhi lampu lalu lintas',
          my: 'စက်ဘီးသည် မီးပြိုင့်ကို လိုက်နာရန် မလိုအပ်'
        },
        correct: false
      },
      {
        text: {
          ja: '歩行者信号に従えばよい',
          en: 'Following the pedestrian signal is sufficient',
          zh: '遵守行人信号就行',
          vi: 'Tuân theo đèn tín hiệu dành cho người đi bộ là đủ',
          tl: 'Sapat na ang pagsunod sa pedestrian signal',
          id: 'Cukup mengikuti sinyal pejalan kaki',
          my: 'လမ်းလျှောက်သူ မီးတစ်ခုကိုသာ လိုက်နာလျှင် လုံလောက်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '信号無視の違反、青切符の対象',
          en: 'Signal violation — subject to a blue ticket',
          zh: '闯红灯违规，将被开蓝色罚单',
          vi: 'Vi phạm đèn tín hiệu — bị phạt phiếu xanh',
          tl: 'Paglabag sa signal — sakop ng blue ticket',
          id: 'Pelanggaran lampu lalu lintas — dikenai blue ticket',
          my: 'မီးပြိုင့် ချိုးဖောက်မှု — ဒဏ်ကြေး ပေးရနိုင်သည်'
        },
        correct: true
      },
      {
        text: {
          ja: '車が来ていなければ問題ない',
          en: 'No problem if no cars are coming',
          zh: '没有车来的话没问题',
          vi: 'Không sao nếu không có xe đang đến',
          tl: 'Walang problema kung walang sasakyang darating',
          id: 'Tidak masalah jika tidak ada kendaraan yang datang',
          my: 'ကား မရောက်သေးလျှင် ပြဿနာမရှိ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '自転車も信号機に従う義務があります。赤信号を無視して進むのは信号無視の違反です。2026年5月施行の改正道路交通法で自転車にも青切符が交付されます。',
      en: 'Bicycles are obligated to obey traffic signals. Running a red light is a signal violation. Under the revised Road Traffic Law effective May 2026, bicycles can also receive a blue ticket.',
      zh: '自行车也有遵守交通信号的义务。闯红灯属于信号违规。依据2026年5月实施的修订道路交通法，自行车也将收到蓝色罚单。',
      vi: 'Xe đạp cũng có nghĩa vụ tuân thủ đèn giao thông. Vượt đèn đỏ là vi phạm tín hiệu. Theo Luật Giao thông sửa đổi có hiệu lực tháng 5/2026, xe đạp cũng có thể nhận phiếu phạt xanh.',
      tl: 'Ang mga bisikleta ay obligadong sumunod sa mga traffic signal. Ang paglampas ng pulang ilaw ay paglabag sa signal. Sa ilalim ng binagong Road Traffic Law na epektibo Mayo 2026, maaari ring makatanggap ng blue ticket ang bisikleta.',
      id: 'Sepeda juga wajib mematuhi lampu lalu lintas. Menerobos lampu merah adalah pelanggaran sinyal. Berdasarkan revisi UU Lalu Lintas Mei 2026, sepeda pun bisa mendapat blue ticket.',
      my: 'စက်ဘီးများသည်လည်း မီးပြိုင့်ကို လိုက်နာရန် တာဝန်ရှိသည်။ အနီရောင်မီးကို ဖြတ်ကျော်ခြင်းသည် မီးပြိုင့် ချိုးဖောက်မှု ဖြစ်သည်။ ၂၀၂၆ ခုနှစ် မေလတွင် ပြင်ဆင်ထားသော လမ်းအသွားအလာ ဥပဒေ အသက်ဝင်ပြီး စက်ဘီးများကိုလည်း ဒဏ်ပေးနိုင်သည်။'
    },
    fineAmount: '6,000',
    criminal: false
  },

  /* ===== Q8: 一時不停止（止まれ標識） ===== */
  {
    id: 8,
    question: {
      ja: '「止まれ（一時停止）」の標識のある交差点で、左右を見ながらゆっくり通過した。問題は？',
      en: 'At an intersection marked "STOP," you looked left and right and passed through slowly. Is there a problem?',
      zh: '在有"停止（临时停车）"标志的路口，一边左右张望一边缓慢通过。有问题吗？',
      vi: 'Tại ngã tư có biển "DỪNG LẠI," bạn nhìn sang hai bên và đi qua từ từ. Có vấn đề không?',
      tl: 'Sa isang interseksyon na may karatulang "STOP," tumingin ka sa kaliwa at kanan at dahan-dahang lumipas. Mayroon bang problema?',
      id: 'Di persimpangan bertanda "STOP," Anda melihat kiri-kanan dan melintas perlahan. Ada masalah?',
      my: '"STOP" ဆိုင်းဘုတ်ရှိသော လမ်းဆုံတွင် ဘယ်ညာ ကြည့်ကာ နှေးနှေး ဖြတ်သည်။ ပြဿနာရှိသလား?'
    },
    signImage: 'img/kiken08.png',
    category: '一時不停止',
    choices: [
      {
        text: {
          ja: '徐行したから問題ない',
          en: 'No problem because you slowed down',
          zh: '减速了就没问题',
          vi: 'Không sao vì đã giảm tốc',
          tl: 'Walang problema dahil bumagal ka',
          id: 'Tidak masalah karena sudah memperlambat',
          my: 'နှေးချလိုက်သောကြောင့် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '車輪が止まらなければ一時不停止の違反',
          en: 'If the wheels do not stop completely, it is a failure-to-stop violation',
          zh: '车轮不完全停止则属于临时停车违规',
          vi: 'Nếu bánh xe không dừng hoàn toàn, đó là vi phạm không dừng',
          tl: 'Kung hindi tumitigil ang gulong, ito ay paglabag sa pagtigil',
          id: 'Jika roda tidak berhenti sepenuhnya, itu adalah pelanggaran tidak berhenti',
          my: ' bánh xe ဘီးများ လုံးဝ ရပ်မနေလျှင် ရပ်ရန်ပျက်ကွက်မှု ချိုးဖောက်မှု ဖြစ်သည်'
        },
        correct: true
      },
      {
        text: {
          ja: '自転車は止まれ標識に従わなくてよい',
          en: 'Bicycles do not need to follow STOP signs',
          zh: '自行车不需要遵守停止标志',
          vi: 'Xe đạp không cần tuân theo biển DỪNG LẠI',
          tl: 'Hindi kailangang sumunod ng bisikleta sa STOP sign',
          id: 'Sepeda tidak perlu mengikuti rambu STOP',
          my: 'စက်ဘီးသည် STOP ဆိုင်းဘုတ်ကို လိုက်နာရန် မလိုအပ်'
        },
        correct: false
      },
      {
        text: {
          ja: '左右確認すれば一時停止しなくてよい',
          en: 'Checking left and right means you do not need to stop',
          zh: '确认左右就不需要临时停车',
          vi: 'Nhìn trái phải thì không cần dừng',
          tl: 'Kung nagsuri ng kaliwa at kanan ay hindi na kailangang huminto',
          id: 'Melihat kiri-kanan berarti tidak perlu berhenti',
          my: 'ဘယ်ညာ စစ်ဆေးလျှင် ရပ်ရန် မလိုအပ်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「止まれ」標識では、車輪が完全に止まるまで一時停止しなければなりません。「ゆっくり通過」「徐行」では違反になります。2026年5月施行の改正道路交通法で青切符の対象です。',
      en: 'At a STOP sign, you must come to a complete stop — wheels fully stopped. Merely slowing down is a violation. This is subject to a blue ticket under the revised Road Traffic Law effective May 2026.',
      zh: '遇"停止"标志，必须完全停车，直到车轮完全静止。"缓慢通过"或"减速"均属违规。依据2026年5月实施的修订道路交通法，将被开具蓝色罚单。',
      vi: 'Tại biển DỪNG LẠI, bạn phải dừng hoàn toàn — bánh xe không còn chuyển động. Chỉ giảm tốc là vi phạm. Điều này bị phạt phiếu xanh theo Luật Giao thông sửa đổi có hiệu lực tháng 5/2026.',
      tl: 'Sa isang STOP sign, kailangan mong huminto nang ganap — mga gulong na ganap na tumitigil. Ang pagbagal lamang ay paglabag. Sakop ito ng blue ticket sa ilalim ng binagong Road Traffic Law na epektibo Mayo 2026.',
      id: 'Di rambu STOP, Anda harus berhenti sepenuhnya — roda berhenti total. Sekadar memperlambat adalah pelanggaran. Ini dikenai blue ticket berdasarkan revisi UU Lalu Lintas Mei 2026.',
      my: 'STOP ဆိုင်းဘုတ်တွင် ဘီးများ လုံးဝ ရပ်သည်အထိ လုံးဝ ရပ်ရမည်ဖြစ်သည်။ နှေးချရုံဖြင့် ဖြတ်ကျော်ခြင်းသည် ချိုးဖောက်မှု ဖြစ်သည်။ ၂၀၂၆ ခုနှစ် မေလ ပြင်ဆင်ထားသော ဥပဒေ အသက်ဝင်ပြီး ဒဏ်ပေးနိုင်သည်။'
    },
    fineAmount: '5,000',
    criminal: false
  },

  /* ===== Q9: 信号無視（黄色） ===== */
  {
    id: 9,
    question: {
      ja: '黄色信号になったとき「急いで渡り切ろう」と加速して交差点に進入した。これは？',
      en: 'When the signal turned yellow, you sped up thinking "I will rush across" and entered the intersection. What is this?',
      zh: '信号变黄时，想着"赶紧冲过去"而加速进入路口。这是？',
      vi: 'Khi đèn chuyển vàng, bạn tăng tốc nghĩ "Cố vượt nhanh qua" và vào ngã tư. Đây là gì?',
      tl: 'Nang mag-yellow ang signal, pinabilis mo ang takbo na nag-iisip na "Mabilis na makatawid" at pumasok sa interseksyon. Ano ito?',
      id: 'Ketika lampu berubah kuning, Anda mempercepat sambil berpikir "Cepat lewat" dan memasuki persimpangan. Apa ini?',
      my: 'မီးဝါရောင်သို့ ပြောင်းသောအခါ "လျင်မြန်စွာ ကူးမည်" ဟုထင်ကာ ချဲ့ကာ လမ်းဆုံသို့ ဝင်သည်။ ဤသည်မှာ?'
    },
    signImage: 'img/kiken09.png',
    category: '信号無視',
    choices: [
      {
        text: {
          ja: '黄色は「注意して進め」なので問題ない',
          en: 'Yellow means "proceed with caution," so no problem',
          zh: '黄色意思是"注意前进"，所以没问题',
          vi: 'Vàng có nghĩa là "cẩn thận tiến", nên không sao',
          tl: 'Ang dilaw ay "magpatuloy nang maingat," kaya walang problema',
          id: 'Kuning berarti "lanjut dengan hati-hati," jadi tidak masalah',
          my: 'ဝါရောင်ဆိုသည်မှာ "သတိထားကာ ဆက်မောင်းပါ" ဟု အဓိပ္ပာယ်ရသောကြောင့် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '交差点手前で止まれる場合は停止が原則',
          en: 'If you can safely stop before the intersection, stopping is the rule',
          zh: '如果在路口前能安全停车，停车是原则',
          vi: 'Nếu có thể dừng an toàn trước ngã tư, việc dừng lại là nguyên tắc',
          tl: 'Kung maaaring ligtas na huminto bago ang interseksyon, ang pagtigil ang panuntunan',
          id: 'Jika bisa berhenti aman sebelum persimpangan, berhenti adalah aturannya',
          my: 'လမ်းဆုံမတိုင်မီ လုံခြုံစွာ ရပ်နိုင်လျှင် ရပ်ခြင်းသည် မူဝါဒဖြစ်သည်'
        },
        correct: true
      },
      {
        text: {
          ja: '速度を上げれば問題ない',
          en: 'No problem if you speed up to clear the intersection',
          zh: '加速通过就没问题',
          vi: 'Không sao nếu tăng tốc để qua ngã tư',
          tl: 'Walang problema kung mapabilis ang takbo para makalayo sa interseksyon',
          id: 'Tidak masalah jika mempercepat untuk melewati persimpangan',
          my: 'လမ်းဆုံကို ပိုမြန်မြန် ဖြတ်နိုင်ရန် ချဲ့ကာ မောင်းလျှင် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車は黄信号を無視できる',
          en: 'Bicycles can ignore yellow signals',
          zh: '自行车可以无视黄灯',
          vi: 'Xe đạp có thể bỏ qua đèn vàng',
          tl: 'Maaaring balewalain ng bisikleta ang yellow signal',
          id: 'Sepeda bisa mengabaikan lampu kuning',
          my: 'စက်ဘီးသည် ဝါရောင်မီးကို လျစ်လျူရှုနိုင်သည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '黄色信号は「止まれ（停止できる場合）」を意味します。交差点手前で安全に停止できるなら止まるのが原則で、加速して進入するのは信号無視に準じた危険行為です。自転車も信号機の規則に従わなければなりません。',
      en: 'A yellow signal means "stop if you safely can." If you can stop safely before the intersection, you must do so. Speeding up to enter is a dangerous act equivalent to a signal violation. Bicycles must follow traffic signal rules.',
      zh: '黄色信号意味着"停车（如果能停下来的话）"。如果能在路口前安全停车，原则上应该停车。加速进入路口是危险行为，相当于信号违规。自行车同样须遵守交通信号规则。',
      vi: 'Đèn vàng có nghĩa là "dừng lại nếu có thể dừng an toàn." Nếu có thể dừng an toàn trước ngã tư, bạn phải dừng. Tăng tốc để vào ngã tư là hành vi nguy hiểm tương đương vi phạm tín hiệu. Xe đạp cũng phải tuân theo quy tắc đèn giao thông.',
      tl: 'Ang yellow signal ay nangangahulugang "huminto kung maaari mong ligtas na gawin." Kung kaya mong ligtas na huminto bago ang interseksyon, dapat mo itong gawin. Ang pagbilis para pumasok ay isang mapanganib na kilos na katumbas ng paglabag sa signal. Ang mga bisikleta ay dapat din sumunod sa mga panuntunan ng traffic signal.',
      id: 'Lampu kuning berarti "berhenti jika bisa berhenti aman." Jika bisa berhenti aman sebelum persimpangan, Anda harus berhenti. Mempercepat untuk masuk adalah tindakan berbahaya setara pelanggaran sinyal. Sepeda juga harus mengikuti aturan lampu lalu lintas.',
      my: 'ဝါရောင်မီးဆိုသည်မှာ "လုံခြုံစွာ ရပ်နိုင်လျှင် ရပ်ပါ" ဟု အဓိပ္ပာယ်ရသည်။ လမ်းဆုံမတိုင်မီ လုံခြုံစွာ ရပ်နိုင်လျှင် ရပ်ရမည်ဖြစ်သည်။ ချဲ့ကာ ဝင်ခြင်းသည် မီးပြိုင့် ချိုးဖောက်မှုနှင့် ညီမျှသော အန္တရာယ်ရှိသော လုပ်ရပ်ဖြစ်သည်။'
    },
    fineAmount: '6,000',
    criminal: false
  },

  /* ===== Q10: 一時不停止（踏切） ===== */
  {
    id: 10,
    question: {
      ja: '踏切の前に「止まれ」の標示がありました。自転車はどうすべきですか？',
      en: 'There is a "STOP" marking before a railroad crossing. What should a cyclist do?',
      zh: '铁路道口前有"停止"标志。自行车应该怎么做？',
      vi: 'Có biển "DỪNG LẠI" trước đường sắt. Người đi xe đạp nên làm gì?',
      tl: 'Mayroong "STOP" na marka bago ang isang riles ng tren. Ano ang dapat gawin ng nagbibisikleta?',
      id: 'Ada tanda "STOP" sebelum perlintasan rel kereta. Apa yang harus dilakukan oleh pesepeda?',
      my: 'မီးရထားလမ်း ဖြတ်ကျော်ရာ မတိုင်မီ "STOP" သင်္ကေတ ရှိသည်။ စက်ဘီးသမားမည်သို့ ပြုမူသင့်သနည်း?'
    },
    signImage: 'img/kiken10.png',
    category: '一時不停止',
    choices: [
      {
        text: {
          ja: '電車が来ていなければ止まらなくてよい',
          en: 'No need to stop if no train is coming',
          zh: '没有火车来的话不需要停',
          vi: 'Không cần dừng nếu không có tàu đến',
          tl: 'Hindi na kailangang huminto kung walang darating na tren',
          id: 'Tidak perlu berhenti jika tidak ada kereta yang datang',
          my: 'မီးရထား မရောက်သေးလျှင် ရပ်ရန် မလိုအပ်'
        },
        correct: false
      },
      {
        text: {
          ja: '遮断機が上がっていれば止まらなくてよい',
          en: 'No need to stop if the barrier is raised',
          zh: '拦截杆升起来的话不需要停',
          vi: 'Không cần dừng nếu thanh chắn được nâng lên',
          tl: 'Hindi na kailangang huminto kung nakataas ang barrier',
          id: 'Tidak perlu berhenti jika palang terbuka',
          my: 'တားဆီးကန့်လန့်တန်း မြှောက်ထားလျှင် ရပ်ရန် မလိုအပ်'
        },
        correct: false
      },
      {
        text: {
          ja: '必ず一時停止して左右を確認してから通過',
          en: 'Always come to a complete stop, check both directions, then cross',
          zh: '必须完全停车，左右确认后再通过',
          vi: 'Luôn dừng hoàn toàn, kiểm tra cả hai phía rồi mới qua',
          tl: 'Laging ganap na huminto, suriin ang magkabilang panig, pagkatapos ay tumawid',
          id: 'Selalu berhenti penuh, cek kedua arah, baru melintas',
          my: 'အမြဲ လုံးဝ ရပ်ပြီး ဘယ်ညာ စစ်ဆေးကာ ဖြတ်ကျော်ပါ'
        },
        correct: true
      },
      {
        text: {
          ja: '自転車は踏切に「止まれ」は適用されない',
          en: 'STOP rules do not apply to bicycles at railroad crossings',
          zh: '自行车不受道口"停止"规则约束',
          vi: 'Quy tắc DỪNG LẠI không áp dụng cho xe đạp tại đường sắt',
          tl: 'Hindi naaangkop ang STOP rules sa mga bisikleta sa riles',
          id: 'Aturan STOP tidak berlaku untuk sepeda di perlintasan kereta',
          my: 'မီးရထားလမ်း ဖြတ်ကျော်ရာတွင် STOP စည်းကမ်း စက်ဘီးများအတွက် မသက်ဆိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '踏切では、電車の有無にかかわらず一時停止して安全を確認する義務があります（道路交通法第33条）。自転車も同様です。一時停止を怠ると踏切安全義務違反になります。',
      en: 'At a railroad crossing, you are required to stop completely and confirm safety regardless of whether a train is coming (Road Traffic Law Article 33). This applies to bicycles too. Failing to stop is a railroad crossing safety violation.',
      zh: '在铁路道口，无论有无火车，都必须临时停车确认安全（《道路交通法》第33条）。自行车同样适用。不停车将构成道口安全义务违反。',
      vi: 'Tại đường sắt, bạn phải dừng hoàn toàn và xác nhận sự an toàn bất kể có tàu hay không (Luật Giao thông Điều 33). Điều này cũng áp dụng cho xe đạp. Không dừng là vi phạm nghĩa vụ an toàn đường sắt.',
      tl: 'Sa pag-abot ng riles ng tren, kailangan mong huminto nang ganap at kumpirmahin ang kaligtasan anuman ang pagdating ng tren (Road Traffic Law Article 33). Naaangkop ito sa mga bisikleta. Ang hindi pagtigil ay paglabag sa kaligtasan ng riles.',
      id: 'Di perlintasan kereta, Anda wajib berhenti penuh dan memastikan keamanan terlepas dari apakah ada kereta atau tidak (UU Lalu Lintas Pasal 33). Ini juga berlaku untuk sepeda. Tidak berhenti adalah pelanggaran keselamatan perlintasan kereta.',
      my: 'မီးရထားလမ်း ဖြတ်ကျော်ရာတွင် မီးရထား ရောက်ရောက်မရောက်ရောက် လုံးဝ ရပ်ပြီး လုံခြုံမှု အတည်ပြုရမည် (လမ်းအသွားအလာ ဥပဒေ ပုဒ်မ ၃၃)။ ဤသည်သည် စက်ဘီးများကိုလည်း သက်ဆိုင်သည်။ မရပ်ပဲ ဖြတ်ကျော်ခြင်းသည် မီးရထားလမ်း ဖြတ်ကျော်ရာ လုံခြုံရေး ချိုးဖောက်မှု ဖြစ်သည်။'
    },
    fineAmount: '5,000',
    criminal: false
  },

  /* ===== Q11: 逆走・右側通行（車道右側） ===== */
  {
    id: 11,
    question: {
      ja: '目的地が近いので、車道の右側（対向車線側）を自転車で走った。これは？',
      en: 'Since your destination is nearby, you rode on the right side of the road (oncoming lane side). What is this?',
      zh: '因为目的地近，在道路右侧（对向车道一侧）骑自行车。这是？',
      vi: 'Vì điểm đến gần, bạn đi trên làn phải của đường (phía làn ngược chiều). Đây là gì?',
      tl: 'Dahil malapit ang destinasyon, nagmaneho ka sa kanang bahagi ng kalsada (gilid ng oncoming lane). Ano ito?',
      id: 'Karena tujuan dekat, Anda bersepeda di sisi kanan jalan (sisi lajur berlawanan). Apa ini?',
      my: 'ရည်မှန်းချက် နီးသောကြောင့် လမ်းမ၏ ညာဘက် (ဆန့်ကျင်ဘက်ကား လမ်းကြောင်း) တွင် စက်ဘီး မောင်းသည်။ ဤသည်မှာ?'
    },
    signImage: 'img/kiken11.png',
    category: '逆走・右側通行',
    choices: [
      {
        text: {
          ja: '自転車は右側でも走れる',
          en: 'Bicycles can also ride on the right side',
          zh: '自行车也可以靠右行驶',
          vi: 'Xe đạp cũng có thể đi ở bên phải',
          tl: 'Maaari ring sumakay ang bisikleta sa kanang bahagi',
          id: 'Sepeda juga bisa melaju di sisi kanan',
          my: 'စက်ဘီးသည် ညာဘက်တွင်လည်း မောင်းနင်းနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '右側通行（逆走）の違反',
          en: 'Wrong-way (right-side) riding — a violation',
          zh: '右侧通行（逆行）违规',
          vi: 'Vi phạm đi ngược chiều (bên phải)',
          tl: 'Paglabag sa wrong-way (kanang bahagi) na pagmamaneho',
          id: 'Pelanggaran berkendara di sisi kanan (melawan arus)',
          my: 'ညာဘက်မောင်း (လမ်းပြောင်းပြန်) ချိုးဖောက်မှု'
        },
        correct: true
      },
      {
        text: {
          ja: '歩道が混んでいれば右側でもよい',
          en: 'Right side is fine if the sidewalk is crowded',
          zh: '人行道拥挤的话走右侧也行',
          vi: 'Được đi bên phải nếu vỉa hè đông đúc',
          tl: 'Okay ang kanang bahagi kung masikip ang sidewalk',
          id: 'Sisi kanan boleh jika trotoar penuh',
          my: 'လမ်းလျှောက်ကွင်း လူကြပ်ရှိလျှင် ညာဘက် ဖြစ်ပါသည်'
        },
        correct: false
      },
      {
        text: {
          ja: '夜間なら右側の方が安全',
          en: 'The right side is safer at night',
          zh: '夜间靠右更安全',
          vi: 'Bên phải an toàn hơn vào ban đêm',
          tl: 'Mas ligtas ang kanang bahagi sa gabi',
          id: 'Sisi kanan lebih aman di malam hari',
          my: 'ညဘက်ဆိုလျှင် ညာဘက်ပိုလုံခြုံသည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '自転車は車道の左側を通行しなければなりません（道路交通法第17条・第18条）。右側通行（逆走）は、対向車との正面衝突事故を引き起こす非常に危険な行為です。2026年5月施行の改正道路交通法で青切符の対象です。',
      en: 'Bicycles must ride on the left side of the road (Road Traffic Law Articles 17 and 18). Wrong-way riding on the right side is extremely dangerous and can cause head-on collisions. It is subject to a blue ticket under the revised law effective May 2026.',
      zh: '自行车必须靠道路左侧行驶（《道路交通法》第17条、第18条）。靠右行驶（逆行）极为危险，可能引发与对向车辆的正面碰撞。依据2026年5月实施的修订道路交通法，将被开具蓝色罚单。',
      vi: 'Xe đạp phải đi ở bên trái đường (Luật Giao thông Điều 17 và 18). Đi sai làn đường (bên phải) cực kỳ nguy hiểm và có thể gây va chạm đối đầu. Bị phạt phiếu xanh theo luật sửa đổi có hiệu lực tháng 5/2026.',
      tl: 'Ang mga bisikleta ay dapat magtakbo sa kaliwang bahagi ng kalsada (Road Traffic Law Articles 17 at 18). Ang pagmamaneho sa maling direksiyon (kanang bahagi) ay lubhang mapanganib at maaaring magdulot ng head-on collision. Sakop ng blue ticket sa ilalim ng binagong batas na epektibo Mayo 2026.',
      id: 'Sepeda harus melaju di sisi kiri jalan (UU Lalu Lintas Pasal 17 dan 18). Berkendara di sisi kanan (melawan arus) sangat berbahaya dan bisa menyebabkan tabrakan frontal. Dikenai blue ticket berdasarkan revisi UU Mei 2026.',
      my: 'စက်ဘီးသည် လမ်းမ၏ ဘယ်ဘက်တွင် မောင်းရမည် (လမ်းအသွားအလာ ဥပဒေ ပုဒ်မ ၁၇ နှင့် ၁၈)။ ညာဘက်မောင်းခြင်း (လမ်းပြောင်းပြန်) သည် အလွန်အန္တရာယ်ရှိပြီး မျက်နှာချင်းဆိုင် တိုက်မှု ဖြစ်နိုင်သည်။'
    },
    fineAmount: '5,000',
    criminal: false
  },

  /* ===== Q12: 一方通行逆走 ===== */
  {
    id: 12,
    question: {
      ja: '「一方通行」の標識がある道路を、自転車で逆方向に走った。標識には「自転車を除く」などの追加の表示はありません。これは違反ですか？',
      en: 'You cycled the wrong way on a one-way road. The sign has no "except bicycles" or similar note. Is this a violation?',
      zh: '在有"单行道"标志的道路上，骑自行车逆向行驶。标志上没有"自行车除外"等附加说明。这是违规吗？',
      vi: 'Bạn đi xe đạp ngược chiều trên đường một chiều. Biển hiệu không có ghi chú "trừ xe đạp." Đây có phải vi phạm không?',
      tl: 'Nagmaneho ka nang kabaligtaran sa isang one-way road. Walang "maliban sa bisikleta" sa karatula. Paglabag ba ito?',
      id: 'Anda bersepeda melawan arus di jalan satu arah. Rambu tidak ada keterangan "kecuali sepeda." Apakah ini pelanggaran?',
      my: 'တစ်ဦးတည်း လမ်းတွင် စက်ဘီး ဆန့်ကျင်ဘက် မောင်းသည်။ ဆိုင်းဘုတ်တွင် "စက်ဘီး မပါ" ဟု ထပ်ဖြည့်မထားပါ။ ဤသည် ချိုးဖောက်မှုလား?'
    },
    signImage: 'img/kiken12.png',
    category: '逆走・右側通行',
    choices: [
      {
        text: {
          ja: '自転車は一方通行に関係ない',
          en: 'One-way rules do not apply to bicycles',
          zh: '单行道规则与自行车无关',
          vi: 'Quy tắc một chiều không áp dụng cho xe đạp',
          tl: 'Hindi naaangkop sa bisikleta ang one-way rules',
          id: 'Aturan satu arah tidak berlaku untuk sepeda',
          my: 'တစ်ဦးတည်းလမ်း စည်းကမ်းသည် စက်ဘီးနှင့် မဆိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '補助標識がなければ逆走は違反',
          en: 'Without an exception sign, riding the wrong way is a violation',
          zh: '没有辅助标志的话，逆行属违规',
          vi: 'Nếu không có biển ngoại lệ, đi ngược chiều là vi phạm',
          tl: 'Kung walang exception sign, ang pagmamaneho sa maling direksyon ay paglabag',
          id: 'Tanpa tanda pengecualian, melawan arus adalah pelanggaran',
          my: 'ချွင်းချက် ဆိုင်းဘုတ် မရှိလျှင် ဆန့်ကျင်ဘက် မောင်းခြင်းသည် ချိုးဖောက်မှု'
        },
        correct: true
      },
      {
        text: {
          ja: '一方通行は自動車だけに適用される',
          en: 'One-way rules apply only to automobiles',
          zh: '单行道规则只适用于汽车',
          vi: 'Quy tắc một chiều chỉ áp dụng cho ô tô',
          tl: 'Ang one-way rules ay para lang sa mga sasakyan',
          id: 'Aturan satu arah hanya berlaku untuk mobil',
          my: 'တစ်ဦးတည်းလမ်း စည်းကမ်းသည် ကားများအတွက်သာ သက်ဆိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ゆっくり走れば逆走できる',
          en: 'You can go the wrong way if you ride slowly',
          zh: '慢慢骑的话可以逆行',
          vi: 'Có thể đi ngược chiều nếu đạp chậm',
          tl: 'Maaaring magmaneho sa maling direksyon kung mabagal ang takbo',
          id: 'Boleh melawan arus jika bersepeda pelan',
          my: 'နှေးနှေး မောင်းလျှင် ဆန့်ကျင်ဘက် မောင်းနင်းနိုင်သည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '一方通行の道路では、「自転車を除く」「軽車両を除く」などの補助標識がある場合に限り逆走が許可されます。補助標識がなければ自転車も一方通行に従う義務があります。無視すると交通違反（青切符）の対象です。',
      en: 'On a one-way road, riding against traffic is only permitted when a supplementary sign such as "except bicycles" is posted. Without such a sign, bicycles must follow the one-way rule. Ignoring it is subject to a blue ticket.',
      zh: '在单行道上，只有在有"自行车除外""轻车辆除外"等辅助标志时，才允许逆行。没有辅助标志时，自行车也必须遵守单行道规定。违反将被开具蓝色罚单。',
      vi: 'Trên đường một chiều, chỉ được phép đi ngược chiều khi có biển phụ như "trừ xe đạp." Nếu không có biển đó, xe đạp cũng phải tuân theo quy tắc một chiều. Vi phạm sẽ bị phạt phiếu xanh.',
      tl: 'Sa isang one-way road, ang pagmamaneho laban sa trapiko ay pinahihintulutan lamang kapag may karagdagang karatula tulad ng "maliban sa bisikleta." Kung wala, ang mga bisikleta ay dapat sumunod sa one-way rule. Ang paglabag ay sakop ng blue ticket.',
      id: 'Di jalan satu arah, melawan arus hanya diizinkan jika ada tanda tambahan seperti "kecuali sepeda." Tanpa tanda tersebut, sepeda juga wajib mengikuti aturan satu arah. Melanggar dikenai blue ticket.',
      my: 'တစ်ဦးတည်းလမ်းတွင် "စက်ဘီး မပါ" ကဲ့သို့ ထပ်ဖြည့်ဆိုင်းဘုတ် ရှိမှသာ ဆန့်ကျင်ဘက် မောင်းခွင့်ရှိသည်။ ထိုကဲ့သို့ ဆိုင်းဘုတ် မရှိလျှင် စက်ဘီးသည်လည်း တစ်ဦးတည်းလမ်း စည်းကမ်းကို လိုက်နာရမည်။'
    },
    fineAmount: '5,000',
    criminal: false
  },

  /* ===== Q13: 自転車専用レーン逆走 ===== */
  {
    id: 13,
    question: {
      ja: '自転車専用レーンが設けられた道路で、右側のレーンを使って走った。問題はありますか？',
      en: 'On a road with a bicycle lane, you used the lane on the right side. Is there a problem?',
      zh: '在设有自行车专用道的道路上，使用右侧车道行驶。有问题吗？',
      vi: 'Trên đường có làn dành riêng cho xe đạp, bạn đi trên làn bên phải. Có vấn đề không?',
      tl: 'Sa isang kalsada na may bicycle lane, gumamit ka ng lane sa kanang bahagi. Mayroon bang problema?',
      id: 'Di jalan yang memiliki jalur sepeda, Anda menggunakan jalur di sisi kanan. Ada masalah?',
      my: 'စက်ဘီး သီးသန့်လမ်းကြောင်း ရှိသော လမ်းမတွင် ညာဘက်လမ်းကြောင်းကို သုံး၍ မောင်းသည်။ ပြဿနာရှိသလား?'
    },
    signImage: 'img/kiken13.png',
    category: '逆走・右側通行',
    choices: [
      {
        text: {
          ja: '自転車専用レーンならどこでも走れる',
          en: 'You can ride anywhere in a bicycle lane',
          zh: '只要是自行车专用道就可以随便骑',
          vi: 'Bạn có thể đi bất cứ đâu trong làn xe đạp',
          tl: 'Maaaring sumakay kahit saan sa bicycle lane',
          id: 'Bisa melaju di mana saja di jalur sepeda',
          my: 'စက်ဘီး သီးသန့်လမ်းကြောင်း ဆိုလျှင် မည်သည့်နေရာတွင်မဆို မောင်းနင်းနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '左側の自転車専用レーンを走らなければならない',
          en: 'You must use the bicycle lane on the left side',
          zh: '必须使用左侧的自行车专用道',
          vi: 'Bạn phải sử dụng làn xe đạp ở bên trái',
          tl: 'Dapat gumamit ng bicycle lane sa kaliwang bahagi',
          id: 'Harus menggunakan jalur sepeda di sisi kiri',
          my: 'ဘယ်ဘက်ရှိ စက်ဘီး သီးသန့်လမ်းကြောင်းကို မောင်းရမည်'
        },
        correct: true
      },
      {
        text: {
          ja: 'レーンがあれば右側でも問題ない',
          en: 'No problem on the right side as long as there is a lane',
          zh: '只要有车道，右侧也没问题',
          vi: 'Không sao ở bên phải miễn là có làn đường',
          tl: 'Walang problema sa kanang bahagi basta may lane',
          id: 'Tidak masalah di sisi kanan asalkan ada lajur',
          my: 'လမ်းကြောင်း ရှိသည် ဆိုလျှင် ညာဘက်တွင်လည်း ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '対向車がいなければ右側でもよい',
          en: 'Right side is fine if there are no oncoming vehicles',
          zh: '没有对向车辆的话，右侧也行',
          vi: 'Được đi bên phải nếu không có xe ngược chiều',
          tl: 'Okay ang kanang bahagi kung walang sasakyang paparating',
          id: 'Sisi kanan boleh jika tidak ada kendaraan yang datang',
          my: 'ဆန့်ကျင်ဘက်ကား မရှိလျှင် ညာဘက်ဖြစ်ပါသည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '自転車専用レーン（青線）が設置されている場合でも、左側通行の原則は守らなければなりません。右側の逆走レーンを使うことは右側通行違反になります。自転車は必ず進行方向左側のレーンを走行してください。',
      en: 'Even where a bicycle lane (blue line) exists, the left-side riding rule still applies. Using the right-side lane against the flow of traffic is a right-side riding violation. Always use the bicycle lane on your left.',
      zh: '即使设有自行车专用道（蓝线），也必须遵守靠左行驶原则。使用右侧逆行车道属于右侧通行违规。自行车必须始终使用行进方向左侧的车道。',
      vi: 'Ngay cả khi có làn xe đạp (đường xanh), quy tắc đi bên trái vẫn áp dụng. Sử dụng làn bên phải ngược chiều là vi phạm đi sai làn. Luôn dùng làn xe đạp ở bên trái hướng đi của bạn.',
      tl: 'Kahit mayroon nang bicycle lane (asul na linya), ang panuntunan ng pagmamaneho sa kaliwang bahagi ay nananatiling naaangkop. Ang paggamit ng lane sa kanang bahagi laban sa daloy ng trapiko ay paglabag. Palaging gamitin ang bicycle lane sa iyong kaliwa.',
      id: 'Meski ada jalur sepeda (garis biru), aturan berkendara di sisi kiri tetap berlaku. Menggunakan jalur sisi kanan melawan arus adalah pelanggaran. Selalu gunakan jalur sepeda di sisi kiri arah Anda.',
      my: 'စက်ဘီး သီးသန့်လမ်းကြောင်း (အပြာကြောင်း) ရှိသော်လည်း ဘယ်ဘက်မောင်း မူဝါဒ ကျုံးသည်။ ညာဘက် ဆန့်ကျင်ဘက်လမ်းကြောင်း သုံးခြင်းသည် ညာဘက်မောင်း ချိုးဖောက်မှု ဖြစ်သည်။ မောင်းနင်းရာ ဦးတည်ချက် ဘယ်ဘက်ရှိ လမ်းကြောင်းကို မောင်းပါ။'
    },
    fineAmount: '5,000',
    criminal: false
  },

  /* ===== Q14: 横断歩道での歩行者妨害 ===== */
  {
    id: 14,
    question: {
      ja: '横断歩道を歩行者が渡っているのに止まらず、横断歩道の脇をすり抜けて通った。これは？',
      en: 'A pedestrian was crossing at a crosswalk, but you did not stop and squeezed past the side of it. What is this?',
      zh: '行人正在穿越人行横道，却没有停车，从人行横道旁边擦过去。这是？',
      vi: 'Người đi bộ đang qua đường ở vạch qua đường nhưng bạn không dừng và lách qua cạnh bên. Đây là gì?',
      tl: 'May pedestrian na tumatawid sa crosswalk, ngunit hindi ka huminto at dumaan sa tabi. Ano ito?',
      id: 'Ada pejalan kaki yang menyeberang di zebra cross, namun Anda tidak berhenti dan menerobos di sampingnya. Apa ini?',
      my: 'ကျောင်းသားလမ်းကို လူပြင် ဖြတ်ကျော်နေသော်လည်း မရပ်ဘဲ ဘေးကွပ် ဖြတ်ကျော်သွားသည်။ ဤသည်မှာ?'
    },
    signImage: 'img/kiken14.png',
    category: '歩行者妨害',
    choices: [
      {
        text: {
          ja: '当たらなければ問題ない',
          en: 'No problem as long as you do not hit them',
          zh: '不碰到就没问题',
          vi: 'Không sao nếu không đụng vào họ',
          tl: 'Walang problema basta hindi tumama',
          id: 'Tidak masalah selama tidak menabrak',
          my: 'မတိုက်မိလျှင် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '横断歩行者等妨害の違反',
          en: 'Violation for obstructing a crossing pedestrian',
          zh: '妨碍过路行人等违规',
          vi: 'Vi phạm cản trở người đi bộ qua đường',
          tl: 'Paglabag sa pagharang sa pedestrian na tumatawid',
          id: 'Pelanggaran menghalangi pejalan kaki yang menyeberang',
          my: 'ကျောင်းသားလမ်းဖြတ်ကျော်သော လူပြင်ကို ဟန့်တားသည့် ချိုးဖောက်မှု'
        },
        correct: true
      },
      {
        text: {
          ja: '歩行者が先に気をつけるべき',
          en: 'It is the pedestrian who should be careful',
          zh: '应该是行人先注意',
          vi: 'Người đi bộ mới phải cẩn thận trước',
          tl: 'Ang pedestrian ang dapat mag-ingat',
          id: 'Pejalan kakilah yang harus berhati-hati',
          my: 'လမ်းလျှောက်သူ ကပါ ဦးစွာ သတိထားသင့်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車は横断歩道のルールに縛られない',
          en: 'Bicycles are not bound by crosswalk rules',
          zh: '自行车不受人行横道规则约束',
          vi: 'Xe đạp không bị ràng buộc bởi quy tắc vạch qua đường',
          tl: 'Hindi nakatali ang bisikleta sa mga patakaran ng crosswalk',
          id: 'Sepeda tidak terikat aturan zebra cross',
          my: 'စက်ဘီးသည် ကျောင်းသားလမ်း စည်းကမ်းဖြင့် ချုပ်နှောင်မခံ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '横断歩道に歩行者がいる場合、自転車は必ず一時停止して歩行者を先に渡らせなければなりません（道路交通法第38条）。横断歩道の脇をすり抜けることも妨害行為に当たります。2026年5月施行の改正道路交通法で青切符の対象です。',
      en: 'When a pedestrian is at a crosswalk, bicycles must stop and let the pedestrian cross first (Road Traffic Law Article 38). Squeezing past the side of the crosswalk also counts as obstruction. Subject to a blue ticket under the revised law effective May 2026.',
      zh: '当行人在人行横道时，自行车必须临时停车让行人先过（《道路交通法》第38条）。从人行横道旁边擦过也属于妨碍行为。依据2026年5月实施的修订道路交通法，将被开具蓝色罚单。',
      vi: 'Khi có người đi bộ tại vạch qua đường, xe đạp phải dừng lại và nhường cho người đi bộ qua trước (Luật Giao thông Điều 38). Lách qua cạnh bên vạch qua đường cũng được tính là cản trở. Bị phạt phiếu xanh theo luật sửa đổi có hiệu lực tháng 5/2026.',
      tl: 'Kapag may pedestrian sa crosswalk, dapat huminto ang mga bisikleta at hayaan munang makatawid ang pedestrian (Road Traffic Law Article 38). Ang pagdaan sa tabi ng crosswalk ay itinuturing ding obstruction. Sakop ng blue ticket sa ilalim ng binagong batas na epektibo Mayo 2026.',
      id: 'Ketika ada pejalan kaki di zebra cross, sepeda harus berhenti dan membiarkan pejalan kaki menyeberang terlebih dahulu (UU Lalu Lintas Pasal 38). Menerobos di samping zebra cross pun termasuk penghalangan. Dikenai blue ticket berdasarkan revisi UU Mei 2026.',
      my: 'ကျောင်းသားလမ်းတွင် လူပြင် ရှိသောအခါ၊ စက်ဘီးသည် ရပ်ပြီး လူပြင်ကို ဦးစွာ ဖြတ်ကျော်ခွင့် ပြုရမည် (လမ်းအသွားအလာ ဥပဒေ ပုဒ်မ ၃၈)။ ကျောင်းသားလမ်း ဘေးကွပ် ဖြတ်ကျော်ခြင်းသည်လည်း ဟန့်တားမှု ဖြစ်သည်။'
    },
    fineAmount: '6,000',
    criminal: false
  },

  /* ===== Q15: 歩行者専用道路での妨害 ===== */
  {
    id: 15,
    question: {
      ja: '歩行者専用道路を自転車で速く走り、歩行者の間を縫うように走り抜けた。どうなりますか？',
      en: 'You rode your bicycle fast on a pedestrian-only road and weaved between pedestrians. What happens?',
      zh: '在步行者专用道路上骑自行车快速行驶，穿梭在行人之间。会有什么问题？',
      vi: 'Bạn đi xe đạp nhanh trên đường chỉ dành cho người đi bộ và len lỏi giữa người đi bộ. Điều gì sẽ xảy ra?',
      tl: 'Nagmaneho ka nang mabilis ng bisikleta sa isang pedestrian-only road at dumaan sa pagitan ng mga pedestrian. Ano ang mangyayari?',
      id: 'Anda bersepeda cepat di jalan khusus pejalan kaki dan menerobos di antara pejalan kaki. Apa yang akan terjadi?',
      my: 'လမ်းလျှောက်သူ သီးသန့်လမ်းတွင် စက်ဘီးကို မြန်မြန် မောင်းကာ လမ်းလျှောက်သူများ ကြားတွင် ဆန်ထိုးသွားသည်။ မည်သို့ ဖြစ်မည်နည်း?'
    },
    signImage: 'img/kiken15.png',
    category: '歩行者妨害',
    choices: [
      {
        text: {
          ja: '歩行者専用道路は自転車も自由に走れる',
          en: 'Bicycles can ride freely on pedestrian-only roads',
          zh: '步行者专用道路自行车也可以自由骑行',
          vi: 'Xe đạp có thể đi tự do trên đường chỉ dành cho người đi bộ',
          tl: 'Maaaring libre sumakay ang bisikleta sa pedestrian-only road',
          id: 'Sepeda bisa melaju bebas di jalan khusus pejalan kaki',
          my: 'လမ်းလျှောက်သူ သီးသန့်လမ်းတွင် စက်ဘီးသည် လွတ်လပ်စွာ မောင်းနင်းနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '歩行者優先義務違反・歩行者妨害',
          en: 'Pedestrian-priority violation and pedestrian obstruction',
          zh: '违反行人优先义务及妨碍行人',
          vi: 'Vi phạm nghĩa vụ ưu tiên người đi bộ và cản trở người đi bộ',
          tl: 'Paglabag sa pedestrian-priority obligation at pedestrian obstruction',
          id: 'Pelanggaran kewajiban prioritas pejalan kaki dan penghalangan pejalan kaki',
          my: 'လမ်းလျှောက်သူ ဦးစားပေး တာဝန်ဝတ္တရား ချိုးဖောက်မှုနှင့် လမ်းလျှောက်သူ ဟန့်တားမှု'
        },
        correct: true
      },
      {
        text: {
          ja: 'ベルを鳴らせば問題ない',
          en: 'No problem if you ring your bell',
          zh: '按铃就没问题',
          vi: 'Không sao nếu bạn rung chuông',
          tl: 'Walang problema kung mag-ring ng bell',
          id: 'Tidak masalah jika membunyikan bel',
          my: 'ခေါင်းလောင်း မြည်စေလျှင် ပြဿနာမရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '車道が危険なら歩道をどう走ってもよい',
          en: 'You can ride any way on the footpath if the road is dangerous',
          zh: '如果车道危险，可以任意在人行道上骑行',
          vi: 'Có thể đi bất kỳ cách nào trên vỉa hè nếu đường nguy hiểm',
          tl: 'Maaaring sumakay kahit paano sa sidewalk kung mapanganib ang kalsada',
          id: 'Boleh berkendara sesuka hati di trotoar jika jalan berbahaya',
          my: 'လမ်းမ အန္တရာယ်ရှိလျှင် လမ်းလျှောက်ကွင်းတွင် မည်သို့မဆို မောင်းနင်းနိုင်သည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '歩行者専用道路は歩行者のための道路です。補助標識で自転車の通行が認められている場合でも、歩行者優先で徐行し歩行者を妨害してはなりません。速く走ったりすり抜けたりすれば歩行者妨害・安全運転義務違反です。',
      en: 'A pedestrian-only road is for pedestrians. Even when a supplementary sign permits bicycle access, you must give priority to pedestrians and ride slowly. Riding fast or weaving between people is pedestrian obstruction and a safe-riding violation.',
      zh: '步行者专用道路是为行人设置的道路。即使有辅助标志允许自行车通行，也必须以行人优先、低速行驶，不得妨碍行人。快速行驶或穿梭其间均属妨碍行人及违反安全驾驶义务。',
      vi: 'Đường chỉ dành cho người đi bộ là dành cho người đi bộ. Ngay cả khi biển phụ cho phép xe đạp vào, bạn phải ưu tiên cho người đi bộ và đi chậm. Đi nhanh hoặc len lỏi giữa người đi bộ là cản trở người đi bộ và vi phạm nghĩa vụ lái xe an toàn.',
      tl: 'Ang pedestrian-only road ay para sa mga pedestrian. Kahit na pinahihintulutan ng supplementary sign ang access ng bisikleta, dapat mong unahin ang mga pedestrian at magmaneho nang dahan-dahan. Ang pagmamaneho nang mabilis o pag-weave sa pagitan ng mga tao ay pedestrian obstruction at paglabag sa safe-riding.',
      id: 'Jalan khusus pejalan kaki diperuntukkan bagi pejalan kaki. Meski ada tanda tambahan yang mengizinkan akses sepeda, Anda harus mendahulukan pejalan kaki dan berkendara perlahan. Berkendara cepat atau menerobos di antara orang adalah penghalangan pejalan kaki dan pelanggaran keselamatan.',
      my: 'လမ်းလျှောက်သူ သီးသန့်လမ်းသည် လမ်းလျှောက်သူများ အတွက်ဖြစ်သည်။ ထပ်ဖြည့်ဆိုင်းဘုတ် ခွင့်ပြုသော်လည်း လမ်းလျှောက်သူများကို ဦးစားပေးကာ နှေးနှေး မောင်းရမည်။ မြန်မြန် မောင်းခြင်း သို့မဟုတ် ဆန်ထိုးခြင်းသည် ဟန့်တားမှု ဖြစ်သည်။'
    },
    fineAmount: '6,000',
    criminal: false
  },

  /* ===== Q16: ベルによる歩行者妨害 ===== */
  {
    id: 16,
    question: {
      ja: '歩道で歩行者が前を歩いていたので、ベルを鳴らして道を空けさせた。問題は？',
      en: 'A pedestrian was walking ahead of you on the footpath, so you rang your bell to make them move aside. Is there a problem?',
      zh: '人行道上行人走在前面，于是按铃让对方让路。有问题吗？',
      vi: 'Có người đi bộ đi trước bạn trên vỉa hè, nên bạn rung chuông để họ nhường đường. Có vấn đề không?',
      tl: 'May pedestrian na naglalakad sa harap mo sa footpath, kaya nag-ring ka ng bell para tumabi sila. Mayroon bang problema?',
      id: 'Ada pejalan kaki berjalan di depan Anda di trotoar, jadi Anda membunyikan bel agar mereka minggir. Ada masalah?',
      my: 'လမ်းလျှောက်ကွင်းတွင် လူပြင် ရှေ့တွင် လျှောက်နေသောကြောင့် ခေါင်းလောင်း မြည်ကာ လမ်းဖွင့်ခိုင်းသည်။ ပြဿနာရှိသလား?'
    },
    signImage: 'img/kiken16.png',
    category: '歩行者妨害',
    choices: [
      {
        text: {
          ja: '警告するためのベルは常に使ってよい',
          en: 'You can always use the bell as a warning',
          zh: '警告用的铃可以随时按',
          vi: 'Bạn luôn có thể dùng chuông để cảnh báo',
          tl: 'Palaging maaaring gamitin ang bell bilang babala',
          id: 'Bel boleh selalu digunakan sebagai peringatan',
          my: 'သတိပေးရန် ခေါင်းလောင်းကို အမြဲ သုံးနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ベルで歩行者をどかすのは歩行者妨害・警音器使用義務違反',
          en: 'Using the bell to move a pedestrian is pedestrian obstruction and an improper use of a warning device',
          zh: '鸣铃驱赶行人属于妨碍行人及违反警示器使用义务',
          vi: 'Dùng chuông để đẩy người đi bộ là cản trở người đi bộ và sử dụng thiết bị cảnh báo sai',
          tl: 'Ang paggamit ng bell para ilayo ang pedestrian ay pedestrian obstruction at maling paggamit ng warning device',
          id: 'Membunyikan bel untuk mengusir pejalan kaki adalah penghalangan dan pelanggaran penggunaan alat peringatan',
          my: 'ခေါင်းလောင်း မြည်ကာ လမ်းလျှောက်သူကို ဖယ်ရှားခိုင်းခြင်းသည် ဟန့်တားမှုနှင့် သတိပေးကိရိယာ မမှန်ကန်သောသုံးစွဲမှု'
        },
        correct: true
      },
      {
        text: {
          ja: '歩道では自転車が優先',
          en: 'Bicycles have priority on the footpath',
          zh: '人行道上自行车优先',
          vi: 'Xe đạp được ưu tiên trên vỉa hè',
          tl: 'Ang bisikleta ang may priority sa footpath',
          id: 'Sepeda punya prioritas di trotoar',
          my: 'လမ်းလျှောက်ကွင်းတွင် စက်ဘီးကို ဦးစားပေးသည်'
        },
        correct: false
      },
      {
        text: {
          ja: '歩行者が気づかないのが悪い',
          en: 'It is the pedestrian\'s fault for not noticing',
          zh: '是行人没注意的问题',
          vi: 'Lỗi tại người đi bộ không để ý',
          tl: 'Kasalanan ng pedestrian ang hindi mapansin',
          id: 'Salah pejalan kaki karena tidak menyadari',
          my: 'လမ်းလျှောက်သူ မသတိထားသောကြောင့် သူ့အပြစ်ဖြစ်သည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '自転車のベル（警音器）は危険回避など法定の場合にのみ使用できます。歩行者をどかすためにベルを鳴らすのは、警音器使用義務違反かつ歩行者妨害にあたります。歩道では歩行者最優先。自転車は降りて押すか、歩行者が通るのを待ちましょう。',
      en: 'A bicycle bell (warning device) may only be used in legally prescribed situations such as avoiding danger. Ringing it to move pedestrians out of the way is both an improper use of a warning device and pedestrian obstruction. Pedestrians have priority on the footpath. Dismount and push your bicycle, or wait for pedestrians to pass.',
      zh: '自行车铃（警告器）只能在法律规定的情况下使用，例如避免危险。为驱赶行人而鸣铃，属于违反警示器使用义务及妨碍行人。人行道上行人最优先，请下车推行或等待行人通过。',
      vi: 'Chuông xe đạp (thiết bị cảnh báo) chỉ được sử dụng trong các tình huống theo quy định của pháp luật như tránh nguy hiểm. Rung chuông để đẩy người đi bộ ra là vừa sử dụng thiết bị cảnh báo sai mục đích vừa cản trở người đi bộ. Trên vỉa hè, người đi bộ được ưu tiên. Hãy xuống xe dắt bộ hoặc chờ người đi bộ qua.',
      tl: 'Ang bell ng bisikleta (warning device) ay maaari lamang gamitin sa mga sitwasyong itinakda ng batas tulad ng pag-iwas sa panganib. Ang pag-ring nito para ilayo ang mga pedestrian ay parehong maling paggamit ng warning device at pedestrian obstruction. Ang mga pedestrian ay may priority sa footpath. Bumaba at itulak ang iyong bisikleta, o maghintay ng mga pedestrian.',
      id: 'Bel sepeda (alat peringatan) hanya boleh digunakan dalam situasi yang ditentukan hukum seperti menghindari bahaya. Membunyikannya untuk mengusir pejalan kaki adalah pelanggaran penggunaan alat peringatan sekaligus penghalangan pejalan kaki. Pejalan kaki punya prioritas di trotoar. Turun dan dorong sepeda, atau tunggu pejalan kaki lewat.',
      my: 'စက်ဘီး ခေါင်းလောင်း (သတိပေးကိရိယာ) ကို ဥပဒေ သတ်မှတ်ထားသည့် အန္တရာယ်ကင်းရှင်းရေး ကဲ့သို့သော အခြေအနေများတွင်သာ သုံးနိုင်သည်။ လမ်းလျှောက်သူကို ဖယ်ရှားရန် မြည်ကာ ခေါင်းလောင်း တီးခြင်းသည် သတိပေးကိရိယာ မမှန်ကန်သောသုံးစွဲမှုနှင့် ဟန့်တားမှု ဖြစ်သည်။ လမ်းလျှောက်ကွင်းတွင် လမ်းလျှောက်သူကို ဦးစားပေးသည်။'
    },
    fineAmount: '3,000',
    criminal: false
  },

  /* ===== Q17: 無灯火運転 ===== */
  {
    id: 17,
    question: {
      ja: '夜間、歩道を無灯火で走行中に歩行者と接触しそうになった。どんな違反ですか？',
      en: 'At night, you rode without lights on the footpath and nearly collided with a pedestrian. What violation is this?',
      zh: '夜间在人行道无灯骑行时，险些与行人相撞。这是哪种违规？',
      vi: 'Ban đêm, bạn đi xe đạp không có đèn trên vỉa hè và suýt va vào người đi bộ. Đây là vi phạm gì?',
      tl: 'Sa gabi, nagmaneho ka nang walang ilaw sa footpath at halos nabangga ang isang pedestrian. Anong paglabag ito?',
      id: 'Malam hari, Anda bersepeda tanpa lampu di trotoar dan hampir menabrak pejalan kaki. Pelanggaran apa ini?',
      my: 'ညဘက်တွင် မီးမပါဘဲ လမ်းလျှောက်ကွင်းတွင် မောင်းနင်းစဉ် လမ်းလျှောက်သူနှင့် မတော်တဆ တိုက်မှုနီးပါးဖြစ်ခဲ့သည်။ မည်သည့် ချိုးဖောက်မှုနည်း?'
    },
    signImage: 'img/kiken17.png',
    category: '歩行者妨害',
    choices: [
      {
        text: {
          ja: '夜間の無灯火は自転車には関係ない',
          en: 'Riding without lights at night does not apply to bicycles',
          zh: '夜间无灯与自行车无关',
          vi: 'Đi xe không có đèn vào ban đêm không áp dụng cho xe đạp',
          tl: 'Ang pagmamaneho nang walang ilaw sa gabi ay hindi naaangkop sa bisikleta',
          id: 'Berkendara tanpa lampu malam hari tidak berlaku untuk sepeda',
          my: 'ညဘက် မီးမပါဘဲ မောင်းခြင်းသည် စက်ဘီးနှင့် မဆိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '無灯火運転＋安全運転義務違反',
          en: 'Riding without lights + safe-driving obligation violation',
          zh: '无灯骑行＋违反安全驾驶义务',
          vi: 'Đi xe không có đèn + vi phạm nghĩa vụ lái xe an toàn',
          tl: 'Pagmamaneho nang walang ilaw + paglabag sa safe-driving obligation',
          id: 'Berkendara tanpa lampu + pelanggaran kewajiban berkendara aman',
          my: 'မီးမပါဘဲ မောင်းနင်းမှု + လုံခြုံသောမောင်းနှင်မှု တာဝန်ဝတ္တရားချိုးဖောက်မှု'
        },
        correct: true
      },
      {
        text: {
          ja: '反射材をつけていれば無灯火でよい',
          en: 'Reflectors are sufficient — no need for a light',
          zh: '有反光材料就不需要灯',
          vi: 'Có vật liệu phản quang là đủ — không cần đèn',
          tl: 'Sapat na ang mga reflector — hindi na kailangan ng ilaw',
          id: 'Reflektor sudah cukup — tidak perlu lampu',
          my: 'ဖြန့်ကျဲစေသောပစ္စည်း တပ်ဆင်ထားလျှင် မီးမလိုအပ်'
        },
        correct: false
      },
      {
        text: {
          ja: '街灯があれば灯火不要',
          en: 'No light needed if there are streetlights',
          zh: '有路灯就不需要自行车灯',
          vi: 'Không cần đèn nếu có đèn đường',
          tl: 'Hindi kailangan ng ilaw kung mayroon nang streetlight',
          id: 'Tidak perlu lampu jika ada lampu jalan',
          my: 'လမ်းမီးများ ရှိလျှင် မီးမလိုအပ်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '夜間（日没〜日出）は自転車もライトを点灯する義務があります（道路交通法第52条）。無灯火での走行は「灯火不備（無灯火）」の違反です。視認性が下がり歩行者や他の車両と衝突する危険性が高まります。',
      en: 'Between sunset and sunrise, bicycles are required to have their lights on (Road Traffic Law Article 52). Riding without a light is a "lighting deficiency" violation. Visibility drops significantly, greatly increasing the risk of collision with pedestrians and other vehicles.',
      zh: '夜间（日落至日出）自行车也必须开灯（《道路交通法》第52条）。无灯行驶属于"灯光不足（无灯）"违规。能见度降低，与行人或其他车辆碰撞的风险大幅上升。',
      vi: 'Từ lúc mặt trời lặn đến khi mọc, xe đạp cũng phải bật đèn (Luật Giao thông Điều 52). Đi xe không có đèn là vi phạm "thiếu chiếu sáng." Tầm nhìn giảm đáng kể, làm tăng nguy cơ va chạm với người đi bộ và các phương tiện khác.',
      tl: 'Sa pagitan ng paglubog at pagsikat ng araw, ang mga bisikleta ay kailangan ding magpalit ng ilaw (Road Traffic Law Article 52). Ang pagmamaneho nang walang ilaw ay paglabag sa "kakulangan sa ilaw." Nababawasan ang visibility, na lubos na nagpapataas ng panganib ng banggaan.',
      id: 'Antara matahari terbenam dan terbit, sepeda juga wajib menyalakan lampu (UU Lalu Lintas Pasal 52). Berkendara tanpa lampu adalah pelanggaran "kekurangan penerangan." Visibilitas menurun drastis, meningkatkan risiko tabrakan dengan pejalan kaki dan kendaraan lain.',
      my: 'နေဝင်ချိန်မှ နေထွက်ချိန်အထိ၊ စက်ဘီးသည်လည်း မီးဖွင့်ရန် တာဝန်ရှိသည် (လမ်းအသွားအလာ ဥပဒေ ပုဒ်မ ၅၂)။ မီးမပါဘဲ မောင်းနင်းခြင်းသည် "မီးအလင်းအားနည်း" ချိုးဖောက်မှု ဖြစ်သည်။ မြင်ကွင်း လျော့ကျပြီး လမ်းလျှောက်သူများနှင့် ကားများနှင့် တိုက်မှု အန္တရာယ် မြင့်မားသည်။'
    },
    fineAmount: '5,000',
    criminal: false
  },

  /* ===== Q18: 複合違反（4つ同時） ===== */
  {
    id: 18,
    question: {
      ja: '夜間、イヤホンをしてスマホを手に持ったまま赤信号を無視してライトなしで自転車で走った。このとき同時にいくつの違反をしていますか？',
      en: 'At night, you cycled while wearing earphones, holding a smartphone, running a red light, and riding without a light. How many violations did you commit at once?',
      zh: '夜间，戴着耳机手持手机、无视红灯、无灯骑自行车。此时同时犯了几个违规？',
      vi: 'Ban đêm, bạn đạp xe đeo tai nghe, cầm điện thoại, vượt đèn đỏ và không có đèn. Bạn đã vi phạm bao nhiêu lỗi cùng một lúc?',
      tl: 'Sa gabi, nagmaneho ka ng bisikleta na may suot na earphone, hawak ang smartphone, nilabag ang pulang ilaw, at walang ilaw. Ilang paglabag ang nagawa mo nang sabay?',
      id: 'Malam hari, Anda bersepeda sambil memakai earphone, memegang smartphone, menerobos lampu merah, dan tanpa lampu. Berapa pelanggaran yang Anda lakukan sekaligus?',
      my: 'ညဘက်တွင် နားကြပ်တပ်ဆင်ကာ smartphone ကိုင်ကာ အနီရောင်မီးကို ဖြတ်ကာ မီးမပါဘဲ စက်ဘီး မောင်းသည်။ တစ်ပြိုင်နက် ချိုးဖောက်မှု မည်မျှ ရှိနည်း?'
    },
    signImage: 'img/kiken18.png',
    category: 'ながら運転',
    choices: [
      {
        text: {
          ja: '1つ（スマホを持っているだけ）',
          en: '1 (just holding the smartphone)',
          zh: '1个（只是手持手机）',
          vi: '1 (chỉ cầm điện thoại)',
          tl: '1 (hawak lang ang smartphone)',
          id: '1 (hanya memegang smartphone)',
          my: '၁ ခု (smartphone ကိုင်ရုံသာ)'
        },
        correct: false
      },
      {
        text: {
          ja: '2つ（スマホ＋信号無視）',
          en: '2 (smartphone + red light)',
          zh: '2个（手机＋闯红灯）',
          vi: '2 (điện thoại + vượt đèn đỏ)',
          tl: '2 (smartphone + pulang ilaw)',
          id: '2 (smartphone + lampu merah)',
          my: '၂ ခု (smartphone + မီးပြိုင့်)'
        },
        correct: false
      },
      {
        text: {
          ja: '3つ（スマホ＋イヤホン＋信号無視）',
          en: '3 (smartphone + earphones + red light)',
          zh: '3个（手机＋耳机＋闯红灯）',
          vi: '3 (điện thoại + tai nghe + vượt đèn đỏ)',
          tl: '3 (smartphone + earphone + pulang ilaw)',
          id: '3 (smartphone + earphone + lampu merah)',
          my: '၃ ခု (smartphone + နားကြပ် + မီးပြိုင့်)'
        },
        correct: false
      },
      {
        text: {
          ja: '4つ（スマホ＋イヤホン＋信号無視＋無灯火）',
          en: '4 (smartphone + earphones + red light + no light)',
          zh: '4个（手机＋耳机＋闯红灯＋无灯）',
          vi: '4 (điện thoại + tai nghe + vượt đèn đỏ + không đèn)',
          tl: '4 (smartphone + earphone + pulang ilaw + walang ilaw)',
          id: '4 (smartphone + earphone + lampu merah + tanpa lampu)',
          my: '၄ ခု (smartphone + နားကြပ် + မီးပြိုင့် + မီးမပါ)'
        },
        correct: true
      }
    ],
    explanation: {
      ja: 'この行為は4つの違反が同時に重なっています。①スマホ保持（ながら運転）、②イヤホンで周囲の音が聞こえない（安全運転義務違反）、③赤信号を無視（信号無視）、④夜間ライトなし（無灯火）。違反が重なるほど罰則も重くなります。',
      en: 'Four violations are stacked at once: ① holding a smartphone (distracted riding), ② earphones blocking surrounding sounds (safe-riding obligation violation), ③ running a red light (signal violation), ④ no light at night (riding without lighting). The more violations you stack, the heavier the penalties.',
      zh: '这一行为同时叠加了4项违规：①手持手机（边骑边看）、②耳机导致听不到周围声音（违反安全驾驶义务）、③无视红灯（信号违规）、④夜间无灯（无灯行驶）。违规叠加越多，处罚越重。',
      vi: 'Hành động này chồng chất 4 vi phạm cùng lúc: ① cầm điện thoại (lái xe mất tập trung), ② tai nghe chặn âm thanh xung quanh (vi phạm nghĩa vụ lái xe an toàn), ③ vượt đèn đỏ (vi phạm tín hiệu), ④ không có đèn ban đêm (đi xe không có đèn). Càng nhiều vi phạm, hình phạt càng nặng.',
      tl: 'Apat na paglabag ang nagsasabay: ① paghawak ng smartphone (distracted riding), ② earphone na naghaharangan ng tunog sa paligid (paglabag sa safe-riding obligation), ③ pagtawid ng pulang ilaw (signal violation), ④ walang ilaw sa gabi (pagmamaneho nang walang ilaw). Mas maraming paglabag, mas mabigat ang parusa.',
      id: 'Empat pelanggaran bertumpuk sekaligus: ① memegang smartphone (berkendara sambil main HP), ② earphone menghalangi suara sekitar (pelanggaran kewajiban berkendara aman), ③ menerobos lampu merah (pelanggaran sinyal), ④ tidak ada lampu malam hari (berkendara tanpa lampu). Semakin banyak pelanggaran, semakin berat sanksinya.',
      my: 'ချိုးဖောက်မှု ၄ ခု တစ်ပြိုင်နက် ဖြစ်ပွားသည်: ① smartphone ကိုင်ကာ မောင်းနင်းမှု (အာရုံလွဲ မောင်းနင်းမှု)၊ ② နားကြပ်ကြောင့် ပတ်ဝန်းကျင် အသံ မကြားနိုင်မှု (လုံခြုံသောမောင်းနှင်မှု ချိုးဖောက်မှု)၊ ③ အနီရောင်မီး ဖြတ်ကျော်မှု (မီးပြိုင့် ချိုးဖောက်မှု)၊ ④ ညဘက် မီးမပါဘဲ မောင်းနင်းမှု (မီးမပါ မောင်းနင်းမှု)။ ချိုးဖောက်မှုများ ပေါင်းလာလေ ဒဏ်ကြေးများ ပိုကြီးလေဖြစ်သည်။'
    },
    fineAmount: null,
    criminal: false
  },

  /* ===== Q19: ヘルメット ===== */
  {
    id: 19,
    question: {
      ja: '自転車に乗るとき、ヘルメットについて正しいのはどれですか？',
      en: 'Which statement about helmets when cycling is correct?',
      zh: '骑自行车时，关于头盔哪项说法是正确的？',
      vi: 'Điều nào đúng về mũ bảo hiểm khi đạp xe?',
      tl: 'Alin sa mga pahayag tungkol sa helmet kapag nagbibisikleta ang tama?',
      id: 'Pernyataan mana tentang helm saat bersepeda yang benar?',
      my: 'စက်ဘီးစီးနင်းသောအခါ ခေါင်းဆောင်းနှင့်ပတ်သက်ပြီး မည်သည့်ဖော်ပြချက်မှာ မှန်ကန်သနည်း?'
    },
    signImage: 'img/kiken19.png',
    category: 'その他の違反',
    choices: [
      {
        text: {
          ja: 'ヘルメットは子どもだけかぶればよい',
          en: 'Only children need to wear helmets',
          zh: '头盔只有小孩需要戴',
          vi: 'Chỉ trẻ em mới cần đội mũ bảo hiểm',
          tl: 'Ang mga bata lang ang kailangan magsuot ng helmet',
          id: 'Hanya anak-anak yang perlu memakai helm',
          my: 'ကလေးများ သာ ခေါင်းဆောင်းဆောင်းရမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '大人も子どもも全員かぶることが望ましい',
          en: 'Both adults and children are encouraged to wear helmets',
          zh: '大人和小孩都应该戴头盔',
          vi: 'Cả người lớn và trẻ em đều được khuyến khích đội mũ bảo hiểm',
          tl: 'Parehong ang mga matatanda at bata ay hinihikayat na magsuot ng helmet',
          id: 'Baik orang dewasa maupun anak-anak dianjurkan untuk memakai helm',
          my: 'လူကြီးများနှင့် ကလေးများ နှစ်ဦးစလုံးသည် ခေါင်းဆောင်းဆောင်းရန် တိုက်တွန်းလိုသည်'
        },
        correct: true
      },
      {
        text: {
          ja: 'ヘルメットはスピードを出すときだけかぶればよい',
          en: 'Helmets are only needed when riding fast',
          zh: '头盔只在快速骑行时才需要戴',
          vi: 'Mũ bảo hiểm chỉ cần khi đi nhanh',
          tl: 'Ang helmet ay kailangan lang kapag nagmamaneho nang mabilis',
          id: 'Helm hanya diperlukan saat berkendara cepat',
          my: 'မြန်မြန် မောင်းနင်းသောအခါမှသာ ခေါင်းဆောင်းဆောင်းရမည်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ヘルメットをかぶると視界が悪くなるので不要',
          en: 'Helmets are unnecessary because they reduce visibility',
          zh: '戴头盔会影响视野，所以没必要',
          vi: 'Mũ bảo hiểm không cần thiết vì làm giảm tầm nhìn',
          tl: 'Hindi kailangan ng helmet dahil nababawasan ang visibility',
          id: 'Helm tidak diperlukan karena mengurangi visibilitas',
          my: 'ခေါင်းဆောင်းဆောင်းလျှင် မြင်ကွင်း ကျဉ်းသောကြောင့် မလိုအပ်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '2023年4月の道路交通法改正により、自転車に乗るすべての人（大人も含む）のヘルメット着用が「努力義務」になりました。罰則はありませんが、転倒時に頭を守るためにかぶることが強く推奨されています。また、自転車乗車中の死亡事故の約6割が頭部へのダメージが原因です。',
      en: 'Following the April 2023 revision of the Road Traffic Law, wearing a helmet when cycling became an "effort obligation" for all riders, including adults. There is no penalty for not wearing one, but it is strongly recommended to protect your head in a fall. About 60% of fatal bicycle accidents involve head injuries.',
      zh: '2023年4月《道路交通法》修订后，所有自行车骑行者（包括成人）佩戴头盔成为"努力义务"。虽然不戴没有罚则，但强烈建议佩戴以保护摔倒时的头部。此外，约六成自行车骑行死亡事故是由于头部受伤造成的。',
      vi: 'Sau khi Luật Giao thông được sửa đổi vào tháng 4/2023, việc đội mũ bảo hiểm khi đạp xe trở thành "nghĩa vụ cố gắng" cho tất cả người đạp xe, kể cả người lớn. Không có hình phạt nếu không đội, nhưng rất được khuyến khích để bảo vệ đầu khi ngã. Khoảng 60% tai nạn xe đạp chết người liên quan đến chấn thương đầu.',
      tl: 'Matapos ang pagbabago ng Road Traffic Law noong Abril 2023, ang pagsuot ng helmet habang nagbibisikleta ay naging "effort obligation" para sa lahat ng mangangagad, kasama ang mga matatanda. Walang parusa para sa hindi pagsuot, ngunit lubos itong inirerekomenda para protektahan ang ulo sa pagkahulog. Humigit-kumulang 60% ng mga nakamamatay na aksidente sa bisikleta ay kinasasangkutan ng pinsala sa ulo.',
      id: 'Setelah revisi UU Lalu Lintas April 2023, mengenakan helm saat bersepeda menjadi "kewajiban upaya" bagi semua pengendara, termasuk orang dewasa. Tidak ada sanksi untuk tidak memakainya, tetapi sangat dianjurkan untuk melindungi kepala saat jatuh. Sekitar 60% kecelakaan sepeda fatal melibatkan cedera kepala.',
      my: '၂၀၂၃ ဧပြီလ လမ်းအသွားအလာ ဥပဒေ ပြင်ဆင်ပြီးနောက်၊ စက်ဘီးစီးနင်းသူ အားလုံး (လူကြီးများ အပါအဝင်) ခေါင်းဆောင်းဆောင်းရခြင်းသည် "ကြိုးစားမှု တာဝန်ဝတ္တရား" ဖြစ်လာသည်။ မဆောင်းရသည့် ဒဏ်ကြေး မရှိသော်လည်း ကျသောအခါ ခေါင်းကာကွယ်ရန် အလွန် တိုက်တွန်းသည်။ စက်ဘီးစီးနင်းရင်း သေဆုံးမှု မတော်တဆဆိုးမှုများ၏ ၆၀% ခန့်သည် ခေါင်းဒဏ်ကြောင့် ဖြစ်သည်။'
    },
    fineAmount: null,
    criminal: false
  },

  /* ===== Q20: 歩行者へのぶつかり（責任） ===== */
  {
    id: 20,
    question: {
      ja: '自転車で走っていて、不注意で歩行者にぶつかってケガをさせてしまいました。このとき自転車側はどうなりますか？',
      en: 'While cycling, you carelessly collided with a pedestrian and injured them. What happens to the cyclist?',
      zh: '骑自行车时不小心撞到行人并导致其受伤。骑车人会面临什么？',
      vi: 'Trong khi đạp xe, bạn vô tình va vào người đi bộ và làm họ bị thương. Người đạp xe sẽ phải đối mặt với gì?',
      tl: 'Habang nagbibisikleta, hindi mo sinasadyang nabangga ang isang pedestrian at nagpahirap sa kanya. Ano ang mangyayari sa cyclist?',
      id: 'Saat bersepeda, Anda tidak sengaja menabrak pejalan kaki dan melukai mereka. Apa yang terjadi pada pesepeda?',
      my: 'စက်ဘီးစီးနင်းစဉ် သတိမထားမိဘဲ လမ်းလျှောက်သူနှင့် တိုက်မိကာ ဒဏ်ရာရစေသည်။ ဤအခါ စက်ဘီးသမားမည်သို့ ဖြစ်မည်နည်း?'
    },
    signImage: 'img/kiken20.png',
    category: '歩行者妨害',
    choices: [
      {
        text: {
          ja: '自転車は軽いので責任は軽い',
          en: 'Bicycles are light so the liability is minor',
          zh: '自行车轻，所以责任也轻',
          vi: 'Xe đạp nhẹ nên trách nhiệm cũng nhẹ',
          tl: 'Magaan ang bisikleta kaya magaan din ang responsibilidad',
          id: 'Sepeda ringan sehingga tanggung jawabnya juga ringan',
          my: 'စက်ဘီး ပေါ့သောကြောင့် တာဝန်ယူမှုလည်း ပေါ့ပါသည်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ぶつかった相手が悪いので責任はない',
          en: 'The other person is at fault so there is no liability',
          zh: '是对方的错，所以没有责任',
          vi: 'Người kia có lỗi nên không có trách nhiệm',
          tl: 'Kasalanan ng ibang tao kaya walang responsibilidad',
          id: 'Kesalahan orang lain jadi tidak ada tanggung jawab',
          my: 'တိုက်မိသူ အပြစ်ရှိသောကြောင့် တာဝန်မရှိ'
        },
        correct: false
      },
      {
        text: {
          ja: '「ごめんなさい」と謝れば解決する',
          en: 'Saying "I\'m sorry" resolves the issue',
          zh: '道歉就能解决',
          vi: 'Nói "Xin lỗi" là giải quyết được vấn đề',
          tl: 'Ang pagsasabing "Pasensya na" ay nakakalutas ng problema',
          id: 'Mengucapkan "Maaf" sudah menyelesaikan masalah',
          my: '"ငါ့ကို ခွင့်လွှတ်ပါ" ဟုပြောလျှင် ဖြေရှင်းနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '相手の治療費などを払う責任が生じる',
          en: 'You become liable to pay for the other person\'s medical expenses and more',
          zh: '将承担支付对方医疗费等的责任',
          vi: 'Bạn có trách nhiệm trả chi phí y tế và hơn thế nữa',
          tl: 'Mananagot ka sa pagbabayad ng medikal na gastos at iba pa ng ibang tao',
          id: 'Anda bertanggung jawab membayar biaya medis dan lainnya',
          my: 'တဖက်သားသည့် ကုသစရိတ် နှင့် ဆက်သွယ်မှုများ ပေးဆောင်ရသည့် တာဝန်ဝတ္တရားများ ပေါ်ပေါက်သည်'
        },
        correct: true
      }
    ],
    explanation: {
      ja: '自転車で歩行者にぶつかってケガをさせると、治療費や慰謝料などを払う責任（民事責任）が生じます。場合によっては何百万円もの賠償になることもあります。自転車保険に加入していれば保険で対応できます。自転車に乗るときは常に「もし誰かにぶつかったら」と意識して安全運転を心がけましょう。',
      en: 'If you injure a pedestrian by cycling into them, you become civilly liable to pay their medical costs, compensation for pain, and more. In some cases this can reach millions of yen. Bicycle insurance can cover such costs. Always ride with the awareness that you could injure someone, and make safety your top priority.',
      zh: '骑自行车撞伤行人后，将产生支付治疗费和慰问金等的民事责任。有时赔偿金额可能高达数百万日元。如有自行车保险可通过保险处理。骑车时，请时刻意识到"如果撞到某人"，注意安全驾驶。',
      vi: 'Nếu bạn làm người đi bộ bị thương khi đạp xe, bạn sẽ có trách nhiệm dân sự để trả chi phí y tế, bồi thường thiệt hại và hơn thế nữa. Trong một số trường hợp, có thể lên đến hàng triệu yên. Bảo hiểm xe đạp có thể chi trả cho những chi phí như vậy. Luôn đạp xe với ý thức rằng bạn có thể gây thương tích cho ai đó.',
      tl: 'Kung maaari kang manggulo ng pedestrian sa pamamagitan ng pagbibisikleta sa kanila, mananagot ka sa sibil para bayaran ang kanilang medikal na gastos, kabayaran para sa sakit at higit pa. Sa ilang kaso ito ay maaaring umabot sa milyun-milyong yen. Ang bicycle insurance ay maaaring masaklaw ang gayong gastos. Palaging sumakay nang may kamalayan na maaari kang makapinsala ng isang tao.',
      id: 'Jika Anda melukai pejalan kaki dengan menabraknya saat bersepeda, Anda bertanggung jawab secara perdata untuk membayar biaya medis, ganti rugi, dan lainnya. Dalam beberapa kasus ini bisa mencapai jutaan yen. Asuransi sepeda bisa menanggung biaya tersebut. Selalu berkendara dengan kesadaran bahwa Anda bisa melukai seseorang.',
      my: 'စက်ဘီးစီးနင်းကာ လမ်းလျှောက်သူတစ်ဦးကို ဒဏ်ရာရစေလျှင်၊ သင်သည် သူတို့၏ ဆေးကုစရိတ်၊ နစ်နာကြေး နှင့် အခြားများကို ပေးဆောင်ရမည့် တရားဝင်တာဝန်ယူမှု ရှိလာသည်။ အချို့ကိစ္စများတွင် ဆယ်သောင်းနှင့်ချီ၍ မြောက်နိုင်သည်။ စက်ဘီးအာမခံ ရှိပါက ကာမိနိုင်သည်။ မောင်းနင်းသည့်အခါ "တစ်ဦးကို ဒဏ်ရာရစေနိုင်သည်" ဟု အမြဲ သတိရပြီး လုံခြုံသောမောင်းနှင်မှုကို ဦးစားပေးပါ။'
    },
    fineAmount: null,
    criminal: true
  }

]; /* /QUIZ_DATA */

