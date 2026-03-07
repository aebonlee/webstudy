import { useState } from 'react';
import Hero from '../components/Hero';
import CodeBlock from '../components/CodeBlock';
import { deployTopics } from '../data/learningData';

export default function DeployGuide() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const topic = deployTopics[selectedIndex];

  return (
    <>
      <Hero
        title="배포 가이드"
        subtitle="개발한 서비스를 실제 서버에 배포하고 운영하는 방법을 단계별로 안내합니다."
      />

      <div className="sub-nav">
        <div className="sub-nav-inner">
          {deployTopics.map((t, i) => (
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
              <CodeBlock code={topic.code} language={topic.codeLang || 'yaml'} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
