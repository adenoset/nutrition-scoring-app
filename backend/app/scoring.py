from app.models import NutritionInput, NutritionScore

def calculate_nutrition_score(nutrition: NutritionInput) -> NutritionScore:
    """
    Calcule le score nutritionnel d'un aliment basé sur ses valeurs nutritionnelles.
    Le score est calculé sur 100 points avec les critères suivants:
    - Points positifs: protéines, fibres
    - Points négatifs: calories, lipides, sodium, sucres
    """
    
    # Calcul des points positifs (max 40 points)
    protein_score = min(nutrition.proteins * 2, 20)  # Max 20 points
    fiber_score = min(nutrition.fiber * 5, 20)  # Max 20 points
    positive_points = protein_score + fiber_score
    
    # Calcul des points négatifs (pénalités)
    calorie_penalty = min(nutrition.calories / 10, 20)  # Max 20 points de pénalité
    fat_penalty = min(nutrition.fats * 2, 15)  # Max 15 points de pénalité
    sodium_penalty = min(nutrition.sodium / 100, 15)  # Max 15 points de pénalité
    sugar_penalty = min(nutrition.sugars * 1.5, 10)  # Max 10 points de pénalité
    negative_points = calorie_penalty + fat_penalty + sodium_penalty + sugar_penalty
    
    # Score final (entre 0 et 100)
    raw_score = 100 + positive_points - negative_points
    final_score = max(0, min(100, raw_score))
    
    # Détermination de la note (A à E)
    if final_score >= 80:
        grade = "A"
    elif final_score >= 65:
        grade = "B"
    elif final_score >= 50:
        grade = "C"
    elif final_score >= 35:
        grade = "D"
    else:
        grade = "E"
    
    # Recommandation basée sur le score
    recommendations = {
        "A": "Excellent choix nutritionnel ! Aliment très sain.",
        "B": "Bon choix nutritionnel. Aliment sain.",
        "C": "Choix acceptable. À consommer avec modération.",
        "D": "Qualité nutritionnelle moyenne. Limiter la consommation.",
        "E": "Faible qualité nutritionnelle. À consommer occasionnellement."
    }
    
    return NutritionScore(
        name=nutrition.name,
        score=round(final_score, 2),
        grade=grade,
        calories=nutrition.calories,
        proteins=nutrition.proteins,
        carbohydrates=nutrition.carbohydrates,
        fats=nutrition.fats,
        fiber=nutrition.fiber or 0,
        sodium=nutrition.sodium or 0,
        sugars=nutrition.sugars or 0,
        recommendation=recommendations[grade]
    )
