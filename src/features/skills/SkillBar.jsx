function levelLabel(percentage, levels) {
  if (percentage >= 85) return levels.advanced
  if (percentage >= 65) return levels.intermediate
  return levels.basic
}

export function SkillBar({ skill, texts }) {
  return (
    <article className="world-card">
      <div className="world-icon" aria-hidden="true">
        {skill.name.slice(0, 2)}
      </div>

      <div className="world-info">
        <div className="skill-heading">
          <h3>{skill.name}</h3>
          <span>{skill.percentage}%</span>
        </div>

        <p>
          {texts.mode}, {texts.level}: {levelLabel(skill.percentage, texts.levels)}
        </p>

        <div
          className="skill-track"
          role="progressbar"
          aria-valuenow={skill.percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name}: ${skill.percentage}%`}
        >
          <div className="skill-progress" style={{ width: `${skill.percentage}%` }} />
        </div>
      </div>
    </article>
  )
}
