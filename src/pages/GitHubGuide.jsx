import { useState } from 'react';
import Hero from '../components/Hero';
import CodeBlock from '../components/CodeBlock';
import { githubTopics } from '../data/learningData';

export default function GitHubGuide() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const topic = githubTopics[selectedIndex];

  return (
    <>
      <Hero
        title="GitHub 활용 가이드"
        subtitle="Git 버전관리의 기초부터 GitHub를 활용한 협업 워크플로우까지 단계별로 학습합니다."
      />

      <div className="sub-nav">
        <div className="sub-nav-inner">
          {githubTopics.map((t, i) => (
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
              <CodeBlock code={topic.code} language={topic.codeLang || 'bash'} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
