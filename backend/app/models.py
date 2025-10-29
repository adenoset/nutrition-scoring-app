from pydantic import BaseModel, Field
from typing import Optional

class NutritionInput(BaseModel):
    """Modèle pour les données nutritionnelles d'entrée"""
    name: str = Field(..., description="Nom de l'aliment")
    calories: float = Field(..., ge=0, description="Calories pour 100g")
    proteins: float = Field(..., ge=0, description="Protéines en grammes pour 100g")
    carbohydrates: float = Field(..., ge=0, description="Glucides en grammes pour 100g")
    fats: float = Field(..., ge=0, description="Lipides en grammes pour 100g")
    fiber: Optional[float] = Field(0, ge=0, description="Fibres en grammes pour 100g")
    sodium: Optional[float] = Field(0, ge=0, description="Sodium en milligrammes pour 100g")
    sugars: Optional[float] = Field(0, ge=0, description="Sucres en grammes pour 100g")

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Pomme",
                "calories": 52,
                "proteins": 0.3,
                "carbohydrates": 14,
                "fats": 0.2,
                "fiber": 2.4,
                "sodium": 1,
                "sugars": 10.4
            }
        }

class NutritionScore(BaseModel):
    """Modèle pour le résultat du scoring nutritionnel"""
    name: str
    score: float = Field(..., ge=0, le=100, description="Score nutritionnel sur 100")
    grade: str = Field(..., description="Note de A à E")
    calories: float
    proteins: float
    carbohydrates: float
    fats: float
    fiber: float
    sodium: float
    sugars: float
    recommendation: str = Field(..., description="Recommandation basée sur le score")

class HealthResponse(BaseModel):
    """Modèle pour la réponse de santé de l'API"""
    status: str
