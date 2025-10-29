from fastapi import APIRouter, HTTPException
from app.models import NutritionInput, NutritionScore
from app.scoring import calculate_nutrition_score

router = APIRouter()

@router.post("/score", response_model=NutritionScore)
async def calculate_score(nutrition: NutritionInput):
    """
    Calcule le score nutritionnel d'un aliment.
    
    Args:
        nutrition: Données nutritionnelles de l'aliment
    
    Returns:
        Score nutritionnel avec la note et les recommandations
    """
    try:
        score_result = calculate_nutrition_score(nutrition)
        return score_result
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erreur lors du calcul du score: {str(e)}"
        )
