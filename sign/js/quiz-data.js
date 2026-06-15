'use strict';
/* ============================================================
   quiz-data.js — 多言語クイズデータ（全20問）
   対応言語: ja / en / vi / zh / tl / id / my
   ============================================================ */
const QUIZ_DATA = [

  /* ===== Q1: 通行止め ===== */
  {
    id: 1,
    signImage: 'img/sign_01_no_entry.png',
    signName: {
      ja: '通行止め', en: 'No Through Road', vi: 'Cấm Đi Lại',
      zh: '禁止通行', tl: 'Bawal Dumaan', id: 'Dilarang Lewat', my: 'ဖြတ်သန်းခွင့်မပြု'
    },
    question: {
      ja: 'この標識を見たとき、自転車はどう対応すべきですか？',
      en: 'When you see this sign, what should a bicycle do?',
      vi: 'Khi nhìn thấy biển báo này, xe đạp nên làm gì?',
      zh: '看到此标志时，自行车应如何应对？',
      tl: 'Kapag nakita ang senyas na ito, ano ang dapat gawin ng bisikleta?',
      id: 'Saat melihat rambu ini, apa yang harus dilakukan sepeda?',
      my: 'ဤဆိုင်းဘုတ်ကို မြင်သောအခါ၊ စက်ဘီးသည် မည်သို့ပြုမူသင့်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '自転車に乗ったままでは通行できない',
          en: 'Cannot pass while riding the bicycle',
          vi: 'Không thể đi qua khi đang ngồi trên xe đạp',
          zh: '骑车时无法通行',
          tl: 'Hindi makakaraan habang sinasakay ang bisikleta',
          id: 'Tidak dapat lewat saat sedang mengendarai sepeda',
          my: 'စက်ဘီးကိုစီးနင်းရင်း ဖြတ်သန်းမရ'
        },
        correct: true
      },
      {
        text: {
          ja: 'ゆっくり走れば通行できる',
          en: 'Can pass by riding slowly',
          vi: 'Có thể đi qua nếu đi chậm',
          zh: '慢慢骑可以通行',
          tl: 'Makakaraan kung dahan-dahan ang pagsakay',
          id: 'Bisa lewat jika berjalan pelan',
          my: 'နှေးနှေးမောင်းလျှင် ဖြတ်သန်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車は軽車両なので通行できる',
          en: 'Bicycles can pass because they are light vehicles',
          vi: 'Xe đạp có thể đi qua vì là phương tiện nhẹ',
          zh: '自行车是轻型车辆，可以通行',
          tl: 'Ang bisikleta ay makakaraan dahil magaang ito',
          id: 'Sepeda bisa lewat karena termasuk kendaraan ringan',
          my: 'စက်ဘီးသည် ပေါ့ပါးသောယာဉ်ဖြစ်ရာ ဖြတ်သန်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ベルを鳴らせば通行できる',
          en: 'Can pass by ringing the bell',
          vi: 'Có thể đi qua nếu bấm chuông',
          zh: '按铃可以通行',
          tl: 'Makakaraan kung magpatunog ng kampanilya',
          id: 'Bisa lewat dengan membunyikan bel',
          my: 'နှိုးဆင်းမြည်လျှင် ဖြတ်သန်းနိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「通行止め」の標識がある場所は、自転車（軽車両）も含めすべての車両が乗ったままでは通行できません。ただし自転車を降りて押して歩く場合は歩行者扱いとなるため通行できます。乗ったまま通行すると交通違反（青切符の対象）になります。',
      en: 'Where a "No Through Road" sign is posted, all vehicles including bicycles (light vehicles) cannot pass while riding. If you get off and walk the bicycle, you are treated as a pedestrian and may pass. Riding through is a traffic violation.',
      vi: 'Nơi có biển "Cấm đi lại," tất cả các phương tiện kể cả xe đạp đều không thể đi qua khi đang ngồi trên xe. Nếu xuống xe và dắt bộ thì được coi là người đi bộ và có thể đi qua. Cưỡi xe đi qua là vi phạm giao thông.',
      zh: '设有"禁止通行"标志的地方，包括自行车在内的所有车辆均不得骑行通过。但如果下车推行，则视为行人，可以通行。骑车通过属于交通违规行为。',
      tl: 'Sa lugar na may senyas na "Bawal Dumaan," ang lahat ng sasakyan kabilang ang bisikleta ay hindi maaaring dumaan habang nakasakay. Kung bumaba at itulak ang bisikleta, ituturing kang manlalakad at maaaring dumaan. Ang pagsakay na pagdaan ay paglabag sa trapiko.',
      id: 'Di tempat yang ada rambu "Dilarang Lewat," semua kendaraan termasuk sepeda tidak boleh lewat saat dikendarai. Jika turun dan menuntun sepeda, diperlakukan sebagai pejalan kaki dan boleh lewat. Mengendarai sepeda melewati rambu ini merupakan pelanggaran lalu lintas.',
      my: '"ဖြတ်သန်းခွင့်မပြု" ဆိုင်းဘုတ်ရှိသောနေရာတွင် စက်ဘီးအပါအဝင် ယာဉ်အားလုံး စီးနင်းရင်း ဖြတ်သန်းခွင့်မရှိပါ။ ဆင်းပြီး တွန်းသွားလျှင် လမ်းလျောက်သူအဖြစ် မှတ်ယူ၍ ဖြတ်သန်းနိုင်သည်။ စီးနင်းရင်း ဖြတ်သန်းခြင်းသည် ယာဉ်အသွားအလာ ကျိုးဖောက်မှုဖြစ်သည်။'
    }
  },

  /* ===== Q2: 一時停止（止まれ） ===== */
  {
    id: 2,
    signImage: 'img/sign_02_stop.png',
    signName: {
      ja: '一時停止（止まれ）', en: 'Stop Sign', vi: 'Biển Dừng Lại',
      zh: '停车让行', tl: 'Senyas na Huminto', id: 'Rambu Berhenti', my: 'ရပ်တန့် ဆိုင်းဘုတ်'
    },
    question: {
      ja: 'この標識がある場所で、自転車はどうしなければなりませんか？',
      en: 'At a place with this sign, what must a bicycle do?',
      vi: 'Tại nơi có biển báo này, xe đạp phải làm gì?',
      zh: '在有此标志的地方，自行车必须怎么做？',
      tl: 'Sa lugar na may senyas na ito, ano ang dapat gawin ng bisikleta?',
      id: 'Di tempat yang ada rambu ini, apa yang harus dilakukan sepeda?',
      my: 'ဤဆိုင်းဘုတ်ရှိသောနေရာတွင် စက်ဘီးသည် မည်သို့ပြုလုပ်ရမည်နည်း?'
    },
    choices: [
      {
        text: {
          ja: '必ず一時停止して安全確認',
          en: 'Must come to a complete stop and check for safety',
          vi: 'Phải dừng hoàn toàn và kiểm tra an toàn',
          zh: '必须完全停车并确认安全',
          tl: 'Dapat huminto nang ganap at suriin ang kaligtasan',
          id: 'Harus berhenti penuh dan periksa keamanan',
          my: 'မဖြစ်မနေ ရပ်ပြီး လုံခြုံမှုစစ်ဆေးရမည်'
        },
        correct: true
      },
      {
        text: {
          ja: '左右を見るだけでよい',
          en: 'Just look left and right',
          vi: 'Chỉ cần nhìn trái phải là đủ',
          zh: '只需左右看看就好',
          tl: 'Tumingin lang sa kaliwa at kanan',
          id: 'Cukup tengok kiri dan kanan',
          my: 'ဘယ်ညာ ကြည့်ရုံသာ လုံလောက်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '徐行すれば通れる',
          en: 'Can pass by going slowly',
          vi: 'Đi chậm thì có thể qua',
          zh: '只要慢行就能通过',
          tl: 'Makakaraan kung dahan-dahan ang takbo',
          id: 'Bisa lewat dengan berjalan pelan',
          my: 'နှေးနှေး သွားလျှင် ဖြတ်သန်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車は止まらなくてよい',
          en: 'Bicycles do not need to stop',
          vi: 'Xe đạp không cần dừng',
          zh: '自行车不需要停车',
          tl: 'Hindi kailangang huminto ang bisikleta',
          id: 'Sepeda tidak perlu berhenti',
          my: 'စက်ဘီးသည် မရပ်ရ မဟုတ်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「止まれ（一時停止）」の標識では、自転車も完全に停車してから安全確認をしなければなりません。「車輪が止まっていない」「少しだけ速度を落とした」では一時停止と認められず、違反になります。',
      en: 'At a "Stop" sign, bicycles must also come to a complete stop and check for safety. A stop is not recognized if the wheels are still moving or only the speed was slightly reduced, which constitutes a violation.',
      vi: 'Tại biển "Dừng lại," xe đạp cũng phải dừng hoàn toàn và kiểm tra an toàn. Nếu bánh xe chưa hoàn toàn dừng hoặc chỉ giảm tốc một chút thì không được coi là dừng và bị coi là vi phạm.',
      zh: '在"停车让行"标志处，自行车也必须完全停车后再确认安全。"车轮未停"或"只是稍微降低速度"不构成一时停止，属违规行为。',
      tl: 'Sa senyas na "Huminto," ang bisikleta ay dapat ding huminto nang ganap at suriin ang kaligtasan. Kung hindi pa ganap na huminto ang gulong o bahagyang bumagal lang ang takbo, hindi ito kinikilala bilang tamang paghinto at maituturing na paglabag.',
      id: 'Di rambu "Berhenti," sepeda pun harus berhenti penuh lalu memeriksa keamanan. "Roda belum berhenti" atau "hanya sedikit mengurangi kecepatan" tidak diakui sebagai berhenti dan dianggap pelanggaran.',
      my: '"ရပ်တန့်ပါ" ဆိုင်းဘုတ်တွင် စက်ဘီးသည်လည်း အပြည့်အဝ ရပ်ပြီး လုံခြုံမှုစစ်ဆေးရမည်။ ဘီးများ မရပ်သေး သို့မဟုတ် အမြန်နှုန်းကို အနည်းငယ်သာ လျော့ချသည်မှာ ရပ်ခြင်းဟု မမှတ်ယူဘဲ ကျိုးဖောက်မှုဖြစ်သည်။'
    }
  },

  /* ===== Q3: 自転車通行止め ===== */
  {
    id: 3,
    signImage: 'img/sign_03_no_bicycle.png',
    signName: {
      ja: '自転車通行止め', en: 'No Bicycles', vi: 'Cấm Xe Đạp',
      zh: '禁止自行车通行', tl: 'Bawal ang Bisikleta', id: 'Dilarang Sepeda', my: 'စက်ဘီးဖြတ်သန်းခွင့်မပြု'
    },
    question: {
      ja: 'この標識が掲げられた道路を、自転車はどうすべきですか？',
      en: 'What should a bicycle do on a road with this sign?',
      vi: 'Xe đạp nên làm gì trên con đường có biển báo này?',
      zh: '在有此标志的道路上，自行车应怎么做？',
      tl: 'Ano ang dapat gawin ng bisikleta sa daan na may senyas na ito?',
      id: 'Apa yang harus dilakukan sepeda di jalan yang ada rambu ini?',
      my: 'ဤဆိုင်းဘုတ်ရှိသော လမ်းတွင် စက်ဘီးသည် မည်သို့ပြုသင့်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '乗って走ることはできない',
          en: 'Cannot ride through this road',
          vi: 'Không thể đạp xe qua con đường này',
          zh: '不能骑车通行',
          tl: 'Hindi maaaring magbisikleta sa daan na ito',
          id: 'Tidak bisa bersepeda di jalan ini',
          my: 'ဤလမ်းတွင် စီးနင်း၍ ဖြတ်သန်းမရ'
        },
        correct: true
      },
      {
        text: {
          ja: '歩道があれば乗ったまま走れる',
          en: 'Can ride if there is a sidewalk',
          vi: 'Có thể đi nếu có vỉa hè',
          zh: '有人行道的话可以骑行',
          tl: 'Maaaring magbisikleta kung may sidewalk',
          id: 'Bisa bersepeda jika ada trotoar',
          my: 'လူသွားလမ်းရှိလျှင် စီးနင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ゆっくり走れば通行できる',
          en: 'Can pass by going slowly',
          vi: 'Có thể đi qua nếu đi chậm',
          zh: '慢慢骑可以通行',
          tl: 'Makakaraan kung dahan-dahan ang takbo',
          id: 'Bisa lewat jika berjalan pelan',
          my: 'နှေးနှေးမောင်းလျှင် ဖြတ်သန်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '夜間のみ通行できる',
          en: 'Can only pass at night',
          vi: 'Chỉ có thể đi vào ban đêm',
          zh: '只能在夜间通行',
          tl: 'Maaari lang dumaan sa gabi',
          id: 'Hanya bisa lewat di malam hari',
          my: 'ညဘက်သာ ဖြတ်သန်းနိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「自転車通行止め」の標識は、自転車に乗っての通行を禁止しています。自転車を降りて押して歩く場合は歩行者扱いになるため通行できます。乗ったまま走ることは禁止なので、必ず迂回するか降りて押して歩きましょう。',
      en: 'The "No Bicycles" sign prohibits riding a bicycle. If you get off and walk the bicycle, you are treated as a pedestrian and may pass. Riding is prohibited, so you must either detour or walk the bicycle.',
      vi: 'Biển "Cấm xe đạp" cấm đi xe đạp. Nếu xuống xe và dắt bộ thì được coi là người đi bộ và có thể đi qua. Việc đi xe là bị cấm, vì vậy bạn phải đi đường khác hoặc dắt xe bộ.',
      zh: '"禁止自行车通行"标志禁止骑行自行车。如果下车推行，则视为行人，可以通行。骑行被禁止，因此必须绕行或下车推行。',
      tl: 'Ang senyas na "Bawal ang Bisikleta" ay nagbabawal sa pagbibisikleta. Kung bumaba at itulak ang bisikleta, ituturing kang manlalakad at maaaring dumaan. Ang pagsakay ay ipinagbabawal, kaya kailangan mong lumihis o itulak ang bisikleta.',
      id: 'Rambu "Dilarang Sepeda" melarang bersepeda. Jika turun dan menuntun sepeda, diperlakukan sebagai pejalan kaki dan boleh lewat. Bersepeda dilarang, sehingga harus memutar atau menuntun sepeda.',
      my: '"စက်ဘီးဖြတ်သန်းခွင့်မပြု" ဆိုင်းဘုတ်သည် စက်ဘီးစီးနင်းခြင်းကို တားမြစ်သည်။ ဆင်းပြီး တွန်းသွားလျှင် လမ်းလျောက်သူအဖြစ် မှတ်ယူ၍ ဖြတ်သန်းနိုင်သည်။ စီးနင်းခြင်း တားမြစ်ထားသောကြောင့် လမ်းပြောင်းသွားရမည် သို့မဟုတ် ဆင်းပြီး တွန်းသွားရမည်။'
    }
  },

  /* ===== Q4: 徐行 ===== */
  {
    id: 4,
    signImage: 'img/sign_04_slow_down.png',
    signName: {
      ja: '徐行', en: 'Slow Down', vi: 'Đi Chậm',
      zh: '慢行', tl: 'Bumagal', id: 'Pelan-Pelan', my: 'နှေးနှေးသွားပါ'
    },
    question: {
      ja: 'この標識がある場所では自転車はどう走るべきですか？',
      en: 'At a place with this sign, how should a bicycle ride?',
      vi: 'Tại nơi có biển báo này, xe đạp nên đi như thế nào?',
      zh: '在有此标志的地方，自行车应该怎么骑？',
      tl: 'Sa lugar na may senyas na ito, paano dapat magbisikleta?',
      id: 'Di tempat yang ada rambu ini, bagaimana sepeda harus berjalan?',
      my: 'ဤဆိုင်းဘုတ်ရှိသောနေရာတွင် စက်ဘီးသည် မည်သို့မောင်းသင့်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: 'すぐに止まれる速度まで減速する',
          en: 'Reduce speed to be able to stop immediately',
          vi: 'Giảm tốc độ để có thể dừng ngay lập tức',
          zh: '减速至能够立即停车的速度',
          tl: 'Bawasan ang bilis para makapag-stop agad',
          id: 'Kurangi kecepatan agar bisa berhenti seketika',
          my: 'ချက်ချင်းရပ်နိုင်သော အမြန်နှုန်းသို့ လျော့ချရမည်'
        },
        correct: true
      },
      {
        text: {
          ja: '時速30km以下で走る',
          en: 'Ride at under 30 km/h',
          vi: 'Đi với tốc độ dưới 30 km/h',
          zh: '以时速30公里以下行驶',
          tl: 'Magsakay sa baba ng 30 km/h',
          id: 'Berjalan di bawah 30 km/jam',
          my: 'နာရီ ၃၀ ကီလိုမီတာ အောက်ဖြင့် မောင်းရမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '速度を変えず注意して走る',
          en: 'Ride cautiously at the same speed',
          vi: 'Đi cẩn thận với tốc độ như cũ',
          zh: '保持速度谨慎行驶',
          tl: 'Magsakay nang maingat sa parehong bilis',
          id: 'Berjalan hati-hati dengan kecepatan yang sama',
          my: 'အမြန်နှုန်း မပြောင်းဘဲ သတိထားမောင်းရမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '一時停止してから走る',
          en: 'Make a temporary stop then proceed',
          vi: 'Dừng hoàn toàn rồi mới đi tiếp',
          zh: '先停车再行驶',
          tl: 'Huminto muna bago magpatuloy',
          id: 'Berhenti sejenak lalu lanjutkan',
          my: 'တစ်ချိန်ရပ်ပြီးမှ ဆက်မောင်းရမည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「徐行」とは「直ちに停止できる速度」（一般に時速10km以下が目安）で走ることを意味します。時速30km以下ならよい、というわけではありません。カーブ・交差点手前・歩道との交差などで徐行が義務付けられています。',
      en: '"Slow down" means riding at a speed where you can stop immediately (generally under 10 km/h). It does not mean anything under 30 km/h is acceptable. Slowing down is required before curves, intersections, and crossings with sidewalks.',
      vi: '"Đi chậm" có nghĩa là đi với tốc độ có thể dừng ngay lập tức (thường dưới 10 km/h). Không phải cứ dưới 30 km/h là được. Phải đi chậm trước các khúc cua, giao lộ và chỗ giao nhau với vỉa hè.',
      zh: '"慢行"是指以"能够立即停车的速度"（一般为时速10公里以下）行驶。并不是说时速30公里以下就可以。在弯道前、十字路口前、与人行道交叉处等地方，必须慢行。',
      tl: 'Ang "Bumagal" ay nangangahulugang magsakay sa bilis na maaaring huminto agad (karaniwang wala pang 10 km/h). Hindi ibig sabihin na ok ang bilis na wala pang 30 km/h. Kailangan bumagal bago sa kurba, intersection, at tawiran ng sidewalk.',
      id: '"Pelan-pelan" berarti berjalan dengan kecepatan yang bisa berhenti seketika (umumnya di bawah 10 km/jam). Bukan berarti di bawah 30 km/jam sudah cukup. Harus pelan-pelan sebelum tikungan, persimpangan, dan perlintasan trotoar.',
      my: '"နှေးနှေးသွားပါ" ဆိုသည်မှာ ချက်ချင်းရပ်နိုင်သော အမြန်နှုန်း (ယေဘုယျ နာရီ ၁၀ ကီလိုမီတာ အောက်) ဖြင့် မောင်းခြင်းကို ဆိုသည်။ နာရီ ၃၀ ကီလိုမီတာ အောက်ဆိုလျှင် ရသည်ဟု မဆိုလိုပါ။ ကွေ့ကောက်ကြိုတင်၊ လမ်းဆုံမတိုင်မှီ၊ လူသွားလမ်းဖြတ်သန်းသည့်နေရာ၌ နှေးနှေးသွားဖို့ တာဝန်ရှိသည်။'
    }
  },

  /* ===== Q5: 歩行者専用 ===== */
  {
    id: 5,
    signImage: 'img/sign_05_pedestrian_only.png',
    signName: {
      ja: '歩行者専用', en: 'Pedestrians Only', vi: 'Chỉ Dành Cho Người Đi Bộ',
      zh: '行人专用', tl: 'Para sa Manlalakad Lamang', id: 'Hanya Pejalan Kaki', my: 'လမ်းလျောက်သူများသာ'
    },
    question: {
      ja: 'この標識がある道路を、自転車はどのように通行できますか？',
      en: 'How can a bicycle use a road with this sign?',
      vi: 'Xe đạp có thể đi trên con đường có biển báo này như thế nào?',
      zh: '在有此标志的道路上，自行车如何通行？',
      tl: 'Paano makakarating ang bisikleta sa daan na may senyas na ito?',
      id: 'Bagaimana sepeda bisa melewati jalan yang ada rambu ini?',
      my: 'ဤဆိုင်းဘုတ်ရှိသော လမ်းတွင် စက်ဘီးသည် မည်သို့ဖြတ်သန်းနိုင်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '原則通行できない（例外あり）',
          en: 'Cannot use in principle (with exceptions)',
          vi: 'Về nguyên tắc không thể đi (có ngoại lệ)',
          zh: '原则上不能通行（有例外）',
          tl: 'Sa pangkalahatan hindi maaaring dumaan (may pagbubukod)',
          id: 'Pada prinsipnya tidak bisa lewat (ada pengecualian)',
          my: 'မူလမူအရ ဖြတ်သန်းမရ (ခြွင်းချက်ရှိ)'
        },
        correct: true
      },
      {
        text: {
          ja: '自転車は常に通行できる',
          en: 'Bicycles can always pass',
          vi: 'Xe đạp luôn có thể đi qua',
          zh: '自行车始终可以通行',
          tl: 'Palaging makakarating ang bisikleta',
          id: 'Sepeda selalu bisa lewat',
          my: 'စက်ဘီးသည် အမြဲ ဖြတ်သန်းနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '徐行すれば通行できる',
          en: 'Can pass by going slowly',
          vi: 'Đi chậm thì có thể đi qua',
          zh: '慢行即可通行',
          tl: 'Makakaraan kung bumagal',
          id: 'Bisa lewat dengan pelan-pelan',
          my: 'နှေးနှေးသွားလျှင် ဖြတ်သန်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '夜間のみ通行できる',
          en: 'Can only pass at night',
          vi: 'Chỉ có thể đi vào ban đêm',
          zh: '只能在夜间通行',
          tl: 'Maaari lang dumaan sa gabi',
          id: 'Hanya bisa lewat di malam hari',
          my: 'ညဘက်သာ ဖြတ်သန်းနိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「歩行者専用」の道路は原則として自転車は通行できません。ただし「自転車を除く」の補助標識がある場合や、警察署長が許可した場合などは例外的に通行できます。なお、通行が認められた場合でも歩行者優先で徐行しなければなりません。',
      en: 'Roads marked "Pedestrians Only" are generally off-limits to bicycles. However, exceptions apply when a supplementary sign says "excluding bicycles" or when permitted by police. Even when permitted, bicycles must give way to pedestrians and go slowly.',
      vi: 'Đường "Chỉ dành cho người đi bộ" về nguyên tắc không cho xe đạp đi. Tuy nhiên có ngoại lệ khi có biển phụ "trừ xe đạp" hoặc được cảnh sát cho phép. Dù được phép, xe đạp vẫn phải ưu tiên người đi bộ và đi chậm.',
      zh: '"行人专用"道路原则上自行车不能通行。但如果有"自行车除外"的辅助标志，或警察署长允许的情况下，例外可以通行。即使获准通行，也必须行人优先、慢行。',
      tl: 'Ang mga daan na "Para sa Manlalakad Lamang" ay sa pangkalahatan hindi para sa bisikleta. Ngunit may pagbubukod kapag may karagdagang senyas na "hindi kasama ang bisikleta" o kapag pinahintulutan ng pulisya. Kahit pinahintulutan, dapat unahin ang manlalakad at bumagal.',
      id: 'Jalan "Hanya Pejalan Kaki" pada prinsipnya tidak boleh dilalui sepeda. Namun ada pengecualian jika ada rambu tambahan "kecuali sepeda" atau diizinkan polisi. Meski diizinkan, sepeda harus mendahulukan pejalan kaki dan berjalan pelan.',
      my: '"လမ်းလျောက်သူများသာ" လမ်းတွင် မူလမူအရ စက်ဘီးများ ဖြတ်သန်းခွင့်မရှိပါ။ သို့သော် "စက်ဘီးမပါ" ဖြည့်စွက်ဆိုင်းဘုတ်ရှိလျှင် သို့မဟုတ် ရဲမှ ခွင့်ပြုလျှင် ခြွင်းချက်အနေဖြင့် ဖြတ်သန်းနိုင်သည်။ ခွင့်ပြုသောအခါပင် လမ်းလျောက်သူများကို ဦးစားပေးကာ နှေးနှေးသွားရမည်။'
    }
  },

  /* ===== Q6: 自転車専用 ===== */
  {
    id: 6,
    signImage: 'img/sign_06_bicycle_only.png',
    signName: {
      ja: '自転車専用', en: 'Bicycles Only', vi: 'Chỉ Dành Cho Xe Đạp',
      zh: '自行车专用', tl: 'Para sa Bisikleta Lamang', id: 'Sepeda Saja', my: 'စက်ဘီးသာ'
    },
    question: {
      ja: 'この標識が設置されている場所では、自転車はどのように走れますか？',
      en: 'At a place with this sign, how can a bicycle ride?',
      vi: 'Tại nơi có biển báo này, xe đạp có thể đi như thế nào?',
      zh: '在有此标志的地方，自行车可以怎么骑？',
      tl: 'Sa lugar na may senyas na ito, paano maaaring magbisikleta?',
      id: 'Di tempat yang ada rambu ini, bagaimana sepeda bisa berjalan?',
      my: 'ဤဆိုင်းဘုတ်ရှိသောနေရာတွင် စက်ဘီးသည် မည်သို့မောင်းနိုင်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '自転車だけが通行できる道路',
          en: 'A road where only bicycles can pass',
          vi: 'Con đường chỉ dành cho xe đạp',
          zh: '只有自行车可以通行的道路',
          tl: 'Isang daan kung saan ang bisikleta lamang ang maaaring dumaan',
          id: 'Jalan yang hanya bisa dilalui sepeda',
          my: 'စက်ဘီးသာ ဖြတ်သန်းနိုင်သော လမ်း'
        },
        correct: true
      },
      {
        text: {
          ja: '自転車は走れない',
          en: 'Bicycles cannot ride here',
          vi: 'Xe đạp không thể đi ở đây',
          zh: '自行车不能行驶',
          tl: 'Hindi maaaring magbisikleta dito',
          id: 'Sepeda tidak bisa berjalan di sini',
          my: 'စက်ဘီး မောင်း၍ မရ'
        },
        correct: false
      },
      {
        text: {
          ja: '自動車と自転車が走れる',
          en: 'Cars and bicycles can ride here',
          vi: 'Ô tô và xe đạp có thể đi ở đây',
          zh: '汽车和自行车都可以行驶',
          tl: 'Ang mga kotse at bisikleta ay maaaring dumaan',
          id: 'Mobil dan sepeda bisa melewati jalan ini',
          my: 'ကားနှင့် စက်ဘီးနှစ်မျိုးစလုံး မောင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '歩行者と自転車が走れる',
          en: 'Pedestrians and bicycles can use here',
          vi: 'Người đi bộ và xe đạp có thể đi ở đây',
          zh: '行人和自行车都可以通行',
          tl: 'Ang manlalakad at bisikleta ay maaaring dumaan',
          id: 'Pejalan kaki dan sepeda bisa melewati jalan ini',
          my: 'လမ်းလျောက်သူနှင့် စက်ဘီး နှစ်မျိုးစလုံး မောင်းနိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「自転車専用」の道路は自転車のみが通行できます。歩行者も自動車も通行できません。自転車専用道路では自転車は安全に通行できますが、逆に歩道を走ることは原則禁止なので注意しましょう。',
      en: 'A "Bicycles Only" road is exclusively for bicycles. Pedestrians and cars cannot use it. While bicycles can ride safely here, riding on the sidewalk is generally prohibited.',
      vi: 'Đường "Chỉ dành cho xe đạp" chỉ dành cho xe đạp. Người đi bộ và ô tô không thể sử dụng. Mặc dù xe đạp có thể đi an toàn ở đây, nhưng đi trên vỉa hè thường bị cấm.',
      zh: '"自行车专用"道路只有自行车可以通行。行人和汽车都不能通行。自行车在专用道路上可以安全通行，但反过来，骑自行车走人行道原则上是禁止的，请注意。',
      tl: 'Ang daan na "Para sa Bisikleta Lamang" ay para lamang sa bisikleta. Hindi maaaring gamitin ng manlalakad at kotse. Bagaman maaaring ligtas na sumakay ang bisikleta dito, ang pagbibisikleta sa sidewalk ay karaniwang ipinagbabawal.',
      id: 'Jalan "Sepeda Saja" hanya untuk sepeda. Pejalan kaki dan mobil tidak boleh melewatinya. Meski sepeda bisa lewat dengan aman di sini, bersepeda di trotoar pada prinsipnya dilarang.',
      my: '"စက်ဘီးသာ" လမ်းသည် စက်ဘီးများအတွက်သာ ဖြစ်သည်။ လမ်းလျောက်သူများနှင့် ကားများ ဖြတ်သန်းမရပါ။ ဤနေရာတွင် စက်ဘီးများ လုံခြုံစွာ မောင်းနိုင်သော်လည်း လူသွားလမ်းတွင် မောင်းခြင်းသည် မူလမူအရ တားမြစ်ထားသောကြောင့် သတိပြုပါ။'
    }
  },

  /* ===== Q7: 一方通行 ===== */
  {
    id: 7,
    signImage: 'img/sign_07_one_way.png',
    signName: {
      ja: '一方通行', en: 'One-Way Traffic', vi: 'Đường Một Chiều',
      zh: '单行道', tl: 'Isang Direksyon', id: 'Satu Arah', my: 'တစ်လမ်းသွားလမ်း'
    },
    question: {
      ja: 'この標識がある道路で自転車はどこを走らなければなりませんか？',
      en: 'On a road with this sign, where must a bicycle ride?',
      vi: 'Trên con đường có biển báo này, xe đạp phải đi ở đâu?',
      zh: '在有此标志的道路上，自行车必须在哪里行驶？',
      tl: 'Sa daan na may senyas na ito, saan dapat dumaan ang bisikleta?',
      id: 'Di jalan yang ada rambu ini, di mana sepeda harus berjalan?',
      my: 'ဤဆိုင်းဘုတ်ရှိသော လမ်းတွင် စက်ဘီးသည် မည်သည့်နေရာတွင် မောင်းရမည်နည်း?'
    },
    choices: [
      {
        text: {
          ja: '標識の矢印方向にのみ走れる',
          en: 'Can only ride in the direction of the arrow',
          vi: 'Chỉ có thể đi theo hướng mũi tên',
          zh: '只能朝标志箭头方向行驶',
          tl: 'Maaari lang magsakay sa direksyon ng arrow',
          id: 'Hanya bisa berjalan sesuai arah panah',
          my: 'ဆိုင်းဘုတ်၏ မြားလှည့်ရာ ဦးတည်ချက်ဖြင့်သာ မောင်းနိုင်'
        },
        correct: true
      },
      {
        text: {
          ja: '自転車は逆走できる',
          en: 'Bicycles can ride against the flow',
          vi: 'Xe đạp có thể đi ngược chiều',
          zh: '自行车可以逆行',
          tl: 'Maaaring sumalungat ang bisikleta',
          id: 'Sepeda bisa melawan arus',
          my: 'စက်ဘီးသည် ဆန့်ကျင်ဘက် မောင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '歩道を逆方向に走れる',
          en: 'Can ride on the sidewalk in the opposite direction',
          vi: 'Có thể đi ngược chiều trên vỉa hè',
          zh: '可以在人行道上逆向行驶',
          tl: 'Maaaring magsakay sa sidewalk sa kabaligtarang direksyon',
          id: 'Bisa berjalan di trotoar ke arah berlawanan',
          my: 'လူသွားလမ်းပေါ်တွင် ဆန့်ကျင်ဘက် မောင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: 'どの方向でも走れる',
          en: 'Can ride in any direction',
          vi: 'Có thể đi theo bất kỳ hướng nào',
          zh: '可以朝任何方向行驶',
          tl: 'Maaaring magsakay sa anumang direksyon',
          id: 'Bisa berjalan ke arah mana saja',
          my: 'မည်သည့် ဦးတည်ချက်ဖြင့်မဆို မောင်းနိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '一方通行の道路では、自転車も原則として矢印方向にしか走れません。ただし「自転車を除く」「軽車両を除く」の補助標識がある場合は、自転車は逆方向にも走れます。補助標識を必ず確認しましょう。',
      en: 'On a one-way road, bicycles must also generally ride in the direction of the arrow. However, if a supplementary sign says "excluding bicycles" or "excluding light vehicles," bicycles may ride in the opposite direction. Always check the supplementary sign.',
      vi: 'Trên đường một chiều, xe đạp cũng phải đi theo hướng mũi tên. Tuy nhiên nếu có biển phụ "trừ xe đạp" hoặc "trừ phương tiện nhẹ," xe đạp có thể đi ngược chiều. Hãy luôn kiểm tra biển phụ.',
      zh: '在单行道上，自行车原则上也只能朝箭头方向行驶。但如果有"自行车除外"或"轻型车辆除外"的辅助标志，自行车可以逆向行驶。一定要确认辅助标志。',
      tl: 'Sa isang-direksyong daan, ang bisikleta ay dapat ding sumunod sa direksyon ng arrow. Ngunit kung may karagdagang senyas na "hindi kasama ang bisikleta" o "hindi kasama ang magaang na sasakyan," maaaring pumunta ang bisikleta sa kabaligtarang direksyon. Laging suriin ang karagdagang senyas.',
      id: 'Di jalan satu arah, sepeda juga pada prinsipnya hanya bisa berjalan sesuai arah panah. Namun jika ada rambu tambahan "kecuali sepeda" atau "kecuali kendaraan ringan," sepeda bisa berjalan ke arah berlawanan. Selalu periksa rambu tambahan.',
      my: 'တစ်လမ်းသွားလမ်းတွင် စက်ဘီးသည်လည်း မူလမူအရ မြားလှည့်ရာ ဦးတည်ချက်ဖြင့်သာ မောင်းရမည်။ သို့သော် "စက်ဘီးမပါ" သို့မဟုတ် "ပေါ့ပါးယာဉ်မပါ" ဟူသော ဖြည့်စွက်ဆိုင်းဘုတ်ရှိလျှင် စက်ဘီးသည် ဆန့်ကျင်ဘက် မောင်းနိုင်သည်။ ဖြည့်စွက်ဆိုင်းဘုတ်ကို အမြဲစစ်ဆေးပါ။'
    }
  },

  /* ===== Q8: 車両進入禁止 ===== */
  {
    id: 8,
    signImage: 'img/sign_08_do_not_enter.png',
    signName: {
      ja: '車両進入禁止', en: 'No Entry for Vehicles', vi: 'Cấm Xe Vào',
      zh: '禁止车辆驶入', tl: 'Bawal Pumasok ang Sasakyan', id: 'Dilarang Masuk Kendaraan', my: 'ယာဉ်ဝင်ခွင့်မပြု'
    },
    question: {
      ja: 'この標識がある交差点で自転車はどうすべきですか？',
      en: 'What should a bicycle do at an intersection with this sign?',
      vi: 'Xe đạp nên làm gì tại ngã tư có biển báo này?',
      zh: '在有此标志的交叉路口，自行车应怎么做？',
      tl: 'Ano ang dapat gawin ng bisikleta sa intersection na may senyas na ito?',
      id: 'Apa yang harus dilakukan sepeda di persimpangan yang ada rambu ini?',
      my: 'ဤဆိုင်းဘုတ်ရှိသော လမ်းဆုံတွင် စက်ဘီးသည် မည်သို့ပြုသင့်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '自転車に乗ったままでは進入できない',
          en: 'Cannot enter while riding the bicycle',
          vi: 'Không thể vào khi đang ngồi trên xe đạp',
          zh: '骑车时无法进入',
          tl: 'Hindi makapasok habang sinasakay ang bisikleta',
          id: 'Tidak bisa masuk saat sedang mengendarai sepeda',
          my: 'စက်ဘီးစီးနင်းရင်း ဝင်ခွင့်မရ'
        },
        correct: true
      },
      {
        text: {
          ja: 'ゆっくり走れば進入できる',
          en: 'Can enter by riding slowly',
          vi: 'Có thể vào nếu đi chậm',
          zh: '慢慢骑可以进入',
          tl: 'Makapasok kung dahan-dahan ang pagsakay',
          id: 'Bisa masuk jika berjalan pelan',
          my: 'နှေးနှေးမောင်းလျှင် ဝင်နိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車は車両ではないので進入できる',
          en: 'Bicycles are not vehicles so can enter',
          vi: 'Xe đạp không phải phương tiện nên có thể vào',
          zh: '自行车不是车辆，可以进入',
          tl: 'Hindi sasakyan ang bisikleta kaya maaaring pumasok',
          id: 'Sepeda bukan kendaraan jadi bisa masuk',
          my: 'စက်ဘီးသည် ယာဉ်မဟုတ်သောကြောင့် ဝင်နိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '補助標識がなければ進入できる',
          en: 'Can enter if there is no supplementary sign',
          vi: 'Có thể vào nếu không có biển phụ',
          zh: '没有辅助标志的话可以进入',
          tl: 'Maaaring pumasok kung walang karagdagang senyas',
          id: 'Bisa masuk jika tidak ada rambu tambahan',
          my: 'ဖြည့်စွက်ဆိုင်းဘုတ် မရှိလျှင် ဝင်နိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「車両進入禁止」は一方通行の出口などに設置され、自転車を含むすべての車両が乗ったままでの進入を禁じます。ただし自転車を降りて押して歩く場合は歩行者扱いとなるため進入できます。',
      en: '"No Entry for Vehicles" is placed at the exit of one-way roads and prohibits all vehicles including bicycles from entering while riding. However, if you get off and walk the bicycle, you are treated as a pedestrian and may enter.',
      vi: '"Cấm xe vào" được đặt ở lối ra của đường một chiều và cấm tất cả các phương tiện kể cả xe đạp vào khi đang ngồi trên xe. Tuy nhiên nếu xuống xe và dắt bộ thì được coi là người đi bộ và có thể vào.',
      zh: '"禁止车辆驶入"设置在单行道出口等处，禁止包括自行车在内的所有车辆骑行进入。但如果下车推行，则视为行人，可以进入。',
      tl: 'Ang "Bawal Pumasok ang Sasakyan" ay inilalagay sa labasan ng isang-direksyong daan at nagbabawal sa lahat ng sasakyan kabilang ang bisikleta na pumasok habang nakasakay. Ngunit kung bumaba at itulak ang bisikleta, ituturing kang manlalakad at maaaring pumasok.',
      id: '"Dilarang Masuk Kendaraan" dipasang di pintu keluar jalan satu arah dan melarang semua kendaraan termasuk sepeda masuk saat dikendarai. Namun jika turun dan menuntun sepeda, diperlakukan sebagai pejalan kaki dan boleh masuk.',
      my: '"ယာဉ်ဝင်ခွင့်မပြု" ကို တစ်လမ်းသွားလမ်း၏ ထွက်ပေါက်တွင် တပ်ဆင်ပြီး စက်ဘီးအပါအဝင် ယာဉ်အားလုံး စီးနင်းရင်း ဝင်ခြင်းကို တားမြစ်သည်။ သို့သော် ဆင်းပြီး တွန်းသွားလျှင် လမ်းလျောက်သူအဖြစ် မှတ်ယူ၍ ဝင်နိုင်သည်။'
    }
  },

  /* ===== Q9: 路面標示「止まれ」 ===== */
  {
    id: 9,
    signImage: 'img/sign_09_stop_marking.png',
    signName: {
      ja: '路面標示「止まれ」', en: 'Road Marking "Stop"', vi: 'Vạch Đường "Dừng"',
      zh: '路面标线"停"', tl: 'Marka sa Daan "Huminto"', id: 'Marka Jalan "Stop"', my: 'လမ်းမှတ်သား "ရပ်"'
    },
    question: {
      ja: '道路に「止まれ」と書かれた路面標示があります。自転車はどうすべきですか？',
      en: 'There is a "STOP" road marking on the road. What should a bicycle do?',
      vi: 'Có vạch kẻ đường "DỪNG" trên mặt đường. Xe đạp nên làm gì?',
      zh: '路面上有"停"的路面标线。自行车应怎么做？',
      tl: 'May marka sa daan na "HUMINTO" sa kalsada. Ano ang dapat gawin ng bisikleta?',
      id: 'Ada marka jalan "STOP" di jalan. Apa yang harus dilakukan sepeda?',
      my: 'လမ်းမပေါ်တွင် "ရပ်" ဟူသော လမ်းမှတ်သားရှိသည်။ စက်ဘီးသည် မည်သို့ပြုသင့်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '停止線の手前で一時停止する',
          en: 'Stop before the stop line',
          vi: 'Dừng trước vạch dừng',
          zh: '在停止线前停车',
          tl: 'Huminto bago ang stop line',
          id: 'Berhenti sebelum garis stop',
          my: 'ရပ်ဆိုင်းမျဉ်း မတိုင်မှီ ရပ်ရမည်'
        },
        correct: true
      },
      {
        text: {
          ja: '徐行するだけでよい',
          en: 'Just slowing down is enough',
          vi: 'Chỉ cần đi chậm lại là đủ',
          zh: '只需慢行即可',
          tl: 'Sapat na ang bumagal lang',
          id: 'Cukup pelan-pelan saja',
          my: 'နှေးနှေးသွားရုံသာ လုံလောက်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '路面標示は無視してよい',
          en: 'Road markings can be ignored',
          vi: 'Có thể bỏ qua vạch kẻ đường',
          zh: '可以忽略路面标线',
          tl: 'Maaaring balewalain ang marka sa daan',
          id: 'Marka jalan bisa diabaikan',
          my: 'လမ်းမှတ်သားကို လျစ်လျူရှုနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '停止線を越えてから止まる',
          en: 'Stop after crossing the stop line',
          vi: 'Dừng sau khi vượt qua vạch dừng',
          zh: '越过停止线后再停车',
          tl: 'Huminto pagkatapos tumawid sa stop line',
          id: 'Berhenti setelah melewati garis stop',
          my: 'ရပ်ဆိုင်းမျဉ်း ကျော်ပြီးမှ ရပ်ရမည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '路面の「止まれ」文字と白線（停止線）は、停止線の手前で一時停止することを意味します。停止線を越えてから止まると一時停止違反になることがあります。必ず停止線の直前で完全停止し、安全確認をしてください。',
      en: 'The "STOP" text and white line (stop line) on the road mean you must stop before the stop line. Stopping after crossing the line may constitute a stop violation. Always come to a complete stop just before the stop line and check for safety.',
      vi: 'Chữ "DỪNG" và vạch trắng (vạch dừng) trên đường có nghĩa là bạn phải dừng trước vạch dừng. Dừng sau khi vượt qua vạch có thể bị coi là vi phạm dừng. Luôn dừng hẳn ngay trước vạch dừng và kiểm tra an toàn.',
      zh: '路面上的"停"字和白线（停止线）意味着必须在停止线前停车。越过停止线后再停车可能构成违规。请务必在停止线正前方完全停车，并确认安全。',
      tl: 'Ang tekstong "HUMINTO" at puting linya (stop line) sa daan ay nangangahulugang kailangan kang huminto bago ang stop line. Ang paghinto pagkatapos lumampas sa linya ay maaaring ituring na paglabag. Laging huminto nang ganap bago ang stop line at suriin ang kaligtasan.',
      id: 'Tulisan "STOP" dan garis putih (garis stop) di jalan berarti harus berhenti sebelum garis stop. Berhenti setelah melewati garis bisa dianggap pelanggaran stop. Selalu berhenti penuh tepat sebelum garis stop dan periksa keamanan.',
      my: 'လမ်းမပေါ်ရှိ "ရပ်" စာသားနှင့် အဖြူမျဉ်း (ရပ်ဆိုင်းမျဉ်း) သည် ရပ်ဆိုင်းမျဉ်း မတိုင်မှီ ရပ်ရမည်ဟု ဆိုလိုသည်။ မျဉ်းကျော်ပြီးမှ ရပ်ခြင်းသည် ကျိုးဖောက်မှုဖြစ်နိုင်သည်။ ရပ်ဆိုင်းမျဉ်းမတိုင်မှီ အပြည့်အဝရပ်ပြီး လုံခြုံမှုစစ်ဆေးပါ။'
    }
  },

  /* ===== Q10: 横断歩道 ===== */
  {
    id: 10,
    signImage: 'img/sign_10_crosswalk.png',
    signName: {
      ja: '横断歩道', en: 'Pedestrian Crossing', vi: 'Vạch Sang Đường',
      zh: '人行横道', tl: 'Tawiran ng Paa', id: 'Zebra Cross', my: 'လမ်းဖြတ်ကူး'
    },
    question: {
      ja: '自転車で車道を走っていると、前方に横断歩道がありました。横断歩道の横に人が立っていて、今にも渡ろうとしています。あなたはどうしますか？',
      en: 'While cycling on the road, you see a pedestrian crossing ahead. A person is standing beside it and about to cross. What do you do?',
      vi: 'Đang đạp xe trên đường, bạn thấy có vạch sang đường phía trước. Có người đứng bên cạnh và sắp sang đường. Bạn làm gì?',
      zh: '骑自行车在车道上行驶，前方有人行横道。横道旁有人站立，正准备过马路。你该怎么做？',
      tl: 'Habang nagbibisikleta sa kalsada, may nakita kang tawiran ng paa sa harapan. May isang taong nakatayo sa tabi nito at halos tumawid na. Ano ang gagawin mo?',
      id: 'Saat bersepeda di jalan, kamu melihat zebra cross di depan. Ada orang berdiri di sampingnya dan hampir menyeberang. Apa yang kamu lakukan?',
      my: 'လမ်းမပေါ်တွင် စက်ဘီးမောင်းနေစဉ် ရှေ့တွင် လမ်းဖြတ်ကူးနေရာ တွေ့သည်။ ဘေးတွင် လူတစ်ဦး ရပ်နေပြီး ဖြတ်ကူးမည့် အနေအထားတွင် ရှိသည်။ သင်မည်သို့ပြုမည်နည်း?'
    },
    choices: [
      {
        text: {
          ja: '一時停止して歩行者を先に渡らせる',
          en: 'Stop temporarily and let the pedestrian cross first',
          vi: 'Dừng lại và nhường người đi bộ qua trước',
          zh: '暂时停车，让行人先过',
          tl: 'Huminto pansamantala at hayaan ang manlalakad na tumawid muna',
          id: 'Berhenti sejenak dan biarkan pejalan kaki menyeberang lebih dulu',
          my: 'တစ်ချိန်ရပ်ပြီး လမ်းလျောက်သူကို အရင်ဖြတ်ကူးစေရမည်'
        },
        correct: true
      },
      {
        text: {
          ja: '歩行者の後ろをゆっくり走ればよい',
          en: 'Can ride slowly behind the pedestrian',
          vi: 'Có thể đi chậm phía sau người đi bộ',
          zh: '在行人后面慢慢骑就可以了',
          tl: 'Maaaring magsakay nang dahan-dahan sa likod ng manlalakad',
          id: 'Bisa berjalan pelan di belakang pejalan kaki',
          my: 'လမ်းလျောက်သူ နောက်မှ နှေးနှေးမောင်းရုံ လုံလောက်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: 'ベルを鳴らして通過できる',
          en: 'Can pass through by ringing the bell',
          vi: 'Có thể đi qua bằng cách bấm chuông',
          zh: '按铃即可通过',
          tl: 'Maaaring dumaan sa pamamagitan ng pagpapatunog ng kampanilya',
          id: 'Bisa lewat dengan membunyikan bel',
          my: 'နှိုးဆင်းမြည်ပြီး ဖြတ်သန်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車は横断歩道を走れない',
          en: 'Bicycles cannot ride on a pedestrian crossing',
          vi: 'Xe đạp không thể đi trên vạch sang đường',
          zh: '自行车不能在人行横道上行驶',
          tl: 'Hindi maaaring magbisikleta sa tawiran ng paa',
          id: 'Sepeda tidak bisa berjalan di zebra cross',
          my: 'စက်ဘီးသည် လမ်းဖြတ်ကူးနေရာတွင် မောင်းမရ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '横断歩道では歩行者が優先です。歩行者が渡ろうとしているときは、自転車も一時停止して先に渡らせなければなりません（道路交通法第38条）。これを怠ると横断歩行者等妨害等として青切符の対象になります。',
      en: 'Pedestrians have priority at crosswalks. When a pedestrian is about to cross, bicycles must also stop and let them cross first (Road Traffic Law Article 38). Failing to do so is a pedestrian obstruction violation, subject to a fine.',
      vi: 'Người đi bộ được ưu tiên tại vạch sang đường. Khi người đi bộ sắp sang đường, xe đạp cũng phải dừng và nhường họ đi trước (Điều 38 Luật Giao thông). Không tuân thủ sẽ bị phạt vì cản trở người đi bộ.',
      zh: '在人行横道，行人优先。当行人准备过马路时，自行车也必须暂时停车让行人先过（道路交通法第38条）。不遵守此规定将被视为妨碍行人等，受到处罚。',
      tl: 'Ang manlalakad ay may priyoridad sa tawiran. Kapag malapit nang tumawid ang manlalakad, ang bisikleta ay dapat ding huminto at hayaan silang tumawid muna (Batas Trapiko Artikulo 38). Ang hindi pagsunod ay maaaring pagmultahin bilang hadlang sa manlalakad.',
      id: 'Pejalan kaki mendapat prioritas di zebra cross. Ketika pejalan kaki akan menyeberang, sepeda juga harus berhenti dan membiarkan mereka menyeberang dulu (UU Lalu Lintas Pasal 38). Tidak mematuhi ini bisa dikenai denda sebagai penghalang pejalan kaki.',
      my: 'လမ်းဖြတ်ကူးနေရာတွင် လမ်းလျောက်သူများ ဦးစားရသည်။ လမ်းလျောက်သူသည် ဖြတ်ကူးမည့် အချိန်တွင် စက်ဘီးသည်လည်း ရပ်ပြီး အရင်ဖြတ်ကူးစေရမည် (လမ်းအသွားအလာဥပဒေ အပိုဒ် ၃၈)။ ဤသို့ မပြုလုပ်ခြင်းသည် လမ်းလျောက်သူ ဟန့်တားမှုဖြစ်ပြီး ဒဏ်ချမှတ်ခြင်းခံရနိုင်သည်။'
    }
  },


  /* ===== Q11: 自転車横断帯 ===== */
  {
    id: 11,
    signImage: 'img/sign_11_bicycle_crossing.png',
    signName: {
      ja: '自転車横断帯', en: 'Bicycle Crossing Zone', vi: 'Vạch Sang Đường Cho Xe Đạp',
      zh: '自行车横穿带', tl: 'Tawiran ng Bisikleta', id: 'Zona Penyeberangan Sepeda', my: 'စက်ဘီးဖြတ်ကူးနယ်'
    },
    question: {
      ja: 'この路面標示（自転車横断帯）を発見しました。正しい対応はどれですか？',
      en: 'You find this road marking (bicycle crossing zone). What is the correct response?',
      vi: 'Bạn tìm thấy vạch kẻ đường này (vùng qua đường xe đạp). Phản ứng đúng đắn là gì?',
      zh: '发现了这个路面标线（自行车横穿带）。正确的应对方式是哪个？',
      tl: 'Nakita mo ang markang ito sa daan (tawiran ng bisikleta). Ano ang tamang gawin?',
      id: 'Kamu menemukan marka jalan ini (zona penyeberangan sepeda). Respons yang benar adalah?',
      my: 'ဤလမ်းမှတ်သားကို (စက်ဘီးဖြတ်ကူးနယ်) တွေ့သည်။ မှန်ကန်သောတုံ့ပြန်မှုမှာ မည်သည်နည်း?'
    },
    choices: [
      {
        text: {
          ja: '自転車横断帯を使って横断する',
          en: 'Use the bicycle crossing zone to cross',
          vi: 'Sử dụng vùng qua đường xe đạp để sang đường',
          zh: '使用自行车横穿带横穿',
          tl: 'Gamitin ang tawiran ng bisikleta para tumawid',
          id: 'Gunakan zona penyeberangan sepeda untuk menyeberang',
          my: 'စက်ဘီးဖြတ်ကူးနယ်ကို အသုံးပြု၍ ဖြတ်ကူးရမည်'
        },
        correct: true
      },
      {
        text: {
          ja: '車道をそのまま横断する',
          en: 'Cross directly on the roadway',
          vi: 'Sang đường trực tiếp trên lòng đường',
          zh: '直接在车道上横穿',
          tl: 'Tumawid nang direkta sa kalsada',
          id: 'Menyeberang langsung di jalur kendaraan',
          my: 'လမ်းမပေါ်တွင် တိုက်ရိုက် ဖြတ်ကူးမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '歩行者用横断歩道を走って渡る',
          en: 'Ride through the pedestrian crossing',
          vi: 'Đạp xe qua vạch dành cho người đi bộ',
          zh: '骑自行车走行人专用横道',
          tl: 'Dumaan sa tawiran para sa manlalakad',
          id: 'Bersepeda melewati zebra cross pejalan kaki',
          my: 'လမ်းလျောက်သူ ဖြတ်ကူးနေရာကို စီးနင်းဖြတ်ကူးမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '横断帯は無視してよい',
          en: 'The crossing zone can be ignored',
          vi: 'Có thể bỏ qua vùng qua đường',
          zh: '可以忽略横穿带',
          tl: 'Maaaring balewalain ang tawiran',
          id: 'Zona penyeberangan bisa diabaikan',
          my: 'ဖြတ်ကူးနယ်ကို လျစ်လျူရှုနိုင်သည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '自転車横断帯は自転車専用の横断部分で、自転車で横断する際は必ずこの横断帯を使わなければなりません。歩行者用の横断歩道を自転車で走って渡ると、歩行者の迷惑になります。横断中も歩行者に注意しましょう。',
      en: 'The bicycle crossing zone is a dedicated crossing for bicycles. When crossing on a bicycle, you must use this zone. Riding through the pedestrian crossing is inconsiderate to pedestrians. Pay attention to pedestrians while crossing.',
      vi: 'Vùng qua đường xe đạp là phần qua đường dành riêng cho xe đạp. Khi sang đường bằng xe đạp, phải sử dụng vùng này. Đạp xe qua vạch dành cho người đi bộ sẽ gây bất tiện cho họ. Hãy chú ý người đi bộ khi sang đường.',
      zh: '自行车横穿带是自行车专用的横穿部分，骑自行车横穿时必须使用这个横穿带。骑自行车走行人专用横道会给行人带来麻烦。横穿时也要注意行人。',
      tl: 'Ang tawiran ng bisikleta ay isang nakatuang tawiran para sa bisikleta. Kapag tumawid sa bisikleta, dapat gamitin ang tawiran na ito. Ang pagbibisikleta sa tawiran ng manlalakad ay abala sa kanila. Mag-ingat sa mga manlalakad habang tumatawid.',
      id: 'Zona penyeberangan sepeda adalah bagian penyeberangan khusus untuk sepeda. Saat menyeberang dengan sepeda, harus menggunakan zona ini. Bersepeda melewati zebra cross pejalan kaki akan mengganggu mereka. Perhatikan pejalan kaki saat menyeberang.',
      my: 'စက်ဘီးဖြတ်ကူးနယ်သည် စက်ဘီးအတွက် သီးသန့်ဖြတ်ကူးနေရာဖြစ်သည်။ စက်ဘီးဖြင့် ဖြတ်ကူးသောအခါ ဤနယ်ကို မဖြစ်မနေ သုံးရမည်။ လမ်းလျောက်သူ ဖြတ်ကူးနေရာကို စီးနင်းဖြတ်ကူးခြင်းသည် လမ်းလျောက်သူများကို အနှောင့်အယှက်ဖြစ်စေသည်။ ဖြတ်ကူးစဉ် လမ်းလျောက်သူများကို သတိပြုပါ။'
    }
  },

  /* ===== Q12: 自転車専用レーン（路面） ===== */
  {
    id: 12,
    signImage: 'img/sign_12_bicycle_lane.png',
    signName: {
      ja: '自転車専用レーン（路面）', en: 'Bicycle Lane (Road Marking)', vi: 'Làn Xe Đạp (Vạch Đường)',
      zh: '自行车专用道（路面标线）', tl: 'Linya ng Bisikleta (Marka sa Daan)', id: 'Jalur Sepeda (Marka Jalan)', my: 'စက်ဘီးလမ်းကြောင်း (လမ်းမှတ်သား)'
    },
    question: {
      ja: '道路に自転車専用レーン（自転車レーン）が設置されています。正しい走り方はどれですか？',
      en: 'A bicycle-only lane is set up on the road. What is the correct way to ride?',
      vi: 'Có làn đường dành riêng cho xe đạp trên đường. Cách đi đúng là gì?',
      zh: '道路上设有自行车专用道（自行车道）。正确的骑行方式是哪个？',
      tl: 'May nakalagay na linya para sa bisikleta sa daan. Ano ang tamang paraan ng pagbibisikleta?',
      id: 'Ada jalur khusus sepeda di jalan. Cara bersepeda yang benar adalah?',
      my: 'လမ်းမပေါ်တွင် စက်ဘီးသီးသန့်လမ်းကြောင်း တပ်ဆင်ထားသည်။ မှန်ကန်သောမောင်းနှင်ပုံမှာ မည်သည်နည်း?'
    },
    choices: [
      {
        text: {
          ja: '自転車レーンを走る',
          en: 'Ride in the bicycle lane',
          vi: 'Đi trong làn xe đạp',
          zh: '在自行车道内行驶',
          tl: 'Magsakay sa linya ng bisikleta',
          id: 'Berjalan di jalur sepeda',
          my: 'စက်ဘီးလမ်းကြောင်းတွင် မောင်းရမည်'
        },
        correct: true
      },
      {
        text: {
          ja: 'どのレーンを走ってもよい',
          en: 'Can ride in any lane',
          vi: 'Có thể đi bất kỳ làn nào',
          zh: '可以在任何车道行驶',
          tl: 'Maaaring magsakay sa anumang linya',
          id: 'Bisa berjalan di jalur mana saja',
          my: 'မည်သည့်လမ်းကြောင်းတွင်မဆို မောင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '歩道を走る',
          en: 'Ride on the sidewalk',
          vi: 'Đi trên vỉa hè',
          zh: '走人行道',
          tl: 'Magsakay sa sidewalk',
          id: 'Berjalan di trotoar',
          my: 'လူသွားလမ်းပေါ်တွင် မောင်းမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '自動車レーンの右側を走る',
          en: 'Ride to the right of the car lane',
          vi: 'Đi bên phải làn xe ô tô',
          zh: '在汽车道右侧行驶',
          tl: 'Magsakay sa kanan ng linya ng sasakyan',
          id: 'Berjalan di sebelah kanan jalur mobil',
          my: 'ကားလမ်းကြောင်း ညာဘက်တွင် မောင်းမည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '自転車専用レーン（自転車道）が設置されている場合、自転車はそのレーンを走らなければなりません（普通自転車専用通行帯）。自動車が走る車線や歩道を走ることは原則禁止です。',
      en: 'When a bicycle-only lane is set up, bicycles must ride in that lane. Riding in car lanes or on sidewalks is generally prohibited.',
      vi: 'Khi có làn đường dành riêng cho xe đạp, xe đạp phải đi trong làn đó. Việc đi trong làn xe ô tô hoặc trên vỉa hè thường bị cấm.',
      zh: '设有自行车专用道时，自行车必须在该道内行驶。在汽车行驶的车道或人行道上行驶原则上是禁止的。',
      tl: 'Kapag may nakalagay na linya para sa bisikleta, ang bisikleta ay dapat magsakay sa linya na iyon. Ang pagbibisikleta sa linya ng sasakyan o sa sidewalk ay karaniwang ipinagbabawal.',
      id: 'Ketika ada jalur khusus sepeda, sepeda harus berjalan di jalur tersebut. Berjalan di jalur mobil atau di trotoar pada prinsipnya dilarang.',
      my: 'စက်ဘီးသီးသန့်လမ်းကြောင်း တပ်ဆင်ထားသောအခါ စက်ဘီးသည် ထိုလမ်းကြောင်းတွင် မောင်းရမည်။ ကားလမ်းကြောင်း သို့မဟုတ် လူသွားလမ်းပေါ်တွင် မောင်းခြင်းသည် မူလမူအရ တားမြစ်ထားသည်။'
    }
  },

  /* ===== Q13: 最高速度（30km/h） ===== */
  {
    id: 13,
    signImage: 'img/sign_13_speed_limit_30.png',
    signName: {
      ja: '最高速度（30km/h）', en: 'Speed Limit (30 km/h)', vi: 'Tốc Độ Tối Đa (30 km/h)',
      zh: '最高速度（30km/h）', tl: 'Limitasyon ng Bilis (30 km/h)', id: 'Batas Kecepatan (30 km/h)', my: 'အမြင့်ဆုံးမြန်နှုန်း (30 km/h)'
    },
    question: {
      ja: 'この標識が示す最高速度は何km/hですか？また、自転車はこの制限を守る必要がありますか？',
      en: 'What is the maximum speed shown by this sign? And must bicycles obey this limit?',
      vi: 'Tốc độ tối đa được biển báo này chỉ ra là bao nhiêu km/h? Xe đạp có phải tuân thủ giới hạn này không?',
      zh: '此标志显示的最高速度是多少km/h？自行车需要遵守这个限制吗？',
      tl: 'Anong maximum na bilis ang ipinapakita ng senyas na ito? At kailangang sundin ba ito ng bisikleta?',
      id: 'Berapa kecepatan maksimum yang ditunjukkan rambu ini? Dan apakah sepeda harus mematuhi batas ini?',
      my: 'ဤဆိုင်းဘုတ်ညွှန်ပြသော အမြင့်ဆုံးမြန်နှုန်းမှာ နာရီ မည်မျှ ကီလိုမီတာ နည်း? စက်ဘီးသည် ဤကန့်သတ်ချက်ကို လိုက်နာရမည်လော?'
    },
    choices: [
      {
        text: {
          ja: '30km/h。自転車も守らなければならない',
          en: '30 km/h. Bicycles must also obey',
          vi: '30 km/h. Xe đạp cũng phải tuân thủ',
          zh: '30km/h。自行车也必须遵守',
          tl: '30 km/h. Dapat ding sundin ng bisikleta',
          id: '30 km/jam. Sepeda juga harus mematuhi',
          my: 'နာရီ ၃၀ ကီလိုမီတာ။ စက်ဘီးသည်လည်း လိုက်နာရမည်'
        },
        correct: true
      },
      {
        text: {
          ja: '30km/h。自転車は関係ない',
          en: '30 km/h. Bicycles are not affected',
          vi: '30 km/h. Xe đạp không bị ảnh hưởng',
          zh: '30km/h。与自行车无关',
          tl: '30 km/h. Hindi apektado ang bisikleta',
          id: '30 km/jam. Sepeda tidak terpengaruh',
          my: 'နာရီ ၃၀ ကီလိုမီတာ။ စက်ဘီးနှင့် မဆိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '50km/h。自転車も守る必要がある',
          en: '50 km/h. Bicycles must obey',
          vi: '50 km/h. Xe đạp phải tuân thủ',
          zh: '50km/h。自行车也需遵守',
          tl: '50 km/h. Dapat sundin ng bisikleta',
          id: '50 km/jam. Sepeda harus mematuhi',
          my: 'နာရီ ၅၀ ကီလိုမီတာ။ စက်ဘီးသည်လည်း လိုက်နာရမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車に速度制限はない',
          en: 'There is no speed limit for bicycles',
          vi: 'Xe đạp không có giới hạn tốc độ',
          zh: '自行车没有速度限制',
          tl: 'Walang limitasyon sa bilis para sa bisikleta',
          id: 'Tidak ada batas kecepatan untuk sepeda',
          my: 'စက်ဘီးအတွက် အမြန်နှုန်းကန့်သတ်ချက် မရှိ'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「最高速度」の規制標識は、自転車（軽車両）にも適用されます。この標識がある道路では、自転車も時速30km/hを超えて走ることはできません。自転車専用の速度制限標識が設置されることもあります。',
      en: '"Speed limit" regulatory signs also apply to bicycles (light vehicles). On a road with this sign, bicycles cannot exceed 30 km/h. Speed limit signs specific to bicycles may also be posted.',
      vi: 'Biển báo quy định "Tốc độ tối đa" cũng áp dụng cho xe đạp (phương tiện nhẹ). Trên đường có biển báo này, xe đạp không thể vượt quá 30 km/h. Biển báo giới hạn tốc độ riêng cho xe đạp cũng có thể được đặt.',
      zh: '"最高速度"规制标志也适用于自行车（轻型车辆）。在有此标志的道路上，自行车也不能超过时速30公里。有时也会设置专门针对自行车的速度限制标志。',
      tl: 'Ang mga regulatory sign na "Limitasyon ng Bilis" ay naaangkop din sa bisikleta (magaang na sasakyan). Sa daan na may senyas na ito, ang bisikleta ay hindi maaaring lumampas sa 30 km/h. Maaari ding may mga senyas na limitasyon ng bilis na espesipiko para sa bisikleta.',
      id: 'Rambu regulasi "Batas Kecepatan" juga berlaku untuk sepeda (kendaraan ringan). Di jalan yang ada rambu ini, sepeda tidak bisa melampaui 30 km/jam. Rambu batas kecepatan khusus untuk sepeda juga bisa dipasang.',
      my: '"အမြင့်ဆုံးမြန်နှုန်း" ကန့်သတ်ဆိုင်းဘုတ်သည် စက်ဘီး (ပေါ့ပါးယာဉ်) အတွက်လည်း သက်ဆိုင်သည်။ ဤဆိုင်းဘုတ်ရှိသော လမ်းတွင် စက်ဘီးသည် နာရီ ၃၀ ကီလိုမီတာ ကျော်မောင်းမရ။ စက်ဘီးအတွက် သီးသန့် အမြန်နှုန်းကန့်သတ်ဆိုင်းဘုတ်များ တပ်ဆင်ထားနိုင်သည်။'
    }
  },

  /* ===== Q14: 歩行者・自転車専用道 ===== */
  {
    id: 14,
    signImage: 'img/sign_14_pedestrian_bicycle.png',
    signName: {
      ja: '歩行者・自転車専用道', en: 'Pedestrian and Bicycle Path', vi: 'Đường Dành Riêng Cho Người Đi Bộ và Xe Đạp',
      zh: '行人·自行车专用道', tl: 'Landas para sa Manlalakad at Bisikleta', id: 'Jalur Pejalan Kaki dan Sepeda', my: 'လမ်းလျောက်သူနှင့် စက်ဘီးသီးသန့်လမ်း'
    },
    question: {
      ja: 'このマーク（歩行者・自転車専用道）のある道路では、自転車はどう走れますか？',
      en: 'On a road with this marking (pedestrian and bicycle path), how can a bicycle ride?',
      vi: 'Trên đường có dấu hiệu này (đường dành cho người đi bộ và xe đạp), xe đạp có thể đi như thế nào?',
      zh: '在有此标记（行人·自行车专用道）的道路上，自行车可以怎么骑？',
      tl: 'Sa daan na may markang ito (landas para sa manlalakad at bisikleta), paano maaaring magbisikleta?',
      id: 'Di jalan yang ada tanda ini (jalur pejalan kaki dan sepeda), bagaimana sepeda bisa berjalan?',
      my: 'ဤသင်္ကေတ (လမ်းလျောက်သူနှင့် စက်ဘီးသီးသန့်လမ်း) ရှိသောလမ်းတွင် စက်ဘီးသည် မည်သို့မောင်းနိုင်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '歩行者優先で徐行して走れる',
          en: 'Can ride slowly, giving priority to pedestrians',
          vi: 'Có thể đi chậm, ưu tiên người đi bộ',
          zh: '可以行人优先慢行',
          tl: 'Maaaring magsakay nang dahan-dahan, inuuna ang manlalakad',
          id: 'Bisa berjalan pelan, mendahulukan pejalan kaki',
          my: 'လမ်းလျောက်သူ ဦးစားပေးကာ နှေးနှေးမောင်းနိုင်'
        },
        correct: true
      },
      {
        text: {
          ja: '自転車は走れない',
          en: 'Bicycles cannot ride here',
          vi: 'Xe đạp không thể đi ở đây',
          zh: '自行车不能行驶',
          tl: 'Hindi maaaring magbisikleta dito',
          id: 'Sepeda tidak bisa berjalan di sini',
          my: 'စက်ဘီး မောင်း၍ မရ'
        },
        correct: false
      },
      {
        text: {
          ja: '自動車も走れる',
          en: 'Cars can also ride here',
          vi: 'Ô tô cũng có thể đi ở đây',
          zh: '汽车也可以行驶',
          tl: 'Maaari ding dumaan ang mga kotse',
          id: 'Mobil juga bisa melewati jalan ini',
          my: 'ကားများလည်း မောင်းနိုင်သည်'
        },
        correct: false
      },
      {
        text: {
          ja: '速度制限なく走れる',
          en: 'Can ride without any speed limit',
          vi: 'Có thể đi mà không có giới hạn tốc độ',
          zh: '可以不受速度限制行驶',
          tl: 'Maaaring magsakay nang walang limitasyon sa bilis',
          id: 'Bisa berjalan tanpa batas kecepatan',
          my: 'အမြန်နှုန်းကန့်သတ်ချက် မရှိဘဲ မောင်းနိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「歩行者・自転車専用道路」の標識は、歩行者と自転車のみが通行できることを示します。自動車は通行できません。自転車は歩行者優先で徐行し、歩行者の妨げになる場合は一時停止しなければなりません。',
      en: 'The "Pedestrian and Bicycle Path" sign indicates that only pedestrians and bicycles may use the road. Cars cannot pass. Bicycles must give priority to pedestrians, go slowly, and stop temporarily if obstructing pedestrians.',
      vi: 'Biển "Đường dành riêng cho người đi bộ và xe đạp" cho biết chỉ người đi bộ và xe đạp mới được đi. Ô tô không được phép. Xe đạp phải ưu tiên người đi bộ, đi chậm và dừng lại nếu cản trở người đi bộ.',
      zh: '"行人·自行车专用道"标志表示只有行人和自行车可以通行。汽车不能通行。自行车必须行人优先慢行，如果妨碍行人还需临时停车。',
      tl: 'Ang senyas na "Landas para sa Manlalakad at Bisikleta" ay nagpapahiwatig na ang manlalakad at bisikleta lamang ang maaaring gumamit ng daan. Hindi maaaring dumaan ang mga kotse. Ang bisikleta ay dapat unahin ang manlalakad, bumagal, at pansamantalang huminto kung hadlang sa manlalakad.',
      id: 'Rambu "Jalur Pejalan Kaki dan Sepeda" menunjukkan bahwa hanya pejalan kaki dan sepeda yang boleh melewati jalan. Mobil tidak boleh. Sepeda harus mendahulukan pejalan kaki, berjalan pelan, dan berhenti sementara jika menghalangi pejalan kaki.',
      my: '"လမ်းလျောက်သူနှင့် စက်ဘီးသီးသန့်လမ်း" ဆိုင်းဘုတ်သည် လမ်းလျောက်သူများနှင့် စက်ဘီးများသာ ဖြတ်သန်းနိုင်ကြောင်း ညွှန်ပြသည်။ ကားများ မဖြတ်သန်းရ။ စက်ဘီးသည် လမ်းလျောက်သူ ဦးစားပေးကာ နှေးနှေးမောင်းပြီး လမ်းလျောက်သူကို နှောင့်ယှက်ပါက တစ်ချိန်ရပ်ရမည်။'
    }
  },

  /* ===== Q15: 自動車専用道路 ===== */
  {
    id: 15,
    signImage: 'img/sign_15_motorway.png',
    signName: {
      ja: '自動車専用道路', en: 'Motorway (Vehicles Only)', vi: 'Đường Dành Riêng Cho Xe Cơ Giới',
      zh: '机动车专用道路', tl: 'Ekslusibong Kalsada para sa Sasakyan', id: 'Jalan Khusus Kendaraan Bermotor', my: 'မော်တော်ယာဉ်သီးသန့်လမ်း'
    },
    question: {
      ja: '原付・自動車が通れる「自動車専用道路」の標識を見ました。自転車はどうすべきですか？',
      en: 'You see a "Motorway" sign that allows motorized vehicles. What should a bicycle do?',
      vi: 'Bạn thấy biển báo "Đường dành riêng cho xe cơ giới" cho phép xe máy và ô tô. Xe đạp nên làm gì?',
      zh: '看到了允许摩托车、汽车通行的"机动车专用道路"标志。自行车应怎么做？',
      tl: 'Nakakita ka ng senyas na "Ekslusibong Kalsada para sa Sasakyan" na pinapayagan ang mga motorized na sasakyan. Ano ang dapat gawin ng bisikleta?',
      id: 'Kamu melihat rambu "Jalan Khusus Kendaraan Bermotor" yang mengizinkan motor dan mobil. Apa yang harus dilakukan sepeda?',
      my: 'မော်တော်ဆိုင်ကယ်နှင့် ကားများ ဖြတ်သန်းနိုင်သော "မော်တော်ယာဉ်သီးသန့်လမ်း" ဆိုင်းဘုတ်ကို တွေ့သည်။ စက်ဘီးသည် မည်သို့ပြုသင့်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '自転車は走れない',
          en: 'Bicycles cannot ride here',
          vi: 'Xe đạp không thể đi ở đây',
          zh: '自行车不能行驶',
          tl: 'Hindi maaaring magbisikleta dito',
          id: 'Sepeda tidak bisa berjalan di sini',
          my: 'စက်ဘီး မောင်း၍ မရ'
        },
        correct: true
      },
      {
        text: {
          ja: '自転車は路肩を走れる',
          en: 'Bicycles can ride on the shoulder',
          vi: 'Xe đạp có thể đi ở lề đường',
          zh: '自行车可以走路肩',
          tl: 'Maaaring magsakay ang bisikleta sa gilid ng daan',
          id: 'Sepeda bisa berjalan di bahu jalan',
          my: 'စက်ဘီးသည် လမ်းစပ်တွင် မောင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '原付と同様に走れる',
          en: 'Can ride the same as a moped',
          vi: 'Có thể đi như xe máy',
          zh: '可以像摩托车一样行驶',
          tl: 'Maaaring magsakay tulad ng motorsiklo',
          id: 'Bisa berjalan sama seperti motor',
          my: 'မော်တော်ဆိုင်ကယ်ကဲ့သို့ မောင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '夜間のみ走れる',
          en: 'Can only ride at night',
          vi: 'Chỉ có thể đi vào ban đêm',
          zh: '只能在夜间行驶',
          tl: 'Maaari lang magsakay sa gabi',
          id: 'Hanya bisa berjalan di malam hari',
          my: 'ညဘက်သာ မောင်းနိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「自動車専用道路」の標識がある道路は、自転車（軽車両）の通行が禁止されています。路肩を走ることも違反です。ただし「自転車除く」の補助標識がある場合は例外です。高速道路などへの誤進入に注意してください。',
      en: 'On roads marked "Motorway," bicycles (light vehicles) are prohibited. Riding on the shoulder is also a violation. However, if a supplementary sign says "excluding bicycles," it is an exception. Be careful not to enter motorways by mistake.',
      vi: 'Trên đường có biển "Đường dành riêng cho xe cơ giới," xe đạp (phương tiện nhẹ) bị cấm. Đi ở lề đường cũng là vi phạm. Tuy nhiên nếu có biển phụ "trừ xe đạp" thì là ngoại lệ. Cẩn thận không vào đường cao tốc nhầm.',
      zh: '在有"机动车专用道路"标志的道路上，禁止自行车（轻型车辆）通行。走路肩也是违规行为。但如果有"自行车除外"的辅助标志则是例外。请注意不要误入高速公路等。',
      tl: 'Sa mga daan na may markang "Ekslusibong Kalsada para sa Sasakyan," ang bisikleta (magaang na sasakyan) ay ipinagbabawal. Ang pagbibisikleta sa gilid ng daan ay paglabag din. Ngunit kung may karagdagang senyas na "hindi kasama ang bisikleta," ito ay pagbubukod. Mag-ingat na huwag makapasok sa expressway nang hindi sinasadya.',
      id: 'Di jalan yang ada rambu "Jalan Khusus Kendaraan Bermotor," sepeda (kendaraan ringan) dilarang. Berjalan di bahu jalan juga melanggar. Namun jika ada rambu tambahan "kecuali sepeda," itu pengecualian. Hati-hati jangan sampai masuk jalan tol secara tidak sengaja.',
      my: '"မော်တော်ယာဉ်သီးသန့်လမ်း" ဆိုင်းဘုတ်ရှိသော လမ်းများတွင် စက်ဘီး (ပေါ့ပါးယာဉ်) ဖြတ်သန်းခြင်းကို တားမြစ်သည်။ လမ်းစပ်တွင် မောင်းခြင်းလည်း ကျိုးဖောက်မှုဖြစ်သည်။ သို့သော် "စက်ဘီးမပါ" ဖြည့်စွက်ဆိုင်းဘုတ်ရှိလျှင် ခြွင်းချက်ဖြစ်သည်။ အဝေးပြေးလမ်းများသို့ မှားဝင်မိမည်ကို သတိပြုပါ။'
    }
  },

  /* ===== Q16: 指定方向外進行禁止（左折のみ） ===== */
  {
    id: 16,
    signImage: 'img/sign_16_turn_left_only.png',
    signName: {
      ja: '指定方向外進行禁止（左折のみ）', en: 'Turn Left Only', vi: 'Chỉ Được Rẽ Trái',
      zh: '禁止直行（仅允许左转）', tl: 'Kaliwa Lang', id: 'Belok Kiri Saja', my: 'ဘယ်ဖက်ကွေ့ချည်သာ'
    },
    question: {
      ja: 'この標識（指定方向外進行禁止）がある交差点で、自転車はどう進めますか？',
      en: 'At an intersection with this sign (no entry except in indicated direction), how can a bicycle proceed?',
      vi: 'Tại ngã tư có biển báo này (cấm đi ngoài hướng được chỉ định), xe đạp có thể đi như thế nào?',
      zh: '在有此标志（指定方向外禁止行进）的交叉路口，自行车应如何行进？',
      tl: 'Sa intersection na may senyas na ito (bawal pumunta sa ibang direksyon), paano maaaring sumulong ang bisikleta?',
      id: 'Di persimpangan yang ada rambu ini (dilarang melaju ke luar arah yang ditentukan), bagaimana sepeda bisa melaju?',
      my: 'ဤဆိုင်းဘုတ် (သတ်မှတ်ဦးတည်ချက်မှ လွဲ၍ မောင်းမရ) ရှိသော လမ်းဆုံတွင် စက်ဘီးသည် မည်သို့မောင်းနိုင်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '左折しかできない',
          en: 'Can only turn left',
          vi: 'Chỉ có thể rẽ trái',
          zh: '只能左转',
          tl: 'Kaliwa lang ang maaaring gawin',
          id: 'Hanya bisa belok kiri',
          my: 'ဘယ်ဖက်ကွေ့ချည်သာ ဖြစ်နိုင်'
        },
        correct: true
      },
      {
        text: {
          ja: 'どの方向にも進める',
          en: 'Can proceed in any direction',
          vi: 'Có thể đi theo bất kỳ hướng nào',
          zh: '可以朝任何方向行进',
          tl: 'Maaaring pumunta sa anumang direksyon',
          id: 'Bisa melaju ke arah mana saja',
          my: 'မည်သည့် ဦးတည်ချက်မဆို မောင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '直進のみできる',
          en: 'Can only go straight',
          vi: 'Chỉ có thể đi thẳng',
          zh: '只能直行',
          tl: 'Diretso lang ang maaaring gawin',
          id: 'Hanya bisa lurus',
          my: 'တည့်တည့်သွားချည်သာ ဖြစ်နိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車は標識に従わなくてよい',
          en: 'Bicycles do not need to follow the sign',
          vi: 'Xe đạp không cần tuân theo biển báo',
          zh: '自行车不必遵守该标志',
          tl: 'Hindi kailangang sundin ng bisikleta ang senyas',
          id: 'Sepeda tidak perlu mengikuti rambu',
          my: 'စက်ဘီးသည် ဆိုင်းဘုတ်ကို လိုက်နာရန် မလိုအပ်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「指定方向外進行禁止」の標識は、矢印で示された方向以外への進行を禁止します。自転車も原則として従わなければなりません。ただし補助標識に「自転車を除く」とある場合は、自転車には適用されません。',
      en: 'The "No Entry Except in Indicated Direction" sign prohibits proceeding in any direction other than the arrows shown. Bicycles must generally follow this sign. However, if the supplementary sign says "excluding bicycles," it does not apply to bicycles.',
      vi: 'Biển "Cấm đi ngoài hướng được chỉ định" cấm đi theo bất kỳ hướng nào khác ngoài hướng mũi tên. Xe đạp về nguyên tắc phải tuân thủ. Tuy nhiên nếu biển phụ ghi "trừ xe đạp" thì không áp dụng cho xe đạp.',
      zh: '"指定方向外禁止行进"标志禁止向箭头以外的方向行进。自行车原则上也必须遵守。但如果辅助标志上有"自行车除外"，则不适用于自行车。',
      tl: 'Ang senyas na "Bawal Pumunta sa Ibang Direksyon" ay nagbabawal na pumunta sa anumang direksyon maliban sa ipinapakita ng arrow. Ang bisikleta ay dapat ding sumunod sa pangkalahatan. Ngunit kung ang karagdagang senyas ay nagsasabing "hindi kasama ang bisikleta," hindi ito naaangkop sa bisikleta.',
      id: 'Rambu "Dilarang Melaju ke Luar Arah yang Ditentukan" melarang melaju ke arah selain yang ditunjukkan panah. Sepeda pada prinsipnya juga harus mematuhi. Namun jika rambu tambahan menyatakan "kecuali sepeda," tidak berlaku untuk sepeda.',
      my: '"သတ်မှတ်ဦးတည်ချက်မှ လွဲ၍ မောင်းမရ" ဆိုင်းဘုတ်သည် မြားညွှန်သော ဦးတည်ချက်မှ လွဲ၍ မောင်းခြင်းကို တားမြစ်သည်။ စက်ဘီးသည်လည်း မူလမူအရ လိုက်နာရမည်။ သို့သော် ဖြည့်စွက်ဆိုင်းဘုတ်တွင် "စက်ဘီးမပါ" ဟုပါလျှင် စက်ဘီးတွင် မသက်ဆိုင်ပါ။'
    }
  },

  /* ===== Q17: 中央線（白破線） ===== */
  {
    id: 17,
    signImage: 'img/sign_17_center_line.png',
    signName: {
      ja: '中央線（白破線）', en: 'Center Line (White Dashed)', vi: 'Đường Kẻ Giữa (Nét Đứt Trắng)',
      zh: '中心线（白色虚线）', tl: 'Gitnang Linya (Puting Tuldok-tuldok)', id: 'Garis Tengah (Putus-putus Putih)', my: 'အလယ်မျဉ်း (အဖြူကျိုးကျိုး)'
    },
    question: {
      ja: 'この路面標示（中央線・白の破線）は何を意味しますか？',
      en: 'What does this road marking (center line, white dashed line) mean?',
      vi: 'Vạch kẻ đường này (đường kẻ giữa, nét đứt trắng) có nghĩa là gì?',
      zh: '这个路面标线（中心线·白色虚线）是什么意思？',
      tl: 'Ano ang ibig sabihin ng markang ito sa daan (gitnang linya, puting tuldok-tuldok)?',
      id: 'Apa arti marka jalan ini (garis tengah, garis putus-putus putih)?',
      my: 'ဤလမ်းမှတ်သား (အလယ်မျဉ်း၊ အဖြူကျိုးကျိုး) ၏ အဓိပ္ပာယ်မှာ မည်သည်နည်း?'
    },
    choices: [
      {
        text: {
          ja: '道路の中央を示し、反対方向への進入を区分する',
          en: 'Indicates the center of the road, dividing opposite directions',
          vi: 'Chỉ ra giữa đường, phân chia hai chiều ngược nhau',
          zh: '表示道路中央，区分对向行驶',
          tl: 'Nagpapakita ng gitna ng daan, hinahati ang magkasalungat na direksyon',
          id: 'Menunjukkan tengah jalan, memisahkan arah berlawanan',
          my: 'လမ်းအလယ်ကို ညွှန်ပြပြီး ဆန့်ကျင်ဘက် ဦးတည်ချက်များကို ခွဲခြားသည်'
        },
        correct: true
      },
      {
        text: {
          ja: '駐車禁止を示す',
          en: 'Indicates no parking',
          vi: 'Chỉ ra cấm đỗ xe',
          zh: '表示禁止停车',
          tl: 'Nagpapakita ng bawal mag-park',
          id: 'Menunjukkan dilarang parkir',
          my: 'ယာဉ်ရပ်ခြင်းတားမြစ်ကြောင်း ညွှန်ပြသည်'
        },
        correct: false
      },
      {
        text: {
          ja: '自転車専用レーンを示す',
          en: 'Indicates a bicycle-only lane',
          vi: 'Chỉ ra làn dành riêng cho xe đạp',
          zh: '表示自行车专用道',
          tl: 'Nagpapakita ng linya para sa bisikleta lamang',
          id: 'Menunjukkan jalur khusus sepeda',
          my: 'စက်ဘီးသာ လမ်းကြောင်းဟု ညွှန်ပြသည်'
        },
        correct: false
      },
      {
        text: {
          ja: '追い越し禁止を示す',
          en: 'Indicates no overtaking',
          vi: 'Chỉ ra cấm vượt',
          zh: '表示禁止超车',
          tl: 'Nagpapakita ng bawal mag-overtake',
          id: 'Menunjukkan dilarang mendahului',
          my: 'ကျော်တက်ခြင်းတားမြစ်ကြောင်း ညွှန်ပြသည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '白の破線による中央線は、道路の中央を示し上下線を区分する路面標示です。自転車は左側を通行しなければなりません。白の実線（追い越しのためのはみ出し禁止）や黄色の実線（はみ出し禁止）とは意味が異なります。',
      en: 'A white dashed center line is a road marking that shows the center of the road and divides traffic in opposite directions. Bicycles must ride on the left side. It has a different meaning from a solid white line (no overtaking by crossing) or a solid yellow line (no crossing).',
      vi: 'Đường kẻ giữa nét đứt trắng là vạch kẻ đường chỉ ra giữa đường và phân chia giao thông hai chiều. Xe đạp phải đi bên trái. Nó có ý nghĩa khác với đường kẻ liền trắng (cấm vượt bằng cách vượt qua) hoặc đường kẻ liền vàng (cấm vượt qua).',
      zh: '白色虚线中心线是表示道路中央并区分上下行的路面标线。自行车必须靠左行驶。它与白色实线（禁止为超车而压线）或黄色实线（禁止压线）的含义不同。',
      tl: 'Ang puting tuldok-tuldok na gitnang linya ay isang marka sa daan na nagpapakita ng gitna ng daan at hinahati ang trapiko sa magkasalungat na direksyon. Ang bisikleta ay dapat magsakay sa kaliwang bahagi. Iba ang kahulugan nito mula sa patuloy na puting linya (bawal mag-overtake sa pamamagitan ng pagtawid) o patuloy na dilaw na linya (bawal tumawid).',
      id: 'Garis tengah putus-putus putih adalah marka jalan yang menunjukkan tengah jalan dan memisahkan lalu lintas dua arah. Sepeda harus berjalan di sisi kiri. Artinya berbeda dengan garis putih penuh (dilarang mendahului dengan melewati) atau garis kuning penuh (dilarang melewati).',
      my: 'အဖြူကျိုးကျိုး အလယ်မျဉ်းသည် လမ်းအလယ်ကို ညွှန်ပြပြီး အပြန်အလှန် ဦးတည်ချက် ယာဉ်ကြောများကို ခွဲခြားသော လမ်းမှတ်သားဖြစ်သည်။ စက်ဘီးသည် ဘယ်ဘက်တွင် မောင်းရမည်။ အဖြူသားမျဉ်း (ကျော်တက်ရန် ကျော်ဖြတ်ခြင်းတားမြစ်) သို့မဟုတ် အဝါသားမျဉ်း (ကျော်ဖြတ်ခြင်းတားမြစ်) နှင့် အဓိပ္ပာယ် ကွာခြားသည်။'
    }
  },

  /* ===== Q18: 転回禁止 ===== */
  {
    id: 18,
    signImage: 'img/sign_18_no_u_turn.png',
    signName: {
      ja: '転回禁止', en: 'No U-Turn', vi: 'Cấm Quay Đầu',
      zh: '禁止掉头', tl: 'Bawal Bumalik', id: 'Dilarang Putar Balik', my: 'U-ကွေ့တားမြစ်'
    },
    question: {
      ja: 'この標識（転回禁止）がある道路で、自転車はUターン（転回）できますか？',
      en: 'On a road with this sign (no U-turn), can a bicycle make a U-turn?',
      vi: 'Trên đường có biển báo này (cấm quay đầu), xe đạp có thể quay đầu không?',
      zh: '在有此标志（禁止掉头）的道路上，自行车可以掉头吗？',
      tl: 'Sa daan na may senyas na ito (bawal bumalik), maaari bang mag-U-turn ang bisikleta?',
      id: 'Di jalan yang ada rambu ini (dilarang putar balik), apakah sepeda bisa putar balik?',
      my: 'ဤဆိုင်းဘုတ် (U-ကွေ့တားမြစ်) ရှိသော လမ်းတွင် စက်ဘီးသည် U-ကွေ့ (လှည့်ကွေ့) နိုင်သလော?'
    },
    choices: [
      {
        text: {
          ja: 'できない（自転車も禁止）',
          en: 'Cannot (bicycles also prohibited)',
          vi: 'Không thể (xe đạp cũng bị cấm)',
          zh: '不可以（自行车也被禁止）',
          tl: 'Hindi maaari (ipinagbabawal din ang bisikleta)',
          id: 'Tidak bisa (sepeda juga dilarang)',
          my: 'မရ (စက်ဘီးလည်း တားမြစ်)'
        },
        correct: true
      },
      {
        text: {
          ja: 'できる（自転車は除外）',
          en: 'Can (bicycles are excluded)',
          vi: 'Có thể (xe đạp được miễn)',
          zh: '可以（自行车除外）',
          tl: 'Maaari (hindi kasama ang bisikleta)',
          id: 'Bisa (sepeda dikecualikan)',
          my: 'ရ (စက်ဘီး ခြွင်းချက်ဖြစ်)'
        },
        correct: false
      },
      {
        text: {
          ja: '交差点以外ならできる',
          en: 'Can if not at an intersection',
          vi: 'Có thể nếu không phải ở ngã tư',
          zh: '不在交叉路口的话可以',
          tl: 'Maaari kung hindi sa intersection',
          id: 'Bisa jika bukan di persimpangan',
          my: 'လမ်းဆုံ မဟုတ်သော နေရာတွင် ဖြစ်နိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '安全なら転回できる',
          en: 'Can if safe to do so',
          vi: 'Có thể nếu an toàn',
          zh: '安全的话可以掉头',
          tl: 'Maaari kung ligtas',
          id: 'Bisa jika aman',
          my: 'လုံခြုံလျှင် လှည့်ကွေ့နိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「転回禁止」の標識がある場所では、自転車も含むすべての車両がUターン（転回）を禁止されています。「自転車を除く」の補助標識がない限り、自転車も従う必要があります。違反すると青切符の対象になります。',
      en: 'Where a "No U-Turn" sign is posted, all vehicles including bicycles are prohibited from making U-turns. Unless a supplementary sign says "excluding bicycles," bicycles must also comply. Violations are subject to a fine.',
      vi: 'Nơi có biển "Cấm quay đầu," tất cả các phương tiện kể cả xe đạp đều bị cấm quay đầu. Trừ khi có biển phụ "trừ xe đạp," xe đạp cũng phải tuân thủ. Vi phạm sẽ bị phạt.',
      zh: '在有"禁止掉头"标志的地方，包括自行车在内的所有车辆都被禁止掉头。除非辅助标志上有"自行车除外"，否则自行车也必须遵守。违反将受到处罚。',
      tl: 'Sa lugar na may senyas na "Bawal Bumalik," lahat ng sasakyan kabilang ang bisikleta ay ipinagbabawal na mag-U-turn. Maliban kung may karagdagang senyas na "hindi kasama ang bisikleta," ang bisikleta ay dapat ding sumunod. Ang paglabag ay maaaring pagmultahin.',
      id: 'Di tempat yang ada rambu "Dilarang Putar Balik," semua kendaraan termasuk sepeda dilarang putar balik. Kecuali ada rambu tambahan "kecuali sepeda," sepeda juga harus mematuhi. Pelanggaran bisa dikenai denda.',
      my: '"U-ကွေ့တားမြစ်" ဆိုင်းဘုတ်ရှိသောနေရာတွင် စက်ဘီးအပါအဝင် ယာဉ်အားလုံး U-ကွေ့ (လှည့်ကွေ့) ပြုလုပ်ခြင်းကို တားမြစ်သည်။ "စက်ဘီးမပါ" ဖြည့်စွက်ဆိုင်းဘုတ် မရှိသော်ငြားလည်း စက်ဘီးသည်လည်း လိုက်နာရမည်။ ကျိုးဖောက်ပါက ဒဏ်ချမှတ်ခြင်းခံရနိုင်သည်။'
    }
  },

  /* ===== Q19: 安全地帯（路面標示） ===== */
  {
    id: 19,
    signImage: 'img/sign_19_safety_zone.png',
    signName: {
      ja: '安全地帯（路面標示）', en: 'Safety Zone (Road Marking)', vi: 'Vùng An Toàn (Vạch Đường)',
      zh: '安全岛（路面标线）', tl: 'Ligtas na Lugar (Marka sa Daan)', id: 'Zona Aman (Marka Jalan)', my: 'လုံခြုံသောနေရာ (လမ်းမှတ်သား)'
    },
    question: {
      ja: 'この路面標示（安全地帯）のそばを自転車で走るとき、正しい行動はどれですか？',
      en: 'When riding a bicycle past this road marking (safety zone), what is the correct action?',
      vi: 'Khi đạp xe qua vạch kẻ đường này (vùng an toàn), hành động đúng đắn là gì?',
      zh: '骑自行车经过这个路面标线（安全岛）时，正确的行为是哪个？',
      tl: 'Kapag nagbibisikleta sa tabi ng markang ito sa daan (ligtas na lugar), ano ang tamang gawin?',
      id: 'Saat bersepeda melewati marka jalan ini (zona aman), tindakan yang benar adalah?',
      my: 'ဤလမ်းမှတ်သား (လုံခြုံသောနေရာ) ဘေးတွင် စက်ဘီးမောင်းသောအခါ မှန်ကန်သောအပြုအမူမှာ မည်သည်နည်း?'
    },
    choices: [
      {
        text: {
          ja: '安全地帯に入らず、そばを徐行して通過する',
          en: 'Do not enter the safety zone; pass slowly alongside it',
          vi: 'Không vào vùng an toàn; đi chậm qua bên cạnh',
          zh: '不进入安全岛，在旁边慢行通过',
          tl: 'Huwag pumasok sa ligtas na lugar; dumaan nang dahan-dahan sa tabi nito',
          id: 'Jangan masuk ke zona aman; lewat pelan-pelan di sampingnya',
          my: 'လုံခြုံသောနေရာအတွင်း မဝင်ဘဲ ဘေးတွင် နှေးနှေးဖြတ်သန်းမည်'
        },
        correct: true
      },
      {
        text: {
          ja: '安全地帯の上を走り抜けてよい',
          en: 'Can ride straight through the safety zone',
          vi: 'Có thể đạp xe xuyên qua vùng an toàn',
          zh: '可以直接骑过安全岛',
          tl: 'Maaaring dumaan nang direkta sa ligtas na lugar',
          id: 'Bisa langsung melewati zona aman',
          my: 'လုံခြုံသောနေရာပေါ်ကို ဖြတ်မောင်းနိုင်'
        },
        correct: false
      },
      {
        text: {
          ja: '安全地帯の右側を走らなければならない',
          en: 'Must ride to the right of the safety zone',
          vi: 'Phải đi bên phải của vùng an toàn',
          zh: '必须在安全岛右侧行驶',
          tl: 'Dapat magsakay sa kanan ng ligtas na lugar',
          id: 'Harus berjalan di sebelah kanan zona aman',
          my: 'လုံခြုံသောနေရာ ညာဘက်တွင် မောင်းရမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '安全地帯とは関係なく自由に走れる',
          en: 'The safety zone is unrelated and you can ride freely',
          vi: 'Vùng an toàn không liên quan và bạn có thể đi tự do',
          zh: '与安全岛无关，可以自由行驶',
          tl: 'Walang kaugnayan ang ligtas na lugar at maaaring magsakay nang malaya',
          id: 'Zona aman tidak relevan dan kamu bisa berjalan bebas',
          my: 'လုံခြုံသောနေရာနှင့် မဆိုင်သောကြောင့် လွတ်လပ်စွာ မောင်းနိုင်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「安全地帯」はバス停などで歩行者が待機するための場所を示す路面標示です。自転車を含む車両は安全地帯に進入することを禁止されています。そばを通過する際は歩行者に注意しながら徐行して通過しなければなりません。',
      en: 'A "safety zone" is a road marking indicating an area where pedestrians wait, such as at bus stops. Vehicles including bicycles are prohibited from entering the safety zone. When passing alongside it, you must go slowly while watching out for pedestrians.',
      vi: '"Vùng an toàn" là vạch kẻ đường chỉ ra khu vực người đi bộ chờ đợi, chẳng hạn như ở trạm xe buýt. Các phương tiện kể cả xe đạp bị cấm vào vùng an toàn. Khi đi qua bên cạnh, phải đi chậm trong khi chú ý người đi bộ.',
      zh: '"安全岛"是表示行人等候区域（如公交站）的路面标线。包括自行车在内的车辆禁止进入安全岛。经过旁边时，必须在注意行人的同时慢行通过。',
      tl: 'Ang "ligtas na lugar" ay isang marka sa daan na nagpapakita ng lugar kung saan naghihintay ang manlalakad, tulad ng sa hintayan ng bus. Ang mga sasakyan kabilang ang bisikleta ay ipinagbabawal na pumasok sa ligtas na lugar. Kapag dumadaan sa tabi nito, dapat magbilis nang dahan-dahan habang nagbabantay sa mga manlalakad.',
      id: '"Zona aman" adalah marka jalan yang menunjukkan area tempat pejalan kaki menunggu, seperti di halte bus. Kendaraan termasuk sepeda dilarang memasuki zona aman. Saat melewati sampingnya, harus berjalan pelan sambil memperhatikan pejalan kaki.',
      my: '"လုံခြုံသောနေရာ" သည် ဘတ်စ်ကားမှတ်တိုင်ကဲ့သို့ နေရာများတွင် လမ်းလျောက်သူများ စောင့်ဆိုင်းသည့်နေရာကို ညွှန်ပြသော လမ်းမှတ်သားဖြစ်သည်။ စက်ဘီးအပါအဝင် ယာဉ်များသည် လုံခြုံသောနေရာအတွင်း ဝင်ရောက်ခြင်းကို တားမြစ်သည်။ ဘေးဖြတ်သန်းသောအခါ လမ်းလျောက်သူများကို သတိပြုကာ နှေးနှေးဖြတ်သန်းရမည်။'
    }
  },

  /* ===== Q20: 優先道路 ===== */
  {
    id: 20,
    signImage: 'img/sign_20_priority_road.png',
    signName: {
      ja: '優先道路', en: 'Priority Road', vi: 'Đường Ưu Tiên',
      zh: '优先道路', tl: 'Prayoridad na Kalsada', id: 'Jalan Prioritas', my: 'ဦးစားပေးလမ်း'
    },
    question: {
      ja: 'この標識（優先道路）がある道路を走行中です。交差点ではどのように通行できますか？',
      en: 'You are riding on a road with this sign (priority road). How can you proceed at an intersection?',
      vi: 'Bạn đang đi trên con đường có biển báo này (đường ưu tiên). Bạn có thể đi như thế nào tại ngã tư?',
      zh: '您正在有此标志（优先道路）的道路上行驶。在交叉路口可以怎么通行？',
      tl: 'Nagbibisikleta ka sa daan na may senyas na ito (prayoridad na kalsada). Paano ka makakarating sa intersection?',
      id: 'Kamu sedang bersepeda di jalan yang ada rambu ini (jalan prioritas). Bagaimana kamu bisa melewati persimpangan?',
      my: 'ဤဆိုင်းဘုတ် (ဦးစားပေးလမ်း) ရှိသော လမ်းတွင် မောင်းနှင်နေသည်။ လမ်းဆုံတွင် မည်သို့ဖြတ်သန်းနိုင်သနည်း?'
    },
    choices: [
      {
        text: {
          ja: '交差する道路より優先して通行できる',
          en: 'Can pass with priority over crossing roads',
          vi: 'Có thể đi với quyền ưu tiên so với các đường giao nhau',
          zh: '可以比交叉道路优先通行',
          tl: 'Maaaring dumaan nang may priyoridad kumpara sa mga nagtatawid na daan',
          id: 'Bisa melewati dengan prioritas dibanding jalan yang memotong',
          my: 'ဖြတ်သွားသော လမ်းများထက် ဦးစားပေးဖြင့် ဖြတ်သန်းနိုင်'
        },
        correct: true
      },
      {
        text: {
          ja: '一時停止して交差道路を優先する',
          en: 'Stop temporarily and give priority to crossing traffic',
          vi: 'Dừng lại và nhường đường cho phương tiện giao nhau',
          zh: '临时停车，优先让交叉道路',
          tl: 'Huminto pansamantala at unahin ang nagtatawid na trapiko',
          id: 'Berhenti sementara dan beri prioritas pada lalu lintas yang memotong',
          my: 'တစ်ချိန်ရပ်ပြီး ဖြတ်သွားသော ယာဉ်ကြောကို ဦးစားပေးမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '速度を上げて通過しなければならない',
          en: 'Must accelerate to pass',
          vi: 'Phải tăng tốc để qua',
          zh: '必须加速通过',
          tl: 'Kailangan pabilisin ang takbo para makadaan',
          id: 'Harus mempercepat untuk lewat',
          my: 'မြန်မြန်မောင်းပြီး ဖြတ်သန်းရမည်'
        },
        correct: false
      },
      {
        text: {
          ja: '標識は自動車のみに適用される',
          en: 'The sign only applies to cars',
          vi: 'Biển báo chỉ áp dụng cho ô tô',
          zh: '标志仅适用于汽车',
          tl: 'Ang senyas ay para lamang sa mga kotse',
          id: 'Rambu hanya berlaku untuk mobil',
          my: 'ဆိုင်းဘုတ်သည် ကားများကိုသာ သက်ဆိုင်သည်'
        },
        correct: false
      }
    ],
    explanation: {
      ja: '「優先道路」の標識がある道路の車両は、交差する道路の車両より優先して通行できます。自転車もこの標識の恩恵を受けますが、交差点での安全確認は必ず行いましょう。反対に、優先道路へ合流する側は必ず一時停止または徐行が必要です。',
      en: 'Vehicles on a road marked "Priority Road" may pass with priority over vehicles on crossing roads. Bicycles also benefit from this sign, but always check for safety at intersections. Vehicles merging onto the priority road must always stop or go slowly.',
      vi: 'Các phương tiện trên đường có biển "Đường ưu tiên" có thể đi với quyền ưu tiên so với phương tiện trên đường giao nhau. Xe đạp cũng được hưởng lợi từ biển báo này, nhưng hãy luôn kiểm tra an toàn tại ngã tư. Ngược lại, phương tiện nhập vào đường ưu tiên phải luôn dừng hoặc đi chậm.',
      zh: '在有"优先道路"标志的道路上，车辆可以比交叉道路的车辆优先通行。自行车也受惠于此标志，但交叉路口的安全确认是必须的。反过来，合流进入优先道路的一侧必须临时停车或慢行。',
      tl: 'Ang mga sasakyan sa daan na may markang "Prayoridad na Kalsada" ay maaaring dumaan nang may priyoridad kumpara sa mga sasakyan sa mga nagtatawid na daan. Ang bisikleta ay nakikinabang din sa senyas na ito, ngunit laging suriin ang kaligtasan sa mga intersection. Ang mga sasakyan na sumasali sa prayoridad na kalsada ay dapat laging huminto o bumagal.',
      id: 'Kendaraan di jalan yang ada rambu "Jalan Prioritas" bisa melewati dengan prioritas dibanding kendaraan di jalan yang memotong. Sepeda juga mendapat manfaat dari rambu ini, tapi selalu periksa keamanan di persimpangan. Sebaliknya, kendaraan yang bergabung ke jalan prioritas harus selalu berhenti atau pelan-pelan.',
      my: '"ဦးစားပေးလမ်း" ဆိုင်းဘုတ်ရှိသော လမ်းပေါ်ရှိ ယာဉ်များသည် ဖြတ်သွားသော လမ်းပေါ်ရှိ ယာဉ်များထက် ဦးစားပေးဖြင့် ဖြတ်သန်းနိုင်သည်။ စက်ဘီးသည်လည်း ဤဆိုင်းဘုတ်မှ အကျိုးခံစားရသော်လည်း လမ်းဆုံတွင် လုံခြုံမှုစစ်ဆေးခြင်းကို မဖြစ်မနေ ပြုလုပ်ပါ။ ဆန့်ကျင်ဘက်တွင်၊ ဦးစားပေးလမ်းသို့ ဝင်ရောက်သော ဘက်မှ မဖြစ်မနေ တစ်ချိန်ရပ်ရမည် သို့မဟုတ် နှေးနှေးမောင်းရမည်။'
    }
  },

];
