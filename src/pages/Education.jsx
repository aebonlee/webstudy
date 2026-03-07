import Hero from '../components/Hero';
import { educationData } from '../data/learningData';
import { FiCheck } from 'react-icons/fi';

export default function Education() {
  return (
    <>
      <Hero
        title="교육과정"
        subtitle="체계적인 커리큘럼으로 백엔드 개발을 단계별로 학습하세요."
      />

      <div className="main-section">
        <div className="card-grid">
          {educationData.map((course, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-card-header">
                <div className="edu-card-level">{course.level}</div>
                <div className="edu-card-title">{course.title}</div>
              </div>
              <div className="edu-card-body">
                <p className="edu-card-desc">{course.description}</p>
                <ul className="edu-card-topics">
                  {course.topics.map((topic, j) => (
                    <li key={j}>
                      <FiCheck size={14} color="var(--primary)" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
