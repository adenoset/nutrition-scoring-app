import { useState } from 'react';
import axios from 'axios';

const Calculator = ({ onScoreCalculated }) => {
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    proteins: '',
    carbohydrates: '',
    fats: '',
    fiber: '',
    sodium: '',
    sugars: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8000/api/score', {
        name: formData.name,
        calories: parseFloat(formData.calories),
        proteins: parseFloat(formData.proteins),
        carbohydrates: parseFloat(formData.carbohydrates),
        fats: parseFloat(formData.fats),
        fiber: parseFloat(formData.fiber) || 0,
        sodium: parseFloat(formData.sodium) || 0,
        sugars: parseFloat(formData.sugars) || 0
      });

      onScoreCalculated(response.data);
    } catch (err) {
      setError('Erreur lors du calcul du score. Vérifiez que le serveur est démarré.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="calculator-form" onSubmit={handleSubmit}>
      <h2>Informations Nutritionnelles</h2>
      
      <div className="form-group">
        <label htmlFor="name">Nom de l'aliment *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="calories">Calories (kcal/100g) *</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            step="0.1"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="proteins">Protéines (g/100g) *</label>
          <input
            type="number"
            id="proteins"
            name="proteins"
            value={formData.proteins}
            onChange={handleChange}
            step="0.1"
            min="0"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="carbohydrates">Glucides (g/100g) *</label>
          <input
            type="number"
            id="carbohydrates"
            name="carbohydrates"
            value={formData.carbohydrates}
            onChange={handleChange}
            step="0.1"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fats">Lipides (g/100g) *</label>
          <input
            type="number"
            id="fats"
            name="fats"
            value={formData.fats}
            onChange={handleChange}
            step="0.1"
            min="0"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fiber">Fibres (g/100g)</label>
          <input
            type="number"
            id="fiber"
            name="fiber"
            value={formData.fiber}
            onChange={handleChange}
            step="0.1"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sugars">Sucres (g/100g)</label>
          <input
            type="number"
            id="sugars"
            name="sugars"
            value={formData.sugars}
            onChange={handleChange}
            step="0.1"
            min="0"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="sodium">Sodium (mg/100g)</label>
        <input
          type="number"
          id="sodium"
          name="sodium"
          value={formData.sodium}
          onChange={handleChange}
          step="0.1"
          min="0"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <button type="submit" disabled={loading}>
        {loading ? 'Calcul en cours...' : 'Calculer le Score'}
      </button>
    </form>
  );
};

export default Calculator;
