import { useState } from 'react';
import Hero from '../components/Hero';
import CodeBlock from '../components/CodeBlock';
import { databaseTopics } from '../data/learningData';

export default function DatabaseGuide() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const topic = databaseTopics[selectedIndex];

  return (
    <>
      <Hero
        title="데이터베이스 가이드"
        subtitle="Supabase와 관계형 데이터베이스를 활용하여 데이터를 효율적으로 관리하는 방법을 학습합니다."
      />

      <div className="sub-nav">
        <div className="sub-nav-inner">
          {databaseTopics.map((t, i) => (
            <button
              key={i}
              className={`sub-nav-tab${selectedIndex === i ? ' active' : ''}`}
              onClick={() => setSelectedIndex(i)}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      <div className="main-section">
        <div className="topic-card">
          <div className="topic-card-header">
            <div className="topic-card-icon">{topic.icon}</div>
            <div className="topic-card-title">{topic.title}</div>
          </div>
          <div className="topic-card-body">
            <p>{topic.description}</p>
            {topic.content.map((section, idx) => (
              <div key={idx}>
                {section.subtitle && <h4>{section.subtitle}</h4>}
                {section.text && <p>{section.text}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
            {topic.code && (
              <CodeBlock code={topic.code} language={topic.codeLang || 'sql'} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
