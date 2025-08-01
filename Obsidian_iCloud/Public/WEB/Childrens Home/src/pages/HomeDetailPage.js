import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const HomeDetailPage = () => {
  const { homeId } = useParams();

  // 各ホームの画像データ（ASCII名で確実に表示）
  const homeImages = {
    kanransya: {
      hero: '/kanransya.jpg',
      gallery: [
        { src: '/kanransya.jpg', caption: 'かんらん舎外観' },
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845607/CleanShot_2025-07-30_at_09.19.38_2x_gvgcu8.png', caption: '玄関の様子' }
      ]
    },
    yui: {
      hero: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753862039/yui_home_hhnpkz.jpg',
      gallery: [
        { src: '/yui.jpg', caption: '結ホーム外観' },
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753833847/CleanShot_2025-07-30_at_08.16.17_2x_hodwe5.png', caption: '玄関の様子' }
      ]
    },
    leap: {
      hero: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753862039/LEAP_home_vkrmua.jpg',
      gallery: [
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845644/LEAP%E3%83%9B%E3%83%BC%E3%83%A0_%E5%A4%96%E8%A6%B3_lhwyyb.jpg', caption: 'LEAP外観' },
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845643/%E7%9C%8B%E6%9D%BF-1-1152x1536_vbsiun.jpg', caption: '玄関の様子' },
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845643/%E3%83%AA%E3%83%92%E3%82%99%E3%83%B3%E3%82%AF%E3%82%99_smly8b.jpg', caption: 'リビングルーム' },
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845643/%E5%88%A9%E7%94%A8%E8%80%85%E5%B1%85%E5%AE%A4-1152x1536_yotfsy.jpg', caption: '利用者居室' }
      ]
    },
    switch: {
      hero: '/switch.jpg',
      gallery: [
        { src: '/switch.jpg', caption: 'スイッチ外観' }
      ]
    },
    ties: {
      hero: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753833761/IMG_2693_xt2vc1.jpg',
      gallery: [
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753833761/IMG_2693_xt2vc1.jpg', caption: 'TIES外観' },
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753833759/IMG_2691_wsdtvt.jpg', caption: '玄関の様子' },
        { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753833755/IMG_2689_v0mkzz.jpg', caption: '施設内部' },
      ]
    }
  };

  const homesData = {
    kanransya: {
      name: 'かんらん舎',
      subtitle: '福岡市初の自立援助ホーム',
      nameOrigin: '「かんらん舎」という名前は、何度回っても同じ場所に戻って来ることができる「観覧車」を例えに、乗りたいと思った時にそこへ行けば乗ることができ、何度でもチャレンジできること、利用者の人生が上手く回っていくようにとの思いが込められています。',
      established: '2008年',
      location: '福岡市南区',
      capacity: '女性6名',
      roomLayout: '個室4室、2人部屋1室',
      facilities: ['学習室', 'リビング', 'キッチン', '浴室', '洗濯室'],
      manager: '施設長 山田 花子',
      phone: '092-XXX-XXXX',
      address: '福岡市南区大平寺2丁目10-1',
      managerProfile: {
        name: '山田 花子',
        title: '施設長',
        experience: '社会福祉士として15年の経験',
        photo: null,
        message: '一人ひとりの女性が自分らしく生きていけるよう、温かい環境でサポートしています。何でも気軽にご相談ください。'
      },
      entrancePhoto: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845607/CleanShot_2025-07-30_at_09.19.38_2x_gvgcu8.png',
      description: '2008年に福岡市として初めて開設された自立援助ホーム。長年の実績と経験を活かし、青少年一人ひとりの個性と状況に応じた丁寧な支援を行っています。',
      philosophy: '「自立への道のりを共に歩む」をモットーに、青少年が安心して成長できる環境を提供し、社会で自立して生活していくための基盤づくりをサポートします。',
      features: [
        '福岡市初の自立援助ホームとしての豊富な経験',
        '一人ひとりに合わせたオーダーメイドの支援計画',
        '地域との強いネットワークによる包括的支援',
        '卒業生との継続的なつながりとアフターケア'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・洗面' },
          { time: '7:00', activity: '朝食' },
          { time: '8:00', activity: '出勤・通学' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '8:00', activity: '起床・洗面' },
          { time: '8:30', activity: '朝食' },
          { time: '10:00', activity: '清掃・洗濯' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: '自由時間・外出' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: '生活支援',
          content: '基本的な生活習慣の確立、金銭管理、健康管理など、女性として自立した生活に必要なスキルを身につけるサポート'
        },
        {
          title: '就労支援',
          content: '就職活動の支援、職場との連携、仕事上の悩み相談など、女性が安定した就労を継続するためのサポート'
        },
        {
          title: '精神的支援',
          content: '女性特有の悩みも含め、日常的な相談から将来への不安まで、心の健康を保つためのカウンセリングやメンタルケア'
        },
        {
          title: 'アフターケア',
          content: '退所後も継続的な相談支援を行い、女性として地域での自立生活を長期的にサポート'
        }
      ]
    },
    yui: {
      name: '結ホーム',
      subtitle: '絆を大切にする男性専用ホーム',
      nameOrigin: '「結ホーム」には、ホームに来る子どもたちと、その子どもたちを支える人たちとの絆を結び、人との縁を大切にして社会へ羽ばたいていってほしいという思いが込められています。',
      established: '2015年',
      location: '福岡市南区',
      capacity: '男性6名',
      roomLayout: '全室個室',
      facilities: ['個室6室', '共用リビング', 'キッチン', '浴室', '洗濯室'],
      manager: '施設長 年徳',
      phone: '092-XXX-XXXX',
      address: '福岡市南区皿山2丁目1-58',
      managerProfile: {
        name: '年徳',
        title: '施設長',
        experience: '精神保健福祉士として12年の経験',
        photo: null,
        message: '男性の若者たちが人との絆を大切にしながら、自分らしい人生を歩めるようサポートしています。'
      },
      entrancePhoto: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753833847/CleanShot_2025-07-30_at_08.16.17_2x_hodwe5.png',
      description: '「結」は絆やつながりを意味します。人とのつながりを大切にした支援環境で、一人ひとりの成長を丁寧にサポートしています。',
      philosophy: '一人ひとりの自立と社会参加を支援し、それぞれの夢や目標に向かって歩む力を育みます。お互いを支え合う温かい家庭的な環境を大切にしています。',
      features: [
        '人との絆を大切にしたサポート',
        'プライバシーを重視した個室環境',
        '経験豊富な職員によるサポート体制',
        '家庭的な雰囲気での生活支援'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・洗面' },
          { time: '7:00', activity: '朝食・身支度' },
          { time: '8:00', activity: '出勤・通学' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '20:00', activity: '自由時間・勉強' },
          { time: '22:00', activity: '入浴' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '8:00', activity: '起床・洗面' },
          { time: '8:30', activity: '朝食' },
          { time: '10:00', activity: '清掃・洗濯' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: '自由時間・買い物' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: '生活支援',
          content: '基本的な生活習慣の確立、金銭管理、健康管理など、男性として自立した生活に必要なスキルを身につけるサポート'
        },
        {
          title: '就労支援',
          content: '就職活動の支援、職場との連携、仕事上の悩み相談など、男性が安定した就労を継続するためのサポート'
        },
        {
          title: '精神的支援',
          content: '男性特有の悩みも含め、日常的な相談から将来への不安まで、心の健康を保つためのカウンセリングやメンタルケア'
        },
        {
          title: 'アフターケア',
          content: '退所後も継続的な相談支援を行い、男性として地域での自立生活を長期的にサポート'
        }
      ]
    },
    leap: {
      name: 'LEAP',
      subtitle: '飛躍と成長をテーマとしたホーム',
      nameOrigin: 'ホーム名の「LEAP」とは、英語で『飛び越える、上昇する』というような意味があり、ホームに来る子どもたちに、困難を乗り越え社会へ大きく飛び立ってほしいという思いを込めて名付けました。',
      established: '2019年',
      location: '筑紫野市',
      capacity: '男性6名',
      roomLayout: '個室3室、2人部屋2室',
      facilities: ['運動スペース', '学習室', 'リビング', 'キッチン', '浴室'],
      manager: '施設長 中嶋',
      phone: '092-XXX-XXXX',
      address: '福岡県筑紫野市紫6丁目25-5',
      managerProfile: {
        name: '中嶋',
        title: '施設長',
        experience: 'スポーツインストラクター兼社会福祉士',
        photo: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845642/%E4%B8%AD%E5%B6%8B-scaled-e1655458526756-150x150_nyz7pl.jpg',
        message: '若者たちの無限の可能性を信じて、一緒に大きく飛躍していきましょう！',
        interviewLink: 'https://smileyflowers.site/leap/'
      },
      entrancePhoto: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845643/%E7%9C%8B%E6%9D%BF-1-1152x1536_vbsiun.jpg',
      description: 'LEAPは「飛び越える、上昇する」という意味を持ちます。青少年の可能性を信じ、それぞれの夢や目標に向かって大きく飛躍できるよう支援します。',
      philosophy: '一人ひとりの可能性を最大限に引き出し、自分らしい人生を歩むための力を育てます。挑戦する気持ちを大切にし、失敗を恐れずに成長できる環境を提供します。',
      features: [
        '個性を活かした支援プログラム',
        '新しい支援理論の積極的な導入',
        '豊かな自然環境での生活',
        'スポーツや文化活動を通じた成長支援'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・朝の運動' },
          { time: '7:00', activity: '朝食' },
          { time: '8:00', activity: '出勤・通学' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '20:00', activity: '学習・技能習得時間' },
          { time: '22:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '7:00', activity: '起床・朝の運動' },
          { time: '8:00', activity: '朝食' },
          { time: '10:00', activity: '清掃・洗濯' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: 'スポーツ・レクリエーション' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: '生活支援',
          content: '基本的な生活習慣の確立、金銭管理、健康管理など、男性として自立した生活に必要なスキルを身につけるサポート'
        },
        {
          title: '就労支援',
          content: '就職活動の支援、職場との連携、仕事上の悩み相談など、男性が安定した就労を継続するためのサポート'
        },
        {
          title: 'チャレンジ支援',
          content: '新しいことへの挑戦を奨励し、失敗を成長の機会として捉える支援体制。スポーツや特技を通じた自己表現の支援'
        },
        {
          title: 'アフターケア',
          content: '退所後も継続的な相談支援を行い、男性として地域での自立生活を長期的にサポート'
        }
      ]
    },
    switch: {
      name: 'スイッチ',
      subtitle: '進学・学習支援に特化したホーム',
      nameOrigin: '人生の「スイッチ」を入れる場所。学びへの意欲のスイッチ、新しい自分へのスイッチ、将来への希望のスイッチ。ここから新しい人生をスタートしてほしいという想いを込めています。',
      established: '2023年',
      location: '太宰府市',
      capacity: '男性6名',
      roomLayout: '個室4室、2人部屋1室',
      facilities: ['学習室（24時間利用可）', '図書コーナー', 'PCルーム', 'リビング', 'キッチン'],
      manager: '施設長 鈴木 一郎',
      phone: '092-XXX-XXXX',
      address: '福岡県太宰府市通古賀3丁目13-6',
      managerProfile: {
        name: '鈴木 一郎',
        title: '施設長',
        experience: '元高校教員・社会福祉士',
        photo: null,
        message: '学びたいという気持ちを大切に、一人ひとりのペースに合わせた教育支援を行っています。'
      },
      entrancePhoto: '/switch.jpg',
      description: '心の変化と選択をサポート。高卒資格取得や進学を目指す青年の就学支援に積極的に取り組む新しいホームです。',
      philosophy: '教育の力を信じ、学習を通じた自己実現を支援します。一人ひとりの学習ペースに合わせた環境で、将来への可能性を広げるお手伝いをします。',
      features: [
        '進学・学習支援に特化した環境',
        '充実した学習設備と教材',
        '個別学習計画の作成と実行',
        '大学・専門学校との連携プログラム'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・洗面' },
          { time: '7:00', activity: '朝食' },
          { time: '8:00', activity: '通学・学習' },
          { time: '17:00', activity: '帰宅' },
          { time: '18:00', activity: '夕食' },
          { time: '19:00', activity: '学習時間' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '8:00', activity: '起床・洗面' },
          { time: '8:30', activity: '朝食' },
          { time: '10:00', activity: '学習・課題時間' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: '自由時間・図書館' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '20:00', activity: '復習・予習時間' },
          { time: '22:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: '生活支援',
          content: '基本的な生活習慣の確立、金銭管理、健康管理など、男性として自立した生活に必要なスキルを身につけるサポート'
        },
        {
          title: '学習支援',
          content: '個別学習計画の作成、学習環境の整備、学習方法の指導、定期的な進捗確認。高校卒業資格取得や大学進学を目指すサポート'
        },
        {
          title: '進路指導',
          content: '進学先の選択相談、受験対策、奨学金の申請支援、将来設計の相談。キャリアプランの作成から就職支援まで一貫サポート'
        },
        {
          title: 'アフターケア',
          content: '退所後も継続的な相談支援を行い、男性として地域での自立生活を長期的にサポート'
        }
      ]
    },
    ties: {
      name: 'TIES',
      subtitle: '新しいつながりを創造するホーム',
      nameOrigin: 'TIESは「絆」「つながり」を意味する英語。人と人、過去と未来、地域と青少年をつなぐ架け橋となるホームを目指します。新しい関係性の中で、自分らしい人生を歩み始める場所です。',
      established: '2024年4月',
      location: '福岡市南区',
      capacity: '男性6名',
      roomLayout: '全室個室',
      facilities: ['交流スペース', 'クリエイティブルーム', '個室6室', 'キッチン', 'テラス'],
      manager: '施設長 柴田',
      phone: '092-XXX-XXXX',
      address: '福岡市南区若久4丁目2-3（地域福祉拠点「五福の家」敷地内）',
      managerProfile: {
        name: '柴田',
        title: '施設長',
        experience: '社会福祉士・ケアマネージャーとして8年の経験',
        photo: null,
        message: '最新の支援理論を取り入れながら、一人ひとりの個性を大切に温かい支援を行っています。',
        isPreparation: false
      },
      entrancePhoto: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753833759/IMG_2691_wsdtvt.jpg',
      description: '2024年4月に開設した最新の自立援助ホーム。「TIES」は「つながり」を意味し、青少年と地域、青少年同士、そして過去・現在・未来をつなぐ支援を実践しています。',
      philosophy: '最新の支援理論と豊富な経験を融合させ、一人ひとりの青少年が新しい人生のステージへと歩み出せるよう、革新的で温かい支援を提供しています。',
      features: [
        '最新の支援理論を取り入れた新しいアプローチ',
        '地域との連携を重視したコミュニティ支援',
        'デジタル技術を活用した支援プログラム',
        '卒業生ネットワークとの強いつながり'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・洗面' },
          { time: '7:00', activity: '朝食' },
          { time: '8:00', activity: '出勤・通学' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '20:00', activity: '自由時間・学習' },
          { time: '22:00', activity: '入浴' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '8:00', activity: '起床・洗面' },
          { time: '8:30', activity: '朝食' },
          { time: '10:00', activity: '清掃・洗濯' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: '地域活動・自由時間' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: '生活支援',
          content: '基本的な生活習慣の確立、金銭管理、健康管理など、男性として自立した生活に必要なスキルを身につけるサポート'
        },
        {
          title: '就労支援',
          content: '就職活動の支援、職場との連携、仕事上の悩み相談など、男性が安定した就労を継続するためのサポート'
        },
        {
          title: '次世代型支援',
          content: '最新の支援理論やデジタルツールを活用した個別最適化された支援プログラム。地域との密接な連携による包括的サポート'
        },
        {
          title: 'アフターケア',
          content: '退所後も継続的な相談支援を行い、男性として地域での自立生活を長期的にサポート'
        }
      ]
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const home = homesData[homeId];
  const images = homeImages[homeId];

  // デバッグ用のログ
  console.log('HomeDetailPage - homeId:', homeId);
  console.log('HomeDetailPage - home:', home);
  console.log('HomeDetailPage - images:', images);
  console.log('HomeDetailPage - hero image:', images?.hero);

  if (!home) {
    return (
      <div className="container" style={{ padding: '2rem 0' }}>
        <h1>ホームが見つかりません</h1>
        <Link to="/homes" className="btn">ホーム一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div className="home-detail-page">
      {/* Heroセクション */}
      <section 
        className="home-hero" 
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)'
        }}
      >
        {/* 背景画像をimgタグで表示 - デバッグ情報付き */}
        {images?.hero && (
          <img 
            src={images.hero}
            alt={`${home.name}の背景`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
            onError={(e) => {
              console.error('❌ Hero image failed to load:', images.hero);
              console.error('❌ Original path for homeId:', homeId);
              e.target.style.display = 'block';
              e.target.style.background = '#ff0000';
              e.target.style.color = 'white';
              e.target.style.display = 'flex';
              e.target.style.alignItems = 'center';
              e.target.style.justifyContent = 'center';
              e.target.innerHTML = `画像読み込みエラー: ${images.hero}`;
            }}
            onLoad={() => {
              console.log('✅ Hero image loaded successfully:', images.hero);
            }}
          />
        )}
        {/* デバッグ表示：実際のパス */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)'
          }}
        />
        <div 
          className="hero-content" 
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            textAlign: 'center',
            padding: '2rem'
          }}
        >
          {(() => {
            const logoData = {
              yui: { src: '/自立援助ホーム 結ホーム.png', alt: '結ホームロゴ' },
              kanransya: { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753847928/%E8%87%AA%E7%AB%8B%E6%8F%B4%E5%8A%A9%E3%83%9B%E3%83%BC%E3%83%A0_%E3%81%8B%E3%82%93%E3%82%89%E3%82%93%E8%88%8E_%E3%83%AD%E3%82%B4%E3%82%99_ltzptu.png', alt: 'かんらん舎ロゴ' },
              leap: { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753864549/LEAP_logo_kmcgjk.png', alt: 'LEAPロゴ' },
              switch: { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753889235/Switch_logo_zy5kus.png', alt: 'スイッチロゴ' },
              ties: null
            };
            const logoInfo = logoData[homeId];
            
            if (logoInfo) {
              return (
                <div style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={logoInfo.src} 
                    alt={logoInfo.alt}
                    style={{
                      maxHeight: '120px',
                      maxWidth: '300px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))'
                    }}
                  />
                </div>
              );
            } else {
              return (
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>{home.name}</h1>
              );
            }
          })()}
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            fontWeight: '300',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>{home.subtitle}</p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>{home.location}
            </span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>{home.established}設立
            </span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>{home.capacity}
            </span>
          </div>
        </div>
      </section>

      {/* パンくずナビ */}
      <nav className="breadcrumb" style={{ background: '#f8f9fa', padding: '1rem 0' }}>
        <div className="container">
          <ul className="breadcrumb-list" style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: '#666' }}>ホーム</Link></li>
            <li style={{ color: '#999' }}>/</li>
            <li><Link to="/homes" style={{ textDecoration: 'none', color: '#666' }}>自立援助ホーム</Link></li>
            <li style={{ color: '#999' }}>/</li>
            <li style={{ color: 'var(--primary-color)', fontWeight: '600' }}>{home.name}</li>
          </ul>
        </div>
      </nav>

      {/* ホームの由来・特色 */}
      {home.nameOrigin && (
        <section className="section" style={{ background: 'white', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                color: 'var(--primary-color)',
                marginBottom: '1rem'
              }}>
                「{home.name}」に込めた想い
              </h2>
              <div style={{
                width: '60px',
                height: '4px',
                background: 'var(--accent-color)',
                margin: '0 auto 2rem',
                borderRadius: '2px'
              }}></div>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '3rem'
              }}>
                {home.nameOrigin}
              </p>
              <div className="card" style={{
                background: 'linear-gradient(135deg, #fff9f5 0%, #fefefe 100%)',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                border: '1px solid #f0e5d8',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
              }}>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#444',
                  margin: '0',
                  flex: 1
                }}>
                  {home.philosophy}
                </p>
                {/* ホームのロゴ画像 */}
                {(() => {
                  const logoData = {
                    yui: { src: '/自立援助ホーム 結ホーム.png', alt: '結ホームロゴ' },
                    kanransya: { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753847928/%E8%87%AA%E7%AB%8B%E6%8F%B4%E5%8A%A9%E3%83%9B%E3%83%BC%E3%83%A0_%E3%81%8B%E3%82%93%E3%82%89%E3%82%93%E8%88%8E_%E3%83%AD%E3%82%B4%E3%82%99_ltzptu.png', alt: 'かんらん舎ロゴ' },
                    leap: { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753864549/LEAP_logo_kmcgjk.png', alt: 'LEAPロゴ' },
                    switch: { src: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753889235/Switch_logo_zy5kus.png', alt: 'スイッチロゴ' },
                    ties: null
                  };
                  const logoInfo = logoData[homeId];
                  if (!logoInfo) return null;
                  
                  return (
                    <div style={{
                      flexShrink: 0,
                      width: '120px',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'white',
                      borderRadius: '12px',
                      padding: '1rem',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                      <img 
                        src={logoInfo.src} 
                        alt={logoInfo.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ホーム長プロフィール */}
      {home.managerProfile && (
        <section className="section" style={{ background: 'linear-gradient(135deg, #f0f8ff 0%, #e8f4f8 100%)', padding: '5rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'flex-start'
              }}>
                {/* 玄関写真 */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    transform: 'rotate(-2deg)',
                    background: 'white',
                    padding: '1rem',
                    position: 'relative'
                  }}>
                    <img 
                      src={home.entrancePhoto} 
                      alt={`${home.name}の玄関`}
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: '12px'
                      }}
                    />
                  </div>
                </div>

                {/* プロフィール（吹き出し） */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    background: 'white',
                    padding: '3rem',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid #e0f2fe',
                    position: 'relative',
                    marginBottom: '3rem'
                  }}>
                    {/* 吹き出しの三角形（下向きに変更） */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '20px solid transparent',
                      borderRight: '20px solid transparent',
                      borderTop: '20px solid white'
                    }}></div>

                    <p style={{
                      margin: '0',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: '#444',
                      fontStyle: 'italic'
                    }}>
                      「{home.managerProfile.message}」
                      {home.managerProfile.interviewLink && (
                        <>
                          <br /><br />
                          <a 
                            href={home.managerProfile.interviewLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                              color: 'var(--primary-color)',
                              textDecoration: 'underline',
                              fontStyle: 'normal',
                              fontSize: '0.95rem'
                            }}
                          >
                            インタビュー記事を読む →
                          </a>
                        </>
                      )}
                    </p>

                    {home.managerProfile.isPreparation && (
                      <div style={{
                        marginTop: '1.5rem',
                        padding: '1rem',
                        background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
                        borderRadius: '8px',
                        border: '1px solid #f6d55c',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          fontSize: '0.9rem',
                          color: '#856404',
                          fontWeight: '600'
                        }}>
                          ※ 開設準備中
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* ホーム長プロフィール（吹き出しの下） - シンプル版 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    justifyContent: 'center'
                  }}>
                    {/* ホーム長アイコン */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: home.managerProfile.photo ? `url(${home.managerProfile.photo}) center/cover` : 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                      border: '3px solid white',
                      boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'white',
                      flexShrink: 0
                    }}>
                      {!home.managerProfile.photo && <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>}
                    </div>
                    
                    {/* シンプルなプロフィール情報 */}
                    <p style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--primary-color)',
                      margin: '0'
                    }}>
                      ホーム長　{home.managerProfile.name.split(' ')[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 職員紹介セクション */}
      {(homeId === 'yui' || homeId === 'kanransya' || homeId === 'leap' || homeId === 'switch') && (
        <section className="section staff-section" style={{ background: 'linear-gradient(135deg, #f0f8ff 0%, #e8f4f8 100%)', padding: '3rem 0', overflow: 'hidden' }}>
            {/* 流れるスタッフカード */}
            <div style={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              padding: '1rem 0'
            }}>
              <div className="staff-scroll" style={{
                display: 'flex',
                gap: '2rem',
                animation: 'staffSlide 30s linear infinite',
                width: 'fit-content'
              }}>
                {/* 職員データ - 2回繰り返してシームレスループを実現 */}
                {(() => {
                  const staffData = {
                    yui: [
                      { name: '田中', role: '職員', message: '一緒に料理を作るのが好きです！', personality: ['料理が上手で優しい', 'いつも笑顔で話しやすい', '困った時に頼りになる'] },
                      { name: '山田', role: '職員', message: 'スポーツで一緒に汗を流しましょう', personality: ['体力があって元気', 'スポーツを教えるのが得意', '明るくて盛り上げ上手'] },
                      { name: '鈴木', role: '職員', message: '読書の楽しさを伝えたいです', personality: ['物知りで勉強熱心', '静かで落ち着いている', '本の相談に乗ってくれる'] },
                      { name: '伊藤', role: '職員', message: 'みんなの相談相手になります', personality: ['話を聞くのが上手', 'ゲームが好きで親しみやすい', '悩み事を相談しやすい'] },
                      { name: '高橋', role: '宿直', message: '夜も安心して過ごせるよう見守ります', personality: ['夜中でも気にかけてくれる', 'コーヒーの淹れ方を教えてくれる', '写真が趣味で記録を大切にする'] },
                      { name: '渡辺', role: '宿直', message: '何でも気軽に話しかけてください', personality: ['アニメの話で盛り上がる', 'お菓子作りが上手', '夜遅くまで話を聞いてくれる'] },
                      { name: '小林', role: '宿直', message: 'みんなが安眠できるようサポートします', personality: ['温泉の知識が豊富', 'ドライブに誘ってくれる', 'のんびりした性格で癒し系'] }
                    ],
                    kanransya: [
                      { name: '佐々木', role: '職員', message: '一緒にお料理を学びましょう', personality: ['家庭的で温かい', '女性の悩みを理解してくれる', 'お母さんのような存在'] },
                      { name: '木村', role: '職員', message: '美容やファッションのことも相談してください', personality: ['おしゃれでセンスが良い', '美容に詳しい', '女性らしさを大切にする'] },
                      { name: '加藤', role: '職員', message: '就職活動を一緒に頑張りましょう', personality: ['キャリア相談が得意', '社会経験が豊富', 'しっかりとサポートしてくれる'] },
                      { name: '中村', role: '宿直', message: '夜間も安心して過ごせるようサポートします', personality: ['夜勤でも気配りを忘れない', '読書が好きで落ち着いている', '優しく見守ってくれる'] }
                    ],
                    leap: [
                      { name: '森田', role: '職員', message: 'スポーツで心と体を鍛えましょう！', personality: ['体育会系で元気', 'スポーツ指導が得意', '挑戦を応援してくれる'] },
                      { name: '井上', role: '職員', message: '新しいことにチャレンジしてみませんか', personality: ['アクティブで前向き', '冒険心がある', '可能性を信じてくれる'] },
                      { name: '松本', role: '職員', message: 'IT技術も一緒に学びましょう', personality: ['技術に詳しい', '最新トレンドに敏感', '未来志向'] },
                      { name: '橋本', role: '宿直', message: '困ったことがあればいつでも相談を', personality: ['夜も頼りになる', 'ゲームが好き', 'のんびりした性格'] }
                    ],
                    switch: [
                      { name: '藤田', role: '職員', message: '勉強のことなら何でも聞いてください', personality: ['勉強を教えるのが上手', '学習計画作りが得意', '忍耐強くサポート'] },
                      { name: '吉田', role: '職員', message: '進路について一緒に考えましょう', personality: ['進路相談のプロ', '将来設計が得意', '的確なアドバイスをくれる'] },
                      { name: '清水', role: '職員', message: '図書館や資料探しもお手伝いします', personality: ['本が大好き', '調べ物が得意', '静かで集中できる環境を作る'] },
                      { name: '石川', role: '宿直', message: '夜の学習時間もサポートします', personality: ['夜遅くまで学習に付き合う', '集中力を大切にする', '静かで落ち着いている'] }
                    ]
                  };
                  const currentStaffData = staffData[homeId] || staffData.yui;
                  // 同じデータを2回繰り返してシームレスループを作成
                  return [...currentStaffData, ...currentStaffData];
                })().map((staff, index) => (
                  <div key={index} className="staff-card" style={{
                    minWidth: '250px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '12px',
                    padding: '1.2rem',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {/* 名前と役職 - 横並び */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        fontSize: '0.7rem',
                        color: 'white',
                        background: staff.role === '職員' ? 'var(--primary-color)' : 'var(--accent-color)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '10px',
                        fontWeight: '600'
                      }}>
                        {staff.role}
                      </span>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        color: 'var(--primary-color)',
                        margin: '0'
                      }}>
                        {staff.name}
                      </h4>
                    </div>
                    
                    {/* メッセージ */}
                    <p style={{
                      fontSize: '0.85rem',
                      lineHeight: '1.5',
                      color: '#555',
                      margin: '0 0 0.8rem 0',
                      fontStyle: 'italic',
                      textAlign: 'center'
                    }}>
                      「{staff.message}」
                    </p>
                    
                    {/* こんな人 */}
                    <div style={{
                      background: 'rgba(248,249,250,0.8)',
                      borderRadius: '6px',
                      padding: '0.6rem',
                      textAlign: 'left'
                    }}>
                      <p style={{
                        fontSize: '0.7rem',
                        color: '#666',
                        margin: '0 0 0.4rem 0',
                        fontWeight: '600',
                        textAlign: 'center'
                      }}>
                        こんな人
                      </p>
                      {staff.personality.map((trait, i) => (
                        <p key={i} style={{
                          fontSize: '0.7rem',
                          color: '#888',
                          margin: '0 0 0.2rem 0',
                          paddingLeft: '0.5rem',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--accent-color)',
                            fontWeight: 'bold'
                          }}>・</span>
                          {trait}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* 繰り返し表示用のコピー */}
                {(() => {
                  const staffData = {
                    yui: [
                      { name: '田中', role: '職員', message: '一緒に料理を作るのが好きです！', personality: ['料理が上手で優しい', 'いつも笑顔で話しやすい', '困った時に頼りになる'] },
                      { name: '山田', role: '職員', message: 'スポーツで一緒に汗を流しましょう', personality: ['体力があって元気', 'スポーツを教えるのが得意', '明るくて盛り上げ上手'] },
                      { name: '鈴木', role: '職員', message: '読書の楽しさを伝えたいです', personality: ['物知りで勉強熱心', '静かで落ち着いている', '本の相談に乗ってくれる'] },
                      { name: '伊藤', role: '職員', message: 'みんなの相談相手になります', personality: ['話を聞くのが上手', 'ゲームが好きで親しみやすい', '悩み事を相談しやすい'] }
                    ],
                    kanransya: [
                      { name: '佐々木', role: '職員', message: '一緒にお料理を学びましょう', personality: ['家庭的で温かい', '女性の悩みを理解してくれる', 'お母さんのような存在'] },
                      { name: '木村', role: '職員', message: '美容やファッションのことも相談してください', personality: ['おしゃれでセンスが良い', '美容に詳しい', '女性らしさを大切にする'] }
                    ],
                    leap: [
                      { name: '森田', role: '職員', message: 'スポーツで心と体を鍛えましょう！', personality: ['体育会系で元気', 'スポーツ指導が得意', '挑戦を応援してくれる'] },
                      { name: '井上', role: '職員', message: '新しいことにチャレンジしてみませんか', personality: ['アクティブで前向き', '冒険心がある', '可能性を信じてくれる'] }
                    ],
                    switch: [
                      { name: '藤田', role: '職員', message: '勉強のことなら何でも聞いてください', personality: ['勉強を教えるのが上手', '学習計画作りが得意', '忍耐強くサポート'] },
                      { name: '吉田', role: '職員', message: '進路について一緒に考えましょう', personality: ['進路相談のプロ', '将来設計が得意', '的確なアドバイスをくれる'] }
                    ]
                  };
                  return (staffData[homeId] || staffData.yui).slice(0, 4);
                })().map((staff, index) => (
                  <div key={`copy-${index}`} className="staff-card" style={{
                    minWidth: '250px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '12px',
                    padding: '1.2rem',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {/* 名前と役職 - 横並び */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        fontSize: '0.7rem',
                        color: 'white',
                        background: staff.role === '職員' ? 'var(--primary-color)' : 'var(--accent-color)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '10px',
                        fontWeight: '600'
                      }}>
                        {staff.role}
                      </span>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        color: 'var(--primary-color)',
                        margin: '0'
                      }}>
                        {staff.name}
                      </h4>
                    </div>
                    
                    {/* メッセージ */}
                    <p style={{
                      fontSize: '0.85rem',
                      lineHeight: '1.5',
                      color: '#555',
                      margin: '0 0 0.8rem 0',
                      fontStyle: 'italic',
                      textAlign: 'center'
                    }}>
                      「{staff.message}」
                    </p>
                    
                    {/* こんな人 */}
                    <div style={{
                      background: 'rgba(248,249,250,0.8)',
                      borderRadius: '6px',
                      padding: '0.6rem',
                      textAlign: 'left'
                    }}>
                      <p style={{
                        fontSize: '0.7rem',
                        color: '#666',
                        margin: '0 0 0.4rem 0',
                        fontWeight: '600',
                        textAlign: 'center'
                      }}>
                        こんな人
                      </p>
                      {staff.personality.map((trait, i) => (
                        <p key={i} style={{
                          fontSize: '0.7rem',
                          color: '#888',
                          margin: '0 0 0.2rem 0',
                          paddingLeft: '0.5rem',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--accent-color)',
                            fontWeight: 'bold'
                          }}>・</span>
                          {trait}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>
      )}

      {/* 施設情報 */}
      <section className="section" style={{ background: '#f8f9fa', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title">施設情報</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* 定員・間取り */}
            <div className="card" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                定員・間取り
              </h3>
              <div style={{
                background: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                  {home.capacity}
                </div>
                {home.roomLayout && (
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>
                    {home.roomLayout}
                  </p>
                )}
              </div>
            </div>

            {/* 間取り */}
            {(homeId === 'leap' || homeId === 'kanransya') && (
              <div className="card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                gridColumn: 'span 2'
              }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '1.5rem', textAlign: 'center' }}>
                  間取り
                </h3>
                <div style={{ textAlign: 'center' }}>
                  <img 
                    src={homeId === 'leap' ? 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753862038/%E3%83%9B%E3%83%BC%E3%83%A0%E6%A6%82%E8%A6%81_y9nfbb.jpg' : 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753845642/1662468405_kp3xo3.jpg'}
                    alt={`${home.name}間取り図`}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* フォトギャラリー */}
      {images?.gallery && images.gallery.length > 0 && (
        <section className="section" style={{ background: 'white', padding: '4rem 0' }}>
          <div className="container">
            <h2 className="section-title">施設の様子</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {images.gallery.map((img, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    paddingBottom: '75%',
                    background: '#f0f0f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onClick={() => setSelectedImage(img)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${img.src}) center/cover`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {!img.src && (
                      <div style={{ fontSize: '3rem', color: '#ccc' }}><span style={{ display: 'inline-block', width: '48px', height: '48px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
                    )}
                  </div>
                  {img.caption && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                      color: 'white',
                      padding: '1.5rem 1rem 1rem',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: '#666',
              fontStyle: 'italic'
            }}>
              ※プライバシー保護のため、利用者が写らない共用部分のみを掲載しています
            </p>
          </div>
        </section>
      )}

      {/* 特徴 */}
      <section className="section" style={{ background: '#f8f9fa', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title">このホームの特徴</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {home.features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid var(--accent-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  color: 'var(--accent-color)',
                  flexShrink: 0
                }}><span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M5 13l4 4L19 7\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M5 13l4 4L19 7\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
                <p style={{
                  margin: 0,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#444',
                  fontWeight: '500'
                }}>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 一日の流れ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">一日の流れ</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>平日のスケジュール</h3>
              <div className="schedule-list">
                {home.dailySchedule.weekday.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <span className="schedule-time">{item.time}</span>
                    <span className="schedule-activity">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3>休日のスケジュール</h3>
              <div className="schedule-list">
                {home.dailySchedule.holiday.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <span className="schedule-time">{item.time}</span>
                    <span className="schedule-activity">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 支援内容 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">支援内容</h2>
          <div className="grid grid-2">
            {home.support.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 連絡先・アクセス */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">連絡先・アクセス</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>連絡先</h3>
              <div className="contact-info">
                <p><strong>住所:</strong> {home.address}</p>
                <p><strong>電話:</strong> {home.phone}</p>
                <p><strong>担当者:</strong> {home.manager}</p>
              </div>
              <p className="note">
                見学をご希望の場合は、事前にお電話でご連絡ください。
                プライバシー保護のため、利用者の同意を得た上で実施しています。
              </p>
            </div>
            <div className="card">
              <h3>アクセス</h3>
              <div className="access-info">
                <p>詳細なアクセス方法については、お問い合わせ時にご案内いたします。</p>
                <p>公共交通機関をご利用の場合は、最寄りの駅やバス停からの経路をお教えします。</p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/contact" className="btn">お問い合わせ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 画像ライトボックス */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
            {selectedImage.caption && (
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                fontSize: '1rem',
                whiteSpace: 'nowrap'
              }}>
                {selectedImage.caption}
              </div>
            )}
            <button
              style={{
                position: 'absolute',
                top: '-3rem',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDetailPage;