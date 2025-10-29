const ScoreDisplay = ({ result }) => {
  const getGradeColor = (grade) => {
    const colors = {
      'A': '#2ecc71',
      'B': '#27ae60',
      'C': '#f39c12',
      'D': '#e67e22',
      'E': '#e74c3c'
    };
    return colors[grade] || '#95a5a6';
  };

  return (
    <div className="score-display">
      <h2>Résultat du Score Nutritionnel</h2>
      
      <div className="score-header">
        <h3>{result.name}</h3>
        <div 
          className="grade-badge"
          style={{ backgroundColor: getGradeColor(result.grade) }}
        >
          {result.grade}
        </div>
      </div>

      <div className="score-value">
        <span className="score-number">{result.score}</span>
        <span className="score-max">/100</span>
      </div>

      <div className="recommendation">
        <p>{result.recommendation}</p>
      </div>

      <div className="nutrition-details">
        <h3>Détails Nutritionnels (pour 100g)</h3>
        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">Calories</span>
            <span className="detail-value">{result.calories} kcal</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Protéines</span>
            <span className="detail-value">{result.proteins} g</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Glucides</span>
            <span className="detail-value">{result.carbohydrates} g</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Lipides</span>
            <span className="detail-value">{result.fats} g</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Fibres</span>
            <span className="detail-value">{result.fiber} g</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Sucres</span>
            <span className="detail-value">{result.sugars} g</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Sodium</span>
            <span className="detail-value">{result.sodium} mg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay;
