import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionPage = () => {
  return (
    <div className="admission-page">
      <section className="page-header">
        <div className="container">
          <h1>入居・相談案内</h1>
          <p>自立援助ホームへの入居をお考えの方へ</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">入居について</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>対象者</h3>
              <ul>
                <li>15歳から20歳までの青少年</li>
                <li>児童養護施設等を退所した方</li>
                <li>家庭の事情により家族と暮らすことができない方</li>
                <li>自立に向けた意欲がある方</li>
              </ul>
            </div>
            <div className="card">
              <h3>費用について</h3>
              <p>食費や光熱費など実費相当分をご負担いただきます。詳細は個別にご相談させていただきます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">どのホームを選ぶべきか</h2>
          <div className="text-center">
            <p>5つのホームにはそれぞれ特色があります。あなたに最適なホームをご提案いたします。</p>
            <Link to="/homes" className="btn">全ホーム一覧を見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;