from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

app = FastAPI(
    title="Nutrition Scoring API",
    description="API pour calculer les scores nutritionnels des aliments",
    version="1.0.0"
)

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclusion des routes
app.include_router(router, prefix="/api", tags=["nutrition"])

@app.get("/")
async def root():
    return {"message": "Bienvenue sur l'API Nutrition Scoring"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
