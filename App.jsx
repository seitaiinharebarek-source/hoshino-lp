import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  AlertCircle, 
  ArrowRight, 
  Timer, 
  Award,
  TrendingUp,
  Scale,
  Search,
  Activity,
  Compass,
  Layout,
  ShieldCheck,
  Rocket,
  UserCheck,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // 最終申込期限: 2026年4月24日 23:59
    const targetDate = new Date('2026-04-24T23:59:59').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased overflow-x-hidden leading-relaxed">
      {/* 1. 緊急告知バナー */}
      <div className="bg-orange-500 text-white py-3 px-2 text-center font-bold text-xs md:text-base sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-center gap-2">
          <Timer size={14} className="shrink-0" />
          <span className="whitespace-nowrap">最終申込締切：4/24(金) 23:59 まで</span>
          <span className="bg-white text-orange-600 px-2 py-0.5 rounded text-[10px] md:text-xs font-black shrink-0">
            残り {timeLeft.days}日 {timeLeft.hours}時間
          </span>
        </div>
      </div>

      {/* 2. ヒーローセクション */}
      <header className="relative bg-sky-600 text-white py-16 px-6 md:py-32 overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px] opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 mb-6 bg-sky-500/50 backdrop-blur-sm border border-sky-300/30 rounded-full text-white font-bold text-[10px] md:text-sm tracking-widest uppercase">
            Limited Online Seminar
          </div>
          <h1 className="text-3xl md:text-7xl font-black leading-tight mb-8 drop-shadow-lg break-keep sm:whitespace-pre-wrap">
            地方勤務のPTが、{"\n"}
            <span className="text-orange-400">なぜ3年で年商2000万</span>{"\n"}
            を達成できたのか？
          </h1>
          <p className="text-base md:text-3xl text-sky-50 font-medium mb-12 leading-relaxed max-w-4xl break-keep sm:whitespace-pre-wrap">
            「治せる」という確信が、僕の人生を変えた。{"\n"}
            一生モノの<span className="text-orange-300 font-bold decoration-orange-300 decoration-2 underline underline-offset-4">「本当の治療の軸」</span>を手に入れ、{"\n"}
            一歩ずつ理想のキャリアを掴むための、全記録。
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <button 
              onClick={() => scrollToSection('register')}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-white font-black py-5 px-10 rounded-2xl text-lg md:text-2xl shadow-2xl transition transform hover:scale-105 flex items-center justify-center group whitespace-nowrap"
            >
              無料で今すぐ席を確保する <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
            </button>
            <div className="text-center md:text-left text-sky-100 font-bold border-l-0 md:border-l-2 border-orange-400 pl-0 md:pl-4 text-sm md:text-xl sm:whitespace-pre-wrap">
              4/25(土) 20:00 〜 {"\n"}Zoomオンライン配信
            </div>
          </div>
        </div>
      </header>

      {/* 3. 自己紹介セクション */}
      <section className="py-20 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="text-sky-600 font-bold tracking-widest text-xs uppercase mb-2">Speaker Profile</div>
              <h2 className="text-4xl md:text-6xl font-black text-sky-900 mb-6 break-keep">星野 健太</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap">整体院 晴々 長岡院 院長</span>
                <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap">理学療法士</span>
                <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap">認知科学コーチ</span>
              </div>
              <div className="p-6 bg-sky-50 rounded-2xl border-l-8 border-orange-400 shadow-sm mb-8 text-left">
                <p className="text-sky-900 font-bold text-lg md:text-xl italic break-keep leading-snug sm:whitespace-pre-wrap">
                  「自分には何もない」と悩んだ病院勤務時代。{"\n"}
                  手取り15万円の給与明細を見て感じた不安が、僕の原点です。
                </p>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-lg break-keep text-justify">
                <p>
                  病院勤務時代、経済的な将来への不安で眠れない夜もありました。「このままでいいのか？」と自問自答を繰り返す毎日。そんな僕が、小田嶋先生という師匠に出会い、成功の仕組みを徹底的にインストールしました。
                </p>
                <p>
                  <span className="text-sky-900 font-bold underline decoration-orange-400 decoration-4 underline-offset-4">23歳で独立。初月から今まで100%黒字を継続。</span>{"\n"}
                  「独りで戦う怖さ」を知っているからこそ、最短距離で結果を出すための「最高の環境」を選びました。
                </p>
                <p>
                  現在は、地方でも圧倒的な成果を出し続け、家族との時間も大切にするライフスタイルを送っています。かつての僕と同じ悩みを持つセラピストへ、僕が下した「決断」をすべて伝えたいと思っています。
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="./プロフィール写真.png" 
                  alt="星野健太" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 技術の本質: 重心整体 */}
      <section className="py-20 px-6 bg-sky-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl md:text-5xl font-black text-sky-900 italic break-keep leading-tight text-center">「その痛み、なぜ戻るのか？」</h2>
            <p className="text-sm md:text-xl text-slate-600 font-medium break-keep sm:whitespace-pre-wrap">
              筋肉や筋膜を追う対症療法から、{"\n"}
              普遍的な「重力」へのアプローチへ。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-red-50 p-3 rounded-2xl mr-4 text-red-500"><AlertCircle /></div>
                <h3 className="text-xl font-bold text-slate-800 break-keep">一般的なアプローチ</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep mb-6">
                人によって形が違う「筋肉」や「骨」ばかり追ってしまう。結局、根本が解決しないため痛みはすぐに再発し、患者様の信頼を失います。
              </p>
              <div className="bg-red-50 p-3 rounded-xl text-red-700 font-bold text-xs md:text-sm text-center">
                これが「勉強しても稼げない」最大の原因。
              </div>
            </div>
            <div className="p-8 bg-sky-600 rounded-3xl shadow-xl text-white relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Scale size={80} /></div>
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-2xl mr-4"><ShieldCheck className="text-white" /></div>
                <h3 className="text-xl font-bold break-keep text-white">重心整体（普遍的法則）</h3>
              </div>
              <p className="text-sky-50 text-sm md:text-base leading-relaxed break-keep mb-6 font-medium text-left">
                地球の全員にかかる「重力」に重心を整える。これが、どんな症状にも迷わず対応できる「一生モノの治療の軸」になります。
              </p>
              <div className="bg-white/20 p-3 rounded-xl text-white font-bold text-xs md:text-sm text-center">
                1回1万円でも「安い」と言われる価値の正体。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 検査の重要性 */}
      <section className="py-20 px-6 bg-sky-900 text-white relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block px-4 py-1 mb-6 bg-orange-500 text-white font-bold rounded-lg shadow-lg text-xs md:text-sm">臨床の絶対ルール</div>
              <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight break-keep text-center md:text-left sm:whitespace-pre-wrap">
                検査の引き出し ＞ {"\n"}治療の引き出し
              </h2>
              <p className="text-base md:text-xl leading-relaxed text-sky-100 mb-10 break-keep">
                どれだけ手技を増やしても、「なぜそこが痛いのか」を明確に提示できなければ、患者様は納得しません。重心から原因を特定するプロセスこそが、自費診療で選ばれる最大の武器になります。
              </p>
              <div className="space-y-4 max-w-sm mx-auto md:mx-0">
                {[
                  { icon: <Search className="text-orange-400" />, text: "身体のズレを視覚化する重心評価" },
                  { icon: <Layout className="text-orange-400" />, text: "患者さんが即決する『納得の説明』" },
                  { icon: <UserCheck className="text-orange-400" />, text: "迷いをなくす最短の原因特定手順" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-sky-800/50 rounded-2xl border border-sky-700">
                    <div className="mr-4 shrink-0">{item.icon}</div>
                    <span className="text-base md:text-lg font-bold text-left break-keep leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-800 aspect-[4/5] w-full max-w-sm rounded-[3rem] overflow-hidden flex flex-col items-center justify-center p-10 text-center shadow-2xl border-4 border-white/10">
                <Target className="text-orange-500 mb-8" size={80} />
                <h4 className="text-xl md:text-2xl font-black mb-6 text-white leading-tight underline decoration-orange-500 decoration-4 underline-offset-8 break-keep sm:whitespace-pre-wrap text-center">重心を整える＝{"\n"}根本から変わる</h4>
                <p className="text-sky-200 text-sm md:text-lg leading-relaxed break-keep">
                  揉んで終わる癒やしではなく、身体を地球に適合させる仕事。だからこそ、圧倒的な信頼が最短最速で構築できるのです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. スモールスタートのステップ */}
      <section className="py-24 px-6 bg-white text-center border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 space-y-4">
            <h2 className="text-2xl md:text-5xl font-black text-sky-900 tracking-tighter break-keep italic text-center leading-tight">できるところから、一歩ずつ。</h2>
            <p className="text-sm md:text-xl text-slate-500 font-bold break-keep leading-relaxed text-center">リスクを背負って独立する前に、足元からキャリアを変える方法。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-left relative overflow-hidden group">
              <div className="bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black mb-6 shadow-md text-sm">01</div>
              <h3 className="text-xl font-bold text-sky-900 mb-4 break-keep">今の現場を変える</h3>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed break-keep">
                まずは今の臨床に「重心」の視点を取り入れる。病院勤務のままでも、目の前の一人に圧倒的な変化を感じてもらうことから、すべてが始まります。
              </p>
            </div>
            <div className="p-10 bg-orange-100 rounded-[2.5rem] border border-orange-200 relative scale-105 shadow-xl z-10 text-left">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-black mb-6 shadow-md">02</div>
              <h3 className="text-xl font-bold text-sky-900 mb-4 font-black break-keep text-orange-600 underline decoration-orange-300 decoration-4">価値を実感してもらう</h3>
              <p className="text-slate-800 font-bold leading-relaxed text-base md:text-lg break-keep leading-relaxed sm:whitespace-pre-wrap">
                身近な友人や知人に施術を。
                <span className="text-orange-600 block mt-2 underline decoration-orange-300 decoration-4 italic leading-snug">
                  「自分のできる範囲」で、{"\n"}
                  本当の価値を届ける。
                </span>
                この小さな自信の積み重ねが、将来の独立へのエンジンになります。
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-left">
              <div className="bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black mb-6 shadow-md text-sm">03</div>
              <h3 className="text-xl font-bold text-sky-900 mb-4 break-keep text-sky-700">迷わず独立へ踏み出す</h3>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed break-keep text-left">
                看板がなくても選ばれる確信を持つ。この状態になれば、独立はもはや『挑戦』ではなく『成功の確認』でしかありません。
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-2xl max-w-4xl mx-auto text-left border border-white/10">
            <div className="bg-orange-500 p-3 rounded-2xl shrink-0 animate-bounce"><Rocket size={24} /></div>
            <p className="text-base md:text-xl font-bold leading-relaxed break-keep text-white">
              「独りで悩み、試行錯誤に時間を溶かすのが最大のコストです。最短ルートは、成功者が磨き上げた環境の中にあります。」
            </p>
          </div>
        </div>
      </section>

      {/* 7. セミナー内容まとめ */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-slate-200 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-sky-900 mb-10 text-center underline decoration-orange-400 decoration-8 underline-offset-8 break-keep">
            セミナー内容の全貌
          </h2>
          <div className="space-y-6">
            {[
              "戻りのない身体を作る「重心」と「物理法則」の完全理解",
              "「検査 ＞ 治療」を具現化する、1ミリの狂いもない評価術",
              "PT1年目で手取り15万だった僕が、短期間で激変した『決断』の裏側",
              "「できるかどうか」を悩む時間を「やる方法」に変えるマインド",
              "リスクなく自費の価値を試す『第一歩』の踏み出し方",
              "「一人の独立」と「組織の仕組み」の決定的な違い",
              "最短最速で結果を出すための『ご縁』と『環境』への投資戦略"
            ].map((text, i) => (
              <div key={i} className="flex items-start text-base md:text-lg font-bold text-slate-700 leading-snug">
                <CheckCircle2 className="text-sky-500 mr-3 shrink-0 mt-1" size={20} />
                <span className="text-left break-keep leading-tight">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA セクション */}
      <section id="register" className="py-24 px-6 bg-sky-600 text-white relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500 via-sky-600 to-sky-700 opacity-95"></div>
        <div className="max-w-xl mx-auto relative z-10 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl font-black leading-tight break-keep text-white sm:whitespace-pre-wrap text-center">あなたの人生を、{"\n"}<span className="text-orange-400 italic">自ら加速させる。</span></h2>
            <p className="text-base md:text-2xl text-sky-100 font-bold leading-relaxed break-keep text-white sm:whitespace-pre-wrap text-center">
              次は、あなたの番です。現状をぶち壊し、{"\n"}<br className="md:hidden" />理想の未来を自ら掴み取りましょう。
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-slate-800 border-4 border-orange-400">
            <div className="mb-8 p-6 bg-orange-50 rounded-3xl border border-orange-200 text-center">
              <p className="text-orange-600 font-black text-xs md:text-sm mb-2 tracking-widest uppercase text-center">Special Invitation</p>
              <p className="text-slate-900 font-black text-2xl md:text-4xl italic break-keep leading-none text-center">4月24日(金) 23:59 締切</p>
              <p className="text-orange-600 font-bold text-[10px] md:text-xs mt-3 italic underline text-center">※定員に達し次第、事前通知なく終了いたします</p>
            </div>

            <a 
              href="https://my82p.com/p/r/w2nttHCF" 
              target="_blank" 
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white font-black py-6 rounded-3xl text-lg md:text-2xl shadow-xl transition transform hover:scale-[1.03] active:scale-95 text-center animate-pulse"
            >
              セミナーに無料で参加する
            </a>
            
            <p className="mt-8 text-slate-400 font-bold text-[10px] md:text-sm leading-relaxed break-keep text-center sm:whitespace-pre-wrap">
              ※ボタンをクリック後、登録ページへ移動します。{"\n"}<br className="md:hidden" />
              詳細は登録後の自動返信メールにてお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* 9. フッター */}
      <footer className="py-20 px-6 bg-sky-950 text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-orange-400 font-black text-2xl mb-4 tracking-[0.2em] uppercase text-center">整体院 晴々</p>
          <div className="w-16 h-0.5 bg-orange-500 mb-8 opacity-50"></div>
          <div className="mb-8 space-y-2">
            <p className="text-sky-200 font-bold text-[10px] md:text-sm uppercase tracking-widest italic opacity-75 text-center">院長 / 理学療法士 / 認知科学コーチ</p>
            <p className="text-4xl md:text-6xl font-black tracking-tighter text-center">星野 健太</p>
          </div>
          <p className="text-sky-800 text-[10px] tracking-widest uppercase font-bold opacity-50 text-center">© 2026 KENTA HOSHINO. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;